import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Products } from '../products/booksGet-module';
import { storeUser } from '../user-shop/login/storeUser';
import { ToastService } from './toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {
  cartDataList:Products[] = [];
  productList = new BehaviorSubject<any>([]);
  isFetching:boolean;
  //loadedProducts:storeUser[] =[];
  loadedProducts:boolean;
  userStatus:boolean;
  localObject:[];
  localId:string;

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
    //console.log(this.cartDataList)
  }



  getTotalAmount():number{
    let grandTotal:number = 0;
    this.cartDataList.map((a:Products)=>{
      //console.log(a);
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

  getUserState(){
    this.localObject = JSON.parse(localStorage.getItem("userData"));
    this.localId = this.localObject['id'];
    this.FetchData(this.localId);
    return this.loadedProducts;
  }

  private FetchData(localId){
    this.isFetching = true;
    this.http.get<storeUser[]>('https://lavish-67a42-default-rtdb.firebaseio.com/user/'+localId+'.json')
    .subscribe(post=>{
      // console.log(post);
      this.isFetching=false
      this.loadedProducts = post['isActive'];
      return this.loadedProducts;
    },
    )
  }
}
