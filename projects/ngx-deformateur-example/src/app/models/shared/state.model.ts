import { Guid } from 'guid-typescript';
import 'reflect-metadata';

const required = (target: object, propertyKey: string) => {
  Reflect.defineMetadata('required', 'test', target, propertyKey);

  console.log('target:', target);
  console.log('propertyKey:', propertyKey);
  console.log('metadata:', Reflect.getMetadata('required', target, propertyKey));
};

export class State {

  @required
  id: Guid;

  // @required
  name: string;

  // @required
  countryId: Guid;

  constructor(name: string, countryId: Guid) {
    this.id = Guid.create();
    this.name = name;
    this.countryId = countryId;
  }

}
