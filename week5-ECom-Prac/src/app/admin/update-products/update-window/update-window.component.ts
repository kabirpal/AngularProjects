import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/products/booksGet-module';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-update-window',
  templateUrl: './update-window.component.html',
  styleUrls: ['./update-window.component.css']
})
export class UpdateWindowComponent implements OnInit {
  productDetails:Products;
  productId = 0;
  constructor(private _productServices:ProductService, private activatedRoute:ActivatedRoute
    ,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data['id'];
      console.log(data);

      this._productServices.viewProductdata(this.productId).subscribe((productData:Products)=>{
        this.productDetails = productData
        // console.log(this.productDetails)
        // console.log(productData)
    });
    });
  }

  updateProduct(form){
    const updateProduct={
      ProductId:form.value.id,
      brandName:form.value.brandName,
      ProductName:form.value.ProductName,
      ProductCategory:form.value.ProductCategory,
      ProductPrice:form.value.ProductPrice,
      description:form.value.description,
      VendorName:form.value.VendorName,
      imageUrl:form.value.imageUrl,
      author:form.value.author,
      pages:form.value.pages,
      colour:form.value.colour,
      Size:form.value.Size,
      MRP:form.value.MRP,
      Rating:form.value.Rating,
    };
    console.log(form);
    this._productServices.updateProduct(this.productId,updateProduct).subscribe(data=>{
      console.log(data)
    });
  }


  onCreatePost(postData:Products){
    this.http.put('https://lavish-67a42-default-rtdb.firebaseio.com/Mobiles/' + postData.ProductId + '.json',postData) 
    .subscribe(res=>{
      console.log(res)
      postData.ProductId = "";
      postData.brandName='';
      postData.ProductName='';
      postData.ProductCategory = "";
      postData.ProductPrice=0;
      postData.description="",
      postData.VendorName='';
      postData.imageUrl='';
      postData.colour='',
      postData.Size='',
      postData.MRP=0,
      postData.Rating=0;
    })
  }



}
