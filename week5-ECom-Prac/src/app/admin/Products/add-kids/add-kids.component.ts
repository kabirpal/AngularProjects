import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostFashion } from '../../menfashion-module';

@Component({
  selector: 'app-add-kids',
  templateUrl: './add-kids.component.html',
  styleUrls: ['./add-kids.component.css']
})
export class AddKidsComponent implements OnInit {
  loadedPosts:number = 0;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  onCreatePost(postData:PostFashion){
    this.http.put('https://lavish-67a42-default-rtdb.firebaseio.com/kidsFashion/' + postData.ProductId + '.json',postData) 
    .subscribe(res=>{
      console.log(res)
      postData.ProductId = "";
      postData.BrandName='';
      postData.ProductName='';
      postData.ProductCategory = "";
      postData.ProductPrice=0;
      postData.description="",
      postData.VendorName='';
      postData.ImageUrl='';
      postData.Colour='',
      postData.Size='',
      postData.MRP=0,
      postData.Rating=0
    })
  }
  onFetchPosts(){

  }

  onClearPosts(){

  }


}
