import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor/editor.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public _editor: EditorService
  ) { 
  }

  ionViewWillEnter() {
    this._editor.startCamera('photo')
  }

  ionViewWillLeave() {
    this._editor.stopCamera()
  }

}
