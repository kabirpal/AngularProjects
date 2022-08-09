import { Component } from '@angular/core';
import { FormGroup,FormControlName,FormControl } from '@angular/forms';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week2-practice2';
  signupForm = new FormGroup({
    user: new FormControl(""),
    Password:new FormControl('')
  });
  constructor(private userdata:ServiceService){
    console.warn('userdata',userdata.user())
  }
  onSubmit(){
    console.log(this.signupForm.value)
  }
  
}
