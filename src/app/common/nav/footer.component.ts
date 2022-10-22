import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-footer',
  styles: [
    `
      .line {
        margin-bottom: 0px;
        color: #969696;
        font-size: 10px;
        padding-left: 36px;
      }
      .footer {
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #3d3d3d;
        overflow: 0;
      }
    `,
  ],
  template: `
    <footer class="footer">
      <p class="line">
        All the graphical and literal information and data related to the beers
        displayed on this site are owned by Untappd. This site is in no way
        endorsed or promoted by any party. This site is free and is created for
        the purpose of learning and just for fun
      </p>
      <a
        class="line"
        href="https://www.flaticon.com/free-icons/beer-mug"
        title="beer mug icons">
        Beer icons created by AmethystDesign - Flaticon
      </a>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
