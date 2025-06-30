import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgubComponent } from './secondgub';

describe('SecondgubComponent', () => {
  let component: SecondgubComponent;
  let fixture: ComponentFixture<SecondgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
