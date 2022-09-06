import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  laodedFeature = 'drama';
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
    this.laodedFeature = feature;
}
}