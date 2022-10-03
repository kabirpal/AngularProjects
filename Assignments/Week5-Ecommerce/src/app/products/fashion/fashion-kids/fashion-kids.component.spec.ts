import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionKidsComponent } from './fashion-kids.component';

describe('FashionKidsComponent', () => {
  let component: FashionKidsComponent;
  let fixture: ComponentFixture<FashionKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionKidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
