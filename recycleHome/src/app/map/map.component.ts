import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet'

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { LocationService } from './map.component.service';
// @Injectable()
// export class LocationService {
//   private apiURL = 'http://localhost:8080/api/locations';

//   constructor(private http: HttpClient){}

//   getLocations(){
//     return this.http.get<Location>(this.apiURL)
//   }
// }

interface location {
  id: number
  name: string
  longitude: number
  latitude: number
  address: string
  phoneNumber: string
}


Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent{
//  implement OnInit when code is fixed
  // currently doesn't see locations from the injectable
  // locations: Location[];

  // constructor(private locationService: LocationService) {}

  // ngOnInit() {
  //     this.locationService.getLocations().subscribe(
  //       locations => this.locations = locations,
  //       error => console.error(error)
  //     );
  // }
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 12,
    center: { lat: 30.2029, lng: -92.0418 }
  }
  initMarkers() {

    async function getData(url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[1]);
        return data;
      } catch (error) {
        return console.error(error);
      }
    }
    const url = "http://localhost:8080/api/locations";
    const data = getData(url);
    console.log(data);
    // getData(url)
    // .then(data => {const locations = []})
    // .catch(error => console.error(error));

    const initialMarkers = [
      {
        latitude: 30.245790,
        longitude: -92.010500,
        name: "Home Depot",
        phone: "337-289-1394"
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker([data.latitude, data.longitude], index);
      marker.addTo(this.map).bindPopup(`<b>${data.name} <p>${data.phone}</p> <ul><li>Testing</li> <a href="http://www.google.com/maps/place/${data.latitude},${data.longitude}">Google Maps</a></b>`);
      this.markers.push(marker)
    }
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
