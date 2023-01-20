import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { TodoItemsService } from './services/todo-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-scheduler-webapp';

  item: Item[] = []
  category_id: number

  constructor(private todoItemsService: TodoItemsService) {}

  ngOnInit() : void {
    console.log("NgOnInit executing on app component..");
    this.todoItemsService.getAllItems().subscribe((item) => {
      this.item = item;
    })
  }

  formEventHandler = (payload : Item) => {
    console.log("Handling event");
    payload.id = this.item.length + 1;

    console.log(payload)

    this.item.push(payload)
  }

  setCategoryIdHandler = (payload: any) => {
    this.category_id = payload.category_id
    console.log(`Test: ${this.category_id}`)
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
