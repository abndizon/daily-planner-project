import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { ItemsComponent } from '../task/list/items/items.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  baseUrl : string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAllItems = (): Observable<Item[]> => {
    let items: Observable<Item[]>;
    items = this.http.get<Item[]>(`${this.baseUrl}/tasks`, httpOptions);

    return items;
  }

  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(`${this.baseUrl}/tasks/${item.id}`);
  }
}
