import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { QuestionsPage } from '../questions/questions';
import { HistoryPage } from '../history/history';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {

  constructor(public navCtrl: NavController) {
      this.navCtrl = navCtrl;
    
      //This will hold data from our form
      // this.data = null;
        
  }

  goToTest() {
    this.navCtrl.push(QuestionsPage);
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }

}
