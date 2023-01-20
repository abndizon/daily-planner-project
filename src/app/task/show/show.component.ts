import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  id : number
  item: Item = {
    name: "",
    category_id: 0,
    date: "",
    start_time: "",
    end_time: ""
  }

  constructor(
    private route : ActivatedRoute, 
    private todoItemsService : TodoItemsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(`ShowComponent for id ${this.id}`)

    this.todoItemsService.getItemById(this.id).subscribe((item) => {
      this.item = item
    })
  }
}
