import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './app-module';
import { PostService } from './app-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isFetching:boolean = false;
  loadedPosts:Post[] =[];
  errorMsg="Error has been occured"
  constructor(private http:HttpClient, private _postService : PostService){}
  ngOnInit(){
    this.FetchData();
  }

  onCreatePost(postData:Post){
    this.http.post('https://firstproject-9c073-default-rtdb.firebaseio.com/post.json',postData)
    .subscribe(res=>{
      console.log(res)
      postData.title = "";
      postData.content='';
    })
  }

  
  onFetchPosts(){
    this.FetchData();
  }

  onClearPosts(){
    this._postService.DeletePost().subscribe(()=>{
      this.loadedPosts = [];
    })
  }


  private FetchData(){
    this.isFetching = true;
    this.http.get<{[key:string]:Post}>('https://firstproject-9c073-default-rtdb.firebaseio.com/post.json',
    {headers: new HttpHeaders({'Custom-Headers':'hello'})
      })
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
      // console.log(post);
      this.isFetching=false
      this.loadedPosts = post;
    },
    )
  }
}

