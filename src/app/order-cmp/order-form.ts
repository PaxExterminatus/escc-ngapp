import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { CourseArr, CourseClass } from '../order-model/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  courseArr = CourseArr;
  courseObj = new CourseClass();
  orderForm: FormGroup;
  @Input() formType;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createOrderForm(this.formType);
  }

  onSubmit(HTMLForm: HTMLFormElement) {
    HTMLForm.submit();
  }

  onChange(e: any) {
    this.courseObj = this.courseArr.find(course => course.id === +e);
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
