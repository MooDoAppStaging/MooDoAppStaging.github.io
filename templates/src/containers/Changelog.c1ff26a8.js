webpackJsonp([12],{60:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),c=n(l),s=a(18),u=a(55),i=a(54),o=n(i);t.default=(0,u.hot)(e)((0,s.withRouteData)(function(e){var t=e.post,a=t.contents;return a=a.replace(/<li>(Fix|Feature|Change|Speed|Blog|Release|Misc):(.*)<\/li>/g,function(e,t,a){return'<li><span class="change change'+t+'">'+t+"</span><span>"+a+"</span></li>"}),c.default.createElement("div",{className:"changelog"},c.default.createElement(o.default,{top:!0,title:"Changelog"}),c.default.createElement("div",{className:"section section-first section-full padded"},c.default.createElement("header",null,"Change Log"),c.default.createElement("div",{className:"sectionText",dangerouslySetInnerHTML:{__html:a}})))}))}).call(t,a(13)(e))}});