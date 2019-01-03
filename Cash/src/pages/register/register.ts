import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,ToastController,LoadingController } from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http';
import 'rxjs/Rx'
import { BaseUI } from '../baseUI/baseUI';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});

  public tel:any;
  public msgcode:any;
  public newpsd:any;
  public agreed=false;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,//总共时间
    disable: true
}
@ViewChild(Content) content:Content
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController,
    private http:Http,
    private jsonp:Jsonp,
    private loadingCtrl:LoadingController
    ) {
      super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }


  getveri(){
    var that=this
    if(this.tel==undefined){
      super.showToast(this.toastCtrl,'手机号不能为空')
    }else if(/^1[3456789]\d{9}$/.test(this.tel)==false){
      super.showToast(this.toastCtrl,'手机号格式不正确')
    }else{
      this.settime()
      var url='http://ai.51jinkong.cn/app/Login/getPhoneCode'
      this.http.post(url,{mobile:this.tel},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
        console.log(res)
        that.fns(res.state)
      })
    }

  }

  fns(state){
    if(state==1){
      super.showToast(this.toastCtrl,'验证码获取成功')
    }else{
      super.showToast(this.toastCtrl,'验证码获取失败')
    }
  }

  settime() {
    if (this.verifyCode.countdown == 0) {
      this.verifyCode.countdown=60;
        this.verifyCode.verifyCodeTips = "获取验证码";
        this.verifyCode.disable = true;
        return;
    } else {
        this.verifyCode.countdown--;
        this.verifyCode.disable=false;
    }
    setTimeout(() => {
        this.verifyCode.verifyCodeTips = "重新获取" + this.verifyCode.countdown + "秒";
            this.settime();
    }, 1000);
}


agree(){
console.log(this.agreed)
// alert('aa')
}

register(){
  if(this.tel==undefined){
    super.showToast(this.toastCtrl,'手机号不能为空')
  }else if(/^1[3456789]\d{9}$/.test(this.tel)==false){
    super.showToast(this.toastCtrl,'手机号格式不正确')
  }else if(this.msgcode==undefined){
    super.showToast(this.toastCtrl,'验证码不能为空')
  }else if(this.newpsd==undefined){
    super.showToast(this.toastCtrl,'密码不能为空')
  }else if(/^[0-9a-zA-Z]{8,}$/.test(this.newpsd)==false){
    super.showToast(this.toastCtrl,'输入的密码不符合要求')
  }else if(this.agreed==false){
    super.showToast(this.toastCtrl,'请阅读并同意协议')
  }else{
    var url='http://ai.51jinkong.cn/app/Login/newsuer'
    var that=this
    this.http.post(url,{mobile:this.tel,verify_code:this.msgcode,password:this.newpsd},{headers:this.headers}).map(res =>res.json()).subscribe(res =>
      that.fns2(res.message)
      )
     
  }
}

fns2(msg){
  var loading=super.showLoading(this.loadingCtrl,'注册中...')
  if(msg=='注册成功'){
    super.showToast(this.toastCtrl,msg)
    loading.dismiss()
    this.navCtrl.popToRoot()
  }else{
    super.showToast(this.toastCtrl,msg)
    loading.dismiss()
  }
}

}
