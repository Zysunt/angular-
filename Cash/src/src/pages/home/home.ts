import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Refresher } from 'ionic-angular';
import { LiabilitiesPage} from '../../pages/liabilities/liabilities';
import { LendPage } from '../../pages/lend/lend';
import { SendSuccessPage} from '../../pages/send-success/send-success';
import {DaishouPage} from '../../pages/daishou/daishou';
import { DaihuanPage} from '../../pages/daihuan/daihuan';
import { NewsPage} from '../../pages/news/news';
import { RemainingPage } from '../remaining/remaining';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appType = 'shou';
  apps: any = {
    'shou': [
      {
        jiekuan: '1000',
        jiekuandate: '2018-11-11',
        huankuan:'2000',
        huankuandate:'2018-11-12',
        jiekuanren:'zhangsan',
        nianlilv:'20',
        isQueren:true
      },
      {
        jiekuan: '1001',
        jiekuandate: '2018-11-12',
        huankuan:'2001',
        huankuandate:'2018-11-13',
        jiekuanren:'zhangsi',
        nianlilv:'21',
        isQueren:true
      }
    ],
    'fa': [
      { 
        jiekuan: '2000',
        jiekuandate: '2018-11-11',
        huankuan:'2000',
        huankuandate:'2018-11-12',
        jiekuanren:'zhangsan',
        nianlilv:'20',
        isQueren:false
      },
      {
        jiekuan: '1001',
        jiekuandate: '2018-11-12',
        huankuan:'2001',
        huankuandate:'2018-11-13',
        jiekuanren:'zhangsi',
        nianlilv:'21',
        isQueren:false
      }
    ]  
  };

  constructor(public navCtrl: NavController) {

  }
  getItems(type: any) {
    return this.apps[type];
  }
  doRefresh(refresher: Refresher) {
      
      setTimeout(() => {
        refresher.complete();
      }, 1000);
    }
    
    toLiabilities(){
this.navCtrl.push(LiabilitiesPage);
    }
    toLend(selectPages){
      if(selectPages){
        this.navCtrl.push(LendPage);
      } else {
        this.navCtrl.push(SendSuccessPage);
      }
      
    }
    tolend(){
      this.navCtrl.push(LendPage)
    }

    toNews(){
      this.navCtrl.push(NewsPage);
    }
    ToDaihuan(){
this.navCtrl.push(DaihuanPage);
    }
    ToDaishou(){
      this.navCtrl.push(DaishouPage);
    }

    tocharge(){
      this.navCtrl.push(RemainingPage)
    }
}
