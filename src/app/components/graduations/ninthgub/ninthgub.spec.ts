import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthgubComponent } from './ninthgub';

describe('Ninthgub', () => {
  let component: NinthgubComponent;
  let fixture: ComponentFixture<NinthgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinthgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinthgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
