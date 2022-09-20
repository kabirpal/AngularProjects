import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/booksGet-module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  loadedPosts: Products[] = [];
  userCartData: Products[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success').then(
      function () {
        location.reload();
        window.location.href = '/';
      }
    );
  }

  onSubmit(checkoutFrom) {
    this.alertWithSuccess();
    this.storeOrder(checkoutFrom.value.email);
  }

  storeOrder(email) {
    const userEmail = localStorage.getItem(email);
    this.FetchCartData(userEmail);
  }
  private FetchCartData(email) {
    const localObject = JSON.parse(localStorage.getItem('userData'));
    const localId = localObject['id'];
    //const curDate = new Date();
    // const cValue = formatDate(curDate, 'yyyy-MM-dd', 'en-US');
    setTimeout(() => {
      this.http
        .get<Products[]>(
          'https://lavish-67a42-default-rtdb.firebaseio.com/user/' +
            localId +
            '/addToCart.json'
        )
        .subscribe({
          next: (post) => {
            this.userCartData = post;
            this.http
              .patch<Products>(
                'https://lavish-67a42-default-rtdb.firebaseio.com/orders/' +
                  localId +
                  // '/' +
                  // cValue +
                  '.json',
                post
              )
              .subscribe();
          },
          error: (e) => {
            this.loadedPosts = [];
          },
        });
    }, 600);
  }
}
