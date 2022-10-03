import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-fashion-kids',
  templateUrl: './fashion-kids.component.html',
  styleUrls: ['./fashion-kids.component.css'],
})
export class FashionKidsComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  firebaseProduct: Products[];
  productList: any;
  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService,
    private _toastService: ToastService,
    private _myWishListService: WishListService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
  }

  addToWishList(item: any) {
    this._myWishListService.addToWishList(item);
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
        'https://lavish-67a42-default-rtdb.firebaseio.com/kidsFashion.json'
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
      });
  }
}
