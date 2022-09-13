import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from 'src/app/products/booksGet-module';
import { AdminService } from 'src/app/services/admin.service';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  isFetching:boolean = false;
  loadedProducts:Products[] =[];
  productList:any;
  constructor(private http:HttpClient,private _myCartService:MyCartService,
    private _adminService:AdminService) { }

  ngOnInit(): void {
    this.FetchData();
  }

  onFetchPosts(){
    this.FetchData()
  }

  
  onDeleteProducts(productId:any){
    this._adminService.deleteProduct(productId)
  }

  private FetchData(){
    this.isFetching = true;
    this.http.get<{[key:string]:Products}>('https://lavish-67a42-default-rtdb.firebaseio.com/Products.json')
    .pipe(map(responseData=>{
      const postsArray:Products[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key});
        }
      }
      return postsArray
    })
    )
    .subscribe(post=>{
      console.log(post);
      this.isFetching=false
      this.loadedProducts = post;
    },
    )
  }
}
