import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisFieldComponent } from './tetris-field.component';

describe('TetrisFieldComponent', () => {
  let component: TetrisFieldComponent;
  let fixture: ComponentFixture<TetrisFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetrisFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetrisFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
