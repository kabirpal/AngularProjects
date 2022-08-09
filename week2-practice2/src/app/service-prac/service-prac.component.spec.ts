import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePracComponent } from './service-prac.component';

describe('ServicePracComponent', () => {
  let component: ServicePracComponent;
  let fixture: ComponentFixture<ServicePracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
