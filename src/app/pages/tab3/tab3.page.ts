import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as blobutil from 'blob-util';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  images: Array<any> = []
  constructor(
    public sanitizer: DomSanitizer,
  ) {}

  onFile(event, postType: string, imageSelect: boolean = false) {
    event.preventDefault()
    alert(`your saving ${postType}`)
    let fileArr: any = [], promise = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      promise[i] = new Promise(async (resolve, reject) => {
        if(imageSelect) {
          const image:any = await blobutil.blobToDataURL(file)
          fileArr.push({
            url: image,
            type: postType
          })
        } else {
          var objectURL = blobutil.createObjectURL(file);
          fileArr.push({
            url: objectURL,
            type: postType
          })
        }
        resolve('resolved');
      })
    }
    Promise.all(promise)
    .then((values) => {
      this.images = fileArr;
    })
    .catch((err: any) => {
      console.error(err);
      alert(err);
    });
    return false;
  }

  open(id: string) {
    document.getElementById(id).click()
  }
}
