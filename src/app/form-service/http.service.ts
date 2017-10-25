import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class HttpService {

  constructor(private http: Http) {}

  getCoursesList() {
    return this.http.get('https://www.eshko.by/api/list/course');
  }
}
