import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LendedPage} from '../../pages/lended/lended';
/**
 * Generated class for the LendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend',
  templateUrl: 'lend.html',
})
export class LendPage {
  manName = "mskda";
  telNum = 15487876564;
  jiekuan = 12454545;
  date = "2018-12-30";
  method = "到期还本付息";
  yhuan = 4546856;
  rate = 24;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendPage');
  }
  toLendedPage(){
    this.navCtrl.push(LendedPage);
  }

}
