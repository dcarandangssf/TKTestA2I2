import { NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('content') content;
  
  public menuRoot = LandingPage;
  
  pages = [
     { title: 'Landing', component: LandingPage }
  ];

  constructor(public navCtrl: NavController) {
    
  }

}
