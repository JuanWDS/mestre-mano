import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthgubComponent } from './eighthgub';

describe('Eighthgub', () => {
  let component: EighthgubComponent;
  let fixture: ComponentFixture<EighthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
