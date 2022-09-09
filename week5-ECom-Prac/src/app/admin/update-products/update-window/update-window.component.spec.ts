import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWindowComponent } from './update-window.component';

describe('UpdateWindowComponent', () => {
  let component: UpdateWindowComponent;
  let fixture: ComponentFixture<UpdateWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
