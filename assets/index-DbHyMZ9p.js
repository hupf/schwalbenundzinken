(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,it=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),ot=new WeakMap;let Et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(it&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}};const Rt=r=>new Et(typeof r=="string"?r:r+"",void 0,st),q=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Et(e,r,st)},Mt=(r,t)=>{if(it)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},nt=it?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Rt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:Ut,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:It,getOwnPropertySymbols:Dt,getPrototypeOf:Lt}=Object,y=globalThis,ht=y.trustedTypes,jt=ht?ht.emptyScript:"",Z=y.reactiveElementPolyfillSupport,R=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>!xt(r,t),at={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Nt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,s=[...It(e),...Dt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:B;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??rt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[R("elementProperties")]=new Map,W[R("finalized")]=new Map,Z==null||Z({ReactiveElement:W}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,K=M.trustedTypes,lt=K?K.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+_,zt=`<${kt}>`,C=document,x=()=>C.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",Wt=Array.isArray,Vt=r=>Wt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,b=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ut=/"/g,St=/^(?:script|style|textarea|title)$/i,Ot=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),S=Ot(1),$t=Ot(2),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ft=new WeakMap,A=C.createTreeWalker(C,129);function Ht(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const Ft=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=T;for(let a=0;a<e;a++){const h=r[a];let d,u,l=-1,f=0;for(;f<h.length&&(n.lastIndex=f,u=n.exec(h),u!==null);)f=n.lastIndex,n===T?u[1]==="!--"?n=ct:u[1]!==void 0?n=dt:u[2]!==void 0?(St.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=b):u[3]!==void 0&&(n=b):n===b?u[0]===">"?(n=i??T,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?b:u[3]==='"'?ut:pt):n===ut||n===pt?n=b:n===ct||n===dt?n=T:(n=b,i=void 0);const v=n===b&&r[a+1].startsWith("/>")?" ":"";o+=n===T?h+zt:l>=0?(s.push(d),h.slice(0,l)+Pt+h.slice(l)+_+v):h+_+(l===-2?a:v)}return[Ht(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[d,u]=Ft(t,e);if(this.el=N.createElement(d,s),A.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(Pt)){const f=u[n++],v=i.getAttribute(l).split(_),V=/([.?@])?(.*)/.exec(f);h.push({type:1,index:o,name:V[2],strings:v,ctor:V[1]==="."?Kt:V[1]==="?"?qt:V[1]==="@"?Yt:Y}),i.removeAttribute(l)}else l.startsWith(_)&&(h.push({type:6,index:o}),i.removeAttribute(l));if(St.test(i.tagName)){const l=i.textContent.split(_),f=l.length-1;if(f>0){i.textContent=K?K.emptyScript:"";for(let v=0;v<f;v++)i.append(l[v],x()),A.nextNode(),h.push({type:2,index:++o});i.append(l[f],x())}}}else if(i.nodeType===8)if(i.data===kt)h.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)h.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function H(r,t,e=r,s){var n,a;if(t===O)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=H(r,i._$AS(r,t.values),i,s)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??C).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,a=0,h=s[0];for(;h!==void 0;){if(n===h.index){let d;h.type===2?d=new D(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new Gt(o,this,t)),this._$AV.push(d),h=s[++a]}n!==(h==null?void 0:h.index)&&(o=A.nextNode(),n++)}return A.currentNode=C,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class D{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Ht(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Bt(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new N(t)),e}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new D(this.S(x()),this.S(x()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=H(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const a=t;let h,d;for(t=o[0],h=0;h<o.length-1;h++)d=H(this,a[s+h],e,h),d===O&&(d=this._$AH[h]),n||(n=!U(d)||d!==this._$AH[h]),d===p?t=p:t!==p&&(t+=(d??"")+o[h+1]),this._$AH[h]=d}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class qt extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Yt extends Y{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??p)===O)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Gt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const X=M.litHtmlPolyfillSupport;X==null||X(N,D),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.1.4");const Jt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new D(t.insertBefore(x(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}}var Ct;m._$litElement$=!0,m.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:m});const tt=globalThis.litElementPolyfillSupport;tt==null||tt({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt},Qt=(r=Zt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(s==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+s)};function c(r){return(t,e)=>typeof e=="object"?Qt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(r){return c({...r,state:!0,attribute:!1})}var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,j=(r,t,e,s)=>{for(var i=s>1?void 0:s?te(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Xt(t,e,i),i};let E=class extends m{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.division=et.Medium,this.tailPinRatio=0}onWorkpieceWidthChange(r){const t=typeof r=="number"?r:Number(r.target.value),e=new CustomEvent("dt-form-change",{detail:{workpieceWidth:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}onWorkpieceHeightChange(r){const t=typeof r=="number"?r:Number(r.target.value),e=new CustomEvent("dt-form-change",{detail:{workpieceHeight:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}onDivisionChange(r){const t=new CustomEvent("dt-form-change",{detail:{division:r},bubbles:!0,composed:!0});this.dispatchEvent(t)}onTailPinRatioChange(r){const t=typeof r=="number"?r:Number(r.target.value),e=new CustomEvent("dt-form-change",{detail:{tailPinRatio:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}onReset(){this.dispatchEvent(new CustomEvent("dt-form-reset",{bubbles:!0,composed:!0}))}render(){return S`
      <div>
        <label>
          Workpiece width:
          <input
            type="number"
            .value=${this.workpieceWidth}
            @change=${this.onWorkpieceWidthChange.bind(this)}
            min="1"
          />
          mm
        </label>
      </div>

      <div>
        <label>
          Workpiece height (thickness):
          <input
            type="number"
            .value=${this.workpieceHeight}
            @change=${this.onWorkpieceHeightChange.bind(this)}
            min="1"
          />
          mm
        </label>
      </div>

      <div>
        <label>
          Division:
          ${Object.values(et).map(r=>S`
              <label>
                <input
                  name="division"
                  type="radio"
                  .value=${r}
                  .checked=${this.division===r}
                  @change=${()=>this.onDivisionChange(r)}
                />
                ${r}
              </label>
            `)}
        </label>
      </div>

      <div>
        <label>
          Dovetail to pin width ratio:
          <input
            type="number"
            .value=${this.tailPinRatio}
            @change=${this.onTailPinRatioChange.bind(this)}
            min="0"
            step="0.25"
          />:1
        </label>
      </div>

      <div>
        <button @click=${()=>this.onReset()}>Reset</button>
      </div>
    `}};E.styles=q`
    input[type="number"] {
      width: 8ch;
    }
  `;j([c()],E.prototype,"workpieceWidth",2);j([c()],E.prototype,"workpieceHeight",2);j([c()],E.prototype,"division",2);j([c()],E.prototype,"tailPinRatio",2);E=j([L("dt-form")],E);var ee=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,w=(r,t,e,s)=>{for(var i=s>1?void 0:s?ie(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ee(t,e,i),i};let $=class extends m{constructor(){super(...arguments),this.partsCount=0,this.partWidth=0,this.pinWidth=0,this.tailsCount=0,this.tailWidth=0,this.angle=0,this.tailMarkOffset=0}render(){return S`
      <div>Parts: ${this.partsCount} × ${this.partWidth.toFixed(1)} mm</div>

      <div>
        Dovetails: ${this.tailsCount} × ${Math.round(this.tailWidth)} mm
        <span class="unrounded">(${this.tailWidth.toFixed(1)} mm)</span>
      </div>

      <div>
        Pins: ${Math.round(this.pinWidth)} mm
        <span class="unrounded">(${this.pinWidth.toFixed(1)} mm)</span>
      </div>

      <div>Angle: ${90-Math.round(this.angle*180/Math.PI)}°</div>

      <div>
        Smallest distance between dovetails:
        ${Math.round(this.pinWidth-2*this.tailMarkOffset)} mm
      </div>
    `}};$.styles=q`
    .unrounded {
      color: #999;
    }
  `;w([c()],$.prototype,"partsCount",2);w([c()],$.prototype,"partWidth",2);w([c()],$.prototype,"pinWidth",2);w([c()],$.prototype,"tailsCount",2);w([c()],$.prototype,"tailWidth",2);w([c()],$.prototype,"angle",2);w([c()],$.prototype,"tailMarkOffset",2);$=w([L("dt-info")],$);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Tt(r,t){const e=typeof t=="function";if(r!==void 0){let s=-1;for(const i of r)s>-1&&(yield e?t(s):t),s++,yield i}}var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,J=(r,t,e,s)=>{for(var i=s>1?void 0:s?re(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&se(t,e,i),i};let I=class extends m{constructor(){super(...arguments),this.pinWidth=0,this.tailsCount=0,this.tailWidth=0}getMarks(){const r=[];for(let t=0;t<this.tailsCount;t+=1){const e=t*(this.pinWidth+this.tailWidth);r.push(Math.round(e+this.pinWidth)),r.push(Math.round(e+this.pinWidth+this.tailWidth))}return r}render(){return S`Required marks on center line of tail piece:<br />${Tt(this.getMarks(),", ")}
      mm`}};J([c()],I.prototype,"pinWidth",2);J([c()],I.prototype,"tailsCount",2);J([c()],I.prototype,"tailWidth",2);I=J([L("dt-marks")],I);var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,k=(r,t,e,s)=>{for(var i=s>1?void 0:s?ne(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&oe(t,e,i),i};let g=class extends m{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.tailsCount=0,this.pinWidth=0,this.tailWidth=0,this.tailMarkOffset=0}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}renderWorkpiece(){return $t`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const r=new Array(this.tailsCount).fill(void 0).map((t,e)=>this.renderTail(e*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return Tt(r,"")}renderTail(r,t){return $t`
      <path class="dovetail" d="M${r+t/2} 0 L${r} ${this.workpieceBottom} ${r+t} ${this.workpieceBottom} ${r+t/2} 0" />
    `}render(){return S`
      <svg
        width=${this.workpieceWidth}
        height=${3*this.workpieceHeight}
        xmlns="http://www.w3.org/2000/svg"
        style="margin-right: ${this.workpieceWidth}px; margin-bottom: ${3*this.workpieceHeight}px"
      >
        ${this.renderWorkpiece()} ${this.renderTails()}
      </svg>
    `}};g.styles=q`
    svg {
      transform: scale(2);
      transform-origin: top left;
    }

    svg path.workpiece.pins {
      fill: #ccc;
    }

    svg path.workpiece.tails,
    svg path.dovetail {
      fill: #888;
    }
  `;k([c()],g.prototype,"workpieceWidth",2);k([c()],g.prototype,"workpieceHeight",2);k([c()],g.prototype,"tailsCount",2);k([c()],g.prototype,"pinWidth",2);k([c()],g.prototype,"tailWidth",2);k([c()],g.prototype,"tailMarkOffset",2);g=k([L("dt-preview")],g);var he=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,z=(r,t,e,s)=>{for(var i=s>1?void 0:s?ae(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&he(t,e,i),i},et=(r=>(r.Fine="fine",r.Medium="medium",r.Coarse="coarse",r))(et||{});const le={fine:1,medium:2/3,coarse:.5},mt="workpieceWidth",gt="workpieceHeight",vt="division",_t="tailPinRatio",yt=100,wt=15,bt="medium",At=2;let P=class extends m{constructor(){super(...arguments),this.workpieceWidth=Number(this.readValue(mt,yt)),this.workpieceHeight=Number(this.readValue(gt,wt)),this.division=this.readValue(vt,bt),this.tailPinRatio=Number(this.readValue(_t,At)),this.handleFormChange=r=>{r instanceof CustomEvent&&(r.detail.workpieceWidth?this.handleWorkpieceWidthChange(r.detail.workpieceWidth):r.detail.workpieceHeight?this.handleWorkpieceHeightChange(r.detail.workpieceHeight):r.detail.division?this.handleDivisionChange(r.detail.division):r.detail.tailPinRatio&&this.handleTailPinRatioChange(r.detail.tailPinRatio))},this.handleFormReset=()=>{this.handleWorkpieceWidthChange(yt),this.handleWorkpieceHeightChange(wt),this.handleDivisionChange(bt),this.handleTailPinRatioChange(At)}}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*le[this.division])}get pinsCount(){return this.tailsCount+1}get partsCount(){const r=this.pinsCount,t=this.tailsCount*this.tailPinRatio;return r+t}get partWidth(){return this.workpieceWidth/this.partsCount}get pinWidth(){return this.partWidth*1}get tailWidth(){return this.partWidth*this.tailPinRatio}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}connectedCallback(){super.connectedCallback(),this.addEventListener("dt-form-change",this.handleFormChange),this.addEventListener("dt-form-reset",this.handleFormReset)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener("dt-form-change",this.handleFormChange),this.removeEventListener("dt-form-reset",this.handleFormReset)}handleWorkpieceWidthChange(r){this.workpieceWidth=r,this.storeValue(mt,this.workpieceWidth)}handleWorkpieceHeightChange(r){this.workpieceHeight=r,this.storeValue(gt,this.workpieceHeight)}handleDivisionChange(r){this.division=r,this.storeValue(vt,this.division)}handleTailPinRatioChange(r){this.tailPinRatio=r,this.storeValue(_t,this.tailPinRatio)}storeValue(r,t){localStorage.setItem(r,String(t))}readValue(r,t){return localStorage.getItem(r)??String(t)}render(){return S`
      <h1>Schwalben & Zinken</h1>
      <section class="explanation">
        This is a calculator and visualizer for
        <a href="https://en.wikipedia.org/wiki/Dovetail_joint"
          >dovetail joints</a
        >
        used in woodworking. It first determines the number of dovetails based
        on the width/height of the workpiece, like
        <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a>
        demonstrates. Then the dovetail angle is developed as described by
        <a href="https://d-nb.info/830690026">Fritz Spannagel</a>, where a
        triangle with three times the height of the workpiece is formed.
      </section>
      <section class="form">
        <dt-form
          .workpieceWidth=${this.workpieceWidth}
          .workpieceHeight=${this.workpieceHeight}
          .division=${this.division}
          .tailPinRatio=${this.tailPinRatio}
        ></dt-form>
      </section>

      <section>
        <dt-info
          .partsCount=${this.partsCount}
          .partWidth=${this.partWidth}
          .pinWidth=${this.pinWidth}
          .tailsCount=${this.tailsCount}
          .tailWidth=${this.tailWidth}
          .angle=${this.angle}
          .tailMarkOffset=${this.tailMarkOffset}
        ></dt-info>
      </section>

      <section>
        <dt-preview
          .workpieceWidth=${this.workpieceWidth}
          .workpieceHeight=${this.workpieceHeight}
          .tailsCount=${this.tailsCount}
          .pinWidth=${this.pinWidth}
          .tailWidth=${this.tailWidth}
          .tailMarkOffset=${this.tailMarkOffset}
        ></dt-preview>
      </section>

      <section>
        <dt-marks
          .pinWidth=${this.pinWidth}
          .tailsCount=${this.tailsCount}
          .tailWidth=${this.tailWidth}
        ></dt-marks>
      </section>

      <section class="footer">
        <a href="https://github.com/hupf/schwalbenundzinken"
          >Source on GitHub</a
        >
        · © <a href="https://bitgarten.ch">Mathis Hofer</a> · Please use &
        share, this is free software under the terms of the Apache License 2.0.
      </section>
    `}};P.styles=q`
    :host {
      margin: 1rem;
    }

    h1 {
      margin-top: 0.5rem;
      font-weight: 300;
      font-size: 2.5rem;
    }

    a,
    a:active,
    a:visited {
      color: #213547;
    }

    a:hover {
      color: #000;
    }

    section {
      margin-top: 1rem;
      max-width: min(calc(100vw - 2 * 1rem), 80ch);
    }

    section.explanation,
    section.form {
      padding-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }

    section.preview {
      max-width: auto;
    }

    section.footer {
      margin-top: 2rem;
      font-size: 0.7rem;
    }
  `;z([G()],P.prototype,"workpieceWidth",2);z([G()],P.prototype,"workpieceHeight",2);z([G()],P.prototype,"division",2);z([G()],P.prototype,"tailPinRatio",2);P=z([L("dovetail-calculator")],P);
