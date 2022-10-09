import { IBrewery } from './brewery';

export interface IBeverage {
  _id: string;
  name: string;
  brewery?: IBrewery;
  style?: string;
  description?: string;
  abv?: string;
  ibu?: string;
  tapNumber?: number;
  untappdUrl?: string;
  untappdIconUrl?: string;
}
