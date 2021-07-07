import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private _plt: Platform,
  ) {
    this._plt.ready().then(() => {
      if(this._plt.is('hybrid')) {
        StatusBar.setStyle({
          style: Style.Dark
        })
        setTimeout(() => {
          StatusBar.setBackgroundColor({
            color: '#ffffff'
          })
          StatusBar.setStyle({
            style: Style.Light
          })
          SplashScreen.hide();
        }, 2000)
      }
    })
  }
}
