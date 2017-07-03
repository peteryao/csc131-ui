import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, ResponseContentType } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AttendanceService } from './attendance.service';

fdescribe('AttendanceService', () => {
  let subject: AttendanceService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttendanceService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, defaultOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([AttendanceService, MockBackend], (attendance, mockBackend) => {
    subject = attendance;
    backend = mockBackend;
  }));

  it('should mark attendance on spreadsheet in green with a valid key, studentID, and location', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://attend-rest.herokuapp.com/submit');
      expect(connection.request.method).toEqual(RequestMethod.Post);
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
      expect(connection.request.getBody()).toEqual(JSON.stringify({
          key: '11111',
          student_id: '123456789',
          worksheet: 1,
          lat: 32,
          long: -101
        }, null, 2
      ));

      const options = new ResponseOptions({
        body: JSON.stringify({
          result: 'Success',
          name: 'Test'
        })
      });

      connection.mockRespond(new Response(options));
    });

    expect(subject).toBeTruthy();

    subject.submitAttendance('11111', '123456789', 1, 32, -101).subscribe((response) => {
      expect(response.result).toEqual('Success');
      expect(response.name).toEqual('Test');
      done();
    });
  });

  it('should mark attendance on spreadsheet in red with a valid key and studentID but invalid location', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://attend-rest.herokuapp.com/submit');
      expect(connection.request.method).toEqual(RequestMethod.Post);
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
      expect(connection.request.getBody()).toEqual(JSON.stringify({
          key: '11111',
          student_id: '123456789',
          worksheet: 1,
          lat: 1,
          long: 1
        }, null, 2
      ));

      const options = new ResponseOptions({
        body: JSON.stringify({
          result: 'Success',
          name: 'Test'
        })
      });

      connection.mockRespond(new Response(options));
    });

    expect(subject).toBeTruthy();

    subject.submitAttendance('11111', '123456789', 1, 1, 1).subscribe((response) => {
      expect(response.result).toEqual('Success');
      expect(response.name).toEqual('Test');
      done();
    });
  });

  it('should catch an invalid student id and tell student their id is invalid', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://attend-rest.herokuapp.com/submit');
      expect(connection.request.method).toEqual(RequestMethod.Post);
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
      expect(connection.request.getBody()).toEqual(JSON.stringify({
          key: '11111',
          student_id: 'NOT A KEY',
          worksheet: 1,
          lat: 1,
          long: 1
        }, null, 2
      ));

      const options = new ResponseOptions({
        body: JSON.stringify({
          result: 'Invalid Student Id',
        })
      });

      connection.mockRespond(new Response(options));
    });

    expect(subject).toBeTruthy();

    subject.submitAttendance('11111', 'NOT A KEY', 1, 1, 1).subscribe((response) => {
      expect(response.result).toEqual('Invalid Student Id');
      done();
    });
  });

  it('should catch a bad key for section input and tell student their key is invalid', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://attend-rest.herokuapp.com/submit');
      expect(connection.request.method).toEqual(RequestMethod.Post);
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
      expect(connection.request.getBody()).toEqual(JSON.stringify({
          key: 'BAD KEY',
          student_id: '123456789',
          worksheet: 1,
          lat: 1,
          long: 1
        }, null, 2
      ));

      const options = new ResponseOptions({
        body: JSON.stringify({
          result: 'Invalid Key',
        })
      });

      connection.mockRespond(new Response(options));
    });

    expect(subject).toBeTruthy();

    subject.submitAttendance('BAD KEY', '123456789', 1, 1, 1).subscribe((response) => {
      expect(response.result).toEqual('Invalid Key');
      done();
    });
  });
});
