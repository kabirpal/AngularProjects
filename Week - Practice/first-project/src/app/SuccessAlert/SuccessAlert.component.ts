import {Component} from '@angular/core'

@Component({
    selector:'app-SuccessAlert',
    template: `<h2>We have Success Alert</h2>`,
    styles:[`
        h2{
            color:green;
        }
    `]
   // styleUrls:['./SuccessAlert.component.css']
})

export class SuccessAlert{
    ServerStatus:string='offline'
}