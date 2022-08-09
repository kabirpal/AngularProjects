import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-prac',
  templateUrl: './service-prac.component.html',
  styleUrls: ['./service-prac.component.css']
})
export class ServicePracComponent implements OnInit {
  userData = [
    {name:'Ramesh',email:'ramesh@g.com'},
    {name:'Jayesh',email:'jayesh@g.com'},
    {name:'Rudhra',email:'Rudhra@g.com'},
    {name:'Kalki',email:'kalki@g.com'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
