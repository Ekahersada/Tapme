import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UtamaPage } from '../pages/utama/utama';
import { LoginPage } from '../pages/login/login';
import { MenuTabsPage } from '../pages/menu-tabs/menu-tabs';
import { RegisterPage } from '../pages/register/register';
import { DetailTransaksiPage } from '../pages/detail-transaksi/detail-transaksi';
import { VerifikasiPhonePage } from '../pages/verifikasi-phone/verifikasi-phone';
import { DaftarBarangPage } from '../pages/daftar-barang/daftar-barang';
import { MBarangPage } from '../pages/m-barang/m-barang';
import { TambahBarangPage } from '../pages/tambah-barang/tambah-barang';
import { NotaPage } from '../pages/nota/nota';
import { ListBankAdminPage } from '../pages/list-bank-admin/list-bank-admin';
import { DepositInitialPage } from '../pages/deposit-initial/deposit-initial';
import { DepositInfoPage } from '../pages/deposit-info/deposit-info';
import { PenarikanPage } from '../pages/penarikan/penarikan';
import { MListBankUsersPage } from '../pages/m-list-bank-users/m-list-bank-users';
import { AkunPage } from '../pages/akun/akun';
import { SaldoPage } from '../pages/saldo/saldo';
import { HasilScanLangsungPage } from '../pages/hasil-scan-langsung/hasil-scan-langsung';
import { TransaksiSelesaiPage } from '../pages/transaksi-selesai/transaksi-selesai';
import { TransaksiSelesaiPenambahanPage } from '../pages/transaksi-selesai-penambahan/transaksi-selesai-penambahan';
import { MPromoPage } from '../pages/m-promo/m-promo';
import { ChatAdminPage } from '../pages/chat-admin/chat-admin';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

