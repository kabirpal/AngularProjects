import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostService{

    constructor(private http:HttpClient){}

    DeletePost(){
        return this.http.delete('https://firstproject-9c073-default-rtdb.firebaseio.com/post.json');
    }
}