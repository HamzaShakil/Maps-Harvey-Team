import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MapComponent} from './map/map.component';
import {GeocodesService}  from './geocodes.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    MapComponent,
    HelloComponent
     ],
  providers:[GeocodesService],   
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
