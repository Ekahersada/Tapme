import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-akun',
  templateUrl: 'edit-akun.html',
})
export class EditAkunPage {

  username:string;
  fullname:string;
  usaha:string;
  email:string;
  nohp:string;
  
  proses: boolean = false;

  myImage:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
   
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  simpan(){
    this.proses = true;
    if(this.proses = true){
      setTimeout(() => {
        this.dismiss();
      }, 3000);
        
    }
  }
  gantiFoto(){
    const options: CameraOptions = {
      quality: 90,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType:this.camera.MediaType.PICTURE,      
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum:false,
      allowEdit:true,
      targetWidth:400,
      targetHeight:400
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.myImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }




}
