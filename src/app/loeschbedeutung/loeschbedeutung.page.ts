import { Component, OnInit } from '@angular/core';
import { DialogToastHelferService } from '../dialog-toast-helfer.service' ;

@Component({
  selector: 'app-loeschbedeutung',
  templateUrl: './loeschbedeutung.page.html',
  styleUrls: ['./loeschbedeutung.page.scss'],
})
export class LoeschbedeutungPage  {

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */
  private abkuerzung: string = "";

  /** Variable wird mit Two-Way-Binding an <ion-input> gebunden. */
  private bedeutung: string = "" ;

    /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private dialogToastHelferService: DialogToastHelferService) { }

  /**
   * Event-Handler für Button "Bedeutung löschen".
   */
  private onBedeutungLoeschen() {

    const abkuerzTrimmed   = this.abkuerzung.trim();
    const bedeutungTrimmed = this.bedeutung.trim();

    if (abkuerzTrimmed.length === 0) {

      this.dialogToastHelferService.zeigeDialog("Ungültige Eingabe",  "Keine Abkürzung eingegeben.");
      return;
    }
    if (bedeutungTrimmed.length === 0) {

      this.dialogToastHelferService.zeigeDialog("Ungültige Eingabe",  "Keine Bedeutung eingegeben.");
      return;
    }

    const str = `Sollte jetzt Bedeutung "${bedeutungTrimmed}" von Abkürzung "${abkuerzTrimmed}" löschen, ist aber noch nicht implementiert.`;
    this.dialogToastHelferService.zeigeDialog("Fehler", str );
  }

}
