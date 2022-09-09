import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './Auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'week4-FirebaseAuth';
  isLoginMode = true;
  isLoading = false;
  errorMsg: string = "";
  isAdmin: boolean = false;
  passkey: string = "";
  isAuthenticated = false;

  constructor(private _authService: AuthService, private router: Router) { }

  switchNow() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitForm(form: NgForm) {
    this.isLoading = true;
    this.isAuthenticated = true;
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>//not required.

    if (email === 'lavish-admin@lavish.com') {
      this.isAdmin = true;
      this.forAdmin();
      
    }
    const observer = {
      next: (resData: any) => {
        console.log(resData);
        this.router.navigate(['']);
      },
      error: (errorMessage: { message: any }) => {
        this.errorMsg = errorMessage.message;
      }
    }

    const observerAdmin = {
      next: (resData: any) => {
        console.log(resData);
        this.router.navigate(['/adminPortal']);
      },
      error: (errorMessage: { message: any }) => {
        this.errorMsg = errorMessage.message;
      }
    }

    if (this.isLoginMode && this.isAdmin==true) {
      this.isLoading = false;
      this._authService.login(email, password, this.isAdmin).subscribe(observerAdmin)
    }
    else if (this.isLoginMode) {
      this.isLoading = false;
      this._authService.login(email, password, this.isAdmin).subscribe(observer)
    }
    else {
      this._authService.signUp(email, password, this.isAdmin).subscribe(observer)
    }

    form.reset
  }

  forAdmin() {
    alert('Admin logged in')
    this.router.navigate(['/adminPortal']);
  }
}
