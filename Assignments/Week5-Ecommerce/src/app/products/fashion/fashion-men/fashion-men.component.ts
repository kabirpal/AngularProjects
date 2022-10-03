import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-fashion-men',
  templateUrl: './fashion-men.component.html',
  styleUrls: ['./fashion-men.component.css'],
})
export class FashionMenComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  jeansList: Products[] = [];
  shirtList: Products[] = [];
  loadedProducts: Products[] = [];
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

  addToWishList(item: any) {
    this._myWishListService.addToWishList(item);
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
        console.log(post);
        this.isFetching = false;
        this.loadedPosts = post;
        this.loadedProducts = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'Men'
        );
        this.jeansList = this.loadedProducts.filter(
          (post) => post.SubCategory === 'Jeans'
        );
        this.shirtList = this.loadedProducts.filter(
          (post) => post.SubCategory === 'Shirt'
        );
        this.productList = post;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });
  }
}
