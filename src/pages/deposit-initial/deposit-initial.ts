import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DepositInfoPage } from '../deposit-info/deposit-info';


@IonicPage()
@Component({
  selector: 'page-deposit-initial',
  templateUrl: 'deposit-initial.html',
})
export class DepositInitialPage {
  nilai:number;
  valid: boolean = false;
  loading: boolean = false;
  inputJumlah: boolean = true;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCTrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    
  }

  setInput(){
    let isi = this.nilai;
    if(isi > 1000000){
      this.valid = false;
    } else if ( isi < 10000){
      this.valid = false;
    } else {
      this.valid = true;
    }
  }

  simpan(){
    this.inputJumlah = false;
    this.valid = false;
    this.loading = true;
    setTimeout(()=>{
      this.navCtrl.push(DepositInfoPage).then(()=>{
        let a = this.navCtrl.getPrevious().index;
        this.navCtrl.remove(1,a);
      })
    },3000)
  }

}
