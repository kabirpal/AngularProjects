import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';
import { WishListService } from 'src/app/services/wishList.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  products:any=[];
  isFetching:boolean=false;
  allProducts:number=0;
  constructor(private _myWishListService:WishListService,
    private _myCartService:MyCartService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this._myWishListService.getProductData().subscribe(res=>{
      this.products = res;
      this.isFetching = false;
    })
  }

  // removeAllProduct(){
  //   this._myWishListService.removeAllcart();
  // }
  addToCart(item:any){
    this._myWishListService.removeWishListData(item);
    this._myCartService.addToCart(item);
  }
}
