import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWomenFashionComponent } from './best-women-fashion.component';

describe('BestWomenFashionComponent', () => {
  let component: BestWomenFashionComponent;
  let fixture: ComponentFixture<BestWomenFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestWomenFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestWomenFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
