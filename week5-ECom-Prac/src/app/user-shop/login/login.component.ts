import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/Auth-service';
import { storeUser } from './storeUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  errorMsg: string = '';
  isAdmin: boolean = false;
  isAuthenticated = false;

  constructor(
    private _authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  switchNow() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitForm(form: NgForm) {
    this.isLoading = true;
    this.isAuthenticated = true;

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const name = form.value.name;
    const mobile = form.value.mobile;
    const password = form.value.password;

    if (email === 'lavish-admin@lavish.com') {
      this.isAdmin = true;
      this.forAdmin();
    }

    const observer = {
      next: (resData: any) => {
        //console.log(resData);
        this.router.navigate(['']);
      },
      error: (errorMessage: { message: any }) => {
        this.errorMsg = errorMessage.message;
      },
    };

    const observerSignUp = {
      next: (resData: any) => {
        // console.log(resData);
        this.router.navigate(['']);
        this.storeUserData(name, email, mobile, resData.localId).subscribe();
      },
      error: (errorMessage: { message: any }) => {
        this.errorMsg = errorMessage.message;
      },
    };

    const observerAdmin = {
      next: (resData: any) => {
        this.router.navigate(['/adminPortal']).then(() => {
          window.location.reload();
        });
      },
      error: (errorMessage: { message: any }) => {
        this.errorMsg = errorMessage.message;
      },
    };

    if (this.isLoginMode && this.isAdmin == true) {
      this.isLoading = false;
      this._authService
        .login(email, password, this.isAdmin)
        .subscribe(observerAdmin);
    } else if (this.isLoginMode) {
      this.isLoading = false;
      this._authService
        .login(email, password, this.isAdmin)
        .subscribe(observer);
    } else {
      this._authService
        .signUp(email, password, this.isAdmin)
        .subscribe(observerSignUp);
      //this.storeUserData(name,email)
    }

    form.reset;
  }

  forAdmin() {
    alert('Admin logged in');
    this.router.navigate(['/adminPortal']);
  }

  storeUserData(
    name: string,
    email: string,
    mobile: string,
    localId: string
  ): Observable<storeUser> {
    const newUser: storeUser = {
      name: name,
      email: email,
      mobile: mobile,
      role: 'user',
      isActive: true,
      id: localId,
    };
    //console.log(newUser);
    //console.log(localId);
    //console.log(newUser);
    return this.http.put<storeUser>(
      'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
        localId +
        '.json',
      newUser
    );
  }

  getUserData(localId: string): Observable<storeUser> {
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/users/' +
      localId +
      '.json';
    return this.http.get<storeUser>(url);
  }
}
