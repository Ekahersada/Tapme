import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ActionSheetController,ToastController } from 'ionic-angular';
import { TambahBarangPage } from '../tambah-barang/tambah-barang';
import { MBarangPage } from '../m-barang/m-barang';



@IonicPage()
@Component({
  selector: 'page-daftar-barang',
  templateUrl: 'daftar-barang.html',
})
export class DaftarBarangPage {
  User:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private actionCtrl: ActionSheetController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarBarangPage');
  }

  tambahbarang(){
    this.navCtrl.push(TambahBarangPage);
  }

  pilihItem(){
    let profileModal = this.modalCtrl.create(MBarangPage,{from: 'daftar'}, {cssClass:'modal-edit'});
    profileModal.onDidDismiss(data => {
      if(data){
        if(data.from){
          console.log(data.from);
          this.navCtrl.pop();
        }
      }
    });
    profileModal.present();
  }

  press(e){
    this.presentActionSheet();
  }

  presentActionSheet() {
    let actionSheet = this.actionCtrl.create({
      title: 'Nasi Goreng',
      cssClass:'action-edit',
      buttons: [
        {
          text: 'Ubah',
          role: 'destructive',
          handler: () => {
           this.navCtrl.push(TambahBarangPage,{from: 'daftar'})
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            this.toast();
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  toast(){
    let toast = this.toastCtrl.create({
      message:'Item NSG01-Nasi Goreng telah dihapus',
      duration: 3000
    })
    toast.present();
  }

}
