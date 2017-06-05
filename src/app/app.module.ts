import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppOrderComponent } from './order-app/order';

import { OrderFormComponent } from './order-cmp/order-form';

@NgModule({
  declarations: [
    AppComponent,
    AppOrderComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppOrderComponent]
})
export class AppModule { }
