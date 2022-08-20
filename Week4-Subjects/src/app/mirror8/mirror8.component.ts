import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror8',
  templateUrl: './mirror8.component.html',
  styleUrls: ['./mirror8.component.css']
})
export class Mirror8Component implements OnInit {

  mirrorText:string='Mirror World';
  constructor(private _mirrorService:MirrorService) {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
   }

  ngOnInit(): void {
  }

}
