import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppOrderComponent } from './order-app/order';

import { OrderFormComponent } from './order-cmp/order-form';
import { CourseInfoComponent } from './form-cmp/course-info';
import { MessageErrorComponent } from './form-cmp/message-error';

@NgModule({
  declarations: [
    AppComponent,
    AppOrderComponent,
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
  bootstrap: [AppComponent, AppOrderComponent] // Делаем селектор приложения доступным из внешних файлов (index.html)
})
export class AppModule { }
