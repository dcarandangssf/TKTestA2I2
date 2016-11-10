import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { QuestionsPage } from '../questions/questions';
import { HistoryPage } from '../history/history';
import { QuestionsRest } from '../../providers/questions-rest-service';

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

  constructor(public navCtrl: NavController, private questionsRest: QuestionsRest) {
      questionsRest.load();
  }

  goToTest() {
    TKAnswersService.resetAnswers()
    .then(this.navCtrl.push(QuestionsPage));
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
  }

}

// function($scope, TKTestQuestionService, $state, TKAnswersService, SSFUsersRest, $window, $ionicHistory) {
//     TKTestQuestionService.all();
//     $scope.goToTest = function() {
//         TKAnswersService.resetAnswers();
//         $state.go('question', {
//             questionID: 1
//         });
//     };
//     $scope.logout = function() {
//         SSFUsersRest.logout($window.localStorage.token)
//             .then(function(response) {
//                 // handle different responses and decide what happens next
//                 if(response.status === 204) {
//                     $window.localStorage.clear();
//                     $ionicHistory.nextViewOptions({
//                         historyRoot: true
//                     });
//                     $state.go('landing');
//                 }
//             }, function(error) {
//                 // inform the user of any known problems that arose, otherwise give a generic 
//                 // failed message
//                 if(error.status === 500) {
//                     return alert("uh oh... you're stuck here");
//                 }
//             });
//     };
// }