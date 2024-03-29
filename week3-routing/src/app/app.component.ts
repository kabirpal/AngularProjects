import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week3-routing';

  constructor(private router:Router){}

  onClick(){
    this.router.navigate(['server']);
  }

  onClickRegister(){
    this.router.navigate(['register']);
  }
}
