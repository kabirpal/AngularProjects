import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './books-module';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  loadedPosts:number = 0;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  onCreatePost(postData:Post){
    this.http.put('https://lavish-67a42-default-rtdb.firebaseio.com/books/' + postData.ProductId + '.json',postData) 
    .subscribe(res=>{
      console.log(res)
      postData.ProductId = "";
      postData.ProductName='';
      postData.ProductCategory = "";
      postData.ProductPrice=0;
      postData.description="",
      postData.VendorName='';
      postData.ImageUrl='';
      postData.author='',
      postData.pages=0;
    })
  }
  onFetchPosts(){

  }

  onClearPosts(){

  }
}