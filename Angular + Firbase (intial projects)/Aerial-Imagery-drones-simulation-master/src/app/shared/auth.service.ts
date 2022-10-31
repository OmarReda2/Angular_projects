import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) { }




  // login
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {

        this.router.navigate(['/system']);
        localStorage.setItem("isLogin", 'true');

      },
      (err) => {
        alert(err.message)
      }
    );
  }



  // register
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.router.navigate(['/register']);
        alert(err.message)
      }
    );
  }


  // logout
  logOut() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('isLogin');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
