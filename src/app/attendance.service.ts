import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendanceService {
  private restUrl = 'https://attend-rest.herokuapp.com';

  constructor(private http: Http, private jsonp: Jsonp) {}

  getKey(): Observable<JSON> {
    return this.http
               .get(this.restUrl + '/key')
               .map((response) => response.json());
  }

  setKey(key: string): Observable<JSON> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.restUrl + '/key', {key: key, password: 'root'}, options)
                    .map( response => response.json().data);
  }

  submitAttendance(key: string, studentId: string, sectionId: number): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    console.log(key, studentId, sectionId);

    return this.http.post(this.restUrl + '/submit',
      {
        key: key,
        student_id: '' + studentId + '',
        worksheet: sectionId
      }, options).map( response => response.json());
  }
}
