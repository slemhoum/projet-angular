import { TestBed } from '@angular/core/testing';

import { RefsService } from './refs.service';

describe('RefsService', () => {
  let service: RefsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
