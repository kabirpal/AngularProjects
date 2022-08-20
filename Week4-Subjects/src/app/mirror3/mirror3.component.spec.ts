import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror3Component } from './mirror3.component';

describe('Mirror3Component', () => {
  let component: Mirror3Component;
  let fixture: ComponentFixture<Mirror3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
