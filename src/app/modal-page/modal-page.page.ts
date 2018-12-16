import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import {FetchDataService} from '../fetch-data.service';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  barcodeData: any;
  flag:boolean=false;
  constructor(private nav:NavParams, private modalCtrl:ModalController, private fetch:FetchDataService) { }

  ngOnInit() {
    this.barcodeData = this.nav.get('data');
    this.fetch.fetchData(this.barcodeData);
    
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  setFlag()
  {
    this.flag = !this.flag;
  }
}
