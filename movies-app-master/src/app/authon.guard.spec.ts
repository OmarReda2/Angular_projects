import { TestBed } from '@angular/core/testing';

import { AuthonGuard } from './authon.guard';

describe('AuthonGuard', () => {
  let guard: AuthonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
