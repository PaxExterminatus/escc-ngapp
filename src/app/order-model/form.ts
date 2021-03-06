import {Validators} from '@angular/forms';

const rule = {
  nameMinLength: 3,
  nameMaxLength: 25,
  phoneMinLength: 9,
  phoneMaxLength: 9,
  emailMinLength: 6,
  emailMaxLength: 40,
  notNumber: /[0-9]/gi,
  onlyNumber: /[^0-9]/gi,
};

export const mControlRules = {
  course: {
    label: 'Выберите курс',
    RuleValidator: [Validators.required],
    ErrorMessage: {
      required: 'Обязательно выберите курс'}},
  clientNameFirst: {
    label: 'Имя',
    RuleValidator: [
      Validators.required,
      Validators.minLength(rule.nameMinLength),
      Validators.maxLength(rule.nameMaxLength),
    ],
    ErrorMessage: {
      required: `Пожалуйста, укажите ваше имя`,
      minlength: `Минимальное количество символов в имени: ${rule.nameMinLength}`,
      maxlength: `Максимальное количество символов в имене: ${rule.nameMaxLength}`,
    },
    dataRepairReg: [rule.notNumber]
  },
  clientNameLast: {
    label: 'Фамилия',
    RuleValidator: [
      Validators.required,
      Validators.minLength(rule.nameMinLength),
      Validators.maxLength(rule.nameMaxLength)],
    ErrorMessage: {
      required: `Пожалуйста, укажите вашу фамилию`,
      minlength: `Минимальное количество символов в фамилии: ${rule.nameMinLength}`,
      maxlength: `Максимальное количество символов в фамилии: ${rule.nameMaxLength}`},
    dataRepairReg: [rule.notNumber]
  },
  clientNameMiddle: {
    label: 'Отчество',
    RuleValidator: [
      Validators.required,
      Validators.minLength(rule.nameMinLength),
      Validators.maxLength(rule.nameMaxLength)],
    ErrorMessage: {
      required: `Пожалуйста, укажите ваше отчество`,
      minlength: `Минимальное количество символов в отчестве: ${rule.nameMinLength}`,
      maxlength: `Максимальное количество символов в отчестве: ${rule.nameMaxLength}`},
    dataRepairReg: [rule.notNumber]
      },
  clientPhone: {
    label: 'Телефон, например 296910330',
    RuleValidator: [
      Validators.required,
      Validators.minLength(rule.phoneMinLength),
      Validators.maxLength(rule.phoneMaxLength),
    ],
    ErrorMessage: {
      required: `Пожалуйста, укажите ваш номер телефона`,
      minlength: `Неверный формат номера телефона, укажите 9 цифр вашего номера, например 296910330`,
      maxlength: `Неверный формат номера телефона, укажите 9 цифр вашего номера, например 296910330`,
    },
    dataRepairReg: [rule.onlyNumber]
      },
  clientEmail: {
    label: 'Электронная почта',
    RuleValidator: [
      Validators.required,
      Validators.minLength(rule.emailMinLength),
      Validators.maxLength(rule.emailMaxLength),
      Validators.email,
    ],
    ErrorMessage: {
      required: `Пожалуйста, укажите адрес вашей электронной почты`,
      minlength: `Проверьте введенный адрес электронной почты`,
      maxlength: `Проверьте введенный адрес электронной почты`,
      email: `Проверьте введенный адрес электронной почты`,
    }},
  agreeRule: {
    RuleValidator: [
      Validators.required,
      Validators.requiredTrue,
    ],
    ErrorMessage: {
      required: `Пожалуйста, подтвердите, согласие на обработку ваших персональных данных`,
      requiredTrue: `Пожалуйста, подтвердите, согласие на обработку ваших персональных данных`,
    },
  },
};

export class CourseClass {
  id: number;
  name: string;
  sourcePath: string;
  priceDefault: number;
  priceSale: number;
}
