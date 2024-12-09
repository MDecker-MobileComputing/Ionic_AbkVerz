import { TestBed } from '@angular/core/testing';

import { DialogToastHelferService } from './dialog-toast-helfer.service';

describe('DialogToastHelferService', () => {
  let service: DialogToastHelferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogToastHelferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
