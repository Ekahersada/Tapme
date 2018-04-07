import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListBankAdminPage } from '../list-bank-admin/list-bank-admin';
import { PenarikanPage } from '../penarikan/penarikan';
import { DepositInfoPage } from '../deposit-info/deposit-info';
import { DaftarPoinPage } from '../daftar-poin/daftar-poin';
import { TransaksiSelesaiPage } from '../transaksi-selesai/transaksi-selesai';
import { TransaksiSelesaiPenambahanPage } from '../transaksi-selesai-penambahan/transaksi-selesai-penambahan';


@IonicPage()
@Component({
  selector: 'page-saldo',
  templateUrl: 'saldo.html',
})
export class SaldoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaldoPage');
  }
  PageTopup(){
    this.navCtrl.push(ListBankAdminPage);
  }
  PageTarik(){
    this.navCtrl.push(ListBankAdminPage);
  }

  depositDetail(){
    this.navCtrl.push(DepositInfoPage);
  }
  PagePoin(){
    this.navCtrl.push(DaftarPoinPage);
  
  }
  gotoTransaksiSelesai(){
    this.navCtrl.push(TransaksiSelesaiPage);
  }
  gotoTransaksiTambah(){
    this.navCtrl.push(TransaksiSelesaiPenambahanPage);
  }

}
