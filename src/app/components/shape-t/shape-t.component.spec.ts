import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeTComponent } from './shape-t.component';

describe('ShapeTComponent', () => {
  let component: ShapeTComponent;
  let fixture: ComponentFixture<ShapeTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
