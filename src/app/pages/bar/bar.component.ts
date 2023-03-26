import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, of, switchMap, tap } from 'rxjs'
import { IBar } from 'src/app/models'
import { BarsService } from 'src/app/services/bars.service'

@Component({
  template: `
    <div *ngIf="bar$ | async as bar; else loading">
      <app-bar-header [bar]="bar"></app-bar-header>
      <mat-tab-group>
        <mat-tab label="Draft">
          <app-beverage-list
            [beverageList]="bar.latestBeerLists[0]"></app-beverage-list>
          <div style="padding:12px; float:right;">
            <span>
              Information last retrieved at:
              <span>
                <b>{{ bar.lastCrawledAt | date : 'short' : this.timezone }}</b>
              </span>
            </span>
            <app-spacer-bullet></app-spacer-bullet>
            <span>
              Beers last updated at:
              <span>
                <b>
                  {{
                    bar.latestBeerLists[0].updatedAt
                      | date : 'short' : this.timezone
                  }}
                </b>
              </span>
            </span>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>

    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [],
})
export class BarComponent implements OnInit {
  bar$: Observable<IBar | undefined>
  timezone: string

  constructor(public barsService: BarsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bar$ = this.route.params.pipe(
      switchMap((params) => this.barsService.getBarWithSlug(params['barName'])),
      tap((bar) => console.log(bar))
    )

    if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
      this.timezone = new Date()
        .toLocaleTimeString('en-us', { timeZoneName: 'short' })
        .split(' ')[2]
    }
  }
}
