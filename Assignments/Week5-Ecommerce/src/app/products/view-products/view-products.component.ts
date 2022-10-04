import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { WishListService } from 'src/app/services/wishList.service';
import { Products } from '../booksGet-module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  productID: number = 0;
  isFetching: boolean = false;
  productData!: Products;
  productCategory: string;
  loadedProducts: Products[] = [];
  firebaseProduct: Products[];
  ProductDetails: any;
  loadedPosts: Products[] = [];
  productList: Products[];
  BooksList: Products[] = [];
  buttonPressed: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private _productService: ProductService,
    private _myCartService: MyCartService,
    private _myWishListService: WishListService
  ) {}

  addToCart(item: Products) {
    //console.log(this.FetchData(item.ProductId));
    this.buttonPressed = true;
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    this.FetchData(item.ProductId).subscribe((post) => {
      this.isFetching = false;
      this.loadedPosts = post;
      this.productList = post;
      this.BooksList = this.loadedPosts.filter(
        (post) => post.id === item.ProductId
      );
      this.ProductDetails = this.BooksList[0];
      this.productList.forEach((a: Products) => {
        Object.assign(a, { quantity: 1, total: a.ProductPrice });
      });
      this._myCartService.addToFirebase(this.ProductDetails);
    });
    setTimeout(() => {
      this.buttonPressed = false;
    }, 4000);
  }

  // addToWishList(item: any) {
  //   this._myWishListService.addToWishList(item);
  // }

  addToWishList(item: Products) {
    this._myWishListService.addToFirebaseWishList(item);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.isFetching = true;
    this.activatedRoute.params.subscribe((data) => {
      this.productID = data['id'];
      //console.log(this.productID);
      this._productService
        .viewProduct(this.productID.toString())
        .subscribe((viewData) => {
          if (viewData) {
            this.productData = viewData;
            this.productCategory = viewData.ProductCategory;
            this._productService
              .viewRelatedProducts(this.productCategory)
              .subscribe((res) => {
                if (res) {
                  this.loadedProducts = res;
                } else {
                  this.loadedProducts = [];
                }
                //console.log(res);
              });
          } else {
            this.productData = undefined;
          }
        });
    });
    this.isFetching = false;
    window.scroll(0, 0);
  }

  scrollback() {
    window.scroll(0, 0);
  }

  private FetchData(proId) {
    //console.log(proId);
    this.isFetching = true;
    return this.http
      .get<{ [key: string]: Products }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products/.json'
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
      );
  }
}