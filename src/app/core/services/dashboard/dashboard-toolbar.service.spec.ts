import { TestBed } from '@angular/core/testing';

import { DashboardToolbarService } from './dashboard-toolbar.service';

describe('DashboardToolbarService', () => {
  let service: DashboardToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
