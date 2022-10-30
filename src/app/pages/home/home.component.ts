import { Component, OnInit } from '@angular/core'
import { IBar } from 'src/app/models'
import { BarsService } from 'src/app/services/bars.service'
import { Observable } from 'rxjs'

@Component({
  template: `
    <div fxLayout="column" fxLayoutAlign="space-around center">
      <div
        fxLayout="column"
        fxLayoutAlign="space-around center"
        class="home-page-content">
        <h1>What's on tap?</h1>

        <p>
          What's on tap is just a small hobby project of mine listing the draft
          beers of my favourite bars. The beers and other info is updated on
          this site twice a day and everything is publicly available at the
          bars' own home pages
        </p>

        <mat-card>
          <mat-card-header
            fxLayout="column"
            fxLayoutAlign="space-around center">
            <mat-card-title>Bars that I'm currently following</mat-card-title>
            <app-thick-separator
              [width]="'240px'"
              [thickness]="'5px'"></app-thick-separator>
          </mat-card-header>
          <mat-card-content>
            <ng-container *ngIf="bars$ | async as bars">
              <app-bar-list [bars]="bars"></app-bar-list>
            </ng-container>
            <p class="pl-16 pt-16">More to come soon...</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .home-page-content {
        max-width: 640px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  bars$: Observable<IBar[] | null>
  constructor(public barsSevice: BarsService) {}

  ngOnInit(): void {
    this.bars$ = this.barsSevice.getBars()
  }
}
