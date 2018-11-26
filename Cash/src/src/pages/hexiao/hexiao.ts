import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { ZhanqiPage} from '../../pages/zhanqi/zhanqi';
import { BaseUI } from "../../baseUI/baseUI";
import { DaishouPage } from "../../pages/daishou/daishou";
/**
 * Generated class for the HexiaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hexiao',
  templateUrl: 'hexiao.html',
})
export class HexiaoPage extends BaseUI{
public hintshow=false;
public showMima=false;
public psd:any;
  daoqiDay = 45;
  jiekuanren = 'landy';
  yijieMon = 1214545;
  yinghuan = 54548;
  public status:any;
  jiechudate = '2018-12-4';
  huankunadate = '2018-12-21';
  jiechutime = '10:12';
  shouhuidate = '2019-1-1';
  shouhuitime = '12:45';
  shouhuimon = 121545;
  constructor(public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
    public navParams: NavParams) {
    super()
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    if(this.psd!==undefined){
      if(this.psd.length>=6){
   var loading=super.showLoading(this.loadingCtrl,'正在验证密码...')
        if(this.psd=='123456'){
          loading.dismiss()
          super.showToast(this.toastCtrl,'验证成功,正在跳转...')
          this.navCtrl.popTo(DaishouPage)
          this.showMima=false;
        
        }else{
          loading.dismiss()
          super.showToast(this.toastCtrl,'密码错误，请重试...')
        }
        this.psd=''
      }
    }
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad HexiaoPage');
    if(this.navParams.get('yizhan') == true){
      this.status = 1
    } else {
      this.status = 2
    }
  }
  Tozhanqi(){
    this.navCtrl.push(ZhanqiPage)
  }


  hint(){
    this.hintshow=true;
  }
  dismisshint(){
    this.hintshow=false;
  }

  showmima(){
    this.hintshow=false;
this.showMima=true;
var t=setTimeout(function(){
  var ipt=document.getElementById('ipt') as HTMLInputElement
  ipt.focus()
},500)
  }

  hidemima(){
    this.showMima=false;
  }
}
