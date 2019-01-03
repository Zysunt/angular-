import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, LoadingController, ToastController } from 'ionic-angular';
import {BankCertPage} from '../bank-cert/bank-cert';
import {Http,Jsonp,Headers} from '@angular/http';
import 'rxjs/Rx'
import { BaseUI } from '../../baseUI';

/**
 * Generated class for the MyCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-credit',
  templateUrl: 'my-credit.html',
})
export class MyCreditPage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});
  public cardlist:any;
  public mobile:any;
  public token:any;
public bank:any;
public cardcode:any;
public ctp:any;
public hascard=false;


public isedit:any;
public cardchosedid:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events:Events,
     public http:Http,
     public loadingCtrl:LoadingController,
     public toastCtrl:ToastController) {
       super()
  }


  ionViewWillEnter(){
    var user=JSON.parse(window.localStorage.getItem('user'))
    this.mobile=user.mobile
    this.token=user.token
    var that=this
    var url='http://ai.51jinkong.cn/app/Usercenter/bankCardList'
    this.http.post(url,{mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      if(res.data.length!==0){
        that.hascard=true;
        that.cardlist=res.data
      }else{
        that.hascard=false;
      }
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCreditPage');
  }

  

  addcard(){
    var that= this
    this.events.subscribe('changebank',function(res){
      console.log(res)
that.bank=res[0].bank
that.cardcode=res[0].cardcode
if(that.bank!=null&&that.cardcode!=null){
  that.hascard=true;
}
    })
    this.navCtrl.push(BankCertPage)
    
  }


  changecredit(){
    this.isedit=true
  }
  cancledelete(){
    this.isedit=false
    this.cardchosedid=undefined
  }

  delete(){
     var that=this
     var url='http://ai.51jinkong.cn/app/Usercenter/unbindingbankCard'
     if(this.cardchosedid!==undefined){
      this.http.post(url,{id:this.cardchosedid,mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
        console.log(res)
        that.fndel(res.message)
      })
     }else{
       super.showToast(this.toastCtrl,'请选择要解绑的银行卡')
     }
  }


  fndel(msg){
    var loading=super.showLoading(this.loadingCtrl,'提交修改中...')
    var that=this
    var url='http://ai.51jinkong.cn/app/Usercenter/bankCardList'
    if(msg=='协议解绑成功！'){
      loading.dismiss()
      super.showToast(this.toastCtrl,msg)
    
    that.http.post(url,{mobile:that.mobile,token:that.token},{headers:that.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      if(res.data.length!==0){
        that.hascard=true;
        that.cardlist=res.data
      }else{
        that.hascard=false;
      }
    })
    }else{
      loading.dismiss()
      super.showToast(this.toastCtrl,msg)
    }
  }


  choose(id){
    this.cardchosedid=id
  }


  choosemoren(id,def){
   if(def!==1){
    var that=this
    var url='http://ai.51jinkong.cn/app/Usercenter/setDefaultBankCard'
    this.http.post(url,{id:id,mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      that.fndefault(res.message)
    })
   }
  }


  fndefault(msg){
    var loading=super.showLoading(this.loadingCtrl,'提交申请中...')
    if(msg=='设置成功'){
      loading.dismiss()
      super.showToast(this.toastCtrl,msg)
      var that=this
    var url='http://ai.51jinkong.cn/app/Usercenter/bankCardList'
    this.http.post(url,{mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      if(res.data.length!==0){
        that.hascard=true;
        that.cardlist=res.data
      }else{
        that.hascard=false;
      }
    })
    }else{
      loading.dismiss()
      super.showToast(this.toastCtrl,msg)
    }
  }
}
