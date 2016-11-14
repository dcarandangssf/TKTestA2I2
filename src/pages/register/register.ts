import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersRest } from '../../providers/users-rest';
import { LobbyPage } from '../lobby/lobby';
import 'rxjs/add/operator/map';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public userRest: UsersRest) {
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }
  
  user = {};
  
  signupForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.userRest.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.push(LobbyPage);
    }, err => {
      alert("Uh ohes!");
    });
  }
}
