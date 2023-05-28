/* eslint-disable no-case-declarations */
import { Component, HostListener } from '@angular/core';
import { IBlock, ShapeType } from 'src/type';
import { changePhase, moveDown, moveLeft, moveRight } from './moveShape';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.sass'],
})
export class TetrisComponent {

  shape: IBlock[] = [{
    color: 'red',
    x: 4,
    y: 0,
  },
  {
    color: 'red',
    x: 4,
    y: 1,
  },
  {
    color: 'red',
    x: 4,
    y: 2,
  },
  {
    color: 'red',
    x: 4,
    y: 3,
  }];

  arrHrHorizontal = Array.from(Array(19).keys());

  arrHrVertical = Array.from(Array(9).keys());

  shapeType: ShapeType = ShapeType.I;

  shapePhase = 1;

  @HostListener('window:keydown', ['$event'])

  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'Space': this.changeShapePhase(event); break;
      case 'ArrowLeft': this.moveShapeLeft(event); break;
      case 'ArrowRight': this.moveShapeRight(event); break;
      case 'ArrowDown':this.moveShapeDown(event); break;
      default: break;
    }
  }

  moveShapeDown($event: Event): void {
    this.shape = moveDown($event, this.shape);
  }

  moveShapeRight($event: Event): void {
    this.shape = moveRight($event, this.shape);
  }

  moveShapeLeft($event: Event): void {
    this.shape = moveLeft($event, this.shape);
  }

  changeShapePhase($event: Event): void {
    const [newShape, newPhase] = changePhase($event, this.shape, this.shapePhase, this.shapeType);
    this.shape = newShape;
    this.shapePhase = newPhase;
  }

}
