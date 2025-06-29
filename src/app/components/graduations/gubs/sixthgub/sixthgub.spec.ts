import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthgubComponent } from './sixthgub';

describe('SixthgubComponent', () => {
  let component: SixthgubComponent;
  let fixture: ComponentFixture<SixthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
