export const id=5481;export const ids=[5481];export const modules={25481:(i,e,a)=>{a.r(e),a.d(e,{DialogAddApplicationCredential:()=>_});var t=a(17463),s=(a(14271),a(44577),a(68144)),n=a(79932),o=a(47181),l=(a(9381),a(76870),a(77576),a(34821));a(65189),a(3555);var d=a(5986),r=a(11654),c=a(27322);const h="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",p=i=>s.dy`<mwc-list-item> <span>${i.name}</span> </mwc-list-item>`;let _=(0,t.Z)([(0,n.Mo)("dialog-add-application-credential")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_loading",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_domain",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_manifest",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_description",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_clientId",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_clientSecret",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_domains",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._domain=i.selectedDomain,this._manifest=i.manifest,this._name="",this._description="",this._clientId="",this._clientSecret="",this._error=void 0,this._loading=!1,this._fetchConfig()}},{kind:"method",key:"_fetchConfig",value:async function(){this._config=await(async i=>i.callWS({type:"application_credentials/config"}))(this.hass),this._domains=Object.keys(this._config.integrations).map((i=>({id:i,name:(0,d.Lh)(this.hass.localize,i)}))),await this.hass.loadBackendTranslation("application_credentials"),this._domain&&this._updateDescription()}},{kind:"method",key:"render",value:function(){var i,e;if(!this._params||!this._domains)return s.Ld;const a=this._params.selectedDomain?(0,d.Lh)(this.hass.localize,this._domain):"";return s.dy` <ha-dialog open @closed="${this._abortDialog}" scrimClickAction escapeKeyAction .heading="${(0,l.i)(this.hass,this.hass.localize("ui.panel.config.application_credentials.editor.caption"))}"> <div> ${this._error?s.dy`<ha-alert alert-type="error">${this._error}</ha-alert> `:""} ${this._params.selectedDomain&&!this._description?s.dy`<p> ${this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials",{integration:a})} ${null!==(i=this._manifest)&&void 0!==i&&i.is_built_in||null!==(e=this._manifest)&&void 0!==e&&e.documentation?s.dy`<a href="${this._manifest.is_built_in?(0,c.R)(this.hass,`/integrations/${this._domain}`):this._manifest.documentation}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials_domain_link",{integration:a})} <ha-svg-icon .path="${h}"></ha-svg-icon> </a>`:""} </p>`:""} ${this._params.selectedDomain&&this._description?"":s.dy`<p> ${this.hass.localize("ui.panel.config.application_credentials.editor.description")} <a href="${(0,c.R)(this.hass,"/integrations/application_credentials")}" target="_blank" rel="noreferrer"> ${this.hass.localize("ui.panel.config.application_credentials.editor.view_documentation")} <ha-svg-icon .path="${h}"></ha-svg-icon> </a> </p>`} ${this._params.selectedDomain?"":s.dy`<ha-combo-box name="domain" .hass="${this.hass}" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.domain")}" .value="${this._domain}" .renderer="${p}" .items="${this._domains}" item-id-path="id" item-value-path="id" item-label-path="name" required @value-changed="${this._handleDomainPicked}"></ha-combo-box>`} ${this._description?s.dy`<ha-markdown breaks .content="${this._description}"></ha-markdown>`:""} <ha-textfield class="name" name="name" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.name")}" .value="${this._name}" required @input="${this._handleValueChanged}" error-message="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus></ha-textfield> <ha-textfield class="clientId" name="clientId" .label="${this.hass.localize("ui.panel.config.application_credentials.editor.client_id")}" .value="${this._clientId}" required @input="${this._handleValueChanged}" error-message="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus .helper="${this.hass.localize("ui.panel.config.application_credentials.editor.client_id_helper")}" helperPersistent></ha-textfield> <ha-textfield .label="${this.hass.localize("ui.panel.config.application_credentials.editor.client_secret")}" type="password" name="clientSecret" .value="${this._clientSecret}" required @input="${this._handleValueChanged}" error-message="${this.hass.localize("ui.common.error_required")}" .helper="${this.hass.localize("ui.panel.config.application_credentials.editor.client_secret_helper")}" helperPersistent></ha-textfield> </div> ${this._loading?s.dy` <div slot="primaryAction" class="submit-spinner"> <ha-circular-progress active></ha-circular-progress> </div> `:s.dy` <mwc-button slot="primaryAction" @click="${this._abortDialog}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button slot="primaryAction" .disabled="${!this._domain||!this._clientId||!this._clientSecret}" @click="${this._addApplicationCredential}"> ${this.hass.localize("ui.panel.config.application_credentials.editor.add")} </mwc-button> `} </ha-dialog> `}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._domains=void 0,(0,o.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_handleDomainPicked",value:function(i){i.stopPropagation(),this._domain=i.detail.value,this._updateDescription()}},{kind:"method",key:"_updateDescription",value:async function(){await this.hass.loadBackendTranslation("application_credentials",this._domain);const i=this._config.integrations[this._domain];this._description=this.hass.localize(`component.${this._domain}.application_credentials.description`,i.description_placeholders)}},{kind:"method",key:"_handleValueChanged",value:function(i){this._error=void 0;const e=i.target.name,a=i.target.value;this[`_${e}`]=a}},{kind:"method",key:"_abortDialog",value:function(){this._params&&this._params.dialogAbortedCallback&&this._params.dialogAbortedCallback(),this.closeDialog()}},{kind:"method",key:"_addApplicationCredential",value:async function(i){if(i.preventDefault(),!this._domain||!this._clientId||!this._clientSecret)return;let e;this._loading=!0,this._error="";try{e=await(async(i,e,a,t,s)=>i.callWS({type:"application_credentials/create",domain:e,client_id:a,client_secret:t,name:s}))(this.hass,this._domain,this._clientId,this._clientSecret,this._name)}catch(i){return this._loading=!1,void(this._error=i.message)}this._params.applicationCredentialAddedCallback(e),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[r.yu,s.iv`ha-dialog{--mdc-dialog-max-width:500px;--dialog-z-index:10}.row{display:flex;padding:8px 0}ha-combo-box{display:block;margin-bottom:24px}ha-textfield{display:block;margin-bottom:24px}a{text-decoration:none}a ha-svg-icon{--mdc-icon-size:16px}ha-markdown{margin-bottom:16px}`]}}]}}),s.oi)}};
//# sourceMappingURL=5481-Hi9ql419w7E.js.map