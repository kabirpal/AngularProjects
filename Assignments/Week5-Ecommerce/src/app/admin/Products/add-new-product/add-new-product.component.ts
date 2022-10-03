import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductFields } from '../../ProductField-module';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onCreatePost(postData: ProductFields) {
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
}
