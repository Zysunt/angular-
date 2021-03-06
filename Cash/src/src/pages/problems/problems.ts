import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProblemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problems',
  templateUrl: 'problems.html',
})
export class ProblemsPage {
public arr=[
  {
    title:'什么是此产品',
    discription:'解释产品的一段文字1',
    clicked:false
  },
  {
    title:'如何借款',
    discription:'解释产品的一段文字2',
    clicked:false
  },
  {
    title:'什么是展期',
    discription:'解释产品的一段文字3',
    clicked:false
  }
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemsPage');
  }

  showproblem(i){
    this.arr[i].clicked=!this.arr[i].clicked
  }
}
