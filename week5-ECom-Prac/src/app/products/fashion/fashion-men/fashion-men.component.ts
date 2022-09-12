import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-fashion-men',
  templateUrl: './fashion-men.component.html',
  styleUrls: ['./fashion-men.component.css']
})
export class FashionMenComponent implements OnInit {
  isFetching:boolean = false;
  loadedPosts:Products[] =[];
  jeansList:Products[]=[];
  shirtList:Products[]=[];
  loadedProducts:Products[]=[];
  productList:any;
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
      this.loadedProducts = this.loadedPosts.filter(post => post.ProductCategory=== 'Men')
      this.jeansList = this.loadedProducts.filter(post => post.SubCategory === 'Jeans')
      this.shirtList = this.loadedProducts.filter(post => post.SubCategory==='Shirt')
      this.productList = post;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    },
    )
  }

}