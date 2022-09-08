import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  addproducts=false;
  updateProducts = false;
  loadedFeature='AddProducts'

  constructor() { }

  ngOnInit(): void {
  }

  onAddProducts(){
    this.addproducts=true;
  }

  onUpdateProducts(){
    this.updateProducts=true;
  }

  onSelect(feature:string){
    this.loadedFeature = feature;
    // this.featureSelected.emit(feature);
  }



}
