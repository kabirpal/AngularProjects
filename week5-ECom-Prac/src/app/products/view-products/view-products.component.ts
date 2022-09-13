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
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient, private _productService:ProductService,private _myCartService:MyCartService) { }


  
  addToCart(items:any){
    this._myCartService.addToCart(items);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      console.log(this.productID)
      this._productService.viewProduct(this.productID.toString()).subscribe(viewData =>{
        this.productData = viewData;
      })
     })
  }
}
