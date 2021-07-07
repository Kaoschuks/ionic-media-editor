import { Component, Input, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor/editor.service';

@Component({
  selector: 'media-preview',
  templateUrl: './media-preview.component.html',
  styleUrls: ['./media-preview.component.scss'],
})
export class MediaPreviewComponent {

  @Input() type: string = "photo"
  constructor(
    public _editor: EditorService
  ) { 
  }

  mode(type: string = 'photo') {
    this.type = type;
    this._editor.stopCamera()
    this._editor.startCamera(type)
  }

}
