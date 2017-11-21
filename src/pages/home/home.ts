import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import { LocationProvider } from './../../providers/location/location';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private backgroundGeolocation: BackgroundGeolocation,
    private locationProvider: LocationProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  startBackgroundGeolocation(){
    this.backgroundGeolocation.isLocationEnabled()
    .then((rta) =>{
      if(rta){
        this.locationProvider.start();
      }else {
        this.backgroundGeolocation.showLocationSettings();
      }
    })
  }

  stopBackgroundGeolocation(){
    this.locationProvider.stop();
  }

}
