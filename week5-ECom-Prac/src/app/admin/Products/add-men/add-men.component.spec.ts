import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenComponent } from './add-men.component';

describe('AddMenComponent', () => {
  let component: AddMenComponent;
  let fixture: ComponentFixture<AddMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
