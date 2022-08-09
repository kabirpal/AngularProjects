import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  inputs:[`ParentData`],
  outputs:[`childEvent`]
})
export class ChildComponentComponent implements OnInit {

  public ParentData!:string;
  childEvent = new EventEmitter<string>();

  onChange(value:string){
    this.childEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
