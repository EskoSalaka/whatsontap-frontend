import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import {
  BehaviorSubject,
  Observable,
  fromEvent,
  of,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
  map,
} from 'rxjs'
import { IBar, IBeverage } from 'src/app/models'
import { SlugifyPipe } from 'src/app/pipes/slugify.pipe'
import { BarsService } from 'src/app/services/bars.service'

@Component({
  selector: 'app-search-input',
  styles: [
    `
      .search-input {
        min-width: 300px;
        width: 100%;
        font-size: 14px;
      }

      ::ng-deep .mat-form-field-wrapper {
        margin-bottom: -1.25em !important;
      }

      ::ng-deep .mat-form-field-outline-start {
        border-radius: 28px 0 0 28px !important;
        min-width: 28px !important;
      }

      ::ng-deep .mat-form-field-outline-end {
        border-radius: 0 28px 28px 0 !important;
      }
    `,
  ],
  template: `
    <mat-form-field appearance="outline" class="search-input">
      <mat-icon matPrefix>search</mat-icon>
      <input
        [formControl]="searchControl"
        [matAutocomplete]="auto"
        matInput
        type="search"
        placeholder="search for beers..." />

      <button
        *ngIf="this.searchControl.value"
        matSuffix
        mat-icon-button
        aria-label="Clear"
        (click)="this.onReset()">
        <mat-icon>close</mat-icon>
      </button>
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option
          *ngFor="let result of searchResults$ | async"
          [value]="result.beer.name"
          (click)="onResultClicked(result)">
          {{ result.beer.name }} - {{ result.bar.name }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
})
export class SearchInputComponent implements OnInit {
  searchControl = new FormControl('')
  searchResults$: Observable<
    {
      beer: IBeverage
      bar: IBar
    }[]
  >

  constructor(private barsService: BarsService, private router: Router) {}

  ngOnInit() {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      // debounceTime(500), no need for now to debounce
      distinctUntilChanged(),
      switchMap((keyword) => {
        if (!keyword || keyword.length < 3) {
          return of([])
        } else {
          return this.barsService.findBeer(keyword)
        }
      })
    )
  }

  onReset() {
    this.searchControl.reset('')
  }

  onResultClicked(searchResult: { beer: IBeverage; bar: IBar }) {
    this.router.navigateByUrl(
      new SlugifyPipe().transform(searchResult.bar.name)
    )
  }
}
