import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DetailTransaksiPage } from '../detail-transaksi/detail-transaksi';

/**
 * Generated class for the DaftarTransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftar-transaksi',
  templateUrl: 'daftar-transaksi.html',
})
export class DaftarTransaksiPage {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   let a = this.content.getContentDimensions().contentBottom;
    console.log( a );
  }

  PageTransaksidetail(){
    this.navCtrl.push(DetailTransaksiPage);
  }

}
