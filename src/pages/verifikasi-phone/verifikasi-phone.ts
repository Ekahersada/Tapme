import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import { MenuTabsPage } from '../menu-tabs/menu-tabs';
import { Subscription } from 'rxjs/Subscription';


@IonicPage()
@Component({
  selector: 'page-verifikasi-phone',
  templateUrl: 'verifikasi-phone.html',
})
export class VerifikasiPhonePage {
  waktu:number = 60000;
  time:any;
  kodeV:number;
  aktif: boolean = true;
  valid:boolean;
  durasi:Subscription;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
   this.durasiBerjalan();
  }

  durasiBerjalan(){
    this.durasi =  Observable.interval(1000)
    .takeWhile(() =>this.aktif)
    .subscribe(() =>{

            var difference = this.waktu - 1000;
            this.waktu = difference;

            var daysDifference = Math.floor(difference/1000/60/60/24);
              difference -= daysDifference*1000*60*60*24
            var hoursDifference = Math.floor(difference/1000/60/60);
              difference -= hoursDifference*1000*60*60
            var minutesDifference = Math.floor(difference/1000/60);
              difference -= minutesDifference*1000*60
            var secondsDifference = Math.floor(difference/1000);
              
            this.time = secondsDifference;
            if(this.waktu < 1){
              this.aktif = false;
            }
    })
  }

  getItems(){
    let a = this.kodeV.toLocaleString().length;
    if(a > 4){
      this.valid = true
    } else {
      this.valid = false;
    }
  }
  submit(){
    this.valid = false;
    let loader = this.loadingCtrl.create()
    loader.present()

    setTimeout(() => {
        this.navCtrl.setRoot(MenuTabsPage);
    },2000);
    setTimeout(()=>{
      loader.dismiss();
    },3000);
  }

  kirimUlang(){
    let toast = this.toastCtrl.create({
      message: 'Kode Verifikasi Terkirim',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
    toast.onDidDismiss(() => {
      this.waktu = 60000;
      this.aktif = true;
      this.durasiBerjalan();
    });
  }



}
