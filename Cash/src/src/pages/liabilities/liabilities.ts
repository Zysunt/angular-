import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LiabilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liabilities',
  templateUrl: 'liabilities.html',
})
export class LiabilitiesPage {
rate = 24;
public daihuan = 1000000000;
public daishou = 122222222;
public startTime = "2018-12-12";
public endTime = "2018-12-30";
public yuqi = 4;
total = 205656;
sxwyu = 305666;
sxyyu = 1055566;
dongjie =222;
hxwyu = 225;
hxyyu = 55588;
shensu = 5548;
totalMon = 15487878;
name = 'mbsud';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiabilitiesPage');
  }

}
