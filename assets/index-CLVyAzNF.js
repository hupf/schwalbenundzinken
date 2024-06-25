(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,ue=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),$e=new WeakMap;let Ne=class{constructor(e,i,r){if(this._$cssResult$=!0,r!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(ue&&e===void 0){const r=i!==void 0&&i.length===1;r&&(e=$e.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&$e.set(i,e))}return e}toString(){return this.cssText}};const st=t=>new Ne(typeof t=="string"?t:t+"",void 0,fe),ee=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new Ne(i,t,fe)},rt=(t,e)=>{if(ue)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const r=document.createElement("style"),s=Z.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=i.cssText,t.appendChild(r)}},me=ue?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const r of e.cssRules)i+=r.cssText;return st(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nt,defineProperty:ot,getOwnPropertyDescriptor:at,getOwnPropertyNames:ht,getOwnPropertySymbols:lt,getPrototypeOf:ct}=Object,A=globalThis,ve=A.trustedTypes,dt=ve?ve.emptyScript:"",ne=A.reactiveElementPolyfillSupport,I=(t,e)=>t,Y={toAttribute(t,e){switch(e){case Boolean:t=t?dt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},ge=(t,e)=>!nt(t,e),_e={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ge};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=_e){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,i);s!==void 0&&ot(this.prototype,e,s)}}static getPropertyDescriptor(e,i,r){const{get:s,set:n}=at(this.prototype,e)??{get(){return this[i]},set(o){this[i]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const h=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=ct(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const i=this.properties,r=[...ht(i),...lt(i)];for(const s of r)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[r,s]of i)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const s=this._$Eu(i,r);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)i.unshift(me(s))}else e!==void 0&&i.push(me(e));return i}static _$Eu(e,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(e,i,r){this._$AK(e,r)}_$EC(e,i){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Y).toAttribute(i,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,i){var n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Y;this._$Em=s,this[s]=h.fromAttribute(i,o.type),this._$Em=null}}requestUpdate(e,i,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??ge)(this[e],i))return;this.P(e,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,r){this._$AL.has(e)||this._$AL.set(e,i),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[I("elementProperties")]=new Map,M[I("finalized")]=new Map,ne==null||ne({ReactiveElement:M}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,J=U.trustedTypes,be=J?J.createPolicy("lit-html",{createHTML:t=>t}):void 0,ze="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,je="?"+y,pt=`<${je}>`,P=document,D=()=>P.createComment(""),N=t=>t===null||typeof t!="object"&&typeof t!="function",Ve=Array.isArray,ut=t=>Ve(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",oe=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,ye=/>/g,k=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ee=/"/g,Fe=/^(?:script|style|textarea|title)$/i,Be=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),g=Be(1),ke=Be(2),W=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ce=new WeakMap,S=P.createTreeWalker(P,129);function qe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return be!==void 0?be.createHTML(e):e}const ft=(t,e)=>{const i=t.length-1,r=[];let s,n=e===2?"<svg>":"",o=x;for(let h=0;h<i;h++){const a=t[h];let c,f,l=-1,m=0;for(;m<a.length&&(o.lastIndex=m,f=o.exec(a),f!==null);)m=o.lastIndex,o===x?f[1]==="!--"?o=we:f[1]!==void 0?o=ye:f[2]!==void 0?(Fe.test(f[2])&&(s=RegExp("</"+f[2],"g")),o=k):f[3]!==void 0&&(o=k):o===k?f[0]===">"?(o=s??x,l=-1):f[1]===void 0?l=-2:(l=o.lastIndex-f[2].length,c=f[1],o=f[3]===void 0?k:f[3]==='"'?Ee:Ae):o===Ee||o===Ae?o=k:o===we||o===ye?o=x:(o=k,s=void 0);const w=o===k&&t[h+1].startsWith("/>")?" ":"";n+=o===x?a+pt:l>=0?(r.push(c),a.slice(0,l)+ze+a.slice(l)+y+w):a+y+(l===-2?h:w)}return[qe(t,n+(t[i]||"<?>")+(e===2?"</svg>":"")),r]};class z{constructor({strings:e,_$litType$:i},r){let s;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[c,f]=ft(e,i);if(this.el=z.createElement(c,r),S.currentNode=this.el.content,i===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=S.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ze)){const m=f[o++],w=s.getAttribute(l).split(y),K=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:K[2],strings:w,ctor:K[1]==="."?$t:K[1]==="?"?mt:K[1]==="@"?vt:te}),s.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(Fe.test(s.tagName)){const l=s.textContent.split(y),m=l.length-1;if(m>0){s.textContent=J?J.emptyScript:"";for(let w=0;w<m;w++)s.append(l[w],D()),S.nextNode(),a.push({type:2,index:++n});s.append(l[m],D())}}}else if(s.nodeType===8)if(s.data===je)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:n}),l+=y.length-1}n++}}static createElement(e,i){const r=P.createElement("template");return r.innerHTML=e,r}}function R(t,e,i=t,r){var o,h;if(e===W)return e;let s=r!==void 0?(o=i._$Co)==null?void 0:o[r]:i._$Cl;const n=N(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=s:i._$Cl=s),s!==void 0&&(e=R(t,s._$AS(t,e.values),s,r)),e}class gt{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??P).importNode(i,!0);S.currentNode=s;let n=S.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new V(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new _t(n,this,e)),this._$AV.push(c),a=r[++h]}o!==(a==null?void 0:a.index)&&(n=S.nextNode(),o++)}return S.currentNode=P,s}p(e){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,i),i+=r.strings.length-2):r._$AI(e[i])),i++}}class V{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,r,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=R(this,e,i),N(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ut(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var n;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=z.createElement(qe(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(i);else{const o=new gt(s,this),h=o.u(this.options);o.p(i),this.T(h),this._$AH=o}}_$AC(e){let i=Ce.get(e.strings);return i===void 0&&Ce.set(e.strings,i=new z(e)),i}k(e){Ve(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,s=0;for(const n of e)s===i.length?i.push(r=new V(this.S(D()),this.S(D()),this,this.options)):r=i[s],r._$AI(n),s++;s<i.length&&(this._$AR(r&&r._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,r,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,i=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=R(this,e,i,0),o=!N(e)||e!==this._$AH&&e!==W,o&&(this._$AH=e);else{const h=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=R(this,h[r+a],i,a),c===W&&(c=this._$AH[a]),o||(o=!N(c)||c!==this._$AH[a]),c===u?e=u:e!==u&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $t extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class mt extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class vt extends te{constructor(e,i,r,s,n){super(e,i,r,s,n),this.type=5}_$AI(e,i=this){if((e=R(this,e,i,0)??u)===W)return;const r=this._$AH,s=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==u&&(r===u||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class _t{constructor(e,i,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const ae=U.litHtmlPolyfillSupport;ae==null||ae(z,V),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.4");const bt=(t,e,i)=>{const r=(i==null?void 0:i.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(i==null?void 0:i.renderBefore)??null;r._$litPart$=s=new V(e.insertBefore(D(),n),n,void 0,i??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bt(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return W}}var De;_._$litElement$=!0,_.finalized=!0,(De=globalThis.litElementHydrateSupport)==null||De.call(globalThis,{LitElement:_});const he=globalThis.litElementPolyfillSupport;he==null||he({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ge},yt=(t=wt,e,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(i.name,t),r==="accessor"){const{name:o}=i;return{set(h){const a=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,a,t)},init(h){return h!==void 0&&this.P(o,void 0,t),h}}}if(r==="setter"){const{name:o}=i;return function(h){const a=this[o];e.call(this,h),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+r)};function p(t){return(e,i)=>typeof i=="object"?yt(t,e,i):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(t){return p({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Et=t=>(...e)=>({_$litDirective$:t,values:e});class kt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=Et(class extends kt{constructor(t){var e;if(super(t),t.type!==At.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return W}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*St(t,e){if(t!==void 0){let i=0;for(const r of t)yield e(r,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=t=>typeof t!="string"&&"strTag"in t,Ke=(t,e,i)=>{let r=t[0];for(let s=1;s<t.length;s++)r+=e[i?i[s-1]:s-1],r+=t[s];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=t=>Pt(t)?Ke(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(de,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(de,this.__litLocalizeEventHandler)}}const Tt=t=>t.addController(new Wt(t)),Ot=Tt;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=()=>(t,e)=>(t.addInitializer(Ot),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ze{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const v=[];for(let t=0;t<256;t++)v[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Ht(t){let e=0,i=8997,r=0,s=33826,n=0,o=40164,h=0,a=52210;for(let c=0;c<t.length;c++)i^=t.charCodeAt(c),e=i*435,r=s*435,n=o*435,h=a*435,n+=i<<8,h+=s<<8,r+=e>>>16,i=e&65535,n+=r>>>16,s=r&65535,a=h+(n>>>16)&65535,o=n&65535;return v[a>>8]+v[a&255]+v[o>>8]+v[o&255]+v[s>>8]+v[s&255]+v[i>>8]+v[i&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt="",Lt="h",Rt="s";function xt(t,e){return(e?Lt:Rt)+Ht(typeof t=="string"?t:t.join(Mt))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=new WeakMap,Pe=new Map;function It(t,e,i){if(t){const r=(i==null?void 0:i.id)??Ut(e),s=t[r];if(s){if(typeof s=="string")return s;if("strTag"in s)return Ke(s.strings,e.values,s.values);{let n=Se.get(s);return n===void 0&&(n=s.values,Se.set(s,n)),{...s,values:n.map(o=>e.values[o])}}}}return Ge(e)}function Ut(t){const e=typeof t=="string"?t:t.strings;let i=Pe.get(e);return i===void 0&&(i=xt(e,typeof t!="string"&&!("strTag"in t)),Pe.set(e,i)),i}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(t){window.dispatchEvent(new CustomEvent(de,{detail:t}))}let Q="",ce,Ye,X,pe,Je,C=new Ze;C.resolve();let G=0;const Dt=t=>(jt((e,i)=>It(Je,e,i)),Q=Ye=t.sourceLocale,X=new Set(t.targetLocales),X.add(t.sourceLocale),pe=t.loadLocale,{getLocale:Nt,setLocale:zt}),Nt=()=>Q,zt=t=>{if(t===(ce??Q))return C.promise;if(!X||!pe)throw new Error("Internal error");if(!X.has(t))throw new Error("Invalid locale code");G++;const e=G;return ce=t,C.settled&&(C=new Ze),le({status:"loading",loadingLocale:t}),(t===Ye?Promise.resolve({templates:void 0}):pe(t)).then(r=>{G===e&&(Q=t,ce=void 0,Je=r.templates,le({status:"ready",readyLocale:t}),C.resolve())},r=>{G===e&&(le({status:"error",errorLocale:t,errorMessage:r.toString()}),C.reject(r))}),C.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let d=Ge,We=!1;function jt(t){if(We)throw new Error("lit-localize can only be configured once");d=t,We=!0}var Vt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,B=(t,e,i,r)=>{for(var s=r>1?void 0:r?Ft(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&Vt(e,i,s),s};let T=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.division=L.Medium,this.tailPinRatio=0}onWorkpieceWidthChange(t){const e=typeof t=="number"?t:Number(t.target.value),i=new CustomEvent("dt-form-change",{detail:{workpieceWidth:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}onWorkpieceHeightChange(t){const e=typeof t=="number"?t:Number(t.target.value),i=new CustomEvent("dt-form-change",{detail:{workpieceHeight:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}onDivisionChange(t){const e=new CustomEvent("dt-form-change",{detail:{division:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}onTailPinRatioChange(t){const e=typeof t=="number"?t:Number(t.target.value),i=new CustomEvent("dt-form-change",{detail:{tailPinRatio:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}onReset(){this.dispatchEvent(new CustomEvent("dt-form-reset",{bubbles:!0,composed:!0}))}getDivisionLabel(t){switch(t){case L.Fine:return d("fine");case L.Medium:return d("medium");case L.Coarse:return d("coarse");default:{const e=t;throw new Error(e)}}}render(){return g`
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
          ${Object.values(L).map(t=>g`
              <label>
                <input
                  name="division"
                  type="radio"
                  .value=${t}
                  .checked=${this.division===t}
                  @change=${()=>this.onDivisionChange(t)}
                />
                ${this.getDivisionLabel(t)}
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
    `}};T.styles=ee`
    input[type="number"] {
      width: 8ch;
    }
  `;B([p()],T.prototype,"workpieceWidth",2);B([p()],T.prototype,"workpieceHeight",2);B([p()],T.prototype,"division",2);B([p()],T.prototype,"tailPinRatio",2);T=B([F("dt-form"),se()],T);const Qe="en",Bt=["de","fr"],Xe=["de","en","fr"];var qt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,E=(t,e,i,r)=>{for(var s=r>1?void 0:r?Kt(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&qt(e,i,s),s};let $=class extends _{constructor(){super(...arguments),this.partsCount=0,this.partWidth=0,this.pinWidth=0,this.tailsCount=0,this.tailWidth=0,this.angle=0,this.tailMarkOffset=0}render(){return g`
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
  `;E([p()],$.prototype,"partsCount",2);E([p()],$.prototype,"partWidth",2);E([p()],$.prototype,"pinWidth",2);E([p()],$.prototype,"tailsCount",2);E([p()],$.prototype,"tailWidth",2);E([p()],$.prototype,"angle",2);E([p()],$.prototype,"tailMarkOffset",2);$=E([F("dt-info"),se()],$);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*et(t,e){const i=typeof e=="function";if(t!==void 0){let r=-1;for(const s of t)r>-1&&(yield i?e(r):e),r++,yield s}}var Gt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,re=(t,e,i,r)=>{for(var s=r>1?void 0:r?Zt(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&Gt(e,i,s),s};let j=class extends _{constructor(){super(...arguments),this.pinWidth=0,this.tailsCount=0,this.tailWidth=0}getMarks(){const t=[];for(let e=0;e<this.tailsCount;e+=1){const i=e*(this.pinWidth+this.tailWidth);t.push(Math.round(i+this.pinWidth)),t.push(Math.round(i+this.pinWidth+this.tailWidth))}return t}render(){return g`${d("Required marks on center line of pins piece")}:<br />${et(this.getMarks(),", ")} mm`}};re([p()],j.prototype,"pinWidth",2);re([p()],j.prototype,"tailsCount",2);re([p()],j.prototype,"tailWidth",2);j=re([F("dt-marks"),se()],j);var Yt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,H=(t,e,i,r)=>{for(var s=r>1?void 0:r?Jt(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&Yt(e,i,s),s};let b=class extends _{constructor(){super(...arguments),this.workpieceWidth=0,this.workpieceHeight=0,this.tailsCount=0,this.pinWidth=0,this.tailWidth=0,this.tailMarkOffset=0}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}renderWorkpiece(){return ke`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const t=new Array(this.tailsCount).fill(void 0).map((e,i)=>this.renderTail(i*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return et(t,"")}renderTail(t,e){return ke`
      <path class="dovetail" d="M${t+e/2} 0 L${t} ${this.workpieceBottom} ${t+e} ${this.workpieceBottom} ${t+e/2} 0" />
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
  `;H([p()],b.prototype,"workpieceWidth",2);H([p()],b.prototype,"workpieceHeight",2);H([p()],b.prototype,"tailsCount",2);H([p()],b.prototype,"pinWidth",2);H([p()],b.prototype,"tailWidth",2);H([p()],b.prototype,"tailMarkOffset",2);b=H([F("dt-preview")],b);const Qt={h1d510fd53dcb1e0c:g`Dies ist eine Berechnungs- und Visualisierungshilfe
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
    triangle de trois fois la hauteur de la pièce est formé.`,s04a6158ea5723980:"https://d-nb.info/830690026",s16377c5d9cbfde84:"grossière",s255857544a9d5ec0:"Réinitialiser",s2b606c448ab12d87:"https://fr.wikipedia.org/wiki/Assemblage_%C3%A0_queue-d%27aronde",s3b3ea038c5d3bb06:"Division",s52e06f78d696cf64:"Hauteur de la pièce (épaisseur)",s5a5a2a1aba8c5854:"Distance minimale entre les queues",s5bb297d85a6de998:"Angle",s612ed89adcd17e0a:"Largeur de la pièce",s6306bd8aba13962f:"Fissures nécessaires sur la ligne médiane de la pièce des mâles",s68496602df547d5c:"Queues",s737a095964aeb3c8:"Rapport entre la queue et le mâle",sa61967bcda24ab18:"Source sur GitHub",saad72578f030aacd:"fine",sb1a53cd9697257e1:"https://www.youtube.com/watch?v=OhKzkUbvSC8",sb38cd24a8470eada:"Veuillez utiliser et partager, ceci est un logiciel libre sous les termes de la Licence Apache 2.0.",sc76a095e1ffa22b6:"moyenne",scc11850e140eab25:"Pièces",se9bed519c6a36725:"Mâles"},ti=Object.freeze(Object.defineProperty({__proto__:null,templates:ei},Symbol.toStringTag,{value:"Module"})),tt="locale",ii=new Map([["de",Xt],["fr",ti]]),{getLocale:Te,setLocale:it}=Dt({sourceLocale:Qe,targetLocales:Bt,loadLocale:async t=>{const e=ii.get(t);if(!e)throw new Error("Unsupported locale");return e}});function si(){const t=navigator.language.split("-")[0],e=Xe.includes(t)?t:Qe,i=localStorage.getItem(tt)??e;it(i),document.documentElement.lang=i}async function ri(t){await it(t),localStorage.setItem(tt,t),document.documentElement.lang=t}var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,q=(t,e,i,r)=>{for(var s=r>1?void 0:r?oi(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,i,s):o(s))||s);return r&&s&&ni(e,i,s),s},L=(t=>(t.Fine="fine",t.Medium="medium",t.Coarse="coarse",t))(L||{});const ai={fine:1,medium:2/3,coarse:.5},Oe="workpieceWidth",He="workpieceHeight",Me="division",Le="tailPinRatio",Re=100,xe=15,Ie="medium",Ue=2;let O=class extends _{constructor(){super(),this.workpieceWidth=Number(this.readValue(Oe,Re)),this.workpieceHeight=Number(this.readValue(He,xe)),this.division=this.readValue(Me,Ie),this.tailPinRatio=Number(this.readValue(Le,Ue)),this.handleFormChange=t=>{t instanceof CustomEvent&&(t.detail.workpieceWidth?this.handleWorkpieceWidthChange(t.detail.workpieceWidth):t.detail.workpieceHeight?this.handleWorkpieceHeightChange(t.detail.workpieceHeight):t.detail.division?this.handleDivisionChange(t.detail.division):t.detail.tailPinRatio&&this.handleTailPinRatioChange(t.detail.tailPinRatio))},this.handleFormReset=()=>{this.handleWorkpieceWidthChange(Re),this.handleWorkpieceHeightChange(xe),this.handleDivisionChange(Ie),this.handleTailPinRatioChange(Ue)},si()}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*ai[this.division])}get pinsCount(){return this.tailsCount+1}get partsCount(){const t=this.pinsCount,e=this.tailsCount*this.tailPinRatio;return t+e}get partWidth(){return this.workpieceWidth/this.partsCount}get pinWidth(){return this.partWidth*1}get tailWidth(){return this.partWidth*this.tailPinRatio}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}connectedCallback(){super.connectedCallback(),this.addEventListener("dt-form-change",this.handleFormChange),this.addEventListener("dt-form-reset",this.handleFormReset)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener("dt-form-change",this.handleFormChange),this.removeEventListener("dt-form-reset",this.handleFormReset)}handleWorkpieceWidthChange(t){this.workpieceWidth=t,this.storeValue(Oe,this.workpieceWidth)}handleWorkpieceHeightChange(t){this.workpieceHeight=t,this.storeValue(He,this.workpieceHeight)}handleDivisionChange(t){this.division=t,this.storeValue(Me,this.division)}handleTailPinRatioChange(t){this.tailPinRatio=t,this.storeValue(Le,this.tailPinRatio)}storeValue(t,e){localStorage.setItem(t,String(e))}readValue(t,e){return localStorage.getItem(t)??String(e)}render(){console.log("render",Te());const t=d("https://en.wikipedia.org/wiki/Dovetail_joint"),e=d("https://www.youtube.com/watch?v=OhKzkUbvSC8"),i=d("https://d-nb.info/830690026");return g`
      <h1>Schwalben & Zinken</h1>
      <section class="explanation">
        ${d(g`This is a calculator and visualizer for
            <a href="${t}">dovetail joints</a>
            used in woodworking. It first determines the number of dovetails
            based on the width/height of the workpiece, like
            <a href="${e}">Hauke Schmidt</a>
            demonstrates. Then the dovetail angle is developed as described by
            <a href="${i}">Fritz Spannagel</a>, where a triangle
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
    `}};O.styles=ee`
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
  `;q([ie()],O.prototype,"workpieceWidth",2);q([ie()],O.prototype,"workpieceHeight",2);q([ie()],O.prototype,"division",2);q([ie()],O.prototype,"tailPinRatio",2);O=q([F("dovetail-calculator"),se()],O);
