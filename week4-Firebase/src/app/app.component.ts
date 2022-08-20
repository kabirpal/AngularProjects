import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './app-module';
import { PostService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isFetching:boolean = false;
  loadedPosts:Post[] =[];

  constructor(private http:HttpClient, private _postService :PostService  ){}
  ngOnInit(){
    this.FetchData();
  }

  onCreatePost(postData:Post){
    this._postService.CreateAndStorePost(postData.title,postData.content);
  }

  
  onFetchPosts(){
    this.FetchData();
  }

  onClearPosts(){

  }
  private FetchData(){
    this.isFetching = true;
    this.http.get<{[key:string]:Post}>('https://firstproject-9c073-default-rtdb.firebaseio.com/post.json')
    .pipe(map(responseData=>{
      const postsArray:Post[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key});
        }
      }
      return postsArray
    })
    )
    .subscribe(post=>{
      console.log(post);
      this.isFetching=false
      this.loadedPosts = post;
      
    })
  }
}

