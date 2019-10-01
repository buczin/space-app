import { BlackHoleComponent } from './black-hole/black-hole.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilotFormComponent } from './space/pilot-form/pilot-form.component';
import { PilotResolver } from './space/pilot-resolver';


const routes: Routes = [
  {
    path: 'photo-browser',
    loadChildren: () => import('./photo-module/photo-module.module').then((m) => m.PhotoModuleModule)
  },
  {
    path: 'detector-planet',
    loadChildren: () => import('./planet-detector/planet-detector.module').then((m) => m.PlanetDetectorModule)
  },
  {path: 'intel', loadChildren: () => import(`./intel/intel.module`).then(m => m.IntelModule)},
  {
    path: 'space/pilots/:id',
    component: PilotFormComponent,
    resolve: {pilot: PilotResolver}
 },
  { path: '', redirectTo: 'space', pathMatch: 'full' },
  { path: '**', component: BlackHoleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
