import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  title = 'task-scheduler-webapp';

  item: Item[] = []
  category_id: number

  constructor(private todoItemsService: TodoItemsService) {}

  ngOnInit() : void {
    console.log("NgOnInit executing on index component..");
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
