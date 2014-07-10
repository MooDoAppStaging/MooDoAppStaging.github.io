function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function i(e,t){var i,o,n,s,a,r,d,c,l,m,u=t&&t.split("/"),p=g.map,f=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(t){for(u=u.slice(0,u.length-1),e=u.concat(e.split("/")),c=0;c<e.length;c+=1)if(m=e[c],"."===m)e.splice(c,1),c-=1;else if(".."===m){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((u||f)&&p){for(i=e.split("/"),c=i.length;c>0;c-=1){if(o=i.slice(0,c).join("/"),u)for(l=u.length;l>0;l-=1)if(n=p[u.slice(0,l).join("/")],n&&(n=n[o])){s=n,a=c;break}if(s)break;!r&&f&&f[o]&&(r=f[o],d=c)}!s&&r&&(s=r,a=d),s&&(i.splice(0,a,s),e=i.join("/"))}return e}function o(t,i){return function(){return l.apply(e,w.call(arguments,0).concat([t,i]))}}function n(e){return function(t){return i(t,e)}}function s(e){return function(t){p[e]=t}}function a(i){if(t(f,i)){var o=f[i];delete f[i],h[i]=!0,c.apply(e,o)}if(!t(p,i)&&!t(h,i))throw new Error("No "+i);return p[i]}function r(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return g&&g.config&&g.config[e]||{}}}var c,l,m,u,p={},f={},g={},h={},v=Object.prototype.hasOwnProperty,w=[].slice;m=function(e,t){var o,s=r(e),d=s[0];return e=s[1],d&&(d=i(d,t),o=a(d)),d?e=o&&o.normalize?o.normalize(e,n(t)):i(e,t):(e=i(e,t),s=r(e),d=s[0],e=s[1],d&&(o=a(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},u={require:function(e){return o(e)},exports:function(e){var t=p[e];return"undefined"!=typeof t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},c=function(i,n,r,d){var c,l,g,v,w,y,b=[];if(d=d||i,"function"==typeof r){for(n=!n.length&&r.length?["require","exports","module"]:n,w=0;w<n.length;w+=1)if(v=m(n[w],d),l=v.f,"require"===l)b[w]=u.require(i);else if("exports"===l)b[w]=u.exports(i),y=!0;else if("module"===l)c=b[w]=u.module(i);else if(t(p,l)||t(f,l)||t(h,l))b[w]=a(l);else{if(!v.p)throw new Error(i+" missing "+l);v.p.load(v.n,o(d,!0),s(l),{}),b[w]=p[l]}g=r.apply(p[i],b),i&&(c&&c.exports!==e&&c.exports!==p[i]?p[i]=c.exports:g===e&&y||(p[i]=g))}else i&&(p[i]=r)},requirejs=require=l=function(t,i,o,n,s){return"string"==typeof t?u[t]?u[t](i):a(m(t,i).f):(t.splice||(g=t,i.splice?(t=i,i=o,o=null):t=e),i=i||function(){},"function"==typeof o&&(o=n,n=s),n?c(e,t,i,o):setTimeout(function(){c(e,t,i,o)},4),l)},l.config=function(e){return g=e,g.deps&&l(g.deps,g.callback),l},define=function(e,i,o){i.splice||(o=i,i=[]),t(p,e)||t(f,e)||(f[e]=[e,i,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("auth",[],function(){function e(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return e.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:e?0:-1},o="chrome-extension:"===window.location.protocol,n=!!window.navigator.standalone||o||window.navigator.userAgent.indexOf("FluidApp")>=0,s=n||this.isMobro();s&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host),gapi.auth.authorize(i,function(e){console.log("Landing Page Auth Token: ",e),e&&!e.error&&(this.isLoggedIn=!0),t&&t(this.isLoggedIn)}.bind(this))},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new e}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return e.prototype={config:function(e){this._preferImages=e.preferImages,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){function e(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}return void 0===this._isMobile&&(this._isMobile=e()),this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident")){var o;if(o=new RegExp(e.match(/IEMobile/i)||"Microsoft Internet Explorer"===navigator.appName?"MSIE ([0-9]{1,}[.0-9]{0,})":"Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=o.exec(e))t=parseFloat(RegExp.$1);else{var n=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}10>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){var e=this.demos[this.demoIndex],t=document.getElementById(e.id),i=!1;if(t)if(!this._preferImages||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if(e.src){i=!0;var o=document.createElement("iframe");o.id=t.id,o.className=t.className+" demo",o.setAttribute("seamless","seamless"),o.scrolling="no",o.src=e.src,t.parentElement.replaceChild(o,t)}}else{var n=document.createElement("img");n.id=t.id,n.className="demoimg",n.src=this.getImgSrc(e.img),t.id="",t.style.overflowY="hidden",t.style.overflowX="auto",t.appendChild(n)}this.demoIndex++,(this._noLoadDelay||!i)&&this._loadDemo()}}},new e});var numRetries=2;requirejs(["auth","DemoManager"],function(e,t){function i(e){var t="",i=["ms","webkit","moz","o"],o=document.body.style;if("string"==typeof o[e])t="";else for(var n=0;n<i.length;n++)if("string"==typeof o["-"+i[n]+"-"+e]){t=i[n];break}var s=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+s:s}function o(e){for(var t,i=location.hash.substring(1),o=/([^&=]+)=([^&]*)/g;t=o.exec(i);)if(decodeURIComponent(t[1])===e)return decodeURIComponent(t[2]);return void 0}function n(){!R&&k&&(L=(L+1)%4,r(k.children[L])),clearTimeout(I),I=setTimeout(n,M)}function s(){b=i("transform");var e=(v(),!0);T||(T=t.isMobile()),T&&document.documentElement.classList.add("mobile");var o=t.isLegacyBrowser();o&&document.documentElement.classList.add("prefImages");var s=navigator.userAgent;(-1!==s.indexOf("MSIE")||-1!==s.indexOf("Trident"))&&document.documentElement.classList.add("ie"),document.documentElement.classList.remove("hidden"),t.config({preferImages:T||o,noLoadDelay:T});try{localStorage.getItem("localSettings")||(localStorage.setItem("localSettings","{}"),e=!1)}catch(r){}var c=document.getElementById("exampleHeaders");if(c&&(B=c.children[1]),k=document.getElementById("platforms")){for(var l=k.children,m=0;m<l.length;m++)l[m].onclick=d;a(document.getElementById("platformweb")),setTimeout(function(){document.getElementById("platformUnderline").classList.add("trans")},100)}var u=document.getElementById("topDemoText");u&&u.classList.remove("faded"),t.beginLoading(),window.gapi&&GoogleApiLoaded();var p=document.getElementById("group1");p&&(p.addEventListener("mouseover",function(){clearTimeout(I)}),p.addEventListener("mouseout",function(){clearTimeout(I),I=setTimeout(n,M)}),clearTimeout(I),I=setTimeout(n,M));var f=document.getElementsByClassName("emailAddr");if(f)for(var m=0;m<f.length;++m){var g=f[m];g.addEventListener("focus",function(){R=!0}),g.addEventListener("blur",function(){R=!1})}}function a(e){var t=40,i=e.childNodes[1],o=i.getBoundingClientRect(),n=o.width+t;document.getElementById("platformUnderline").style[b]="translate("+(o.left+o.width/2)+"px, 0) scale("+n+", 1)",w=e}function r(e){if(e!==w){var t=400,i=e.id.replace("platform","");L=Array.prototype.indexOf.call(document.getElementById("platforms").children,e),w.classList.remove("selected");var o=w.id.replace("platform",""),n="web"===o||"web"===i;a(e),e.classList.add("selected");var s=document.getElementById("topDemoSection");s.classList.remove(o),s.classList.add("transitioning"),s.classList.add(i);var r=document.getElementById("demoTop"),d=document.getElementById("demoTopMobile");setTimeout(function(){s.classList.remove("transitioning")},t),n&&("web"===i?(r.classList.remove("hidden"),d.classList.add("hidden")):(r.classList.add("hidden"),d.classList.remove("hidden")))}}function d(){r(this),clearTimeout(I),I=setTimeout(n,M)}function c(e,t){var i=document.getElementById(e);if(i){var o=i.contentWindow;o.postMessage(t,"*")}}function l(e){var t=e.data;switch(t){case"loaded":break;case"main":case"mainp":case"focus":case"search":case"indent":break;case"power0":case"power1":case"power2":case"power3":case"power4":var i=parseInt(t.replace("power",""),10);f(i);break;case"p0":case"p1":case"p2":case"p3":case"p4":case"p5":var i=parseInt(t.replace("p",""),10);m(i);break;case"f0":case"f1":case"f2":case"f3":case"f4":case"f5":var i=parseInt(t.replace("f",""),10);u(i);break;case"delay":break;case"click":e.source.pauseScript()}}function m(e){var t=document.getElementById("priorityFeatures").children[e];t!==_&&(_&&_.classList.remove("selected"),t.classList.add("selected"),_=t)}function u(e){var t=document.getElementById("focusFeatures").children[e];t!==A&&(A&&A.classList.remove("selected"),t.classList.add("selected"),A=t)}function p(e){var t=document.getElementById("exampleHeaders").children[e];t!==B&&(B&&B.classList.remove("selected"),t.classList.add("selected"),B=t)}function f(e){var t=document.getElementsByClassName("powerFeatures")[0].children[e];t!==O&&(O&&O.classList.remove("selected"),t.classList.add("selected"),O=t)}function g(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else self.Assert("string"==typeof e,"Only Objects or Strings are currently supported"),t=e;return t}function h(e){var t=e.url,i=e.type,o=e.cb,n=e.data,s=e.headers,a=new XMLHttpRequest;if(a.onreadystatechange=function(){4===a.readyState&&o(a)},a.open(i.toUpperCase(),t,!0),s)for(var r in s)a.setRequestHeader(r,s[r]);if(n){a.setRequestHeader("Accept","*/*"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var d=g(n);a.send(d)}else a.send()}function v(){if(null===S)try{var e=JSON.parse(localStorage.getItem("localSettings"))||{};S=e.activeUser}catch(t){console.log("Error parsing localSettings: ",t),S=void 0}return S}var w,y="http://www.moo.do",b="transform",x=[{id:"demoTop",src:"/#demo=true&touch=false&data=demo.5&script=none&dmode=0x40d",noMobile:!0},{id:"demoTopMobile",src:"/#demo=true&data=demo.5&script=none&dmode=0xa1&phone=true&touch=true",noMobile:!0},{id:"demoEverything",src:"/#demo=true&touch=false&data=demo.15&script=none&dmode=0x3bb",img:"/img/ss/everything.png"},{id:"demoDesktop",src:"/#demo=true&touch=false&data=demo.6&script=none&dmode=0x435",noMobile:!0},{id:"demoText",src:"/#demo=true&touch=false&data=demo.16&script=none&dmode=0x2bb",img:"/img/ss/text.png"},{id:"demoAgenda",src:"/#demo=true&touch=false&data=demo.17&script=none&panes=2&dmode=0x23b",img:"/img/ss/agenda.png"},{id:"demoSearch",src:"/#demo=true&touch=false&data=demo.18&script=search&dmode=0x2f9"}];t.registerDemos(x);var L=0;window.sendToApp=function(){location.href=window.location.protocol+"//"+window.location.host+"/#login=true"},window.sendToDemo=function(){location.href=window.location.protocol+"//"+window.location.host+"/#demo=true"};var E=o("state");if(E)return void(window.location=y+location.hash);var I,k,R=!1,M=5e3,T=!1;window.addEventListener("message",l,!1),window.featureClick=function(e,t){var i="script:"+t;l({data:t}),c("demo"+e,i)},window.exampleClick=function(e){p(e);var t="data:demo."+(e+5);c("demoDesktop",t)};var _,A,B,O=void 0;window.requestNotification=function(e){var t=document.forms["requestNotification"+e],i=document.getElementById("result"+e),o=t.email.value;return void 0===o||null===o||o.length<5?i.innerText="Please enter a valid email address.":h({type:"POST",url:window.location.protocol+"//api.moo.do/requestNotification",data:{email:o,platform:e},cb:function(e){200===e.status?(t.email.value="",i.innerText="Thanks for your interest!"):i.innerText="There was an error processing your request, please try again in a few minutes."}}),!1};window.requestAuthorization=function(){!e.isLoggedIn&&window.gapi&&window.gapi.auth?e.authenticate(!1,sendToApp):sendToApp()},window.sendToLiveDemo=function(){var e=document.getElementById("examplesWrapper");e&&e.scrollIntoView(!0)};var S=null;window.onresize=function(){var e=document.getElementById("platformUnderline");e&&(e.classList.remove("trans"),a(w),setTimeout(function(){e.classList.add("trans")},0))},"interactive"===document.readyState||"complete"===document.readyState?s():document.addEventListener("DOMContentLoaded",s,!1)}),define("landing",function(){});