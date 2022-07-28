import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h1{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'first-project';
  data = 'Angular';
  visible:boolean = true;
  getfunc(){
    return 'This is my function'
  }
}
