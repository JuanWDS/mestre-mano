import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgubComponent } from './firstgub';

describe('FirstgubComponent', () => {
  let component: FirstgubComponent;
  let fixture: ComponentFixture<FirstgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
