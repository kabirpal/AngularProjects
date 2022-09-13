import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {

  isFetching:boolean = false;
  
  productList1:any;
  productList2:any;
  productList3:any;
  productList4:any;
  SmartphoneList: Products[]=[];

  constructor(private http:HttpClient,private _myCartService:MyCartService) { }

  ngOnInit(): void {
    this.FetchData1();
    this.FetchData2();
    this.FetchData3();
    this.FetchData4();
  }

  onFetchPosts(){
    this.FetchData1();
    this.FetchData2();
    this.FetchData3();
    this.FetchData4();
    
  }

  addToCart(item:any){
    this._myCartService.addToCart(item);
  }
  
  private FetchData1(){
    this.isFetching = true;
    this.http.get<Products[]>('https://lavish-67a42-default-rtdb.firebaseio.com/Products/401.json').subscribe(post=>{
      this.isFetching=false
      this.productList1 = post;
    },
    )
  }

  private FetchData2(){
    this.isFetching = true;
    this.http.get<Products[]>('https://lavish-67a42-default-rtdb.firebaseio.com/Products/402.json').subscribe(post=>{
      this.isFetching=false
      this.productList2 = post;
    },
    )
  }

  private FetchData3(){
    this.isFetching = true;
    this.http.get<Products[]>('https://lavish-67a42-default-rtdb.firebaseio.com/Products/005.json').subscribe(post=>{
      this.isFetching=false
      this.productList3 = post;
    },
    )
  }
  private FetchData4(){
    this.isFetching = true;
    this.http.get<Products[]>('https://lavish-67a42-default-rtdb.firebaseio.com/Products/002.json').subscribe(post=>{
      this.isFetching=false
      this.productList4 = post;
    },
    )
  }
  

}
