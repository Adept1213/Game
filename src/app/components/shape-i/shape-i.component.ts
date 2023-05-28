/* eslint-disable no-case-declarations */
import { Component, Input } from '@angular/core';
import { IBlock } from 'src/type';

@Component({
  selector: 'app-shape-i',
  templateUrl: './shape-i.component.html',
  styleUrls: ['./shape-i.component.sass'],
})
export class ShapeIComponent {
  @Input() shape: IBlock[];
}
