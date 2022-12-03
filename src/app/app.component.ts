import { ThisReceiver } from '@angular/compiler'
import { Component } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { tap } from 'rxjs'
import { ApiService } from './services/api.service'
import { BarsService } from './services/bars.service'

@Component({
  selector: 'app-root',
  template: `
    <ngx-spinner
      bdColor="rgba(0, 0, 0, 0.8)"
      size="medium"
      color="#fff"
      type="ball-8bits"
      [fullScreen]="true">
      <p style="color: white">Loading...</p>
    </ngx-spinner>

    <app-nav *ngIf="!loading"></app-nav>
  `,
})
export class AppComponent {
  title = 'whatsontap'
  loading: boolean

  constructor(
    private api: ApiService,
    public spin: NgxSpinnerService,
    public barService: BarsService
  ) {}

  ngOnInit(): void {
    this.spin.show()
    this.loading = true
    this.api.getBars().subscribe({
      next: (data) => {
        this.barService.setBars(data)
        this.spin.hide()
        this.loading = false
      },
      error: (err) => {
        console.log('error', err)
        this.spin.hide()
        this.loading = false
      },
    })
  }
}
