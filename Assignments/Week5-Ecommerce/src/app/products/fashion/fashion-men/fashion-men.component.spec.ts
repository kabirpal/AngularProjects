import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionMenComponent } from './fashion-men.component';

describe('FashionMenComponent', () => {
  let component: FashionMenComponent;
  let fixture: ComponentFixture<FashionMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
