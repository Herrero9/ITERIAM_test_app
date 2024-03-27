/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedService } from './shared.service';

describe('Service: Shared', () => {
  
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService]
    });
  });

  it('should ...', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an array of 4000 elements', inject([SharedService], (service: SharedService) => {
    expect( service.populateArray().length).toBe(4000);
  }));

  it('should return a JSON string of the array', inject([SharedService], (service: SharedService) => {
    expect( service.generateImgJson()).toBeTruthy();
  }));
});
