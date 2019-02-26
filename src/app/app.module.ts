import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SomeFirstComponent } from './some-first/some-first.component';
import { SomeTwoComponent } from './some-two/some-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeFirstComponent,
    SomeTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
