import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Products } from '../../booksGet-module';

@Component({
  selector: 'app-bestkids-fashion',
  templateUrl: './bestkids-fashion.component.html',
  styleUrls: ['./bestkids-fashion.component.css'],
})
export class BestkidsFashionComponent implements OnInit {
  constructor(private http: HttpClient) {}

  isFetching: boolean = false;
  loadedPosts: Products[] = [];
  CarouselImage: any;
  productList: any;
  BestSellerCarouselImg: any;
  firebaseProduct: Products[];
  BooksList: Products[] = [];
  buttonPressed: boolean = false;

  ngOnInit(): void {
    this.FetchData();
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
        console.log(post);
        if (post) {
          this.loadedPosts = post;
          this.BooksList = this.loadedPosts
            .filter((post) => post.ProductCategory === 'KidsFashion')
            .splice(0, 4);
        } else {
          this.loadedPosts = [];
          this.BooksList = [];
        }
        //console.log(post);
        this.isFetching = false;
      });
  }
}
