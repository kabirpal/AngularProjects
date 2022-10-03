import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css'],
})
export class FictionComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  productList: any;
  FictionList: Products[] = [];
  BooksList: Products[] = [];
  firebaseProduct: Products[];
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

  addToCart(item: any) {
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    console.log(this.firebaseProduct);
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
        //console.log(post);
        this.isFetching = false;
        this.loadedPosts = post;
        this.productList = post;
        this.BooksList = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'Books'
        );
        //console.log(this.BooksList);
        this.FictionList = this.BooksList.filter(
          (post) => post.SubCategory === 'Fiction'
        );
        //console.log(this.FictionList);
        // this.productList.forEach((a: any) => {
        //   Object.assign(a, { quantity: 1, total: a.price });
        // });
      });
  }
}
