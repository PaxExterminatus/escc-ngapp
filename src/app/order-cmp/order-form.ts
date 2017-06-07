import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.html'
})

export class OrderFormComponent {
  formType = 'etl_short';
  orderForm: FormGroup;
  orderFormEtl: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createOrderForm();
  }

  createOrderForm() {
    switch (this.formType) {
      case 'etl_short':
        this.orderForm = this.fb.group(etl_short);
        break;
      case 'etl_normal':
        this.orderForm = this.fb.group(etl_normal);
        break;
      default:
        break;
    }
  }
}

const etl_short = {
  clientNameFirst: ['', Validators.required],
  clientNameLast: ['', Validators.required],
  clientPhone: ['', Validators.required],
  clientEmail: ['', Validators.required],
}

const etl_normal = {
  clientNameFirst: ['', Validators.required],
  clientNameLast: ['', Validators.required],
  clientPhone: ['', Validators.required],
  clientEmail: ['', Validators.required],
}
