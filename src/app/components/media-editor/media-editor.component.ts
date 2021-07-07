import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor/editor.service';

@Component({
  selector: 'media-editor',
  templateUrl: './media-editor.component.html',
  styleUrls: ['./media-editor.component.scss'],
})
export class MediaEditorComponent implements OnInit {

  constructor(
    public _editor: EditorService
  ) { }

  ngOnInit() {}

}
