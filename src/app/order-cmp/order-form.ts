import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Response } from '@angular/http';

import { CourseClass, mControlRules } from '../order-model/form';
import { FormDeskClass } from '../order-cmp/order-form-desk';
import { HttpService } from '../form-service/http.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html',
  providers: [HttpService]
})

export class OrderFormComponent implements OnInit {
  @Input() formType: string;
  @Input() formClass: string;
  @Input() formCourseInfoType;
  formDesk: FormDeskClass;
  courseObjArr;
  courseObjPick = new CourseClass();
  orderForm: FormGroup;
  formSubmitError = false;

  formErrors = new Object();

  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  onChangeCourse(e: any) {
    this.courseObjPick = this.courseObjArr.find(course => course.id === e);
  }

  onSubmit(HTMLForm: HTMLFormElement) {

    if (this.orderForm.valid) {
      HTMLForm.submit();
    } else {
      this.dataRepair();
      this.dataCheck(true);
      this.formSubmitError = true;
    }
  }

  ngOnInit() {
    this.initFormType(); // Список элементов управления
    this.initFormClass(); // Описание формы
    this.orderForm.valueChanges.subscribe(data => this.onValueChanged()); // Подписка на данные формы
    this.httpService.getCoursesList().subscribe((data: Response) => this.courseObjArr = data.json());
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
    this.formErrors = new Object(); // Обнуляем список ошибок
    for (const controlName in this.orderForm.controls) {
      const controlObj = this.orderForm.get(controlName);
      if ((controlObj.invalid && (controlObj.dirty || controlObj.touched)) || chkAll || this.formSubmitError ) {
        for (const error in controlObj.errors) {
          this.formErrors[controlName] = mControlRules[controlName].ErrorMessage[error];
        }
      }
    }
  }

  dataRepair() { // Валидация данных и вывод сообщений об ошибках
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
};

const etl_short = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: [, mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: [, mControlRules.clientNameLast.RuleValidator],
  clientPhone: [, mControlRules.clientPhone.RuleValidator],
  clientEmail: [, mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
};

const etl_normal = {
  course: [, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientNameMiddle: ['', ],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
};
