import { Component, Input } from '@angular/core';
import { IBlock } from 'src/type';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.sass'],
})
export class BlockComponent {
  @Input() block: IBlock;
}
