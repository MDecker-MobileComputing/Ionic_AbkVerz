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
 * Wir verwenden die Abkürzungen (nach Normierung auf Großbuchstaben) als Key,
 * die Bedeutung(en) wird/werden unter diesem Key bespeichert.
 * <br><br>
 * 
 * Beispiele:
 * * "OOO": [ "Out of Office", "Out of Order" ]
 * * "AVD": [ "Android Virtual Device (Emulator-Instanz" ]
 */
@Injectable({
  providedIn: 'root'
})
export class SpeicherService {

  /**
   * Konstruktor für Dependency Injection.
   */
  constructor(private storage: Storage ){}


  /**
   * Getter für Gesamtanzahl der gespeicherten Abkürzungen (eine Abkürzung
   * kann aber mehr als eine Bedeutung haben).
   *
   * @return  Promise mit Anzahl der aktuell gespeicherten Abkürzungen.
   */
  async getAnzahlGespeicherteAbkuerzungen() {

    let anzahlPromise = this.storage.length();

    return anzahlPromise;
  }


  /**
   * Sucht nach Bedeutungen für die als Argument übergebene Abkürzung. Es können keine, eine
   * oder mehrere Bedeutungen für eine Abkürzung gefunden werden.
   * 
   * @param abkuerzung   Abkürzung, für die nach Bedeutungen gesucht werden soll.
   * 
   * @return  Promise mit String-Array, der die für die Abkürzung gefunden Bedeutungen enthält.
   *          Wenn keine Bedeutungen für die Abkürzung gefunden wurden, dann ist der Wert `null`
   *          (aber keine rejected Promise). 
   */
  async holeBedeutungenFuerAbk(abkuerzung: string): Promise<any> {

    const abkuerzungNormiert = abkuerzung.trim().toUpperCase(); 

    return this.storage.get(abkuerzungNormiert);
  }


  /**
   * Abkürzung und Bedeutung speichern. Wenn für die Abkürzung noch kein Bedeutung gespeichert
   * ist, dann wird der Eintrag ganz neu angelegt. Wenn es schon eine oder mehrere Bedeutungen
   * für die Abkürzung gibt, dann wird die neue Bedeutung zum Array der Bedeutungen hinzufügt.
   * 
   * @param abkuerzung  Abkürzung, wird (nach Normierung) als Key verwendet.
   *  
   * @param bedeutung  Bedeutung für die Abkürzung, wird (nach Trimming) als Wert verwendet.
   * 
   * @return  `true` wenn Speichern erfolgreich war, sonst `false`.
   */
  async speichereBedeutungFuerAbkuerzung(abkuerzung: string, bedeutung: string): Promise<any> {

    const abkuerzungNormiert = abkuerzung.trim().toUpperCase();

    const bedeutungArray = [ bedeutung.trim(), bedeutung.trim() ];

    const gespeichertPromise = this.storage.set(abkuerzungNormiert, bedeutungArray);

    gespeichertPromise.then( function() {

      return true;

    }).catch( function(error) {

      return false;
    });
  }

}
