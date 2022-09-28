import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products/booksGet-module';
import { ProductService } from 'src/app/products/product.service';
import { AdminService } from 'src/app/services/admin.service';
import { ProductFields } from '../../ProductField-module';

@Component({
  selector: 'app-update-window',
  templateUrl: './update-window.component.html',
  styleUrls: ['./update-window.component.css'],
})
export class UpdateWindowComponent implements OnInit {
  productDetails: Products;
  productId = 0;
  constructor(
    private _productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private _adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
      console.log(data);

      this._productServices
        .viewProductdata(this.productId)
        .subscribe((productData: Products) => {
          this.productDetails = productData;
          console.log(this.productDetails);
          console.log(productData);
        });
    });
  }

  updateProduct(form) {
    const updateProduct = {
      ProductId: form.value.id,
      brandName: form.value.brandName,
      ProductName: form.value.ProductName,
      ProductCategory: form.value.ProductCategory,
      ProductPrice: form.value.ProductPrice,
      description: form.value.description,
      VendorName: form.value.VendorName,
      imageUrl: form.value.imageUrl,
      author: form.value.author,
      pages: form.value.pages,
      colour: form.value.colour,
      size: form.value.size,
      MRP: form.value.MRP,
      rating: form.value.rating,
      Status: form.value.status,
      availability: form.value.available,
      imageurl1: form.value.imageUrl1,
      imageurl2: form.value.imageUrl2,
      subCategory: form.value.SubCategory,
    };
    console.log(form);
    this._productServices
      .updateProduct(this.productId, updateProduct)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onCreatePost(postData: ProductFields) {
    this._adminService.CreatePost(postData);
  }
}
