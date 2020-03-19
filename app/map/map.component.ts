import { Component, OnChanges, AfterViewInit } from '@angular/core';
import {GeocodesService}  from '../geocodes.service'
import {MapHelperService} from './map-helper.service'



@Component({
  selector: 'map-cmp',
  template:`
  <div id="map">map</div>
  `,
  styles:[`
  #map{
    height:80%;
    width:100%;
    border:1px solid red;
  }
  ` ],
  providers:[MapHelperService]
 
})
export class MapComponent implements OnChanges, AfterViewInit {
  map;
  constructor(private geo:GeocodesService, private helper:MapHelperService){

  }

  ngOnChanges(ch) {
    
  }

  ngAfterViewInit() {
    this.helper.initMap();
    this.geo.getPositions().subscribe(geo=>{
      console.log(`lll`)
      this.helper.drawPoints(geo)
    })
  }

}
