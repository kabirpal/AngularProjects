import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-best-mobiles',
  templateUrl: './best-mobiles.component.html',
  styleUrls: ['./best-mobiles.component.css'],
})
export class BestMobilesComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  CarouselImage: any;
  BestSellerCarouselImg: any;
  SmartphoneList: Products[] = [];
  firebaseProduct: Products[];

  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.FetchData();
    this.FetchDataCarousel();
  }

  onFetchPosts() {
    this.FetchData();
    this.FetchDataCarousel();
  }

  addToCart(item: Products) {
    this._toastService.showSuccessToast(
      'Successfully',
      'Product is added to cart'
    );
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    console.log(this.firebaseProduct);
    console.log(item.quantity);
    this._myCartService.addToFirebase(item);
  }

  private FetchData() {
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
        this.loadedPosts = post;
        this.SmartphoneList = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'SmartPhone'
        );
      });
  }

  private FetchDataCarousel() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Products }>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/Products.json',
        { headers: new HttpHeaders({ 'Custom-Headers': 'hello' }) }
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
        // console.log(post);
        this.isFetching = false;
        this.loadedPosts = post;
        this.CarouselImage = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'Carousel-Image'
        );
        //console.log(this.CarouselImage);
        this.BestSellerCarouselImg = this.CarouselImage.filter(
          (post) => post.SubCategory === 'BestSellerCarousel'
        ).splice(0, 1);
        console.log(this.BestSellerCarouselImg);
      });
  }
}
