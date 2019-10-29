import { Locatable } from './Locatable';

export class Map {
  private map: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  constructor(containerId: string) {
    const container: Element = document.getElementById(containerId);
    const settings: google.maps.MapOptions = {
      zoom: 1,
      center: { lat: 3, lng: -73 }
    };
    this.map = new google.maps.Map(container, settings);
  }

  addMarker = (item: Locatable): void => {
    const marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: item.location.toLatLngLiteral()
    });
    this.markers.push(marker);
  };
}
