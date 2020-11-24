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
  constructor(private speicherService: SpeicherService) {}


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
  }

}
