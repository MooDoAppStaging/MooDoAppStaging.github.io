!function(){function HelperFnsWrapper(){return{fieldMapOut:{a:"isArchived",c:"dateCreated",d:"date",e:"duration",f:"formats",g:"durationText",h:"favorites",i:"items",k:"isNote",l:"modifiedOffline",m:"isCollapsed",n:"note",o:"modifiedOfflineText",p:"priority",q:"dateFormat",r:"repeatDate",s:"dateText",t:"text",u:"versionText",v:"version",x:"isDeleted",z:"isComplete",ai:"archivedItems",ad:"allDayDate",id:"id","*":"isStarred","^":"dateCompleted"},getMapping:function(e,a){var t={};for(var r in e)if(void 0!==e[r]&&null!==e[r]){var n=a[r];n?t[n]=e[r]:t[r]=e[r]}return t},translateObjOut:function(e){return this.getMapping(e,this.fieldMapOut)}}}function WorkerLoaderWrapper(){function c(e,a,t,r,n){postMessage({id:e,done:!!r,data:n,msg:a,stack:t})}function s(e,a){postMessage({id:e,done:!0,data:a})}onmessage=function(o){try{var e=o.data.name,i=o.data.type,a=indexedDB.open(e);a.onupgradeneeded=function(e){c(o.data.id,"No pre-existing DB",void 0,!0),a.transaction.abort()},a.onerror=function(e){e.target&&e.target.error&&e.target.error.code?20!==e.target.error.code&&c(o.data.id,"Error opening DB: "+e.target.error.code,void 0,!0):c(o.data.id,"Error opening DB: Unknown Error",void 0,!0)},a.onsuccess=function(e){var r,n=e.target.result;r="settings"===i?{}:[];var a=n.transaction(i,"readonly");a.oncomplete=function(){if(n.close(),"items"===i)try{for(var e=new Array(r.length),a=0;a<r.length;++a){var t=HelperFnsWrapper_.translateObjOut(r[a]);t?e[a]=t:c(o.data.id,"Failed to translate obj",void 0,!1,r[a])}s(o.data.id,e)}catch(e){c(o.data.id,e.message,e.stack,!0)}else"cache"!==i&&"settings"!==i||s(o.data.id,r)},a.onerror=function(){c(o.data.id,"Transaction error",void 0,!0)},a.onabort=function(){c(o.data.id,"Transaction abort",void 0,!0)};var t=a.objectStore(i);t?t.openCursor().onsuccess=function(e){var a=e.target.result;a&&("settings"===i?r[a.key]=a.value:r.push(a.value),a.continue())}:c(o.data.id,"No items store present",void 0,!0)}}catch(e){c(o.data.id,e.message,e.stack,!0)}}}window.Sca=function(){return{decycle:function(object,callback){var objects=[],paths=[],queuedObjects=[],returnCallback=callback;function checkForCompletion(){0===queuedObjects.length&&returnCallback(derezObj)}function readBlobAsDataURL(e,t){var a=new FileReader;a.onloadend=function(e){var a=e.target.result;File,updateEncodedBlob(a,t,"Blob")},a.readAsDataURL(e)}function updateEncodedBlob(dataURL,path,blobtype){var encoded=queuedObjects.indexOf(path);path=path.replace("$","derezObj"),eval(path+'.$enc="'+dataURL+'"'),eval(path+'.$type="'+blobtype+'"'),queuedObjects.splice(encoded,1),checkForCompletion()}function derez(e,a){var t,r,n;if(!("object"!=typeof e||null===e||e instanceof Boolean||e instanceof Date||e instanceof Number||e instanceof RegExp||e instanceof Blob||e instanceof String)){for(t=0;t<objects.length;t+=1)if(objects[t]===e)return{$ref:paths[t]};if(objects.push(e),paths.push(a),"[object Array]"===Object.prototype.toString.apply(e))for(n=[],t=0;t<e.length;t+=1)n[t]=derez(e[t],a+"["+t+"]");else for(r in n={},e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=derez(e[r],a+"["+JSON.stringify(r)+"]"));return n}return e instanceof Blob?(queuedObjects.push(a),readBlobAsDataURL(e,a)):e instanceof Boolean?e={$type:"Boolean",$enc:e.toString()}:e instanceof Date?e={$type:"Date",$enc:e.getTime()}:e instanceof Number?e={$type:"Number",$enc:e.toString()}:e instanceof RegExp?e={$type:"RegExp",$enc:e.toString()}:"number"==typeof e?e={$type:"number",$enc:e+""}:void 0===e&&(e={$type:"undefined"}),e}var derezObj=derez(object,"$");checkForCompletion()},retrocycle:function retrocycle($){var px=/^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;function dataURLToBlob(e){var a,t,r,n=";base64,";if(-1===e.indexOf(n))return a=(t=e.split(","))[0].split(":")[1],r=t[1],new Blob([r],{type:a});a=(t=e.split(n))[0].split(":")[1];for(var o=(r=window.atob(t[1])).length,i=new Uint8Array(o),c=0;c<o;++c)i[c]=r.charCodeAt(c);return new Blob([i.buffer],{type:a})}function rez(value){var i,item,name,path;if(value&&"object"==typeof value)if("[object Array]"===Object.prototype.toString.apply(value))for(i=0;i<value.length;i+=1)item=value[i],item&&"object"==typeof item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[i]=eval(path):value[i]=rez(item));else if(void 0!==value.$type)switch(value.$type){case"Blob":case"File":value=dataURLToBlob(value.$enc);break;case"Boolean":value=Boolean("true"===value.$enc);break;case"Date":value=new Date(value.$enc);break;case"Number":value=Number(value.$enc);break;case"RegExp":value=eval(value.$enc);break;case"number":value=parseFloat(value.$enc);break;case"undefined":value=void 0}else for(name in value)"object"==typeof value[name]&&(item=value[name],item&&(path=item.$ref,"string"==typeof path&&px.test(path)?value[name]=eval(path):value[name]=rez(item)));return value}return rez($)},encode:function(e,a){this.decycle(e,function(e){a(JSON.stringify(e))})},decode:function(e){return this.retrocycle(JSON.parse(e))}}}();var WorkerFns={createWorkerFromObj:function(e,a,t){var r;try{(r=new Worker(e)).onmessage=a,r.onerror=t}catch(e){console.log("Exception during worker create: ",e)}return r},createWorkerFromFnList:function(e,a,t){var r=[];try{for(var n=0;n<e.length;++n)r.push(e[n].toString()),r.push(e[n].name+"_ = "+e[n].name+"();");return this.createWorkerFromStrings(r,a,t)}catch(e){console.log("Exception during worker source gen: ",e)}},createWorkerFromStrings:function(e,a,t){var r=(window.URL||window.webkitURL).createObjectURL(new Blob(e,{type:"text/javascript"}));return this.createWorkerFromObj(r,a,t)},syncLoad:function(n){try{var o=HelperFnsWrapper();window.openDatabase("duchess",1,"duchess",2097152).readTransaction(function(e){e.executeSql("SELECT * FROM items",[],function(e,a){try{for(var t=new Array(a.rows.length),r=0;r<a.rows.length;++r)t[r]=o.translateObjOut(Sca.decode(a.rows.item(r).value))}catch(e){return n({done:!1,data:void 0,msg:e.message,stack:e.stack})}return n({done:!0,data:t})},function(e,a){return n({done:!1,data:void 0,msg:a.code+": "+a.message})})})}catch(e){return n({done:!1,data:void 0,msg:e.message,stack:e.stack})}}};function shouldRunWorkerPreload(){var e=!1,a=navigator.userAgent;return(-1!==a.indexOf("Chrome")||-1!==a.indexOf("CriOS"))&&-1===a.indexOf("Edge")&&(e=!0),e}function shouldRunSyncPreload(){var e=!1,a=navigator.userAgent;return-1===a.indexOf("iPad")&&-1===a.indexOf("iPhone")||(e=!0),e}window.__preload||(window.__preload={mainLoaded:!1});var cachePreloads=["Gmail","GCalendar"];function runPreload(){var i=window.__preload;if(!i.mainLoaded&&window.location.hash.indexOf("demo=true")<0&&window.location.hash.indexOf("forcesql=true")<0){var a=!1,c=[];function s(e){a?console.log("Skipping second preload: ",e):(a=!0,i.onDataLoaded?i.onDataLoaded(e):i.dataResults=e||[])}if(shouldRunWorkerPreload()){var d=WorkerFns.createWorkerFromFnList([HelperFnsWrapper,WorkerLoaderWrapper],function(a){if(a.data.done){var e=function(e){for(var a=0;a<c.length;++a)if(c[a].id===e)return c.splice(a,1)[0]}(a.data.id);if(e){var t;try{t=a.data.data}catch(e){console.log("Error parsing data returned from worker: ",e)}"items"===e.type?s(t):"cache"===e.type?function(e,a){if(i.cacheCallbacks[e.name]){for(var t=0;t<i.cacheCallbacks.length;++t)try{i.cacheCallbacks[t](a)}catch(e){console.log("Error during cache preload callback: ",e)}i.cachePreloads.remove(e.name)}else i.cacheResults[e.name]=a}(e,t):"settings"===e.type&&(o=t,i.settingsPreload=o)}else console.log("Pending load consumed twice: ",a);0===c.length&&d.terminate()}else{var r=function(e){for(var a=0;a<c.length;++a)if(c[a].id===e)return c[a]}(a.data.id);try{console.log("Worker reported error: ",JSON.stringify(a.data),JSON.stringify(r))}catch(e){console.log("Unable to stringify error: ")}var n=function(){var e={message:a.data.msg};a.data.stack&&(e.stack=a.data.stack),Rollbar.error(e,{raw:a.data.data,req:r})};window.Rollbar?n():setTimeout(n,5e3)}var o},function(e){console.log("Error in worker: ",e),s([])});if(d){var e=0,t={id:++e,name:"duchess",type:"items"};d.postMessage(t),c.push(t);var r={id:++e,name:"duchess",type:"settings"};d.postMessage(r),c.push(r),i.cachePreloads=[],i.cacheResults={},i.cacheCallbacks={};for(var n=0;n<cachePreloads.length;++n){var o={id:++e,name:cachePreloads[n],type:"cache"};d.postMessage(o),c.push(o),i.cachePreloads.push(cachePreloads[n])}i.runDataLoad=!0,i.worker=d}}else if(shouldRunSyncPreload()){i.runDataLoad=!0;try{WorkerFns.syncLoad(function(e){e.done?s(e.data):i.runDataLoad=!1})}catch(e){i.runDataLoad=!1}}}}runPreload()}();