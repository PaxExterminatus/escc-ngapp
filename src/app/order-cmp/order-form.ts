import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { courseObjArr, CourseClass, mControlRules } from '../order-model/order';
import { FormDeskClass } from '../order-cmp/order-form-desk';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent implements OnInit {
  @Input() formType: string;
  @Input() formClass: string;
  @Input() formCourseInfoType: string;
  formDesk: FormDeskClass;
  courseObjArr = courseObjArr;
  courseObjPick = new CourseClass();
  orderForm: FormGroup;
  orderTrySubmit = false;

  formErrors: any = new Object();

  constructor(private fb: FormBuilder) {}

  onChangeCourse(e: any) {
    this.courseObjPick = this.courseObjArr.find(course => course.id === +e);
  }

  onSubmit(HTMLForm: HTMLFormElement) {
    this.orderTrySubmit = true;
    if (this.orderForm.valid) {
      HTMLForm.submit();
    } else {
      this.dataRepair();
      this.dataCheck();
      this.orderTrySubmit = false;
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

  dataCheck() { // Валидация данных и вывод сообщений об ошибках
    this.formErrors = new Object(); // Обнуляем список ошибок
    for (const vField in mControlRules) { // Получаем имена полей для которых существуют ошибки
      const formControlObj = this.orderForm.get(vField); // Находим FormControl по его имени
      if (formControlObj && !formControlObj.valid && (formControlObj.dirty || this.orderTrySubmit)) { // Если FormControl найден и невалидный и пользователь вводил данные
          for (const error in formControlObj.errors) { // Проверяем список лшибок в FormControl
            this.formErrors[vField] = mControlRules[vField].ErrorMessage[error]; // Для каждой // ошибки ищим сообщение в ErrorMessage и заносим его в formErrors
          }
      }
    }
  }

  dataRepair() { // Убирает недопустимые данные из полей ввода
    let tmpVal: string;
    const reg = /x/gi;
    for (const formControlObj in this.orderForm.controls) {
      tmpVal = this.orderForm.get(formControlObj).value;
      console.log();
      if (formControlObj === 'clientNameFirst') {
        tmpVal = tmpVal.replace(reg, '');
        this.orderForm.get(formControlObj).setValue(tmpVal);
      }
    }
  }

  onValueChanged() {
    this.dataCheck();
  }
}

const etl_short = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRules: [true, mControlRules.agreeRules.RuleValidator],
}

const etl_normal = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientNameMiddle: ['', ],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRules: [true, mControlRules.agreeRules.RuleValidator],
}
