import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DaftarBarangPage } from '../daftar-barang/daftar-barang';
import { MBarangPage } from '../m-barang/m-barang';
import { TerimalangsungPage } from '../terimalangsung/terimalangsung';
import { BarcodePage } from '../barcode/barcode';



@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaPage');
  }
  gotoDaftarBarang(){
    this.navCtrl.push(DaftarBarangPage);
  }
  presentActionSheet(){
    let profileModal = this.modalCtrl.create(MBarangPage,{from: 'nota'}, {cssClass:'modal-edit'});
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
  PageCode(){
    this.navCtrl.push(BarcodePage);
  }
  hapusNota(){
    this.navCtrl.pop();
  }


}
