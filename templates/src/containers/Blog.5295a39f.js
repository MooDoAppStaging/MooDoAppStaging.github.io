webpackJsonp([4],{160:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),d=a(16),u=a(161),m=(n(u),a(28)),p=n(m),f=a(14),g=n(f),h=["January","February","March","April","May","June","July","August","September","October","November","December"],y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.post;a.contents;if("undefined"!=typeof window&&(window.__addDemo=function(a){t.excerpt||e.loadDemos([a])},window.__addDemos=function(a){t.excerpt||e.loadDemos(a)}),!t.excerpt&&"undefined"!=typeof window)if(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/platform.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),window.FB?FB.XFBML.parse(document):function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById(a)||(n=e.createElement(t),n.id=a,n.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=312316478922816&version=v2.0",r.parentNode.insertBefore(n,r))}(document,"script","facebook-jssdk"),window.twttr?twttr.widgets.load():function(e,t,a){var n,r=e.getElementsByTagName(t)[0],o=/^http:/.test(e.location)?"http":"https";e.getElementById(a)||(n=e.createElement(t),n.id=a,n.src=o+"://platform.twitter.com/widgets.js",r.parentNode.insertBefore(n,r))}(document,"script","twitter-wjs"),window.disqus_identifier=a.title,window.disqus_shortname="moodo",window.disqus_url="https://www.moo.do/blog/"+a.slug,window.DISQUS)DISQUS.reset({reload:!0,config:function(){this.page.identifier=window.disqus_identifier,this.page.url=window.disqus_url}});else{var n=document.createElement("script");n.id="script_disqus",n.type="text/javascript",n.async=!0,n.src="//"+window.disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n)}if("undefined"!=typeof window){var a=t.post;if(a.script){var r=document.createElement("script");r.id="script_"+a.slug,r.innerHTML=a.script,p.default.removeExistingScript(r),document.head.appendChild(r)}}}},{key:"loadDemos",value:function(e){g.default.registerDemos(e),g.default.isMobile()||g.default.isLegacyBrowser()?g.default.config({preferImages:!0,noDelayLoad:!0}):g.default.config({onlyOne:!0}),g.default.beginLoading()}},{key:"render",value:function(){var e=this.props,t=e.post,a=new Date(t.date),n=h[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear(),r=t.category,o=t.contents,l=o.indexOf("<p>##EXCERPT##</p>");return l>=0&&(o=e.excerpt?o.substr(0,l):o.replace("<p>##EXCERPT##</p>","")),c.default.createElement("div",{className:"post padded",id:t.uid?"post_"+t.uid:void 0},c.default.createElement("div",{className:"postHeader"+(t.image?" withImage":"")},c.default.createElement("header",null,c.default.createElement(d.Link,{to:"/blog/"+t.slug,prefetch:!1},t.title)),c.default.createElement("div",{className:"postMetadata"},c.default.createElement("span",{className:"postDate"},n),c.default.createElement("span",{className:"postCategories"},c.default.createElement("span",null," | "),c.default.createElement("span",null,c.default.createElement(d.Link,{to:"/blog/"+r,prefetch:!1},r))))),c.default.createElement("div",{className:"postContent"},t.image&&c.default.createElement("img",{className:"postImg postImgFull postImgHero",src:t.image}),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),e.excerpt&&c.default.createElement("div",{className:"postFooter"},c.default.createElement("div",{className:"readMore"},c.default.createElement(d.Link,{to:"/blog/"+t.slug,prefetch:!1},l>=0?"Continue Reading...":"Continue to comments...")))),!e.excerpt&&c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{id:"social"},c.default.createElement("span",{id:"shareFB",className:"fb-share-button","data-href":"https://www.moo.do/blog/"+t.slug,"data-type":"button"}),c.default.createElement("a",{id:"shareTwitter",href:"https://twitter.com/share",className:"twitter-share-button","data-text":"#MooDo blog post: https://www.moo.do/blog/"+t.slug,"data-count":"none"},"Tweet"),c.default.createElement("span",{id:"shareGoogle",className:"g-plus","data-action":"share","data-annotation":"none"}),c.default.createElement("div",{id:"fb-root"})),c.default.createElement("div",{id:"disqus_thread",className:"padded"})))}}]),t}(c.default.Component);t.default=(0,d.withRouteData)(function(e){return c.default.createElement(y,{post:e.post,excerpt:e.excerpt})})},161:function(e,t,a){!function(t,n){e.exports=n(a(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,a){return a.toUpperCase()})}function a(e){var a={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var n,r=e.split(":");if(r.length>1){var o=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(r[0].trim()),l=(n=r.slice(1).join(":").trim(),/^\d+$/.test(n)?Number(n):n.replace(/'/g,'"'));a[o]=l}}),a}function n(s,c,d){var u,m=d.map._;if(s.nodeType===o.COMMENT)return null;if(s.nodeType===o.TEXT){var p=(u=s.textContent,i.innerHTML=u,i.textContent);return m?m(p):p}for(var f=s.tagName.toLowerCase(),g=d.map[f],h={},y=0;y<s.attributes.length;y++){var w=s.attributes[y].name,E=s.attributes[y].value;h[w]=E}h.key=c.toString();for(var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(n,o){if(/^on.*/.test(o))return n;var l=o;/^(data|aria)-/.test(o)||(l=t(o));var i=r[l]||l;return n[i]="style"===i?a(e.style):e[o],n},{})}(h),b=[],N=0;N<s.childNodes.length;N++){var _=s.childNodes[N],T=c+"."+N;if(!(l.indexOf(f)>-1&&_.nodeType===o.TEXT&&(_.textContent=_.textContent.trim(),""===_.textContent))){var x=n(_,T,d);null!==x&&b.push(x)}}return"style"!==f||g||m?(0===b.length&&(b=null),g?e.createElement(g,v,b):m?m(f,v,b):e.createElement(f,v,b)):(v.dangerouslySetInnerHTML={__html:b[0]},e.createElement(f,v,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var r={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},o={ELEMENT:1,TEXT:3,COMMENT:8},l=["table","tbody","thead","tfoot","tr"],i=document.createElement("div");return function(e){var t={map:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).map||{}},a=document.createElement("div");a.innerHTML=e.trim();for(var r=[],o=0;o<a.childNodes.length;o++)r.push(a.childNodes[o]);var l=r.map(function(e,a){return n(e,a,t)}).filter(function(e){return null!==e});return 1===l.length?l[0]:l}})},69:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(r),l=a(16),i=a(55),s=a(160),c=n(s),d=a(54),u=n(d);t.default=(0,i.hot)(e)((0,l.withRouteData)(function(e){var t=e.posts,a=e.numPages,n=e.path,r=e.isSinglePost,i=e.showChangelog;return o.default.createElement("div",{className:"blog"},o.default.createElement(u.default,{top:!0,title:r?t[0].title:"Blog"}),i&&o.default.createElement("div",{className:"linkChangelog padded center"},o.default.createElement(l.Link,{to:"/changelog"},o.default.createElement("div",{className:"button white"},"Open Change Log"))),o.default.createElement("div",{className:"posts"},t.map(function(e,t){var n=o.default.createElement(c.default,{key:e.title,post:e,excerpt:a>1});return o.default.createElement(o.default.Fragment,{key:e.title+"frag"},n,o.default.createElement("hr",null))})),a>1&&o.default.createElement("div",{className:"pagination padded"},Array(a).fill().map(function(e,t){return o.default.createElement(l.Link,{activeClassName:"selected",exact:!0,key:t,to:n+(t>0?"/"+(t+1):""),prefetch:!1},t+1)})))}))}).call(t,a(12)(e))}});