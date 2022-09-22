import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/booksGet-module';
import { storeUser } from 'src/app/user-shop/login/storeUser';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  userOrderList: any;
  showOrderData: boolean = false;
  isFetching: boolean;
  loadedUsers: any;

  constructor(private http: HttpClient) {}

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

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<Products>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/orders.json'
      )
      .subscribe((post) => {
        this.loadedUsers = Object.values(post);
        console.log(this.loadedUsers);
      });
  }
}
