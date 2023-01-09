import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KnightComponent } from './knight/knight.component';
import { BoardAndMovementComponent } from './board-and-movement/board-and-movement.component';

@NgModule({
  declarations: [
    AppComponent,
    KnightComponent,
    BoardAndMovementComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
