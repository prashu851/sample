import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParagraphComponent} from '../packages/paragraph/paragraph.component'
import { MobileComponent } from 'src/mobiles/mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    MobileComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, ParagraphComponent,MobileComponent]
})
export class AppModule { }
