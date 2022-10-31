import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthonticationService } from '../authontication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthonticationService,private _Router:Router) { }


  enableNavbar: any;
  username:any;

  logOut(){
    this.auth.isLogin.next(false)
    this._Router.navigate(['/login'])
    localStorage.removeItem('checkLogin')
    localStorage.removeItem('token')
  }

  ngOnInit(): void {
  
    // this.enableNavbar = this._auth.isLogin;
    this.auth.isLogin.subscribe({
      next: (val) => {
        let decodeToken:any = jwtDecode(localStorage.getItem('token') || '');
        this.username = decodeToken.first_name;
        this.enableNavbar = val;
      }
    })
  }

}
