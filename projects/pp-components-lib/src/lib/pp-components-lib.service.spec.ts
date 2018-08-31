import { TestBed, inject } from '@angular/core/testing';

import { PpComponentsLibService } from './pp-components-lib.service';

describe('PpComponentsLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PpComponentsLibService]
    });
  });

  it('should be created', inject([PpComponentsLibService], (service: PpComponentsLibService) => {
    expect(service).toBeTruthy();
  }));
});
