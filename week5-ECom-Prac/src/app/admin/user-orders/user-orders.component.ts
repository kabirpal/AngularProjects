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
  constructor(
    private _adminService: AdminService,
    private http: HttpClient,
    private _myCartService: MyCartService
  ) {}

  // ngOnInit(): void {
  //   this.adminService.getUserDetails().subscribe(res => {
  //     this.userDetails = res;
  //     console.log(res)
  //   })
  // }

  isFetching: boolean;
  loadedProducts: Products[] = [];
  productList: any;
  radioValue: boolean;

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
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
        let firebaseData = Object.values(post);
        firebaseData.forEach((ele) => {
          this.loadedProducts = Object.values(ele);
          console.log(this.loadedProducts);
        });
      });
  }
}
