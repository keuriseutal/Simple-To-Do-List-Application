import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { Task } from './list/list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
/*
  task: Task;
  tasks: Task[];
  accomplishedTasks: Task[];

  ngOnInit(){
    this.tasks = [
   //   {id: 1, title: 'Studying', status:'Pending'},
    //  {id: 2, title: 'Reading', status: 'Pending'}
    ];
    this.accomplishedTasks = [];
  }

  handleRemove(event: Task){
    /*
    console.log(event.title);
    this.tasks = this.tasks.filter((task:Task) =>
    {      
      return task.title !== event.title;
    });
    */
    //this.accomplishedTasks.push((event));
    /*
    this.tasks = this.tasks.filter((task: Task) => {
      return task.id != event.id;
    })
    */
    /*
    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i] == {title, status}){
        this.tasks.splice(i, 1);
        console.log('IF');
      }
            console.log('LOOP');

    }
  
    
  }
    */
}
