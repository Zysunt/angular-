import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {JietiaoDetailPage} from '../jietiao-detail/jietiao-detail';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {StatusBar} from '@ionic-native/status-bar'
import { BaseUI } from '../../baseUI/baseUI';

/**
 * Generated class for the SigningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-signing',
  templateUrl: 'signing.html',
})
export class SigningPage extends BaseUI{
  // @ViewChild('Signpad') signpad:ElementRef;
  @ViewChild('header') headerheight:ElementRef;
public lastX:any;
public lastY:any;
public headerH:any;
public canvasImage:any;
public isLender:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public screenorientation:ScreenOrientation,
    public statusBar:StatusBar,
    public toastCtrl:ToastController) {
      super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigningPage');
    this.headerH=this.headerheight.nativeElement.offsetHeight
    this.isLender=this.navParams.get('islender')

  console.log(this.canvasImage)
  }


  ionViewDidEnter(){
    this.screenorientation.lock(this.screenorientation.ORIENTATIONS.LANDSCAPE);
      this.statusBar.hide();
  }
  ionViewDidLeave(){
    this.screenorientation.lock(this.screenorientation.ORIENTATIONS.PORTRAIT);
      this.statusBar.hide();
  }

  handleStart(ev){
    this.lastX=ev.changedTouches[0].clientX;
    this.lastY=ev.changedTouches[0].clientY-this.headerH-16;
  }
  handleMove(ev){
    let c=document.getElementById('Signpad') as HTMLCanvasElement;
    let ctx=c.getContext('2d')
    let currentX = ev.changedTouches[0].clientX;
    let currentY = ev.changedTouches[0].clientY-this.headerH-16;
    ctx.beginPath();
    ctx.strokeStyle='red';
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
   
    ctx.stroke();      

    this.lastX = currentX;
    this.lastY = currentY;
    ctx.closePath();
  }

  clear(){
    let c=document.getElementById('Signpad') as HTMLCanvasElement;
    let ctx=c.getContext('2d')
    ctx.clearRect(0,0,c.width,c.height)
  }
  save(){
    let c=document.getElementById('Signpad') as HTMLCanvasElement;
    this.canvasImage=c.toDataURL()
  }


  tojietiaoDetail(){
    if(this.canvasImage!=undefined){
      if(this.isLender){
        this.navCtrl.push(JietiaoDetailPage,{
          islender:this.isLender,
          lsignImage:this.canvasImage
        })
      }else{
        this.navCtrl.push(JietiaoDetailPage,{
          islender:this.isLender,
          bsignImage:this.canvasImage
        })
      }
    }else{
      super.showToast(this.toastCtrl,'请先预览图片...')
    }
  }

  
}





	