import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../products/booksGet-module';
import { ToastService } from './toast-service.service';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  cartDataList: Products[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private _toastService: ToastService) {}

  getProductData() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  addToWishList(product: any) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this._toastService.showSuccessToast(
      'Successfully',
      'Product is added to Wishlist'
    );
    console.log(this.cartDataList);
  }

  removeWishListData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartDataList.splice(index, 1);
      }
    });
    this.productList.next(this.cartDataList);
  }
}
