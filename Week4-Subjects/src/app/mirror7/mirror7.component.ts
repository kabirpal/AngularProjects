import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror7',
  templateUrl: './mirror7.component.html',
  styleUrls: ['./mirror7.component.css']
})
export class Mirror7Component implements OnInit {

  mirrorText:string='Mirror World';
  constructor(private _mirrorService:MirrorService) {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
   }

  ngOnInit(): void {
  }

}
