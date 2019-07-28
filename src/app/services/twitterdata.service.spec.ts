import { TestBed } from '@angular/core/testing';

import { TwitterdataService } from './twitterdata.service';

describe('TwitterdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterdataService = TestBed.get(TwitterdataService);
    expect(service).toBeTruthy();
  });
});
