import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeZComponent } from './shape-z.component';

describe('ShapeZComponent', () => {
  let component: ShapeZComponent;
  let fixture: ComponentFixture<ShapeZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
