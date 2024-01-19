import { TestBed } from '@angular/core/testing';

import { UserRouteService } from './user-route.service';

describe('UserRouteService', () => {
  let service: UserRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
