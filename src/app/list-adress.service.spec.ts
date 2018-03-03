import { TestBed, inject } from '@angular/core/testing';

import { ListAdressService } from './list-adress.service';

describe('ListAdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAdressService]
    });
  });

  it('should be created', inject([ListAdressService], (service: ListAdressService) => {
    expect(service).toBeTruthy();
  }));
});
