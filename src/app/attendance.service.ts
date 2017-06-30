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

  setKey(key: string, section: number): Observable<JSON> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.restUrl + '/key', {key: key, password: 'root', worksheet: Number(section)}, options)
                    .map( response => response.json().data);
  }

  submitAttendance(key: string, studentId: string, sectionId: number, lat: number, long: number): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.restUrl + '/submit',
      {
        key: key,
        student_id: '' + studentId + '',
        worksheet: sectionId,
        lat: lat,
        long: long
      }, options).map( response => response.json());
  }
}
