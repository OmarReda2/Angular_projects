import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = ''

  loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
  })


  makeLogin(data: any) {
    if (data.valid) {

      this.auth.login(data.value).subscribe({

        next: (res) => {
          this.msg = res.message;
          if (res.message == 'success') {
            this._Router.navigate(['/movies'])
            localStorage.setItem('checkLogin', 'true');
            localStorage.setItem('token', res.token);
            this.auth.isLogin.next(true);

          }


          else {
            this._Router.navigate(['/login'])
          }
        },




        error: (err) => {
          console.log(err);
        }
      })
    }
  }


  constructor(public auth: AuthonticationService, public _Router: Router) { }
  ngOnInit(): void {
  }

}
