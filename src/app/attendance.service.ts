import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendanceService {
  private restUrl = 'https://attend-rest.herokuapp.com';

  constructor(private http: Http) {}

  getKey(): Observable<JSON> {
    console.log('read here');
    return this.http
               .get(this.restUrl + '/key')
               .map( response => response.json().data);
  }

  setKey(key: string): Observable<JSON> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.restUrl + '/key', {key: key}, options)
                    .map( response => response.json().data);
  }

  submitAttendance(key: string, studentId: string): Observable<JSON> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.restUrl + '/submit', {key: key, student_id: studentId}, options)
                    .map( response => response.json().data);
  }
}
