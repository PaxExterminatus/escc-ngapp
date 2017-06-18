import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import { CourseArr, CourseClass } from '../order-model/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  apiUrl = 'http://localhost:8080/esccapp/tst/submit.jsp';

  courseArr = CourseArr;
  @Input() defaultCourse;
  @Input() formType;
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, public http: Http) {}

  ngOnInit() {
    this.createOrderForm(this.formType);
  }

  OnSubmit(modelFormHtml: any) {
    modelFormHtml.submit();
    console.log('1');
  }

  createOrderForm(formType: string) {
    switch (formType) {
      case 'etl_short':
        this.orderForm = this.fb.group(etl_short);
        break;
      case 'etl_normal':
        this.orderForm = this.fb.group(etl_normal);
        break;
      default:
        break;
    }
  }
}

const etl_short = {
  course: [, Validators.required],
  clientNameFirst: ['', Validators.required],
  clientNameLast: ['', Validators.required],
  clientPhone: ['', Validators.required],
  clientEmail: ['', Validators.required],
  agreeRules: [true, Validators.required],
}

const etl_normal = {
  course: [, Validators.required],
  clientNameFirst: ['', Validators.required],
  clientNameLast: ['', Validators.required],
  clientNameMiddle: ['', Validators.required],
  clientPhone: ['', Validators.required],
  clientEmail: ['', Validators.required],
  agreeRules: [true, Validators.required],
}
