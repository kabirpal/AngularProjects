import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service'
import { AuthService } from './user-shop/login/Auth-service';
import { User } from './user-shop/login/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  totalItemNumber:number=0;
  isloggedIn = false;
  title = 'week5-ECom-Prac';
  isAdmin = false;
  private userSub: Subscription;
  user = new BehaviorSubject<User | null>(null);



  constructor(private _myCartService:MyCartService, private _AuthGuard:AuthService){}
  
  ngOnInit():void{
    this._AuthGuard.autoLogIn();
    this.userSub = this._AuthGuard.user.subscribe(user=>{
      this.isloggedIn = !!user;
    });
    this._myCartService.getProductData().subscribe(post=>{
      this.totalItemNumber = post.length;
    })
  }

  Onlogout(){
    this._AuthGuard.logout();
    this.isloggedIn=false;
}
  
}
