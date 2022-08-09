import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  user(){
    return [{name:'Ramesh',email:'ramesh@g.com'},
    {name:'Jayesh',email:'jayesh@g.com'},
    {name:'Rudhra',email:'Rudhra@g.com'},
    {name:'Kalki',email:'kalki@g.com'}]
  }
}
