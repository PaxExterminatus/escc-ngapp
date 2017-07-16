import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: string;
  constructor(private elementRef: ElementRef) {
    this.type = this.elementRef.nativeElement.getAttribute('type');
  }
}
