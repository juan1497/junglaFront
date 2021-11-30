import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const status=localStorage.getItem("token")
    const roles=localStorage.getItem("role");
    const user=localStorage.getItem("user");
    const email=localStorage.getItem("email");
    if(!status||!roles||!user||!email){
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  
}
