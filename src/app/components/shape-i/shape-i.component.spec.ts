import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeIComponent } from './shape-i.component';

describe('ShapeIComponent', () => {
  let component: ShapeIComponent;
  let fixture: ComponentFixture<ShapeIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
