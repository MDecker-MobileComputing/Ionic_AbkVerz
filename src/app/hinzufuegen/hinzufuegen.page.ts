import { Component } from '@angular/core';
import { SpeicherService } from '../speicher.service';
import { DialogToastHelferService } from '../dialog-toast-helfer.service' ;


@Component({
  selector: 'app-hinzufuegen',
  templateUrl: './hinzufuegen.page.html',
  styleUrls: ['./hinzufuegen.page.scss'],
})
export class HinzufuegenPage {

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */
  private abkuerzung: string = "";

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */  
  private bedeutung: string = "" ;


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private speicherService: SpeicherService, 
               private dialogToastHelferService: DialogToastHelferService
             ) {}

  /**
   * Event-Handler-Methode für Button "Hinzufügen".
   */
  private onHinzufuegenButton() {

    let promise = this.speicherService.speichereBedeutungFuerAbkuerzung(this.abkuerzung, this.bedeutung);

    promise.then( () => {

      this.abkuerzung = "";
      this.bedeutung  = "";

      this.dialogToastHelferService.zeigeToast("Erfolgreich gespeichert.");

    }).catch( () => {

      this.dialogToastHelferService.zeigeDialog("Fehler", "Speichern fehlgeschlagen");
    });

  }

}
