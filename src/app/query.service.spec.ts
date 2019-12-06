import { TestBed } from '@angular/core/testing';

import { QueryService } from './query.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('QueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [QueryService]
  }));

  it('should be created', () => {
    const service: QueryService = TestBed.get(QueryService);
    expect(service).toBeTruthy();
  });
});
