import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IBeverage } from 'src/app/models'

@Component({
  selector: 'app-beverage-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .item-content {
        height: 100px;
        margin-top: 4px;
        margin-bottom: 4px;
      }
      .beverage-name {
        font-weight: 600;
        line-height: 24px;
        font-size: 1.4em;
        margin-bottom: 6px;
        margin-right: 16px;
        height: 24px;
        color: darkorange;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .beverage-description {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0px;
        height: 3em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .beverage-description-show {
        overflow: visible;
        text-overflow: none;
        height: auto;
        margin-bottom: 0px;
      }

      .beverage-style {
        font-size: 1.2em;
        font-weight: 400;
        margin-bottom: 6px;
        height: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .beverage-secondary {
        font-size: 1em;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.5em;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      @media screen and (max-width: 599px) {
        .item-content {
          height: 80px;
        }

        .beverage-name {
          font-weight: 600;
          line-height: 24px;
          font-size: 1em;
          margin-right: 12px;
        }

        .beverage-style {
          font-size: 0.8em;
          font-weight: 400;
          margin-bottom: 6px;
          height: 1.5em;
        }

        .beverage-description {
          font-size: 12px;
          height: 1.5em;
        }

        .beverage-secondary {
          font-size: 0.9em;
        }
      }
    `,
  ],
  template: `
    <div fxLayout="row" class="item-content mat-list-item">
      <img
        style="padding-right:6px;"
        alt="..."
        src="{{ beverage.untappdIconUrl }}"
        onerror="this.src='/assets/icons/beer-mug.png'" />
      <div fxLayout="column" style="overflow: hidden;">
        <div fxLayout="row" fxLayoutAlign="start baseline">
          <p class="beverage-name">{{ beverage.name }}</p>
          <p class="beverage-style">{{ beverage.style }}</p>
        </div>

        <p fxLayout="row" class="beverage-secondary">
          <span *ngIf="beverage.abv">
            {{ beverage.abv }}
          </span>
          <span *ngIf="beverage.ibu">
            <app-spacer-bullet></app-spacer-bullet>
            {{ beverage.ibu }}
          </span>
          <span *ngIf="beverage.brewery?.name">
            <app-spacer-bullet *ngIf="beverage.brewery"></app-spacer-bullet>
            {{ beverage.brewery?.name }}
          </span>
        </p>
        <p class="beverage-description">{{ beverage.description }}</p>
      </div>
    </div>
  `,
})
export class BeverageListItemComponent {
  @Input() beverage: IBeverage
}
