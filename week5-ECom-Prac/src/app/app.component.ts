import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/services/my-cart.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  totalItemNumber:number=0;
  title = 'week5-ECom-Prac';

  constructor(private _myCartService:MyCartService){}
  
  ngOnInit():void{
    this._myCartService.getProductData().subscribe(post=>{
      this.totalItemNumber = post.length;
    })
  }
  
}
