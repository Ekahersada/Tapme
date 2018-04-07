import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { MenuTabsPage } from '../menu-tabs/menu-tabs';

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class PinPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {

  }
  dismiss(){
    this.viewCtrl.dismiss({b:true});
  }

  showConfirm() {
    this.viewCtrl.dismiss();
    let cek = this.navParams.data.from;
    if(cek == 'penarikan'){
      this.alertPenarikan();
    } else {
      this.pembayaranBerhasil();
    }
    
   }
   alertPenarikan(){
    let confirm = this.alertCtrl.create({
      title: 'Terimakasih',
       message: 'Penarikan saldo masih dalam proses menunggu persetujuan Admin',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
   }

   pembayaranBerhasil(){
    let confirm = this.alertCtrl.create({
      title: 'Pembayaran Berhasil',
       message: 'Anda mendapatkan +1000 point, segera kumpulkan point lebih banyak lagi',
      buttons: [
        {
          text: 'OKE',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
   }

  

  PromptNewPin() {
    let alert = this.alertCtrl.create({
      title: 'PIN Baru',
      message: 'Pin ini digunakan untuk transaksi pembayaran, bukan password login',
      inputs: [
        {
          name: 'New PIN',
          placeholder: 'New PIN',
          type: 'password'
        },
        {
          name: 'Confom PIN',
          placeholder: 'Confom PIN',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }

  lupaPin() {
    let alert = this.alertCtrl.create({
      title: 'Reset PIN ?',
      message: 'Kami akan mengirimkan email kepada anda, berupa link untuk reset PIN. Silahkan memeriksa email anda, dan mengikuti petunjuk tersebut',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset PIN',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }


}
