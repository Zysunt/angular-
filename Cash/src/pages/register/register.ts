import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, Header } from 'ionic-angular';
import{ TabsPage} from '../../pages/tabs/tabs';
import {BaseUI} from '../../baseUI/baseUI';
import{Http,Headers,Jsonp} from '@angular/http';
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
export class RegisterPage extends BaseUI {
  private headers = new Headers({'Content-Type':'application/json'})
  public tel=1234567890;
  public msgcode:any;
  public newpsd:any;
  public telNum:any;

  password:any;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController,
    private http:Http,
    private jsonp:Jsonp,
    
    ) {
    super()
  }

  ionViewDidLoad() {
    console.log(this.telNum,this.password);
  }

  toHome(){
    if(this.password==null){
      super.showToast(this.toastCtrl,"密码不能为空")
    } else {
      this.navCtrl.setRoot(TabsPage);
    }
    

//this.navCtrl.push(HomePage);
  }

//倒计时
settime() {
  var myreg=/^1[3456789]\d{9}$/;
  if (!myreg.test(this.telNum)) {
     console.log("电话格式错误")
  } else if(this.telNum ==null){
    super.showToast(this.toastCtrl,"电话不能为空")
  }
  else {
    //  console.log("电话正确")
     this.verifyCode.disable=true;
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
    return;
  }
  }

}
