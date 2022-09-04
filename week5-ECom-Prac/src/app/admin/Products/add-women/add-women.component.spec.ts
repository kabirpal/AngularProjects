import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomenComponent } from './add-women.component';

describe('AddWomenComponent', () => {
  let component: AddWomenComponent;
  let fixture: ComponentFixture<AddWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
