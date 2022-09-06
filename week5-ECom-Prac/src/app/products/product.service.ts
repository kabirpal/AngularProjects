import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './booksGet-module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  viewProduct(proId:string):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/books/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }

  viewProductKids(proId:string):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/kidsFashion/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }

  viewProductWomen(proId:string):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/womenFashion/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }

  viewProductMen(proId:string):Observable<Products>{
    const baseUrl = 'https://lavish-67a42-default-rtdb.firebaseio.com/menFashion/'+proId+'.json';
    return this.http.get<Products>(baseUrl); 
  }
}
