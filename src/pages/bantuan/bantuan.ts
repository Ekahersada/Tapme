import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatAdminPage } from '../chat-admin/chat-admin';

/**
 * Generated class for the BantuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bantuan',
  templateUrl: 'bantuan.html',
})
export class BantuanPage {
  help: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.help = 'faq'
  }

  gotoChat(){
    this.navCtrl.push(ChatAdminPage);
  }

}
