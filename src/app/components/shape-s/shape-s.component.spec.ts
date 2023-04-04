import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeSComponent } from './shape-s.component';

describe('ShapeSComponent', () => {
  let component: ShapeSComponent;
  let fixture: ComponentFixture<ShapeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
