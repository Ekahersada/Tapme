import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { TerimalangsungPage } from '../terimalangsung/terimalangsung';
import { NotaPage } from '../nota/nota';
import { DaftarTransaksiPage } from '../daftar-transaksi/daftar-transaksi';
import { BayarscanPage } from '../bayarscan/bayarscan';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DetailTransaksiPage } from '../detail-transaksi/detail-transaksi';
import { PinPage } from '../pin/pin';
import { HasilScanNotaPage } from '../hasil-scan-nota/hasil-scan-nota';
import { BarcodePage } from '../barcode/barcode';
import { HasilScanLangsungPage } from '../hasil-scan-langsung/hasil-scan-langsung';
import { DaftarPoinPage } from '../daftar-poin/daftar-poin';



@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {
  dataa={ };
  option: BarcodeScannerOptions;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  PageBayarscan(){
    //  this.navCtrl.push(HasilScanLangsungPage);

    this.option = {
      // preferFrontCamera:true,
      prompt: 'Scan QR Code hanya melalui TapMe'
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      // Success! Barcode data is here
      this.dataa = barcodeData;
      let isi = barcodeData.text;
      let frmt = barcodeData.format;
      if(barcodeData.text == 'langsung'){
        this.navCtrl.push(HasilScanLangsungPage);
    
      } else if( barcodeData.text == 'nota')
      {
        this.navCtrl.push(HasilScanNotaPage);
      }

    }, (err) => {
        console.log(err);
    });

      
     
  }



  AlertTerima(){
    let confirm = this.alertCtrl.create({
      title: 'Cara terima pembayaran',
      cssClass:'button-alert',
      buttons: [
        {
          text: 'BUAT NOTA TAGIHAN',    
          handler: () => {
            console.log('Langsung clicked');
            this.navCtrl.push(NotaPage);
           
          }
        },
        {
          text: 'LANGSUNG TERIMA',
          handler: () => {
            this.navCtrl.push(TerimalangsungPage);
             
          }
        }
      ]
    });
    confirm.present();
  }

  gotoSemuaTransaksi(){
    this.navCtrl.push(DaftarTransaksiPage);
  }
  gotoDetailTransaksi(){
    this.navCtrl.push(DetailTransaksiPage);
  }
  PagePoin(){
    this.navCtrl.push(DaftarPoinPage);
  }


  

}
