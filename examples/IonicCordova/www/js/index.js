/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var gameId = "TEST";
var videoAdPlacementId = "TEST";
var rewardedVideoAdPlacementId = "TEST_REWARDED";
var bannerAdPlacementId = "TEST"
var arAdPlacementId = "TEST_AR"
var isTest = true;
var isDebug = true;
var bannerPosition = "BOTTOM_CENTER";
var placementStatus = document.getElementById("placementStatus");
var versionText = document.getElementById("cordovaVer");
 
var app = {
  
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("videoAd").addEventListener("click", this.onShowVideoAds.bind(this), false);
        document.getElementById("rvideoAd").addEventListener("click", this.onShowRewardedVideoAds.bind(this),false);
        document.getElementById("bannerAd").addEventListener("click", this.onShowBannerAds.bind(this),false);
        document.getElementById("bannerPosition").addEventListener("change", this.setBannerPosition.bind(this),false);
        document.getElementById("arAd").addEventListener("click", this.onShowArAds.bind(this), false);
    },

    setBannerPosition: function(e){
        var value = e.target.value;
        console.log(value);
        bannerPosition = value;
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        versionText.textContent = 'Running cordova-' + cordova.platformId + '@' + cordova.version;
        
        cordova.plugins.UnityAds3.UnityAdsInit(gameId, isTest, isDebug, function callback(error, result){
            
            if(error){
                console.log(error);
                placementStatus.textContent = error;
            }
            else{
                console.log(result);
                placementStatus.textContent = result;
				app.receivedEvent(result);
            }

        });

    },
    onShowVideoAds: function(){

        cordova.plugins.UnityAds3.ShowVideoAd(videoAdPlacementId, function callback(error, result){
            
            if(error){
                console.log(error);
                placementStatus.textContent = error;
            }
            else{
                console.log(result);
                placementStatus.textContent = result;
            }

        });
    },
    onShowArAds: function(){

        cordova.plugins.UnityAds3.ShowVideoAd(arAdPlacementId, function callback(error, result){
            
            if(error){
                console.log(error);
                placementStatus.textContent = error;
            }
            else{
                console.log(result);
                placementStatus.textContent = result;
            }

        });
    },
    onShowRewardedVideoAds: function(){
        cordova.plugins.UnityAds3.ShowVideoAd(rewardedVideoAdPlacementId, function callback(error, result){
            
            if(error){
                console.log(error);
                placementStatus.textContent = error;
            }
            else{
                console.log(result);
                placementStatus.textContent = result;
            }

        });
    },
    onShowBannerAds: function(){
        cordova.plugins.UnityAds3.ShowBannerAd(bannerAdPlacementId, bannerPosition, function callback(error, result){
            if(error){
                console.log(error);
                placementStatus.textContent = error;
            }
            else{
                console.log(result);
                placementStatus.textContent = result;
            }
        })
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {		
		if(id == '["UNITYADS","IS_READY"]'){
			var parentElement = document.getElementById('deviceready');
			var listeningElement = parentElement.querySelector('.listening');
			var receivedElement = parentElement.querySelector('.received');
			
			listeningElement.setAttribute('style', 'display:none');
			receivedElement.setAttribute('style', 'display:block');			
		}

        console.log('Received Event: ' + id);
    }
};

app.initialize();