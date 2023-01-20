import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddFormComponent } from './task/add-form/add-form.component';
import { ItemsComponent } from './task/list/items/items.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './task/list/list.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ShowComponent } from './task/show/show.component';

const appRoutes : Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks/:id', component: ShowComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ItemsComponent,
    HeaderComponent,
    ListComponent,
    IndexComponent,
    AboutComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
