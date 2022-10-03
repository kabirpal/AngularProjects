import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestkidsFashionComponent } from './bestkids-fashion.component';

describe('BestkidsFashionComponent', () => {
  let component: BestkidsFashionComponent;
  let fixture: ComponentFixture<BestkidsFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestkidsFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestkidsFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
