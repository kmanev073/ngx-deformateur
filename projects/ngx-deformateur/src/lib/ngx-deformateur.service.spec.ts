import { TestBed } from '@angular/core/testing';

import { NgxDeformateurService } from './ngx-deformateur.service';

describe('NgxDeformateurService', () => {
  let service: NgxDeformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDeformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
