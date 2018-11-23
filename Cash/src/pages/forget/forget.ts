import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { LoginPage} from '../../pages/login/login';
import { BaseUI } from '../../baseUI/baseUI';

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage extends BaseUI{
  public tel=1234567890;
  public msgcode:any;
  public newpsd:any;
  public telNum:any;
  public code:any;
  passw1:any;
  passw2:any;
  isDisabled = true;
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 59,//总共时间
    disable: true
}
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private toastCtrl: ToastController
    ) {
      super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
  
toLogin(){
  if(this.passw1==null || this.passw2 == null){
    super.showToast(this.toastCtrl,'密码不能为空')
  } else if(this.passw1 != this.passw2){
    super.showToast(this.toastCtrl,"两次密码不相同");
  } else{
    this.navCtrl.push(LoginPage);
  }
  
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
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
