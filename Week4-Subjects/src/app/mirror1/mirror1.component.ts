import { Component, OnInit } from '@angular/core';
import { MirrorService } from '../services/mirror.service';

@Component({
  selector: 'app-mirror1',
  templateUrl: './mirror1.component.html',
  styleUrls: ['./mirror1.component.css']
})
export class Mirror1Component implements OnInit {

  mirrorText:string="Mirror";

  constructor(private _mirrorService:MirrorService){}

  //This function is used to assign the values to the subjects and can be used to display it.
  // Whenever any change is made on that function, we can see the change using the subscribe() method.
  ngOnInit(){
    this._mirrorService.mirrorText.subscribe(res=>{
        this.mirrorText = res;
    })
  }

  //This function is used to get the value from the HTML
  onClick(text){
    this._mirrorService.mirrorText.next(text.value)
    }

}
