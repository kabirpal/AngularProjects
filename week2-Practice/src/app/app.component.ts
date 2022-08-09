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
    console.log(this.user);
    this.submitted = true;
    this.user.displayUsername = this.signupForm.value.userData.UserName,
    this.user.displayEmail = this.signupForm.value.userData.Email,
    this.user.displayGender = this.signupForm.value.selectedgender,
    this.user.displaySecretQuestion = this.signupForm.value.Secret,
//    this.user.displayAnswer = this.signupForm.value.userData.answer
    this.user.displayAnswer = this.signupForm.value.QuestionAnswer
  }
}

