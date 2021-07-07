import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor/editor.service';

@Component({
  selector: 'edit-buttons',
  templateUrl: './edit-buttons.component.html',
  styleUrls: ['./edit-buttons.component.scss'],
})
export class EditButtonsComponent implements OnInit {

  edit_type: string = 'filter'
  constructor(
    public _editor: EditorService
  ) { }

  ngOnInit() {}

  close() {
    this._editor.mediaFile = undefined
  }

  save() {
  }

  edit(type: string = 'filter') {
    this.edit_type = type
  }

}
