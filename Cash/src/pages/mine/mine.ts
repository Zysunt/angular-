import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShimingPage} from '../shiming/shiming';
import {MyCreditPage} from '../my-credit/my-credit';
import {TransaccountPage} from '../transaccount/transaccount'
import { ProblemsPage } from '../problems/problems';
import { AboutPage } from '../about/about';

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


  toshiming(){
    this.navCtrl.push(ShimingPage)
  }

  tomycredit(){
    this.navCtrl.push(MyCreditPage)
  }
  totransaccount(){
    this.navCtrl.push(TransaccountPage)
  }
  toproblems(){
    this.navCtrl.push(ProblemsPage)
  }
  toabout(){
    this.navCtrl.push(AboutPage)
  }
}
