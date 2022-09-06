// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { map } from "rxjs/operators";
// import { Post } from "./booksGet-module";


// @Injectable({providedIn:"root"})

// export class BookServices{
//     isFetching:boolean = false;
//     loadedPosts:Post[] =[];
//     constructor(private http: HttpClient){}

//     FetchData(){
//     this.isFetching = true;
//     this.http.get<{[key:string]:Post}>('https://lavish-67a42-default-rtdb.firebaseio.com/books.json',
//     {headers: new HttpHeaders({'Custom-Headers':'hello'})
//       })
//     .pipe(map(responseData=>{
//       const postsArray:Post[]= [];
//       for(const key in responseData){
//         if(responseData.hasOwnProperty(key)){
//           postsArray.push({...responseData[key], id:key});
//         }
//       }
//       return postsArray
//     })
//     )
//     .subscribe(post=>{
//       console.log(post);
//       this.isFetching=false
//       this.loadedPosts = post;
//     },
//     )
//   }
// }