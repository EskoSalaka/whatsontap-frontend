import { IBeverageList } from './beverage-list'

export interface IBar {
  _id: string
  name: string
  address?: string
  updatedAt: string
  googlePlusCode: String
  phoneNumber?: String
  latestBeerLists: IBeverageList[]
  url: string
}
