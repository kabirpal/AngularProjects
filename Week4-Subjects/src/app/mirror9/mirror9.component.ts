import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror9',
  templateUrl: './mirror9.component.html',
  styleUrls: ['./mirror9.component.css']
})
export class Mirror9Component implements OnInit {

  mirrorText:string='Mirror World';
  constructor(private _mirrorService:MirrorService) {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
   }

  ngOnInit(): void {
  }

}
