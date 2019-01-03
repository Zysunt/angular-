import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Content, LoadingController } from 'ionic-angular';
import { ForgetPage} from '../../pages/forget/forget';
import { RegisterPage} from '../../pages/register/register';
import { HomePage} from '../../pages/home/home';
import { TabsPage} from '../../pages/tabs/tabs';
// import {Http,Headers,Jsonp} from '@angular/http';
import {Storage} from '@ionic/storage';
import { BaseUI } from '../../baseUI/baseUI';
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
  private headers = new Headers({'Content-Type':'application/json'});
  telNum:any;
  password:any;
  arr = new Array("18245126321","123456");
  list = {}
  @ViewChild(Content) content:Content;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private taostCtrl:ToastController,
    private loadingCtrl:LoadingController,
    public storage:Storage
    ) {
      super()
  }

ngAfterContentChecked(): void {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  // console.log(JSON.stringify(this.password))
}

  
  toHome(){

    // var myreg=/^1[3456789]\d{9}$/;
    
    // if(this.telNum == undefined){
    //   super.showToast(this.taostCtrl,'电话号码不能为空')
    // } else if (!myreg.test(this.telNum)){
    //   super.showToast(this.taostCtrl,"电话号码不正确");
    // } else if(this.password ==undefined){
    //   super.showToast(this.taostCtrl,'密码不能为空')
    // } else if(JSON.stringify(this.password).length<6){
    //   super.showToast(this.taostCtrl,'密码不能小于6位')

    // } else
    //   {
      var url=''
      // var loading=super.showLoading(this.loadingCtrl,'提交中...')
      // this.http.post(url,JSON.stringify({tel:this.telNum,psd:this.password}),{headers:this.headers}).subscribe(res =>
      //   console.log(res.json())
       
      //   )
      //   loading.dismiss();
      // this.list={
      //   username:Math.random().toString(36).substr(2),
      //   tel:this.telNum,
      //   password:this.password
      // }
      // console.log(this.list)
      //   this.storage.set('user',JSON.stringify(this.list))
        // this.storage.get('user').then((val) =>{
        //   console.log(val)
        // })
      this.navCtrl.setRoot(TabsPage);
      // var storage=window.localStorage;
      //  storage.setItem('json',JSON.stringify(this.list));
      //  console.log(storage);
    // }

   
  }
  toRegister(){
    this.navCtrl.push(RegisterPage)
  }

  tofogten(){
    this.navCtrl.push(ForgetPage)
  }
}
