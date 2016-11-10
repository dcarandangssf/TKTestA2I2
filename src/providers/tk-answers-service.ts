import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TestResultsRest } from './test-results-rest';

/*
  Generated class for the TKAnswersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TKAnswersService {

    answerCategories: any = {
        "competing": 0,
        "collaborating": 0,
        "compromising": 0,
        "avoiding": 0,
        "accommodating": 0
    };
    categoriesStack: any = [];

  constructor(public http: Http, public testResultsRest: TestResultsRest) {
    console.log('Hello TKAnswersService Provider');
  }
  
  getAnswers() {
      return this.answerCategories;
  };
  
  saveAnswer(answerCategory) {
      this.answerCategories[answerCategory.toLowerCase()]++;
      this.categoriesStack.push(answerCategory);
  };

  resetAnswers() {
      for (var property in this.answerCategories) {
          if (this.answerCategories.hasOwnProperty(property)) {
              this.answerCategories[property] = 0;
          }
      }
  };

  eraseLastAnswer() {
      this.answerCategories[this.categoriesStack.pop().toLowerCase()]--;
  };

  saveTest(test, token) {
      // var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
      // tempTests.push(test);
      // $window.localStorage.tests = JSON.stringify(tempTests);
      // var test = $window.localStorage.tests;

      this.testResultsRest.save(test, token)
          .then(function(response) {

          }, function(error) {

          });
  };

  getTests(token) {

      // return $window.localStorage.tests ? JSON.parse($window.localStorage.tests) : [];

      return this.testResultsRest.getAll(token);

  };

  setAnswers(answers) {
      this.answerCategories = answers;
  };
}

// function($window, TestResultsRest) {
//             var service = this;
//             var answerCategories = {
//                 "competing": 0,
//                 "collaborating": 0,
//                 "compromising": 0,
//                 "avoiding": 0,
//                 "accommodating": 0
//             };
//             var categoriesStack = [];

//             service.getAnswers = function() {
//                 return answerCategories;
//             };

//             service.saveAnswer = function(answerCategory) {
//                 answerCategories[answerCategory.toLowerCase()]++;
//                 categoriesStack.push(answerCategory);
//             };

//             service.resetAnswers = function() {
//                 for (var property in answerCategories) {
//                     if (answerCategories.hasOwnProperty(property)) {
//                         answerCategories[property] = 0;
//                     }
//                 }
//             };

//             service.eraseLastAnswer = function() {
//                 answerCategories[categoriesStack.pop().toLowerCase()]--;
//             };

//             service.saveTest = function(test, token) {
//                 // var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
//                 // tempTests.push(test);
//                 // $window.localStorage.tests = JSON.stringify(tempTests);
//                 // var test = $window.localStorage.tests;

//                 TestResultsRest.save(test, token)
//                     .then(function(response) {

//                     }, function(error) {

//                     });
//             };

//             service.getTests = function(token) {

//                 // return $window.localStorage.tests ? JSON.parse($window.localStorage.tests) : [];

//                 return TestResultsRest.getAll(token);

//             };

//             service.setAnswers = function(answers) {
//                 answerCategories = answers;
//             };
//         }