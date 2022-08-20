import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror4',
  templateUrl: './mirror4.component.html',
  styleUrls: ['./mirror4.component.css']
})
export class Mirror4Component implements OnInit {

  mirrorText:string = 'Mirror World'
  constructor(private _mirrorService:MirrorService) { }

  ngOnInit(){
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
  }

}
