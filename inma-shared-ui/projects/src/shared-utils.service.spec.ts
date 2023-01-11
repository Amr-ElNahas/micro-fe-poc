import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { SharedUtilsService } from './shared-utils.service';

describe('SharedUtilsService', () => {
  let service: SharedUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[BrowserDynamicTestingModule]
    });
    service = TestBed.inject(SharedUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
