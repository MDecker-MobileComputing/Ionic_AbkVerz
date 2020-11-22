import { Component } from '@angular/core';
import { SpeicherService } from '../speicher.service';

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


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private speicherService: SpeicherService) {

    this.anzahlFarbenPromise = speicherService.getAnzahlGespeicherteAbkuerzungen();
  }

}
