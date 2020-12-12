import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsmodalComponent } from './reportsmodal.component';

describe('ReportsmodalComponent', () => {
  let component: ReportsmodalComponent;
  let fixture: ComponentFixture<ReportsmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
