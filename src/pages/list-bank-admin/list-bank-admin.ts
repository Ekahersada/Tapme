import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TambahBankPage } from '../tambah-bank/tambah-bank';
import { DepositInitialPage } from '../deposit-initial/deposit-initial';
import { PenarikanPage } from '../penarikan/penarikan';



@IonicPage()
@Component({
  selector: 'page-list-bank-admin',
  templateUrl: 'list-bank-admin.html',
})
export class ListBankAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBankAdminPage');
  }

  pilihBank(){
    this.navCtrl.push(DepositInitialPage);
  }
  tambahBank(){
    this.navCtrl.push(TambahBankPage);
  }
  pilihTarikSaldo(){
    this.navCtrl.push(PenarikanPage);
  }

}
