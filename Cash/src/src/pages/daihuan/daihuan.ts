import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Refresher} from 'ionic-angular';
import {JiekuanEdPage} from '../../pages/jiekuan-ed/jiekuan-ed';
import { HexiaoPage} from '../../pages/hexiao/hexiao';
import { ZhanqiPage} from '../../pages/zhanqi/zhanqi';
import { text } from '@angular/core/src/render3/instructions';
/**
 * Generated class for the DaihuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daihuan',
  templateUrl: 'daihuan.html',
})
export class DaihuanPage {
  shouorhuan:boolean;
  public ways:any;
  public filter:any;

  huanqingMon = 1245;
  wYuQHuan = 45421;
  yuQHuan = 4548578;
  totalMoney = 578784;
  selector: any;
  searchways: any;
  appType = 'Dqian';
  btn=false;
  isYuQi = false;
  switch = 'weiyuQi';
  ishuan = false;
  btns:any = {
    'weiyuQi':[
      '所有未逾期',
      '今天到期',
      '7天内到期'
    ],
    'yuQi':[
      '所有逾期',
      '逾期7天内',
      '逾期7-15天',
      '逾期16-30天',
      '逾期31-60天',
      '逾期60天以上'
    ]


  }
  apps: any = {
    'Dqian': [
      // arr
      // arr[0]
      {
        manName :"sheep",
        DQday:21,
        dateTime:"2018-12-14",
        money :4411111,
        Dqian:true,
        yuQi:true,
        isShowque:false,
        isShowz:false,
      },
      // arr[1]
      {
        manName :"monkey",
        DQday:18,
        dateTime:"2018-12-14",
        money :4411111,
        Dqian:true,
        yuQi:true,
        isShowque:false,
        isShowz:true,
      },
    //  arr[2]
      {
        manName :"lion",
        DQday:15,
        dateTime:"2018-12-14",
        money :4411111,
        Dqian:true,
        yuQi:true,
        isShowque:true,
        isShowz:false,
      },
     
      
    ],
    'Yhuan': [
      { 
        huanName:"lonnn",
        yihuanMon:121524,
        Yhuan:true
      },
      {
        huanName:"lonnn",
        yihuanMon:121524,
        Yhuan:true
      }
    ]  
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.selector = [
    { 'text': '应还日期近到远', 'value': 'tofar' },
    { 'text': '应还日期远到近', 'value': 'toclose' },
   
];

}

YuqiorHQ(a){
if(a=='dangqian'){
  this.ishuan=false
  console.log(this.ishuan)
}else{
  this.ishuan=true;
  console.log(this.ishuan)
}

}
showBox(a){
  this.btn=true;
  this.getBtns(a) ;
  if(a == 'yuQi'){
    this.isYuQi = true;
   console.log(this.apps['Dqian'])
  } else if(a=='weiyuQi'){
    this.isYuQi = false;
    for(var x in this.apps['Dqian']){

      this.apps['Dqian'][x].isShowque=true;
      this.apps['Dqian'][x].isShowz=false;
    }
  }
}
hideBox(){
  this.btn =false;
}

toNext(isShowque,isShowz){
 
this.navCtrl.push(JiekuanEdPage,
  {
    isShowque:isShowque,
    isShowz:isShowz  
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DaihuanPage');

  }
  
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
}

  getItems(type: any) {
    return this.apps[type];
  }
  getBtns(type: any) {
    return this.btns[type];
  }
  doRefresh(refresher: Refresher) {
      
      setTimeout(() => {
        refresher.complete();
      }, 1000);
    }

ToHexiao(){
  this.navCtrl.push(HexiaoPage);
}
ToZhanqiPage(){
  this.navCtrl.push(ZhanqiPage);
}


ngAfterContentChecked(): void {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  if(this.searchways!==undefined){
    if(this.searchways.value=='tofar'){
      this.apps['Dqian'].sort(this.sortNumber)
      console.log(this.apps['Dqian'])
    }else if(this.searchways.value=='toclose'){
      this.apps['Dqian'].sort(this.sortnumber)
      console.log(this.apps['Dqian'])
    }
  } 
}

sortNumber(a,b){
return a.DQday - b.DQday
}

sortnumber(a,b){
  return b.DQday - a.DQday
  }




  initializeItems() {
   this.apps = {
      'Dqian': [
        {
          manName :"sheep",
          DQday:21,
          dateTime:"2018-12-14",
          money :4411111,
          Dqian:true,
          yuQi:true,
          isShowque:false,
          isShowz:false,
        },
        {
          manName :"monkey",
          DQday:18,
          dateTime:"2018-12-14",
          money :4411111,
          Dqian:true,
          yuQi:true,
          isShowque:false,
          isShowz:true,
        },
        {
          manName :"lion",
          DQday:15,
          dateTime:"2018-12-14",
          money :4411111,
          Dqian:true,
          yuQi:true,
          isShowque:true,
          isShowz:false,
        },
       
        
      ],
      'Yhuan': [
        { 
          huanName:"lonnn",
          yihuanMon:121524,
          Yhuan:true
        },
        {
          huanName:"lonnn",
          yihuanMon:121524,
          Yhuan:true
        }
      ]  
    };
  }

  filters(ev) {
    // Reset items back to all of the items
this.initializeItems()

    // set val to the value of the ev target
    var val = ev.target.value;
console.log(val)
this.filter=val
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.apps['Dqian'] = this.apps['Dqian'].filter((item) => {
        return (item.manName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
