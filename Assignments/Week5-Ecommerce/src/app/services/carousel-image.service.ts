import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarouselImages } from '../user-shop/CarouselImage';

@Injectable({
  providedIn: 'root'
})
export class CarouselImageService {

  // isFetching:boolean = false;
  // loadedImages:CarouselImages[] =[];
  // constructor(private http:HttpClient,private _myCarsouselImageServices:CarouselImageService) { }

  

  // FetchData(){
  //   this.isFetching = true;
  //   this.http.get<CarouselImages[]>('https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel.json').subscribe(post=>{
  //     console.log(post);
  //     this.isFetching=false
  //     this.loadedImages = post;
  //   },
  //   )
  // }
}
