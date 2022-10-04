import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../products/booksGet-module';
import { storeUser } from '../user-shop/login/storeUser';
import { ToastService } from './toast-service.service';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  cartDataList: Products[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private _toastService: ToastService, private http: HttpClient) {}
  localObject: [];
  localId: string;
  isFetching: boolean;
  loadedProducts: boolean;

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

  addToFirebaseWishList(postData: Products) {
    console.log(postData);
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    const proId = postData.ProductId;
    setTimeout(() => {
      this.http
        .get(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            this.localId +
            '/addToWishList/.json'
        )
        .subscribe((res: Products[]) => {
          if (res) {
            let res1 = res;
            //console.log(res1.keys);
            //console.log('Pehla if');
            let firebaseData1 = Object.keys(res);
            //console.log(firebaseData1);
            const numValue = firebaseData1.indexOf(proId);
            if (numValue === -1) {
              this._toastService.showSuccessToast(
                'Successfully',
                'Product is added to wishList'
              );
              this.http
                .patch(
                  'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
                    this.localId +
                    '/addToWishList/' +
                    postData.ProductId +
                    '.json',
                  postData
                )
                .subscribe();
            } else {
              this._toastService.showErrorToast(
                'Error',
                'Product is already in your wishList'
              );
            }
          } else {
            this.http
              .patch<Products>(
                'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
                  this.localId +
                  '/addToWishList/' +
                  postData.ProductId +
                  '.json',
                postData
              )
              .subscribe();
          }
        });
    }, 300);
  }

  removeWishListData(ProductData: any) {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
      this.localId +
      'addToWishList/' +
      ProductData.productId +
      '.json';
    this.http.delete(url).subscribe();
    // setTimeout(() => {
    //   this.FetchData(this.localId);
    // }, 300);
  }
}
