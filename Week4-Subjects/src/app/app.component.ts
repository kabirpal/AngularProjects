import { Component, OnInit } from '@angular/core';
import { MirrorService } from './services/mirror.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Week4-Subjects';

  mirrorText:string="Mirror";

  constructor(private _mirrorService:MirrorService){}

  ngOnInit(){
    // this._mirrorService.mirrorText.subscribe(res=>{
    //     this.mirrorText = res;
    // })
  }

  onClick(text){
    this._mirrorService.mirrorText.next(text.value)
    }

}
