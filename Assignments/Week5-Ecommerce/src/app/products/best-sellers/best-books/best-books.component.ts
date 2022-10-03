import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-best-books',
  templateUrl: './best-books.component.html',
  styleUrls: ['./best-books.component.css'],
})
export class BestBooksComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  CarouselImage: any;
  productList: any;
  BestSellerCarouselImg: any;
  firebaseProduct: Products[];
  BooksList: Products[] = [];
  buttonPressed: boolean = false;
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

  addToCart(item: any) {
    this.buttonPressed = true;
    this._toastService.showSuccessToast(
      'Successfully',
      'Product is added to cart'
    );
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    console.log(this.firebaseProduct);
    this._myCartService.addToFirebase(item);
    setTimeout(() => {
      this.buttonPressed = false;
    }, 1500);
  }

  private FetchDataCarousel() {
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
        // console.log(post);
        this.isFetching = false;
        this.loadedPosts = post;
        this.CarouselImage = this.loadedPosts.filter(
          (post) => post.ProductCategory === 'Carousel-Image'
        );
        //console.log(this.CarouselImage);
        this.BestSellerCarouselImg = this.CarouselImage.filter(
          (post) => post.SubCategory === 'BestSellerCarousel'
        ).splice(1, 2);
        //console.log(this.BestSellerCarouselImg);
      });
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
        this.BooksList = this.loadedPosts
          .filter((post) => post.ProductCategory === 'Books')
          .splice(0, 4);
      });
  }
}
