import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../Auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title = 'week4-FirebaseAuth';
isLoginMode = true;
errorMsg:string="";
isLoading = false;

constructor(private _authService:AuthService, private router:Router){}

switchNow(){
  this.isLoginMode = !this.isLoginMode;
}

onSubmitForm(form: NgForm){
  if(!form.valid){
    return
  }
  const email = form.value.email;
  const password=form.value.password;

  let authObs: Observable<AuthResponseData>//not required.
  
  const observer = {
    next : (resData: any) =>{
      console.log(resData);
      this.router.navigate(['/forecast']);
      this.isLoading=false;

    },
    error: (errorMessage: { message: any}) => {
      this.errorMsg = errorMessage.message;
      this.isLoading=false;
  }
}

  if(this.isLoginMode){
    this._authService.login(email,password).subscribe(observer);
    this.isLoading=true;
  }
  else{
    this._authService.signUp(email,password).subscribe(observer);
    this.isLoading=true;
  }  

  form.reset
}
}