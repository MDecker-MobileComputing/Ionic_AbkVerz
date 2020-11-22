import { Component } from '@angular/core';
import { SpeicherService } from '../speicher.service';
import { DialogToastHelferService } from '../dialog-toast-helfer.service' ;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Abkürzung, für die die Bedeutungen gesucht werden sollen; wird mit Two-Way-Binding an `ion-input`-Element gebunden. */
  private abkuerzung: string = "";

  constructor(private dialogToastHelferService: DialogToastHelferService,
              private speicherService         : SpeicherService ) {}


  /**
   * Event-Handler-Methode für Buttons zum Suchen nach einer Abkürzung
   */
  private onSuchenButton() {

    if (!this.abkuerzung || this.abkuerzung.trim().length == 0 ) {
     
      this.dialogToastHelferService.zeigeDialog("Ungültige Eingabe", "Bitte zu suchende Abkürzung eingeben!");
      return;
    }

    const bedeutungenPromise = this.speicherService.holeBedeutungenFuerAbk(this.abkuerzung);

    bedeutungenPromise.then( (bedeutungen) => {

      if (bedeutungen !== null && bedeutungen !== undefined) {

        this.dialogToastHelferService.zeigeDialog(`Ergebnis für "${this.abkuerzung}":`, bedeutungen );

      } else {

        this.dialogToastHelferService.zeigeDialog("Nichts gefunden", `Keine Bedeutungen für "${this.abkuerzung}" gefunden.` );

      }
      

    }).catch( (fehler) => {

      this.dialogToastHelferService.zeigeDialog("Fehler", `Fehler während Suche: ${fehler}`);

    });
  }

}
