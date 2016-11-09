import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsRest } from '../../providers/questions-rest-service'
import { TKAnswersService } from '../../providers/tk-answers-service'
import { QuestionsService } from '../../providers/questions-service'

/*
  Generated class for the Questions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
  providers: [QuestionsRest, TKAnswersService, QuestionsService]
})
export class QuestionsPage {

questions: any;
qNumber: any;
nextqNumber: any;
category: any;

  constructor(public navCtrl: NavController, public qRest: QuestionsRest) {
    this.loadQuestions();
    
// $scope.ptorQuestionGoA = 'ptor-question-go-a' + $stateParams.questionID;
// $scope.ptorQuestionGoB = 'ptor-question-go-b' + $stateParams.questionID;
// $scope.ptorQuestionTextA = 'ptor-question-text-a' + $stateParams.questionID;
// $scope.ptorQuestionTextB = 'ptor-question-text-b' + $stateParams.questionID;    

// $scope.qNumber = $stateParams.questionID;
   
  }

// testInfo.forEach(function(infoDict) {
//     if (infoDict.Answer_ID === "A")
//         $scope.questionA = infoDict;
//     if (infoDict.Answer_ID === "B")
//         $scope.questionB = infoDict;
// });

// $scope.buttonClicked = function(option) {
//     var category = $scope["question" + option].Style;
//     TKAnswersService.saveAnswer(category);

//     if ($scope.qNumber == 30) {
//         performRequest();
//     }
//     else {
//         var nextqNumber = Number($scope.qNumber) + 1;
//         $state.go('question', {
//             questionID: nextqNumber
//         });
//     }
// };

// $scope.goBack = function() {
//     if ($scope.qNumber > 1)
//         TKAnswersService.eraseLastAnswer();
//     $ionicHistory.goBack();
// };

// function performRequest() {
//     var answersDict = angular.copy(TKAnswersService.getAnswers());
//     var date = new Date();
//     answersDict["createDate"] = date.toUTCString();
//     answersDict["userId"] = $window.localStorage.userId;
//     TKAnswersService.saveTest(answersDict, $window.localStorage.token);
//     TKResultsButtonService.setShouldShowMenuButton(true);
//     $ionicHistory.nextViewOptions({
//         historyRoot: true
//     });
//     $state.go('results');
// }

  loadQuestions() {
    this.qRest.load()
      .then(data => {
        this.questions = data;
      })
  }
  
  buttonClicked(option) {
    this.category = ["question" + option];// .Style;
    TKAnswersService.saveAnswer(this.category);
    
    if(this.qNumber == 30) {
      performRequest();
    }
    else {
      this.nextqNumber = Number(this.qNumber) + 1;
      // navCtrl.push(QuestionsPage)
    }
  }

  ionViewDidLoad() {
    console.log('Hello QuestionsPage Page');
  }

}

