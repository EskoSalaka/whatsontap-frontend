import { IBeverageList } from './beverage-list'

export interface IBar {
  _id: string
  name: string
  address?: string
  updatedAt: string
  googlePlusCode: string
  googleMapsLink: string
  phoneNumber?: string
  latestBeerLists: IBeverageList[]
  url: string
}
