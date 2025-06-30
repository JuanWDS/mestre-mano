import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthgubComponent } from './fourthgub';

describe('FourthgubComponent', () => {
  let component: FourthgubComponent;
  let fixture: ComponentFixture<FourthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
