import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable, of } from 'rxjs'
import { IBar } from '../models'
import { SlugifyPipe } from '../pipes/slugify.pipe'

@Injectable({
  providedIn: 'root',
})
export class BarsService {
  bars$ = new BehaviorSubject<IBar[] | null>(null)
  favourite$ = new BehaviorSubject<IBar | null>(null)

  getBars(): Observable<IBar[] | null> {
    return this.bars$.asObservable()
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

  getFavourite() {
    this.favourite$.asObservable()
  }

  setFavourite(barName: IBar['name']) {
    this.favourite$
  }
}
