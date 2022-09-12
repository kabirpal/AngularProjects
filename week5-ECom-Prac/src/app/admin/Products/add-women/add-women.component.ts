import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductFields } from '../../menfashion-module';

@Component({
  selector: 'app-add-women',
  templateUrl: './add-women.component.html',
  styleUrls: ['./add-women.component.css']
})
export class AddWomenComponent implements OnInit {
  loadedPosts:number = 0;
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }


  onCreatePost(postData:ProductFields){
    this.http.put('https://lavish-67a42-default-rtdb.firebaseio.com/Products/' + postData.ProductId + '.json',postData) 
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
      postData.Rating=0,
      
      postData.SubCategory='';
      postData.available=0;
      postData.imageUrl1='';
      postData.imageUrl2='';
      postData.status='';
      postData.pages=0;
    })
    
  }
  onFetchPosts(){

  }

  onClearPosts(){

  }


}
