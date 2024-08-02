import { TestBed } from '@angular/core/testing';

import { MessageSvcService } from './message-svc.service';

describe('MessageSvcService', () => {
  let service: MessageSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
