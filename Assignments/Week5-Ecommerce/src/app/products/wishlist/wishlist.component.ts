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
  constructor(
    private _myWishListService: WishListService,
    private _myCartService: MyCartService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this._myWishListService.getProductData().subscribe((res) => {
      if (res) {
        this.products = res;
      } else {
        this.products = [];
      }
      this.isFetching = false;
    });
  }

  addToCart(item: any) {
    this._myWishListService.removeWishListData(item);
    this._myCartService.getUserState();
    this._myCartService.addToFirebase(item);
  }

  deleteData(item) {
    this._toastService.showWarningToast(
      'Deleted',
      'Product has been deleted from Wishlist'
    );
    this._myWishListService.removeWishListData(item);
  }
}
