import {Validators} from '@angular/forms';

export class CourseClass {
  id: number;
  name: string;
  source: string;
  price: number;
  sale: number;
}

export const CourseArr: CourseClass[] = [
  {id: 1, name: 'ENG', source: 'eng', price: 50.10, sale: 30.20},
  {id: 2, name: 'ITA', source: 'ita', price: 51.10, sale: 31.20},
  {id: 3, name: 'FRA', source: 'fra', price: 52.10, sale: 32.20},
  {id: 4, name: 'DEU', source: 'deu', price: 53.10, sale: 33.20},
]

export const RuleParam = {
  nameMinLength: 3,
  nameMaxLength: 25,
  phoneMinLength: 9,
  phoneMaxLength: 9,
  emailMinLength: 6
}

export const RuleArr = {
  course: {
    RuleValidator: [Validators.required],
    ErrorMessage: {
      required: 'Обязательно выберите курс'}},
  clientNameFirst: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.nameMinLength),
      Validators.maxLength(RuleParam.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно укажите ваше имя',
      minlength: `Минимальное количество символов в имени: ${RuleParam.nameMinLength}`,
      maxlength: `Максимальное количество символов в имене: ${RuleParam.nameMaxLength}`}},
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
      minlength: `Неверный формат телефонного номера, укажите 9 цифр вашего номера, например 296910330`,
      maxlength: `Неверный формат телефонного номера, укажите 9 цифр вашего номера, например 296910330`}},
  clientEmail: {
    RuleValidator: [
      Validators.required,
      Validators.minLength(RuleParam.phoneMinLength),
      Validators.maxLength(RuleParam.phoneMaxLength)],
    ErrorMessage: {
      required: `Пожалуйста, обязательно укажите адрес вашей электронной почты`,
      minlength: `Проверьте введенный вами адрес электронной почты`,
      maxlength: `Проверьте введенный вами адрес электронной почты`}},
  agreeRules: {
    RuleValidator: [Validators.required],
    ErrorMessage: {
      required: `Пожалуйста, подтвердите, согласие на обработку ваших персональных данных`}},
}
