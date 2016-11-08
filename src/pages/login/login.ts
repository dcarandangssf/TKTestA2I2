import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { LobbyPage } from '../lobby/lobby';
import { User } from '../models/user';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
      this.navCtrl = navCtrl;
    
      //This will hold data from our form
      // this.data = null;
      
  }

  lobby() {
      this.navCtrl.push(LobbyPage);
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
  }
  
  logForm(){
    console.log(this.login.value)
  }

}
