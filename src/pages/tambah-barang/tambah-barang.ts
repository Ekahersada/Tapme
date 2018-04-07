import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tambah-barang',
  templateUrl: 'tambah-barang.html',
})
export class TambahBarangPage {
  proses: boolean = false;
  valid: boolean = false;
  loading: boolean = false;
  ubah:boolean = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController, 
  ) {
  }

  ionViewDidLoad() {
   let a =  this.navParams.data.from;
   if(a == 'daftar'){
    this.ubah = true;
   }
  }

  simpan(){
    this.valid = true;
    this.loading = true;

    setTimeout(()=>{
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message:'Item NSG01 Nasi Goreng telah ditambahkan',
          duration: 3000
        })
        toast.present();
    },2000)
  }

  simpanperubahan(){
    this.valid = true;
    this.loading = true;

    setTimeout(()=>{
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
          message:'Item NSG01 Nasi Goreng telah diubah',
          duration: 3000
        })
        toast.present();
    },2000)
  }


}
