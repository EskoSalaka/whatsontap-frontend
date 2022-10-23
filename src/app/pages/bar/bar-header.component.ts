import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IBar } from 'src/app/models'

@Component({
  selector: 'app-bar-header',
  styles: [
    `
      .bar-header-content {
        padding: 12px;
      }
      .bar-name {
        font-weight: 400;
        margin-bottom: 8px;
      }
      .bar-secondary {
        margin: 0px;
      }

      .secondary-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }
      .map-button {
        border-radius: 36px;
        height: 24px;
        line-height: 20px;
      }
      .bar-icon {
        width: 100px;
        height: 100px;
        padding-right: 6px;
      }
    `,
  ],
  template: `
    <div>
      <div fxLayout="row" class="bar-header-content">
        <img
          alt="..."
          src="{{ 'assets/icons/' + bar.name + '.jpg' }}"
          class="bar-icon"
          onerror="this.src='/assets/icons/beer-mug.png'" />
        <div fxLayout="column">
          <h1 class="bar-name">{{ bar.name }}</h1>
          <a href="{{ bar.url }}" style="color:white;">
            {{ bar.url }}
          </a>
          <div fxLayout="row" fxLayoutAlign="start center">
            <p
              class="bar-secondary"
              fxLayout="row"
              fxLayoutAlign="start center"
              fxLayoutGap="4px">
              <mat-icon class="secondary-icon" fontIcon="home"></mat-icon>
              <span>{{ bar.address }}</span>
              <a
                class="map-button"
                mat-stroked-button
                color="primary"
                href="{{ bar.googleMapsLink }}"
                target="_blank">
                <mat-icon class="secondary-icon" fontIcon="map"></mat-icon>
                <span>Map</span>
              </a>
            </p>
          </div>
          <p
            class="bar-secondary"
            fxLayout="row"
            fxLayoutAlign="start center"
            fxLayoutGap="4px">
            <mat-icon class="secondary-icon" fontIcon="phone"></mat-icon>
            <span>{{ bar.phoneNumber }}</span>
          </p>
        </div>
      </div>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarHeaderComponent {
  @Input() bar: IBar
}
