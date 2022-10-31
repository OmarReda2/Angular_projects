import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from './login-data';


@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {


  isLogin = new BehaviorSubject(false);

  constructor(private req: HttpClient) {
    if (localStorage.getItem('checkLogin') != null) {
      this.isLogin.next(true)
    } else {
      this.isLogin.next(false)
    }
  }

  // isLogin:boolean = false;

  // isLogin = new BehaviorSubject(false);


  register(user: any): Observable<any> {
    return this.req.post("https://route-egypt-api.herokuapp.com/signup", user)
  }


  login(loginData: LoginData): Observable<any> {
    return this.req.post("https://route-egypt-api.herokuapp.com/signin", loginData)
  }



}


