import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-self-help',
  templateUrl: './self-help.component.html',
  styleUrls: ['./self-help.component.css'],
})
export class SelfHelpComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  productList: any;
  SelfHelpList: Products[] = [];
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
  }

  addToCart(item: any) {
    this._myCartService.getUserState();
    this._myCartService.addToFirebase(item);
  }

  addToWishList(item: any) {
    this._myWishListService.addToFirebaseWishList(item);
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
          this.productList = post;

          this.BooksList = this.loadedPosts.filter(
            (post) => post.ProductCategory === 'Books'
          );
          //console.log(this.BooksList);
          this.SelfHelpList = this.BooksList.filter(
            (post) => post.SubCategory === 'Self-Help'
          );
          //console.log(this.SelfHelpList);
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.price });
          });
        } else {
          this.loadedPosts = [];
          this.productList = [];
          this.BooksList = [];
          this.SelfHelpList = [];
        }
        //console.log(post);
        this.isFetching = false;
      });
  }
}
