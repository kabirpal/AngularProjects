import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror5',
  templateUrl: './mirror5.component.html',
  styleUrls: ['./mirror5.component.css']
})
export class Mirror5Component implements OnInit {

  mirrorText:string='Mirror World';
  constructor(private _mirrorService:MirrorService) {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
   }

  ngOnInit(): void {
  }

}
