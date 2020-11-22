import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/**
 * Service-Klasse kapselt Persistenz mit [ionic-storage]( https://ionicframework.com/docs/angular/storage#ionic-storage ).
 * <br><br>
 *
 * "ionic-storage" Projekt hinzufügen: `npm install --save @ionic/storage`
 * <br><br>
 * 
 * "ionic storage" stellt einen Key-Value-Speicher zu Verfügung. 
 * Wir verwenden die Abkürzungen (nach Normierung auf Kleinbuchstaben) als Key,
 * die Bedeutung(en) wird/werden unter diesem Key bespeichert.
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


  /**
   * Abkürzung und Wert speichern.
   * 
   * @param abkuerzung  Abkürzung, wird (nach Normierung) als Key verwendet.
   *  
   * @param bedeutung   Bedeutung für die Abkürzung, wird (nach Trimming) als Wert verwendet.
   * 
   * @return  Promise-Objekt, das den Zustand `fulfilled` annimmt, wenn das Speichern erfolgreich war.
   */
  speichereBedeutungFuerAbkuerzung(abkuerzung: string, bedeutung: string) {

    const abkuerzungNormiert = abkuerzung.trim().toLowerCase();

    const bedeutungNormiert = bedeutung.trim();

    let gespeichertPromise = this.storage.set(abkuerzungNormiert, bedeutungNormiert);

    return gespeichertPromise;
  }

}
