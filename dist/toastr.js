"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),toastr=function(){function e(t){return _classCallCheck(this,e),this.container=null,this.listener=null,this.toastId=0,this.previousToast=void 0,this.options=t,this.toastType={error:"error",info:"info",success:"success",warning:"warning"},this.defaultOptions={tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:1e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"CLOSE",newestOnTop:!0,preventDuplicates:!1,progressBar:!1},this}return _createClass(e,[{key:"getOptions",value:function(){return Object.assign(this.defaultOptions,this.options)}},{key:"getContainer",value:function(e,t){var i=e;return"undefined"==typeof e&&(i=this.getOptions()),this.container=document.getElementById(i.containerId),null!==this.container?this.container:(t&&(this.container=this.createContainer(i)),this.container)}},{key:"isElementVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}},{key:"error",value:function(e,t,i){return this.notify({type:this.toastType.error,iconClass:this.getOptions().iconClasses.error,message:e,optionsOverride:i,title:t})}},{key:"info",value:function(e,t,i){return this.notify({type:this.toastType.info,iconClass:this.getOptions().iconClasses.info,message:e,optionsOverride:i,title:t})}},{key:"success",value:function(e,t,i){return this.notify({type:this.toastType.success,iconClass:this.getOptions().iconClasses.success,message:e,optionsOverride:i,title:t})}},{key:"warning",value:function(e,t,i){return this.notify({type:this.toastType.warning,iconClass:this.getOptions().iconClasses.warning,message:e,optionsOverride:i,title:t})}},{key:"subscribe",value:function(e){this.listener=e}},{key:"clear",value:function(e,t){var i=this.getOptions();null===this.container&&this.getContainer(i,!1),this.clearToast(e,i,t)||this.clearContainer(i)}},{key:"remove",value:function(e){var t=this.getOptions();return"undefined"==typeof this.container&&this.getContainer(t,!1),"undefined"==typeof e&&e.matches(":focus")?void this.removeToast(e):void(this.container.hasChildNodes()||this.container.remove())}},{key:"clearContainer",value:function(e){if(this.container)for(var t=this.container.children.length,i=t-1;i>=0;i-=1){var n=this.container.children[i];this.clearToast(n,e)}}},{key:"clearToast",value:function(e,t,i){if("undefined"!=typeof e){var n=i&&i.force?i.force:!1;if(n||!e.matches(":focus"))return this.removeToast(e),!0}return!1}},{key:"removeToast",value:function(e){"undefined"==typeof this.container&&(this.container=this.getContainer()),this.isElementVisible(e)||(e.parentNode.removeChild(e),null!==e.timeoutId&&clearTimeout(e.timeoutId),e=null,0===this.container.childNodes.length&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),this.previousToast=void 0))}},{key:"createContainer",value:function(e){var t=document.createElement("div");return t.classList.add(e.positionClass),t.setAttribute("id",e.containerId),t.setAttribute("aria-live","polite"),t.setAttribute("role","alert"),this.container=t,document.querySelector(e.target).appendChild(this.container),this.container}},{key:"publish",value:function(e){"undefined"!=typeof this.listener&&null!==this.listener&&this.listener(e)}},{key:"notify",value:function(e){var t=this,i=this.getOptions(),n=e.iconClass||i.iconClass;"undefined"!=typeof e.optionsOverride&&(i=Object.assign(i,e.optionsOverride),n=e.optionsOverride.iconClass||n),this.toastId+=1;var s=this.getContainer(i,!0),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div");l.innerHTML=i.closeHtml;var u=e.message,d=e.title,f={intervalId:null,hideEta:null,maxHideTime:null},h={toastId:this.toastId,state:"visible",startTime:new Date,options:i,map:e},p=null,v=document.createElement("div");v.classList.add(n);var m=function(n,s){if(i.preventDuplicates){if(s.message===t.previousToast)return!0;t.previousToast=e.message}return!1};if(m.call(this,i,e))return null;var g=function(){var e=t.getContainer();if(i.newestOnTop){var n=e.firstChild;e.insertBefore(v,n)}else e.appendChild(v);t.container=e},y=function(e){"undefined"!=typeof e&&(o.innerHTML=e,o.classList.add(i.titleClass),v.appendChild(o))},C=function(e){if(console.log("message recv as",e),"undefined"!=typeof u){var t=document.createElement("div");t.innerHTML=u,a.appendChild(t),a.classList.add(i.messageClass),v.appendChild(a)}},T=function(e){if("undefined"!=typeof i.iconClass){r.classList.add("toast-icon");var t="";switch(e){case"toast-info":t='<i class="fa fa-info-circle"></i>';break;case"toast-warn":t='<i class="fa fa-exclamation-triangle"></i>';break;case"toast-error":t='<i class="fa fa-exclamation-circle"></i>';break;case"toast-success":t='<i class="fa fa-check"></i>'}r.innerHTML=t,v.appendChild(r),v.classList.add(i.toastClass)}},b=function(e){console.log(e),"undefined"!=typeof e&&(e.classList.add("toast-close-button"),e.setAttribute("role","button"),e.setAttribute("type","button"),v.appendChild(e))},w=function(){"undefined"!=typeof i.progressBar&&i.progressBar&&(c.classList.add("toast-progress"),v.appendChild(c))},O=function(){T(n),y(d),C(u),b(l),w()},k=function(e,t){var n=e.animate([{opacity:0},{opacity:1}],{duration:i.showDuration,iterations:1,delay:0});n.onfinish=t},E=function(e,t){var n=e.animate([{opacity:1},{opacity:0}],{duration:i.hideDuration,iterations:1,delay:0});n.onfinish=t},L=function(e){if(null!==v&&(!v.matches(":focus")||e)){clearInterval(f.intervalId),console.log("Hiding toast now.",v),"function"==typeof i.onHidden&&i.onHidden();var n=function(e){if(console.log("Toast is now hiding.",e),null!==v){var i=v.parentNode;null!==i&&(i.removeChild(v),i.hasChildNodes()||(s.parentNode.removeChild(s),t.previousToast=void 0)),v=null}};E(v,n)}},H=function(){var e=f.hideEta-(new Date).getTime(),t=e/f.maxHideTime*100;c.style.width=t+"%"},I=function(){console.log("Appending toast to container.",v),g.call(t),"function"==typeof i.onShown&&i.onShown();var e=function(e){console.log("Toast animation in completed.",e),i.timeOut>0&&(p=setTimeout(L,i.timeOut),f.maxHideTime=parseFloat(i.timeOut),f.hideEta=(new Date).getTime()+f.maxHideTime,i.progressBar&&(f.intervalId=setInterval(H,10)))};k(v,e)},x=function(){(i.timeOut>0||i.extendedTimeOut>0)&&(p=setTimeout(L,i.extendedTimeOut),f.maxHideTime=parseFloat(i.extendedTimeOut),f.hideEta=(new Date).getTime()+f.maxHideTime)},D=function(){clearTimeout(p),f.hideEta=0},B=function(){v.addEventListener("mouseover",D),v.addEventListener("mouseout",x),!i.onclick&&i.tapToDismiss&&v.addEventListener("click",L),i.closeButton&&l&&l.addEventListener("click",function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),L(!0)}),i.onclick&&v.addEventListener("click",function(){i.onclick(),L()})};return O.call(this),I.call(this),B(),this.publish(h),i.debug&&console&&console.log(h),v}}]),e}();"undefined"!=typeof window&&(window.toastr=toastr);
//# sourceMappingURL=toastr.js.map