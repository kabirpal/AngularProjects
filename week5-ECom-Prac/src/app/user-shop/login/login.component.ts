import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './Auth-service';
import { storeUser } from './storeUser';
import { User } from './user';

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
  isAuthenticated = false;

  constructor(private _authService: AuthService, 
    private router: Router,
    private http: HttpClient) { }

    

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
    const name = form.value.name;
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
        //console.log(resData);
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
      //this.storeUserData(name,email)
    }

    form.reset
  }

  forAdmin() {
    alert('Admin logged in')
    this.router.navigate(['/adminPortal']);
  }

  // storeUserData(name:string,email:string,localId:string):Observable<storeUser>{
  //   const newUser:storeUser={
  //     name:name,
  //     email:email,
  //     role:'user',
  //     isActive:false
  //   }
  //   console.log(newUser);
  //   const url = 'https://lavish-67a42-default-rtdb.firebaseio.com/users/'+localId+'.json';
  //   return this.http.patch<storeUser>(url,newUser)
  // }
  

  storeUserData(name:string,email:string,localId:string):Observable<storeUser>{
    const newUser:storeUser = {
      name: name,
      email:email,
      role: 'user',
      isActive: false
    }
    let url = 'https://lavish-67a42-default-rtdb.firebaseio.com/customers/'+localId+'.json'
    console.log(localId);
    console.log(newUser);
    return this.http.put<storeUser>('https://lavish-67a42-default-rtdb.firebaseio.com/Products/'+localId+'.json',newUser);
    
  }

  
  // storeUserData(){
  //   this.http.put('https://lavish-67a42-default-rtdb.firebaseio.com/users.json',postData).subscribe(res=>{
  //     console.log(res)
  //     postData.name = "";
  //     postData.email='';
  //     postData.isActive;
  //     postData.role = "";}
  //   )}

  
  getUserData(localId:string):Observable<storeUser>{
    const url = 'https://lavish-67a42-default-rtdb.firebaseio.com/users/'+localId+'.json';
    return this.http.get<storeUser>(url);
  }
}