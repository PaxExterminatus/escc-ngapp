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
  phoneMinLength: 9,
  phoneMaxLength: 9,
  emailMinLength: 6
}

export const ValidatorArr = {
  course: {
    RulesArr: [
      Validators.required
    ],
    ErrorMessage: {
      required: 'Обязательно, выберите курс'
    }
  },
  clientNameFirst: {
    RulesArr: [
      Validators.required,
      Validators.minLength(ValidatorRule.nameMinLength),
      Validators.maxLength(ValidatorRule.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно, укажите ваще имя',
      minlength: `Минимальное количество символов в имене: ${ValidatorRule.nameMinLength}`,
      maxlength: `Максимальное количество символов в имене: ${ValidatorRule.nameMaxLength}`,
    }
  },
  clientNameLast: {
    RulesArr: [
      Validators.required,
      Validators.minLength(ValidatorRule.nameMinLength),
      Validators.maxLength(ValidatorRule.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно, укажите вашу фамилию',
      minlength: `Минимальное количество символов в фамилии: ${ValidatorRule.nameMinLength}`,
      maxlength: `Максимальное количество символов в фамилии: ${ValidatorRule.nameMaxLength}`,
    }
  },
  clientNameMiddle: {
    RulesArr: [
      Validators.required,
      Validators.minLength(ValidatorRule.nameMinLength),
      Validators.maxLength(ValidatorRule.nameMaxLength)],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно, укажите ваше отчество',
      minlength: `Минимальное количество символов в отчестве: ${ValidatorRule.nameMinLength}`,
      maxlength: `Максимальное количество символов в отчестве: ${ValidatorRule.nameMaxLength}`,
    }
  },
  clientPhone: {
    RulesArr: [
      Validators.required,
      Validators.minLength(ValidatorRule.phoneMinLength),
      Validators.maxLength(ValidatorRule.phoneMaxLength)
    ],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно, укажите ваш номер телефона',
      minlength: 'Неверный формат телефонного номера, укажите 9 цифр вашего номера, например 296910330',
      maxlength: 'Неверный формат телефонного номера, укажите 9 цифр вашего номера, например 296910330',
    }
  },
  clientEmail: {
    RulesArr: [
      Validators.required,
      Validators.minLength(ValidatorRule.phoneMinLength),
      Validators.maxLength(ValidatorRule.phoneMaxLength)
    ],
    ErrorMessage: {
      required: 'Пожалуйста, обязательно, укажите адрес вашей электронной почты',
      minlength: 'Проверте введеный вами адрес электронной почты',
      maxlength: 'Проверте введеный вами адрес электронной почты',
    }
  },
  agreeRules: {
    RulesArr: [
      Validators.required
    ],
    ErrorMessage: {
      required: 'Пожалуйста, подтвердите, согласие на обработку ваших персональных данных',
    }
  },
}
