import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdgubComponent } from './thirdgub';

describe('ThirdgubComponent', () => {
  let component: ThirdgubComponent;
  let fixture: ComponentFixture<ThirdgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
