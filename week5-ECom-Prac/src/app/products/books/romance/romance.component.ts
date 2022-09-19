import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css'],
})
export class RomanceComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  productList: any;
  RomanceList: Products[] = [];
  BooksList: Products[];
  firebaseProduct: Products[];
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
    this._myWishListService.addToWishList(item);
  }

  addToCart(item: any) {
    this._myCartService.addToCart(item);
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    this._myCartService.addToFirebase(this.firebaseProduct);
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
        console.log(post);
        this.isFetching = false;
        this.loadedPosts = post;
        this.productList = post;
        console.log(this.RomanceList);
        this.BooksList = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'Books'
        );
        this.RomanceList = this.BooksList.filter(
          (post) => post.ProductCategory === 'Romance'
        );
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });
  }
}
