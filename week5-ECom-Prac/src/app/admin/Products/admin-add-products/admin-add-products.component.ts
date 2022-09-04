import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {

  laodedFeature = 'mobiles';
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
    this.laodedFeature = feature;
    // this.featureSelected.emit(feature);
  }

}
