import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { IBar } from 'src/app/models'

@Component({
  selector: 'app-bar-list',
  template: `
    <mat-list>
      <a
        *ngFor="let bar of bars; let i = index"
        [routerLink]="bar.name | slugify"
        class="nodecor p-10 bar-list-item">
        <mat-list-item fxLayout="row" fxLayoutAlign="start center">
          <div fxLayout="row" fxLayoutAlign="start center">
            <span class="pr-10">{{ i.toString() + '.' }}</span>
            <img
              alt="..."
              src="{{ 'assets/icons/' + bar.name + '.jpg' }}"
              class="bar-icon pr-6"
              onerror="this.src='/assets/icons/beer-mug.png'" />
            <span>{{ bar.name }}</span>
          </div>
        </mat-list-item>
      </a>
    </mat-list>
  `,
  styles: [
    `
      a :hover {
        background: #4d4d4d;
      }
      .bar-icon {
        width: 18px;
      }

      .bar-list-item {
        trsansition: 'background-color .1s';
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarListComponent implements OnInit {
  @Input() bars: IBar[]
  constructor() {}

  ngOnInit(): void {}
}
