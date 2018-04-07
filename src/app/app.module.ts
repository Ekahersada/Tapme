import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Brightness } from '@ionic-native/brightness';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UtamaPage } from '../pages/utama/utama';
import { LoginPage } from '../pages/login/login';

import { MenuTabsPage } from '../pages/menu-tabs/menu-tabs';
import { BerandaPage } from '../pages/beranda/beranda';
import { SaldoPage } from '../pages/saldo/saldo';
import { AkunPage } from '../pages/akun/akun';
import { DirectivesModule } from '../directives/directives.module';
import { TerimalangsungPage } from '../pages/terimalangsung/terimalangsung';
import { BayarscanPage } from '../pages/bayarscan/bayarscan';
import { NotaPage } from '../pages/nota/nota';
import { RegisterPage } from '../pages/register/register';
import { DaftarBarangPage } from '../pages/daftar-barang/daftar-barang';
import { DaftarTransaksiPage } from '../pages/daftar-transaksi/daftar-transaksi';
import { DetailTransaksiPage } from '../pages/detail-transaksi/detail-transaksi';
import { VerifikasiPhonePage } from '../pages/verifikasi-phone/verifikasi-phone';
import { TambahBarangPage } from '../pages/tambah-barang/tambah-barang';
import { MBarangPage } from '../pages/m-barang/m-barang';
import { ListBankAdminPage } from '../pages/list-bank-admin/list-bank-admin';
import { TambahBankPage } from '../pages/tambah-bank/tambah-bank';
import { DepositInitialPage } from '../pages/deposit-initial/deposit-initial';
import { DepositInfoPage } from '../pages/deposit-info/deposit-info';
import { PenarikanPage } from '../pages/penarikan/penarikan';
import { MListBankUsersPage } from '../pages/m-list-bank-users/m-list-bank-users';
import { EditAkunPage } from '../pages/edit-akun/edit-akun';
import { SettingPage } from '../pages/setting/setting';
import { DaftarPoinPage } from '../pages/daftar-poin/daftar-poin';
import { BantuanPage } from '../pages/bantuan/bantuan';
import { TukarPoinPage } from '../pages/tukar-poin/tukar-poin';
import { PinPage } from '../pages/pin/pin';
import { HasilScanNotaPage } from '../pages/hasil-scan-nota/hasil-scan-nota';
import { BarcodePage } from '../pages/barcode/barcode';
import { HasilScanLangsungPage } from '../pages/hasil-scan-langsung/hasil-scan-langsung';
import { TransaksiSelesaiPage } from '../pages/transaksi-selesai/transaksi-selesai';
import { TransaksiSelesaiPenambahanPage } from '../pages/transaksi-selesai-penambahan/transaksi-selesai-penambahan';
import { MPromoPage } from '../pages/m-promo/m-promo';

import { PipesModule } from '../pipes/pipes.module';
import { ChatAdminPage } from '../pages/chat-admin/chat-admin';


@NgModule({
  declarations: [
    MyApp,

    MenuTabsPage,

    HomePage,
    UtamaPage,

    LoginPage,
    RegisterPage,

    VerifikasiPhonePage,

    BerandaPage,
    TerimalangsungPage,
    BayarscanPage,

    PinPage,
    BarcodePage,

    DetailTransaksiPage,

    NotaPage,

    SaldoPage,

    AkunPage,

    DaftarBarangPage,
    DaftarTransaksiPage,

    TambahBarangPage,
    MBarangPage,

    ListBankAdminPage,
    TambahBankPage,

    DepositInitialPage,
    DepositInfoPage,

    PenarikanPage,

    MListBankUsersPage,

    SettingPage,
    EditAkunPage,

    DaftarPoinPage,
    BantuanPage,

    TukarPoinPage,
    HasilScanNotaPage,
    HasilScanLangsungPage,

    TransaksiSelesaiPage,
    TransaksiSelesaiPenambahanPage,

    MPromoPage,
    ChatAdminPage

    



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    DirectivesModule,
    PipesModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    MenuTabsPage,

    HomePage,
    UtamaPage,

    LoginPage,
    RegisterPage,

    VerifikasiPhonePage,

    BerandaPage,
    TerimalangsungPage,
    BayarscanPage,

    PinPage,
    BarcodePage,

    DetailTransaksiPage,

    NotaPage,

    SaldoPage,

    AkunPage,

    DaftarBarangPage,
    DaftarTransaksiPage,

    TambahBarangPage,
    MBarangPage,

    ListBankAdminPage,
    TambahBankPage,

    DepositInitialPage,
    DepositInfoPage,

    PenarikanPage,

    MListBankUsersPage,

    SettingPage,
    EditAkunPage,

    DaftarPoinPage,
    BantuanPage,

    TukarPoinPage,
    HasilScanNotaPage,
    HasilScanLangsungPage,

    TransaksiSelesaiPage,
    TransaksiSelesaiPenambahanPage,

    MPromoPage,
    ChatAdminPage

   
  ],
  providers: [
    Camera,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    Brightness,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
