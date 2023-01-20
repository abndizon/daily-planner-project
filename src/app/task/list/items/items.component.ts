import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'list-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
    @Input() item: Item
    @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>()

    deleteBtnClicked = () => {
      console.log(`Delete button was clicked on task id: ${this.item.id}"`)
      this.deleteEvent.emit(this.item.id)
    }
}
