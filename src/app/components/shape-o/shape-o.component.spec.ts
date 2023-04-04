import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeOComponent } from './shape-o.component';

describe('ShapeOComponent', () => {
  let component: ShapeOComponent;
  let fixture: ComponentFixture<ShapeOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
