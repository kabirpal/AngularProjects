import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../products/booksGet-module';
import { ToastService } from './toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {
  cartDataList:Products[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient,private _toastService:ToastService) { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this._toastService.showSuccessToast("Successfully",'Product is added to cart')
    this.getTotalAmount();
    console.log(this.cartDataList)
  }

  getTotalAmount():number{
    let grandTotal:number = 0;
    this.cartDataList.map((a:Products)=>{
      console.log(a);
     grandTotal = grandTotal + a.ProductPrice
    })
    return grandTotal;
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id == a.id){
        this.cartDataList.splice(index,1);
      }
    })
    this.productList.next(this.cartDataList)
  }

  removeAllcart(){
    this.cartDataList = [];
    this.productList.next(this.cartDataList)
  }
}
