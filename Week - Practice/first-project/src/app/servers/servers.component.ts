import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serversId : number = 10;
  serversStatus : string = 'offline';

  constructor() { 
    this.serversStatus = Math.random() > 0.5?'online':'offline';
  }

  getserversStatus(){
    return this.serversStatus;
  }

  getColor(){
    return this.serversStatus === 'online'?'green':'red';
  }
}
