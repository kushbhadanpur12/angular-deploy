import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http ,Response } from "@angular/http";



@Injectable()
export class SignupService {
  ROOT = 'http://localhost:3000/';
  constructor(private http : HttpClient) { }


  postDataToService(_url, _body) {
    let response;
    //console.log('post: ' + this.ROOT + _url);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    try {
      response = this.http.post(this.ROOT + _url, _body, options);
   
    } catch (e) {
      console.log('Exception ApiService postDataToService ' + e);
    }
    return response;
  }



}
