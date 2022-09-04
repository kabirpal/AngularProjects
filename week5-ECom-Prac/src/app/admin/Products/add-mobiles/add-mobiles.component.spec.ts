import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobilesComponent } from './add-mobiles.component';

describe('AddMobilesComponent', () => {
  let component: AddMobilesComponent;
  let fixture: ComponentFixture<AddMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMobilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
