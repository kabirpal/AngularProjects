import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/Auth-service';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { EventTypes } from 'src/app/TosterComponent/event-types';
import { User } from '../login/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isloggedIn = false;
  title = 'week5-ECom-Prac';
  isAdmin: boolean;
  private userSub: Subscription;
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private _AuthGuard: AuthService,
    private _myCartService: MyCartService
  ) {}

  ngOnInit() {
    this.checkAdmin();
    this.renderFunction();
    // const admin = JSON.parse(localStorage.getItem('userData'));

    // this.checkAdmin();
    // this._AuthGuard.autoLogIn();
    // this.userSub = this._AuthGuard.user.subscribe((user) => {
    //   this.isloggedIn = !!user;
    // });
    // this.isAdmin = admin['isAdmin'];
    // console.log(this.isAdmin);
    // this._myCartService.getProductData().subscribe(post=>{
    //   this.totalItemNumber = post.length;
    // })
  }

  renderFunction() {
    const admin = JSON.parse(localStorage.getItem('userData'));

    // this.checkAdmin();
    this._AuthGuard.autoLogIn();
    this.userSub = this._AuthGuard.user.subscribe((user) => {
      this.isloggedIn = !!user;
      const admin = JSON.parse(localStorage.getItem('userData'));
      console.log(admin);
      if (admin && admin['isAdmin']) {
        this.isAdmin = true;
      }
    });
    // this.isAdmin = admin['isAdmin'];
    // console.log(this.isAdmin);
  }

  checkAdmin() {
    const admin = JSON.parse(localStorage.getItem('userData'));
    console.log(admin);
    if (admin && admin['isAdmin']) {
      this.isAdmin = true;
    }
    //console.log(adminValue);
    this.renderFunction();
  }

  Onlogout() {
    this._AuthGuard.logout();
    this.isloggedIn = false;
    this.isAdmin = false;
    this.renderFunction();
  }
}
