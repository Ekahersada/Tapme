import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MenuTabsPage } from '../menu-tabs/menu-tabs';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoBeranda(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    setTimeout(()=>{
      this.navCtrl.setRoot(MenuTabsPage);
    },1000);

    setTimeout(()=>{
      loader.dismiss();
    },3000)
    
  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
