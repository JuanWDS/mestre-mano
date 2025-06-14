import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthgubComponent } from './tenthgub';

describe('Tenthgub', () => {
  let component: TenthgubComponent;
  let fixture: ComponentFixture<TenthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
