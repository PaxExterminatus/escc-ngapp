import { Component, Input } from '@angular/core';
import { CourseClass } from '../order-model/form';

@Component({
  selector: 'app-course-info',
  templateUrl: 'course-info.html'
})

export class CourseInfoComponent {
  @Input() courseObj: CourseClass;
}
