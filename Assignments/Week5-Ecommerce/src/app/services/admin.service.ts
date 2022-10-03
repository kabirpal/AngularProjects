import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductFields } from '../admin/ProductField-module';
import { storeUser } from '../user-shop/login/storeUser';
//import { checkoutDetails } from '../orders/checkoutDetails';Z

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<storeUser[]> {
    const url: string =
      'https://lavish-67a42-default-rtdb.firebaseio.com/user.json';
    return this.http.get<storeUser[]>(url);
  }

  deleteProduct(productId: any) {
    const url =
      'https://lavish-67a42-default-rtdb.firebaseio.com/Products/' +
      productId +
      '.json';
    console.log(productId);
    this.http
      .delete(url)
      .subscribe((res) => console.log('product deleted', res));
  }

  CreatePost(postData: ProductFields) {
    this.http
      .put(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products/' +
          postData.ProductId +
          '.json',
        postData
      )
      .subscribe((res) => {
        console.log(res);
        postData.ProductId = '';
        postData.brandName = '';
        postData.ProductName = '';
        postData.ProductCategory = '';
        postData.ProductPrice = 0;
        postData.description = '';
        postData.VendorName = '';
        postData.imageUrl = '';
        postData.colour = '';
        postData.size = '';
        postData.MRP = 0;
        postData.rating = 0;
        postData.SubCategory = '';
        postData.available = 0;
        postData.imageUrl1 = '';
        postData.imageUrl2 = '';
        postData.status = '';
        postData.pages = 0;
      });
  }

  //   getOrdersTaken():Observable<checkoutDetails[]>{
  //     const url:string = 'https://angularcrud-43716-default-rtdb.firebaseio.com/orders.json';
  //     return this.http.get<checkoutDetails[]>(url);
  //   }
}
