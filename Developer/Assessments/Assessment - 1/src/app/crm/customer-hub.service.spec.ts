import { TestBed } from '@angular/core/testing';

import { CustomerHubService } from './customer-hub.service';

describe('CustomerHubService', () => {
  let service: CustomerHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
