import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPreviewComponent } from './media-preview/media-preview.component';
import { MediaEditorComponent } from './media-editor/media-editor.component';
import { IonicModule } from '@ionic/angular';
import { EditButtonsComponent } from './edit-buttons/edit-buttons.component';

export const components: any = [
  MediaPreviewComponent, MediaEditorComponent,
  EditButtonsComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule, IonicModule,
  ]
})
export class ComponentsModule { }
