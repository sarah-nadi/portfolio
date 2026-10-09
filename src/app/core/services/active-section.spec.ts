import { TestBed } from '@angular/core/testing';

import { ActiveSection } from './active-section';

describe('ActiveSection', () => {
  let service: ActiveSection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveSection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
