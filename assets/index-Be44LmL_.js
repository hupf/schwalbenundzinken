(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,B=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),q=new WeakMap;let $t=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const wt=r=>new $t(typeof r=="string"?r:r+"",void 0,K),bt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new $t(e,r,K)},Et=(r,t)=>{if(B)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Y=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return wt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:St,defineProperty:Ct,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Tt,getPrototypeOf:Wt}=Object,g=globalThis,G=g.trustedTypes,Ht=G?G.emptyScript:"",D=g.reactiveElementPolyfillSupport,S=(r,t)=>r,R={toAttribute(r,t){switch(t){case Boolean:r=r?Ht:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F=(r,t)=>!St(r,t),J={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=kt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...Pt(e),...Tt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Y(i))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:R;this._$Em=i,this[i]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??F)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,D==null||D({ReactiveElement:A}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,x=C.trustedTypes,Z=x?x.createPolicy("lit-html",{createHTML:r=>r}):void 0,ft="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+f,Ot=`<${gt}>`,v=document,P=()=>v.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",mt=Array.isArray,Ut=r=>mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,m=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,_t=/^(?:script|style|textarea|title)$/i,vt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),z=vt(1),it=vt(2),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,_=v.createTreeWalker(v,129);function yt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const Mt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=E;for(let a=0;a<e;a++){const h=r[a];let c,p,l=-1,u=0;for(;u<h.length&&(o.lastIndex=u,p=o.exec(h),p!==null);)u=o.lastIndex,o===E?p[1]==="!--"?o=Q:p[1]!==void 0?o=X:p[2]!==void 0?(_t.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=m):p[3]!==void 0&&(o=m):o===m?p[0]===">"?(o=i??E,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?m:p[3]==='"'?et:tt):o===et||o===tt?o=m:o===Q||o===X?o=E:(o=m,i=void 0);const $=o===m&&r[a+1].startsWith("/>")?" ":"";n+=o===E?h+Ot:l>=0?(s.push(c),h.slice(0,l)+ft+h.slice(l)+f+$):h+f+(l===-2?a:$)}return[yt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,h=this.parts,[c,p]=Mt(t,e);if(this.el=W.createElement(c,s),_.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ft)){const u=p[o++],$=i.getAttribute(l).split(f),U=/([.?@])?(.*)/.exec(u);h.push({type:1,index:n,name:U[2],strings:$,ctor:U[1]==="."?xt:U[1]==="?"?Nt:U[1]==="@"?It:N}),i.removeAttribute(l)}else l.startsWith(f)&&(h.push({type:6,index:n}),i.removeAttribute(l));if(_t.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=x?x.emptyScript:"";for(let $=0;$<u;$++)i.append(l[$],P()),_.nextNode(),h.push({type:2,index:++n});i.append(l[u],P())}}}else if(i.nodeType===8)if(i.data===gt)h.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)h.push({type:7,index:n}),l+=f.length-1}n++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var o,a;if(t===w)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=i;let n=_.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new H(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Dt(n,this,t)),this._$AV.push(c),h=s[++a]}o!==(h==null?void 0:h.index)&&(n=_.nextNode(),o++)}return _.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ut(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(yt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new Rt(i,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new W(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new H(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const a=t;let h,c;for(t=n[0],h=0;h<n.length-1;h++)c=b(this,a[s+h],e,h),c===w&&(c=this._$AH[h]),o||(o=!T(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Nt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class It extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===w)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const j=C.litHtmlPolyfillSupport;j==null||j(W,H),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.3");const Lt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new H(t.insertBefore(P(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}var ut;k._$litElement$=!0,k.finalized=!0,(ut=globalThis.litElementHydrateSupport)==null||ut.call(globalThis,{LitElement:k});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:k});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:F},Vt=(r=jt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(s==="setter"){const{name:o}=e;return function(a){const h=this[o];t.call(this,a),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+s)};function Bt(r){return(t,e)=>typeof e=="object"?Vt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(r){return Bt({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*rt(r,t){const e=typeof t=="function";if(r!==void 0){let s=-1;for(const i of r)s>-1&&(yield e?t(s):t),s++,yield i}}var Kt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,O=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Kt(t,e,i),i},At=(r=>(r.Fine="fine",r.Medium="medium",r.Coarse="coarse",r))(At||{});const qt={fine:1,medium:2/3,coarse:.5},nt="workpieceWidth",ot="workpieceHeight",ht="division",at="tailPinRatio",lt=100,ct=15,dt="medium",pt=2;let y=class extends k{constructor(){super(...arguments),this.workpieceWidth=Number(this.readValue(nt,lt)),this.workpieceHeight=Number(this.readValue(ot,ct)),this.division=this.readValue(ht,dt),this.tailPinRatio=Number(this.readValue(at,pt))}get workpieceTop(){return 2*this.workpieceHeight}get workpieceBottom(){return this.workpieceTop+this.workpieceHeight}get tailsCount(){return Math.floor(this.workpieceWidth/this.workpieceHeight*qt[this.division])}get pinsCount(){return this.tailsCount+1}get partsCount(){const r=this.pinsCount,t=this.tailsCount*this.tailPinRatio;return r+t}get partWidth(){return Math.floor(this.workpieceWidth/this.partsCount)}get pinWidth(){return this.partWidth}get tailWidth(){return Math.round(this.partWidth*this.tailPinRatio)}get deviation(){return this.workpieceWidth-(this.tailsCount*this.tailWidth+this.pinsCount*this.pinWidth)}get angle(){return Math.atan(2.5*this.workpieceHeight/(this.tailWidth/2))}get tailMarkOffset(){return 3*this.workpieceHeight/Math.tan(this.angle)-this.tailWidth/2}reset(){this.handleWorkpieceWidthChange(lt),this.handleWorkpieceHeightChange(ct),this.handleDivisionChange(dt),this.handleTailPinRatioChange(pt)}handleWorkpieceWidthChange(r){this.workpieceWidth=typeof r=="number"?r:Number(r.target.value),this.storeValue(nt,this.workpieceWidth)}handleWorkpieceHeightChange(r){this.workpieceHeight=typeof r=="number"?r:Number(r.target.value),this.storeValue(ot,this.workpieceHeight)}handleDivisionChange(r){this.division=r,this.storeValue(ht,this.division)}handleTailPinRatioChange(r){this.tailPinRatio=typeof r=="number"?r:Number(r.target.value),this.storeValue(at,this.tailPinRatio)}storeValue(r,t){localStorage.setItem(r,String(t))}readValue(r,t){return localStorage.getItem(r)??String(t)}renderWorkpiece(){return it`
      <path class="workpiece tails" d="M0 0 L${this.workpieceWidth} 0 ${this.workpieceWidth} ${this.workpieceTop} 0 ${this.workpieceTop} 0 0" />

      <path class="workpiece pins" d="M0 ${this.workpieceTop} L${this.workpieceWidth} ${this.workpieceTop} ${this.workpieceWidth} ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop+this.workpieceHeight} 0 ${this.workpieceTop}" />
    `}renderTails(){const r=new Array(this.tailsCount).fill(void 0).map((t,e)=>this.renderTail(this.deviation/2+e*(this.pinWidth+this.tailWidth)+this.pinWidth-this.tailMarkOffset,this.tailWidth+2*this.tailMarkOffset));return rt(r,"")}renderTail(r,t){return it`
      <path class="dovetail" d="M${r+t/2} 0 L${r} ${this.workpieceBottom} ${r+t} ${this.workpieceBottom} ${r+t/2} 0" />
    `}renderMarks(){const r=[];for(let t=0;t<this.tailsCount;t+=1){const e=this.deviation/2+t*(this.pinWidth+this.tailWidth);r.push(e+this.pinWidth),r.push(e+this.pinWidth+this.tailWidth)}return z`Marks (on center line):<br>${rt(r,", ")} mm`}render(){return z`
      <h1>Schwalben & Zinken</h1>
      <p>This is a calculator and visualizer for <a href="https://en.wikipedia.org/wiki/Dovetail_joint">dovetail joints</a>. It first determines the number of dovetails with a method that <a href="https://www.youtube.com/watch?v=OhKzkUbvSC8">Hauke Schmidt</a> demostrates and then develops the angle as described by <a href="https://d-nb.info/830690026">Fritz Spannagel</a>, where a triangle with three times the height of the workpiece is formed.
      <section>
        <div>
          <label>
            Workpiece width:
            <input type="number" .value=${this.workpieceWidth} @change=${this.handleWorkpieceWidthChange.bind(this)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Workpiece height (thickness):
            <input type="number" .value=${this.workpieceHeight} @change=${this.handleWorkpieceHeightChange.bind(this)} min="1" /> mm
          </label>
        </div>

        <div>
          <label>
            Division:
            ${Object.values(At).map(r=>z`
              <label>
                <input name="division" type="radio" .value=${r} .checked=${this.division===r} @change=${()=>this.handleDivisionChange(r)} />
                ${r}
              </label>
            `)}
          </label>
        </div>

        <div>
          <label>
            Dovetail to pin width ratio:
            <input type="number" .value=${this.tailPinRatio} @change=${this.handleTailPinRatioChange.bind(this)} min="0" step="0.25" />
          </label>
        </div>

        <div>
          <button @click=${()=>this.reset()}>Reset</button>
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
    `}};y.styles=bt`
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
    
  `;O([I()],y.prototype,"workpieceWidth",2);O([I()],y.prototype,"workpieceHeight",2);O([I()],y.prototype,"division",2);O([I()],y.prototype,"tailPinRatio",2);y=O([zt("dovetail-calculator")],y);
