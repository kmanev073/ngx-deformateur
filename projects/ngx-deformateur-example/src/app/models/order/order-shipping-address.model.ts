import { Country } from '../shared/country.model';

export class OrderShippingAddress {

  // @required
  addressLine: string = '';

  // @required
  addressLine2: string = '';

  country: Country | null = null;
}
