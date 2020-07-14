(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{448:function(e,t,r){"use strict";r.r(t);var a=r(6),o=r.n(a),s=r(13),n=r.n(s),i=r(7),l=r.n(i),c=r(8),u=r.n(c),d=r(0),f=r(1),p=r(15),h=r(22),m=r(107),v=r(4),g=r(29),w=r(83),y=r(25),k=r(68),_=r(114);function L(e){return e.toString(v.default.International.getFormat(f.a.DFormat.MonthDay))}var E=function(){function e(){var t=this;l()(this,e);["wunderlist","opml","json","gtasks","trello","todoist"].forEach((function(e){return t.register(e)}))}return u()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),this[e]=t}},{key:"wunderlistLogin",value:function(e,t,r,a){var o=this;try{d.default.PAssert(993,r,"Wunderlist requires a success callback")}catch(c){d.default.reportError(c)}try{d.default.PAssert(994,a,"Wunderlist requires an error callback")}catch(c){d.default.reportError(c)}var s="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",n=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=s;var i="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+s+"&redirect_uri="+n+"&state="+i;window.open(l,"modal-wunderlist","height=600,width=550");window.addEventListener("message",(function e(t){var s=d.default.getLocationOrigin(),n=!1;try{n=t.data.state===i}catch(c){d.default.reportError(c)}if(s&&n)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Wunderlist");else{var l=t.data.code;l&&d.default.XHR_PrivateAPI({type:"POST",path:"/private/v1/oauth/wunderlist",data:{code:l},requireAuth:!0,cb:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("Wunderlist Login Reponse: ",e),200===e.status){try{var t=JSON.parse(e.response).data;o.wunderlist.token=t.access_token}catch(c){a("Error parsing response from remote server.",c)}o.wunderlist.token?r():a("Invalid username or password.")}else a("Error contacting remote server.")}))})}}))}},{key:"wunderlistImport",value:function(e,t){var r=this;try{d.default.PAssert(995,e,"Wunderlist requires a success callback")}catch(s){d.default.reportError(s)}try{d.default.PAssert(996,t,"Wunderlist requires an error callback")}catch(s){d.default.reportError(s)}var a={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists((function(s){var n=0;d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("Get ListData Response: ",s);for(var i=function(){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var i=s[l];a[i.id]={title:i.title,items:{},p:i.position},r.wunderlistGetTasks(i.id,(function(n){var l=0;d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("Get TaskData Response: ",n);for(var c=0;c<n.length;++c){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var u=n[c];if(u.parent_id){var p=a[u.list_id].items[u.parent_id];p?(p.items||(p.items=[]),p.items.push(u)):a[u.list_id].items[u.parent_id]={items:[u]}}else{var h=a[u.list_id].items[u.id];a[u.list_id].items[u.id]=u,h&&(a[u.list_id].items[u.id].items=h.items)}}r.wunderlistGetSubtasks(i.id,(function(t){for(var r=0,n=0;n<t.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t[n],l=a[i.list_id];if(l)if(i.parent_id){var c=l.items[i.parent_id];c?(c.items||(c.items=[]),c.items.push(i)):l.items[i.parent_id]={items:[i]}}else{var u=l.items[i.id];l.items[i.id]=i,u&&(l.items[i.id].items=u.items)}}++o===s.length&&e(a)}),t)}),t)},l=0;l<s.length;++l)i()}),t)}},{key:"wunderlistGetLists",value:function(e,t){try{d.default.PAssert(997,e,"Wunderlist requires a success callback")}catch(r){d.default.reportError(r)}try{d.default.PAssert(998,t,"Wunderlist requires an error callback")}catch(r){d.default.reportError(r)}d.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var r=n()(o.a.mark((function r(a){var s;return o.a.wrap((function(r){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(r.prev=r.next){case 0:if(200!==a.status){r.next=13;break}return r.prev=1,r.next=4,a.json();case 4:s=r.sent,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",r.t0);case 10:e(s),r.next=15;break;case 13:d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("XHR Status: "+a.status),t("Error contacting remote server.");case 15:case"end":return r.stop()}}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}())}},{key:"wunderlistGetTasks",value:function(e,t,r){try{d.default.PAssert(999,t,"Wunderlist requires a success callback")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1e3,r,"Wunderlist requires an error callback")}catch(a){d.default.reportError(a)}d.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=n()(o.a.mark((function e(a){var s;return o.a.wrap((function(e){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==a.status){e.next=7;break}return e.next=3,a.json();case 3:s=e.sent,t(s),e.next=9;break;case 7:d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("XHR Status: "+a.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{d.default.PAssert(1001,t,"Wunderlist requires a success callback")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1002,r,"Wunderlist requires an error callback")}catch(a){d.default.reportError(a)}d.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=n()(o.a.mark((function e(a){var s;return o.a.wrap((function(e){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==a.status){e.next=7;break}return e.next=3,a.json();case 3:s=e.sent,t(s),e.next=9;break;case 7:d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("XHR Status: "+a.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistSave",value:function(e,t,r){try{d.default.PAssert(1003,t,"Wunderlist requires a success callback")}catch(s){d.default.reportError(s)}try{d.default.PAssert(1004,r,"Wunderlist requires an error callback")}catch(s){d.default.reportError(s)}try{v.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Wunderlist import"),o=a.getRootItem();try{d.default.PAssert(1005,o,"Root item must exist in order to import")}catch(s){d.default.reportError(s)}Object.keys(e).forEach((function(t){var r=e[t];d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("List: ",r);var s=r.title,n=p.a.createVMLI({text:s},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(n,0),Object.keys(r.items).forEach((function(e){var t=r.items[e];d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("  Task: ",t);var o=p.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:n,changeType:f.a.ChangeType.AllLocal,documentOwner:a});if(n.insertItem(o),t.note){var s=p.a.createVMLI({text:t.note},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(s)}if(t.items)for(var i=0,l=0;l<t.items.length;++l){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var c=t.items[l];d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("    SubTask: ",c);var u=p.a.createVMLI({text:c.title,isComplete:!!c.completed_at,dateCompleted:c.completed_at,isStarred:c.starred},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(u)}}))})),a.parseAll(f.a.ChangeType.Local|f.a.ChangeType.All),this.saveDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems(),t()}catch(n){r(void 0,n)}}},{key:"opmlLogin",value:function(e,t,r,a){try{d.default.PAssert(1006,r,"OPML requires a success callback")}catch(s){d.default.reportError(s)}try{d.default.PAssert(1007,a,"OPML requires an error callback")}catch(s){d.default.reportError(s)}var o=document.getElementById("importFileUploadButton");o.onchange=r,o.click()}},{key:"opmlImport",value:function(e,t){try{d.default.PAssert(1008,e,"OPML requires a success callback")}catch(o){d.default.reportError(o)}try{d.default.PAssert(1009,t,"OPML requires an error callback")}catch(o){d.default.reportError(o)}try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(t){var r=t.target.result,a=m.a.parseOPML(r);e(a)},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(s){t(void 0,s)}}},{key:"opmlSave",value:function(e,t,r){try{d.default.PAssert(1010,t,"OPML requires a success callback")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1011,r,"OPML requires an error callback")}catch(a){d.default.reportError(a)}d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("OPML Save: ",e),this.createDocumentFromData(e.items,e.text||"OPML Import"),t()}},{key:"jsonLogin",value:function(e,t,r,a){try{d.default.PAssert(1012,r,"JSON requires a success callback")}catch(n){d.default.reportError(n)}try{d.default.PAssert(1013,a,"JSON requires an error callback")}catch(n){d.default.reportError(n)}var o=document.getElementById("importFileUploadButton"),s=!1;o.onchange=function(e){s=!0,r(e)},o.click();document.body.onfocus=function(){setTimeout((function(){s||a(!1),document.body.onfocus=void 0}),1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{a=a.replace(/\n/g,"");var o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{m.a.parseJSON(o,!0).then((function(r){if(r){r.text=r.text||"Imported document",v.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach((function(e){h.a.cacheItem(e)}));var a=w.a.create(r);p.a.addDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")}))}catch(n){return t("The JSON file has errors. The developers have been notified with details of the error.",n)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}}},{key:"jsonSave",value:function(e,t,r){try{d.default.PAssert(1014,t,"JSON requires a success callback")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1015,r,"JSON requires an error callback")}catch(a){d.default.reportError(a)}t()}},{key:"gtasksLogin",value:function(e,t,r,a){var o=this;try{d.default.PAssert(1020,r,"GTasks requires a success callback")}catch(s){d.default.reportError(s)}try{d.default.PAssert(1021,a,"GTasks requires an error callback")}catch(s){d.default.reportError(s)}g.a.authAccountPrimary([f.a.GScope.TasksRO],(function(e){e?(o.gtasks.token=e.access_token,r(e)):(d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("Error getting Google TaskRO permission: ",e),a("Unable to authenticate with Google. Please try again.",e))}))}},{key:"gtasksImport",value:function(e,t){var r=this;try{d.default.PAssert(1022,e,"GTasks requires a success callback")}catch(o){d.default.reportError(o)}try{d.default.PAssert(1023,t,"GTasks requires an error callback")}catch(o){d.default.reportError(o)}var a={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists((function(s){var n=0;try{d.default.PAssert(1024,d.default.isArray(s),"List data must be an array")}catch(o){d.default.reportError(o)}for(var i=s.length,l=0,c=0;c<s.length;++c){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=s[c];a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},a.roots.push(u.id),r.gtasksGetTasks(u,(function(r,s){if(r){try{d.default.PAssert(1025,d.default.isArray(r),"List data must be an array")}catch(o){d.default.reportError(o)}if(d.default.isArray(r)){for(var n=0,c=0;c<r.length;++c){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=r[c];if(u&&"completed"!==u.status){a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var f=a.remoteItems[u.parent||s.id];f?f.items.push(u.id):a.unassigned.push(u.id)}}++l===i&&e(a)}else t("Invalid task list returned.")}else l++}),t)}}),t)}},{key:"gtasksGetLists",value:function(e,t){try{d.default.PAssert(1026,e,"GTasks requires a success callback")}catch(r){d.default.reportError(r)}try{d.default.PAssert(1027,t,"GTasks requires an error callback")}catch(r){d.default.reportError(r)}d.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=".concat(2e3,"&key=").concat(f.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var a=n()(o.a.mark((function a(s){var n;return o.a.wrap((function(a){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(a.prev=a.next){case 0:if(200!==s.status){a.next=14;break}return a.prev=1,a.next=4,s.json();case 4:n=a.sent;try{d.default.PAssert(1028,n&&n.items,"Must have a valid set of data to get tasks from")}catch(r){d.default.reportError(r)}n&&n.items?e(n.items):t("Error getting data from remote server."),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),t(a.t0);case 12:a.next=16;break;case 14:d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("XHR Status: "+s.status),t("Error contacting remote server.");case 16:case"end":return a.stop()}}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}())}},{key:"gtasksGetTasks",value:function(e,t,r){try{d.default.PAssert(1029,e,"GTasks requires a valid list to get tasks from")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1030,t,"GTasks requires a success callback")}catch(a){d.default.reportError(a)}try{d.default.PAssert(1031,r,"GTasks requires an error callback")}catch(a){d.default.reportError(a)}d.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/".concat(e.id,"/tasks?maxResults=").concat(2500,"&key=").concat(f.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var s=n()(o.a.mark((function s(n){var i;return o.a.wrap((function(o){for(var s=0;;){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;switch(o.prev=o.next){case 0:if(200!==n.status){o.next=14;break}return o.prev=1,o.next=4,n.json();case 4:i=o.sent;try{d.default.PAssert(1032,i,"Must have a valid array of tasks")}catch(a){d.default.reportError(a)}i&&i.items?t(i.items,e):t([],e),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),r(o.t0);case 12:o.next=16;break;case 14:d.default.shouldLog(f.a.LogLevels.Import)&&d.default.log("XHR Status: "+n.status),r("Error contacting remote server.");case 16:case"end":return o.stop()}}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}())}},{key:"gtasksSave",value:function(e,t,r){try{d.default.PAssert(1033,t,"GTasks requires a success callback")}catch(l){d.default.reportError(l)}try{d.default.PAssert(1034,r,"GTasks requires an error callback")}catch(l){d.default.reportError(l)}try{var a=0;try{d.default.PAssert(1035,0===e.unassigned.length,"We should never have unassigned tasks")}catch(l){d.default.reportError(l)}v.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Google Tasks import"),s=o.getRootItem();try{d.default.PAssert(1036,s,"Root item must exist in order to import")}catch(l){d.default.reportError(l)}for(var n=function t(r,a){var s=0,n=r.text;r.due&&(n+=" @"+L(r.due));var i=p.a.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:f.a.ChangeType.AllLocal,documentOwner:o});if(a.insertItem(i),r.notes){var l=p.a.createVMLI({text:r.notes,isNote:!0},{parent:i,changeType:f.a.ChangeType.AllLocal,documentOwner:o});i.setNote(l,f.a.ChangeType.Local)}for(var c=0;c<r.items.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[c]],i)}},i=0;i<e.roots.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;n(e.remoteItems[e.roots[i]],s)}o.parseAll(f.a.ChangeType.Local|f.a.ChangeType.All),this.saveDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems(),t()}catch(c){r(void 0,c)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,d.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",(function(){d.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",(function(){r.trello.isLoading=!1;try{d.default.PAssert(1037,window.Trello,"The Trello client lib must have been loaded correctly")}catch(a){d.default.reportError(a)}window.Trello?e():t("Error loading Trello. Please try again.")}),(function(e){r.trello.isLoading=!1,t(e)}))}),(function(e){r.trello.isLoading=!1,t(e)})))}},{key:"trelloLogin",value:function(e,t,r,a){try{d.default.PAssert(1038,window.Trello,"The Trello client lib was not properly loaded")}catch(o){d.default.reportError(o)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:a}):a("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,a=[];window.Trello.get("members/me/boards",d.default.wrapFn((function(o){var s=0,n=(o=o||[]).length,i=0;function l(){n===i&&e(a)}function c(e){i++,l()}for(var u=0;u<o.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=o[u];if(d.closed)n--;else{var f={text:d.name,items:[]};a.push(f),r._handleBoard(f,d.id,t,c)}}l()}),t),t)}},{key:"_handleBoard",value:function(e,t,r,a){var o=this;window.Trello.get("boards/"+t+"/lists",d.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=t[u];if(d.closed)i--;else{var f={text:d.name,items:[]};e.items.push(f),o._handleList(f,d.id,r,c)}}l()}),r),r)}},{key:"_handleList",value:function(e,t,r,a){var o=this;window.Trello.get("lists/"+t+"/cards",d.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var d=t[u];if(d.closed)i--;else{var p={text:d.name};if(d.labels&&d.labels.length>0){for(var h=0,m="",v=0;v<d.labels.length;++v){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var g=d.labels[v];m+=f.a.TagPrefix+(g.name.length>0?g.name:g.color)+" "}p.text=m+p.text}if(d.due&&(d.date=new Date(d.due)),d.desc&&d.desc.length>0){var w=0;p.items=[];var y=d.desc.split("\n");for(v=0;v<y.length;++v){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var k=y[v];k&&k.length>0&&p.items.push({text:k})}}if(d.idChecklists&&d.idChecklists.length>0){var _=0;p.items||(p.items=[]);for(v=0;v<d.idChecklists.length;++v){if(_++>5e3&&__infLoop&&__infLoop(_))throw new RangeError;o._handleChecklist(p,d.idChecklists[v],r,c)}}else n++;e.items.push(p)}}l()}),r),r)}},{key:"_handleChecklist",value:function(e,t,r,a){window.Trello.get("checklists/"+t+"/",d.default.wrapFn((function(t){for(var r=0,o={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t.checkItems[s],i="complete"===n.state;if(!i){var l={text:n.name,isComplete:i};o.items.push(l)}}e.items.push(o),a()}),r),r)}},{key:"trelloSave",value:function(e,t,r){try{var a=0;v.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Trello import"),s=function e(t,r){var a=p.a.createVMLI({text:t.text,isComplete:t.isComplete},{parent:r,changeType:f.a.ChangeType.AllLocal,documentOwner:o});if(r.insertItem(a),t.items)for(var s=0,n=0;n<t.items.length;++n){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[n],a)}return a},n=o.getRootItem();try{d.default.PAssert(1039,n,"Root item must exist in order to import")}catch(l){d.default.reportError(l)}for(var i=0;i<e.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e[i],n)}this.saveDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems()}catch(c){return r(c)}t()}},{key:"todoistLogin",value:function(e,t,r,a){var o=this;try{d.default.PAssert(1040,r,"Todoist requires a success callback")}catch(i){d.default.reportError(i)}try{d.default.PAssert(1041,a,"Todoist requires an error callback")}catch(i){d.default.reportError(i)}var s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id=de93a2f2c51d4e2fa0412a79f88c7960&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");window.addEventListener("message",(function e(t){var n=d.default.getLocationOrigin(),i=!1;try{i=t.data.state===s}catch(c){d.default.reportError(c)}if(n&&i)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Todoist");else{var l=t.data.code;l&&k.a.todoistImport(l).then((function(e){e.error?a("Error parsing response from remote server.",e.error):(console.log(e.value),o.todoist.data=e.value,r())}))}}))}},{key:"todoistImport",value:function(e,t){var r=0,a=0;try{d.default.PAssert(1042,e,"Todoist requires a success callback")}catch(f){d.default.reportError(f)}try{d.default.PAssert(1043,t,"Todoist requires an error callback")}catch(f){d.default.reportError(f)}for(var o=this.todoist.data,s={},n=0;n<o.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=o.projects[n];i.is_archived||i.is_deleted||(s[i.id]={id:i.id,name:i.name,items:[],itemMap:{},parent_id:i.parent_id,item_order:i.item_order})}for(var l=[],c=0;c<o.items.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=o.items[c];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&c>0&&!isNaN(u.indent)&&u.indent>1&&l[u.indent-1]&&(u.parent_id=l[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(l[u.indent]=u))}e(s)}},{key:"todoistSave",value:function(e,t,r){var a=[f.a.VMLIFlag.None,f.a.VMLIFlag.None,f.a.VMLIFlag.P2,f.a.VMLIFlag.P1,f.a.VMLIFlag.P0];try{v.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Todoist import"),s=o.getRootItem();try{d.default.PAssert(1044,s,"Root item must exist in order to import")}catch(_){d.default.reportError(_)}var n={},i={},l=function(e,t){var r=i[e.id],a=i[t.id];return r.item_order-a.item_order},c=function e(t,r){if(!n[r.id]){var s=r.parent_id;r.parent_id&&!n[r.id]&&e(t,t.itemMap[r.parent_id]);var c=n[s||r.project_id];try{d.default.PAssert(1045,c,"parent item did not exist",s,r.project_id)}catch(_){d.default.reportError(_)}c&&function(e,t,r){if(t.priority&&(t.priority=a[t.priority]),t.due_date_utc){var s=y.a.parseText(L(new Date(t.due_date_utc)));s&&(t.date=s.toData(),t.content+=" "+f.a.CharDate)}var c=p.a.createVMLI({text:t.content||"",priority:t.priority,date:t.date},{parent:r,changeType:f.a.ChangeType.AllLocal,documentOwner:o});n[t.id]=c,i[c.id]=t,r.insertSorted(c,l)}(0,r,c)}},u=function t(r){if(!n[r.id]){var a,c=r.parent_id,u=r.id;c?(n[c]||t(e[c]),a=n[c]):a=s;var d=p.a.createVMLI({text:r.name},{parent:a,changeType:f.a.ChangeType.AllLocal,documentOwner:o});n[u]=d,i[d.id]=r,a.insertSorted(d,l)}};for(var h in e)if(e.hasOwnProperty(h)){var m=0,g=e[h],w=g.items;u(g);for(var k=0;k<w.length;k++){if(m++>5e3&&__infLoop&&__infLoop(m))throw new RangeError;c(g,w[k])}}this.saveDocument(o),v.default.PaneUpdateBatcher.commitUpdateItems()}catch(E){return r(E)}t()}},{key:"createDocument",value:function(e){return p.a.createEmptyDocument(e,p.a.getDefaultBacking())}},{key:"saveDocument",value:function(e){p.a.addDocument(e)}},{key:"runImport",value:function(e,t,r,a,o){e.login(t,r,(function(){e.import((function(t){e.save(t,(function(){a()}),o)}),o)}),o)}},{key:"createDocumentFromData",value:function(e,t){var r=0;v.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument(t),o=function(e,t){if(!e.isNote){var r=p.a.createVMLI(e,{parent:t,changeType:f.a.ChangeType.AllLocal,documentOwner:a});t.insertItem(r)}},s=a.getRootItem();try{d.default.PAssert(1046,s,"Root item must exist in order to import")}catch(i){d.default.reportError(i)}_.a.rewriteItemIDs(e,!0);for(var n=0;n<e.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;o(e[n],s)}this.saveDocument(a),v.default.PaneUpdateBatcher.commitUpdateItems()}}]),e}();t.default=E}}]);
