import { IBar } from './bar'
import { IBeverage } from './beverage'

export enum IBeverageListType {
  DRAFT = 'DRAFT',
  BOTTLE = 'BOTTLE',
  TAKEAWAY = 'TAKEAWAY',
}

export interface IBeverageList {
  _id: string
  bar: IBar
  type: IBeverageListType.DRAFT //Only draft lists for now
  beers: IBeverage[]
  updatedByBarAt?: string
  updatedByBarAtDt?: Date
}
