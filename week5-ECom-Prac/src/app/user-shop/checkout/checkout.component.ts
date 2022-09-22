import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/booksGet-module';
import { MyCartService } from 'src/app/services/my-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  loadedPosts: Products[] = [];
  userCartData: Products[] = [];
  constructor(
    private http: HttpClient,
    private _myCartService: MyCartService
  ) {}

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
    const formData = checkoutFrom.value;
    this.storeOrder(formData);
    console.log(formData);
    this._myCartService.removeDataFromCart();
  }

  storeOrder(formData) {
    this.FetchCartData(formData);
  }

  private FetchCartData(formData) {
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
            console.log(formData);
            this.http
              .patch(
                'https://lavish-67a42-default-rtdb.firebaseio.com/orders/' +
                  localId +
                  '.json',
                {
                  ...formData,
                  uid: localId,
                  userOrders: post,
                }
              )
              .subscribe();
            this.http;
          },
          error: (e) => {
            this.loadedPosts = [];
          },
        });
    }, 600);
  }
}
