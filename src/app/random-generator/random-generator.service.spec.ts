import { TestBed, inject } from '@angular/core/testing';

import { RandomGeneratorService } from './random-generator.service';

describe('RandomGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomGeneratorService]
    });
  });

  it('should be created', inject([RandomGeneratorService], (service: RandomGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
