import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestSSFUsers } from '../../providers/rest-ssf-users';
import { Lobby } from '../lobby/lobby';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  
  constructor(
    public navCtrl: NavController,
    public usersRest: RestSSFUsers) {}  

  ionViewDidLoad() {
    console.log('Hello Landing Page');
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
      this.navCtrl.setRoot(Lobby);
    }, err => {
      console.log(err);
    });
  }
}