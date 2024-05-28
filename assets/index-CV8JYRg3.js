(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,V=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),K=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new nt(typeof r=="string"?r:r+"",void 0,q),ft=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new nt(e,r,q)},mt=(r,t)=>{if(V)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=x.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gt,defineProperty:_t,getOwnPropertyDescriptor:vt,getOwnPropertyNames:yt,getOwnPropertySymbols:At,getPrototypeOf:wt}=Object,m=globalThis,Z=m.trustedTypes,bt=Z?Z.emptyScript:"",z=m.reactiveElementPolyfillSupport,E=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?bt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F=(r,t)=>!gt(r,t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...yt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:W;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??F)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,z==null||z({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,N=k.trustedTypes,Q=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+f,St=`<${at}>`,v=document,C=()=>v.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,Et=r=>lt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,g=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,dt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),j=dt(1),it=dt(2),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,_=v.createTreeWalker(v,129);function pt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const kt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=X:p[1]!==void 0?n=Y:p[2]!==void 0?(ct.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=i??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?et:tt):n===et||n===tt?n=g:n===X||n===Y?n=S:(n=g,i=void 0);const $=n===g&&r[a+1].startsWith("/>")?" ":"";o+=n===S?h+St:l>=0?(s.push(c),h.slice(0,l)+ht+h.slice(l)+f+$):h+f+(l===-2?a:$)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[c,p]=kt(t,e);if(this.el=T.createElement(c,s),_.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ht)){const u=p[n++],$=i.getAttribute(l).split(f),U=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:U[2],strings:$,ctor:U[1]==="."?Ct:U[1]==="?"?Mt:U[1]==="@"?Tt:R}),i.removeAttribute(l)}else l.startsWith(f)&&(h.push({type:6,index:o}),i.removeAttribute(l));if(ct.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let $=0;$<u;$++)i.append(l[$],C()),_.nextNode(),h.push({type:2,index:++o});i.append(l[u],C())}}}else if(i.nodeType===8)if(i.data===at)h.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)h.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var n,a;if(t===w)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=M(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=i;let o=_.nextNode(),n=0,a=0,h=s[0];for(;h!==void 0;){if(n===h.index){let c;h.type===2?c=new O(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new Ot(o,this,t)),this._$AV.push(c),h=s[++a]}n!==(h==null?void 0:h.index)&&(o=_.nextNode(),n++)}return _.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),M(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(pt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Pt(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new T(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.S(C()),this.S(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{const a=t;let h,c;for(t=o[0],h=0;h<o.length-1;h++)c=b(this,a[s+h],e,h),c===w&&(c=this._$AH[h]),n||(n=!M(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+o[h+1]),this._$AH[h]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Tt extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===w)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const I=k.litHtmlPolyfillSupport;I==null||I(T,O),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.3");const Ht=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(C(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}var ot;P._$litElement$=!0,P.finalized=!0,(ot=globalThis.litElementHydrateSupport)==null||ot.call(globalThis,{LitElement:P});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:F},Wt=(r=xt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(s==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+s)};function Nt(r){return(t,e)=>typeof e=="object"?Wt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(r){return Nt({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*rt(r,t){const e=typeof t=="function";if(r!==void 0){let s=-1;for(const i of r)s>-1&&(yield e?t(s):t),s++,yield i}}var Rt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,H=(r,t,e,s)=>{for(var i=s>1?void 0:s?Lt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Rt(t,e,i),i},ut=(r=>(r.Fine="fine",r.Medium="medium",r.Coarse="coarse",r))(ut||{});const zt={fine:1,medium:2/3,coarse:.5};let y=class extends P{constructor(){super(...arguments),this.workpieceWidth=320,this.workpieceHeight=20,this.division="fine",this.tailPinRatio=2}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*zt[this.division])}get partsCount(){const r=this.tailsCount+1,t=Math.floor(this.tailsCount*this.tailPinRatio);return r+t}get partWidth(){return Math.floor(this.workpieceWidth/this.partsCount)}get pinWidth(){return this.partWidth}get tailWidth(){return this.partWidth*this.tailPinRatio}get deviation(){return this.workpieceWidth-this.partsCount*this.partWidth}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}renderWorkpiece(){return it`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const r=new Array(this.tailsCount).fill(void 0).map((t,e)=>this.renderTail(this.deviation/2+e*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return rt(r,"")}renderTail(r,t){return it`
      <path class="dovetail" d="M${r+t/2} 0 L${r} ${this.workpieceBottom} ${r+t} ${this.workpieceBottom} ${r+t/2} 0" />
    `}renderMarks(){const r=[];for(let t=0;t<this.tailsCount;t+=1){const e=Math.round(this.deviation/2)+t*(this.pinWidth+this.tailWidth);r.push(e+this.pinWidth),r.push(e+this.pinWidth+this.tailWidth)}return j`Marks (on center line):<br>${rt(r,", ")} mm`}render(){return j`
      <h1>Schwalben & Zinken</h1>
      <p>This is a calculator and visualizer for <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetail joints</a>. It first determines the number of dovetails with a method that <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a> demostrates and then develops the angle as described by <a href="https://d-nb.info/830690026">Fritz Spannagel</a>, where a triangle with three times the height of the workpiece is formed.
      <section>
        <div>
          <label>
            Workpiece width:
            <input type="number" .value=${this.workpieceWidth} @change=${r=>this.workpieceWidth=Number(r.target.value)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Workpiece height (thickness):
            <input type="number" .value=${this.workpieceHeight} @change=${r=>this.workpieceHeight=Number(r.target.value)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Division:
            ${Object.values(ut).map(r=>j`
              <label>
                <input name="division" type="radio" .value=${r} .checked=${this.division===r} @change=${()=>this.division=r} />
                ${r}
              </label>
            `)}
          </label>
        </div>

        <div>
          <label>
            Dovetail to pin width ratio:
            <input type="number" .value=${this.tailPinRatio} @change=${r=>this.tailPinRatio=Number(r.target.value)} min="0" step="0.25" />
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

        <div>
          Dovetail minimum distance: ${Math.round(this.pinWidth-2*this.tailMarkOffset)} mm
        </div>
      </section>

      <section>
        <svg width=${this.workpieceWidth} height=${3*this.workpieceHeight} xmlns="http://www.w3.org/2000/svg" style="margin-right: ${this.workpieceWidth}px; margin-bottom: ${3*this.workpieceHeight}px">
          ${this.renderWorkpiece()}
          ${this.renderTails()}
        </svg>
      </section>

      <section>
        ${this.renderMarks()}
      </section>

      <section class="source">
        Source code: <a href="https://github.com/hupf/schwalbenundzinken">github.com/hupf/schwalbenundzinken</a><br>
        © Mathis Hofer – free software under the terms of the Apache License 2.0.
      </section>
    `}};y.styles=ft`
    :host {
      margin: 1rem;
    }

    section {
      margin-top: 1rem;
    }

    section.source {
      margin-top: 2rem;
      font-size: 0.7rem;
    }

    input[type=number] {
      width: 8ch;
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
    
  `;H([L()],y.prototype,"workpieceWidth",2);H([L()],y.prototype,"workpieceHeight",2);H([L()],y.prototype,"division",2);H([L()],y.prototype,"tailPinRatio",2);y=H([Ut("dovetail-calculator")],y);
