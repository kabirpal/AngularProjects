import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./app-module";

@Injectable({providedIn:'root'})

export class PostService{

    constructor(private http:HttpClient){}


    CreateAndStorePost(title:string,content:string){
        const postData:Post={title:title,content:content};
        this.http.post<{name:string}>('https://firstproject-9c073-default-rtdb.firebaseio.com/post.json',postData)
        .subscribe(res=>{
          console.log(res)
        });
    }

    FetchPost(){

    }
}