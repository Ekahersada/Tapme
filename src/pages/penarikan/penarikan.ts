import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MListBankUsersPage } from '../m-list-bank-users/m-list-bank-users';
import { PinPage } from '../pin/pin';
import { MenuTabsPage } from '../menu-tabs/menu-tabs';
import { SaldoPage } from '../saldo/saldo';


@IonicPage()
@Component({
  selector: 'page-penarikan',
  templateUrl: 'penarikan.html',
})
export class PenarikanPage {

  saldo:any;
  myUid:any;
  checkSaldo: boolean = false ;
  nilai:number = 0;
  valid: boolean = false;
  loading: boolean = false;
  bank:any = 'BCA - 001**';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    this.saldo = 50475;
  }

  inputSaldo(){
    if(this.checkSaldo){
      this.nilai = this.saldo;
      this.setInput();
    } else {
      //this.nilai = 0;
      this.setInput();
    }
  }

  setInput(){
    let isi = this.nilai;
    if(isi > this.saldo){
      this.valid = false;
    } else if ( isi < 10000){
      this.valid = false;
    } else {
      this.valid = true;
    }
  }


  simpan(){
    this.valid = false;
    this.loading = true;
    setTimeout(()=>{

      let modal = this.modalCtrl.create(PinPage,{from:'penarikan'}, {cssClass:'modal-edit'});
        modal.onDidDismiss(data => {
          if(data){
            this.loading = false;
          } else {
            this.navCtrl.setRoot(SaldoPage);
          }
        });
        modal.present();

      // let alert = this.alertCtrl.create({
      //   title: 'Penarikan Berhasil',
      //   subTitle: 'Admin akan segera memperoses penarikan dana Anda, Terimakasih',
      //   buttons: [ {
      //       text: 'Ok',
      //       handler: () => {
             
      //       }
      //     }]
      // });
      // alert.present();
      // this.navCtrl.pop();
    },3000)
  }

  pilihBank(){
    let modal = this.modalCtrl.create(MListBankUsersPage,{},{cssClass:'modal-edit'});
    modal.onDidDismiss(data => {
      if(data){
      this.bank = data.bank+'-'+data.kode;
      }
    });
    modal.present();
  }

}
