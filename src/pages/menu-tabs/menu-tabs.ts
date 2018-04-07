import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BerandaPage } from '../beranda/beranda';
import { SaldoPage } from '../saldo/saldo';
import { AkunPage } from '../akun/akun';


@IonicPage()
@Component({
  selector: 'page-menu-tabs',
  templateUrl: 'menu-tabs.html'
})
export class MenuTabsPage {

  berandaRoot = BerandaPage;
  saldoRoot = SaldoPage;
  akunRoot = AkunPage;
  sementaraRoot = 'SementaraPage'


  constructor(public navCtrl: NavController) {}

}
