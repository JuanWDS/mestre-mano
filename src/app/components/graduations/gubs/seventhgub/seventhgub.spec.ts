import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhgubComponent } from './seventhgub';

describe('SeventhgubComponent', () => {
  let component: SeventhgubComponent;
  let fixture: ComponentFixture<SeventhgubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventhgubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhgubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
