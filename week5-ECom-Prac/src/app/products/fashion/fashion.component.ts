import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';
import { Products } from '../booksGet-module';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css'],
})
export class FashionComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  firebaseProduct: Products[];
  imagemen = 'https://indiater.com/wp-content/uploads/2019/05/1.jpg';
  imagewomen =
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/women-fashion-point-banner-template-free-design-0d335c9defb80cc2c5cfd362121d9988_screen.jpg?ts=1638273722';

  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService
  ) {}

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts() {
    this.FetchData();
  }

  addToCart(item: any) {
    this._myCartService.addToCart(item);
    this._myCartService.getUserState();
    this.firebaseProduct = JSON.parse(JSON.stringify(item));
    this._myCartService.addToFirebase(this.firebaseProduct);
  }

  private FetchData() {
    this.isFetching = true;
    this.http
      .get<Products[]>(
        'https://lavish-67a42-default-rtdb.firebaseio.com/MenFashion.json'
      )
      .subscribe((post) => {
        this.isFetching = false;
        this.loadedPosts = post;
      });
  }
}
