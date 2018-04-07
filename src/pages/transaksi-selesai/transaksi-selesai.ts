import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransaksiSelesaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaksi-selesai',
  templateUrl: 'transaksi-selesai.html',
})
export class TransaksiSelesaiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }
  back(){
    this.navCtrl.pop();
  }

}
