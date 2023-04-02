import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet'
let dataArray: any[] = [];

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent{
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 12,
    center: { lat: 30.227331548383027, lng: -92.02972412109376 }
  }
  initMarkers() {

    async function getData(url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        return console.error(error);
      }
    }
    //fetches data from the backend and creates a map based on it
    const url = "http://localhost:8080/api/locations";
    getData(url)
    .then(
      dataLogged => {
        for(let index=0; index < dataLogged.length; index++){
          dataArray.push(dataLogged[index]);
        }
        for (let index = 0; index < dataArray.length; index++) {
          const data = dataArray[index];
          const marker = this.generateMarker([data.latitude, data.longitude], index);
          marker.addTo(this.map).bindPopup(`<b>${data.name} <p>${data.phoneNumber}</p> <ul><li>Material</li> <a href="http://www.google.com/maps/place/${data.latitude},${data.longitude}">Google Maps</a></b>`);
          this.markers.push(marker)
        }
      }
    );
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data, { draggable: false })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }
}
