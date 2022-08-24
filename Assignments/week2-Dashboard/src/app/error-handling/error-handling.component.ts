import { Component, OnInit } from '@angular/core';
import { ErrorHService } from './error-h.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  public EhUser:any = [];
  public errorMsg:any;

  constructor( private EhUserService: ErrorHService) { }

  ngOnInit(){
    const observer ={
      next : (data:any)=>{
        this.EhUser = data;
      },
      error : (error:Error)=>{
        this.errorMsg = error
      }
    }

    this.EhUserService.getUsers()
    .subscribe(observer);
  //   this.EhUserService.getUsers()
  //   .subscribe(data=>this.EhUser = data,
  //     error => this.errorMsg = error);
  // }                        THIS IS A DEPRICATED METHOD

  }
}
