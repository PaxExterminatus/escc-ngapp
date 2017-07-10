import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import { courseObjArr, CourseClass, mControlRules } from '../order-model/form';
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

  formErrors = new Object();

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
      this.dataCheck(true);
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

  dataCheck(chkAll?: boolean) { // Валидация данных и вывод сообщений об ошибках
    // this.formErrors = new Object(); // Обнуляем список ошибок
    for (const controlName in this.orderForm.controls) {
      const controlObj = this.orderForm.get(controlName);
      if ((controlObj.invalid && (controlObj.dirty || controlObj.touched)) || chkAll ) {
        for (const error in controlObj.errors) {
          this.formErrors[controlName] = mControlRules[controlName].ErrorMessage[error];
        }
      }
    }
  }

  dataRepair() { // Валидация данных и вывод сообщений об ошибках
    let tmpVal: string;
    for (const controlName in this.orderForm.controls) {
      const controlObj = this.orderForm.get(controlName);
      for (let controlIndex in mControlRules[controlName].dataRepairReg) {
        controlObj.setValue( // Устанавливаем значение для элементов формы
          controlObj.value.replace( // Заменяем символы
            mControlRules[controlName].dataRepairReg[controlIndex], '') // Получаем правило по индексу
        );
      }
    }
  }

  onValueChanged() {
    this.dataCheck();
  }
}


const etl_short = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: ['Виталий', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['Воронин', mControlRules.clientNameLast.RuleValidator],
  clientPhone: ['293225337', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['paxexterminatus@gmail.com', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
}

const etl_normal = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientNameMiddle: ['', ],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
}
