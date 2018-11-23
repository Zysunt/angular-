import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
items;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.initializeItems();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  initializeItems() {
    this.items = [
      {
        headface:'assets/imgs/zhuanzhang/pic.png',
        name:'王卡',
        tel:'182****0105'
      },
      {
        headface:'assets/imgs/zhuanzhang/pic.png',
        name:'墨白',
        tel:'155****3452'
      }
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
console.log(val)
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.tel.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
