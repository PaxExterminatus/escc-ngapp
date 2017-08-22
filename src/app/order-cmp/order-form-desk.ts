import {CONST} from '../CONST';

interface IFormDesk {
  submitCaption: string;
}

let desk: {[id: string]: IFormDesk; } = {};
desk[CONST.ORDER_ETL] = {
  submitCaption: 'Скачать бесплатно',
};

desk[CONST.ORDER_DEMO] = {
  submitCaption: 'Получить доступ'
};

export class FormDescription {
  submitCaption: string;

  constructor(formType: string) {
    this.submitCaption = desk[formType].submitCaption;
  }
}
