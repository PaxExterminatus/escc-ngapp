import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { CourseArr, CourseClass, RuleArr, RuleParam } from '../order-model/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  courseArr = CourseArr;
  validatorRule = RuleParam;
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
    this.formErrors = new Object(); // Обнуляем список ошибок
    for (const vField in RuleArr) { // Получаем имена полей для которых существуют ошибки
      const formControlObj = this.orderForm.get(vField); // Находим FormControl по его имени
      if (formControlObj && !formControlObj.valid && formControlObj.dirty) { // Если FormControl найден и невалидный и пользователь вводил данные
          for (const error in formControlObj.errors) { // Проверяем список лшибок в FormControl
            this.formErrors[vField] = RuleArr[vField].ErrorMessage[error]; // Для каждой // ошибки ищeм сообщение в ErrorMessage и заносим его в formErrors
          }
      }
    }
  }

  onValueChanged() {
    this.formCheck();
  }

}

const etl_short = {
  course: [, RuleArr.course.RuleValidator],
  clientNameFirst: ['', RuleArr.clientNameFirst.RuleValidator],
  clientNameLast: ['', RuleArr.clientNameLast.RuleValidator],
  clientPhone: ['', RuleArr.clientPhone.RuleValidator],
  clientEmail: ['', RuleArr.clientEmail.RuleValidator],
  agreeRules: [true, RuleArr.agreeRules.RuleValidator],
}

const etl_normal = {
  course: [, RuleArr.course.RuleValidator],
  clientNameFirst: ['', RuleArr.clientNameFirst.RuleValidator],
  clientNameLast: ['', RuleArr.clientNameLast.RuleValidator],
  clientNameMiddle: ['', ],
  clientPhone: ['', RuleArr.clientPhone.RuleValidator],
  clientEmail: ['', RuleArr.clientEmail.RuleValidator],
  agreeRules: [true, RuleArr.agreeRules.RuleValidator],
}
