import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/products/booksGet-module';
import { CarouselImages } from '../CarouselImage';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  isFetching: boolean = false;
  carouselList1: any = [];
  carouselList2: any = [];
  carouselList3: any = [];
  //productList: any = [];
  productSmartPhone: Products[] = [];
  productBooks: Products[] = [];
  productMen: Products[] = [];
  productWomen: Products[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.FetchData();
    this.FetchProductData();
  }

  onFetchPosts() {
    this.FetchData();
    this.FetchProductData();
  }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<CarouselImages>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1001.json'
      )
      .subscribe((post) => {
        this.carouselList1 = post;
      });
    this.http
      .get<CarouselImages>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1002.json'
      )
      .subscribe((post) => {
        this.carouselList2 = post;
      });
    this.http
      .get<CarouselImages>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/HomeCarousel/1003.json'
      )
      .subscribe((post) => {
        this.carouselList3 = post;
      });
  }

  // private FetchProductData(){
  //   this.isFetching=true;
  //   this.http.get<Products>('https://lavish-67a42-default-rtdb.firebaseio.com/Products.json').
  //   subscribe(post=>{
  //     this.productList = post;
  //     console.log(this.productList)
  //   })
  // }

  private FetchProductData() {
    this.isFetching = true;

    this.http
      .get<{ [key: string]: Products }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Products[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((post) => {
        //console.log(post);
        this.isFetching = false;
        this.productSmartPhone = post
          .filter((post) => post.ProductCategory === 'SmartPhone')
          .splice(0, 4);
        this.productBooks = post
          .filter((post) => post.ProductCategory === 'Books')
          .splice(0, 4);
        this.productMen = post
          .filter((post) => post.ProductCategory === 'Men')
          .splice(0, 4);
        this.productWomen = post
          .filter((post) => post.ProductCategory === 'Women')
          .splice(0, 4);
      });
  }
}
