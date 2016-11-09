import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  
  constructor(public navCtrl: NavController) {
  }  
  
  user = {};
  
  signinForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.navCtrl.push(LobbyPage);
  }

  ionViewDidLoad() {
    console.log('Hello LandingPage Page');
  }
  
}