import { Location } from './Location';
import faker from 'faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = new Location();
  }
}
