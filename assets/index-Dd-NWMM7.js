(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,pe=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),me=new WeakMap;let Ne=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pe&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&me.set(t,e))}return e}toString(){return this.cssText}};const st=i=>new Ne(typeof i=="string"?i:i+"",void 0,fe),ee=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new Ne(t,i,fe)},rt=(i,e)=>{if(pe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=G.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},ve=pe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return st(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nt,defineProperty:ot,getOwnPropertyDescriptor:at,getOwnPropertyNames:ht,getOwnPropertySymbols:lt,getPrototypeOf:ct}=Object,A=globalThis,_e=A.trustedTypes,dt=_e?_e.emptyScript:"",ne=A.reactiveElementPolyfillSupport,I=(i,e)=>i,Y={toAttribute(i,e){switch(e){case Boolean:i=i?dt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ge=(i,e)=>!nt(i,e),be={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ge};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&ot(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=at(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=ct(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,r=[...ht(t),...lt(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(ve(s))}else e!==void 0&&t.push(ve(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Y).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Y;this._$Em=s,this[s]=h.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??ge)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[I("elementProperties")]=new Map,M[I("finalized")]=new Map,ne==null||ne({ReactiveElement:M}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,J=U.trustedTypes,we=J?J.createPolicy("lit-html",{createHTML:i=>i}):void 0,je="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+y,ut=`<${Ve}>`,P=document,D=()=>P.createComment(""),z=i=>i===null||typeof i!="object"&&typeof i!="function",$e=Array.isArray,pt=i=>$e(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",oe=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,Ae=/>/g,k=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,ke=/"/g,Fe=/^(?:script|style|textarea|title)$/i,Be=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=Be(1),Ce=Be(2),W=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Se=new WeakMap,S=P.createTreeWalker(P,129);function qe(i,e){if(!$e(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return we!==void 0?we.createHTML(e):e}const ft=(i,e)=>{const t=i.length-1,r=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=x;for(let h=0;h<t;h++){const a=i[h];let c,f,l=-1,m=0;for(;m<a.length&&(o.lastIndex=m,f=o.exec(a),f!==null);)m=o.lastIndex,o===x?f[1]==="!--"?o=ye:f[1]!==void 0?o=Ae:f[2]!==void 0?(Fe.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=k):f[3]!==void 0&&(o=k):o===k?f[0]===">"?(o=s??x,l=-1):f[1]===void 0?l=-2:(l=o.lastIndex-f[2].length,c=f[1],o=f[3]===void 0?k:f[3]==='"'?ke:Ee):o===ke||o===Ee?o=k:o===ye||o===Ae?o=x:(o=k,s=void 0);const w=o===k&&i[h+1].startsWith("/>")?" ":"";n+=o===x?a+ut:l>=0?(r.push(c),a.slice(0,l)+je+a.slice(l)+y+w):a+y+(l===-2?h:w)}return[qe(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class N{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[c,f]=ft(e,t);if(this.el=N.createElement(c,r),S.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=S.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(je)){const m=f[o++],w=s.getAttribute(l).split(y),K=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:K[2],strings:w,ctor:K[1]==="."?$t:K[1]==="?"?mt:K[1]==="@"?vt:te}),s.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(Fe.test(s.tagName)){const l=s.textContent.split(y),m=l.length-1;if(m>0){s.textContent=J?J.emptyScript:"";for(let w=0;w<m;w++)s.append(l[w],D()),S.nextNode(),a.push({type:2,index:++n});s.append(l[m],D())}}}else if(s.nodeType===8)if(s.data===Ve)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:n}),l+=y.length-1}n++}}static createElement(e,t){const r=P.createElement("template");return r.innerHTML=e,r}}function R(i,e,t=i,r){var o,h;if(e===W)return e;let s=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=z(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=R(i,s._$AS(i,e.values),s,r)),e}class gt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??P).importNode(t,!0);S.currentNode=s;let n=S.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new V(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new _t(n,this,e)),this._$AV.push(c),a=r[++h]}o!==(a==null?void 0:a.index)&&(n=S.nextNode(),o++)}return S.currentNode=P,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class V{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),z(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=N.createElement(qe(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new gt(s,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new N(e)),t}k(e){$e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new V(this.O(D()),this.O(D()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(e,t=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=R(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==W,o&&(this._$AH=e);else{const h=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=R(this,h[r+a],t,a),c===W&&(c=this._$AH[a]),o||(o=!z(c)||c!==this._$AH[a]),c===p?e=p:e!==p&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $t extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class mt extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class vt extends te{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??p)===W)return;const r=this._$AH,s=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class _t{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const ae=U.litHtmlPolyfillSupport;ae==null||ae(N,V),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.1");const bt=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new V(e.insertBefore(D(),n),n,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return W}};var ze;_._$litElement$=!0,_.finalized=!0,(ze=globalThis.litElementHydrateSupport)==null||ze.call(globalThis,{LitElement:_});const he=globalThis.litElementPolyfillSupport;he==null||he({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ge},yt=(i=wt,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,i)},init(h){return h!==void 0&&this.P(o,void 0,i),h}}}if(r==="setter"){const{name:o}=t;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(e,t)=>typeof t=="object"?yt(i,e,t):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(i){return u({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At={ATTRIBUTE:1},Et=i=>(...e)=>({_$litDirective$:i,values:e});class kt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=Et(class extends kt{constructor(i){var e;if(super(i),i.type!==At.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var r,s;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return W}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*St(i,e){if(i!==void 0){let t=0;for(const r of i)yield e(r,t++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=i=>typeof i!="string"&&"strTag"in i,Ke=(i,e,t)=>{let r=i[0];for(let s=1;s<i.length;s++)r+=e[t?t[s-1]:s-1],r+=i[s];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=i=>Pt(i)?Ke(i.strings,i.values):i;let d=Ze,Pe=!1;function Wt(i){if(Pe)throw new Error("lit-localize can only be configured once");d=i,Pe=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ot{constructor(e){this.__litLocalizeEventHandler=t=>{t.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(de,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(de,this.__litLocalizeEventHandler)}}const Tt=i=>i.addController(new Ot(i)),Ht=Tt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=()=>(i,e)=>(i.addInitializer(Ht),i);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ge{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const v=[];for(let i=0;i<256;i++)v[i]=(i>>4&15).toString(16)+(i&15).toString(16);function Mt(i){let e=0,t=8997,r=0,s=33826,n=0,o=40164,h=0,a=52210;for(let c=0;c<i.length;c++)t^=i.charCodeAt(c),e=t*435,r=s*435,n=o*435,h=a*435,n+=t<<8,h+=s<<8,r+=e>>>16,t=e&65535,n+=r>>>16,s=r&65535,a=h+(n>>>16)&65535,o=n&65535;return v[a>>8]+v[a&255]+v[o>>8]+v[o&255]+v[s>>8]+v[s&255]+v[t>>8]+v[t&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt="",Rt="h",xt="s";function It(i,e){return(e?Rt:xt)+Mt(typeof i=="string"?i:i.join(Lt))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=new WeakMap,Oe=new Map;function Ut(i,e,t){if(i){const r=(t==null?void 0:t.id)??Dt(e),s=i[r];if(s){if(typeof s=="string")return s;if("strTag"in s)return Ke(s.strings,e.values,s.values);{let n=We.get(s);return n===void 0&&(n=s.values,We.set(s,n)),{...s,values:n.map(o=>e.values[o])}}}}return Ze(e)}function Dt(i){const e=typeof i=="string"?i:i.strings;let t=Oe.get(e);return t===void 0&&(t=It(e,typeof i!="string"&&!("strTag"in i)),Oe.set(e,t)),t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(i){window.dispatchEvent(new CustomEvent(de,{detail:i}))}let Q="",ce,Ye,X,ue,Je,C=new Ge;C.resolve();let Z=0;const zt=i=>(Wt((e,t)=>Ut(Je,e,t)),Q=Ye=i.sourceLocale,X=new Set(i.targetLocales),X.add(i.sourceLocale),ue=i.loadLocale,{getLocale:Nt,setLocale:jt}),Nt=()=>Q,jt=i=>{if(i===(ce??Q))return C.promise;if(!X||!ue)throw new Error("Internal error");if(!X.has(i))throw new Error("Invalid locale code");Z++;const e=Z;return ce=i,C.settled&&(C=new Ge),le({status:"loading",loadingLocale:i}),(i===Ye?Promise.resolve({templates:void 0}):ue(i)).then(r=>{Z===e&&(Q=i,ce=void 0,Je=r.templates,le({status:"ready",readyLocale:i}),C.resolve())},r=>{Z===e&&(le({status:"error",errorLocale:i,errorMessage:r.toString()}),C.reject(r))}),C.promise};var Vt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,B=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ft(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Vt(e,t,s),s};let O=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.division=L.Medium,this.tailPinRatio=0}onWorkpieceWidthChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{workpieceWidth:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onWorkpieceHeightChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{workpieceHeight:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onDivisionChange(i){const e=new CustomEvent("dt-form-change",{detail:{division:i},bubbles:!0,composed:!0});this.dispatchEvent(e)}onTailPinRatioChange(i){const e=typeof i=="number"?i:Number(i.target.value),t=new CustomEvent("dt-form-change",{detail:{tailPinRatio:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}onReset(){this.dispatchEvent(new CustomEvent("dt-form-reset",{bubbles:!0,composed:!0}))}getDivisionLabel(i){switch(i){case L.Fine:return d("fine");case L.Medium:return d("medium");case L.Coarse:return d("coarse");default:{const e=i;throw new Error(e)}}}render(){return g`
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
          ${Object.values(L).map(i=>g`
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
    `}};O.styles=ee`
    input[type="number"] {
      width: 8ch;
    }
  `;B([u()],O.prototype,"workpieceWidth",2);B([u()],O.prototype,"workpieceHeight",2);B([u()],O.prototype,"division",2);B([u()],O.prototype,"tailPinRatio",2);O=B([F("dt-form"),se()],O);const Qe="en",Bt=["de","fr"],Xe=["de","en","fr"];var qt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,E=(i,e,t,r)=>{for(var s=r>1?void 0:r?Kt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&qt(e,t,s),s};let $=class extends _{constructor(){super(...arguments),this.partsCount=0,this.partWidth=0,this.pinWidth=0,this.tailsCount=0,this.tailWidth=0,this.angle=0,this.tailMarkOffset=0}render(){return g`
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
    `}};$.styles=ee`
    .unrounded {
      color: #999;
    }
  `;E([u()],$.prototype,"partsCount",2);E([u()],$.prototype,"partWidth",2);E([u()],$.prototype,"pinWidth",2);E([u()],$.prototype,"tailsCount",2);E([u()],$.prototype,"tailWidth",2);E([u()],$.prototype,"angle",2);E([u()],$.prototype,"tailMarkOffset",2);$=E([F("dt-info"),se()],$);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*et(i,e){const t=typeof e=="function";if(i!==void 0){let r=-1;for(const s of i)r>-1&&(yield t?e(r):e),r++,yield s}}var Zt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,re=(i,e,t,r)=>{for(var s=r>1?void 0:r?Gt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Zt(e,t,s),s};let j=class extends _{constructor(){super(...arguments),this.pinWidth=0,this.tailsCount=0,this.tailWidth=0}getMarks(){const i=[];for(let e=0;e<this.tailsCount;e+=1){const t=e*(this.pinWidth+this.tailWidth);i.push(Math.round(t+this.pinWidth)),i.push(Math.round(t+this.pinWidth+this.tailWidth))}return i}render(){return g`${d("Required marks on center line of pins piece")}:<br />${et(this.getMarks(),", ")} mm`}};re([u()],j.prototype,"pinWidth",2);re([u()],j.prototype,"tailsCount",2);re([u()],j.prototype,"tailWidth",2);j=re([F("dt-marks"),se()],j);var Yt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,H=(i,e,t,r)=>{for(var s=r>1?void 0:r?Jt(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Yt(e,t,s),s};let b=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.tailsCount=0,this.pinWidth=0,this.tailWidth=0,this.tailMarkOffset=0}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}renderWorkpiece(){return Ce`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const i=new Array(this.tailsCount).fill(void 0).map((e,t)=>this.renderTail(t*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return et(i,"")}renderTail(i,e){return Ce`
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
    `}};b.styles=ee`
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
  `;H([u()],b.prototype,"workpieceWidth",2);H([u()],b.prototype,"workpieceHeight",2);H([u()],b.prototype,"tailsCount",2);H([u()],b.prototype,"pinWidth",2);H([u()],b.prototype,"tailWidth",2);H([u()],b.prototype,"tailMarkOffset",2);b=H([F("dt-preview")],b);const Qt={h1d510fd53dcb1e0c:g`Dies ist eine Berechnungs- und Visualisierungshilfe
    für
    <a href="${0}">Schwalbenschwanzverbindungen</a>
    wie sie in der Holzbearbeitung verwendet werden. Zuerst wird die Anzahl
    Schwalbenschwänze ermittelt, basierend auf der Breite/Höhe des Werkstücks,
    wie es
    <a href="${1}">Hauke Schmidt</a>
    demonstriert. Danach wird der Schwalbenschwanzwinkel – wie von
    <a href="${2}">Fritz Spannagel</a>, beschrieben – entwickelt, indem ein
    Dreieck mit der dreifachen Höhe des Werkstücks gebildet wird.`,s04a6158ea5723980:"https://d-nb.info/830690026",s16377c5d9cbfde84:"grob",s255857544a9d5ec0:"Zurücksetzen",s2b606c448ab12d87:"https://de.wikipedia.org/wiki/Schwalbenschwanzverbindung",s3b3ea038c5d3bb06:"Teilung",s52e06f78d696cf64:"Höhe Werkstück (Dicke)",s5a5a2a1aba8c5854:"Geringste Distanz zwischen Schwalben",s5bb297d85a6de998:"Winkel",s612ed89adcd17e0a:"Breite Werkstück",s6306bd8aba13962f:"Benötigte Risse auf der Mittellinie des Zinkenstücks",s68496602df547d5c:"Schwalben",s737a095964aeb3c8:"Verhältnis Schwalbe/Zinke",sa61967bcda24ab18:"Quelltext auf GitHub",saad72578f030aacd:"fein",sb1a53cd9697257e1:"https://www.youtube.com/watch?v=OhKzkUbvSC8",sb38cd24a8470eada:"Bitte verwenden und teilen, dies ist freie Software lizenziert unter der Apache License 2.0.",sc76a095e1ffa22b6:"mittel",scc11850e140eab25:"Teile",se9bed519c6a36725:"Zinken"},Xt=Object.freeze(Object.defineProperty({__proto__:null,templates:Qt},Symbol.toStringTag,{value:"Module"})),ei={h1d510fd53dcb1e0c:g`Il s’agit d’une calculatrice et d’un visualiseur pour
    les assemblages à
    <a href="${0}">queue d’aronde</a>
    utilisés dans le travail du bois. Il détermine d’abord le nombre de queues
    d’aronde en fonction de la largeur/hauteur de la pièce, comme le montre
    <a href="${1}">Hauke Schmidt</a>. Ensuite, l’angle de la queue d’aronde est
    développé comme décrit par <a href="${2}">Fritz Spannagel</a>, où un
    triangle de trois fois la hauteur de la pièce est formé.`,s04a6158ea5723980:"https://d-nb.info/830690026",s16377c5d9cbfde84:"grossière",s255857544a9d5ec0:"Réinitialiser",s2b606c448ab12d87:"https://fr.wikipedia.org/wiki/Assemblage_%C3%A0_queue-d%27aronde",s3b3ea038c5d3bb06:"Division",s52e06f78d696cf64:"Hauteur de la pièce (épaisseur)",s5a5a2a1aba8c5854:"Distance minimale entre les queues",s5bb297d85a6de998:"Angle",s612ed89adcd17e0a:"Largeur de la pièce",s6306bd8aba13962f:"Fissures nécessaires sur la ligne médiane de la pièce des mâles",s68496602df547d5c:"Queues",s737a095964aeb3c8:"Rapport entre la queue et le mâle",sa61967bcda24ab18:"Source sur GitHub",saad72578f030aacd:"fine",sb1a53cd9697257e1:"https://www.youtube.com/watch?v=OhKzkUbvSC8",sb38cd24a8470eada:"Veuillez utiliser et partager, ceci est un logiciel libre sous les termes de la Licence Apache 2.0.",sc76a095e1ffa22b6:"moyenne",scc11850e140eab25:"Pièces",se9bed519c6a36725:"Mâles"},ti=Object.freeze(Object.defineProperty({__proto__:null,templates:ei},Symbol.toStringTag,{value:"Module"})),tt="locale",ii=new Map([["de",Xt],["fr",ti]]),{getLocale:Te,setLocale:it}=zt({sourceLocale:Qe,targetLocales:Bt,loadLocale:async i=>{const e=ii.get(i);if(!e)throw new Error("Unsupported locale");return e}});function si(){const i=navigator.language.split("-")[0],e=Xe.includes(i)?i:Qe,t=localStorage.getItem(tt)??e;it(t),document.documentElement.lang=t}async function ri(i){await it(i),localStorage.setItem(tt,i),document.documentElement.lang=i}var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,q=(i,e,t,r)=>{for(var s=r>1?void 0:r?oi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ni(e,t,s),s},L=(i=>(i.Fine="fine",i.Medium="medium",i.Coarse="coarse",i))(L||{});const ai={fine:1,medium:2/3,coarse:.5},He="workpieceWidth",Me="workpieceHeight",Le="division",Re="tailPinRatio",xe=100,Ie=15,Ue="medium",De=2;let T=class extends _{constructor(){super(),this.workpieceWidth=Number(this.readValue(He,xe)),this.workpieceHeight=Number(this.readValue(Me,Ie)),this.division=this.readValue(Le,Ue),this.tailPinRatio=Number(this.readValue(Re,De)),this.handleFormChange=i=>{i instanceof CustomEvent&&(i.detail.workpieceWidth?this.handleWorkpieceWidthChange(i.detail.workpieceWidth):i.detail.workpieceHeight?this.handleWorkpieceHeightChange(i.detail.workpieceHeight):i.detail.division?this.handleDivisionChange(i.detail.division):i.detail.tailPinRatio&&this.handleTailPinRatioChange(i.detail.tailPinRatio))},this.handleFormReset=()=>{this.handleWorkpieceWidthChange(xe),this.handleWorkpieceHeightChange(Ie),this.handleDivisionChange(Ue),this.handleTailPinRatioChange(De)},si()}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*ai[this.division])}get pinsCount(){return this.tailsCount+1}get partsCount(){const i=this.pinsCount,e=this.tailsCount*this.tailPinRatio;return i+e}get partWidth(){return this.workpieceWidth/this.partsCount}get pinWidth(){return this.partWidth*1}get tailWidth(){return this.partWidth*this.tailPinRatio}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}connectedCallback(){super.connectedCallback(),this.addEventListener("dt-form-change",this.handleFormChange),this.addEventListener("dt-form-reset",this.handleFormReset)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener("dt-form-change",this.handleFormChange),this.removeEventListener("dt-form-reset",this.handleFormReset)}handleWorkpieceWidthChange(i){this.workpieceWidth=i,this.storeValue(He,this.workpieceWidth)}handleWorkpieceHeightChange(i){this.workpieceHeight=i,this.storeValue(Me,this.workpieceHeight)}handleDivisionChange(i){this.division=i,this.storeValue(Le,this.division)}handleTailPinRatioChange(i){this.tailPinRatio=i,this.storeValue(Re,this.tailPinRatio)}storeValue(i,e){localStorage.setItem(i,String(e))}readValue(i,e){return localStorage.getItem(i)??String(e)}render(){console.log("render",Te());const i=d("https://en.wikipedia.org/wiki/Dovetail_joint"),e=d("https://www.youtube.com/watch?v=OhKzkUbvSC8"),t=d("https://d-nb.info/830690026");return g`
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
        <ul class="locales">${St(Xe,r=>g`<li><button class=${Ct({active:r===Te()})} @click=${()=>ri(r)}>${r}</button></li>`)}
      </section>
    `}};T.styles=ee`
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
  `;q([ie()],T.prototype,"workpieceWidth",2);q([ie()],T.prototype,"workpieceHeight",2);q([ie()],T.prototype,"division",2);q([ie()],T.prototype,"tailPinRatio",2);T=q([F("dovetail-calculator"),se()],T);
