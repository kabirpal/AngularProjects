import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  // products:any=[];
  allProducts:number=0;
  loadedProducts:boolean=true;
  isFetching:boolean=true;
  cartDataList: Products[] = [];
  productList = new BehaviorSubject<any>([]);
  userStatus: boolean;
  localObject: [];
  localId: string;
  checkProduct: string;
  loadedPosts: Products[];
  loadedCart:Products[];

  
  constructor(private _myCartService:MyCartService, private http:HttpClient) { }

  ngOnInit(): void {
    this.loadedProducts = this._myCartService.getUserState();
    //console.log(this.loadedProducts);
    this.getProductData();
    this.allProducts = +this._myCartService.getTotalAmount();
    this.isFetching=false;
  }
  removeProduct(id:any){
    //console.log(id.ProductId);
    this.deleteProduct(id.ProductId);
  }

  removeAllProduct(){
    this._myCartService.removeAllcart();
  }
  getProductData() {
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    this.FetchCartData(this.localId)
  }

  private FetchCartData(localId:string){
    this.http.get<Products[]>('https://lavish-67a42-default-rtdb.firebaseio.com/user/'+localId+'/addToCart.json')
    .subscribe(post=>{
      console.log(post);
      this.loadedPosts = Object.values(post);
      console.log(this.loadedPosts)
    },
    )
  }

  deleteProduct(productId){
    this.localObject = JSON.parse(localStorage.getItem('userData'));
    this.localId = this.localObject['id'];
    console.log(this.localId);
    console.log(productId);
    //productId = this.loadedPosts = Object.values();
    const url = 'https://lavish-67a42-default-rtdb.firebaseio.com/user/'+this.localId+'/addToCart/'+productId+".json";
    console.log(productId);
    this.http.delete(url).subscribe(res => console.log("product deleted",res));
  }

  

}
