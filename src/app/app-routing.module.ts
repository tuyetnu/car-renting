import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/share/homepage/homepage.component';
import { GmapComponent } from './views/gmap/gmap.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'map', component: GmapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
