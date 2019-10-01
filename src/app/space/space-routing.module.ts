import { PilotComponent } from './pilot/pilot.component';
import { HangarComponent } from './hangar/hangar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { DestructionGuard } from './destruction.guard';
import { PilotResolver } from './pilot-resolver';
import { PilotFormComponent } from './pilot-form/pilot-form.component';


const routes: Routes = [
  {
    path: 'space', component: HangarComponent,
    children: [
      { path: 'production', component: EngineersRoomComponent },
      { path: 'destruction', component: DestructionRoomComponent, canActivate: [DestructionGuard] },
      { path: '', redirectTo: 'production', pathMatch: 'full' }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
