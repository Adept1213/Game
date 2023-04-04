import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeJComponent } from './shape-j.component';

describe('ShapeJComponent', () => {
  let component: ShapeJComponent;
  let fixture: ComponentFixture<ShapeJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
