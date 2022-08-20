import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror8Component } from './mirror8.component';

describe('Mirror8Component', () => {
  let component: Mirror8Component;
  let fixture: ComponentFixture<Mirror8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
