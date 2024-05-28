(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,z=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),F=new WeakMap;let ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const ut=r=>new ot(typeof r=="string"?r:r+"",void 0,B),$t=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ot(e,r,B)},ft=(r,t)=>{if(z)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=x.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},K=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ut(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:gt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:vt,getOwnPropertySymbols:yt,getPrototypeOf:At}=Object,_=globalThis,J=_.trustedTypes,wt=J?J.emptyScript:"",L=_.reactiveElementPolyfillSupport,E=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},V=(r,t)=>!_t(r,t),Z={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...vt(e),...yt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:M;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??V)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[E("elementProperties")]=new Map,y[E("finalized")]=new Map,L==null||L({ReactiveElement:y}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,W=C.trustedTypes,G=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+f,bt=`<${ht}>`,v=document,k=()=>v.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,St=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",j=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,g=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,lt=/^(?:script|style|textarea|title)$/i,ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),et=ct(1),it=ct(2),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,m=v.createTreeWalker(v,129);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=Q:p[1]!==void 0?n=X:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?tt:Y):n===tt||n===Y?n=g:n===Q||n===X?n=S:(n=g,s=void 0);const $=n===g&&r[a+1].startsWith("/>")?" ":"";o+=n===S?h+bt:l>=0?(i.push(c),h.slice(0,l)+nt+h.slice(l)+f+$):h+f+(l===-2?a:$)}return[dt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[c,p]=Et(t,e);if(this.el=H.createElement(c,i),m.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=m.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(nt)){const u=p[n++],$=s.getAttribute(l).split(f),U=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:U[2],strings:$,ctor:U[1]==="."?Pt:U[1]==="?"?kt:U[1]==="@"?Tt:N}),s.removeAttribute(l)}else l.startsWith(f)&&(h.push({type:6,index:o}),s.removeAttribute(l));if(lt.test(s.tagName)){const l=s.textContent.split(f),u=l.length-1;if(u>0){s.textContent=W?W.emptyScript:"";for(let $=0;$<u;$++)s.append(l[$],k()),m.nextNode(),h.push({type:2,index:++o});s.append(l[u],k())}}}else if(s.nodeType===8)if(s.data===ht)h.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(f,l+1))!==-1;)h.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var n,a;if(t===A)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);m.currentNode=s;let o=m.nextNode(),n=0,a=0,h=i[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new O(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new Ht(o,this,t)),this._$AV.push(c),h=i[++a]}n!==(h==null?void 0:h.index)&&(o=m.nextNode(),n++)}return m.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(dt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Ct(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new H(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new O(this.S(k()),this.S(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const a=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=w(this,a[i+h],e,h),c===A&&(c=this._$AH[h]),n||(n=!T(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class kt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends N{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===A)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const I=C.litHtmlPolyfillSupport;I==null||I(H,O),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.3");const Ot=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new O(t.insertBefore(k(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var rt;P._$litElement$=!0,P.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:P});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:V},Mt=(r=xt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(i==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+i)};function Wt(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(r){return Wt({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Nt(r,t){if(r!==void 0){let e=-1;for(const i of r)e>-1&&(yield t),e++,yield i}}var Rt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,R=(r,t,e,i)=>{for(var s=i>1?void 0:i?Lt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Rt(t,e,s),s},pt=(r=>(r.Fine="fine",r.Medium="medium",r.Coarse="coarse",r))(pt||{});const jt={fine:1,medium:2/3,coarse:.5};let b=class extends P{constructor(){super(...arguments),this.workpieceWidth=320,this.workpieceHeight=20,this.division="fine"}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*jt[this.division])}get partsCount(){return this.tailsCount*3+1}get partWidth(){return Math.floor(this.workpieceWidth/this.partsCount)}get pinWidth(){return this.partWidth}get tailWidth(){return 2*this.partWidth}get deviation(){return this.workpieceWidth-this.partsCount*this.partWidth}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}renderWorkpiece(){return it`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const r=3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2,t=new Array(this.tailsCount).fill(void 0).map((e,i)=>this.renderTail(this.deviation/2+i*(this.pinWidth+this.tailWidth)+this.pinWidth-r,this.tailWidth+2*r));return Nt(t,"")}renderTail(r,t){return it`
      <path class="dovetail" d="M${r+t/2} 0 L${r} ${this.workpieceBottom} ${r+t} ${this.workpieceBottom} ${r+t/2} 0" />
    `}render(){return et`
      <h1>Schwalben & Zinken</h1>
      <p>This is a calculator and visualizer for <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetail joints</a>. It first divides the workpiece into parts/dovetails according to <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a> then uses a dovetail angle according to <a href="https://archive.org/details/dermbelbaueinfac0000span">Fritz Spannagel</a>.
      <section>
        <div>
          <label>
            Workpiece width (mm):
            <input type="number" .value=${this.workpieceWidth} @change=${r=>this.workpieceWidth=Number(r.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Workpiece height (mm):
            <input type="number" .value=${this.workpieceHeight} @change=${r=>this.workpieceHeight=Number(r.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Division:
            ${Object.values(pt).map(r=>et`
              <label>
                <input name="division" type="radio" .value=${r} .checked=${this.division===r} @change=${()=>this.division=r} />
                ${r}
              </label>
            `)}
          </label>
        </div>
      </section>

      <section>
        <div>
          Parts: ${this.partsCount} × ${this.partWidth} mm
        </div>

        <div>
          Dovetails: ${this.tailsCount} × ${this.tailWidth} mm
        </div>

        <div>
          Pins: ${this.pinWidth} mm (first/last pins are ${this.pinWidth+this.deviation/2} mm)
        </div>

        <div>
          Angle: ${90-Math.round(this.angle*180/Math.PI)}°
        </div>
      </section>

      <section>
        <svg width=${this.workpieceWidth} height=${3*this.workpieceHeight} xmlns="http://www.w3.org/2000/svg">
          ${this.renderWorkpiece()}
          ${this.renderTails()}
        </svg>
      </section>
    `}};b.styles=$t`
    :host {
      margin: 1rem;
    }

    section {
      margin-top: 1rem;
    }

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
    
  `;R([q()],b.prototype,"workpieceWidth",2);R([q()],b.prototype,"workpieceHeight",2);R([q()],b.prototype,"division",2);b=R([Ut("dovetail-calculator")],b);
