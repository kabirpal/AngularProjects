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
  loadedProducts:boolean;
  isFetching:boolean=false;

  
  constructor(private _myCartService:MyCartService) { }

  ngOnInit(): void {
    this.isFetching=true;
    this.loadedProducts = this._myCartService.getUserState();
    console.log(this.loadedProducts);
    this._myCartService.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = +this._myCartService.getTotalAmount();
    })
    this.isFetching=false;
  }
  removeProduct(item:any){
    this._myCartService.removeCartData(item);
  }

  removeAllProduct(){
    this._myCartService.removeAllcart();
  }

}
