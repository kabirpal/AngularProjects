import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  products:any=[];
  allProducts:number=0;
  constructor(private _myCartService:MyCartService) { }

  ngOnInit(): void {
    this._myCartService.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = +this._myCartService.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this._myCartService.removeCartData(item);
  }

  removeAllProduct(){
    this._myCartService.removeAllcart();
  }

}
