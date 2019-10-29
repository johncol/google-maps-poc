import faker from 'faker';

export class Location {
  latitude: number;
  longitude: number;

  constructor() {
    this.latitude = Number.parseFloat(faker.address.latitude());
    this.longitude = Number.parseFloat(faker.address.longitude());
  }

  toLatLngLiteral = (): { lat: number; lng: number } => {
    return {
      lat: this.latitude,
      lng: this.longitude
    };
  };
}
