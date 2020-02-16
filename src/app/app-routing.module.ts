import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/share/homepage/homepage.component';
import { MapComponent } from './views/map/map.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
