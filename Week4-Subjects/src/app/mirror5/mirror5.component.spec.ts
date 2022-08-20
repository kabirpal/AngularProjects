import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror5Component } from './mirror5.component';

describe('Mirror5Component', () => {
  let component: Mirror5Component;
  let fixture: ComponentFixture<Mirror5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
