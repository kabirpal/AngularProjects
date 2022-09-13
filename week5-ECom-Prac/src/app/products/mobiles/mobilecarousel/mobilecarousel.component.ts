import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-mobilecarousel',
  templateUrl: './mobilecarousel.component.html',
  styleUrls: ['./mobilecarousel.component.css']
})
export class MobilecarouselComponent implements OnInit {

  isFetching:boolean = false;
  loadedPosts:Products[] =[];
  productList:any;
  Smartphone:Products[] = [];
  PremiumSmartphone:Products[] = [];
  constructor(private http:HttpClient,private _myCartService:MyCartService) { }

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts(){
    this.FetchData();
  }
  addToCart(item:any){
    this._myCartService.addToCart(item);
  }

  private FetchData(){
    this.isFetching = true;
    this.http.get<{[key:string]:Products}>('https://lavish-67a42-default-rtdb.firebaseio.com/Products.json')
    .pipe(map(responseData=>{
      const postsArray:Products[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key});
        }
      }
      return postsArray
    })
    )
    .subscribe(post=>{
      this.isFetching=false
      this.loadedPosts = post;
      this.productList = post;
      this.Smartphone=this.loadedPosts.filter(post=> post.ProductCategory==='SmartPhone');
      this.PremiumSmartphone=this.Smartphone.filter(post=> post.SubCategory==='Premium');
      console.log(this.Smartphone)
      console.log(this.PremiumSmartphone);
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    },
    )
  }
}
