import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmitForm(feedbackForm) {
    const userName = feedbackForm.value.name;
    const userEmail = feedbackForm.value.email;
    const message = feedbackForm.value.message;
    //console.log(userName);
    this.storeFeedback(userName, userEmail, message);
  }

  storeFeedback(name: string, email: string, message: string) {
    const newUser = {
      name: name,
      email: email,
      message: message,
    };
    this.http
      .post(
        'https://lavish-67a42-default-rtdb.firebaseio.com/feedback.json',
        newUser
      )
      .subscribe();
  }
}
