$(document).ready(function ads() {
      $.ajax({
          url: 'http://ad.flutx.com/finance_th/json_ads.php',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
		  /*
              $("#fullstage").html('<div id="adscontent" style="position:fixed;top:20%;left:5%;width:85%;z-index:10001;background-color:#FFFFFF;padding: 10px 10px 10px 10px;";><ul><li><h3>Please Rate this App</h3></li><li><h4>Give me a 5 stars rating !</h4></li><li><a href="#" onclick="getcontent();" class="button_12 green green_borderbottom radius4">Get it</a><a href="#" onclick="closeAds();" class="button_12 blue blue_borderbottom radius4">No Thanks!</a></li></ul></div>');
              $.each(data, function(i, item) {
                  $("#footer").html(item.ads);
              })
			 */
              setTimeout(ads, 60 * (60 * 1000));
          },
          error: function(error) {
              ErrorFunction();
          }
      });
  });

  function closeAds() {
      document.getElementById('fullstage').style.display = "none";
  }
  
  function rate_app_link() {
      window.open("http://www.w3schools.com");
  }
  
  $(document).ready(function apprecommend() {
      $.ajax({
          url: 'http://ad.flutx.com/applist.php?cat=FIT&thisid=AFIT03',
          type: "GET",
          dataType: "jsonp",
          async: false,
          success: function(data) {
              $("#recommend_app").empty();
              $.each(data, function(i, item) {
				
                  $("#recommend_app").append('<a href='+item.androidlink+'><div class="service_box"><div class="services_icon"><img src="'+item.icon+'" alt="" title="" /></div><div class="service_content"><h4>'+item.name+'</h4>'+item.description+'</div><div class="service_right"><i class="fa fa-angle-right fa-3x"></i></div></div></a>');
				  
				  
              })
			  swiperNested2.reInit();
              setTimeout(apprecommend, 60 * (60 * 1000));
          },
          error: function(error) {
              ErrorFunction();
          }
      });
  });
  
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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.splashscreen.hide();
        
        if (window.plugins && window.plugins.AdMob) {
            var admob_ios_key = 'a153563ff125f2b';
            var admob_android_key = 'a153563ff125f2b';
            var adId = (navigator.userAgent.indexOf('Android') >= 0) ? admob_android_key : admob_ios_key;
            var am = window.plugins.AdMob;
            am.createBannerView({
                                    'publisherId': adId,
                                    'adSize': am.AD_SIZE.BANNER,
                                    'bannerAtTop': false
                                }, 
                                function() {
                                    am.requestAd(
                                        { 'isTesting':true }, 
                                        function() {
                                            am.showAd(true);
                                        }, 
                                        function() {
                                            alert('failed to request ad');
                                        }
                                        );
                                }, 
                                function() {
                                    alert('failed to create banner view');
                                }
                );
        } else {
            alert('AdMob plugin not available/ready.');
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};