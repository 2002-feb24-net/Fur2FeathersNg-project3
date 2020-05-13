import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { OktaAuthService,OKTA_CONFIG } from '@okta/okta-angular';

describe('NavBarComponent', () => {
  let injector: TestBed;
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    const VALID_CONFIG = {
      clientId: 'foo',
      issuer: 'https://foo',
      redirectUri: 'https://foo'
    };
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [
        NavBarComponent,
        OktaAuthService,
        {provide: OKTA_CONFIG, useValue: VALID_CONFIG}
      ]
    })
    .compileComponents();
    injector = getTestBed();
    component = injector.get(NavBarComponent);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
