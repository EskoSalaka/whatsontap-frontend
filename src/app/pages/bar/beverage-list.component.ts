import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IBeverageList } from 'src/app/models'

@Component({
  selector: 'app-beverage-list',
  template: `
    <mat-list>
      <ng-container *ngFor="let beverage of beverageList.beers">
        <app-beverage-list-item [beverage]="beverage"></app-beverage-list-item>
        <mat-divider></mat-divider>
      </ng-container>
    </mat-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BeverageListComponent {
  @Input() beverageList: IBeverageList
}
