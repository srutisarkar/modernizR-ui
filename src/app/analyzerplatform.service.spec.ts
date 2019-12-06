import { TestBed } from '@angular/core/testing';

import { AnalyzerplatformService } from './analyzerplatform.service';

describe('AnalyzerplatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzerplatformService = TestBed.get(AnalyzerplatformService);
    expect(service).toBeTruthy();
  });
});
