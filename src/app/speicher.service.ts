import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/**
 * Service-Klasse kapselt Persistenz mit "ionic-storage"
 * ( https://ionicframework.com/docs/angular/storage#ionic-storage ).
 *
 * "ionic-storage" Projekt hinzufügen: npm install --save @ionic/storage
 */
@Injectable({
  providedIn: 'root'
})
export class SpeicherService {

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private storage: Storage) { }


  /**
   * Getter für Gesamtanzahl der gespeicherten Abkürzungen (eine Abkürzung
   * kann aber mehr als eine Bedeutung haben).
   *
   * @return  Promise mit Anzahl der aktuell gespeicherten Abkürzungen.
   */
  getAnzahlGespeicherteAbkuerzungen() {

    let anzahlPromise = this.storage.length();

    return anzahlPromise;
  }

}
