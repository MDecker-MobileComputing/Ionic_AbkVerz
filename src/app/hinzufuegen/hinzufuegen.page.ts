import { Component } from '@angular/core';
import { SpeicherService } from '../speicher.service';
import { DialogToastHelferService } from '../dialog-toast-helfer.service' ;

/**
 * Page-Klasse zum Hinzufügen von neuen Bedeutungen zu bereits bekannten oder neuen Abkürzungen.
 * <br><br>
 *
 * Verzeichnis mit vielen engl. Abkürzungen: https://www.abbreviations.com
 */
@Component({
  selector: 'app-hinzufuegen',
  templateUrl: './hinzufuegen.page.html',
  styleUrls: ['./hinzufuegen.page.scss'],
})
export class HinzufuegenPage {

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */
  public abkuerzung: string = "";

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */
  public bedeutung: string = "" ;


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private speicherService         : SpeicherService,
               private dialogToastHelferService: DialogToastHelferService
             ) {}


  /**
   * Event-Handler-Methode für Button "Hinzufügen".
   */
  public async onHinzufuegenButton() {

    if (this.abkuerzung.trim().length === 0) {

      this.dialogToastHelferService.zeigeDialog("Ungültige Eingabe", "Keinen Wert für 'Abkürzung' eingegeben.");
      return;
    }
    if (this.bedeutung.trim().length === 0) {

      this.dialogToastHelferService.zeigeDialog("Ungültige Eingabe", "Keinen Wert für 'Bedeutung' eingegeben.");
      return;
    }


    // Eigentliches Speichern
    try {

       const anzahlBedeutungen = await this.speicherService.speichereBedeutungFuerAbkuerzung(this.abkuerzung, this.bedeutung);

       this.dialogToastHelferService.zeigeToast( `Bedeutung Nr. ${anzahlBedeutungen} für Abkürzung "${this.abkuerzung}" gespeichert.` );

       this.abkuerzung = "";
       this.bedeutung  = "";

    } catch (fehlerObjekt) {

        this.dialogToastHelferService.zeigeDialog("Fehler", `Speichern fehlgeschlagen: ${fehlerObjekt}`);
    }
  }

}