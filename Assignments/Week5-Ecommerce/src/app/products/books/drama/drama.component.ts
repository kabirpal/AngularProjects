import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../../booksGet-module';
import { Toast } from 'bootstrap';
import { WishListService } from 'src/app/services/wishList.service';
import { ToastService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css'],
})
export class DramaComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  productList: any;
  firebaseProduct: Products[];
  BooksList: Products[] = [];
  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService,
    private _myWishListService: WishListService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
    this.isFetching = false;
  }

  addToCart(item: Products) {
    //console.log(item);
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    //console.log(this.firebaseProduct);
    this._myCartService.addToFirebase(item);
  }

  addToWishList(item: any) {
    this._myWishListService.addToWishList(item);
  }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Products }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products.json'
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
          this.isFetching = false;
          this.loadedPosts = post;
          this.productList = post;
          this.BooksList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'Books'
          );
          this.productList.forEach((a: Products) => {
            Object.assign(a, { quantity: 1, total: a.ProductPrice });
          });
        } else {
          this.loadedPosts = [];
          this.productList = [];
          this.BooksList = [];
        }
      });
  }
}
