import { Component } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { SpeicherService } from '../speicher.service';
import { DialogToastHelferService } from '../dialog-toast-helfer.service';
import { AbkBedeutung } from '../abk-bedeutung';

/**
 * Seite um alle Abkürzungen und die zugehörigen Bedeutungen anzuzeigen.
 */
@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage {

  /**
   * Promise für Anzahl der Abkürzungen.
   */
  public anzahlAbkuerzungenPromise : Promise<number>;

  /**
   * Promise auf Array mit Objekten der Klasse `AbkBedeutung`, die in einer Liste dargestellt werden.
   */
  public abkBedeutungenArrayPromise: Promise<AbkBedeutung[]>;


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private speicherService         : SpeicherService,
               private alertCtrl               : AlertController,
               private dialogToastHelferService: DialogToastHelferService ) {}


  /**
   * Lifecycle-Methode, die Anzahl der gespeicherten Abkürzungen aktualisiert.
   * Es wird die Lifecycle-Methode `ionViewWillEnter()` statt `ionViewDidEnter()`
   * überschrieben, weil so der Wert schon aktualisiert wird, bevor die Seite
   * sichtbar wird (man sieht also nicht, wie die Zahl geändert wird).
   * <br><br>
   *
   * Doku zu Lifecycle-Methoden von Ionic:
   * https://ionicframework.com/docs/angular/lifecycle
   */
  private ionViewWillEnter() {

    this.holeDatenVonSpeicherService();
  }


  /**
   * Holt Daten von SpeicherService und kopiert sie in Member-Variablen.
   * Muss in Lifecycle-Methode vor Laden der Seite aufgerufen werden und auch nach Löschen eines
   * Listeneintrags (einer Abkürzung).
   */
  private holeDatenVonSpeicherService(): void {

    this.anzahlAbkuerzungenPromise  = this.speicherService.getAnzahlGespeicherteAbkuerzungen();

    this.abkBedeutungenArrayPromise = this.speicherService.holeAlleAbkuerzungenUndBedeutungen();
  }


  /**
   * Button-Event-Handler für Löschen einer einzelnen Abkürzung.
   *
   * @param abkuerzung  Zu löschende Abkürzung.
   *
   * @param slider  Slider-Element, das im Fall des Abbruchs programmatisch zu schließen ist.
   */
  public async onLoeschen(abkuerzung: string, slider: IonItemSliding) {

    const jaButton = {
        text: "Weiter",
        handler: async () => {

            console.log(`Sollte jetzt ${abkuerzung} löschen.`);
            await this.speicherService.abkuerzungLoeschen(abkuerzung);

            const erfolgsNachricht = `Abkürzung "${abkuerzung}" wurde mit allen Bedeutungen gelöscht.`;
            this.dialogToastHelferService.zeigeToast(erfolgsNachricht);

            this.holeDatenVonSpeicherService();
        }
    };

    const abbrechenButton = {
        text: "Abbrechen",
        role: "Cancel",
        handler: () => {

            this.dialogToastHelferService.zeigeToast("Löschen abgebrochen.");

            slider.close();
        }
    };

    const sicherheitsfrage = `Wollen Sie die Abkürzung "${abkuerzung}" mit allen Bedeutungen wirklich löschen?`;

    const meinAlert =
          await this.alertCtrl.create({
              header         : "Sicherheitsfrage",
              message        : sicherheitsfrage,
              backdropDismiss: false,
              buttons        : [ jaButton, abbrechenButton ]
          });

    await meinAlert.present();
  }

}
