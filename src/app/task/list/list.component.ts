import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemDateServiceService } from 'src/app/services/item-date.service';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private itemDateService: ItemDateServiceService, private todoItemsService: TodoItemsService) {
  }

  @Input() items: Item[] = [];

  getDateToday() : string {
    return this.itemDateService.getDateToday()
  }

  deleteEventHandler = (id : number) => {
    console.log("Executing deleteEventHandler..");
    
    var taskCount = 0;
    const indexOfItem = this.items.findIndex((x) => {
      if (x.id === id) {
        console.log(`Task id ${id} found: ${x.name}`); 
        taskCount++;
      }
      return x.id === id;
    });

    console.log(`# of tasks with id ${id}: ${taskCount}`);

    if (indexOfItem !== -1) {
      console.log(`Index: ${indexOfItem}`);
      this.items.splice(indexOfItem, 1);
    }
  }
}
