import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx'
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  barcodeData: any;
  options:BarcodeScannerOptions ;
  constructor(private barcodeScanner: BarcodeScanner, private modal:ModalController){}

  scan(){
    this.options = {
      showTorchButton : true ,
      showFlipCameraButton	: true
  }
   this.barcodeScanner.scan(this.options).then(barcodeData => {
      this.barcodeData = barcodeData.text;
      this.openModal();
     }).catch(err => {
         console.log('Error', err);
     });
    
  // this.openModal();
  }

  async openModal()
  {
    const modal = await this.modal.create({
      component: ModalPagePage,
      componentProps:{ data: this.barcodeData}

    });
    modal.present();
  }
}
