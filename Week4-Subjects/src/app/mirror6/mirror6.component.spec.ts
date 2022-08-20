import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mirror6Component } from './mirror6.component';

describe('Mirror6Component', () => {
  let component: Mirror6Component;
  let fixture: ComponentFixture<Mirror6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mirror6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mirror6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
