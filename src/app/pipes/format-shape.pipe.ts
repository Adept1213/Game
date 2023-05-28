import { Pipe, PipeTransform } from '@angular/core';
import { IBlock } from 'src/type';

@Pipe({
  name: 'formatShape',
})
export class FormatShapePipe implements PipeTransform {

  transform(shapeArr: IBlock[]):  IBlock[] {
    return shapeArr.map(item => ({
      x: item.x * 30,
      y: item.y * 30,
      color: item.color,
    }));
  }

}
