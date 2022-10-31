import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthonticationService } from './authontication.service';



@Injectable({
  providedIn: 'root'
})
export class AuthonGuard implements CanActivate {
  canActivate(): boolean {

    if (this._authService.isLogin.getValue()) {  // if isLogin == true
      
      return true
    }

    else {
      this._Router.navigate(['/login'])
      return false;
    }
  }

  constructor(private _authService: AuthonticationService,private _Router:Router) { }
}
