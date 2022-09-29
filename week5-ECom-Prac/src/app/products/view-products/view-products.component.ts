import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
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

  loadedPosts: Products[] = [];
  productList: any;
  BooksList: Products[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private _productService: ProductService,
    private _myCartService: MyCartService,
    private _myWishListService: WishListService,
    private _toastService: ToastService
  ) {}

  addToCart(item: Products) {
    console.log(item);
    this._toastService.showSuccessToast(
      'Successfully',
      'Product is added to cart'
    );
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    console.log(this.firebaseProduct);
    this._myCartService.addToFirebase({ ...item, quantity: item.quantity + 1 });
  }

  addToWishList(item: any) {
    this._myWishListService.addToWishList(item);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.isFetching = true;
    this.activatedRoute.params.subscribe((data) => {
      this.productID = data['id'];
      //console.log(this.productID)

      this._productService
        .viewProduct(this.productID.toString())
        .subscribe((viewData) => {
          this.productData = viewData;
          this.productCategory = viewData.ProductCategory;
          this._productService
            .viewRelatedProducts(this.productCategory)
            .subscribe((res) => {
              //console.log(res);
              this.loadedProducts = res;
              //onsole.log(this.loadedProducts);
            });
        });
    });
    this.isFetching = false;
    window.scroll(0, 0);
  }

  scrollback() {
    window.scroll(0, 0);
  }
}
