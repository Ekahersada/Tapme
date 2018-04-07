import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PinPage } from '../pin/pin';



@IonicPage()
@Component({
  selector: 'page-hasil-scan-langsung',
  templateUrl: 'hasil-scan-langsung.html',
})
export class HasilScanLangsungPage {
  loading: boolean = false;
  button: boolean = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {

  }

  bayar(){
    this.loading = true;
    this.button = true;
    setTimeout(() => {
        this.loading = false;

        let modal = this.modalCtrl.create(PinPage,{}, {cssClass:'modal-edit'});
        modal.onDidDismiss(data => {
          if(data){
            this.button = false;
          } else {
            this.navCtrl.pop();
          }
        });
        modal.present();

    }, 2000);

  }

}
