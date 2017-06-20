import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { CourseArr, CourseClass } from '../order-model/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  courseArr = CourseArr;
  courseObj = new CourseClass();
  formDescH1 = '';
  formDescSubmit = '';
  orderForm: FormGroup;
  @Input() formType;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createOrderForm(this.formType);
  }

  onSubmit(HTMLForm: HTMLFormElement) {
    if (this.orderForm.valid) {
      HTMLForm.submit();
    } else {
      console.log(this.orderForm.status);
    }
  }

  onChangeCourse(e: any) {
    this.courseObj = this.courseArr.find(course => course.id === +e);
  }

  createOrderForm(formType: string) {
    switch (formType) {
      case 'etl_short':
        this.orderForm = this.fb.group(etl_short);
        this.formDescH1 = 'Заявка на пробный урок';
        this.formDescSubmit = 'Скачать пробный урок';
        break;
      case 'etl_normal':
        this.orderForm = this.fb.group(etl_normal);
        this.formDescH1 = 'Заявка на пробный урок';
        this.formDescSubmit = 'Скачать пробный урок';
        break;
      default:
        break;
    }
  }
}

const etl_short = {
  course: [, [Validators.required]],
  clientNameFirst: ['', [Validators.required, Validators.minLength(3)]],
  clientNameLast: ['', [Validators.required, Validators.minLength(3)]],
  clientPhone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
  clientEmail: ['', [Validators.required, Validators.minLength(6)]],
  agreeRules: [true, [Validators.required]],
}

const etl_normal = {
  course: [, Validators.required],
  clientNameFirst: ['', Validators.required],
  clientNameLast: ['', Validators.required],
  clientNameMiddle: [''],
  clientPhone: ['', Validators.required],
  clientEmail: ['', Validators.required],
  agreeRules: [true, Validators.required],
}
