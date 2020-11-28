import { Guid } from 'guid-typescript';

export class Country {

  // @required
  id: Guid = Guid.create();

  // @required
  name: string = '';
}
