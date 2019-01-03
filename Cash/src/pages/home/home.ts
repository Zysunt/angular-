import { Component, ViewChild } from '@angular/core';
import { NavController,Events,Slides, LoadingController, ToastController } from 'ionic-angular';
import {ToBorrowPage} from '../to-borrow/to-borrow';
import {AutoMonPage} from '../auto-mon/auto-mon';
import {RecommendPage} from '../recommend/recommend';
import { MessagePage} from '../message/message';
import { StatusBar} from '@ionic-native/status-bar';
import { Http,Jsonp,Headers } from '@angular/http';
import 'rxjs/Rx'
import { BaseUI } from '../../baseUI';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI{
  private headers = new Headers({'Content-Type': 'application/json'});
  public mobile:any;
  public token:any;
  public ava_money='1000.00';
  public should_pay='1000.00';
  public enddate=20;

  public tixianed:any;

  public last_money:any;
  public last_qishu:any;
  public order_id:any;
  public imgbox=[

  ]
  @ViewChild(Slides) slides:Slides;
public step:number=1;
public isChecking=false;
public checkingstep:number=3;
date:any;

  constructor(public navCtrl: NavController,
    public events:Events,
    private statusBar:StatusBar,
    public http:Http,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController) {
      super()
  }
  
  ionViewDidEnter() {
   if(this.checkingstep==1&&this.isChecking==true){
    var that=this
    var url='http://ai.51jinkong.cn/app/Index/showOrder'
    this.http.post(url,{mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      that.fncheck(res.data.type,res.data.order)
    })
   }
}

  ionViewDidLoad(){
    var user=JSON.parse(window.localStorage.getItem('user'))
    this.mobile=user.mobile
    this.token=user.token
    var that=this
    // 幻灯片
    var url='http://ai.51jinkong.cn/app/Index/getSlide'
    this.http.post(url,{per_page:6,mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      that.imgbox=res.data
    })

    // 首页状态
    var url2='http://ai.51jinkong.cn/app/Index/showOrder'
    this.http.post(url2,{mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      this.tixianed=
      that.fncheck(res.data.type,res.data.order)
    })
  }


  ngOnInit(): void {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#564eF1');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

msg(){
  this.navCtrl.push(MessagePage);
}
  shenqing(){
   
    var that=this
    var url='http://ai.51jinkong.cn/app/Usercenter/shenqing'
    this.http.post(url,{mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
      console.log(res)
      that.fnshenqing(res.message)
    })
  }
 
  restart(){
    this.isChecking=false;
    this.checkingstep=1;
  }

  toauto(){
    this.navCtrl.push(AutoMonPage)
  }

  torecommend(){
    this.navCtrl.push(RecommendPage)
  }
  
// 提现
tixian(){
var that=this
var url='http://ai.51jinkong.cn/app/usercenter/tixian'
this.http.post(url,{id:this.order_id,mobile:this.mobile,token:this.token},{headers:this.headers}).map(res =>res.json()).subscribe(res =>{
  console.log(res)
  that.fntx(res.message)
})
}

//   ngAfterContentChecked(): void {
//     //Called after every check of the component's or directive's content.
//     //Add 'implements AfterContentChecked' to the class.
//     var that=this
//   this.events.subscribe('readyif',function(res){
// that.isChecking=res
// that.checkingstep=1
// if(that.step==3){
//   that.isChecking=false;
// }
//   })
//   }


fnshenqing(msg){
var loading=super.showLoading(this.loadingCtrl,'提交申请中...')
if(msg=='申请借款成功'){
  loading.dismiss()
  super.showToast(this.toastCtrl,msg)
  this.isChecking=true
  this.checkingstep=1
}else{
  loading.dismiss()
  super.showToast(this.toastCtrl,msg)
}
}

fncheck(type,data){
  var loading=super.showLoading(this.loadingCtrl,'请等待...')
  if(type==0){
    // 默认
    loading.dismiss()
    this.step=0
  }else if(type==1){
    // 待审核
    loading.dismiss()
    this.step=1
  }else if(type==2){
    // 审核中
    loading.dismiss()
    this.step=2
  }else if(type==3){
    // 拒绝
    loading.dismiss()
    super.showToast(this.toastCtrl,'对不起，审核未通过...')
    this.step=3
  }else if(type==4){
    // 提现
    loading.dismiss()
    this.step=4
    // this.last_money=data.last_money
    // this.last_qishu=data.last_qishu
    // this.order_id=data.id
    // this.tixianed=true
    super.showToast(this.toastCtrl,'恭喜你，审核通过')
  }else if(type==5){
    // 待放款
    loading.dismiss()
    this.step=5
  }else if(type==6){
    // 待还款
    loading.dismiss()
    this.step=6
  }else if(type==7){
    // 逾期
    loading.dismiss()
    this.step=7
  }else{
    loading.dismiss()
    super.showToast(this.toastCtrl,'请先登录')
  }
}

fntx(msg){
  var loading=super.showLoading(this.loadingCtrl,'提交申请中...')
  if(msg=='提现成功'){
    loading.dismiss()
    super.showToast(this.toastCtrl,msg)
    this.tixianed=true
  }else{
    loading.dismiss()
    super.showToast(this.toastCtrl,msg)
  }
}
}
