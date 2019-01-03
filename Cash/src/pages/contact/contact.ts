import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Jsonp,Headers} from '@angular/http';
import 'rxjs/Rx'

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  public mobile:any;
  public token:any;
  public erweima:any;
  public weixinhao:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http) {
  }

  ionViewDidLoad() {
    var user=JSON.parse(window.localStorage.getItem('user'))
    this.mobile=user.mobile
    this.token=user.token
    console.log('ionViewDidLoad ContactPage');
    var that=this
    var url='http://ai.51jinkong.cn/app/Index/contactUs'
    this.http.post(url,{mobile:this.mobile,token:this.token},{headers:this.headers}).subscribe(res =>{
      var f=JSON.parse(res['_body'])
      console.log(f)
      that.erweima=f.data.erweima
      that.weixinhao=f.data.weixinhao
    })
  }


  

}
