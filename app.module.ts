import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CopmonentsComponent } from './copmonents/copmonents.component';
import { TodosComponent } from './componets/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    CopmonentsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
