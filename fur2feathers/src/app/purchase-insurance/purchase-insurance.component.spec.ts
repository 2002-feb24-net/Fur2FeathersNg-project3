import { async, ComponentFixture, TestBed,getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService, OKTA_CONFIG } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';

import { PurchaseInsuranceComponent } from './purchase-insurance.component';
import { Pet } from '../interfaces/pet';

describe('PurchaseInsuranceComponent', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let component: PurchaseInsuranceComponent;
  let fixture: ComponentFixture<PurchaseInsuranceComponent>;
  let sheetSpy;
  

  beforeEach(() => {
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
    httpMock = injector.get(HttpTestingController);
    sheetSpy = spyOn(component,'petToSheet').and.callThrough();

  });

  // afterEach(()=> {
  //   //fails any test which has outstanding requests
  //   httpMock.verify();
  // })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('#onSubmit()',()=> {
    const dummyCust = {"customerId":0,"name":"Jonathan Bui","street":"Some St","addr2":"Apt 13","city":"Balitmore","state":"MD","zip":"111111","phone":"818102433","email":"abc@gmail.com","username":"","password":"","pets":[]}
    it('should set the models id to the returned object\'s id',()=> {
      event = new Event('MouseEvent')
      component.onSubmit();
      const request = httpMock.expectOne(environment.f2fApiBaseUrl+`/api/customers`)
      request.flush(dummyCust);
      expect(request.request.method).toBe('POST');
    })
    it('should add pets', ()=> {
      event = new Event('MoustEvent')
      component.pet_queue = [
        new Pet(0,"test","test","",2,"male","inactive","","",0,"",[]),
        new Pet(0,"test1","test1","",2,"male","inactive","","",0,"",[])
      ]
      component.onSubmit();
      expect(sheetSpy).toHaveBeenCalled;

    })
  })
  describe('#addPet()',()=> {
    it('should add to pet to queue',()=>{
      event = new Event('MouseEvent')
      component.pet_model= new Pet(0,"test","test","",2,"male","inactive","","",0,"",[])
      component.addPet();
      expect(component.pet_queue.length).toEqual(1);
    })
  })
});
