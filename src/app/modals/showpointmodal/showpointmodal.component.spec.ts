import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpointmodalComponent } from './showpointmodal.component';

describe('ShowpointmodalComponent', () => {
  let component: ShowpointmodalComponent;
  let fixture: ComponentFixture<ShowpointmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpointmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpointmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
