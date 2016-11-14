import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HttpModule } from '@angular/http';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';

import { Storage } from '@ionic/storage';
import { UsersRest } from '../providers/users-rest';


@NgModule({
  declarations: [
    MyApp,
    // HttpModule,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage
  ],
  providers: [
    Storage,
    UsersRest
  ]
})
export class AppModule {}
