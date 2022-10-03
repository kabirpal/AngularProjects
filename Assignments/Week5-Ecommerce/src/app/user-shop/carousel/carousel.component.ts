import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarouselImageService } from 'src/app/services/carousel-image.service';
import { CarouselImages } from '../CarouselImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  isFetching:boolean = false;
  carouselList:any=[];
  productList:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts(){
    this.FetchData();
  }

  private FetchData(){
    this.isFetching = true;
    this.http.get<CarouselImages>('https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel.json').subscribe(post=>{
      this.carouselList = post;
      //console.log(this.carouselList);
    })
  }
}
