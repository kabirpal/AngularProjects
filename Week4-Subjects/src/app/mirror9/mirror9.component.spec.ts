import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror9Component } from './mirror9.component';

describe('Mirror9Component', () => {
  let component: Mirror9Component;
  let fixture: ComponentFixture<Mirror9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
