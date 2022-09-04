import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeProject';
  laodedFeature = 'recipe';
  
  onNavigate(feature:string){
    this.laodedFeature = feature;
  }
}
