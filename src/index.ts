import { User } from './User';
import { Company } from './Company';

const settings: google.maps.MapOptions = {
  zoom: 6,
  center: { lat: 3, lng: -73 }
};
const container: Element = document.getElementById('map');
const map: google.maps.Map = new google.maps.Map(container, settings);
