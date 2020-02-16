import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/share/homepage/homepage.component';
import { HeaderComponent } from './views/share/header/header.component';
import { MapComponent } from './views/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './views/gmap/gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MapComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9WtDhFH-LQCamapShPpZTXG9ZGCngxrc',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
