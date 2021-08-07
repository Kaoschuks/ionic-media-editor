import { Injectable } from '@angular/core';
import { Plugins } from "@capacitor/core"
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreviewFlashMode } from '@capacitor-community/camera-preview';
// import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Platform } from '@ionic/angular';
import '@capacitor-community/camera-preview'
@Injectable({
  providedIn: 'root'
})
export class EditorService {
  mediaFile: any
  flash: boolean = false
  type: string = ''
  camera: any 
  constructor(
    // private photoLibrary: PhotoLibrary,
    private _plt: Platform
  ) { }

  startCamera(mediatype: string = 'photo') {
    // CameraPreview.requestPermissions()
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      width: window.screen.width,
      height: window.screen.height,
      parent: "content",
      toBack: true,
      enableHighResolution: true
    };
    this.type = mediatype;
    CameraPreview.start(cameraPreviewOptions)
    // (mediatype == 'video' && this._plt.is('capacitor')) ? CameraPreview?.startRecordVideo(cameraPreviewOptions) : CameraPreview.start(cameraPreviewOptions); 
  }

  async capture() {
    try {
      const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
        quality: 100,
      };
      const result = await CameraPreview.capture(cameraPreviewPictureOptions);
      if(this.type == 'photo') {
        const base64PictureData = `data:image/jpeg;base64,${result.value}`;
        // this.mediaFile = Capacitor.convertFileSrc(savedFile.uri)
        this.mediaFile = base64PictureData
      }
      if(this.type == 'video') {
      }
      // this.stopCamera()
    }catch(ex) {
      console.log(ex)
    }
  }

  flashOn() {
    const CameraPreviewFlashMode: CameraPreviewFlashMode = 'auto';
    CameraPreview.setFlashMode({
      flashMode: CameraPreviewFlashMode
    });
    this.flash = (this.flash) ? false : true; 
  }

  async stopCamera() {
    CameraPreview.stop();  
    // (this.type == 'video' && this._plt.is('capacitor')) ? await CameraPreview?.stopRecordVideo() : CameraPreview.stop();  
  }

  flipCamera() {
    CameraPreview.flip();  
  }

  get_photo() {
    // this.photoLibrary.requestAuthorization().then((res) => {
    //   this.photoLibrary.getLibrary().subscribe({
    //     next: library => {
    //       // console.log(library)
    //       for(let libraryItem of library['library']) {
    //         console.log(libraryItem.id);          // ID of the photo
    //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
    //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
    //         console.log(libraryItem.fileName);
    //         console.log(libraryItem.width);
    //         console.log(libraryItem.height);
    //         console.log(libraryItem.creationDate);
    //         console.log(libraryItem.latitude);
    //         console.log(libraryItem.longitude);
    //         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
    //       }
    //     },
    //     error: err => { console.log('could not get photos'); },
    //     complete: () => { console.log('done getting photos'); }
    //   });
    // })
    // .catch(err => console.log('permissions weren\'t granted', err));
  }

  get_filter_effects(effect: any) {
    let image: any = this.mediaFile
    return image
  }

  undo() {

  }

  apply_animations() {

  }

  apply_rotate(effect: any) {

  }

  apply_crop() {

  }

  apply_filter(effect: any) {

  }

  apply_resize() {

  }
}
