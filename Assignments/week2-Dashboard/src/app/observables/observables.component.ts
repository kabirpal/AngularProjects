import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObServiceService } from './ob-service.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  //private img_url:string = "./assets/imagedata.json";

  public ObUsers:any =[];

  constructor(private ObUserService:ObServiceService) { }

  // getImage(){
  //   return this.http.get(this.img_url);
  // }
  
  ngOnInit(){
    this.ObUserService.getUsers()
    .subscribe(data => this.ObUsers = data)
  }

}
