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

export const ValidatorRule = {
  nameMinLength: 3,
  nameMaxLength: 25,
  phoneMinLength: 11,
  phoneMaxLength: 12,
  emailMinLength: 6
}

export const ValidatorArr = {
  name: [
    Validators.required,
    Validators.minLength(ValidatorRule.nameMinLength),
    Validators.maxLength(ValidatorRule.nameMaxLength),
  ],
  phone: [
    Validators.required,
    Validators.minLength(ValidatorRule.phoneMinLength),
    Validators.maxLength(ValidatorRule.phoneMaxLength)
  ],
  email: [
    Validators.required,
    Validators.minLength(ValidatorRule.emailMinLength),
  ]
}
