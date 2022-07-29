import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List in Angular';
  list:any[] = [];
  addToDo(task:string){
    //this.task = (<HTMLInputElement>item.target).value;
    this.list.push({id:this.list.length,name:task});
  }

  DeleteTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }
}
