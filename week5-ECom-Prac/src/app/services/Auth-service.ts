import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, tap, BehaviorSubject, Observable } from 'rxjs';
import { storeUser } from '../user-shop/login/storeUser';
import { User } from '../user-shop/login/user';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  isAdmin: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<User | null>(null);
  private tonkenExpirationTimer: any;

  autoLogIn() {
    const userData: {
      isAdmin: boolean;
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) {
      return;
    }

    const loadUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate),
      userData.isAdmin
    );

    if (loadUser.token) {
      this.user.next(loadUser);
      // const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      // this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    // if(this.tonkenExpirationTimer){
    //     clearTimeout(this.tonkenExpirationTimer)
    // }
    // this.tonkenExpirationTimer = null;
  }

  // autoLogout(timeRemaing:number){
  //     this.tonkenExpirationTimer = setTimeout(()=>{
  //         this.logout();
  //     },timeRemaing);
  //}

  signUp(email: string, password: string, isAdmin: boolean) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhvo251FZP-a-evJh7K6ID7vB2R0OYlQM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
          isAdmin: false,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          //tap is a operator that allows us to perform an action without changing its response.
          // const expirationDate = new Date(new Date().getTime()+ +resData.expiresIn * 1000)
          // const user = new User(resData.email,resData.localId,resData.idToken,expirationDate);
          // this.user.next(user);

          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn,
            resData.isAdmin
          );
        })
      );
  }

  login(email: string, password: string, isAdmin: boolean) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhvo251FZP-a-evJh7K6ID7vB2R0OYlQM',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log(resData.expiresIn);
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn,
            isAdmin
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: any,
    isAdmin: boolean
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const myUser = new User(email, userId, token, expirationDate, isAdmin);
    this.user.next(myUser);
    //this.autoLogout(expiresIn*1000);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        ...myUser,
        expiresIn: expirationDate.getTime(),
      })
    );
    //this.storeUserData()
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect password';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
