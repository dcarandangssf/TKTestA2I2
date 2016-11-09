import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResultsRest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResultsRest {

data: any;

  constructor(public http: Http) {
    console.log('Hello TestResultsRest Provider');
  }

getAll(token) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed 35 object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults?filter[where][userId]="+$window.localStorage.userId')
        .map(res => res.json())
        .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data = data;
            resolve(this.data);
        });
    });
  }
//      getAll = function(token) {
//             return $http({
//                 headers: {
//                     Authorization: token
//                 },
//                 url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults?filter[where][userId]="+$window.localStorage.userId,
//                 method: 'GET'
//             });
//         };

save(test, token) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed 35 object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post('https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults')
        .map(res => res.json())
        .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data = data;
            resolve(this.data);
        });
    });
  }
  }
  
  save(test, token) {
      return $http({
          headers: {
              Authorization: token
          },
          url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults",
          method: 'POST',
          data: test
      });
  }
}

// .service('TestResultsRest', ['$http', '$window',
//     function($http, $window) {
//         var TestResultsRest = this;
//         TestResultsRest.save = function(test, token) {
//             return $http({
//                 headers: {
//                     Authorization: token
//                 },
//                 url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults",
//                 method: 'POST',
//                 data: test
//             });
//         };
//         TestResultsRest.getAll = function(token) {
//             return $http({
//                 headers: {
//                     Authorization: token
//                 },
//                 url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/TestResults?filter[where][userId]="+$window.localStorage.userId,
//                 method: 'GET'
//             });
//         };
//     }
// ]);