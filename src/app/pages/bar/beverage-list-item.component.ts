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
        color: darkorange;
      }

      .beverage-description {
        font-size: 14px;
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .beverage-description-show {
        overflow: visible;
        text-overflow: none;
        height: auto;
      }
      .beverage-style {
        font-size: 1.2em;
        font-weight: 400;
        font-style: italic;
        margin-bottom: 6px;
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

        <div fxLayout="row">
          <p class="beverage-secondary" *ngIf="beverage.abv">
            {{ beverage.abv }}
            <app-spacer-bullet
              *ngIf="beverage.ibu || beverage.brewery"></app-spacer-bullet>
          </p>
          <p class="beverage-secondary">
            {{ beverage.ibu }}
            <app-spacer-bullet *ngIf="beverage.brewery"></app-spacer-bullet>
          </p>
          <p class="beverage-secondary">{{ beverage.brewery?.name }}</p>
        </div>
        <p class="beverage-description">{{ beverage.description }}</p>
      </div>
    </div>
  `,
})
export class BeverageListItemComponent {
  @Input() beverage: IBeverage
}
