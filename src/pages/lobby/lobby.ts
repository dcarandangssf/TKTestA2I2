import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';


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

  constructor(public navCtrl: NavController) {}

  // goToTest() {
  //   navCtrl.push(Questions);
  // }

  // goToHistory() {
  //   navCtrl.push(History);
  // }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }

}
