import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Products } from '../products/booksGet-module';
import { storeUser } from '../user-shop/login/storeUser';
import { ToastService } from './toast-service.service';

@Injectable({
  providedIn: 'root',
})
export class MyCartService {
  cartDataList: Products[] = [];
  productList = new BehaviorSubject<any>([]);
  isFetching: boolean;
  loadedProducts: boolean;
  userStatus: boolean;
  localObject: [];
  localId: string;
  checkProduct: string;
  loadedPosts: any;
  loadedCart: Products[];

  constructor(private http: HttpClient, private _toastService: ToastService) {}

  deleteProduct(productId: string) {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    console.log(this.localId);
    console.log(productId);
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
      this.localId +
      'addToCart/' +
      productId +
      '.json';
    console.log(productId);
    this.http
      .delete(url)
      .subscribe((res) => console.log('product deleted', res));
    this.FetchData(this.localId);
  }

  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this._toastService.showSuccessToast(
      'Successfully',
      'Product is added to cart'
    );
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    // this.getTotalAmount();
    // console.log(this.getTotalAmount());
  }

  // getTotalAmount(): number {
  //   let grandTotal: number = 0;
  //   this.cartDataList.map((a: Products) => {
  //     //console.log(a);
  //     grandTotal += grandTotal + a.ProductPrice;
  //   });
  //   return grandTotal;
  // }

  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartDataList.splice(index, 1);
      }
    });
    this.productList.next(this.cartDataList);
  }

  removeAllcart() {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    //console.log(this.localId);
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
      this.localId +
      '/addToCart/.json';
    //console.log(url);
    this.http
      .delete(url)
      .subscribe((res) => console.log('product deleted', res));
  }

  removeDataFromCart() {
    setTimeout(() => {
      this.removeAllcart();
    }, 1000);
  }

  getUserState() {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    this.FetchData(this.localId);
    return this.loadedProducts;
  }

  private FetchData(localId) {
    this.isFetching = true;
    this.http
      .get<storeUser[]>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
          localId +
          '.json'
      )
      .subscribe((post) => {
        this.isFetching = false;
        this.loadedProducts = post['isActive'];
        return this.loadedProducts;
      });
  }

  addToFirebase(postData) {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    // const productId = 0;
    setTimeout(() => {
      this.http
        .get(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            this.localId +
            '/addToCart/.json'
        )
        .subscribe((res: Products[]) => {
          if (res) {
            let firebaseData = Object.values(res);
            console.log(res);
            firebaseData.forEach((ele) => {
              console.table(ele);
              this.checkProduct = ele.ProductId;
              if (this.checkProduct === postData.ProductId) {
                this.http
                  .patch<Products>(
                    'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
                      this.localId +
                      '/addToCart/' +
                      postData.ProductId +
                      '.json',
                    { ...postData, quantity: (ele.quantity += 1) }
                  )
                  .subscribe();
              } else {
                postData.quantity = 1;
                this.http
                  .patch(
                    'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
                      this.localId +
                      '/addToCart/' +
                      postData.ProductId +
                      '.json',
                    postData
                  )
                  .subscribe();
              }
            });
          } else {
            this.http
              .put<Products>(
                'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
                  this.localId +
                  '/addToCart/' +
                  postData.ProductId +
                  '.json',
                { ...postData, quantity: 1 }
              )
              .subscribe();
          }
        });
    }, 600);
  }
}
