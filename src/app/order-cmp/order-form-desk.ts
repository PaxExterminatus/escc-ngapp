interface IFormDesk {
  Caption: string;
  Submit: string;
}

let desk: {[id: string]: IFormDesk; };
desk = {};
desk['etl'] = {
  Caption: 'Скачать электронный пробный урок',
  Submit: 'Скачать пробный урок',

};

desk['tl'] = {
  Caption: 'Заказать печатный вариант пробного урока',
  Submit: 'Заказать пробного урока'
};

export class FormDeskClass {
  Caption: string;
  Submit: string;
  constructor(prFormClass: string) {
    this.Caption = desk[prFormClass].Caption;
    this.Submit = desk[prFormClass].Submit;
  }
}
