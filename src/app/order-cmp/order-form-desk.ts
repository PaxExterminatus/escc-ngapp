interface IFormDesk {
  submitCaption: string;
}

let desk: {[id: string]: IFormDesk; } = {};
desk['etl'] = {
  submitCaption: 'Скачать бесплатно',
};

desk['tl'] = {
  submitCaption: 'Заказать бесплатно'
};

export class FormDeskClass {
  submitCaption: string;

  constructor(formType: string) {
    this.submitCaption = desk[formType].submitCaption;
  }
}
