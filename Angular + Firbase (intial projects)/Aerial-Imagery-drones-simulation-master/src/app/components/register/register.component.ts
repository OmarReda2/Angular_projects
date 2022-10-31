import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService) { }
  email: string = ''
  password: string = ''


  register() {
    this.auth.register(this.email, this.password)
  }

  ngOnInit(): void { }
}
