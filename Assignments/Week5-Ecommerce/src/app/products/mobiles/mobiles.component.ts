import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  PremiumList: Products[] = [];
  MidRangeList: Products[] = [];
  BudgetList: Products[] = [];
  firebaseProduct: Products[];
  productList: any;
  SmartphoneList: Products[] = [];
  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService,
    private _myWishListService: WishListService
  ) {}

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
  }

  addToWishList(item: any) {
    this._myWishListService.addToFirebaseWishList(item);
  }

  addToCart(item: any) {
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    //console.log(this.firebaseProduct);
    this._myCartService.addToFirebase(item);
  }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Products }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products.json',
        { headers: new HttpHeaders({ 'Custom-Headers': 'hello' }) }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Products[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((post) => {
        if (post) {
          this.loadedPosts = post;
          this.SmartphoneList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'SmartPhone'
          );
          this.PremiumList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'Premium'
          );
          this.MidRangeList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'MidRange'
          );
          this.BudgetList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'Budget'
          );
          this.productList = post;
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.price });
          });
        } else {
          this.loadedPosts = [];
          this.SmartphoneList = [];
          this.PremiumList = [];
          this.MidRangeList = [];
          this.BudgetList = [];
        }
        //console.log(post);
        this.isFetching = false;
      });
  }
}
