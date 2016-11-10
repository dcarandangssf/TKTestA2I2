import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { SSfUsersRest } from '../../provider/ssf-users-rest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  
  constructor(
    public navCtrl: NavController,
    public ssfUsersRest: SSFUsersRest
    ) {}  
  
  user = {};
  
  signinForm(form) {
    console.log(this.user);
    
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    
    this.ssfUsersRest.post(form)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      this.navCtrl.setRoot(LobbyPage);
      },
      err => {
        alert(err);
      })
  }

  ionViewDidLoad() {
    console.log('Hello LandingPage Page');
  }
  
}