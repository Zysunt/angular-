import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,ToastController,LoadingController, Tabs } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {ForgottenPage} from '../forgotten/forgotten';
import {Http,Jsonp,Headers} from '@angular/http';
import 'rxjs/Rx'
import { BaseUI } from '../baseUI/baseUI';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});
  public user:any;
  public tel:any='15261563802';
  public psd:any=123;
@ViewChild(Content) content:Content
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private toastCtrl:ToastController,
     private http:Http,
     private jsonp:Jsonp,
     private loadingCtrl:LoadingController) {
       super()
  }

  ionViewDidLoad() {
   
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
  toRegister(){
    this.navCtrl.push(RegisterPage)
  }

  tofogten(){
    this.navCtrl.push(ForgottenPage)
  }

  login(){
    var that = this;
    var myreg=/^1[3456789]\d{9}$/;
    if(this.tel == undefined){
      super.showToast(this.toastCtrl,'电话号码不能为空')
    } 
    // else if (!myreg.test(this.tel)){
    //   super.showToast(this.toastCtrl,"电话号码不正确");
    // } 
    else if(this.psd ==undefined){
      super.showToast(this.toastCtrl,'密码不能为空')
    } else {
      var url='http://ai.51jinkong.cn/app/Login/logingo';
      var loading=super.showLoading(this.loadingCtrl,'提交中...')
      this.http.post(url,{mobile:this.tel,password:this.psd},{headers:this.headers}).map(res =>res.json()).subscribe(res =>
        {         
          console.log(res)
          var local = window.localStorage;
          var user={
            mobile:res.data.mobile,
            token:res.data.token,
            name:res.data.name
          }
          local.setItem('user',JSON.stringify(user))
         
          if(res.message == '登录成功'){
            loading.dismiss()
            super.showToast(this.toastCtrl,res.message)
            this.navCtrl.setRoot(TabsPage)
          }else{
            loading.dismiss()
            super.showToast(this.toastCtrl,res.message)
          }
        }
    
      )
    }
  }
}


