import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GubsComponent } from './gubs';

describe('GubsComponent', () => {
  let component: GubsComponent;
  let fixture: ComponentFixture<GubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
