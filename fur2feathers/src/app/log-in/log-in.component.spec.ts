import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OktaAuthService,OktaConfig, OKTA_CONFIG } from '@okta/okta-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogInComponent', () => {
  let injector: TestBed
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {   
    const VALID_CONFIG = {
    clientId: 'foo',
    issuer: 'https://foo',
    redirectUri: 'https://foo'
  };
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [
        LogInComponent,
        OktaAuthService,
        {provide:OKTA_CONFIG,useValue:VALID_CONFIG}
      ]
    })
    .compileComponents();
    injector = getTestBed();
    component = injector.get(LogInComponent);
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
