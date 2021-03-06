import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestSSFUsers {

  private baseUrl = "https://strongloop-backend-dcarandangssf.c9users.io:8080/api/"
  private path = "SSFUsers/"
  
  constructor(public http: Http) {
    console.log('Hello UsersRest Provider');
  }

  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  
  login(credentials) {
    return this.http.post(
      this.baseUrl + this.path + 'login',
      credentials
    );
  }

  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + 'logout' +
        '?access_token=' + token,
      {} //you have to pass an empty object because this is using the post
        //method and it is expecting two parameters of this function call
    );
  } 
  
}