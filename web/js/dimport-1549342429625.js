(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{632:function(e,t,r){"use strict";r.r(t);var a=r(6),o=r.n(a),s=r(7),i=r.n(s),n=r(0),l=r(1),d=r(18),c=r(25),u=r(8),f=r(91),p=r(3),h=r(580),m=r.n(h),g=r(36),v=r(64);function y(e){return e.toString(p.default.International.getFormat(l.a.DFormat.MonthDay))}var w=function(){function e(){var t=this;o()(this,e);["workflowy","wunderlist","opml","json","gtasks","trello","todoist"].forEach(function(e){return t.register(e)})}return i()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};return this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),t}},{key:"workflowyLogin",value:function(e,t,r,a){try{n.default.PAssert(670,r,"Workflowy requires a success callback")}catch(o){n.default.reportError(o)}try{n.default.PAssert(671,a,"Workflowy requires an error callback")}catch(o){n.default.reportError(o)}return e?t?void 0:a("Must provide a password."):a("Must provide a valid username.")}},{key:"workflowyImport",value:function(e,t){try{n.default.PAssert(672,e,"Workflowy requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(673,t,"Workflowy requires an error callback")}catch(r){n.default.reportError(r)}return e(this.workflowy.data)}},{key:"workflowyReplaceFormatting",value:function(e){return e.replace(/<b>|<\/b>/g,"**").replace(/<i>|<\/i>/g,"*").replace(/<u>|<\/u>/g,"__")}},{key:"workflowyIterateItem",value:function(e,t){try{n.default.PAssert(674,e&&void 0!==e.nm,"All items must exist and have stars and text, children and notes are optional",e)}catch(p){n.default.reportError(p)}try{n.default.PAssert(676,t,"A valid parent must always be defined")}catch(p){n.default.reportError(p)}if(e&&t)try{var r=!!e.cp;if(!r){var a=l.a.Prefix.Bullet+" "+n.default.unescape(this.workflowyReplaceFormatting(e.nm)),o=d.a.createVMLI({text:a,isComplete:r},{parent:t,changeType:l.a.ChangeType.AllLocal,documentOwner:t.getDocumentOwner()});if(t.insertItem(o),e.no){var s=n.default.unescape(e.no),i=d.a.createVMLI({text:s,isNote:!0},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:t.getDocumentOwner()});o.setNote(i,l.a.ChangeType.Local)}if(e.ch)for(var c=0,u=0;u<e.ch.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=e.ch[u];this.workflowyIterateItem(f,o)}}}catch(h){throw n.default.reportError(h),h}}},{key:"workflowySave",value:function(e,t,r){try{n.default.PAssert(677,e,"Workflowy requires having valid data")}catch(f){n.default.reportError(f)}try{n.default.PAssert(678,t,"Workflowy requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(679,r,"Workflowy requires an error callback")}catch(f){n.default.reportError(f)}try{try{n.default.PAssert(680,e.projectTreeData,"Missing Workflowy projectTreeData")}catch(f){n.default.reportError(f)}try{n.default.PAssert(681,e.projectTreeData.mainProjectTreeInfo,"Missing Workflowy mainProjectTreeInfo")}catch(f){n.default.reportError(f)}var a=e.projectTreeData.mainProjectTreeInfo;try{n.default.PAssert(682,a.rootProjectChildren,"Missing Workflowy rootProjectChildren")}catch(f){n.default.reportError(f)}u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Workflowy import"),s=o.getRootItem();try{n.default.PAssert(683,s,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}try{for(var i=0,d=0;d<a.rootProjectChildren.length;++d){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var c=a.rootProjectChildren[d];this.workflowyIterateItem(c,s)}o.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All)}catch(h){return n.default.reportError(h),r("There was an error iterating your Workflowy items. The developers have been notified with daetails of the error.",h)}return p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(m){return n.default.reportError(m),r("There was an error parsing your Workflowy data. The developers have been notified with details of the error.",m)}}},{key:"wunderlistLogin",value:function(e,t,r,a){try{n.default.PAssert(684,r,"Wunderlist requires a success callback")}catch(d){n.default.reportError(d)}try{n.default.PAssert(685,a,"Wunderlist requires an error callback")}catch(d){n.default.reportError(d)}var o="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",s=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=o;var i="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+o+"&redirect_uri="+s+"&state="+i;window.open(l,"modal-wunderlist","height=600,width=550");window.addEventListener("message",function e(t){var r=n.default.getLocationOrigin(),o=!1;try{o=t.data.state===i}catch(s){n.default.reportError(s)}r&&o&&(window.removeEventListener("message",e),t.data.error?a("Error authenticating with Wunderlist"):t.data.code)})}},{key:"wunderlistImport",value:function(e,t){var r=this;try{n.default.PAssert(686,e,"Wunderlist requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(687,t,"Wunderlist requires an error callback")}catch(s){n.default.reportError(s)}var a={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists(function(s){var i=0;n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Get ListData Response: ",s);for(var d=function(){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var d=s[c];a[d.id]={title:d.title,items:{},p:d.position},r.wunderlistGetTasks(d.id,function(i){var c=0;n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Get TaskData Response: ",i);for(var u=0;u<i.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=i[u];if(f.parent_id){var p=a[f.list_id].items[f.parent_id];p?(p.items||(p.items=[]),p.items.push(f)):a[f.list_id].items[f.parent_id]={items:[f]}}else{var h=a[f.list_id].items[f.id];a[f.list_id].items[f.id]=f,h&&(a[f.list_id].items[f.id].items=h.items)}}r.wunderlistGetSubtasks(d.id,function(t){for(var r=0,i=0;i<t.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t[i],l=a[n.list_id];if(l)if(n.parent_id){var d=l.items[n.parent_id];d?(d.items||(d.items=[]),d.items.push(n)):l.items[n.parent_id]={items:[n]}}else{var c=l.items[n.id];l.items[n.id]=n,c&&(l.items[n.id].items=c.items)}}++o===s.length&&e(a)},t)},t)},c=0;c<s.length;++c)d()},t)}},{key:"wunderlistGetLists",value:function(e,t){try{n.default.PAssert(688,e,"Wunderlist requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(689,t,"Wunderlist requires an error callback")}catch(r){n.default.reportError(r)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(r){if(200===r.status){var a;try{a=JSON.parse(r.response)}catch(o){t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",o)}e(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+r.status),t("Error contacting remote server.")}})}},{key:"wunderlistGetTasks",value:function(e,t,r){try{n.default.PAssert(690,t,"Wunderlist requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(691,r,"Wunderlist requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}})}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{n.default.PAssert(692,t,"Wunderlist requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(693,r,"Wunderlist requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}})}},{key:"wunderlistSave",value:function(e,t,r){try{n.default.PAssert(694,t,"Wunderlist requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(695,r,"Wunderlist requires an error callback")}catch(s){n.default.reportError(s)}try{u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Wunderlist import"),o=a.getRootItem();try{n.default.PAssert(696,o,"Root item must exist in order to import")}catch(s){n.default.reportError(s)}Object.keys(e).forEach(function(t){var r=e[t];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("List: ",r);var s=r.title,i=d.a.createVMLI({text:s},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(i,0),Object.keys(r.items).forEach(function(e){var t=r.items[e];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("  Task: ",t);var o=d.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:i,changeType:l.a.ChangeType.AllLocal,documentOwner:a});if(i.insertItem(o),t.note){var s=d.a.createVMLI({text:t.note},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(s)}if(t.items)for(var c=0,u=0;u<t.items.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=t.items[u];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("    SubTask: ",f);var p=d.a.createVMLI({text:f.title,isComplete:!!f.completed_at,dateCompleted:f.completed_at,isStarred:f.starred},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(p)}})}),a.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(i){r(void 0,i)}}},{key:"opmlLogin",value:function(e,t,r,a){try{n.default.PAssert(697,r,"OPML requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(698,a,"OPML requires an error callback")}catch(s){n.default.reportError(s)}var o=document.getElementById("importFileUploadButton");o.onchange=r,o.click()}},{key:"opmlImport",value:function(e,t){var r=this;try{n.default.PAssert(699,e,"OPML requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(700,t,"OPML requires an error callback")}catch(s){n.default.reportError(s)}try{var a=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(a.onload=function(a){var o,i=a.target.result;if((i.startsWith("<?xml ")||i.startsWith("<?opml ")||i.startsWith("<opml "))&&(o=n.default.loadXML(i)),o){u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var l=r.createDocument("OPML import").getRootItem();try{n.default.PAssert(701,l,"Root item must exist in order to import")}catch(s){n.default.reportError(s)}var d=f.a.parseOPML(o,l);p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),d?e():t("Error parsing OPML. Please validate your data.")}else t("Unable to load XML lib. Please update or try another browser.")},a.onerror=t,a.readAsText(o)):t("You must select a file before importing.")}catch(i){t(void 0,i)}}},{key:"opmlSave",value:function(e,t,r){try{n.default.PAssert(702,t,"OPML requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(703,r,"OPML requires an error callback")}catch(a){n.default.reportError(a)}n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("OPML Save: ",e),t()}},{key:"jsonLogin",value:function(e,t,r,a){try{n.default.PAssert(704,r,"JSON requires a success callback")}catch(i){n.default.reportError(i)}try{n.default.PAssert(705,a,"JSON requires an error callback")}catch(i){n.default.reportError(i)}var o=document.getElementById("importFileUploadButton"),s=!1;o.onchange=function(e){s=!0,r(e)},o.click();document.body.onfocus=function(){setTimeout(function(){s||a(!1),document.body.onfocus=void 0},1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{var o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{f.a.parseJSON(o,!0).then(function(r){if(r){r.text=r.text||"Imported document",u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach(function(e){c.a.cacheItem(e)});var a=v.a.create(r);d.a.addDocument(a),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")})}catch(i){return t("The JSON file has errors. The developers have been notified with details of the error.",i)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}}},{key:"jsonSave",value:function(e,t,r){try{n.default.PAssert(706,t,"JSON requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(707,r,"JSON requires an error callback")}catch(a){n.default.reportError(a)}t()}},{key:"gtasksLogin",value:function(e,t,r,a){var o=this;try{n.default.PAssert(712,r,"GTasks requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(713,a,"GTasks requires an error callback")}catch(s){n.default.reportError(s)}g.a.authAccountTemp([l.a.GScope.TasksRO],function(e){e&&!e.error?(o.gtasks.token=e,r(e)):(n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Error getting Google TaskRO permission: ",e),a("Unable to authenticate with Google. Please try again.",e))})}},{key:"gtasksImport",value:function(e,t){try{n.default.PAssert(714,e,"GTasks requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(715,t,"GTasks requires an error callback")}catch(a){n.default.reportError(a)}var r={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists(function(o){var s=0;try{n.default.PAssert(716,n.default.isArray(o),"List data must be an array")}catch(a){n.default.reportError(a)}for(var i=o.length,l=0,d=0;d<o.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var c=o[d];r.remoteItems[c.id]={id:c.id,text:c.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},r.roots.push(c.id),this.gtasksGetTasks(c,function(o,s){if(o){try{n.default.PAssert(717,n.default.isArray(o),"List data must be an array")}catch(a){n.default.reportError(a)}if(n.default.isArray(o)){for(var d=0,c=0;c<o.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=o[c];if(u&&"completed"!==u.status){r.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var f=r.remoteItems[u.parent||s.id];f?f.items.push(u.id):r.unassigned.push(u.id)}}++l===i&&e(r)}else t("Invalid task list returned.")}else l++}.bind(this),t)}}.bind(this),t)}},{key:"gtasksGetLists",value:function(e,t){try{n.default.PAssert(718,e,"GTasks requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(719,t,"GTasks requires an error callback")}catch(r){n.default.reportError(r)}n.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=2000&key="+l.a.APIKey+"&access_token="+this.gtasks.token,cb:function(a){if(200===a.status)try{var o=JSON.parse(a.response);try{n.default.PAssert(720,o&&o.items,"Must have a valid set of data to get tasks from")}catch(r){n.default.reportError(r)}o&&o.items?e(o.items):t("Error getting data from remote server.")}catch(s){t(s)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+a.status),t("Error contacting remote server.")}})}},{key:"gtasksGetTasks",value:function(e,t,r){try{n.default.PAssert(721,e,"GTasks requires a valid list to get tasks from")}catch(a){n.default.reportError(a)}try{n.default.PAssert(722,t,"GTasks requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(723,r,"GTasks requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/"+e.id+"/tasks?maxResults=2500&key="+l.a.APIKey+"&access_token="+this.gtasks.token,cb:function(o){if(200===o.status)try{var s=JSON.parse(o.response);try{n.default.PAssert(724,s,"Must have a valid array of tasks")}catch(a){n.default.reportError(a)}s&&s.items?t(s.items,e):t([],e)}catch(i){r(i)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+o.status),r("Error contacting remote server.")}})}},{key:"gtasksSave",value:function(e,t,r){try{n.default.PAssert(725,t,"GTasks requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(726,r,"GTasks requires an error callback")}catch(f){n.default.reportError(f)}try{var a=0,o=function t(r,a){var o=0,i=r.text;r.due&&(i+=" @"+y(r.due));var n=d.a.createVMLI({text:i,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:l.a.ChangeType.AllLocal,documentOwner:s});if(a.insertItem(n),r.notes){var c=d.a.createVMLI({text:r.notes,isNote:!0},{parent:n,changeType:l.a.ChangeType.AllLocal,documentOwner:s});n.setNote(c,l.a.ChangeType.Local)}for(var u=0;u<r.items.length;++u){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;t(e.remoteItems[r.items[u]],n)}};try{n.default.PAssert(727,0===e.unassigned.length,"We should never have unassigned tasks")}catch(f){n.default.reportError(f)}u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var s=this.createDocument("Google Tasks import"),i=s.getRootItem();try{n.default.PAssert(728,i,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}for(var c=0;c<e.roots.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;o(e.remoteItems[e.roots[c]],i)}s.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(h){r(void 0,h)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,n.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",function(){n.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",function(){r.trello.isLoading=!1;try{n.default.PAssert(729,window.Trello,"The Trello client lib must have been loaded correctly")}catch(a){n.default.reportError(a)}window.Trello?e():t("Error loading Trello. Please try again.")},function(e){r.trello.isLoading=!1,t(e)})},function(e){r.trello.isLoading=!1,t(e)}))}},{key:"trelloLogin",value:function(e,t,r,a){try{n.default.PAssert(730,window.Trello,"The Trello client lib was not properly loaded")}catch(o){n.default.reportError(o)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:a}):a("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,a=[];window.Trello.get("members/me/boards",n.default.wrapFn(function(o){var s=0,i=(o=o||[]).length,n=0;function l(){i===n&&e(a)}function d(e){n++,l()}for(var c=0;c<o.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=o[c];if(u.closed)i--;else{var f={text:u.name,items:[]};a.push(f),r._handleBoard(f,u.id,t,d)}}l()},t),t)}},{key:"_handleBoard",value:function(e,t,r,a){var o=this;window.Trello.get("boards/"+t+"/lists",n.default.wrapFn(function(t){var s=0,i=0,n=t.length;function l(){i===n&&a()}function d(){i++,l()}for(var c=0;c<t.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=t[c];if(u.closed)n--;else{var f={text:u.name,items:[]};e.items.push(f),o._handleList(f,u.id,r,d)}}l()},r),r)}},{key:"_handleList",value:function(e,t,r,a){var o=this;window.Trello.get("lists/"+t+"/cards",n.default.wrapFn(function(t){var s=0,i=0,n=t.length;function d(){i===n&&a()}function c(){i++,d()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var f=t[u];if(f.closed)n--;else{var p={text:f.name};if(f.labels&&f.labels.length>0){for(var h=0,m="",g=0;g<f.labels.length;++g){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var v=f.labels[g];m+=l.a.TagPrefix+(v.name.length>0?v.name:v.color)+" "}p.text=m+p.text}if(f.due&&(f.date=new Date(f.due)),f.desc&&f.desc.length>0){var y=0;p.items=[];var w=f.desc.split("\n");for(g=0;g<w.length;++g){if(y++>5e3&&__infLoop&&__infLoop(y))throw new RangeError;var k=w[g];k&&k.length>0&&p.items.push({text:k})}}if(f.idChecklists&&f.idChecklists.length>0){var L=0;p.items||(p.items=[]);for(g=0;g<f.idChecklists.length;++g){if(L++>5e3&&__infLoop&&__infLoop(L))throw new RangeError;o._handleChecklist(p,f.idChecklists[g],r,c)}}else i++;e.items.push(p)}}d()},r),r)}},{key:"_handleChecklist",value:function(e,t,r,a){window.Trello.get("checklists/"+t+"/",n.default.wrapFn(function(t){for(var r=0,o={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t.checkItems[s],n="complete"===i.state;if(!n){var l={text:i.name,isComplete:n};o.items.push(l)}}e.items.push(o),a()},r),r)}},{key:"trelloSave",value:function(e,t,r){try{var a=0;u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Trello import"),s=function e(t,r){var a=d.a.createVMLI({text:t.text,isComplete:t.isComplete,isCollapsed:t.isCollapsed},{parent:r,changeType:l.a.ChangeType.AllLocal,documentOwner:o});if(r.insertItem(a),t.items)for(var s=0,i=0;i<t.items.length;++i){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[i],a)}return a},i=o.getRootItem();try{n.default.PAssert(731,i,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}for(var c=0;c<e.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e[c],i)}p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}catch(h){return r(h)}t()}},{key:"todoistLogin",value:function(e,t,r,a){try{n.default.PAssert(732,r,"Todoist requires a success callback")}catch(l){n.default.reportError(l)}try{n.default.PAssert(733,a,"Todoist requires an error callback")}catch(l){n.default.reportError(l)}var o="localhost"===window.location.hostname?"5d361221eddb4bcdb018457c7c74e698":"b701ac04f4df419ca4144ab208a9fb06",s="Dchs"+(new Date).getTime(),i="https://todoist.com/oauth/authorize?client_id="+o+"&scope=data:read&state="+s;window.open(i,"modal-todoist","height=600,width=550");window.addEventListener("message",function e(t){var r=n.default.getLocationOrigin(),o=!1;try{o=t.data.state===s}catch(i){n.default.reportError(i)}r&&o&&(window.removeEventListener("message",e),t.data.error?a("Error authenticating with Todoist"):t.data.code)})}},{key:"todoistImport",value:function(e,t){var r=0,a=0;try{n.default.PAssert(734,e,"Todoist requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(735,t,"Todoist requires an error callback")}catch(f){n.default.reportError(f)}for(var o=this.todoist.data,s={},i=0;i<o.projects.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var l=o.projects[i];l.is_archived||l.is_deleted||(s[l.id]={id:l.id,name:l.name,items:[],itemMap:{},parent_id:l.parent_id,item_order:l.item_order})}for(var d=[],c=0;c<o.items.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=o.items[c];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&c>0&&!isNaN(u.indent)&&u.indent>1&&d[u.indent-1]&&(u.parent_id=d[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(d[u.indent]=u))}e(s)}},{key:"todoistSave",value:function(e,t,r){var a=[l.a.VMLIFlag.None,l.a.VMLIFlag.None,l.a.VMLIFlag.P2,l.a.VMLIFlag.P1,l.a.VMLIFlag.P0];try{u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Todoist import"),s=o.getRootItem();try{n.default.PAssert(736,s,"Root item must exist in order to import")}catch(_){n.default.reportError(_)}var i={},c={},f=function(e,t){var r=c[e.id],a=c[t.id];return r.item_order-a.item_order},h=function e(t,r){if(!i[r.id]){var s=r.parent_id;r.parent_id&&!i[r.id]&&e(t,t.itemMap[r.parent_id]);var u=i[s||r.project_id];try{n.default.PAssert(737,u,"parent item did not exist",s,r.project_id)}catch(_){n.default.reportError(_)}u&&function(e,t,r){t.priority&&(t.priority=a[t.priority]),t.due_date_utc&&(t.content+=" @"+y(new Date(t.due_date_utc)));var s=d.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority},{parent:r,changeType:l.a.ChangeType.AllLocal,documentOwner:o});i[t.id]=s,c[s.id]=t,r.insertSorted(s,f)}(0,r,u)}},m=function t(r){if(!i[r.id]){var a,n=r.parent_id,u=r.id;n?(i[n]||t(e[n]),a=i[n]):a=s;var p=d.a.createVMLI({text:r.name},{parent:a,changeType:l.a.ChangeType.AllLocal,documentOwner:o});i[u]=p,c[p.id]=r,a.insertSorted(p,f)}};for(var g in e)if(e.hasOwnProperty(g)){var v=0,w=e[g],k=w.items;m(w);for(var L=0;L<k.length;L++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;h(w,k[L])}}p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}catch(E){return r(E)}t()}},{key:"_createCSVEntry",value:function(e,t){for(var r=0,a={},o=0;o<e.length;++o){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a[e[o]]=t[o]}return a}},{key:"parseCSV",value:function(e){for(var t=0,r=m.a.parse(e),a=["Area","Client","Contacts","Category","Context","Created By","Date Created","Date Updated","Delegated To","Start Date","Due Date","Links","Notes","Originating Entry","Parent Entries","Priority","Short Description","Title","Star","Status","Website References"],o=[],s=r.data[0],i=0;i<s.length;++i){if(t++>5e3&&__infLoop&&__infLoop(t))throw new RangeError;a.indexOf(s[i])<0?console.log("Unknown CSV Headers: ",s[i]):o.indexOf(s[i])>=0&&o.remove(s[i])}if(0===o.length){var n=0,l=[];for(i=1;i<r.data.length;++i){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;l.push(this._createCSVEntry(s,r.data[i]))}}else var d="Missing required export fields: "+o.join(", ");if(s.indexOf("Short Descrption")<0&&s.indexOf("Title")<0)d="Missing required export fields: Short Descrption OR Title.";return l||d}},{key:"createDocument",value:function(e){return d.a.addEmptyDocument(e,d.a.getDefaultBacking())}}]),e}();t.default=w}}]);