import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {




  // students=[{name:'Akshay',age:21,gender:'Male'},
  // {name:'Danish',age:23,gender:'Male'},
  // {name:'Kashish',age:21,gender:'Female'},
  // {name:'Sakshi',age:20,gender:'Female'},
  // {name:'Yash',age:19,gender:'Male'}]


  // students(){
  //   return[
      // {name:'Akshay',age:21,gender:'Male'},
      // {name:'Danish',age:23,gender:'Male'},
      // {name:'Kashish',age:21,gender:'Female'},
      // {name:'Sakshi',age:20,gender:'Female'},
      // {name:'Yash',age:19,gender:'Male'},
  //   ]
  // }
  
  public studentD:Student[] = [];

  constructor(private _studentsDetails:ServicesService) { }

  ngOnInit(): void {
    this.studentD = this._studentsDetails.students();
  }

}
