import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror1Component } from './mirror1.component';

describe('Mirror1Component', () => {
  let component: Mirror1Component;
  let fixture: ComponentFixture<Mirror1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
