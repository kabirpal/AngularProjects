import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List in Angular';
  list:any[] = [];
  tasks:string = "";
  

  addToDo(task:string){
    //this.task = (<HTMLInputElement>item.target).value;
    this.list.push({id:this.list.length,name:task});
  }

  DeleteTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }
  
  EditTask(id:number){
    this.tasks = this.list[id].name;
    this.list = this.list.filter(item=>item.id!==id);
  }

  // // EditTask(id:number){
  //   
  //   console.log(uid);
  //   document.getElementById('inTask').innerText = uid;
  //    //(<HTMLInputElement>task.target).value;
  //   //let inpVal = document.getElementById('task');
  //   //console.log(inpVal)

  //   // // (<HTMLInputElement>inpVal.target).value = uid;
  //   // inpVal?.setAttribute('value',uid);
  // }
}
