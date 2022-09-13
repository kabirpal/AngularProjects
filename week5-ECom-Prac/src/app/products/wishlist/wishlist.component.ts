import { Component, OnInit } from '@angular/core';
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
  constructor(private _myWishListService:WishListService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this._myWishListService.getProductData().subscribe(res=>{
      this.products = res;
      this.isFetching = false;
    })
  }
  removeProduct(item:any){
    this._myWishListService.removeWishListData(item);
  }

  removeAllProduct(){
    this._myWishListService.removeAllcart();
  }

  addToCart(item){}

}
