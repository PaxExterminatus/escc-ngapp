import {Validators} from '@angular/forms';

const RuleParam = {
  nameMinLength: 3,
  nameMaxLength: 25,
  phoneMinLength: 9,
  phoneMaxLength: 9,
  emailMinLength: 6,
  emailMaxLength: 40
};

export const mControlRules = {
  course: {
    RuleValidator: [Validators.required],
    ErrorMessage: {
      required: 'Обязательно выберите курс'}},
  clientNameFirst: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.nameMinLength),
      Validators.maxLength(RuleParam.nameMaxLength),
    ],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно укажите ваше имя',
      minlength: `Минимальное количество символов в имени: ${RuleParam.nameMinLength}`,
      maxlength: `Максимальное количество символов в имене: ${RuleParam.nameMaxLength}`,
    }},
  clientNameLast: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.nameMinLength),
      Validators.maxLength(RuleParam.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно укажите вашу фамилию',
      minlength: `Минимальное количество символов в фамилии: ${RuleParam.nameMinLength}`,
      maxlength: `Максимальное количество символов в фамилии: ${RuleParam.nameMaxLength}`}},
  clientNameMiddle: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.nameMinLength),
      Validators.maxLength(RuleParam.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно укажите ваше отчество',
      minlength: `Минимальное количество символов в отчестве: ${RuleParam.nameMinLength}`,
      maxlength: `Максимальное количество символов в отчестве: ${RuleParam.nameMaxLength}`}},
  clientPhone: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.phoneMinLength),
      Validators.maxLength(RuleParam.phoneMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно укажите ваш номер телефона',
      minlength: `Неверный формат номера телефона, укажите 9 цифр вашего номера, например 296910330`,
      maxlength: `Неверный формат номера телефона, укажите 9 цифр вашего номера, например 296910330`}},
  clientEmail: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.emailMinLength),
      Validators.maxLength(RuleParam.emailMaxLength)],
    ErrorMessage: {
      required: `Пожалуйста, обязательно укажите адрес вашей электронной почты`,
      minlength: `Проверьте введенный вами адрес электронной почты`,
      maxlength: `Проверьте введенный вами адрес электронной почты`}},
  agreeRules: {
    RuleValidator: [Validators.required],
    ErrorMessage: {
      required: `Пожалуйста, подтвердите, согласие на обработку ваших персональных данных`}},
}

export class CourseClass {
  id: number;
  name: string;
  sourcePath: string;
  priceDefault: number;
  priceSale: number;
}

export const courseObjArr: CourseClass[] = [
  {id: 1, name: 'ENG', sourcePath: 'eng', priceDefault: 50.10, priceSale: 30.20},
  {id: 2, name: 'ITA', sourcePath: 'ita', priceDefault: 51.10, priceSale: 31.20},
  {id: 3, name: 'FRA', sourcePath: 'fra', priceDefault: 52.10, priceSale: null},
  {id: 4, name: 'DEU', sourcePath: 'deu', priceDefault: 53.10, priceSale: null},
]
