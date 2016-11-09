import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionsPage } from '../pages/questions/questions';
import { HistoryPage } from '../pages/history/history';

import { TestResultsRest } from '../../providers/test-results-rest';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage,
    QuestionsPage,
    HistoryPage
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
    LobbyPage,
    QuestionsPage,
    HistoryPage
  ],
  providers: [TestResultsRest]
})
export class AppModule {}
