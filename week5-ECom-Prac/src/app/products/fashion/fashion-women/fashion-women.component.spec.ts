import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWomenComponent } from './fashion-women.component';

describe('FashionWomenComponent', () => {
  let component: FashionWomenComponent;
  let fixture: ComponentFixture<FashionWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
