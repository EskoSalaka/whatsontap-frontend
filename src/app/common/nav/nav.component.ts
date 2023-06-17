import { Component, ViewChild } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay, take } from 'rxjs/operators'
import { BarsService } from 'src/app/services/bars.service'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-nav',
  styles: [
    `
      a {
        color: white;
      }

      .flex-expand {
        flex: 1 1;
      }

      .locality-separator {
        color: whitesmoke;
        display: block;
        padding-left: 12px;
        padding-top: 6px;
        font-size: 1.2rem;
        line-height: 2.2rem;
        font-weight: 400;
        margin-bottom: 0;
      }
      .toolbar {
        padding-left: 24px;
        padding-right: 24px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
      }

      .sidenav-container {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
        display: block;
        overflow: hidden;
        min-height: calc(100vh - (120px));
      }

      .sidenav {
        width: 210px;
        background-color: transparent;
        border-width: 0;
        margin-top: 56px;
      }
      .sidenav-list-item {
        font-size: 0.9rem;
        line-height: 48px;
        font-weight: 200;
        padding-left: 20px;
        margin: 0;
        transition: background-color 0.1s;
      }

      .sidenav-list-item-active {
        font-weight: 600;
        border-top-right-radius: 36px;
        border-bottom-right-radius: 36px;
        color: #d176e1;
        background: rgba(156, 39, 176, 0.3);
      }

      .bar-icon {
        width: 24px;
        padding-right: 6px;
      }

      .content {
        padding: 12px;
      }

      .page-outer-content {
        overflow: hidden;
        margin-top: 60px;
      }

      .drawer-cover {
        background-color: rgba(33, 38, 37, 0.72);
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 10000000;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: lightgrey;
      }

      .mat-drawer-backdrop.mat-drawer-shown {
        background-color: #212625b5;
      }

      @media screen and (max-width: 599px) {
        .toolbar {
          padding-left: 6px;
          padding-right: 6px;
        }
      }
    `,
  ],
  template: `
    <div class="page-outer-content">
      <mat-toolbar
        fxLayout="row"
        fxLayoutAlign="space-between center"
        fxLayoutGap="12px"
        class="toolbar mat-elevation-z4">
        <div fxLayout="row" fxLayoutAlign="start center">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <a
            *ngIf="!(this.isHandset$ | async)"
            fxLayout="row"
            fxLayoutAlign="start center"
            [routerLink]="'/'"
            class="nodecor">
            <img alt="..." src="assets/icons/beer-mug.png" class="bar-icon" />
            <span>whatsontap</span>
          </a>
        </div>
        <app-search-input
          [ngClass]="{
            'flex-expand': isHandset$ | async
          }"></app-search-input>
      </mat-toolbar>
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          #drawer
          class="sidenav"
          fixedInViewport
          [ngClass]="{
            'drawer-cover': isHandset$ | async
          }"
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false">
          <mat-nav-list>
            <p class="locality-separator">Helsinki</p>
            <ng-container
              *ngFor="let bar of this.barsService.getBars('Helsinki') | async">
              <a
                mat-list-item
                (click)="onNavigate()"
                [routerLink]="bar.name | slugify"
                [routerLinkActive]="['sidenav-list-item-active']"
                class="sidenav-list-item">
                <span mat-line fxLayout="row" fxLayoutAlign="start center">
                  <img
                    alt="..."
                    src="{{ 'assets/icons/' + bar.name + '.jpg' }}"
                    class="bar-icon"
                    onerror="this.src='/assets/icons/beer-mug.png'" />
                  {{ bar.name }}
                </span>
              </a>
            </ng-container>
            <p class="locality-separator">Espoo</p>
            <ng-container
              *ngFor="let bar of this.barsService.getBars('Espoo') | async">
              <a
                mat-list-item
                [routerLink]="bar.name | slugify"
                [routerLinkActive]="['sidenav-list-item-active']"
                class="sidenav-list-item">
                <span mat-line fxLayout="row" fxLayoutAlign="start center">
                  <img
                    alt="..."
                    src="{{ 'assets/icons/' + bar.name + '.jpg' }}"
                    class="bar-icon"
                    onerror="this.src='/assets/icons/beer-mug.png'" />
                  {{ bar.name }}
                </span>
              </a>
            </ng-container>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <div class="content">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
      <app-footer></app-footer>
    </div>
  `,
})
export class NavComponent {
  @ViewChild('drawer') drawer: MatSidenav

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Small])
    .pipe(
      map((result) => result.matches),
      shareReplay(1)
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    public barsService: BarsService
  ) {}

  onNavigate() {
    this.isHandset$.pipe(take(1)).subscribe((isHandset) => {
      if (isHandset) this.drawer.toggle()
    })
  }
}
