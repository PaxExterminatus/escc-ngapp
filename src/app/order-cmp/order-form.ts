import {Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Response } from '@angular/http';

import { CourseClass, mControlRules } from '../order-model/form';
import { FormDescription } from './order-form-desk';
import { HttpService } from '../form-service/http.service';

import {CONST} from '../CONST';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html',
  providers: [HttpService]
})

export class OrderFormComponent implements OnInit {
  @Input() formStyle: string;
  @Input() orderType: string;
  @Input() formCourseInfoType;
  controlRules = mControlRules;
  formDesk: FormDescription;
  courseObjArr;
  courseObjPick = new CourseClass();
  orderForm: FormGroup;
  formSubmitError = false;
  formAction: string;
  formErrors: {[k: string]: any} = {};

  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  onChangeCourse(e: any) {
    this.courseObjPick = this.courseObjArr.find(course => course.id === e);
  }

  isDemo(): Boolean {
    return (this.orderType === CONST.ORDER_DEMO);
  }
  isEtl(): Boolean {
    return (this.orderType === CONST.ORDER_ETL);
  }
  isDemoCompact(): Boolean {
    return (this.orderType === CONST.ORDER_DEMO && this.formStyle === CONST.STYLE_COMPACT);
  }
  isEtlCompact(): Boolean {
    return (this.orderType === CONST.ORDER_ETL && this.formStyle === CONST.STYLE_COMPACT);
  }
  isEtlStandart(): Boolean {
    return (this.orderType === CONST.ORDER_ETL && this.formStyle === CONST.STYLE_STANDARD);
  }
  useCourseList(): Boolean {
    return !this.isDemoCompact();
  }
  usePlaceholder(): Boolean {
    return (this.formStyle === CONST.STYLE_COMPACT);
  }

  onSubmit(HTMLForm: HTMLFormElement) {
    this.dataRepair();
    if (this.orderForm.valid) {
      this.orderForm.get('clientPhone').validator = null;
      this.orderForm.get('clientPhone').setValue('375' + this.orderForm.get('clientPhone').value);
      HTMLForm.submit();
    } else {
      this.dataCheck(true);
      this.formSubmitError = true;
    }
  }

  ngOnInit() {
    this.initForm(); // Инициализация формы
    this.orderForm.valueChanges.subscribe(data => this.onValueChanged()); // Подписка на данные формы
    this.httpService.getCoursesList().subscribe((data: Response) => this.courseObjArr = data.json());
  }

  initForm() {
    if (this.isDemo()) {
      this.formAction = 'http://www.eshko.by/orders/create/demo_materials';
    } else if (this.isEtl()) {
      this.formAction = 'http://www.eshko.by/orders/create/free_download';
    }

    if (this.isEtlCompact()) {
      this.orderForm = this.fb.group(etl_compact);
    } else if (this.isEtlStandart()) {
      this.orderForm = this.fb.group(etl_standard);
    } else if (this.isDemoCompact()) {
      this.orderForm = this.fb.group(demo_compact);
    }

    this.formDesk = new FormDescription(this.orderType);
  }

  dataCheck(chkAll?: boolean) { // Валидация данных и вывод сообщений об ошибках
    this.formErrors = {}; // Обнуляем список ошибок
    for (const controlName in this.orderForm.controls) {
      const controlObj = this.orderForm.get(controlName);
      if ((controlObj.invalid && (controlObj.dirty || controlObj.touched)) || chkAll || this.formSubmitError ) {
          for (const error in controlObj.errors) {
            this.formErrors[controlName] = mControlRules[controlName].ErrorMessage[error];
          }
      }
    }
  }

  dataRepair() { // Исправление данных
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

const etl_compact = {
  course: [null, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
};

const etl_standard = {
  course: [null, mControlRules.course.RuleValidator],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientNameMiddle: ['', ],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
};

const demo_compact = {
  course: [null, null],
  clientNameFirst: ['', mControlRules.clientNameFirst.RuleValidator],
  clientNameLast: ['', mControlRules.clientNameLast.RuleValidator],
  clientPhone: ['', mControlRules.clientPhone.RuleValidator],
  clientEmail: ['', mControlRules.clientEmail.RuleValidator],
  agreeRule: [true, mControlRules.agreeRule.RuleValidator],
};
