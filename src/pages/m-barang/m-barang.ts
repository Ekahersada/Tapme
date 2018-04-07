import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MBarangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m-barang',
  templateUrl: 'm-barang.html',
})
export class MBarangPage {
  jumlah:number = 1;
  total:number;
  harga:number = 10000;
  hapus:any;
  disc: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    this.Total(this.jumlah);
  }
  ionViewDidEnter(){
    let cek = this.navParams.data.from;
    this.hapus = cek;
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  kurang(){
    if(this.jumlah >= 1){
    this.jumlah--;
      this.Total(this.jumlah);
    }
  }
  tambah(){
    this.jumlah++;
    this.Total(this.jumlah);

  }

  Total(e){
    this.total = e * this.harga;
    this.jumlah = e;
    if(this.disc){
      this.discount(this.disc);
    }
  }


  discount(e){
    this.total = this.jumlah * this.harga;
    if(e){
    let dis =this.total - (this.total * (e / 100));
    this.total = dis;
    } else {
      let dis =this.total - (this.total * (e / 100));
      this.total = dis;
    }
  }
  pilih(){
    this.viewCtrl.dismiss({from:'pilih'});
  }



}
