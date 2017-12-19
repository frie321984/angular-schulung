import { TestBed, async, inject } from '@angular/core/testing';

import { RandomAllowedGuard } from './random-allowed.guard';

describe('RandomAllowedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomAllowedGuard]
    });
  });

  it('should ...', inject([RandomAllowedGuard], (guard: RandomAllowedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
