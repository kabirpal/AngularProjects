import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { MyCartService } from 'src/app/services/my-cart.service';
import { storeUser } from 'src/app/user-shop/login/storeUser';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  userDetails!: storeUser[];
  constructor(
    private _adminService: AdminService,
    private http: HttpClient,
    private _myCartService: MyCartService
  ) {}

  isFetching: boolean;
  loadedProducts: storeUser[] = [];
  productList: any;
  radioValue: boolean;

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
  }

  userStatus(radioValue: boolean) {
    this.radioValue = !radioValue;
    console.log(radioValue);
  }

  disableUser(item: boolean, id: string) {
    this.radioValue = !item;
    //console.log(this.radioValue);
    this.http
      .patch<storeUser>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user/' + id + '.json',
        { isActive: this.radioValue }
      )
      .subscribe((post) => this.FetchData());

    console.log(this.radioValue);
  }

  onDeleteUser(UserId: any) {
    this._adminService.deleteProduct(UserId);
  }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: storeUser }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: storeUser[] = [];
          console.log(responseData);
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key] });
            }
          }
          return postsArray;
        })
      )
      .subscribe((post) => {
        console.log(post);
        this.isFetching = false;
        this.loadedProducts = post;
      });
  }
}
