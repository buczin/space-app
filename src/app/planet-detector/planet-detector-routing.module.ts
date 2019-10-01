import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectorComponent } from './detector/detector.component';

const routes: Routes = [
  { path: 'detector', component: DetectorComponent },
  { path: '', redirectTo: 'detector', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetDetectorRoutingModule { }
