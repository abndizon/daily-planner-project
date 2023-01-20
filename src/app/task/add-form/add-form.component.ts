import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';
import { ItemDateServiceService } from 'src/app/services/item-date.service';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  @Output() formEvent: EventEmitter<Item> = new EventEmitter<Item>()
  @Output() formselectCategory: EventEmitter<any> = new EventEmitter<any>()

  constructor(private itemDateService : ItemDateServiceService) {
  }

  @Input() item: Item = {
    id: 1,
    name: "",
    category_id: 1,
    date: this.itemDateService.getDateToday(),
    start_time: "1:00 PM",
    end_time: "1:30 PM"
  }

  @Input() categories: Category[] = [
    {
      id: 1,
      name: "Personal"
    },
    {
      id: 2,
      name: "Work"
    },
  ]
  
  addBtnClicked = () => {
    console.log("Add Button was clicked. Adding this item to data.. ")
    console.log(this.item)
    
    let itemCopy = {...this.item}

    this.formEvent.emit(itemCopy)
    this.item.name = "";
  }

  categorySelect = (payload:any) => {
    console.log(`Category ID selected: ${payload.target.value}`)
    this.formselectCategory.emit({category_id:payload.target.value});
  }

  getDateToday() : string {
    return this.itemDateService.getDateToday()
  }
}
