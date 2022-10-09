import { Component } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { ApiService } from './services/api.service'
import { BarsService } from './services/bars.service'

@Component({
  selector: 'app-root',
  template: `
    <ngx-spinner
      [showSpinner]="false"
      [fullScreen]="true"
      type="ball-scale-multiple">
      <p style="font-size: 20px; color: white">Loading...</p>
    </ngx-spinner>
    <app-nav></app-nav>
  `,
})
export class AppComponent {
  title = 'whatsontap'
  loading = true

  constructor(
    private api: ApiService,
    private spin: NgxSpinnerService,
    private barService: BarsService
  ) {}

  ngOnInit(): void {
    this.api.getBars().subscribe({
      next: (data) => {
        this.barService.setBars(data)
      },
      error: (err) => {
        console.log('error', err)
      },
    })

    //this.spin.show()
  }
}
