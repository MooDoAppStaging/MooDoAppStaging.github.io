(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{632:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(1),i=r(18),s=r(25),n=r(8),l=r(91),d=r(3),c=r(580),u=r.n(c),f=r(36),p=r(64);function h(){this.workflowy={login:this.workflowyLogin.bind(this),import:this.workflowyImport.bind(this),save:this.workflowySave.bind(this)},this.wunderlist={login:this.wunderlistLogin.bind(this),import:this.wunderlistImport.bind(this),save:this.wunderlistSave.bind(this)},this.opml={login:this.opmlLogin.bind(this),import:this.opmlImport.bind(this),save:this.opmlSave.bind(this)},this.json={login:this.jsonLogin.bind(this),import:this.jsonImport.bind(this),save:this.jsonSave.bind(this)},this.gtasks={login:this.gtasksLogin.bind(this),import:this.gtasksImport.bind(this),save:this.gtasksSave.bind(this)},this.trello={preload:this.trelloPreload.bind(this),login:this.trelloLogin.bind(this),import:this.trelloImport.bind(this),save:this.trelloSave.bind(this)},this.todoist={login:this.todoistLogin.bind(this),import:this.todoistImport.bind(this),save:this.todoistSave.bind(this)}}function m(e){return e.toString(d.default.International.getFormat(o.a.DFormat.MonthDay))}h.prototype={workflowyLogin:function(e,t,r,o){try{a.default.PAssert(624,r,"Workflowy requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(625,o,"Workflowy requires an error callback")}catch(i){a.default.reportError(i)}return e?t?void 0:o("Must provide a password."):o("Must provide a valid username.")},workflowyImport:function(e,t){try{a.default.PAssert(626,e,"Workflowy requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(627,t,"Workflowy requires an error callback")}catch(r){a.default.reportError(r)}return e(this.workflowy.data)},workflowyReplaceFormatting:function(e){return e.replace(/<b>|<\/b>/g,"**").replace(/<i>|<\/i>/g,"*").replace(/<u>|<\/u>/g,"__")},workflowyIterateItem:function(e,t){try{a.default.PAssert(628,e&&void 0!==e.nm,"All items must exist and have stars and text, children and notes are optional",e)}catch(p){a.default.reportError(p)}try{a.default.PAssert(630,t,"A valid parent must always be defined")}catch(p){a.default.reportError(p)}if(e&&t)try{var r=!!e.cp;if(!r){var s=o.a.Prefix.Bullet+" "+a.default.unescape(this.workflowyReplaceFormatting(e.nm)),n=i.a.createVMLI({text:s,isComplete:r},{parent:t,changeType:o.a.ChangeType.AllLocal});if(t.insertItem(n),e.no){var l=a.default.unescape(e.no),d=i.a.createVMLI({text:l,isNote:!0},{parent:n,changeType:o.a.ChangeType.AllLocal});n.setNote(d,o.a.ChangeType.Local)}if(e.ch)for(var c=0,u=0;u<e.ch.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=e.ch[u];this.workflowyIterateItem(f,n)}}}catch(h){throw a.default.reportError(h),h}},workflowySave:function(e,t,r){try{a.default.PAssert(631,e,"Workflowy requires having valid data")}catch(h){a.default.reportError(h)}try{a.default.PAssert(632,t,"Workflowy requires a success callback")}catch(h){a.default.reportError(h)}try{a.default.PAssert(633,r,"Workflowy requires an error callback")}catch(h){a.default.reportError(h)}try{try{a.default.PAssert(634,e.projectTreeData,"Missing Workflowy projectTreeData")}catch(h){a.default.reportError(h)}try{a.default.PAssert(635,e.projectTreeData.mainProjectTreeInfo,"Missing Workflowy mainProjectTreeInfo")}catch(h){a.default.reportError(h)}var s=e.projectTreeData.mainProjectTreeInfo;try{a.default.PAssert(636,s.rootProjectChildren,"Missing Workflowy rootProjectChildren")}catch(h){a.default.reportError(h)}n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var l=i.a.createEmptyDocument("Workflowy import"),c=l.getRootItem();try{a.default.PAssert(637,c,"Root item must exist in order to import")}catch(h){a.default.reportError(h)}try{for(var u=0,f=0;f<s.rootProjectChildren.length;++f){if(u++>5e3&&__infLoop&&__infLoop(u))throw new RangeError;var p=s.rootProjectChildren[f];this.workflowyIterateItem(p,c)}l.parseAll(o.a.ChangeType.Local|o.a.ChangeType.All)}catch(m){return a.default.reportError(m),r("There was an error iterating your Workflowy items. The developers have been notified with daetails of the error.",m)}return d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(g){return a.default.reportError(g),r("There was an error parsing your Workflowy data. The developers have been notified with details of the error.",g)}},wunderlistLogin:function(e,t,r,o){try{a.default.PAssert(638,r,"Wunderlist requires a success callback")}catch(c){a.default.reportError(c)}try{a.default.PAssert(639,o,"Wunderlist requires an error callback")}catch(c){a.default.reportError(c)}var i="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",s=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=i;var n="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+i+"&redirect_uri="+s+"&state="+n;window.open(l,"modal-wunderlist","height=600,width=550");var d=function(e){var t=a.default.getLocationOrigin(),r=!1;try{r=e.data.state===n}catch(i){a.default.reportError(i)}if(t&&r)if(window.removeEventListener("message",d),e.data.error)o("Error authenticating with Wunderlist");else e.data.code}.bind(this);window.addEventListener("message",d)},wunderlistImport:function(e,t){var r=this;try{a.default.PAssert(640,e,"Wunderlist requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(641,t,"Wunderlist requires an error callback")}catch(n){a.default.reportError(n)}var i={inbox:{title:"inbox",items:{},p:0}},s=0;this.wunderlistGetLists(function(n){var l=0;a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Get ListData Response: ",n);for(var d=function(){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var d=n[c];i[d.id]={title:d.title,items:{},p:d.position},r.wunderlistGetTasks(d.id,function(l){var c=0;a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Get TaskData Response: ",l);for(var u=0;u<l.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=l[u];if(f.parent_id){var p=i[f.list_id].items[f.parent_id];p?(p.items||(p.items=[]),p.items.push(f)):i[f.list_id].items[f.parent_id]={items:[f]}}else{var h=i[f.list_id].items[f.id];i[f.list_id].items[f.id]=f,h&&(i[f.list_id].items[f.id].items=h.items)}}r.wunderlistGetSubtasks(d.id,function(t){for(var r=0,a=0;a<t.length;++a){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var o=t[a],l=i[o.list_id];if(l)if(o.parent_id){var d=l.items[o.parent_id];d?(d.items||(d.items=[]),d.items.push(o)):l.items[o.parent_id]={items:[o]}}else{var c=l.items[o.id];l.items[o.id]=o,c&&(l.items[o.id].items=c.items)}}++s===n.length&&e(i)},t)},t)},c=0;c<n.length;++c)d()},t)},wunderlistGetLists:function(e,t){try{a.default.PAssert(642,e,"Wunderlist requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(643,t,"Wunderlist requires an error callback")}catch(r){a.default.reportError(r)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(r){if(200===r.status){var i;try{i=JSON.parse(r.response)}catch(s){t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",s)}e(i)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+r.status),t("Error contacting remote server.")}.bind(this)})},wunderlistGetTasks:function(e,t,r){try{a.default.PAssert(644,t,"Wunderlist requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(645,r,"Wunderlist requires an error callback")}catch(i){a.default.reportError(i)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var i=JSON.parse(e.response);t(i)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}.bind(this)})},wunderlistGetSubtasks:function(e,t,r){try{a.default.PAssert(646,t,"Wunderlist requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(647,r,"Wunderlist requires an error callback")}catch(i){a.default.reportError(i)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var i=JSON.parse(e.response);t(i)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}.bind(this)})},wunderlistSave:function(e,t,r){try{a.default.PAssert(648,t,"Wunderlist requires a success callback")}catch(c){a.default.reportError(c)}try{a.default.PAssert(649,r,"Wunderlist requires an error callback")}catch(c){a.default.reportError(c)}try{n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var s=i.a.createEmptyDocument("Wunderlist import"),l=s.getRootItem();try{a.default.PAssert(650,l,"Root item must exist in order to import")}catch(c){a.default.reportError(c)}Object.keys(e).forEach(function(t){var r=e[t];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("List: ",r);var s=r.title,n=i.a.createVMLI({text:s},{parent:l,changeType:o.a.ChangeType.AllLocal});l.insertItem(n,0),Object.keys(r.items).forEach(function(e){var t=r.items[e];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("  Task: ",t);var s=i.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:n,changeType:o.a.ChangeType.AllLocal});if(n.insertItem(s),t.note){var l=i.a.createVMLI({text:t.note},{parent:s,changeType:o.a.ChangeType.AllLocal});s.insertItem(l)}if(t.items)for(var d=0,c=0;c<t.items.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=t.items[c];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("    SubTask: ",u);var f=i.a.createVMLI({text:u.title,isComplete:!!u.completed_at,dateCompleted:u.completed_at,isStarred:u.starred},{parent:s,changeType:o.a.ChangeType.AllLocal});s.insertItem(f)}})}),s.parseAll(o.a.ChangeType.Local|o.a.ChangeType.All),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(u){r(void 0,u)}},opmlLogin:function(e,t,r,o){try{a.default.PAssert(651,r,"OPML requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(652,o,"OPML requires an error callback")}catch(s){a.default.reportError(s)}var i=document.getElementById("importFileUploadButton");i.onchange=r,i.click()},opmlImport:function(e,t){try{a.default.PAssert(653,e,"OPML requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(654,t,"OPML requires an error callback")}catch(s){a.default.reportError(s)}try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(r){var o,c=r.target.result;if((c.startsWith("<?xml ")||c.startsWith("<?opml ")||c.startsWith("<opml "))&&(o=a.default.loadXML(c)),o){n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var u=i.a.createEmptyDocument("OPML import").getRootItem();try{a.default.PAssert(655,u,"Root item must exist in order to import")}catch(s){a.default.reportError(s)}var f=l.a.parseOPML(o,u);d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),f?e():t("Error parsing OPML. Please validate your data.")}else t("Unable to load XML lib. Please update or try another browser.")},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(c){t(void 0,c)}},opmlSave:function(e,t,r){try{a.default.PAssert(656,t,"OPML requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(657,r,"OPML requires an error callback")}catch(i){a.default.reportError(i)}a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("OPML Save: ",e),t()},jsonLogin:function(e,t,r,o){try{a.default.PAssert(658,r,"JSON requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(659,o,"JSON requires an error callback")}catch(n){a.default.reportError(n)}var i=document.getElementById("importFileUploadButton"),s=!1;i.onchange=function(e){s=!0,r(e)},i.click();document.body.onfocus=function(){setTimeout(function(){s||o(!1),document.body.onfocus=void 0},1e3)}},jsonImport:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{var o=JSON.parse(a)}catch(c){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{l.a.parseJSON(o,!0).then(function(r){if(r){r.text=r.text||"Imported document",n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach(function(e){s.a.cacheItem(e)});var a=p.a.create(r);i.a.addDocument(a),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")})}catch(u){return t("The JSON file has errors. The developers have been notified with details of the error.",u)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}},jsonSave:function(e,t,r){try{a.default.PAssert(660,t,"JSON requires a success callback")}catch(o){a.default.reportError(o)}try{a.default.PAssert(661,r,"JSON requires an error callback")}catch(o){a.default.reportError(o)}t()},gtasksLogin:function(e,t,r,i){var s=this;try{a.default.PAssert(666,r,"GTasks requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(667,i,"GTasks requires an error callback")}catch(n){a.default.reportError(n)}f.a.authAccountTemp([o.a.GScope.TasksRO],function(e){e&&!e.error?(s.gtasks.token=e,r(e)):(a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Error getting Google TaskRO permission: ",e),i("Unable to authenticate with Google. Please try again.",e))})},gtasksImport:function(e,t){try{a.default.PAssert(668,e,"GTasks requires a success callback")}catch(o){a.default.reportError(o)}try{a.default.PAssert(669,t,"GTasks requires an error callback")}catch(o){a.default.reportError(o)}var r={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists(function(i){var s=0;try{a.default.PAssert(670,a.default.isArray(i),"List data must be an array")}catch(o){a.default.reportError(o)}for(var n=i.length,l=0,d=0;d<i.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var c=i[d];r.remoteItems[c.id]={id:c.id,text:c.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},r.roots.push(c.id),this.gtasksGetTasks(c,function(i,s){if(i){try{a.default.PAssert(671,a.default.isArray(i),"List data must be an array")}catch(o){a.default.reportError(o)}if(a.default.isArray(i)){for(var d=0,c=0;c<i.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=i[c];if(u&&"completed"!==u.status){r.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var f=r.remoteItems[u.parent||s.id];f?f.items.push(u.id):r.unassigned.push(u.id)}}++l===n&&e(r)}else t("Invalid task list returned.")}else l++}.bind(this),t)}}.bind(this),t)},gtasksGetLists:function(e,t){try{a.default.PAssert(672,e,"GTasks requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(673,t,"GTasks requires an error callback")}catch(r){a.default.reportError(r)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=2000&key="+o.a.APIKey+"&access_token="+this.gtasks.token,cb:function(i){if(200===i.status)try{var s=JSON.parse(i.response);try{a.default.PAssert(674,s&&s.items,"Must have a valid set of data to get tasks from")}catch(r){a.default.reportError(r)}s&&s.items?e(s.items):t("Error getting data from remote server.")}catch(n){t(n)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+i.status),t("Error contacting remote server.")}})},gtasksGetTasks:function(e,t,r){try{a.default.PAssert(675,e,"GTasks requires a valid list to get tasks from")}catch(i){a.default.reportError(i)}try{a.default.PAssert(676,t,"GTasks requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(677,r,"GTasks requires an error callback")}catch(i){a.default.reportError(i)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/"+e.id+"/tasks?maxResults=2500&key="+o.a.APIKey+"&access_token="+this.gtasks.token,cb:function(s){if(200===s.status)try{var n=JSON.parse(s.response);try{a.default.PAssert(678,n,"Must have a valid array of tasks")}catch(i){a.default.reportError(i)}n&&n.items?t(n.items,e):t([],e)}catch(l){r(l)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+s.status),r("Error contacting remote server.")}})},gtasksSave:function(e,t,r){try{a.default.PAssert(679,t,"GTasks requires a success callback")}catch(p){a.default.reportError(p)}try{a.default.PAssert(680,r,"GTasks requires an error callback")}catch(p){a.default.reportError(p)}try{var s=0,l=function t(r,a){var s=0,n=r.text;r.due&&(n+=" @"+m(r.due));var l=i.a.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:o.a.ChangeType.AllLocal});if(a.insertItem(l),r.notes){var d=i.a.createVMLI({text:r.notes,isNote:!0},{parent:l,changeType:o.a.ChangeType.AllLocal});l.setNote(d,o.a.ChangeType.Local)}for(var c=0;c<r.items.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[c]],l)}};try{a.default.PAssert(681,0===e.unassigned.length,"We should never have unassigned tasks")}catch(p){a.default.reportError(p)}n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var c=i.a.createEmptyDocument("Google Tasks import"),u=c.getRootItem();try{a.default.PAssert(682,u,"Root item must exist in order to import")}catch(p){a.default.reportError(p)}for(var f=0;f<e.roots.length;++f){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;l(e.remoteItems[e.roots[f]],u)}c.parseAll(o.a.ChangeType.Local|o.a.ChangeType.All),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(h){r(void 0,h)}},trelloPreload:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,a.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",function(){a.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",function(){r.trello.isLoading=!1;try{a.default.PAssert(683,window.Trello,"The Trello client lib must have been loaded correctly")}catch(o){a.default.reportError(o)}window.Trello?e():t("Error loading Trello. Please try again.")},function(e){r.trello.isLoading=!1,t(e)})},function(e){r.trello.isLoading=!1,t(e)}))},trelloLogin:function(e,t,r,o){try{a.default.PAssert(684,window.Trello,"The Trello client lib was not properly loaded")}catch(i){a.default.reportError(i)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:o}):o("Error loading Trello. Please try again.")},trelloImport:function(e,t){var r=this,o=[];window.Trello.get("members/me/boards",a.default.wrapFn(function(a){var i=0,s=(a=a||[]).length,n=0;function l(){s===n&&e(o)}function d(e){n++,l()}for(var c=0;c<a.length;++c){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var u=a[c];if(u.closed)s--;else{var f={text:u.name,items:[]};o.push(f),r._handleBoard(f,u.id,t,d)}}l()},t),t)},_handleBoard:function(e,t,r,o){var i=this;window.Trello.get("boards/"+t+"/lists",a.default.wrapFn(function(t){var a=0,s=0,n=t.length;function l(){s===n&&o()}function d(){s++,l()}for(var c=0;c<t.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=t[c];if(u.closed)n--;else{var f={text:u.name,items:[]};e.items.push(f),i._handleList(f,u.id,r,d)}}l()},r),r)},_handleList:function(e,t,r,i){var s=this;window.Trello.get("lists/"+t+"/cards",a.default.wrapFn(function(t){var a=0,n=0,l=t.length;function d(){n===l&&i()}function c(){n++,d()}for(var u=0;u<t.length;++u){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var f=t[u];if(f.closed)l--;else{var p={text:f.name};if(f.labels&&f.labels.length>0){for(var h=0,m="",g=0;g<f.labels.length;++g){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var v=f.labels[g];m+=o.a.TagPrefix+(v.name.length>0?v.name:v.color)+" "}p.text=m+p.text}if(f.due&&(f.date=new Date(f.due)),f.desc&&f.desc.length>0){var w=0;p.items=[];var y=f.desc.split("\n");for(g=0;g<y.length;++g){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var L=y[g];L&&L.length>0&&p.items.push({text:L})}}if(f.idChecklists&&f.idChecklists.length>0){var _=0;p.items||(p.items=[]);for(g=0;g<f.idChecklists.length;++g){if(_++>5e3&&__infLoop&&__infLoop(_))throw new RangeError;s._handleChecklist(p,f.idChecklists[g],r,c)}}else n++;e.items.push(p)}}d()},r),r)},_handleChecklist:function(e,t,r,o){window.Trello.get("checklists/"+t+"/",a.default.wrapFn(function(t){for(var r=0,a={text:t.name,isCollapsed:!0,items:[]},i=0;i<t.checkItems.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var s=t.checkItems[i],n="complete"===s.state;if(!n){var l={text:s.name,isComplete:n};a.items.push(l)}}e.items.push(a),o()},r),r)},trelloSave:function(e,t,r){function s(e,t){var r=i.a.createVMLI({text:e.text,isComplete:e.isComplete,isCollapsed:e.isCollapsed},{parent:t,changeType:o.a.ChangeType.AllLocal});if(t.insertItem(r),e.items)for(var a=0,n=0;n<e.items.length;++n){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e.items[n],r)}return r}try{var l=0;n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var c=i.a.createEmptyDocument("Trello import").getRootItem();try{a.default.PAssert(685,c,"Root item must exist in order to import")}catch(f){a.default.reportError(f)}for(var u=0;u<e.length;++u){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;s(e[u],c)}d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}catch(p){return r(p)}t()},todoistLogin:function(e,t,r,o){try{a.default.PAssert(686,r,"Todoist requires a success callback")}catch(l){a.default.reportError(l)}try{a.default.PAssert(687,o,"Todoist requires an error callback")}catch(l){a.default.reportError(l)}var i="localhost"===window.location.hostname?"5d361221eddb4bcdb018457c7c74e698":"b701ac04f4df419ca4144ab208a9fb06",s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id="+i+"&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");window.addEventListener("message",function e(t){var r=a.default.getLocationOrigin(),i=!1;try{i=t.data.state===s}catch(n){a.default.reportError(n)}r&&i&&(window.removeEventListener("message",e),t.data.error?o("Error authenticating with Todoist"):t.data.code)})},todoistImport:function(e,t){var r=0,o=0;try{a.default.PAssert(688,e,"Todoist requires a success callback")}catch(f){a.default.reportError(f)}try{a.default.PAssert(689,t,"Todoist requires an error callback")}catch(f){a.default.reportError(f)}for(var i=this.todoist.data,s={},n=0;n<i.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var l=i.projects[n];l.is_archived||l.is_deleted||(s[l.id]={id:l.id,name:l.name,items:[],itemMap:{},parent_id:l.parent_id,item_order:l.item_order})}for(var d=[],c=0;c<i.items.length;++c){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var u=i.items[c];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&c>0&&!isNaN(u.indent)&&u.indent>1&&d[u.indent-1]&&(u.parent_id=d[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(d[u.indent]=u))}e(s)},todoistSave:function(e,t,r){var s=[o.a.VMLIFlag.None,o.a.VMLIFlag.None,o.a.VMLIFlag.P2,o.a.VMLIFlag.P1,o.a.VMLIFlag.P0];try{n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var l=i.a.createEmptyDocument("Todoist import").getRootItem();try{a.default.PAssert(690,l,"Root item must exist in order to import")}catch(_){a.default.reportError(_)}var c={},u={},f=function(e,t){var r=u[e.id],a=u[t.id];return r.item_order-a.item_order},p=function e(t,r){if(!c[r.id]){var n=r.parent_id;r.parent_id&&!c[r.id]&&e(t,t.itemMap[r.parent_id]);var l=c[n||r.project_id];try{a.default.PAssert(691,l,"parent item did not exist",n,r.project_id)}catch(_){a.default.reportError(_)}l&&function(e,t,r){t.priority&&(t.priority=s[t.priority]),t.due_date_utc&&(t.content+=" @"+m(new Date(t.due_date_utc)));var a=i.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority},{parent:r,changeType:o.a.ChangeType.AllLocal});c[t.id]=a,u[a.id]=t,r.insertSorted(a,f)}(0,r,l)}},h=function t(r){if(!c[r.id]){var a,s=r.parent_id,n=r.id;s?(c[s]||t(e[s]),a=c[s]):a=l;var d=i.a.createVMLI({text:r.name},{parent:a,changeType:o.a.ChangeType.AllLocal});c[n]=d,u[d.id]=r,a.insertSorted(d,f)}};for(var g in e)if(e.hasOwnProperty(g)){var v=0,w=e[g],y=w.items;h(w);for(var L=0;L<y.length;L++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;p(w,y[L])}}d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}catch(k){return r(k)}t()},_createCSVEntry:function(e,t){for(var r=0,a={},o=0;o<e.length;++o){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a[e[o]]=t[o]}return a},parseCSV:function(e){for(var t=0,r=u.a.parse(e),a=["Area","Client","Contacts","Category","Context","Created By","Date Created","Date Updated","Delegated To","Start Date","Due Date","Links","Notes","Originating Entry","Parent Entries","Priority","Short Description","Title","Star","Status","Website References"],o=[],i=r.data[0],s=0;s<i.length;++s){if(t++>5e3&&__infLoop&&__infLoop(t))throw new RangeError;a.indexOf(i[s])<0?console.log("Unknown CSV Headers: ",i[s]):o.indexOf(i[s])>=0&&o.remove(i[s])}if(0===o.length){var n=0,l=[];for(s=1;s<r.data.length;++s){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;l.push(this._createCSVEntry(i,r.data[s]))}}else var d="Missing required export fields: "+o.join(", ");if(i.indexOf("Short Descrption")<0&&i.indexOf("Title")<0)d="Missing required export fields: Short Descrption OR Title.";return l||d}},t.default=h}}]);
