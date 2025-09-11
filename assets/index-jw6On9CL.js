(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,fe=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),ve=new WeakMap;let je=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(fe&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ve.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ve.set(t,e))}return e}toString(){return this.cssText}};const rt=i=>new je(typeof i=="string"?i:i+"",void 0,ge),te=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new je(t,i,ge)},nt=(i,e)=>{if(fe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=Y.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},_e=fe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return rt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ot,defineProperty:at,getOwnPropertyDescriptor:ht,getOwnPropertyNames:lt,getOwnPropertySymbols:ct,getPrototypeOf:dt}=Object,A=globalThis,be=A.trustedTypes,ut=be?be.emptyScript:"",oe=A.reactiveElementPolyfillSupport,U=(i,e)=>i,J={toAttribute(i,e){switch(e){case Boolean:i=i?ut:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},$e=(i,e)=>!ot(i,e),we={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:$e};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&at(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=ht(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const h=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,r=[...lt(t),...ct(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(_e(s))}else e!==void 0&&t.push(_e(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:J).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n,o;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const h=r.getPropertyOptions(s),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:J;this._$Em=s;const l=a.fromAttribute(t,h.type);this[s]=l??((o=this._$Ej)==null?void 0:o.get(s))??l,this._$Em=null}}requestUpdate(e,t,r){var s;if(e!==void 0){const n=this.constructor,o=this[e];if(r??(r=n.getPropertyOptions(e)),!((r.hasChanged??$e)(o,t)||r.useDefault&&r.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:n},o){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:h}=o,a=this[n];h!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[U("elementProperties")]=new Map,L[U("finalized")]=new Map,oe==null||oe({ReactiveElement:L}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,Q=D.trustedTypes,ye=Q?Q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ve="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Fe="?"+y,pt=`<${Fe}>`,W=document,z=()=>W.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",me=Array.isArray,ft=i=>me(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ae=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,Ee=/>/g,C=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,ke=/"/g,Be=/^(?:script|style|textarea|title)$/i,qe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=qe(1),Se=qe(2),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Pe=new WeakMap,S=W.createTreeWalker(W,129);function Ke(i,e){if(!me(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}const gt=(i,e)=>{const t=i.length-1,r=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=I;for(let h=0;h<t;h++){const a=i[h];let l,f,c=-1,m=0;for(;m<a.length&&(o.lastIndex=m,f=o.exec(a),f!==null);)m=o.lastIndex,o===I?f[1]==="!--"?o=Ae:f[1]!==void 0?o=Ee:f[2]!==void 0?(Be.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=C):f[3]!==void 0&&(o=C):o===C?f[0]===">"?(o=s??I,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,l=f[1],o=f[3]===void 0?C:f[3]==='"'?ke:Ce):o===ke||o===Ce?o=C:o===Ae||o===Ee?o=I:(o=C,s=void 0);const w=o===C&&i[h+1].startsWith("/>")?" ":"";n+=o===I?a+pt:c>=0?(r.push(l),a.slice(0,c)+Ve+a.slice(c)+y+w):a+y+(c===-2?h:w)}return[Ke(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class j{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[l,f]=gt(e,t);if(this.el=j.createElement(l,r),S.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Ve)){const m=f[o++],w=s.getAttribute(c).split(y),Z=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:Z[2],strings:w,ctor:Z[1]==="."?mt:Z[1]==="?"?vt:Z[1]==="@"?_t:ie}),s.removeAttribute(c)}else c.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(Be.test(s.tagName)){const c=s.textContent.split(y),m=c.length-1;if(m>0){s.textContent=Q?Q.emptyScript:"";for(let w=0;w<m;w++)s.append(c[w],z()),S.nextNode(),a.push({type:2,index:++n});s.append(c[m],z())}}}else if(s.nodeType===8)if(s.data===Fe)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(y,c+1))!==-1;)a.push({type:7,index:n}),c+=y.length-1}n++}}static createElement(e,t){const r=W.createElement("template");return r.innerHTML=e,r}}function x(i,e,t=i,r){var o,h;if(e===O)return e;let s=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=N(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=x(i,s._$AS(i,e.values),s,r)),e}class $t{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??W).importNode(t,!0);S.currentNode=s;let n=S.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new F(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new bt(n,this,e)),this._$AV.push(l),a=r[++h]}o!==(a==null?void 0:a.index)&&(n=S.nextNode(),o++)}return S.currentNode=W,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class F{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),N(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ft(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=j.createElement(Ke(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new $t(s,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new j(e)),t}k(e){me(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new F(this.O(z()),this.O(z()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(e,t=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=x(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{const h=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=x(this,h[r+a],t,a),l===O&&(l=this._$AH[a]),o||(o=!N(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mt extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class vt extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class _t extends ie{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??p)===O)return;const r=this._$AH,s=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class bt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const he=D.litHtmlPolyfillSupport;he==null||he(j,F),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.3.1");const wt=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new F(e.insertBefore(z(),n),n,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;let _=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return O}};var Ne;_._$litElement$=!0,_.finalized=!0,(Ne=P.litElementHydrateSupport)==null||Ne.call(P,{LitElement:_});const le=P.litElementPolyfillSupport;le==null||le({LitElement:_});(P.litElementVersions??(P.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:$e},At=(i=yt,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,i)},init(h){return h!==void 0&&this.C(o,void 0,i,h),h}}}if(r==="setter"){const{name:o}=t;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(e,t)=>typeof t=="object"?At(i,e,t):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(i){return u({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et={ATTRIBUTE:1},Ct=i=>(...e)=>({_$litDirective$:i,values:e});class kt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=Ct(class extends kt{constructor(i){var e;if(super(i),i.type!==Et.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,s;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return O}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Pt(i,e){if(i!==void 0){let t=0;for(const r of i)yield e(r,t++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=i=>typeof i!="string"&&"strTag"in i,Ze=(i,e,t)=>{let r=i[0];for(let s=1;s<i.length;s++)r+=e[t?t[s-1]:s-1],r+=i[s];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=i=>Wt(i)?Ze(i.strings,i.values):i;let d=Ge,We=!1;function Ot(i){if(We)throw new Error("lit-localize can only be configured once");d=i,We=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht{constructor(e){this.__litLocalizeEventHandler=t=>{t.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(ue,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(ue,this.__litLocalizeEventHandler)}}const Tt=i=>i.addController(new Ht(i)),Mt=Tt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=()=>(i,e)=>(i.addInitializer(Mt),i);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ye{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const v=[];for(let i=0;i<256;i++)v[i]=(i>>4&15).toString(16)+(i&15).toString(16);function Lt(i){let e=0,t=8997,r=0,s=33826,n=0,o=40164,h=0,a=52210;for(let l=0;l<i.length;l++)t^=i.charCodeAt(l),e=t*435,r=s*435,n=o*435,h=a*435,n+=t<<8,h+=s<<8,r+=e>>>16,t=e&65535,n+=r>>>16,s=r&65535,a=h+(n>>>16)&65535,o=n&65535;return v[a>>8]+v[a&255]+v[o>>8]+v[o&255]+v[s>>8]+v[s&255]+v[t>>8]+v[t&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt="",xt="h",It="s";function Ut(i,e){return(e?xt:It)+Lt(typeof i=="string"?i:i.join(Rt))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=new WeakMap,He=new Map;function Dt(i,e,t){if(i){const r=(t==null?void 0:t.id)??zt(e),s=i[r];if(s){if(typeof s=="string")return s;if("strTag"in s)return Ze(s.strings,e.values,s.values);{let n=Oe.get(s);return n===void 0&&(n=s.values,Oe.set(s,n)),{...s,values:n.map(o=>e.values[o])}}}}return Ge(e)}function zt(i){const e=typeof i=="string"?i:i.strings;let t=He.get(e);return t===void 0&&(t=Ut(e,typeof i!="string"&&!("strTag"in i)),He.set(e,t)),t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(i){window.dispatchEvent(new CustomEvent(ue,{detail:i}))}let X="",de,Je,ee,pe,Qe,k=new Ye;k.resolve();let G=0;const Nt=i=>(Ot((e,t)=>Dt(Qe,e,t)),X=Je=i.sourceLocale,ee=new Set(i.targetLocales),ee.add(i.sourceLocale),pe=i.loadLocale,{getLocale:jt,setLocale:Vt}),jt=()=>X,Vt=i=>{if(i===(de??X))return k.promise;if(!ee||!pe)throw new Error("Internal error");if(!ee.has(i))throw new Error("Invalid locale code");G++;const e=G;return de=i,k.settled&&(k=new Ye),ce({status:"loading",loadingLocale:i}),(i===Je?Promise.resolve({templates:void 0}):pe(i)).then(r=>{G===e&&(X=i,de=void 0,Qe=r.templates,ce({status:"ready",readyLocale:i}),k.resolve())},r=>{G===e&&(ce({status:"error",errorLocale:i,errorMessage:r.toString()}),k.reject(r))}),k.promise};var Ft=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,q=(i,e,t,r)=>{for(var s=r>1?void 0:r?Bt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Ft(e,t,s),s};let H=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.division=R.Medium,this.tailPinRatio=0}onWorkpieceWidthChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{workpieceWidth:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onWorkpieceHeightChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{workpieceHeight:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onDivisionChange(i){const e=new CustomEvent("dt-form-change",{detail:{division:i},bubbles:!0,composed:!0});this.dispatchEvent(e)}onTailPinRatioChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{tailPinRatio:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onReset(){this.dispatchEvent(new CustomEvent("dt-form-reset",{bubbles:!0,composed:!0}))}getDivisionLabel(i){switch(i){case R.Fine:return d("fine");case R.Medium:return d("medium");case R.Coarse:return d("coarse");default:{const e=i;throw new Error(e)}}}render(){return g`
      <div>
        <label>
          ${d("Workpiece width")}:
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
          ${d("Workpiece height (thickness)")}:
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
          ${d("Division")}:
          ${Object.values(R).map(i=>g`
              <label>
                <input
                  name="division"
                  type="radio"
                  .value=${i}
                  .checked=${this.division===i}
                  @change=${()=>this.onDivisionChange(i)}
                />
                ${this.getDivisionLabel(i)}
              </label>
            `)}
        </label>
      </div>

      <div>
        <label>
          ${d("Dovetail to pin width ratio")}:
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
        <button @click=${()=>this.onReset()}>${d("Reset")}</button>
      </div>
    `}};H.styles=te`
    input[type="number"] {
      width: 8ch;
    }
  `;q([u()],H.prototype,"workpieceWidth",2);q([u()],H.prototype,"workpieceHeight",2);q([u()],H.prototype,"division",2);q([u()],H.prototype,"tailPinRatio",2);H=q([B("dt-form"),re()],H);const Xe="en",qt=["de","fr"],et=["de","en","fr"];var Kt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,E=(i,e,t,r)=>{for(var s=r>1?void 0:r?Zt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Kt(e,t,s),s};let $=class extends _{constructor(){super(...arguments),this.partsCount=0,this.partWidth=0,this.pinWidth=0,this.tailsCount=0,this.tailWidth=0,this.angle=0,this.tailMarkOffset=0}render(){return g`
      <div>
        ${d("Parts")}: ${this.partsCount} × ${this.partWidth.toFixed(1)} mm
      </div>

      <div>
        ${d("Dovetails")}: ${this.tailsCount} × ${Math.round(this.tailWidth)}
        mm
        <span class="unrounded">(${this.tailWidth.toFixed(1)} mm)</span>
      </div>

      <div>
        ${d("Pins")}: ${Math.round(this.pinWidth)} mm
        <span class="unrounded">(${this.pinWidth.toFixed(1)} mm)</span>
      </div>

      <div>
        ${d("Angle")}: ${90-Math.round(this.angle*180/Math.PI)}°
      </div>

      <div>
        ${d("Smallest distance between dovetails")}:
        ${Math.round(this.pinWidth-2*this.tailMarkOffset)} mm
      </div>
    `}};$.styles=te`
    .unrounded {
      color: #999;
    }
  `;E([u()],$.prototype,"partsCount",2);E([u()],$.prototype,"partWidth",2);E([u()],$.prototype,"pinWidth",2);E([u()],$.prototype,"tailsCount",2);E([u()],$.prototype,"tailWidth",2);E([u()],$.prototype,"angle",2);E([u()],$.prototype,"tailMarkOffset",2);$=E([B("dt-info"),re()],$);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*tt(i,e){const t=typeof e=="function";if(i!==void 0){let r=-1;for(const s of i)r>-1&&(yield t?e(r):e),r++,yield s}}var Gt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,ne=(i,e,t,r)=>{for(var s=r>1?void 0:r?Yt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Gt(e,t,s),s};let V=class extends _{constructor(){super(...arguments),this.pinWidth=0,this.tailsCount=0,this.tailWidth=0}getMarks(){const i=[];for(let e=0;e<this.tailsCount;e+=1){const t=e*(this.pinWidth+this.tailWidth);i.push(Math.round(t+this.pinWidth)),i.push(Math.round(t+this.pinWidth+this.tailWidth))}return i}render(){return g`${d("Required marks on center line of pins piece")}:<br />${tt(this.getMarks(),", ")} mm`}};ne([u()],V.prototype,"pinWidth",2);ne([u()],V.prototype,"tailsCount",2);ne([u()],V.prototype,"tailWidth",2);V=ne([B("dt-marks"),re()],V);var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,M=(i,e,t,r)=>{for(var s=r>1?void 0:r?Qt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Jt(e,t,s),s};let b=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.tailsCount=0,this.pinWidth=0,this.tailWidth=0,this.tailMarkOffset=0}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}renderWorkpiece(){return Se`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const i=new Array(this.tailsCount).fill(void 0).map((e,t)=>this.renderTail(t*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return tt(i,"")}renderTail(i,e){return Se`
      <path class="dovetail" d="M${i+e/2} 0 L${i} ${this.workpieceBottom} ${i+e} ${this.workpieceBottom} ${i+e/2} 0" />
    `}render(){return g`
      <svg
        width=${this.workpieceWidth}
        height=${3*this.workpieceHeight}
        xmlns="http://www.w3.org/2000/svg"
        style="margin-right: ${this.workpieceWidth}px; margin-bottom: ${3*this.workpieceHeight}px"
      >
        ${this.renderWorkpiece()} ${this.renderTails()}
      </svg>
    `}};b.styles=te`
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
  `;M([u()],b.prototype,"workpieceWidth",2);M([u()],b.prototype,"workpieceHeight",2);M([u()],b.prototype,"tailsCount",2);M([u()],b.prototype,"pinWidth",2);M([u()],b.prototype,"tailWidth",2);M([u()],b.prototype,"tailMarkOffset",2);b=M([B("dt-preview")],b);const Xt={h1d510fd53dcb1e0c:g`Dies ist eine Berechnungs- und Visualisierungshilfe
    für
    <a href="${0}">Schwalbenschwanzverbindungen</a>
    wie sie in der Holzbearbeitung verwendet werden. Zuerst wird die Anzahl
    Schwalbenschwänze ermittelt, basierend auf der Breite/Höhe des Werkstücks,
    wie es
    <a href="${1}">Hauke Schmidt</a>
    demonstriert. Danach wird der Schwalbenschwanzwinkel – wie von
    <a href="${2}">Fritz Spannagel</a>, beschrieben – entwickelt, indem ein
    Dreieck mit der dreifachen Höhe des Werkstücks gebildet wird.`,s04a6158ea5723980:"https://d-nb.info/830690026",s16377c5d9cbfde84:"grob",s255857544a9d5ec0:"Zurücksetzen",s2b606c448ab12d87:"https://de.wikipedia.org/wiki/Schwalbenschwanzverbindung",s3b3ea038c5d3bb06:"Teilung",s52e06f78d696cf64:"Höhe Werkstück (Dicke)",s5a5a2a1aba8c5854:"Geringste Distanz zwischen Schwalben",s5bb297d85a6de998:"Winkel",s612ed89adcd17e0a:"Breite Werkstück",s6306bd8aba13962f:"Benötigte Risse auf der Mittellinie des Zinkenstücks",s68496602df547d5c:"Schwalben",s737a095964aeb3c8:"Verhältnis Schwalbe/Zinke",sa61967bcda24ab18:"Quelltext auf GitHub",saad72578f030aacd:"fein",sb1a53cd9697257e1:"https://www.youtube.com/watch?v=OhKzkUbvSC8",sb38cd24a8470eada:"Bitte verwenden und teilen, dies ist freie Software lizenziert unter der Apache License 2.0.",sc76a095e1ffa22b6:"mittel",scc11850e140eab25:"Teile",se9bed519c6a36725:"Zinken"},ei=Object.freeze(Object.defineProperty({__proto__:null,templates:Xt},Symbol.toStringTag,{value:"Module"})),ti={h1d510fd53dcb1e0c:g`Il s’agit d’une calculatrice et d’un visualiseur pour
    les assemblages à
    <a href="${0}">queue d’aronde</a>
    utilisés dans le travail du bois. Il détermine d’abord le nombre de queues
    d’aronde en fonction de la largeur/hauteur de la pièce, comme le montre
    <a href="${1}">Hauke Schmidt</a>. Ensuite, l’angle de la queue d’aronde est
    développé comme décrit par <a href="${2}">Fritz Spannagel</a>, où un
    triangle de trois fois la hauteur de la pièce est formé.`,s04a6158ea5723980:"https://d-nb.info/830690026",s16377c5d9cbfde84:"grossière",s255857544a9d5ec0:"Réinitialiser",s2b606c448ab12d87:"https://fr.wikipedia.org/wiki/Assemblage_%C3%A0_queue-d%27aronde",s3b3ea038c5d3bb06:"Division",s52e06f78d696cf64:"Hauteur de la pièce (épaisseur)",s5a5a2a1aba8c5854:"Distance minimale entre les queues",s5bb297d85a6de998:"Angle",s612ed89adcd17e0a:"Largeur de la pièce",s6306bd8aba13962f:"Fissures nécessaires sur la ligne médiane de la pièce des mâles",s68496602df547d5c:"Queues",s737a095964aeb3c8:"Rapport entre la queue et le mâle",sa61967bcda24ab18:"Source sur GitHub",saad72578f030aacd:"fine",sb1a53cd9697257e1:"https://www.youtube.com/watch?v=OhKzkUbvSC8",sb38cd24a8470eada:"Veuillez utiliser et partager, ceci est un logiciel libre sous les termes de la Licence Apache 2.0.",sc76a095e1ffa22b6:"moyenne",scc11850e140eab25:"Pièces",se9bed519c6a36725:"Mâles"},ii=Object.freeze(Object.defineProperty({__proto__:null,templates:ti},Symbol.toStringTag,{value:"Module"})),it="locale",si=new Map([["de",ei],["fr",ii]]),{getLocale:Te,setLocale:st}=Nt({sourceLocale:Xe,targetLocales:qt,loadLocale:async i=>{const e=si.get(i);if(!e)throw new Error("Unsupported locale");return e}});function ri(){const i=navigator.language.split("-")[0],e=et.includes(i)?i:Xe,t=localStorage.getItem(it)??e;st(t),document.documentElement.lang=t}async function ni(i){await st(i),localStorage.setItem(it,i),document.documentElement.lang=i}var oi=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,K=(i,e,t,r)=>{for(var s=r>1?void 0:r?ai(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&oi(e,t,s),s},R=(i=>(i.Fine="fine",i.Medium="medium",i.Coarse="coarse",i))(R||{});const hi={fine:1,medium:2/3,coarse:.5},Me="workpieceWidth",Le="workpieceHeight",Re="division",xe="tailPinRatio",Ie=100,Ue=15,De="medium",ze=2;let T=class extends _{constructor(){super(),this.workpieceWidth=Number(this.readValue(Me,Ie)),this.workpieceHeight=Number(this.readValue(Le,Ue)),this.division=this.readValue(Re,De),this.tailPinRatio=Number(this.readValue(xe,ze)),this.handleFormChange=i=>{i instanceof CustomEvent&&(i.detail.workpieceWidth?this.handleWorkpieceWidthChange(i.detail.workpieceWidth):i.detail.workpieceHeight?this.handleWorkpieceHeightChange(i.detail.workpieceHeight):i.detail.division?this.handleDivisionChange(i.detail.division):i.detail.tailPinRatio&&this.handleTailPinRatioChange(i.detail.tailPinRatio))},this.handleFormReset=()=>{this.handleWorkpieceWidthChange(Ie),this.handleWorkpieceHeightChange(Ue),this.handleDivisionChange(De),this.handleTailPinRatioChange(ze)},ri()}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*hi[this.division])}get pinsCount(){return this.tailsCount+1}get partsCount(){const i=this.pinsCount,e=this.tailsCount*this.tailPinRatio;return i+e}get partWidth(){return this.workpieceWidth/this.partsCount}get pinWidth(){return this.partWidth*1}get tailWidth(){return this.partWidth*this.tailPinRatio}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}connectedCallback(){super.connectedCallback(),this.addEventListener("dt-form-change",this.handleFormChange),this.addEventListener("dt-form-reset",this.handleFormReset)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener("dt-form-change",this.handleFormChange),this.removeEventListener("dt-form-reset",this.handleFormReset)}handleWorkpieceWidthChange(i){this.workpieceWidth=i,this.storeValue(Me,this.workpieceWidth)}handleWorkpieceHeightChange(i){this.workpieceHeight=i,this.storeValue(Le,this.workpieceHeight)}handleDivisionChange(i){this.division=i,this.storeValue(Re,this.division)}handleTailPinRatioChange(i){this.tailPinRatio=i,this.storeValue(xe,this.tailPinRatio)}storeValue(i,e){localStorage.setItem(i,String(e))}readValue(i,e){return localStorage.getItem(i)??String(e)}render(){console.log("render",Te());const i=d("https://en.wikipedia.org/wiki/Dovetail_joint"),e=d("https://www.youtube.com/watch?v=OhKzkUbvSC8"),t=d("https://d-nb.info/830690026");return g`
      <h1>Schwalben & Zinken</h1>
      <section class="explanation">
        ${d(g`This is a calculator and visualizer for
            <a href="${i}">dovetail joints</a>
            used in woodworking. It first determines the number of dovetails
            based on the width/height of the workpiece, like
            <a href="${e}">Hauke Schmidt</a>
            demonstrates. Then the dovetail angle is developed as described by
            <a href="${t}">Fritz Spannagel</a>, where a triangle
            with three times the height of the workpiece is formed.`)}
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
          >${d("Source on GitHub")}</a
        >
        ·
        © <a href="https://bitgarten.ch">Mathis Hofer</a>
        ·
        ${d("Please use and share, this is free software under the terms of the Apache License 2.0.")}
        ·
        <ul class="locales">${Pt(et,r=>g`<li><button class=${St({active:r===Te()})} @click=${()=>ni(r)}>${r}</button></li>`)}
      </section>
    `}};T.styles=te`
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

    .locales {
      list-style: none;
      margin: 0;
      padding: 0;
      display: inline-flex;
      gap: 1ch;
    }

    .locales button {
      padding: 0;
      border: 0;
      background: none;
      font-size: 0.7rem;
      text-decoration: underline;
      cursor: pointer;
    }

    .locales button.active {
      font-weight: 600;
    }
  `;K([se()],T.prototype,"workpieceWidth",2);K([se()],T.prototype,"workpieceHeight",2);K([se()],T.prototype,"division",2);K([se()],T.prototype,"tailPinRatio",2);T=K([B("dovetail-calculator"),re()],T);
