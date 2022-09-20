import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Products } from 'src/app/products/booksGet-module';
import { AdminService } from 'src/app/services/admin.service';
import { MyCartService } from 'src/app/services/my-cart.service';
import { storeUser } from 'src/app/user-shop/login/storeUser';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  userDetails!: storeUser[];
  userOrderList: any;
  showOrderData: boolean = false;
  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.adminService.getUserDetails().subscribe(res => {
  //     this.userDetails = res;
  //     console.log(res)
  //   })
  // }
  orderList: Products[] = [];
  isFetching: boolean;
  loadedProducts: Products[] = [];
  loadedUsers: any;

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
  }

  fetchUserOrders(id) {
    this.showOrderData = true;
    console.log(id);
    this.http
      .get(
        'https://lavish-67a42-default-rtdb.firebaseio.com/orders/' +
          id +
          '/userOrders.json'
      )
      .subscribe((post) => {
        this.userOrderList = Object.values(post);
        console.log(post);
      });
  }

  // userStatus(radioValue: boolean) {
  //   this.radioValue = !radioValue;
  //   console.log(radioValue);
  // }

  // disableUser(item: boolean, id: string) {
  //   this.radioValue = !item;
  //   //console.log(this.radioValue);
  //   this.http
  //     .patch<storeUser>(
  //       'https://lavish-67a42-default-rtdb.firebaseio.com/user/' + id + '.json',
  //       { isActive: this.radioValue }
  //     )
  //     .subscribe((post) => this.FetchData());

  //   console.log(this.radioValue);
  // }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<Products>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/orders.json'
      )
      .subscribe((post) => {
        this.loadedUsers = Object.values(post);
        console.log(this.loadedUsers);
        //let firebaseData = Object.values(post);

        // firebaseData.forEach((ele) => {
        //   this.loadedProducts = ele;
        //   console.log(this.loadedProducts);
        // });
      });
  }
}
