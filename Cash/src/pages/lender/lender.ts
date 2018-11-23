import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { SigningPage } from '../signing/signing';
import { BaseUI } from '../../baseUI/baseUI';
import { RestProvider } from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the LenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lender',
  templateUrl: 'lender.html',
})
export class LenderPage extends BaseUI{
  public username:any='123';
  public name:any;
//出借人
public lloan_money:any;
public lback_time:any;
public lrate:any;
public borrower_name:any;

// 借款人
public bloan_money:any;
public bback_time:any;
public brate:any;
public lender_name:any;
public purpose:any;

public benxi:number;
public benxi2:number;
public hintshow=false;
public isLender:boolean;
public service_money=10;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl:AlertController,
     public loadingCtrl:LoadingController,
     public toastCtrl:ToastController,
     public rest:RestProvider,
     public storage:Storage
     ) {
       super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LenderPage');
this.isLender=this.navParams.get('islender')
console.log(this.isLender)
this.storage.get('user').then((val) =>{
this.username=JSON.parse(val).username
})
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    if(this.lloan_money!==undefined&&this.lrate!==undefined){
      this.benxi=this.lloan_money+this.lloan_money*this.lrate*0.01
    }
    if(this.bloan_money!==undefined&&this.brate!==undefined){
      this.benxi2=this.bloan_money+this.bloan_money*this.brate*0.01
    }
  }

  hint(){
    if( (this.lloan_money!==undefined&&this.lback_time!==undefined&&this.lrate!==undefined&&this.borrower_name!==undefined) || 
    (this.bloan_money!==undefined&&this.bback_time!==undefined&&this.brate!==undefined&&this.lender_name!==undefined&&this.purpose!==undefined) ){
      this.hintshow=true;
    }else{
      super.showToast(this.toastCtrl,'请填写完整...')
    }
  }
  dismisshint(){
    this.hintshow=false;
  }
  tosigning(){
    if(this.isLender){
      var lend_list={
        username:this.username,
        lloan_money:this.lloan_money,
        lback_time:this.lback_time,
        lrate:this.lrate,
        borrower_name:this.borrower_name
      }
      this.storage.set('lend_list',JSON.stringify(lend_list))
    }
    else{
      var borrow_list={
        username:this.username,
        bloan_money:this.bloan_money,
        bback_time:this.bback_time,
        brate:this.brate,
        purpose:this.purpose,
        lender_name:this.lender_name
      }
      this.storage.set('borrow_list',JSON.stringify(borrow_list))
    }
    this.hintshow=false;
    this.navCtrl.push(SigningPage,{
      islender:this.isLender
    })
  }
}
