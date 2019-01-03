import { NgModule, ErrorHandler,ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Camera} from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import {FileTransfer} from '@ionic-native/file-transfer';
import {FilePath} from '@ionic-native/file-path';
import {PhotoLibrary} from '@ionic-native/photo-library'
import {HttpModule,JsonpModule} from '@angular/http';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {IdentificationPage} from '../pages/identification/identification';
import {FindPage} from '../pages/find/find';
import {MinePage} from '../pages/mine/mine';
import {FindDetailPage} from '../pages/find-detail/find-detail';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ForgottenPage} from '../pages/forgotten/forgotten' ;
import {MessagePage } from '../pages/message/message';
import {MyCouponPage} from '../pages/my-coupon/my-coupon';
import {ProblemPage} from '../pages/problem/problem';
import {ProblemDetailPage} from '../pages/problem-detail/problem-detail';
import {CertificationPage} from '../pages/certification/certification';
import {BorrowRecordPage} from '../pages/borrow-record/borrow-record';
import {MyCreditPage} from '../pages/my-credit/my-credit';
import {ToBorrowPage} from '../pages/to-borrow/to-borrow';
import {AlipayPage} from '../pages/alipay/alipay';
import {AutoMonPage} from '../pages/auto-mon/auto-mon';
import {BankCertPage} from '../pages/bank-cert/bank-cert';
import {BankPayPage} from '../pages/bank-pay/bank-pay';
import {BasicCertPage} from '../pages/basic-cert/basic-cert';
import {OperatorCertPage} from '../pages/operator-cert/operator-cert';
import {RecommendPage} from '../pages/recommend/recommend';
import {SocialCertPage} from '../pages/social-cert/social-cert';
import {WechatPayPage} from '../pages/wechat-pay/wechat-pay';
import {SettingPage} from '../pages/setting/setting';
import {ChangepsdPage} from '../pages/changepsd/changepsd';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PipesModule} from '../pipes/pipes.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IdentificationPage,
    FindPage,
    MinePage,
    AboutPage,
    ContactPage,
    FindDetailPage,
    LoginPage,
    RegisterPage,
    ForgottenPage,
    MessagePage,
    MyCouponPage,
    ProblemPage,
    ProblemDetailPage,
    CertificationPage,
    BorrowRecordPage,
    MyCreditPage,
    ToBorrowPage,
    AlipayPage,
    AutoMonPage,
    BankCertPage,
    BankPayPage,
    BasicCertPage,
    OperatorCertPage,
    RecommendPage,
    SocialCertPage,
    WechatPayPage,
    SettingPage,
    ChangepsdPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    PipesModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
  tabsHideOnSubPages:true,
  backButtonIcon:'ios-arrow-back-outline'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IdentificationPage,
    FindPage,
    MinePage,
    AboutPage,
    ContactPage,
    FindDetailPage,
    LoginPage,
    RegisterPage,
    ForgottenPage,
    MessagePage,
    MyCouponPage,
    ProblemPage,
    ProblemDetailPage,
    CertificationPage,
    BorrowRecordPage,
    MyCreditPage,
    ToBorrowPage,
    AlipayPage,
    AutoMonPage,
    BankCertPage,
    BankPayPage,
    BasicCertPage,
    OperatorCertPage,
    RecommendPage,
    SocialCertPage,
    WechatPayPage,
    SettingPage,
    ChangepsdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    PhotoLibrary,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
