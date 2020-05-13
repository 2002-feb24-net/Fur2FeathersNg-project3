import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { DataAccessService } from './data-access.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { OktaAuthService,OKTA_CONFIG } from '@okta/okta-angular';

describe('DataAccessService', () => {
  let service: DataAccessService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const VALID_CONFIG = {
      clientId: 'foo',
      issuer: 'https://foo',
      redirectUri: 'https://foo'
    };
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        DataAccessService,
        {provide:OKTA_CONFIG,useValue:VALID_CONFIG},
        OktaAuthService]
    });
    injector = getTestBed();
    service = injector.get(DataAccessService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
