import { IBlock, ShapeType } from 'src/type';

export function moveLeft($event: Event, shape: IBlock[]): IBlock[] {
  $event.preventDefault();
  let isCorrect = true;
  const movedShape = shape.map(el => {
    if (el.x - 1 < 0) {
      isCorrect = false;
    } 
    return {
      color: el.color,
      x: el.x - 1,
      y: el.y,
    };
  });
  if (isCorrect) {
    shape = movedShape;
  }
  return shape;
}

export function moveRight($event: Event, shape: IBlock[]): IBlock[] {
  $event.preventDefault();
  let isCorrect = true;
  const movedShape = shape.map(el => {
    if (el.x + 1 > 9) {
      isCorrect = false;
    } 
    return {
      color: el.color,
      x: el.x + 1,
      y: el.y,
    };
  });

  if (isCorrect) {
    return movedShape;
  }
  return shape;
}

export function moveDown($event: Event, shape: IBlock[]): IBlock[] {
  $event.preventDefault();
  let isCorrect = true;
  const movedShape = shape.map(el => {
    if (el.y > 18) {
      isCorrect = false;
    }
    return {
      color: el.color,
      x: el.x,
      y: el.y + 1,
    };
  });

  if (isCorrect) {
    return movedShape;
  }
  return shape;
}

// shape I
function changePhaseI($event: Event, shape: IBlock[], phase: number): [IBlock[], number] {
  $event.preventDefault();
  let isCorrect = true;
  let newShape: IBlock[] = shape;
  let newPhase = phase;

  switch (phase) {
    case 2:
      newPhase = 3;
      newShape = shape.map((el, index) => ({
        color: el.color,
        x: shape[0].x,
        y: el.y - 2 + index,
      }));
      break;
    case 3:
      newPhase = 4;
      newShape = shape.map((el, index) => {
        const movedX = el.x - 1 + index;
        if (movedX < 0 || movedX > 9) {
          isCorrect = false;
        }
        return {
          color: el.color,
          x: movedX,
          y: shape[1].y,
        };
      });
      break;
    case 4:
      newPhase = 1;
      newShape = shape.map((el, index) => ({
        color: el.color,
        x: shape[2].x,
        y: el.y - 1 + index,
      }));
      break;
    case 1:
    default:
      newPhase = 2;
      newShape = shape.map((el, index) => {
        const movedX = el.x - 1 + index;
        if (movedX < 0 || movedX > 9) {
          isCorrect = false;
        }
        return {
          color: el.color,
          x: el.x - 1 + index,
          y: shape[2].y,
        };
      });
  }

  if (!isCorrect) {
    return [shape, phase];
  }

  return [newShape, newPhase];
}

export function changePhase($event: Event, shape: IBlock[], phase: number, shapeType: ShapeType): [IBlock[], number] {
  switch (shapeType) {
    case ShapeType.I: return changePhaseI($event, shape, phase);
    default: return [shape, phase];
  }
}

