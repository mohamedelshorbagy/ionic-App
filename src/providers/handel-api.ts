import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HandelApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HandelApi {

  constructor(public http: Http) {
    console.log('Hello HandelApi Provider');
    this.http = http;
  }



//Login Request fo
loginApi(email , password) {
    let headers = new Headers({
        'Content-Type':'application/json'
    });
    let options = new RequestOptions({
        headers:headers

    });
    let body = {
      email:email,
      password:password
    }
    
         return this.http.post('https://demo.paymeapp.co/api/v2/login', JSON.stringify(body) , options);



}

homeData(token){
  let headers = new Headers({
      'Content-Type':'application/x-www-form-urlencoded'
  });
  let body = "token=" + token;



      return this.http.post('https://demo.paymeapp.co/api/v2/mobile/home', encodeURIComponent(body) , {headers : headers})
      .map(res => res.json())
      .subscribe(data => {
            console.log(data);

      });



}




}
