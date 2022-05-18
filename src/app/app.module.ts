import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { TagComponent } from './components/tag/tag.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [AppComponent, CardComponent, CardListComponent, TagComponent],
  imports: [BrowserModule, DragScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
