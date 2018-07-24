import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Task{
 // id: number;
  title: string;
  status: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  tasks: Task[];
  accomplishedTasks: Task[];
  errMsg:string;
  idPending: number;
  idAccomplished: number;

  existingTask: boolean;

  @Input()
  taskToDelete: Task;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit() {

    this.existingTask = false;

    this.idPending = 0;
    this.idAccomplished = 0;
    this.accomplishedTasks = [
    ];
    this.tasks = [
      {title: 'Studying', status:'Pending'},
      {title: 'Reading', status: 'Pending'},
      {title: 'Fangirling', status: 'Pending'},
      {title: 'Working', status: 'Pending'}
    ];

    this.accomplishedTasks = [
      {title: 'Exam', status:'Done'}
    ]
    
  }

  checkContent(){
    
  }
  
  addTask(title, status){
    if(title.length > 0){
      
      for(let i = 0; i < this.tasks.length; i++){
        if(this.tasks[i].title == title){
          this.existingTask = true;
                  this.errMsg = "Error! Task is already added";
                  console.log('existingTask');

        }
      }
      if(status == 'Pending' && !this.existingTask){
       // id = this.idPending + 1;
        this.tasks.push({title, status});
      }else if(status == 'Done'){
       // id = this.idAccomplished + 1;
        this.accomplishedTasks.push({title, status});
      }
      
      this.existingTask = false;
      this.errMsg = "";
     
    }else{
      this.errMsg = "Error! All fields must be filled";
    }
    
    return false;
    
  }

  onDone(title, status){
    status = 'Done';
    this.taskToDelete = {title, status};
    //this.remove.emit(this.taskToDelete);
    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].title === this.taskToDelete.title){
        this.accomplishedTasks.push(this.taskToDelete);
        this.tasks.splice(i, 1);
       
      }
    }
  }

  onRemove(title, status){
    this.taskToDelete = {title, status};
    //this.remove.emit(this.taskToDelete);
    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].title === this.taskToDelete.title){
         this.tasks.splice(i, 1);
      }
    }
  }

}
