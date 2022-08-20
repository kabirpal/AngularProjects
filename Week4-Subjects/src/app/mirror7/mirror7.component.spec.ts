import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror7Component } from './mirror7.component';

describe('Mirror7Component', () => {
  let component: Mirror7Component;
  let fixture: ComponentFixture<Mirror7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
