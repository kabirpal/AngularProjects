import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMenFashionComponent } from './best-men-fashion.component';

describe('BestMenFashionComponent', () => {
  let component: BestMenFashionComponent;
  let fixture: ComponentFixture<BestMenFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMenFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestMenFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
