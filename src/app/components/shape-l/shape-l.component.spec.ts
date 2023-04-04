import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeLComponent } from './shape-l.component';

describe('ShapeLComponent', () => {
  let component: ShapeLComponent;
  let fixture: ComponentFixture<ShapeLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
