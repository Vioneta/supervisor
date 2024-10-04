"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6097],{32594:function(e,t,r){r.d(t,{U:function(){return o}});var o=function(e){return e.stopPropagation()}},40789:function(e,t,r){var o,i,n=r(88962),a=r(99312),d=r(46097),s=r(81043),l=r(33368),u=r(71650),c=r(82390),h=r(69205),f=r(70906),v=r(91808),p=r(34541),m=r(47838),k=r(68144),y=r(79932),_=r(14516),C=r(47181),b=r(32594),g=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o||(o=Promise.all([r.e(7224),r.e(2914)]).then(r.bind(r,92914))),e.abrupt("return",o);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z={key:"Mod-s",run:function(e){return(0,C.B)(e.dom,"editor-save"),!0}},M=function(e){var t=document.createElement("ha-icon");return t.icon=e.label,t};(0,v.Z)([(0,y.Mo)("ha-code-editor")],(function(e,t){var o,v,w=function(t){(0,h.Z)(o,t);var r=(0,f.Z)(o);function o(){var t;(0,u.Z)(this,o);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=r.call.apply(r,[this].concat(n)),e((0,c.Z)(t)),t}return(0,l.Z)(o)}(t);return{F:w,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"mode",value:function(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)()],key:"error",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_value",value:function(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;var e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.shadowRoot.querySelector("span.".concat(e))}},{kind:"method",key:"connectedCallback",value:function(){(0,p.Z)((0,m.Z)(w.prototype),"connectedCallback",this).call(this),this.addEventListener("keydown",b.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.Z)((0,m.Z)(w.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",b.U)}},{kind:"method",key:"update",value:function(e){(0,p.Z)((0,m.Z)(w.prototype),"update",this).call(this,e),this.codemirror&&(e.has("mode")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),e.has("error")&&this.classList.toggle("error-state",this.error))}},{kind:"method",key:"firstUpdated",value:function(e){(0,p.Z)((0,m.Z)(w.prototype),"firstUpdated",this).call(this,e),this._load()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_load",value:(v=(0,s.Z)((0,a.Z)().mark((function e(){var t,r,o=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:this._loadedCodeMirror=e.sent,t=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([].concat((0,d.Z)(this._loadedCodeMirror.defaultKeymap),(0,d.Z)(this._loadedCodeMirror.searchKeymap),(0,d.Z)(this._loadedCodeMirror.historyKeymap),(0,d.Z)(this._loadedCodeMirror.tabKeyBindings),[Z])),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of((function(e){return o._onUpdate(e)}))],this.readOnly||(r=[],this.autocompleteEntities&&this.hass&&r.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&r.push(this._mdiCompletions.bind(this)),r.length>0&&t.push(this._loadedCodeMirror.autocompletion({override:r,maxRenderedOptions:10}))),this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:t}),root:this.shadowRoot,parent:this.shadowRoot});case 6:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{kind:"field",key:"_getStates",value:function(){return(0,_.Z)((function(e){return e?Object.keys(e).map((function(t){return{type:"variable",label:t,detail:e[t].attributes.friendly_name,info:"State: ".concat(e[t].state)}})):[]}))}},{kind:"method",key:"_entityCompletions",value:function(e){var t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;var r=this._getStates(this.hass.states);return r&&r.length?{from:Number(t.from),options:r,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e._iconList){t.next=9;break}0,o=[],t.next=8;break;case 5:return t.next=7,r.e(1639).then(r.t.bind(r,71639,19));case 7:o=t.sent.default;case 8:e._iconList=o.map((function(e){return{type:"variable",label:"mdi:".concat(e.name),detail:e.keywords.join(", "),info:M}}));case 9:return t.abrupt("return",e._iconList);case 10:case"end":return t.stop()}}),t)})))}},{kind:"method",key:"_mdiCompletions",value:(o=(0,s.Z)((0,a.Z)().mark((function e(t){var r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.matchBefore(/mdi:\S*/))&&(r.from!==r.to||t.explicit)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._getIconItems();case 5:return o=e.sent,e.abrupt("return",{from:Number(r.from),options:o,validFor:/^mdi:\S*$/});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{kind:"method",key:"_onUpdate",value:function(e){if(e.docChanged){var t=this.value;t!==this._value&&(this._value=t,(0,C.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.iv)(i||(i=(0,n.Z)([":host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}"])))}}]}}),k.fl)},16235:function(e,t,r){var o,i,n=r(88962),a=r(33368),d=r(71650),s=r(82390),l=r(69205),u=r(70906),c=r(91808),h=r(68144),f=r(79932);(0,c.Z)([(0,f.Mo)("ha-input-helper-text")],(function(e,t){var r=function(t){(0,l.Z)(o,t);var r=(0,u.Z)(o);function o(){var t;(0,d.Z)(this,o);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=r.call.apply(r,[this].concat(n)),e((0,s.Z)(t)),t}return(0,a.Z)(o)}(t);return{F:r,d:[{kind:"method",key:"render",value:function(){return(0,h.dy)(o||(o=(0,n.Z)(["<slot></slot>"])))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,h.iv)(i||(i=(0,n.Z)([":host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px}"])))}}]}}),h.oi)},56097:function(e,t,r){r.r(t),r.d(t,{HaTemplateSelector:function(){return k}});var o,i,n,a,d=r(88962),s=r(33368),l=r(71650),u=r(82390),c=r(69205),h=r(70906),f=r(91808),v=r(68144),p=r(79932),m=r(47181),k=(r(40789),r(16235),(0,f.Z)([(0,p.Mo)("ha-selector-template")],(function(e,t){var r=function(t){(0,c.Z)(o,t);var r=(0,h.Z)(o);function o(){var t;(0,l.Z)(this,o);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=r.call.apply(r,[this].concat(n)),e((0,u.Z)(t)),t}return(0,s.Z)(o)}(t);return{F:r,d:[{kind:"field",decorators:[(0,p.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return(0,v.dy)(o||(o=(0,d.Z)([" ",' <ha-code-editor mode="jinja2" .hass="','" .value="','" .readOnly="','" autofocus autocomplete-entities autocomplete-icons @value-changed="','" dir="ltr"></ha-code-editor> '," "])),this.label?(0,v.dy)(i||(i=(0,d.Z)(["<p>","","</p>"])),this.label,this.required?" *":""):"",this.hass,this.value,this.disabled,this._handleChange,this.helper?(0,v.dy)(n||(n=(0,d.Z)(["<ha-input-helper-text>","</ha-input-helper-text>"])),this.helper):"")}},{kind:"method",key:"_handleChange",value:function(e){var t=e.target.value;this.value!==t&&(0,m.B)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.iv)(a||(a=(0,d.Z)(["p{margin-top:0}"])))}}]}}),v.oi))}}]);
//# sourceMappingURL=6097-9qfZAhY2mdc.js.map