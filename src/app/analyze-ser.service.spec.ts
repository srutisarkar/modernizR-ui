import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AnalyzeSerService } from './analyze-ser.service';

describe('AnalyzeSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AnalyzeSerService]
  }));

  it('should be created', () => {
    const service: AnalyzeSerService = TestBed.get(AnalyzeSerService);
    expect(service).toBeTruthy();
  });
});
