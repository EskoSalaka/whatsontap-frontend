import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-spacer-bullet',
  template: `
    <span class="spacer-bullet">&#x2022;</span>
  `,
  styles: [
    `
      .spacer-bullet {
        padding-left: 4px;
        padding-right: 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacerBulletComponent {}
