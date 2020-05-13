import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { SubmitClaimComponent } from './submit-claim.component';
import { FormsModule } from '@angular/forms';

describe('SubmitClaimComponent', () => {
  let component: SubmitClaimComponent;
  let injector: TestBed;
  let fixture: ComponentFixture<SubmitClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SubmitClaimComponent ],
      providers: [SubmitClaimComponent]
    })
    .compileComponents();
    injector = getTestBed();
    component = injector.get(SubmitClaimComponent);
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
