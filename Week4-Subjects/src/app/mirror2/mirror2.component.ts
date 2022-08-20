import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror2',
  templateUrl: './mirror2.component.html',
  styleUrls: ['./mirror2.component.css']
})
export class Mirror2Component implements OnInit {

  mirrorText:string="mirror";

  constructor(private _mirrorService:MirrorService) { }

  ngOnInit() {
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res
    })
  }

  onClick(Text){
    this._mirrorService.mirrorText.next(Text.value);
  }

}
