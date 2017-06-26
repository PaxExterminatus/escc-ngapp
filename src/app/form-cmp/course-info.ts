import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: 'course-info.html'
})

export class CourseInfoComponent {
  @Input() sourcePath: string;
  @Input() priceDefault: string;
  @Input() priceSale: string;
}
