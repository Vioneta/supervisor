"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1036],{31036:function(e,t,n){var a,r,i,o,s,d,u,c,l,h,p,v,f=n(99312),k=n(81043),_=n(88962),y=n(33368),m=n(71650),g=n(82390),b=n(69205),w=n(70906),Z=n(91808),x=n(34541),C=n(47838),S=(n(44577),n(68144)),T=n(79932),z=n(14516),I=n(47181),B=(n(98762),n(9381),n(81545),n(22098),n(32511),n(83448)),H=((0,Z.Z)([(0,T.Mo)("ha-faded")],(function(e,t){var n=function(t){(0,b.Z)(a,t);var n=(0,w.Z)(a);function a(){var t;(0,m.Z)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,g.Z)(t)),t}return(0,y.Z)(a)}(t);return{F:n,d:[{kind:"field",decorators:[(0,T.Cb)({type:Number,attribute:"faded-height"})],key:"fadedHeight",value:function(){return 102}},{kind:"field",decorators:[(0,T.SB)()],key:"_contentShown",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,S.dy)(a||(a=(0,_.Z)([' <div class="container ','" style="','" @click="','"> <slot @iron-resize="','"></slot> </div> '])),(0,B.$)({faded:!this._contentShown}),this._contentShown?"":"max-height: ".concat(this.fadedHeight,"px"),this._showContent,this._setShowContent)}},{kind:"get",key:"_slottedHeight",value:function(){var e;return(null===(e=this.shadowRoot.querySelector(".container"))||void 0===e?void 0:e.firstElementChild).assignedElements().reduce((function(e,t){return e+t.offsetHeight}),0)||0}},{kind:"method",key:"_setShowContent",value:function(){var e=this._slottedHeight;this._contentShown=0!==e&&e<=this.fadedHeight+50}},{kind:"method",key:"firstUpdated",value:function(e){(0,x.Z)((0,C.Z)(n.prototype),"firstUpdated",this).call(this,e),this._setShowContent()}},{kind:"method",key:"_showContent",value:function(){this._contentShown=!0}},{kind:"get",static:!0,key:"styles",value:function(){return(0,S.iv)(r||(r=(0,_.Z)([".container{display:block;height:auto;cursor:default}.faded{cursor:pointer;-webkit-mask-image:linear-gradient(to bottom,#000 25%,transparent 100%);mask-image:linear-gradient(to bottom,#000 25%,transparent 100%);overflow-y:hidden}"])))}}]}}),S.oi),n(83927),n(5666),n(65189),n(14089),n(52039),n(30172),n(34154)),E=n(41682),A=n(35460),N=n(69810),M=n(51283),L=n(26765),D=n(34450),j={core:"Home Assistant Core",os:"Home Assistant Operating System",supervisor:"Home Assistant Supervisor"};(0,Z.Z)([(0,T.Mo)("update-available-card")],(function(e,t){var n,a,r,Z,B,R=function(t){(0,b.Z)(a,t);var n=(0,w.Z)(a);function a(){var t;(0,m.Z)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,g.Z)(t)),t}return(0,y.Z)(a)}(t);return{F:R,d:[{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,T.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,T.Cb)({attribute:!1})],key:"addonSlug",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_updateType",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_changelogContent",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_addonInfo",value:void 0},{kind:"field",decorators:[(0,T.SB)()],key:"_updating",value:function(){return!1}},{kind:"field",decorators:[(0,T.SB)()],key:"_error",value:void 0},{kind:"field",key:"_addonStoreInfo",value:function(){return(0,z.Z)((function(e,t){return t.find((function(t){return t.slug===e}))}))}},{kind:"method",key:"render",value:function(){if(!this._updateType||"addon"===this._updateType&&!this._addonInfo)return S.Ld;var e=function(e,t){if("addon"!==e)return"core"===e?t.includes("dev")?"https://github.com/home-assistant/core/commits/dev":t.includes("b")?"https://next.home-assistant.io/latest-release-notes/":"https://www.home-assistant.io/latest-release-notes/":"os"===e?t.includes("dev")?"https://github.com/home-assistant/operating-system/commits/dev":"https://github.com/home-assistant/operating-system/releases/tag/".concat(t):"supervisor"===e?t.includes("dev")?"https://github.com/home-assistant/supervisor/commits/main":"https://github.com/home-assistant/supervisor/releases/tag/".concat(t):void 0}(this._updateType,this._version_latest);return(0,S.dy)(i||(i=(0,_.Z)([' <ha-card outlined .header="','"> <div class="card-content"> '," "," </div> "," </ha-card> "])),this.supervisor.localize("update_available.update_name",{name:this._name}),this._error?(0,S.dy)(o||(o=(0,_.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._version===this._version_latest?(0,S.dy)(s||(s=(0,_.Z)(["<p> "," </p>"])),this.supervisor.localize("update_available.no_update",{name:this._name})):this._updating?(0,S.dy)(l||(l=(0,_.Z)(['<ha-circular-progress alt="Updating" size="large" active> </ha-circular-progress> <p class="progress-text"> '," </p>"])),this.supervisor.localize("update_available.updating",{name:this._name,version:this._version_latest})):(0,S.dy)(d||(d=(0,_.Z)([" ",' <div class="versions"> <p> '," </p> </div> "," "])),this._changelogContent?(0,S.dy)(u||(u=(0,_.Z)([' <ha-faded> <ha-markdown .content="','"> </ha-markdown> </ha-faded> '])),this._changelogContent):"",this.supervisor.localize("update_available.description",{name:this._name,version:this._version,newest_version:this._version_latest}),["core","addon"].includes(this._updateType)?(0,S.dy)(c||(c=(0,_.Z)([' <ha-formfield .label="','"> <ha-checkbox checked="checked"></ha-checkbox> </ha-formfield> '])),this.supervisor.localize("update_available.create_backup")):""),this._version===this._version_latest||this._updating?"":(0,S.dy)(h||(h=(0,_.Z)([' <div class="card-actions"> ',' <span></span> <ha-progress-button @click="','" raised> '," </ha-progress-button> </div> "])),e?(0,S.dy)(p||(p=(0,_.Z)(['<a .href="','" target="_blank" rel="noreferrer"> <mwc-button .label="','"> </mwc-button> </a>'])),e,this.supervisor.localize("update_available.open_release_notes")):"",this._update,this.supervisor.localize("common.update")))}},{kind:"method",key:"firstUpdated",value:function(e){var t;(0,x.Z)((0,C.Z)(R.prototype),"firstUpdated",this).call(this,e);var n=null===(t=this.route)||void 0===t?void 0:t.path.substring(1,this.route.path.length),a=["core","os","supervisor"].includes(n)?n:"addon";switch(this._updateType=a,a){case"addon":this.addonSlug||(this.addonSlug=n),this._loadAddonData();break;case"core":this._loadCoreData();break;case"supervisor":this._loadSupervisorData();break;case"os":this._loadOsData()}}},{kind:"get",key:"_shouldCreateBackup",value:function(){var e;if(this._updateType&&!["core","addon"].includes(this._updateType))return!1;var t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-checkbox");return!t||t.checked}},{kind:"get",key:"_version",value:function(){var e;return this._updateType?"addon"===this._updateType?this._addonInfo.version:(null===(e=this.supervisor[this._updateType])||void 0===e?void 0:e.version)||"":""}},{kind:"get",key:"_version_latest",value:function(){var e;return this._updateType?"addon"===this._updateType?this._addonInfo.version_latest:(null===(e=this.supervisor[this._updateType])||void 0===e?void 0:e.version_latest)||"":""}},{kind:"get",key:"_name",value:function(){return this._updateType?"addon"===this._updateType?this._addonInfo.name:j[this._updateType]:""}},{kind:"method",key:"_loadAddonData",value:(B=(0,k.Z)((0,f.Z)().mark((function e(){var t,n;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,H.AD)(this.hass,this.addonSlug);case 3:this._addonInfo=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),(0,L.Ys)(this,{title:this._updateType,text:(0,E.js)(e.t0)}),e.abrupt("return");case 10:if(t=this._addonInfo.detached||this._addonInfo.available?void 0:this._addonStoreInfo(this._addonInfo.slug,this.supervisor.store.addons),!this._addonInfo.changelog){e.next=23;break}return e.prev=12,e.next=15,(0,H.CH)(this.hass,this.addonSlug);case 15:n=e.sent,this._changelogContent=(0,D.H)(this._addonInfo,n),e.next=23;break;case 19:return e.prev=19,e.t1=e.catch(12),this._error=(0,E.js)(e.t1),e.abrupt("return");case 23:!this._addonInfo.available&&t&&((0,D.I)(this.supervisor.info.supported_arch,this._addonInfo.arch)?this._error=this.supervisor.localize("addon.dashboard.not_available_version",{core_version_installed:this.supervisor.core.version,core_version_needed:t.homeassistant}):this._error=this.supervisor.localize("addon.dashboard.not_available_arch"));case 24:case"end":return e.stop()}}),e,this,[[0,6],[12,19]])}))),function(){return B.apply(this,arguments)})},{kind:"method",key:"_loadSupervisorData",value:(Z=(0,k.Z)((0,f.Z)().mark((function e(){var t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.CP)(this.hass);case 3:t=e.sent,(0,I.B)(this,"supervisor-update",{supervisor:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,L.Ys)(this,{title:this._updateType,text:(0,E.js)(e.t0)});case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return Z.apply(this,arguments)})},{kind:"method",key:"_loadCoreData",value:(r=(0,k.Z)((0,f.Z)().mark((function e(){var t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.qs)(this.hass);case 3:t=e.sent,(0,I.B)(this,"supervisor-update",{core:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,L.Ys)(this,{title:this._updateType,text:(0,E.js)(e.t0)});case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_loadOsData",value:(a=(0,k.Z)((0,f.Z)().mark((function e(){var t;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,A.AP)(this.hass);case 3:t=e.sent,(0,I.B)(this,"supervisor-update",{os:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,L.Ys)(this,{title:this._updateType,text:(0,E.js)(e.t0)});case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_update",value:(n=(0,k.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._shouldCreateBackup||"freeze"!==this.supervisor.info.state){e.next=3;break}return this._error=this.supervisor.localize("backup.backup_already_running"),e.abrupt("return");case 3:if(this._error=void 0,this._updating=!0,e.prev=5,"addon"!==this._updateType){e.next=11;break}return e.next=9,(0,H.V_)(this.hass,this.addonSlug,this._shouldCreateBackup);case 9:e.next=24;break;case 11:if("core"!==this._updateType){e.next=16;break}return e.next=14,(0,M.y)(this.hass,this._shouldCreateBackup);case 14:e.next=24;break;case 16:if("os"!==this._updateType){e.next=21;break}return e.next=19,(0,A.Fu)(this.hass);case 19:e.next=24;break;case 21:if("supervisor"!==this._updateType){e.next=24;break}return e.next=24,(0,N.CG)(this.hass);case 24:e.next=32;break;case 26:if(e.prev=26,e.t0=e.catch(5),!this.hass.connection.connected||(0,E.yz)(e.t0)){e.next=32;break}return this._error=(0,E.js)(e.t0),this._updating=!1,e.abrupt("return");case 32:(0,I.B)(this,"update-complete"),this._updating=!1;case 34:case"end":return e.stop()}}),e,this,[[5,26]])}))),function(){return n.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,S.iv)(v||(v=(0,_.Z)([":host{display:block}ha-card{margin:auto}a{text-decoration:none;color:var(--primary-text-color)}ha-settings-row{padding:0}.card-actions{display:flex;justify-content:space-between;border-top:none;padding:0 8px 8px}ha-circular-progress{display:block;margin:32px;text-align:center}.progress-text{text-align:center}ha-markdown{padding-bottom:8px}"])))}}]}}),S.oi)},34450:function(e,t,n){n.d(t,{H:function(){return r},I:function(){return a}});var a=(0,n(14516).Z)((function(e,t){return t.some((function(t){return e.includes(t)}))})),r=function(e,t){if(t.startsWith("# Changelog")&&(t=t.substr(12,t.length)),t.includes("# ".concat(e.version))&&t.includes("# ".concat(e.version_latest))){var n=t.split("# ".concat(e.version))[0];n.includes("# ".concat(e.version_latest))&&(t=n)}return t}},65189:function(e,t,n){var a,r,i,o=n(88962),s=n(33368),d=n(71650),u=n(82390),c=n(69205),l=n(70906),h=n(91808),p=n(68144),v=n(79932),f=n(99312),k=n(40039),_=n(81043),y=n(34541),m=n(47838),g=n(47181),b=n(93217),w=function(){var e=(0,_.Z)((0,f.Z)().mark((function e(t,r,i){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||(a=(0,b.Ud)(new Worker(new URL(n.p+n.u(1402),n.b)))),e.abrupt("return",a.renderMarkdown(t,r,i));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Z={Note:"info",Warning:"warning"};(0,h.Z)([(0,v.Mo)("ha-markdown-element")],(function(e,t){var n,a=function(t){(0,c.Z)(a,t);var n=(0,l.Z)(a);function a(){var t;(0,d.Z)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,u.Z)(t)),t}return(0,s.Z)(a)}(t);return{F:a,d:[{kind:"field",decorators:[(0,v.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,y.Z)((0,m.Z)(a.prototype),"update",this).call(this,e),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:(n=(0,_.Z)((0,f.Z)().mark((function e(){var t,n,a,r,i,o,s,d,u,c,l;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg});case 2:for(this.innerHTML=e.sent,this._resize(),t=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);t.nextNode();)if((n=t.currentNode)instanceof HTMLAnchorElement&&n.host!==document.location.host)n.target="_blank",n.rel="noreferrer noopener";else if(n instanceof HTMLImageElement)this.lazyImages&&(n.loading="lazy"),n.addEventListener("load",this._resize);else if(n instanceof HTMLQuoteElement&&(a=n.firstElementChild,r=null==a?void 0:a.firstElementChild,i=(null==r?void 0:r.textContent)&&Z[r.textContent],"STRONG"===(null==r?void 0:r.nodeName)&&i)){(s=document.createElement("ha-alert")).alertType=i,s.title="#text"===a.childNodes[1].nodeName&&(null===(o=a.childNodes[1].textContent)||void 0===o?void 0:o.trimStart())||"",d=Array.from(a.childNodes),u=(0,k.Z)(d.slice(d.findIndex((function(e){return e instanceof HTMLBRElement}))+1));try{for(u.s();!(c=u.n()).done;)l=c.value,s.appendChild(l)}catch(h){u.e(h)}finally{u.f()}n.firstElementChild.replaceWith(s)}case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_resize",value:function(){var e=this;return function(){return(0,g.B)(e,"iron-resize")}}}]}}),p.fl),n(9381),n(52039),(0,h.Z)([(0,v.Mo)("ha-markdown")],(function(e,t){var n=function(t){(0,c.Z)(a,t);var n=(0,l.Z)(a);function a(){var t;(0,d.Z)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n.call.apply(n,[this].concat(i)),e((0,u.Z)(t)),t}return(0,s.Z)(a)}(t);return{F:n,d:[{kind:"field",decorators:[(0,v.Cb)()],key:"content",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"allowSvg",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"breaks",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:function(){return!1}},{kind:"method",key:"render",value:function(){return this.content?(0,p.dy)(r||(r=(0,o.Z)(['<ha-markdown-element .content="','" .allowSvg="','" .breaks="','" .lazyImages="','"></ha-markdown-element>'])),this.content,this.allowSvg,this.breaks,this.lazyImages):p.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(i||(i=(0,o.Z)([":host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family,monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}"])))}}]}}),p.oi)}}]);
//# sourceMappingURL=1036-G1AUvfK_ULU.js.map