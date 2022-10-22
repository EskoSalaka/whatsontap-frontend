import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

@Component({
  selector: 'app-thick-separator',
  styles: [
    `
      .divider {
        border-radius: 50px;
        background: darkviolet;
      }
    `,
  ],
  template: `
    <mat-divider
      class="divider"
      [style.width]="width"
      [style.border-top-width]="thickness">
      [style.background-color]="color">
    </mat-divider>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThickSeparatorComponent implements OnInit {
  @Input() width: string
  @Input() thickness: string
  @Input() color: string

  constructor() {}

  ngOnInit(): void {
    console.log(this.color)
  }
}
