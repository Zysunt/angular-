import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Refresher} from 'ionic-angular';
import { HexiaoPage} from '../../pages/hexiao/hexiao';
/**
 * Generated class for the DaihuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daishou',
  templateUrl: 'daishou.html',
})
export class DaishouPage {
  public filter:any;
  shouorhuan:boolean;

  huanqingMon = 1245;
  wYuQHuan = 45421;
  yuQHuan = 4548578;
  totalMoney = 578784;
  searchways: any;
  selector: any;
  appType = 'Dqian';
  btn=false;
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
      {
        manName :"landy",
        DQday:21,
        dateTime:"2018-12-14",
        money :4411111,
        Dqian:true,
        isShowz:false
      },
      {
        manName :"blsds",
        DQday:222,
        dateTime:"2018-12-14",
        money :4411111,
        Dqian:true,
        isShowz:true,
       
      },
   
      
    ],
    'yishou': [
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
    { text: '应还日期近到远', value: 'tofar' },
    { text: '应还日期远到近', value: 'toclose' },
   
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
  this.getBtns(a) 
}
hideBox(){
  this.btn =false;
}

toNext(yizhan){
this.navCtrl.push(HexiaoPage,{
  yizhan:yizhan
});
}
  ionViewDidLoad() {
  

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



    ngAfterContentChecked(): void {
      //Called after every check of the component's or directive's content.
      //Add 'implements AfterContentChecked' to the class.
      if(this.searchways!==undefined){  
        if(this.searchways.value=='tofar'){
          this.apps['Dqian'].sort(this.sortNumber)
        }else if(this.searchways.value=='toclose'){
          this.apps['Dqian'].sort(this.sortnumber)
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
              manName :"landy",
              DQday:21,
              dateTime:"2018-12-14",
              money :4411111,
              Dqian:true,
              isShowz:false
            },
            {
              manName :"blsds",
              DQday:222,
              dateTime:"2018-12-14",
              money :4411111,
              Dqian:true,
              isShowz:true,
             
            },
         
            
          ],
          'yishou': [
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
