import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';
import { MenuTabsPage } from '../menu-tabs/menu-tabs';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  qrcode:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private brightness: Brightness
  ) {
  }

  ionViewDidLoad() {
    let ket = this.navParams.data.ket;
    if(ket == 'langsung'){
      this.qrcode = 'langsung'
    } else {
      this.qrcode = 'nota'
    }

    let brightnessValue: number = 1;
    this.brightness.setBrightness(brightnessValue);
  }
  ionViewWillUnload(){
    let brightnessValue: number = -1.0;
    this.brightness.setBrightness(brightnessValue);
  }

  AlertTerimaLangsung() {
    this.navCtrl.setRoot(MenuTabsPage);
    // let a = this.navCtrl.getPrevious().index;
    // this.navCtrl.remove(0,a);

    let alert = this.alertCtrl.create({
    title: 'Telah diterima',
    subTitle: 'Anda telah menerima +IDR 100.000,-',
    buttons: [ {
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          // this.navCtrl.setRoot(TransaksiPage)
        }
      }]
  });
  alert.present();
}

}
