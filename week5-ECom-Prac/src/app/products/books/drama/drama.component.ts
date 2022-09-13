import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../../booksGet-module';
import {Toast} from 'bootstrap'
import { WishListService } from 'src/app/services/wishList.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  isFetching:boolean = false;
  loadedPosts:Products[] =[];
  productList:any;
  BooksList: Products[]=[];
  constructor(private http:HttpClient,
    private _myCartService:MyCartService,
    private _myWishListService:WishListService) { }

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts(){
    this.FetchData();
    this.isFetching = false;
  }


  addToCart(item:any){
    this._myCartService.addToCart(item);
    this._myCartService.getUserState();
  }

  addToWishList(item:any){
    this._myWishListService.addToWishList(item);
  }


  

  private FetchData(){
    this.isFetching = true;
    this.http.get<{[key:string]:Products}>('https://lavish-67a42-default-rtdb.firebaseio.com/Products.json',
    {headers: new HttpHeaders({'Custom-Headers':'hello'})
      })
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
      console.log(post);
      this.isFetching=false
      this.loadedPosts = post;
      this.productList = post;
      this.BooksList = this.loadedPosts.filter(post => post.ProductCategory=== 'Books')
      // this.jeansList = this.loadedProducts.filter(post => post.SubCategory === 'Jeans')
      // this.shirtList = this.loadedProducts.filter(post => post.SubCategory==='Shirt')
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    },
    )
  }

}
