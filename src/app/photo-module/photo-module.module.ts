import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-browser/photo-form/photo-form.component';
import { PhotoListComponent } from './photo-browser/photo-list/photo-list.component';



@NgModule({
  declarations: [PhotoFormComponent, PhotoListComponent],
  imports: [
    CommonModule
  ]
})
export class PhotoModuleModule { }
