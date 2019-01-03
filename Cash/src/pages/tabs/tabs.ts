import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import {IdentificationPage} from '../identification/identification';
import {FindPage} from '../find/find';
import {MinePage} from '../mine/mine'
import { Events, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {



  tab1Root = HomePage;
  tab2Root = IdentificationPage;
  tab3Root = FindPage;
  tab4Root = MinePage;

  constructor(
    public events:Events,
    public navCtrl:NavController
  ) {

  }

  ionViewDidLoad() {
    this.listenEvents();
    // console.log('界面创建');
  }

  ionViewWillUnload() {
    this.events.unsubscribe('toLogin');
    // console.log('界面销毁');
  }


  listenEvents() {
    this.events.subscribe('toLogin', () => {
      this.navCtrl.setRoot(LoginPage);
      // this.nav.pop(); 使用这种方式也可以，但是会在登录框中默认填上值
      // console.log('返回登录');
    });
  }
}
