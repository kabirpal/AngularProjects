import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarouselImages } from '../CarouselImage';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isFetching:boolean = false;
  carouselList1:any=[];
  carouselList2:any=[];
  carouselList3:any=[];
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
    this.http.get<CarouselImages>('https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1001.json').subscribe(post=>{
      this.carouselList1 = post;
    })
    this.http.get<CarouselImages>('https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1002.json').subscribe(post=>{
      this.carouselList2 = post;
    })
    this.http.get<CarouselImages>('https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1003.json').subscribe(post=>{
      this.carouselList3 = post;
    })
  }

}
