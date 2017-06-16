import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Подключаем Reactive Forms
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppOrderComponent } from './order-app/order'; // Приложение формы

import { OrderFormComponent } from './order-cmp/order-form'; // Компонент формы

@NgModule({
  declarations: [
    AppComponent,
    AppOrderComponent,
    OrderFormComponent,
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
