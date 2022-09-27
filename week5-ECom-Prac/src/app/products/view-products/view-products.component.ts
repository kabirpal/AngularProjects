import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    //private http: HttpClient,
    private _productService: ProductService,
    private _myCartService: MyCartService
  ) {}

  addToCart(items: any) {
    this.isFetching = true;
    this._myCartService.addToCart(items);
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(items));
    this._myCartService.addToFirebase(this.firebaseProduct);
    this.isFetching = false;
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
          //console.log(this.productCategory);
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
