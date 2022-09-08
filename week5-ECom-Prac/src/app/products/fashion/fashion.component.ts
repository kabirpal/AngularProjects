import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../booksGet-module';


@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  laodedFeature = 'drama';

  isFetching:boolean = false;
  loadedPosts:Products[] =[];

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
    this.http.get<{[key:string]:Products}>('https://lavish-67a42-default-rtdb.firebaseio.com/MenFashion.json',
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
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    },
    )
  }

  onSelect(feature:string){
    this.laodedFeature = feature;
}
}