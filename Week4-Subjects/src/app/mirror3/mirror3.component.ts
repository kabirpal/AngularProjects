import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror3',
  templateUrl: './mirror3.component.html',
  styleUrls: ['./mirror3.component.css']
})
export class Mirror3Component implements OnInit {

  mirrorText:string='Mirror World'
  constructor(private _mirrorService: MirrorService) { }

  ngOnInit(){
    this._mirrorService.mirrorText.subscribe(res=>{
      this.mirrorText = res;
    })
  }

}
