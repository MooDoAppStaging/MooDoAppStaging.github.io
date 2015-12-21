function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function i(e,t){var i,o,n,a,r,s,d,c,l,u,m,p=t&&t.split("/"),f=h.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=e.split("/"),r=e.length-1,h.nodeIdCompat&&y.test(e[r])&&(e[r]=e[r].replace(y,"")),e=p.concat(e),l=0;l<e.length;l+=1)if(m=e[l],"."===m)e.splice(l,1),l-=1;else if(".."===m){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||g)&&f){for(i=e.split("/"),l=i.length;l>0;l-=1){if(o=i.slice(0,l).join("/"),p)for(u=p.length;u>0;u-=1)if(n=f[p.slice(0,u).join("/")],n&&(n=n[o])){a=n,s=l;break}if(a)break;!d&&g&&g[o]&&(d=g[o],c=l)}!a&&d&&(a=d,s=c),a&&(i.splice(0,s,a),e=i.join("/"))}return e}function o(t,i){return function(){var o=w.call(arguments,0);return"string"!=typeof o[0]&&1===o.length&&o.push(null),l.apply(e,o.concat([t,i]))}}function n(e){return function(t){return i(t,e)}}function a(e){return function(t){p[e]=t}}function r(i){if(t(f,i)){var o=f[i];delete f[i],g[i]=!0,c.apply(e,o)}if(!t(p,i)&&!t(g,i))throw new Error("No "+i);return p[i]}function s(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,u,m,p={},f={},h={},g={},v=Object.prototype.hasOwnProperty,w=[].slice,y=/\.js$/;u=function(e,t){var o,a=s(e),d=a[0];return e=a[1],d&&(d=i(d,t),o=r(d)),d?e=o&&o.normalize?o.normalize(e,n(t)):i(e,t):(e=i(e,t),a=s(e),d=a[0],e=a[1],d&&(o=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},m={require:function(e){return o(e)},exports:function(e){var t=p[e];return"undefined"!=typeof t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},c=function(i,n,s,d){var c,l,h,v,w,y,b=[],x=typeof s;if(d=d||i,"undefined"===x||"function"===x){for(n=!n.length&&s.length?["require","exports","module"]:n,w=0;w<n.length;w+=1)if(v=u(n[w],d),l=v.f,"require"===l)b[w]=m.require(i);else if("exports"===l)b[w]=m.exports(i),y=!0;else if("module"===l)c=b[w]=m.module(i);else if(t(p,l)||t(f,l)||t(g,l))b[w]=r(l);else{if(!v.p)throw new Error(i+" missing "+l);v.p.load(v.n,o(d,!0),a(l),{}),b[w]=p[l]}h=s?s.apply(p[i],b):void 0,i&&(c&&c.exports!==e&&c.exports!==p[i]?p[i]=c.exports:h===e&&y||(p[i]=h))}else i&&(p[i]=s)},requirejs=require=l=function(t,i,o,n,a){if("string"==typeof t)return m[t]?m[t](i):r(u(t,i).f);if(t&&!t.splice){if(h=t,h.deps&&l(h.deps,h.callback),!i)return;i.splice?(t=i,i=o,o=null):t=e}return i=i||function(){},"function"==typeof o&&(o=n,n=a),n?c(e,t,i,o):setTimeout(function(){c(e,t,i,o)},4),l},l.config=function(e){return l(e)},requirejs._defined=p,define=function(e,i,o){if("string"!=typeof e)throw new Error("Incorrect module build - no module name");i&&i.splice||(o=i,i=[]),t(p,e)||t(f,e)||(f[e]=[e,i,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this.init(),this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this._videoLibLoaded=!1,this._videoQueue=[],this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows",OSX:"OSX"},e.prototype={init:function(){var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)?(this.OS=OSNames.Windows,this._isMobile=!0):-1!==e.indexOf("Win")?this.OS=OSNames.Windows:-1!==e.indexOf("Mac")&&(this.OS=OSNames.OSX),!this._isMobile){var t=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),!t){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(t=!0)}this._isMobile=t}},config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,this._onlyOne=e.onlyOne,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},requireInteractivity:function(){return-1!==navigator.userAgent.indexOf("Edge")},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},beginLoading:function(){this.demos.length>0&&this._loadNextDemo()},beginLoadingIfInView:function(){function e(){return document.documentElement.scrollTop||document.body.scrollTop}function t(){for(var t=e(),i=t+window.innerHeight,n=0;n<o.demos.length;n++){{var a=o.demos[n];a.top}if(!a.loaded&&a.top>t-200&&a.bottom<i+200){o._loadDemo(n);break}}}function i(){requestAnimationFrame(t)}if(this.demos.length>0&&!this.isMobile()){for(var o=this,n=e(),a=0;a<this.demos.length;a++){var r=this.demos[a],s=document.getElementById(r.id),d=s.getBoundingClientRect();this.demos[a].top=d.top+n,this.demos[a].bottom=d.bottom+n}document.addEventListener("scroll",i),t()}},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._onlyOne||this._loadNextDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},loadVideoPlayer:function(){window.onYouTubeIframeAPIReady=function(){for(var e=0;e<this._videoQueue.length;++e)this.createVideo(this._videoQueue[e]);this._videoQueue=[]}.bind(this);var e=document.createElement("script");e.src="//www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},requestVideoLoad:function(e,t,i){this._videoLibLoaded?this.createVideo({elementID:e,videoID:t,cb:i}):this._videoQueue.push({elementID:e,videoID:t,cb:i})},createVideo:function(e){function t(){r=new YT.Player(e.elementID,{videoId:e.videoID,playerVars:{enablejsapi:1,autoplay:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:window.location.protocol+"//"+window.location.host},events:{onReady:o,onStateChange:n,onError:a}})}function i(){1===r.getPlayerState()&&r.getCurrentTime()>=s-1.5&&(r.pauseVideo(),d&&r.unMute())}function o(t){s=r.getDuration(),setInterval(i,1e3),d=t.target.isMuted(),t.target.mute(),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},3500),e.cb&&e.cb(),require(["DemoManager"],function(t){if(t.isMobile()){var i=document.getElementById(e.elementID);i.style.opacity=1}})}function n(t){switch(t.data){case YT.PlayerState.PLAYING:var i=document.getElementById(e.elementID);i.style.opacity=1;break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function a(e){console.log("Player Error: ",e)}var r,s,d=!1;t()},_loadNextDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadNextDemo();var e=this._loadDemo(this.demoIndex);this.demoIndex++,(this._noLoadDelay||!e)&&this._loadNextDemo()}},_loadDemo:function(e){var t=this.demos[e];t.loaded=!0;var i=document.getElementById(t.id),o=!1;if(i)if(!this._preferImages&&t.src||!this.isMobile()&&t.forceDesktopIFrame||void 0===t.img){if((this._preferImages||this._forceVideo)&&void 0!==t.video&&t.video.indexOf("/")>=0){o=!1;var n=document.createElement("video");n.id="v"+i.id,n.className="demoimg",n.preload="auto",n.autoplay="autoplay",n.controls="controls";for(var a=0;a<t.video.length;++a){var r=document.createElement("source");r.src=t.video[a].path,r.type=t.video[a].type,n.appendChild(r)}i.id="",i.style.overflow="hidden",i.appendChild(n),this.videoLoaded=!0,window.postMessage("video_started","*")}else if((this._preferImages||this._forceVideo)&&void 0!==t.video&&t.video.indexOf("/")<0)o=!1,this.requestVideoLoad(t.videoEle,t.video,t.videoCB);else if(t.src){o=!0;var s=document.createElement("iframe");s.id=i.id,s.className=i.className+" demo",s.setAttribute("seamless","seamless"),s.scrolling="no",s.src=t.src,i.parentElement.replaceChild(s,i)}}else{var d=document.createElement("img");d.id=i.id,d.className="demoimg",d.src=this.getImgSrc(t.img),i.id="",i.style.overflowY="hidden",i.style.overflowX="auto",i.appendChild(d)}return o}},new e}),define("util",["DemoManager"],function(e){function t(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else t=e;return t}var i={};"function"!=typeof String.prototype.startsWith&&(Object.defineProperty?Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}}):String.prototype.startsWith=function(e){return 0===this.lastIndexOf(e,0)}),i.getURLHashParam=function(e){for(var t,i=window.location.hash.substring(1),o=/([^&=]+)=([^&]*)/g;t=o.exec(i);)if(decodeURIComponent(t[1])===e)return decodeURIComponent(t[2]);return void 0};var o=[0,5,15,35,80,170],n=[408,500,502,503,504];i.XHR=function(e){function i(){m>p?(p++,setTimeout(a,1e3*o[p])):log("XHR Failed to retry - reached max retry limit")}function a(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&m>p?(e.retry=i,u&&n.indexOf(e.status)>=0?e.retry():d(e)):d(e))},f&&h?e.open(s.toUpperCase(),r,!0,f,h):e.open(s.toUpperCase(),r,!0),l)for(var o in l)e.setRequestHeader(o,l[o]);if(c){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var a=t(c);e.send(a)}else e.send()}var r=e.url,s=e.type,d=e.cb,c=e.data,l=e.headers,u=e.autoRetry,m=e.maxRetries||2,p=0,f=e.username,h=e.password;a()},i.XHR_PrivateAPI=function(e){var t="https:",o="/private/v1",n={type:e.type,url:t+"//api.moo.do"+o+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};i.XHR(n)},i.XHR_PublicAPI=function(){},i.sendEvent=function(e,t,o){if(window.ga)try{ga("send","event",e,t,"LandingPage",o)}catch(n){i.reporError(n)}},i.reportError=function(){},window.sendToAppStore=function(t,o){if(e.isMobile()&&e.OS){t=e.OS;var n;switch(t){case OSNames.Android:n="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:n="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:n="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8";break;case OSNames.Windows:utl="https://www.moo.do/app/"}window.open(n)}t&&i.sendEvent("AppStore",t+"_"+o)};var a={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,t){var o;e==a.Email&&window.open("mailto:contact@moo.do","_blank"),o&&i.sendEvent("Social",e+"_"+t)},i}),define("auth",["util"],function(e){function t(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install","https://www.googleapis.com/auth/drive.appdata"],this.isLoggedIn=!1}return t.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),t=JSON.parse(e);if(t){var i=t.values.Default.activeUser;return i}}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(e){var t=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==t.indexOf("MSIE")||-1!==t.indexOf("Trident")?this.sendToApp(!1,e):this.authenticate(!1,function(t){t?this.getEmailAddr(function(t){var i=this.getCurrentAppUser();i===t.email?this.sendToApp(!1,e):this.sendToApp(t.email,e)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp(!1,e)},sendToApp:function(t,i){var o,n=window.location.host,a=e.getURLHashParam("invite");o=t?window.location.protocol+"//"+n+"/app/#user="+encodeURIComponent(t):window.location.protocol+"//"+n+"/app/#login=true",a&&(o+="&invite="+a),i&&(o+="&premium=true"),window.location.href=o},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(i,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),t&&t(this.isLoggedIn)}.bind(this))},getEmailAddr:function(t){var i=gapi.auth.getToken();if(i){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+i.access_token;e.XHR({type:"GET",url:o,autoRetry:!0,cb:function(e){if(200===e.status){var i={};try{i=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}t(i)}else t()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new t}),(window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0)&&(window.location.pathname="/app/");var numRetries=2,loadYTVideo=!1;("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo&&require(["DemoManager"],function(e){(e.isMobile()||e.isLegacyBrowser())&&e.loadVideoPlayer()}),requirejs(["util","auth","DemoManager"],function(e,t,i){function o(e){return"string"==typeof e?g[e]||(g[e]=document.getElementById(e)):e}function n(e){var t="",i=["ms","webkit","moz","o"],o=document.body.style,n=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof o[e])t="";else for(var a=0;a<i.length;a++)if("string"==typeof o[i[a]+n]){t=i[a];break}var r=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+r:r}function a(){b=n("transform"),x=n("transition"),T=n("animation"),I=n("animationDelay"),w=window.innerWidth,i.isMobile()&&(document.documentElement.classList.add("mobile"),document.documentElement.classList.add(i.OS)),i.isLegacyBrowser()&&document.documentElement.classList.add("prefImages"),i.OS===OSNames.Windows&&document.documentElement.classList.add("windows");var t=navigator.userAgent;(-1!==t.indexOf("MSIE")||-1!==t.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.openGetStarted=function(t){i.isMobile()?sendToAppStore(i.OS):(y=t,document.documentElement.classList.add("gettingStarted"),setTimeout(function(){document.documentElement.classList.add("blurred")},200),e.sendEvent("Menu","GetStarted_"+t))},window.hideGetStarted=function(){document.documentElement.classList.remove("blurred"),document.documentElement.classList.remove("gettingStarted")},window.pageLoaded=!0,document.documentElement.style.opacity=1}function r(){var t=e.getURLHashParam("email");e.XHR_PrivateAPI({type:"POST",path:"/feedback/unsubscribe",data:{email:t},cb:function(e){var t;t=200===e.status?"You have been successfully unsubscribed from future emails.":"There was an error unsubscribing. Please reply to the email to unsubscribe.",document.getElementById("unsubMessage").innerText=t}})}function s(){function n(e,t){var i=C[t],o="/app/#demo=true&touch=false&dmode=0x1091&data="+i.data+"&panes="+i.panes+"&script="+(i.script?i.script:"none");return{id:e,src:o,img:i.img,video:i.video,videoEle:i.videoEle,videoCB:i.videoCB}}function a(e,t){i.isMobile()?sendToAppStore(i.OS,e):(u(),e.style.opacity=1,e.style.display="block"),t.stopPropagation()}function r(){var e,t=document.getElementById("videoFrame");if(w>=O)e=O-2;else{var i=window.getComputedStyle(t);e=parseInt(i.width)}var o=Math.round(e*(9/16));t.style.height=o+"px",document.getElementById("videoFrame").style.height=o+"px"}function s(e,t){var i=o(t).children[e];i!==D[t]&&(D[t]&&D[t].classList.remove("selected"),i.classList.add("selected"),o("processBlurbs").className="selected-"+e,D[t]=i)}function c(e){s(e,"processes")}function p(e){if("done"===e.data)for(var t=["demoIntro","demoProcess"],i=0;i<t.length;i++){var n=document.getElementById(t[i]);if(n.contentWindow==e.source){n.classList.remove("noInteractive");break}}if(N[e.data])N[e.data]();else switch(e.data){case"demo_started":o("topDemo").style.opacity=1;break;case"demo_done":for(var a=o("checkboxes").children,i=0;i<a.length;i++)a[i].style[I]=.15*i+.5+"s",log(I,a[i].style[I]);document.documentElement.classList.add("demoDone")}}function f(){function e(e,t,i,n){var a=o(t);a.style[x]=e?"all "+e+"ms ease-in-out":"",a.style[i]=n}function t(t,i,o,n){e(t,i,b,"translate("+o+"px,"+n+"px)")}function i(e,t,i){var n=o(t);n.classList.add(i)}function n(e,t,i){var n=o(t);n.classList.remove(i)}function a(t,i){e(t,i,"opacity",0)}function r(t,i){e(t,i,"opacity",1)}function s(e,t,i,n){{var a=o(t);a.getBoundingClientRect().width}a.innerHTML="<span>"+i+'</span><span class="fadeIn1s">'+n+"</span>"}function d(e,t,i){var n=o(t);n.innerHTML=i}function c(e,t,i){var n=o(t);n.innerText=i}function l(e,t){m("demoIntro",t)}function u(){g.push(Array.prototype.slice.call(arguments,0))}function p(e){g.push(e)}function f(e){g.push(e)}function h(){do{if(w)return void(y=!0);v++;var e=g[v];if(e){if(!isNaN(e)){setTimeout(h,e);break}if("string"==typeof e){N[e]=h;break}var t=(e[0],e[1]);e.splice(1,1),t.apply(t,e)}}while(e)}var g=(o("i1Title"),[]),v=-1,w=!1,y=!1,T={pause:function(){w=!0,l(0,"pause")},resume:function(){w=!1,l(0,"resume"),y&&(y=!1,h())},stop:function(){g=[]}},I=70,E=I;u(0,a,"i1Title"),u(0,a,"i1Title2"),u(0,c,"i1Title2",""),u(0,a,"demoIntroWrapper"),u(0,e,"i1Cards","display",""),u(0,t,"i1Title",-135,15),u(0,t,"i1Title2",-135,50),u(0,t,"i1Cards",0,I),u(0,t,"demoIntroWrapper",365,E),p(500),u(0,r,"i1Title"),u(1e3,r,"i1Title2"),u(0,s,"i1Title","","Organize everything"),p(2e3),u(0,r,"i1Cards");for(var L=0;6>L;L++)u(200,r,"i1C"+L),u(200,e,"i1C"+L,"boxShadow","0 1px 4px rgba(0,0,0,0.3)"),p(140);p(1e3),u(1e3,t,"i1Cards",0,I+40);for(var L=0;6>L;L++)u(1e3,e,"i1C"+L,"boxShadow",""),u(1e3,t,"i1C"+L,0,20*-L);p(200),u(0,s,"i1Title2","","together"),u(400),u(0,i,"i1Cards","show"),p(1500),u(1e3,s,"i1Title2","together ","in a simple outline"),u(0,e,"i1CardsEls","overflow","hidden");for(var L=0;6>L;L++){var O;L>0&&(O=50),3==L&&(O=100),u(1e3,t,"i1C"+L,O,20*-L)}p(2e3),u(1e3,e,"i1Cards","opacity",0),u(1e3,e,"i1Title","opacity",0),u(1e3,e,"i1Title2","opacity",0),p(1e3),u(0,e,"i1Cards","display","none"),u(1e3,e,"i1Title","opacity",1),u(0,c,"i1Title",""),u(1e3,e,"demoIntroWrapper","opacity",1),u(0,l,"start"),u(0,t,"i1Title",-115,15),u(0,s,"i1Title","","This is your email"),f("showSecondPane"),u(1e3,t,"demoIntroWrapper",160,E),u(1e3,s,"i1Title","This is your email",""),u(0,e,"i1Title2","opacity",1),u(0,t,"i1Title2",190,15),u(0,s,"i1Title2","","",200),u(1e3,s,"i1Title2","","This is your todo list"),u(1e3,t,"i1Title",-320,15),u(1e3,t,"i1Title2",25,15),f("showEmails"),u(1e3,s,"i1Title","This is your email"," on"),u(0,d,"i1Title2",'<span class="fadeOut500ms">This is </span><span>your todo list</span>'),u(1e3,t,"i1Title",-225,15),u(1e3,t,"i1Title2",-48,15),p(1500),f("showAgenda"),u(1e3,t,"demoIntroWrapper",0,E),u(0,d,"i1Title",'<span>This is your email</span><span class="fadeOut500ms"> on</span>'),u(0,d,"i1Title2",'<span style="visibility: hidden;">This is </span><span class="fadeOut500ms">your </span><span>todo list</span><span class="fadeIn1s"> on your calendar</span>'),p(200),u(1e3,t,"i1Title",-290,15),u(1e3,t,"i1Title2",-163,15),p(300),u(0,d,"i1Title",'<span>This is your email</span><span class="fadeIn1s"> and</span>'),f("done"),u(1e3,a,"i1Title"),u(1e3,a,"i1Title2"),p(1e3),u(0,s,"i1Title","",""),u(0,t,"i1Title",-250,15),u(0,r,"i1Title"),u(0,s,"i1Title","",'This is a live demo. Try it! Or <a onclick="restartIntro()">play again</a>');for(var L=0;6>L;L++)u(0,a,"i1C"+L),u(0,e,"i1C"+L,"boxShadow",""),u(0,t,"i1C"+L,0,0);return u(0,e,"i1CardsEls","overflow",""),u(0,n,"i1Cards","show"),document.getElementById("demoIntro").classList.add("noInteractive"),h(),T}function h(){var e=window.innerHeight-60-150;e=Math.max(e,600);var t=Math.max((e-50-600)/2,0);if(o("intro").style[b]="translate(0,"+t+"px)",o("intro").style.height=e+"px",o("demoIntroWrapper").style.height=e-50+"px",!i.isMobile()&&!i.isMobile()){var n=d();getStartedButtonPos=o("platformsTop").getBoundingClientRect().top+n}}function g(){var e=d();if(!i.isMobile())if(e+=window.innerHeight,e>j+200){if(U&&(F.pause(),W||m("demoProcess","resume")),W){var t=n("demoProcess","kanban");i.registerDemo(t),i.notifyOfLoad(),W=!1}U=!1}else j>e&&(U||(m("demoProcess","pause"),F.resume()),U=!0)}function y(){requestAnimationFrame(g)}if(loadYTVideo){var T;T=document.getElementById(i.isMobile()||i.isLegacyBrowser()?"intro":"videoFrameWrapper"),T&&(T.style.display="none")}v=o("buttonGetStarted-top"),L=!0;var E=t.getCurrentAppUser(),S=1,_=localStorage.getItem("landingVersionSeen");if(_&&+_>=S&&E)try{var k=new URL(document.referrer),M=k.hostname;if("www.moo.do"!==M&&"dev.moo.do"!==M&&"beta.moo.do"!==M&&"localhost"!==M)return void t.sendToApp()}catch(A){}localStorage.setItem("landingVersionSeen",S);var R=document.getElementById("exampleHeaders");R&&(lastExampleHighlight=R.children[0]);var C={intro:{data:"intro.intro",panes:"PaneGmail:1:2",script:"intro",video:"m0_zFZ21j9o",videoEle:"videoFrame",videoCB:function(){}},kanban:{data:"intro.kanban",panes:"1,,kIdeas:1,,kTodo:1,,kProgress:1,,kTesting",script:"kanban"},gtd:{data:"intro.gtd",panes:"1,,inbox:1,,projects:2,#mobile",script:"gtd"},project:{data:"intro.project",panes:"1,,todo:1,+Jay -//:1,#Android",script:"projectManagement"},inbox:{data:"intro.inbox",panes:"PaneGmail:1:1,,respond",script:"inboxZero"}};i.registerDemo(n("demoIntro","intro")),document.documentElement.classList.remove("hidden");var P=i.isMobile()||i.isLegacyBrowser(),B=!1;if(i.config({preferImages:P,forceVideo:B,noLoadDelay:i.isMobile()}),i.beginLoading(),document.onclick=function(){u()},o("platWinTop").onclick=function(e){a(o("popupWinTop"),e)},o("platWinGetStarted").onclick=function(e){a(o("popupWinGetStarted"),e)},i.isMobile()||i.isLegacyBrowser())l("sectionProcess"),l("introElements"),l("processDemoWrapper"),w>=O?r():setTimeout(r,0);else{var D={};if(window.processClick=function(t,o){c(t);var n=C[o],a="data="+n.data+"&panes="+n.panes+"&script="+(n.script?n.script:"none"),r=document.getElementById("demoProcess");i.requireInteractivity()||r.classList.add("noInteractive"),m("demoProcess",a),e.sendEvent("Menu","Demo"+o)},i.requireInteractivity()){var q=document.getElementById("demoProcess");q.classList.remove("noInteractive")}c(0)}var N={};if(window.addEventListener("message",p,!1),window.requestNotification=function(t,i){var n=document.forms["requestNotification"+t+i],a=document.getElementById("result"+t+i),r=n.email.value;return void 0===r||null===r||r.length<5?a.innerText="Please enter a valid email address.":e.XHR_PrivateAPI({type:"POST",path:"/feedback/notification",data:{email:r,platform:t},cb:function(e){200===e.status?(n.email.value="",a.innerText="Thanks for your interest!",o("signupbox"+i).style.display="none"):a.innerText="There was an error processing your request, please try again in a few minutes."}}),!1},!i.isMobile()&&!i.isLegacyBrowser()){window.addEventListener("resize",h),h();var F=f();window.restartIntro=function(){F.stop(),F=f();var e=document.getElementById("demoIntro");e.contentWindow.location.reload()};var j=0,W=!0,V=o("demoProcess").getBoundingClientRect();j=V.top+d();var U=!0;g(),document.addEventListener("scroll",y)}}function d(){return document.documentElement.scrollTop||document.body.scrollTop}function c(e){document.documentElement&&(document.documentElement.scrollTop=e),document.body.scrollTop=e}function l(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}function u(){E&&(E.style.opacity=0,E.style.display="",E=void 0)}function m(e,t){var i=document.getElementById(e);if(i){var o=i.contentWindow;o&&o.postMessage(t,"*")}}function p(e,t,i){return-i*e*(e-2)+t}function f(e,t){function i(e){a||(a=e-20);var o=Math.min((e-a)/t,1),s=p(o,r,n);c(s),1>o&&requestAnimationFrame(i)}var o=document.getElementById(e),n=o.getBoundingClientRect().top;if(window.requestAnimationFrame){var a,r=d();requestAnimationFrame(i)}else c(n)}function h(){a();var e=window.location.pathname;"/about/"===e||"/"===e?s():"/unsubscribe/"===e&&r()}var g={};window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,window.log=console.log.bind(console);var v,w,y,b="transform",x="transition",T="animation",I="animationDelay",E=void 0,L=!1,O=920;window.scrollToDemo=function(){f("demoText",400)},window.requestAuthorization=function(i){t.requestAuthorization(y&&y.indexOf("premium")>=0),e.sendEvent("Menu","Login_"+i)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?h():document.addEventListener("DOMContentLoaded",h,!1)}),define("landing",function(){});