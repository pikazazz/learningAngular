import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  todoList : Object[]=[
    {
      "title":'ส่งงาน Day3 ',
      "detail":'รายละเอียดการเรียนรู้ เกี่ยวกับ Angular',
      "strat_date":'Tue Jun 07 2022 00:00:00 GMT+0700 (Indochina Time)',
      "end_date":'Tue Jun 07 2022 00:00:00 GMT+0700 (Indochina Time)',

    }
  ];
  title = 'todoapp';


  storeTodo(data : any){
    this.todoList.push(data);
  }
}
