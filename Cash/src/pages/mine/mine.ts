import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {MessagePage} from '../message/message';
import {MyCouponPage} from '../my-coupon/my-coupon';
import {ProblemPage} from '../problem/problem';
import {ContactPage} from '../contact/contact';
import {BorrowRecordPage} from '../borrow-record/borrow-record';
import {MyCreditPage} from '../my-credit/my-credit';
import {SettingPage} from '../setting/setting'

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad MinePage');
  }

  toLogin(){
    this.navCtrl.push(LoginPage)
  }

  toidentify(){
      this.navCtrl.parent.select(1);
  }

  tomessage(){
    this.navCtrl.push(MessagePage)
  }

  tomycoupon(){
    this.navCtrl.push(MyCouponPage)
  }

  toproblem(){
    this.navCtrl.push(ProblemPage)
  }

  tocontact(){
    this.navCtrl.push(ContactPage)
  }

  toborrowrecord(){
    this.navCtrl.push(BorrowRecordPage)
  }
  tomycredit(){
    this.navCtrl.push(MyCreditPage)
  }

  tosetting(){
    this.navCtrl.push(SettingPage)
  }
}
