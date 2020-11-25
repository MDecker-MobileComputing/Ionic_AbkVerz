import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SpeicherService } from '../speicher.service';
import { DialogToastHelferService } from '../dialog-toast-helfer.service' ;

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
   * Asynchrone Funktion getAnzahlGespeicherteFarben() liefert Promise zurück, der bei Interpolation
   * in UI durch Pipe "async" aufgelöst wird.
   */
  private anzahlFarbenPromise : Promise<number>;

  private abkBedeutungenArrayPromise: Promise<String[]>;


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private speicherService         : SpeicherService,
               private alertCtrl               : AlertController,
               private dialogToastHelferService: DialogToastHelferService ) {}


  /**
   * Lifecycle-Methode, die Anzahl der gespeicherten Abkürzungen aktualisiert.
   * Es wird die Lifecycle-Methode `ionViewWillEnter()`  statt `ionViewDidEnter()`
   * überschrieben, weil so der Wert schon aktualisiert wird, bevor die Seite
   * sichtbar wird (man sieht also nicht, wie die Zahl geändert wird).
   * <br><br>
   *
   * Doku zu Lifecycle-Methoden von Ionic:
   * https://ionicframework.com/docs/angular/lifecycle
   */
  private ionViewWillEnter() {

    this.anzahlFarbenPromise = this.speicherService.getAnzahlGespeicherteAbkuerzungen();

    this.abkBedeutungenArrayPromise = this.speicherService.holeAlleAbkuerzungenUndBedeutungen();
  }


  /**
   * Button-Event-Handler für Löschen.
   *
   * @param abkuerzung  Zu löschende Abkürzung
   */
  private async onLoeschen(abkuerzung: string) {

    const jaButton = {
        text: "Weiter",
        handler: async () => {

            console.log(`Sollte jetzt ${abkuerzung} löschen.`);
            await this.speicherService.abkuerzungLoeschen(abkuerzung);

            const erfolgsNachricht = `Abkürzung ${abkuerzung} wurde mit allen Bedeutungen gelöscht.`;
            this.dialogToastHelferService.zeigeToast(erfolgsNachricht);
        }
    };

    const abbrechenButton = {
        text: "Abbrechen",
        role: "Cancel",
        handler: () => {

            this.dialogToastHelferService.zeigeToast("Löschen abgebrochen.");
        }
    };

    const sicherheitsfrage = `Wollen Sie die Abkürzung "${abkuerzung}" mit allen Bedeutungen wirklich löschen?`;

    const meinAlert =
          await this.alertCtrl.create({
              header  : "Sicherheitsfrage",
              message : sicherheitsfrage,
              backdropDismiss: false,
              buttons : [ jaButton, abbrechenButton ]
          });

    await meinAlert.present();
  }


}
