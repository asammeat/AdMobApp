import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

import { AdMobFree, AdMobFreeRewardVideoConfig , AdMobFreeBannerConfig, AdMobFreeInterstitialConfig }  from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private admob: AdMobFree,
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
  showBanner() {
    if(this.platform.is('cordova')){
		const bannerConfig: AdMobFreeBannerConfig = {
			id: 'ca-app-pub-7566951584599431/3800381509',
			isTesting: false,
			autoShow: true,
    };

  		this.admob.banner.config(bannerConfig);

		this.admob.banner.prepare()
    .then(()=>{
        this.admob.banner.show();
      })
      .catch(e => console.log(e));
}
}


showInterstitialBanner() {
  if(this.platform.is('cordova')){
  const varConfig: AdMobFreeInterstitialConfig= {
    id: 'ca-app-pub-7566951584599431/3089681478',
    isTesting: true,
    autoShow: true,
  };

    this.admob.interstitial.config(varConfig);

  this.admob.interstitial.prepare()
  .then(()=>{
      this.admob.interstitial.show();
    })
    .catch(e => console.log(e));
}
}

showRewardedBanner() {
  if(this.platform.is('cordova')){
  const varConfig: AdMobFreeRewardVideoConfig= {
    id: 'ca-app-pub-7566951584599431/3840899630',
    isTesting: true,
    autoShow: true,
  };

    this.admob.rewardVideo.config(varConfig);

  this.admob.rewardVideo.prepare()
  .then(()=>{
      this.admob.rewardVideo.show();
    })
    .catch(e => console.log(e));
}
}




}
