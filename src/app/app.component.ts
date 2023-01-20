import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-scheduler-webapp';

  item: Item[] = []
  category_id: number

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
}
