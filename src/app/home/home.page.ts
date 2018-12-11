import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private modal:ModalController){}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
     this.openModal();
  }

  async openModal()
  {
    const modal = await this.modal.create({
      component: ModalPagePage,
      componentProps:{

      }

    });
    modal.present();
  }
}
