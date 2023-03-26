import { Injectable } from '@angular/core'
import { map, Observable, ReplaySubject } from 'rxjs'
import { IBar } from '../models'
import { SlugifyPipe } from '../pipes/slugify.pipe'

@Injectable({
  providedIn: 'root',
})
export class BarsService {
  bars$ = new ReplaySubject<IBar[]>()

  getBars(city?: string): Observable<IBar[]> {
    return this.bars$.pipe(
      map((bars) =>
        city ? bars?.filter((bar) => bar.address?.includes(city)) : bars
      )
    )
  }

  setBars(bars: IBar[]) {
    this.bars$.next(bars)
  }

  getBar(barName: IBar['name']) {
    return this.bars$.pipe(
      map((bars) => bars?.find((bar) => bar.name === barName))
    )
  }

  getBarWithSlug(barNameSlug: string) {
    return this.bars$.pipe(
      map((bars) =>
        bars?.find(
          (bar) => new SlugifyPipe().transform(bar.name) === barNameSlug
        )
      )
    )
  }
}
