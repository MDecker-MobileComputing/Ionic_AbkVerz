import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


/**
 * Klasse für Hilfsservice zur Erzeugung von Dialogen (Alerts) und Toasts.
 * Im Gegensatz zu Dialogen verschwinden Toasts wieder von selbst.
 * Für Fehlermeldungen sollten Dialoge verwendet werden.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogToastHelferService {

  constructor( private alertCtrl      : AlertController,
               private toastController: ToastController ) {}


  /**
   * Alert/Dialog anzeigen.
   *
   * @param title  Dialog-Titel, z.B. "Fehler" oder "Ungültige Eingabe".
   *
   * @param nachricht  Eigentlich Nachricht des Dialogs.
   */
  async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }


  /**
   * Toast anzeigen. Sollte nicht für die Anzeige von Fehlermeldungen verwendet werden.
   *
   * @param nachricht  Anzuzeigender Text
   */
  async zeigeToast(nachricht: string) {

    const toast =
          await this.toastController.create({
              message : nachricht,
              duration: 2000  // 2000 ms = 2 seconds
          });

    await toast.present();
  }

}
