import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

    students():Student[]{
    return[
      {name:'Akshay',age:'21',gender:'Male'},
      {name:'Danish',age:'23',gender:'Male'},
      {name:'Kashish',age:'21',gender:'Female'},
      {name:'Sakshi',age:'20',gender:'Female'},
      {name:'Yash',age:'19',gender:'Male'}
    ]
  }
}
