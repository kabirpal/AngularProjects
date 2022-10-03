import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  laodedFeature = 'drama';
  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.laodedFeature = feature;
  }
}
