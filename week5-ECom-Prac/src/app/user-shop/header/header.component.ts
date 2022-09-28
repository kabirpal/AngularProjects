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
    const admin = JSON.parse(localStorage.getItem('userData'));

    this.checkAdmin();
    this._AuthGuard.autoLogIn();
    this.userSub = this._AuthGuard.user.subscribe((user) => {
      this.isloggedIn = !!user;
    });
    this.isAdmin = admin['isAdmin'];
    console.log(this.isAdmin);
    // this._myCartService.getProductData().subscribe(post=>{
    //   this.totalItemNumber = post.length;
    // })
  }

  checkAdmin() {
    const admin = JSON.parse(localStorage.getItem('userData'));
    const adminValue = admin['isAdmin'];
    //console.log(adminValue);
  }

  Onlogout() {
    this._AuthGuard.logout();
    this.isloggedIn = false;
  }
}
