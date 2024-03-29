import { Location } from './Location';
import faker from 'faker';

export class User {
  name: string;
  location: Location;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = new Location();
  }
}
