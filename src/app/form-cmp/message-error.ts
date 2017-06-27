import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.html'
})

export class MessageErrorComponent {
  @Input() msgValue: string;
}
