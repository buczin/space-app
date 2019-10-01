
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

const routes: Routes = [
  { path: 'photo-browser', component: PhotoBrowserComponent },
  { path: '', redirectTo: 'photo-browser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoBrowserRoutingModule { }
