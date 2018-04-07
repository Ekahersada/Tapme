import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodePage } from '../barcode/barcode';


@IonicPage()
@Component({
  selector: 'page-terimalangsung',
  templateUrl: 'terimalangsung.html',
})
export class TerimalangsungPage {
  loading: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,

  ) {
  }

  ionViewDidLoad() {
   
  }

  gotoBarcode(){
    this.loading = true;
   
    setTimeout(() => {
        this.loading = false;
        this.navCtrl.push(BarcodePage,{ket:'langsung'});

    }, 2000);

  }




}
