import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { CourseArr, CourseClass, ValidatorArr, ValidatorRule } from '../order-model/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  courseArr = CourseArr;
  validatorRule = ValidatorRule;
  courseObj = new CourseClass();
  formDescH1 = '';
  formDescSubmit = '';
  orderForm: FormGroup;
  @Input() formType;

  formErrors: any = new Object();

  constructor(private fb: FormBuilder) {}

  onChangeCourse(e: any) {
    this.courseObj = this.courseArr.find(course => course.id === +e);
  }

  onSubmit(HTMLForm: HTMLFormElement) {
    if (this.orderForm.valid) {
      HTMLForm.submit();
    } else {
      console.log(this.orderForm.status);
    }
  }

  ngOnInit() {
    this.createOrderForm(this.formType);
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
    this.orderForm.valueChanges.subscribe(data => this.onValueChanged()); // Подписка на данные
  }

  formCheck() {
    this.formErrors = new Object();
    for (const vField in ValidatorArr) {
      const formControlObj = this.orderForm.get(vField);
      if (formControlObj) {
        if (!formControlObj.valid && formControlObj.dirty) {
          for (const error in formControlObj.errors)
            this.formErrors[vField] = ValidatorArr[vField].ErrorMessage[error];
        }
      }
    }
  }

  onValueChanged() {
    this.formCheck();
  }

}

const etl_short = {
  course: [, ValidatorArr.course.RulesArr],
  clientNameFirst: ['', ValidatorArr.clientNameFirst.RulesArr],
  clientNameLast: ['', ValidatorArr.clientNameLast.RulesArr],
  clientPhone: ['', ValidatorArr.clientPhone.RulesArr],
  clientEmail: ['', ValidatorArr.clientEmail.RulesArr],
  agreeRules: [true, ValidatorArr.agreeRules.RulesArr],
}

const etl_normal = {
  course: [, ValidatorArr.course.RulesArr],
  clientNameFirst: ['', ValidatorArr.clientNameFirst.RulesArr],
  clientNameLast: ['', ValidatorArr.clientNameLast.RulesArr],
  clientNameMiddle: ['', ],
  clientPhone: ['', ValidatorArr.clientPhone.RulesArr],
  clientEmail: ['', ValidatorArr.clientEmail.RulesArr],
  agreeRules: [true, ValidatorArr.agreeRules.RulesArr],
}
