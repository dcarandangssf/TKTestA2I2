import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersRest } from '../../providers/users-rest';
import { LobbyPage } from '../lobby/lobby';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  
  constructor(
    public navCtrl: NavController,
    public usersRest: UsersRest) {}  

  ionViewDidLoad() {
    console.log('Hello LandingPage Page');
  }

  user = {};
  
  signinForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.usersRest.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      console.log(err);
    });
  }
}