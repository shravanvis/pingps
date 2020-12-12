import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresssearchComponent } from './addresssearch.component';

describe('AddresssearchComponent', () => {
  let component: AddresssearchComponent;
  let fixture: ComponentFixture<AddresssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
