import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from './booksGet-module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isFetching:boolean=false;
  loadedPosts:Products[] =[];
  jeansList:Products[]=[];
  shirtList:Products[]=[];
  
  productList:any;

  constructor( private http:HttpClient) { }

  updateProduct(proId: any, productBody: any):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/Mobiles/'+proId+'.json';
    return this.http.put<Products>(baseUrl, productBody);
  }

  viewProductdata(proId:number):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/Products/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }

  viewProduct(proId:string):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/Products/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }

  viewRelatedProducts(productCategory:string){
    this.isFetching = true;
   return this.http.get<{[key:string]:Products}>('https://lavish-67a42-default-rtdb.firebaseio.com/Products.json')
    .pipe(map(responseData=>{
      const postsArray:Products[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key});
        }
      }
      this.isFetching=false
      return postsArray.filter(post => post.ProductCategory === productCategory).slice(1,5);
    })
    );
  }





}



