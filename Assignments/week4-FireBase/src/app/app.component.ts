import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './Auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  title = 'week4-FireBase';
  private userSub: Subscription = new Subscription;
  constructor(private _authService : AuthService){}

  ngOnInit() {
    this.userSub = this._authService.user.subscribe(user =>{
      this.isAuthenticated = !user ? false : true;
      //this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  
  onLogOut(){
    this._authService.logout();
    this.isAuthenticated = false;
  }
}
