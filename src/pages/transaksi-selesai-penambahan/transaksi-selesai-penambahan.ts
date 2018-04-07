import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransaksiSelesaiPenambahanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaksi-selesai-penambahan',
  templateUrl: 'transaksi-selesai-penambahan.html',
})
export class TransaksiSelesaiPenambahanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransaksiSelesaiPenambahanPage');
  }

}
