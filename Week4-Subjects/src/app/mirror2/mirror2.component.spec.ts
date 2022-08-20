import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror2Component } from './mirror2.component';

describe('Mirror2Component', () => {
  let component: Mirror2Component;
  let fixture: ComponentFixture<Mirror2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
