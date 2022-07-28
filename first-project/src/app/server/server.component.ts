import {Component} from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerCompomnent{
    name:string= 'Kabir';
    compId:number=27923;
    NewServer=true;
    NewServerName = "";
    
    ServerStatus = "No new server";

    getCompId(){
        return this.compId;
    }

    constructor(){
        setTimeout(()=>{
            this.NewServer=false;
        },4000);
    }

    EventServer(){
        this.ServerStatus= "New Server Available";
    }
    
    Servername(event:any){
        this.NewServerName = (<HTMLInputElement>event.target).value;
    }
}