import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppOrderFormStandartComponent } from './order-app/standart';
import { AppOrderFormCompactComponent } from './order-app/compact';

import { OrderFormComponent } from './order-cmp/order-form';
import { CourseInfoComponent } from './form-cmp/course-info';
import { MessageErrorComponent } from './form-cmp/message-error';

@NgModule({
  declarations: [
    AppComponent,
    AppOrderFormStandartComponent,
    AppOrderFormCompactComponent,
    OrderFormComponent,
    CourseInfoComponent,
    MessageErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
