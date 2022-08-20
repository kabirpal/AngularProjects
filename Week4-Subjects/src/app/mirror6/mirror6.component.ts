import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror6',
  templateUrl: './mirror6.component.html',
  styleUrls: ['./mirror6.component.css']
})
export class Mirror6Component implements OnInit {

  mirrorText:string='Mirror World';
  constructor(private _mirrorService:MirrorService) {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
   }

  ngOnInit(): void {
  }
}
