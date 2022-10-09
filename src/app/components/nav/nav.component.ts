import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { BarsService } from 'src/app/services/bars.service'

@Component({
  selector: 'app-nav',
  styles: [
    `
      .toolbar {
        padding-left: 24px;
        padding-right: 24px;
      }

      .sidenav-container {
        height: 100%;
        background-color: transparent;
        margin-left: 0px;
        height: calc(100vh - 65px);
      }

      .sidenav {
        width: 200px;
        background-color: transparent;
        border-width: 0;
        margin-top: 56px;
      }

      .sidenav .mat-toolbar {
        background: inherit;
      }

      .content {
        margin: 16px;
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 10000000;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: lightgrey;
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
    <mat-toolbar
      fxLayout="row"
      fxLayoutAlign="space-between center"
      class="toolbar">
      <div>
        <button
          type="button"
          aria-label="Toggle sidenav"
          mat-icon-button
          (click)="drawer.toggle()"
          *ngIf="isHandset$ | async">
          <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
        </button>
        <span>whatsontap</span>
      </div>
      <div style="font-size: 14px">
        <mat-form-field appearance="outline" disabled="true">
          <input
            disabled="true"
            matInput
            type="search"
            placeholder="search to come soon..."
            class="search-input" />
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>
    </mat-toolbar>
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false">
        <mat-nav-list>
          <a
            *ngFor="let bar of this.barsService.getBars() | async"
            mat-list-item
            [routerLink]="bar.name | slugify">
            {{ bar.name }}
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    public barsService: BarsService
  ) {}

  slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  }
}
