import { TestBed } from '@angular/core/testing';

import { ItemDateServiceService } from './item-date.service';

describe('ItemDateServiceService', () => {
  let service: ItemDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
