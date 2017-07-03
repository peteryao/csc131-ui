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

  it('should be created', inject([AttendanceService], (service: AttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
