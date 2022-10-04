import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: any = [];
  isFetching: boolean = false;
  allProducts: number = 0;
  firebaseProduct: Products[];
  localObject: [];
  localId: string;
  constructor(
    private _myWishListService: WishListService,
    private _myCartService: MyCartService,
    private _toastService: ToastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    this.FetchData();
  }

  addToCart(item: any) {
    console.log(item.ProductId);
    this.removeWishListData(item);
    this._myCartService.getUserState();
    this._myCartService.addToFirebase(item);
    this.FetchData();
  }

  removeWishListData(item) {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    console.log(this.localId);
    this.http
      .delete(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
          this.localId +
          '/addToWishList/' +
          item.ProductId +
          '.json'
      )
      .subscribe();
    this.FetchData();
  }

  FetchData() {
    this.http
      .get(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
          this.localId +
          '/addToWishList/.json'
      )
      .subscribe((res) => {
        if (res) {
          this.products = Object.values(res);
        } else {
          this.products = [];
        }
        this.isFetching = false;
      });
  }

  deleteData(item) {
    this._toastService.showWarningToast(
      'Deleted',
      'Product has been deleted from Wishlist'
    );
    this._myWishListService.removeWishListData(item);
  }
}
