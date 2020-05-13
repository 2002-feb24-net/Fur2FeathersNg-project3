import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInsuranceComponent } from './purchase-insurance.component';

describe('PurchaseInsuranceComponent', () => {
  let injector: TestBed;

  let component: PurchaseInsuranceComponent;
  let fixture: ComponentFixture<PurchaseInsuranceComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ AddResourceFormComponent ],
  //     imports: [HttpClientTestingModule],
  //     providers: [AddResourceFormComponent,ResourceFormService,UserService]
  //   })
  //   .compileComponents();
  //   injector = getTestBed();
  //   component = injector.get(AddResourceFormComponent);
  //   formService = injector.get(ResourceFormService);
  //   resService = injector.get(ResourceService);
  // }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
