import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient, private _productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      console.log(this.productID)

      if(this.productID>0){
        this._productService.viewProduct(this.productID.toString()).subscribe(viewData =>{
          this.productData = viewData;
        })
      }
      
      if(this.productID>100 && this.productID<200){
        this._productService.viewProductKids(this.productID.toString()).subscribe(viewData =>{
          this.productData = viewData;
        })
      }
      else if(this.productID>200){
        this._productService.viewProductWomen(this.productID.toString()).subscribe(viewData =>{
          this.productData = viewData;
        })
      }
      if(this.productID<100){
      this._productService.viewProductMen(this.productID.toString()).subscribe(viewData =>{
        this.productData = viewData;
      })
    }
    })
  }
}
