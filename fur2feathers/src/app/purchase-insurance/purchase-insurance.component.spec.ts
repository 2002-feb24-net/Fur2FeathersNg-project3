import { async, ComponentFixture, TestBed,getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService, OKTA_CONFIG } from '@okta/okta-angular';

import { PurchaseInsuranceComponent } from './purchase-insurance.component';

describe('PurchaseInsuranceComponent', () => {
  let injector: TestBed;

  let component: PurchaseInsuranceComponent;
  let fixture: ComponentFixture<PurchaseInsuranceComponent>;

  

  beforeEach(async(() => {
    const VALID_CONFIG = {
      clientId: 'foo',
      issuer: 'https://foo',
      redirectUri: 'https://foo'
    };
    TestBed.configureTestingModule({
      declarations: [ PurchaseInsuranceComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [
            PurchaseInsuranceComponent,
            RouterTestingModule,
            OktaAuthService,
            {provide:OKTA_CONFIG,useValue: VALID_CONFIG}
          ]
    })
    .compileComponents();
    injector = getTestBed();
    component = injector.get(PurchaseInsuranceComponent);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
