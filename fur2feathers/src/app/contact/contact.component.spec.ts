import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [HttpClientTestingModule],
      providers:[ContactComponent]
    })
    .compileComponents();
    injector=getTestBed();
    component = injector.get(ContactComponent);
    
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
