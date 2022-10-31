import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {






  msg: string = ""





  userForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z]/)
    ]),

    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z]/)
    ]),

    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(50)
    ]),


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


  showFormData() {
    if (this.userForm.valid) {


      this.auth.register(this.userForm.value).subscribe({

        next: (resp) => {
          this.msg = resp.message

          if (resp.message == 'success') {
            this._Router.navigate(['/login'])

          }
          else {
            this._Router.navigate(['/register'])
          }
        },


        
        error: (err) => {
          console.log(err)
        }
      })
    }

    else {
      alert('try again')
    }

  }

  constructor(public auth: AuthonticationService, public _Router: Router) { }


  ngOnInit(): void {
  }

}
