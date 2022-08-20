import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror4Component } from './mirror4.component';

describe('Mirror4Component', () => {
  let component: Mirror4Component;
  let fixture: ComponentFixture<Mirror4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
