import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, findIndex, map } from 'rxjs';
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
  numb: any[];

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
    //console.log(postData);
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    const proId = postData.ProductId;
    //console.log(proId);
    setTimeout(() => {
      this.http
        .get(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            this.localId +
            '/addToCart/.json'
        )
        .subscribe((res: Products[]) => {
          if (res) {
            let res1 = res;
            //console.log(res1.keys);
            //console.log('Pehla if');
            let firebaseData = Object.values(res);

            let firebaseData1 = Object.keys(res);
            //console.log(firebaseData1);
            const numValue = firebaseData1.indexOf(proId);
            if (numValue === -1) {
              console.log(true);
              this.sameQuantity(postData);
            } else {
              console.log(false);
              this.increasingQuantity(postData);
            }
            // console.log(res);
            //firebaseData.map((ele) => {
            //console.table(ele);
            //this.checkProduct = ele.ProductId;

            // switch (this.checkProduct === postData.ProductId) {
            //   case false:
            //     this.sameQuantity(postData, ele);
            //     break;
            //   case true:
            //     this.increasingQuantity(postData, ele);
            //     break;
            // }
            // if (this.checkProduct === postData.ProductId) {
            //   console.log('Dusra if');
            //   //console.log((ele.quantity += 1));
            //   this.increasingQuantity(postData, ele);
            // }
            // if (this.checkProduct !== postData.ProductId) {
            //   console.log('3rd else');
            //   //postData.quantity = 1;
            //   this.http
            //     .patch(
            //       'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            //         this.localId +
            //         '/addToCart/' +
            //         postData.ProductId +
            //         '.json',
            //       postData
            //     )
            //     .subscribe();
            // }
            // });
          } else {
            console.log('main else');
            this.http
              .patch<Products>(
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
    }, 300);
  }

  increasingQuantity(postData) {
    //console.log('case 1');
    console.log(postData);
    setTimeout(() => {
      this.http
        .patch<Products>(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            this.localId +
            '/addToCart/' +
            postData.ProductId +
            '.json',
          { ...postData, quantity: (postData.quantity += 1) }
        )
        .subscribe((res) => {
          console.log(res.quantity);
        });
    }, 300);
  }

  sameQuantity(postData) {
    // console.log(ele.quantity);
    const increment = postData.quantity + 1;
    //console.log('case 2');
    this.http
      .patch(
        'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
          this.localId +
          '/addToCart/' +
          postData.ProductId +
          '.json',
        postData
        //{ ...postData, quantity: (ele.quantity = increment) }
      )
      .subscribe();
  }
}
