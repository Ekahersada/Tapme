import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { VerifikasiPhonePage } from '../verifikasi-phone/verifikasi-phone';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  valid: boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  gotoVerifikasi(){
    this.valid = true;

    setTimeout(()=>{
      this.navCtrl.push(VerifikasiPhonePage);
    },3000)
  }

}
