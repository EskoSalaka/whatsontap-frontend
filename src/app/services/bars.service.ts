import { Injectable } from '@angular/core'
import { map, Observable, ReplaySubject } from 'rxjs'
import { IBar, IBeverage } from '../models'
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

  findBeer(keyword: string): Observable<
    {
      beer: IBeverage
      bar: IBar
    }[]
  > {
    return this.bars$.pipe(
      map((bars) =>
        bars.map((bar) => {
          return { beers: bar.latestBeerLists[0].beers, bar: bar }
        })
      ),
      map((searchResults) =>
        searchResults.map((searchResult) => {
          return {
            ...searchResult,
            beers: searchResult.beers.filter(
              (beer) =>
                beer.name.toLowerCase().includes(keyword.toLowerCase()) ||
                beer.brewery?.name
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                beer.description
                  ?.toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                beer.style?.toLowerCase().includes(keyword.toLowerCase())
            ),
          }
        })
      ),
      map((searchResults) =>
        searchResults.filter(
          (searchResult) => searchResult.beers && searchResult.beers.length
        )
      ),
      map((results) =>
        results
          .map((result) =>
            result.beers.map((beer) => {
              return { beer: beer, bar: result.bar }
            })
          )
          .flat()
      )
    )
  }
}
