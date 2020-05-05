if (self.CavalryLogger) { CavalryLogger.start_js(["HmfV6"]); }

__d("FBJSON",[],(function(a,b,c,d,e,f){e.exports={parse:JSON.parse,stringify:JSON.stringify}}),null);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g={register:function(a,c){a.setAttribute("data-ownerid",b("getOrCreateDOMID")(c))},containsIncludingLayers:function(a,c){c=c;while(c){if(b("containsNode")(a,c))return!0;c=g.getContext(c)}return!1},getContext:function(a){a=a;var c;while(a){if(a.getAttribute&&(c=a.getAttribute("data-ownerid")))return b("ge")(c);a=a.parentNode}return null},parentByClass:function(a,c){a=a;var d;while(a&&!b("CSS").hasClass(a,c))a.getAttribute&&(d=a.getAttribute("data-ownerid"))?a=b("ge")(d):a=a.parentNode;return a}};e.exports=g}),null);
__d("FbtResultBase",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!1;a=function(){__p&&__p();function a(a){h||g(0,12919),this.$1=a,this.$2=null}var b=a.prototype;b.flattenToArray=function(){return a.flattenToArray(this.$1)};b.getContents=function(){return this.$1};b.onStringSerializationError=function(a){throw new Error("This method needs to be overridden by a child class")};b.toString=function(){if(this.$2!=null)return this.$2;var b="",c=this.flattenToArray();for(var d=0;d<c.length;++d){var e=c[d];typeof e==="string"||e instanceof a?b+=e.toString():this.onStringSerializationError(e)}Object.isFrozen(this)||(this.$2=b);return b};b.toJSON=function(){return this.toString()};a.flattenToArray=function(b){var c=[];for(var d=0;d<b.length;++d){var e=b[d];Array.isArray(e)?c.push.apply(c,a.flattenToArray(e)):e instanceof a?c.push.apply(c,e.flattenToArray()):c.push(e)}return c};a.usingStringProxyMethod=function(a){var b=this;["anchor","big","blink","bold","charAt","charCodeAt","codePointAt","contains","endsWith","fixed","fontcolor","fontsize","includes","indexOf","italics","lastIndexOf","link","localeCompare","match","normalize","repeat","replace","search","slice","small","split","startsWith","strike","sub","substr","substring","sup","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"].forEach(function(c){b.prototype[c]=a(c)});h=!0;return b};return a}();e.exports=a}),null);
__d("UserAgent_DEPRECATED",[],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;function x(){__p&&__p();if(g)return;g=!0;var a=navigator.userAgent,b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),c=/(Mac OS X)|(Windows)|(Linux)/.exec(a);s=/\b(iPhone|iP[ao]d)/.exec(a);t=/\b(iP[ao]d)/.exec(a);q=/Android/i.exec(a);u=/FBAN\/\w+;/i.exec(a);v=/FBAN\/mLite;/i.exec(a);w=/Mobile/i.exec(a);r=!!/Win64/.exec(a);if(b){h=b[1]?parseFloat(b[1]):b[5]?parseFloat(b[5]):NaN;h&&document&&document.documentMode&&(h=document.documentMode);var d=/(?:Trident\/(\d+.\d+))/.exec(a);m=d?parseFloat(d[1])+4:h;i=b[2]?parseFloat(b[2]):NaN;j=b[3]?parseFloat(b[3]):NaN;k=b[4]?parseFloat(b[4]):NaN;k?(b=/(?:Chrome\/(\d+\.\d+))/.exec(a),l=b&&b[1]?parseFloat(b[1]):NaN):l=NaN}else h=i=j=l=k=NaN;if(c){if(c[1]){d=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);n=d?parseFloat(d[1].replace("_",".")):!0}else n=!1;o=!!c[2];p=!!c[3]}else n=o=p=!1}var y={ie:function(){return x()||h},ieCompatibilityMode:function(){return x()||m>h},ie64:function(){return y.ie()&&r},firefox:function(){return x()||i},opera:function(){return x()||j},webkit:function(){return x()||k},safari:function(){return y.webkit()},chrome:function(){return x()||l},windows:function(){return x()||o},osx:function(){return x()||n},linux:function(){return x()||p},iphone:function(){return x()||s},mobile:function(){return x()||s||t||q||w},nativeApp:function(){return x()||v!=null?null:u},android:function(){return x()||q},ipad:function(){return x()||t}};e.exports=y}),null);
__d("isScalar",[],(function(a,b,c,d,e,f){function a(a){return/string|number|boolean/.test(typeof a)}e.exports=a}),null);
__d("DOM",["DOMQuery","Event","FBLogger","FbtResultBase","HTML","TAAL","UserAgent_DEPRECATED","$","createArrayFromMixed","isNode","isScalar","isTextNode"],(function(a,b,c,d,e,f){__p&&__p();var g=babelHelpers["extends"]({},b("DOMQuery"),{create:function(a,b,c){a=document.createElement(a);b&&g.setAttributes(a,b);c!=null&&g.setContent(a,c);return a},setAttributes:function(a,c){c.type&&(a.type=c.type);for(var d in c){var e=c[d],f=/^on/i.test(d);f&&typeof e!=="function"&&b("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",d,typeof e);if(d=="type")continue;else d=="style"?typeof e==="string"?a.style.cssText=e:Object.assign(a.style,e):f?b("Event").listen(a,d.substr(2),e):d in a?a[d]=e:a.setAttribute&&a.setAttribute(d,e)}},prependContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));return i(c,a,function(b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)})},insertAfter:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){a.nextSibling?d.insertBefore(b,a.nextSibling):d.appendChild(b)})},insertBefore:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){d.insertBefore(b,a)})},setContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));while(a.firstChild)h(a.firstChild);return g.appendContent(a,c)},appendContent:function(a,c){if(!a)throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));return i(c,a,function(b){a.appendChild(b)})},replace:function(a,c){if(!a||!a.parentNode)throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));var d=a.parentNode;return i(c,d,function(b){d.replaceChild(b,a)})},remove:function(a){h(typeof a==="string"?b("$")(a):a)},empty:function(a){a=typeof a==="string"?b("$")(a):a;while(a.firstChild)h(a.firstChild)}});Object.assign(g,b("DOMQuery"));function h(a){a.parentNode&&a.parentNode.removeChild(a)}function i(a,c,d){__p&&__p();a=b("HTML").replaceJSONWrapper(a);if(a instanceof b("HTML")&&c.firstChild===null&&-1===a.toString().indexOf("<script")){var e=b("UserAgent_DEPRECATED").ie();if(!e||e>7&&!b("DOMQuery").isNodeOfType(c,["table","tbody","thead","tfoot","tr","select","fieldset"])){var f=e?'<em style="display:none;">&nbsp;</em>':"";c.innerHTML=f+a;e&&c.removeChild(c.firstChild);return Array.from(c.childNodes)}}else if(b("isTextNode")(c)){c.data=a;return[a]}f=document.createDocumentFragment();var g;e=[];c=[];a=b("createArrayFromMixed")(a);a.length===1&&a[0]instanceof b("FbtResultBase")&&(a=a[0].getContents());for(var h=0;h<a.length;h++){g=b("HTML").replaceJSONWrapper(a[h]);if(g instanceof b("HTML")){c.push(g.getAction());var i=g.getNodes();for(var j=0;j<i.length;j++)e.push(i[j]),f.appendChild(i[j])}else if(b("isScalar")(g)||g instanceof b("FbtResultBase")){j=document.createTextNode(g);e.push(j);f.appendChild(j)}else b("isNode")(g)?(e.push(g),f.appendChild(g)):(Array.isArray(g)&&b("FBLogger")("dom").warn("Nest arrays not supported"),g!==null&&b("FBLogger")("dom").warn("No way to set content %s",g))}d(f);c.forEach(function(a){a()});return e}e.exports=g}),null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function g(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");j(k.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function h(){j(k.ONLOAD_HOOK),window.loaded=!0}function i(a,c){return b("ErrorUtils").applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function j(a){__p&&__p();var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=i(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,j("onloadhooks")),window.loaded||(window.loaded=!0,j("onafterloadhooks"))}function d(){b("Arbiter").registerCallback(g,[b("PageEvents").BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]),b("Arbiter").registerCallback(h,[b("PageEvents").BIGPIPE_DOMREADY,b("PageEvents").BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]),b("Arbiter").subscribe(b("PageEvents").NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=j("onbeforeleavehooks")||j("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new"),b("Arbiter").subscribe(b("PageEvents").NATIVE_ONUNLOAD,function(a,b){j("onunloadhooks"),j("onafterunloadhooks")},"new")}var k=babelHelpers["extends"]({_domreadyHook:g,_onloadHook:h,runHook:i,runHooks:j,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=k}),null);
__d("BasicVector",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b){this.x=a,this.y=b}var b=a.prototype;b.derive=function(b,c){return new a(b,c)};b.toString=function(){return"("+this.x+", "+this.y+")"};b.add=function(a,b){b===void 0&&(b=a.y,a=a.x);a=parseFloat(a);b=parseFloat(b);return this.derive(this.x+a,this.y+b)};b.mul=function(a,b){b===void 0&&(b=a);return this.derive(this.x*a,this.y*b)};b.div=function(a,b){b===void 0&&(b=a);return this.derive(this.x*1/a,this.y*1/b)};b.sub=function(a,b){if(arguments.length===1)return this.add(a.mul(-1));else return this.add(-a,-b)};b.distanceTo=function(a){return this.sub(a).magnitude()};b.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};b.rotate=function(a){return this.derive(this.x*Math.cos(a)-this.y*Math.sin(a),this.x*Math.sin(a)+this.y*Math.cos(a))};return a}();e.exports=a}),null);
__d("DOMVector",["BasicVector","getDocumentScrollElement","getElementPosition","getUnboundedScrollPosition","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d){b=a.call(this,b,c)||this;b.domain=d||"pure";return b}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.add=function(b,d){b instanceof c&&b.getDomain()!=="pure"&&(b=b.convertTo(this.domain));return a.prototype.add.call(this,b,d)};d.convertTo=function(a){__p&&__p();if(a!="pure"&&a!="viewport"&&a!="document")return this.derive(0,0);if(a==this.domain)return this.derive(this.x,this.y,this.domain);if(a=="pure")return this.derive(this.x,this.y);if(this.domain=="pure")return this.derive(0,0);var b=c.getScrollPosition("document"),d=this.x,e=this.y;this.domain=="document"?(d-=b.x,e-=b.y):(d+=b.x,e+=b.y);return this.derive(d,e,a)};d.getDomain=function(){return this.domain};c.from=function(a,b,d){return new c(a,b,d)};c.getScrollPosition=function(a){a=a||"document";var c=b("getUnboundedScrollPosition")(window);return this.from(c.x,c.y,"document").convertTo(a)};c.getElementPosition=function(a,c){c=c||"document";a=b("getElementPosition")(a);return this.from(a.x,a.y,"viewport").convertTo(c)};c.getElementDimensions=function(a){return this.from(a.offsetWidth||0,a.offsetHeight||0)};c.getViewportDimensions=function(){var a=b("getViewportDimensions")();return this.from(a.width,a.height,"viewport")};c.getViewportWithoutScrollbarDimensions=function(){var a=b("getViewportDimensions").withoutScrollbars();return this.from(a.width,a.height,"viewport")};c.getDocumentDimensions=function(a){a=b("getDocumentScrollElement")(a);return this.from(a.scrollWidth,a.scrollHeight,"document")};return c}(b("BasicVector"));e.exports=a}),null);
__d("Vector",["DOMVector","Event","Scroll"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d){return a.call(this,parseFloat(b),parseFloat(c),d)||this}var d=c.prototype;d.derive=function(a,b,d){return new c(a,b,d||this.domain)};d.setElementPosition=function(a){var b=this.convertTo("document");a.style.left=parseInt(b.x,10)+"px";a.style.top=parseInt(b.y,10)+"px";return this};d.setElementDimensions=function(a){return this.setElementWidth(a).setElementHeight(a)};d.setElementWidth=function(a){a.style.width=parseInt(this.x,10)+"px";return this};d.setElementHeight=function(a){a.style.height=parseInt(this.y,10)+"px";return this};d.scrollElementBy=function(a){a==document.body?window.scrollBy(this.x,this.y):(b("Scroll").setLeft(a,b("Scroll").getLeft(a)+this.x),b("Scroll").setTop(a,b("Scroll").getTop(a)+this.y));return this};c.from=function(a,b,d){return new c(a,b,d)};c.getEventPosition=function(a,c){c=c||"document";a=b("Event").getPosition(a);a=this.from(a.x,a.y,"document");return a.convertTo(c)};c.getTouchEventPosition=function(a,b){b===void 0&&(b="document");a=a.touches[0];a=this.from(a.pageX,a.pageY,"document");return a.convertTo(b)};c.deserialize=function(a){a=a.split(",");return this.from(a[0],a[1])};return c}(b("DOMVector"));e.exports=a}),null);
__d("EventListener",["Event","TimeSlice","emptyFunction","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d,e){d=b("TimeSlice").guard(d,"EventListener capture "+c);if(a.addEventListener){a.addEventListener(c,d,e);return{remove:function(){a.removeEventListener(c,d,e)}}}else return{remove:b("emptyFunction")}}a={listen:b("Event").listen,capture:function(a,b,c){return g(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{passive:d,capture:!0})},registerDefault:function(a,c){var d,e=b("Event").listen(document.documentElement,a,f,b("Event").Priority._BUBBLE);function f(){g(),d=b("Event").listen(document,a,c),b("setImmediateAcrossTransitions")(g)}function g(){d&&d.remove(),d=null}return{remove:function(){g(),e&&e.remove(),e=null}}}};e.exports=a}),null);
__d("Banzai",["requireCond","cr:682513"],(function(a,b,c,d,e,f){e.exports=b("cr:682513")}),null);
__d("BanzaiODS",["invariant","Banzai","Random"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.$1={},this.$2={}}var c=a.prototype;c.setEntitySample=function(a,c){this.$2[a]=b("Random").random()<c?c:0};c.bumpEntityKey=function(a,b,c){c===void 0&&(c=1),this.$3(a,b,c)};c.bumpFraction=function(a,b,c,d){c===void 0&&(c=1),d===void 0&&(d=1),this.$3(a,b,c,d)};c.flush=function(a){for(var c in this.$1)b("Banzai").post("ods:"+c,this.$1[c],a);this.$1={}};c.create=function(){return new a()};c.$3=function(a,b,c,d){__p&&__p();c===void 0&&(c=1);d===void 0&&(d=1);if(a in this.$2){if(this.$2[a]<=0)return;c/=this.$2[a]}var e=this.$1[a]||(this.$1[a]={}),f=e[b]||(e[b]=[0]);c=Number(c);d=Number(d);if(!isFinite(c)||!isFinite(d))return;f[0]+=c;arguments.length>=4&&(f[1]||(f[1]=0),f[1]+=d)};return a}();var h=new a();b("Banzai").subscribe(b("Banzai").SEND,function(){return h.flush()});e.exports=h}),null);
__d("BanzaiScuba",["Banzai","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="scuba_sample";a=function(){"use strict";__p&&__p();function a(a,c,d){this.posted=!1,a||b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=c,this.options=d}var c=a.prototype;c.$2=function(a,c,d){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[c]=d;return a};c.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};c.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};c.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};c.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};c.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};c.post=function(a){__p&&__p();if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var c={};c._ds=this.dataset;c._options=this.options;this.normal&&(c.normal=this.normal);this["int"]&&(c["int"]=this["int"]);this.denorm&&(c.denorm=this.denorm);this.tags&&(c.tags=this.tags);this.normvector&&(c.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(c._lid=this.$1);b("Banzai").post(g,c,a);this.posted=!0};return a}();e.exports=a}),null);
__d("GeneratedLoggerUtils",["invariant","Banzai"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("Banzai").post;window.location.search.indexOf("showlog")>-1&&(a=function(a,c,d){b("Banzai").post(a,c,d)});c={log:a,serializeVector:function(a){__p&&__p();if(!a)return a;if(Array.isArray(a))return a;if(a.toArray){var b=a;return b.toArray()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"])return Array.from(a);g(0,3874,a)},serializeMap:function(a){__p&&__p();if(!a)return a;if(a.toJS){var b=a;return b.toJS()}if(typeof a==="object"&&a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]){b=a;var c={};for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;c[f[0]]=f[1]}return c}if(Object.prototype.toString.call(a)==="[object Object]")return a;g(0,3875,a)},checkExtraDataFieldNames:function(a,b){Object.keys(a).forEach(function(a){Object.prototype.hasOwnProperty.call(b,a)&&g(0,3876,a)})},warnForInvalidFieldNames:function(a,b,c,d){},throwIfNull:function(a,b){a||g(0,3877,b);return a}};e.exports=c}),null);
__d("QueryString",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();var b=[];Object.keys(a).sort().forEach(function(c){var d=a[c];if(d===void 0)return;if(d===null){b.push(c);return}b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))});return b.join("&")}function b(a,b){__p&&__p();b===void 0&&(b=!1);var c={};if(a==="")return c;a=a.split("&");for(var d=0;d<a.length;d++){var e=a[d].split("=",2),f=decodeURIComponent(e[0]);if(b&&Object.prototype.hasOwnProperty.call(c,f))throw new URIError("Duplicate key: "+f);c[f]=e.length===2?decodeURIComponent(e[1]):null}return c}function c(a,b){return a+(a.indexOf("?")!==-1?"&":"?")+(typeof b==="string"?b:g.encode(b))}var g={encode:a,decode:b,appendToUrl:c};e.exports=g}),null);
__d("SessionName",["SessionNameConfig"],(function(a,b,c,d,e,f){e.exports={getName:function(){return b("SessionNameConfig").seed}}}),null);
__d("camelize",[],(function(a,b,c,d,e,f){var g=/-(.)/g;function a(a){return a.replace(g,function(a,b){return b.toUpperCase()})}e.exports=a}),null);
__d("CurrentUser",["Cookie","CurrentUserInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g={getID:function(){return b("CurrentUserInitialData").USER_ID},getAccountID:function(){return b("CurrentUserInitialData").ACCOUNT_ID},getWorkUserID:function(){return b("CurrentUserInitialData").WORK_USER_ID},getName:function(){return b("CurrentUserInitialData").NAME},getShortName:function(){return b("CurrentUserInitialData").SHORT_NAME},isLoggedIn:function(){return b("CurrentUserInitialData").USER_ID!=="0"},isLoggedInNow:function(){if(!g.isLoggedIn())return!1;if(b("CurrentUserInitialData").IS_INTERN_SITE)return!0;if(b("CurrentUserInitialData").IS_WORK_USER)return!0;return b("CurrentUserInitialData").ORIGINAL_USER_ID?b("CurrentUserInitialData").ORIGINAL_USER_ID===b("Cookie").get("c_user"):b("CurrentUserInitialData").USER_ID===b("Cookie").get("c_user")},isEmployee:function(){return!!b("CurrentUserInitialData").IS_EMPLOYEE},isTestUser:function(){return!!b("CurrentUserInitialData").IS_TEST_USER},hasWorkUser:function(){return!!b("CurrentUserInitialData").HAS_WORK_USER},isWorkUser:function(){return!!b("CurrentUserInitialData").IS_WORK_USER},isGray:function(){return!!b("CurrentUserInitialData").IS_GRAY},isUnderage:function(){return!!b("CurrentUserInitialData").IS_UNDERAGE},isMessengerOnlyUser:function(){return!!b("CurrentUserInitialData").IS_MESSENGER_ONLY_USER},isDeactivatedAllowedOnMessenger:function(){return!!b("CurrentUserInitialData").IS_DEACTIVATED_ALLOWED_ON_MESSENGER}};e.exports=g}),null);
__d("forEachObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;g.call(a,e)&&b.call(c,a[e],e,a)}}e.exports=a}),null);
__d("keyMirror",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c={};if(!(a instanceof Object&&!Array.isArray(a)))throw b("unrecoverableViolation")("keyMirror(...): Argument must be an object.","comet_infra");for(var d in a){if(!Object.prototype.hasOwnProperty.call(a,d))continue;c[d]=d}return c}e.exports=a}),null);
__d("escapeRegex",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")}e.exports=a}),null);
__d("RecaptchaV2Constants",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RESIZE_IFRAME:null,CAPTCHA_SOLVED:null,GET_ORIGIN:null});e.exports={RecaptchaV2IFrameMessageTypes:a}}),null);
__d("killswitch",["KSConfig"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("KSConfig").killed.has(a)}a.override=function(a,c){c?b("KSConfig").killed.add(a):b("KSConfig").killed["delete"](a)};e.exports=a}),null);
__d("LogHistory",[],(function(a,b,c,d,e,f){__p&&__p();var g=500,h={},i=[];function j(a,b,c,d){var e=d[0];if(typeof e!=="string"||d.length!==1)return;i.push({date:Date.now(),level:a,category:b,event:c,args:e});i.length>g&&i.shift()}var k=function(){"use strict";__p&&__p();function a(a){this.category=a}var b=a.prototype;b.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("debug",this.category,a,c);return this};b.log=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("log",this.category,a,c);return this};b.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("warn",this.category,a,c);return this};b.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];j("error",this.category,a,c);return this};return a}();function a(a){h[a]||(h[a]=new k(a));return h[a]}function b(){return i}function c(){i.length=0}function d(a){return a.map(function(a){var b=/\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());return[b&&b[0],a.level,a.category,a.event,a.args].join(" | ")}).join("\n")}f={getInstance:a,getEntries:b,clearEntries:c,formatEntries:d};e.exports=f}),null);
__d("cancelIdleCallback",["requireCond","cr:692209"],(function(a,b,c,d,e,f){e.exports=b("cr:692209")}),null);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","ex"],(function(a,b,c,d,e,f,g){__p&&__p();function h(){if(!b("ExecutionEnvironment").canUseDOM)throw new Error(b("ex")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment."));try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw new Error(b("ex")("getCrossOriginTransport: %s",a.message))}}h.withCredentials=function(){var a=h();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=h}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g={rewriteURI:function(a){if(!b("isFacebookURI")(a)||g._isWhitelisted(a))return a;var c=g._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return g.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=g._getCurrentURI().getDomain(),d=new(b("URI"))(a).qualify().getDomain();return c===d||g.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||g._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=g._getCurrentURI(),e=g._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(b("URI"))("/").qualify()}};e.exports=g}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a}),null);