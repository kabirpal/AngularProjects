import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { storeUser } from '../user-shop/login/storeUser';
//import { checkoutDetails } from '../orders/checkoutDetails';Z

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getUserDetails():Observable<storeUser[]>{
    const url:string = 'https://lavish-67a42-default-rtdb.firebaseio.com/users.json';
    return this.http.get<storeUser[]>(url);
  }

//   getOrdersTaken():Observable<checkoutDetails[]>{
//     const url:string = 'https://angularcrud-43716-default-rtdb.firebaseio.com/orders.json';
//     return this.http.get<checkoutDetails[]>(url);
//   }
}
