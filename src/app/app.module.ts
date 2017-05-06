import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalContentPage } from './../pages/home/modal';
import { NavigationDetailsPage } from './../pages/home/detail';
import { PopoverPage } from './../pages/home/popover';
import { BlankPage } from './../pages/home/blank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalContentPage,
    NavigationDetailsPage,
    PopoverPage,
    BlankPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalContentPage,
    NavigationDetailsPage,
    PopoverPage,
    BlankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
