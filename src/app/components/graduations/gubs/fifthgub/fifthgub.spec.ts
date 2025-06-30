import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthgubComponent } from './fifthgub';

describe('FifthgubComponent', () => {
  let component: FifthgubComponent;
  let fixture: ComponentFixture<FifthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
