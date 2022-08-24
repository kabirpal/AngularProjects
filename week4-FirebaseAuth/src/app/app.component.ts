import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './Auth-sercvice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'week4-FirebaseAuth';
  isLoginMode = true;
  errorMsg:string="";

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
        this.router.navigate(['/home']);
      },
      error: (errorMessage: { message: any}) => {
        this.errorMsg = errorMessage.message;
    }
  }

    if(this.isLoginMode){
      this._authService.login(email,password).subscribe(observer)
    }
    else{
      this._authService.signUp(email,password).subscribe(observer)
    }  

    form.reset
  }
}
