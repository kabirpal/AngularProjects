import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "src/app/Auth-service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private _authService : AuthService){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        router: RouterStateSnapshot
        ): boolean | Observable<boolean | UrlTree> | Promise<boolean> {
        return this._authService.user.pipe(map(user =>{
            return !!user;
        }))
    }
}