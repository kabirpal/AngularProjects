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
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  productID:number = 0;
  productData!:Products;
  item:any;
  productCategory:string;
  loadedProducts:Products[]=[];
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient, private _productService:ProductService,private _myCartService:MyCartService) { }


  
  addToCart(items:any){
    this._myCartService.addToCart(items);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      //console.log(this.productID)
      this._productService.viewProduct(this.productID.toString()).subscribe(viewData =>{
        this.productData = viewData;
        this.productCategory=viewData.ProductCategory;
        console.log(this.productCategory);
        this._productService.viewRelatedProducts(this.productCategory).subscribe(res=>{
          console.log(res)
          this.loadedProducts = res;
          console.log(this.loadedProducts);
        });
      })
    })

    
  }
}
