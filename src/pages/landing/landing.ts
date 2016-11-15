import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { Register } from '../register/register';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class Landing {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  login() {
    this.navCtrl.push(Login);
  }
  
  register() {
    this.navCtrl.push(Register);
  }

  ionViewDidLoad() {
    console.log('Hello Landing Page');
  }

}
