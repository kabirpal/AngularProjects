import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week2-Dashboard';
  tabs:any=[{
    home:true,
    propertyB:true,
    services:true,
    observables:true,
    errorH:true
  }]
  

  onPress(tab:string){
    if(tab=='home'){
      this.tabs.home=true;
      this.tabs.propertyB=false;
      this.tabs.services=false;
      this.tabs.observables=false;
      this.tabs.errorH=false
      console.log(this.tabs);
    }

    else if (tab=='property'){
      this.tabs.propertyB=true;
      this.tabs.home=false;
      this.tabs.services=false;
      this.tabs.observables=false;
      this.tabs.errorH=false;
      console.log(this.tabs);
    }

    
    else if (tab=='services'){
      this.tabs.services=true;
      this.tabs.home=false;
      this.tabs.propertyB=false;
      this.tabs.observables=false;
      this.tabs.errorH=false;
      console.log(this.tabs);
    }

    
    else if (tab=='observables'){
      this.tabs.observables=true;
      this.tabs.home=false;
      this.tabs.propertyB=false;
      this.tabs.services=false;
      this.tabs.errorH=false;
      console.log(this.tabs);
    }

    
    else if (tab=='errorH'){
      this.tabs.errorH=true;
      this.tabs.home=false;
      this.tabs.propertyB=false;
      this.tabs.services=false;
      this.tabs.observables=false;
      console.log(this.tabs);
    }
  }
}
