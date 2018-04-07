import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DepositInitialPage } from '../deposit-initial/deposit-initial';

@IonicPage()
@Component({
  selector: 'page-tambah-bank',
  templateUrl: 'tambah-bank.html',
})
export class TambahBankPage {

  private dataBank : FormGroup;
  valid: boolean = false;
  loading:boolean = false;
  lain: boolean = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
  ) {

    this.dataBank = this.formBuilder.group({
      kode_bank:  [''],
      nama_bank: [''],
      singkat: [''],
      nomor_rekening: ['', Validators.required],
      nama_pemilik: ['', Validators.required],
      read:true,
      key:'',
      time:''
    });

  }

  ionViewDidLoad() {
 
  }

  simpan(){
    this.valid = true;
    this.loading = true;
    setTimeout(()=>{
      this.navCtrl.pop();
    },3000)
  }
  cekbank(e){
    if(e == 'lain'){
      this.lain = true;
    } else {
      this.lain = false
    }

  }

}
