import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm!:NgForm;
  title = 'week2-Practice';
  defaultQuestion = 'teacher';
  defaultGender = 'female';
  answer="";
  genders=['male','female'];
  user = {
    displayUsername:"",
    displayEmail:"",
    displaySecretQuestion:"",
    displayAnswer:"",
    displayGender:""
  };
  submitted = false;


suggestUserName(){
  const superUser = "Angular Learner"
  // this.signupForm.setValue({
  //   QuestionAnswer: "",
  //   Secret: "",
  //   gender: "male",
  //   userData:{
  //     Email: "Angular@angular.com",
  //     UserName: "Angular"
  //     }
    
  //   })
    
  this.signupForm.form.patchValue({
    userData:{
      UserName:superUser
    }
  })
  
}
  onSubmit(){
    this.submitted = true;
    this.user.displayUsername = this.signupForm.value.userData.UserName,
    this.user.displayEmail = this.signupForm.value.userData.Email,
    this.user.displaySecretQuestion = this.signupForm.value.userData.Secret,
    this.user.displayAnswer = this.signupForm.value.userData.QuestionAnswer,
    this.user.displayGender = this.signupForm.value.userData.gender
  }
}

