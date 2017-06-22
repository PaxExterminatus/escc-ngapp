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

  formErrors;

  validationMessages = {
    clientNameFirst: {
      required:      'clientNameFirst - Name is required.',
      minlength:     'clientNameFirst - Name must be at least 4 characters long.',
      maxlength:     'clientNameFirst - Name cannot be more than 24 characters long.'
    },
    clientNameLast: {
      required:      'clientNameLast - Name is required.',
      minlength:     'clientNameLast - Name must be at least 4 characters long.',
      maxlength:     'clientNameLast - Name cannot be more than 24 characters long.'
    }
  };

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
    this.orderForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // field - имена полей объекта formErrors перебераемые в цикле
    // control - FormControl
    // messages - validationMessages field Объект
    // key - control.errors - Список ошибок которые возможны в FormControl

    this.formErrors = {
      clientNameFirst: '',
      clientNameLast: ''
    };

    for (const x in this.orderForm.controls) {
      console.log(x);
    }

    if (!this.orderForm) { return; }

    for (const field in this.formErrors) {
      this.formErrors[field] = ''; // Оброщаемся к полям объекта formErrors по их имени и делаем их пустыми
      const control = this.orderForm.get(field); // Находим FormControl в FormGroup, по имени и засовываем его в переменную control

      if (control && control.dirty && !control.valid) { // Если есть FormControl, если пользователь ввел данные и если они НЕ верны
        const messages = this.validationMessages[field];  // Получаем сообщение
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}

const etl_short = {
  course: [, [Validators.required]],
  clientNameFirst: ['', ValidatorArr.name],
  clientNameLast: ['', ValidatorArr.name],
  clientPhone: ['', ValidatorArr.phone],
  clientEmail: ['', ValidatorArr.email],
  agreeRules: [true, [Validators.required]],
}

const etl_normal = {
  course: [, Validators.required],
  clientNameFirst: ['', ValidatorArr.name],
  clientNameLast: ['', ValidatorArr.name],
  clientNameMiddle: ['', ],
  clientPhone: ['', ValidatorArr.phone],
  clientEmail: ['', ValidatorArr.email],
  agreeRules: [true, Validators.required],
}
