import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './services/Auth-service';
;

@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    outer: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1),
      map( user=> {
        if(user && user.isAdmin==false){
          return true;
        }
        return this.router.createUrlTree(['/login']);
    }));
    
  }
  
}
