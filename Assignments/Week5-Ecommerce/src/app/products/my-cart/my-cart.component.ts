import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  amount: number = 0;
  isFetching: boolean = false;
  cartEmpty: boolean = false;
  localObject: [];
  localId: string;
  loadedPosts: Products[] = [];
  userStatus: boolean;

  constructor(
    private _myCartService: MyCartService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getProductData();
  }
  removeProduct(id: any) {
    if (!this.loadedPosts.length) {
      // this.loadedPosts = [];
      this.isFetching = false;
      return;
    }
    this.deleteProduct(id.ProductId);
    this.loadedPosts = [];
    this.getProductData();
  }

  decreaseQuantity(item) {
    this._myCartService.decreaseQuantity(item);
    setTimeout(() => {
      this.getProductData();
    }, 1500);
  }

  increaseQuantity(item) {
    this._myCartService.increasingQuantity(item);
    setTimeout(() => {
      this.getProductData();
    }, 1500);
  }

  removeAllProduct() {
    this._myCartService.removeAllcart();
    this.getProductData();
  }

  getProductData() {
    this.userStatus = this._myCartService.getUserState();
    //console.log(this.userStatus);
    this.isFetching = true;
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    this.FetchCartData(this.localId);
  }

  private FetchCartData(localId: string) {
    setTimeout(() => {
      this.http
        .get<Products[]>(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            localId +
            '/addToCart.json'
        )
        .subscribe({
          next: (post) => {
            if (post) {
              //console.log(post);
              this.loadedPosts = Object.values(post);
              console.log(this.loadedPosts);
              this.amount = this.getTotalAmount();
              this.cartEmpty = false;
              this.isFetching = false;
            } else {
              this.isFetching = false;
              this.cartEmpty = true;
              this.loadedPosts = [];
            }
          },
          error: (e) => {
            this.isFetching = false;
            this.cartEmpty = true;
            this.loadedPosts = [];
          },
        });
    }, 600);
  }

  deleteProduct(productId) {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    //console.log(this.localId);
    //console.log(productId);
    //productId = this.loadedPosts = Object.values();
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
      this.localId +
      '/addToCart/' +
      productId +
      '.json';
    //console.log(productId);
    this.http.delete(url).subscribe((res) => {
      this.getProductData();
      //console.log('product deleted', res);
    });
  }

  getTotalAmount(): number {
    let grandTotal: number = 0;
    this.loadedPosts.map((a: Products) => {
      //console.log(a);
      grandTotal += +a.ProductPrice * a.quantity;
    });
    return grandTotal;
  }
}
