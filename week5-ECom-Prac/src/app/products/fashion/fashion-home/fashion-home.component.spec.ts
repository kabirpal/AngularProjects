import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionHomeComponent } from './fashion-home.component';

describe('FashionHomeComponent', () => {
  let component: FashionHomeComponent;
  let fixture: ComponentFixture<FashionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
