This repo shows how to use capacitor camera preview plugin, capacitor camera and html inputs to capture images and video in you capacitor app.


this repo was built from ionic capacitor photo gallery template

The tab1 uses camera-preview plugin ( a capacitor community plugin that does both video and photo capturing )
The tab2 uses the capacitor default camera plugin
The tab3 uses default html5 capabilities using the input file type

## How to Run

> Note: It's highly recommended to follow along with the [tutorial guide](https://ionicframework.com/docs/angular/your-first-app), which goes into more depth, but this is the fastest way to run the app. 

0) Install Ionic if needed: `npm i -g @ionic/cli`.
1) Clone this repository.
2) In a terminal, change directory into the repo: `cd media-editor-app`.
3) Install all packages: `npm i`.
4) Run on the web: `ionic serve`.
5) Run on Android: `ionic cap add android; ionic cap run android -l --external`
6) Run on IOS: `ionic cap add ios; ionic cap run ios -l --external`

NB: For ios you need to set the version of `node_modules/@capacitor-community/camera-preview/ios/Podfile` 
  --- `platform :ios, '11.0'` to `platform :ios, '12.0'` to build for capacitor 3


The methods can be applied to both ionic-angular, ionic-reactjs, ionic-vue and ionic-javascript

## Future Additional Features

*** taking multiple pictures/videos before editing
*** adding filter
*** adding adjustment
*** adding crop 
*** adding rotate
*** adding animations/emojis
*** adding text
*** creating album from multiple images & video


