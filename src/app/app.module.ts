import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
