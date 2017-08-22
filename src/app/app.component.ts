import { Component, ElementRef } from '@angular/core';
import {CONST} from './CONST';

@Component({
  selector: 'app-order',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderType: string;
  formStyle: string;
  constructor(private elementRef: ElementRef) {
    this.orderType = this.elementRef.nativeElement.getAttribute('order');
    this.formStyle = this.elementRef.nativeElement.getAttribute('type');

    //Значения по умолчанию
    if (!this.orderType) {this.orderType = CONST.ORDER_ETL; }
    if (!this.formStyle) {this.formStyle = CONST.STYLE_COMPACT; }
  }
}
