import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { storeUser } from 'src/app/user-shop/login/storeUser';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  userDetails!:storeUser[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getUserDetails().subscribe(res => {
      this.userDetails = Object.values(res);
      console.log(res)
    })
  }
}
