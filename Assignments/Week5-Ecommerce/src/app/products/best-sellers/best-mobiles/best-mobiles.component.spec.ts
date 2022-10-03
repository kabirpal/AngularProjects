import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMobilesComponent } from './best-mobiles.component';

describe('BestMobilesComponent', () => {
  let component: BestMobilesComponent;
  let fixture: ComponentFixture<BestMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMobilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
