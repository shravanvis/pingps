import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

}
