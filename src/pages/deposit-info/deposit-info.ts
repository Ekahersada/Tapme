import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import { Subscription } from 'rxjs/Subscription';


@IonicPage()
@Component({
  selector: 'page-deposit-info',
  templateUrl: 'deposit-info.html',
})
export class DepositInfoPage {
  aktif: boolean = true;
  valid:boolean;
  durasi:Subscription;
  time:any;
  waktu : any = new Date().getTime();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  this.durasiBerjalan();
  }

  durasiBerjalan(){
    this.durasi =  Observable.interval(1000)
    .takeWhile(() =>this.aktif)
    .subscribe(() =>{

            var difference = this.waktu -  new Date().getTime();
            // this.waktu = difference;

            var daysDifference = Math.floor(difference/1000/60/60/24);
              difference -= daysDifference*1000*60*60*24
            var hoursDifference = Math.floor(difference/1000/60/60);
              difference -= hoursDifference*1000*60*60
            var minutesDifference = Math.floor(difference/1000/60);
              difference -= minutesDifference*1000*60
            var secondsDifference = Math.floor(difference/1000);
              
            this.time = hoursDifference + 'Jam ' + minutesDifference + 'Menit ' + secondsDifference+'Detik'
            // if(this.waktu < 1){
            //   this.aktif = false;
            // }
    })
  }
  back(){
    this.navCtrl.pop();
  }

}
