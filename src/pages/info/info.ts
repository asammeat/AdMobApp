import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

//import { AdMobFree, AdMobFreeRewardVideoConfig , AdMobFreeBannerConfig, AdMobFreeInterstitialConfig }  from '@ionic-native/admob-free';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController,
              private platform: Platform
                ) {
              //   const bannerConfig: AdMobFreeBannerConfig={
              //   id: 'ca-app-pub-7566951584599431/3800381509',
              //   isTesting: true,
              //   autoShow: true
              // };
              //   this.admob.banner.config(bannerConfig);
              //   this.admob.banner.prepare()
              //   .then(()=>{
              //     console.log("Hazir");
              //   })
              //   .catch(e => console.log(e));

  }
}
