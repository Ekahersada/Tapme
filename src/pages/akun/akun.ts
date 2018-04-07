import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, AlertController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { DaftarPoinPage } from '../daftar-poin/daftar-poin';
import { BantuanPage } from '../bantuan/bantuan';
import { LoginPage } from '../login/login';
import { EditAkunPage } from '../edit-akun/edit-akun';
import { DaftarBarangPage } from '../daftar-barang/daftar-barang';
import { TukarPoinPage } from '../tukar-poin/tukar-poin';



@IonicPage()
@Component({
  selector: 'page-akun',
  templateUrl: 'akun.html',
})
export class AkunPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController  
  ) {
  }

  ionViewDidLoad() {

  }

  gotoEditAkun(){
    this.navCtrl.push(SettingPage);
  }
  gotoPoin(){
    this.navCtrl.push(TukarPoinPage);
  }
  gotoItem(){
    this.navCtrl.push(DaftarBarangPage);
  }
  gotoBantuan(){
    this.navCtrl.push(BantuanPage);
  }
  gotoProfil(){
    let profileModal = this.modalCtrl.create(EditAkunPage);
    profileModal.present();
   
  }
  gotoGantiPin(){
    let alert = this.alertCtrl.create({
      message: 'Demi keamanan kami akan mengirim form untuk merubah PIN ke alamat email Anda?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Kirim',
          handler: () => {
            
              let sukses = this.alertCtrl.create({ 
                message: "Pengiriman berhasil, Segera periksa alamat email Anda ",
                buttons: ['OK']
              })
             sukses.present();
            
          }
        }
      ]
    });
    alert.present();
  }
  keluar(){
    this.navCtrl.setRoot(LoginPage);
  }

}
