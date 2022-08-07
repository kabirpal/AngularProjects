import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Users } from '../Users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public users:Users[]=[];

  constructor( private userService: UserServiceService ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
