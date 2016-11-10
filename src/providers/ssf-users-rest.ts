import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SSFUsersRest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SSFUsersRest {

  constructor(public http: Http) {
    console.log('Hello SSFUsersRest Provider');
  

    post(data) {
      return this.http
        .post("https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers", data)
    };

// create(name: string): Promise<Hero> {
//   return this.http
//     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
//     .toPromise()
//     .then(res => res.json().data)
//     .catch(this.handleError);
// }


    // private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    // return Promise.reject(error.message || error);
    // }

  }
}

// function($http) {
//     var SSFUsersRest = this;
//     SSFUsersRest.post = function(newUserData) {
//         return $http({
//             url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers",
//             method: "POST",
//             data: newUserData
//         });
//     };
//     SSFUsersRest.login = function(currentUserData) {
//         return $http({
//             url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers/login",
//             method: "POST",
//             data: currentUserData
//         });
//     };
//     SSFUsersRest.logout = function(token) {
//         return $http({
//             url: "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/SSFUsers/logout",
//             method: "POST",
//             headers: {
//                 Authorization: token
//             },
//         });
//     };
// }