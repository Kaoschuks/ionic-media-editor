import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

import { EditorService } from './editor/editor.service';
import { PhotoService } from './photo/photo.service';

import '@capacitor-community/camera-preview';
// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

export const providers: Array<any> = [
    EditorService, PhotoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]

@NgModule({
	imports: [
        CommonModule,
	],
  providers: providers
})
export class ServicesModule { }
