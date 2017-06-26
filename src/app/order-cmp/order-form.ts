import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { CourseArr, CourseClass, RuleArr, RuleParam } from '../order-model/order';
import { FormDeskClass } from '../order-cmp/order-form-desk';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  @Input() formType: string;
  @Input() formClass: string;
  formDesk: FormDeskClass;
  courseArr = CourseArr;
  courseObj = new CourseClass();
  orderForm: FormGroup;

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
    this.initFormType(); // Список элементов управления
    this.initFormClass(); // Описание формы
    this.orderForm.valueChanges.subscribe(data => this.onValueChanged()); // Подписка на данные формы
  }

  initFormType() {
    if (this.formClass === 'etl') {

      if (this.formType === 'short') {
        this.orderForm = this.fb.group(etl_short);
      } else if (this.formType === 'normal') {
        this.orderForm = this.fb.group(etl_normal);
      }

    }
  }

  initFormClass() {
    this.formDesk = new FormDeskClass(this.formClass);
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
