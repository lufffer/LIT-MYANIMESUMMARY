/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={216:()=>{(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var n;const a=window,l=a.trustedTypes,h=l?l.emptyScript:"",d=a.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(n=a.reactiveElementVersions)&&void 0!==n?n:a.reactiveElementVersions=[]).push("1.4.2");const f=window,m=f.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,b="?"+$,_=`<${b}>`,A=document,w=(t="")=>A.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,P=/>/g,N=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,k=/"/g,j=/^(?:script|style|textarea|title)$/i,T=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=T(1),U=(T(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),L=new WeakMap,D=A.createTreeWalker(A,129,null,!1);class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=x;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===x?"!--"===l[1]?n=C:void 0!==l[1]?n=P:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=null!=r?r:x,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?k:M):n===k||n===M?n=N:n===C||n===P?n=x:(n=N,r=void 0);const c=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===x?i+_:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+c):i+$+(-2===h?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,s]})(t,e);if(this.el=R.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?V:"@"===e[1]?K:B})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(j.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),D.nextNode(),a.push({type:2,index:++r});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function H(t,e,i=t,s){var r,o,n,a;if(e===U)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);D.currentNode=r;let o=D.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new Z(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new X(o,this,t)),this.u.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=D.nextNode(),n++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),E(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==U&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=R.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new z(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new R(t)),e}k(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=H(this,t,e,0),o=!E(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=H(this,s[i+n],e,n),a===U&&(a=this._$AH[n]),o||(o=!E(a)||a!==this._$AH[n]),a===O?t=O:t!==O&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const G=m?m.emptyScript:"";class V extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class K extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=H(this,t,e,0))&&void 0!==i?i:O)===U)return;const s=this._$AH,r=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const W=f.litHtmlPolyfillSupport;var Y,J;null==W||W(R,Z),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.4.0");class F extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new Z(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}F.finalized=!0,F._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:F});const q=globalThis.litElementPolyfillSupport;null==q||q({LitElement:F}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.2");const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)}const it=({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}};function st(t,e){return it({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;const ot=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)})`
  :host {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    display: block;
    overflow: hidden;
  }

  ::slotted(*) {
    position: relative;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .left {
    left: -100%;
  }

  .move-right {
    left: -100%;
  }

  .move-left {
    left: 0%;
  }

  .left-chevron,
  .right-chevron {
    position: absolute;
    top: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    user-selection: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    opacity: 0.75;
  }

  .left-chevron {
    left: 1rem;
  }

  .right-chevron {
    right: 1rem;
  }

  .indicators {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .indicator {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: white;
    opacity: 0.75;
    cursor: pointer;
  }

  .selected {
    background-color: black;
  }
`,nt=ot;var at=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let lt=class extends F{constructor(){super(...arguments),this.ride=!1,this.time=5e3,this.dir="right",this.duration="0.5",this.touchStartX=0,this.touchEndX=0,this.touchMoveX=0,this.touchStartY=0,this.touchEndY=0,this.touchMoveY=0,this.activeTransition=t=>{"move-left"===t&&this.container.classList.add("left"),setTimeout((()=>{this.container.style.setProperty("transition",`all ${this.duration}s linear`),this.container.classList.add(t)}),100)},this.changeIndicator=(t,e)=>{this.indicators[e].classList.add("selected"),this.indicators[t].classList.remove("selected"),this.selectedIndicator=e},this.handleTransition=()=>{this.container.removeEventListener("transitionend",this.handleTransition),this.container.style.removeProperty("transition"),this.selected.assignedElements()[0].removeAttribute("slot"),this.container.classList.contains("move-right")?(this.container.classList.remove("move-right"),this.next.assignedElements()[0].setAttribute("slot","selected")):(this.container.classList.remove("left"),this.container.classList.remove("move-left"),this.prev.assignedElements()[0].setAttribute("slot","selected")),Array.from(this.indicators).map((t=>t.removeAttribute("disabled"))),this.leftChevron.removeAttribute("disabled"),this.rightChevron.removeAttribute("disabled"),this.selected.addEventListener("touchstart",this.handleTouchStart),this.selected.addEventListener("touchend",this.handleTouchEnd),this.dispatchEvent(new CustomEvent("lutransitionend",{detail:{selected:this.selectedIndicator},bubbles:!0,composed:!0}))},this.moveLeft=()=>{null===this.selected.assignedElements()[0].previousElementSibling?(this.children[this.maxSelected].setAttribute("slot","prev"),this.changeIndicator(0,this.maxSelected)):(this.selected.assignedElements()[0].previousElementSibling.setAttribute("slot","prev"),this.changeIndicator(this.selectedIndicator,this.selectedIndicator-1)),this.activeTransition("move-left"),this.container.addEventListener("transitionend",this.handleTransition)},this.moveRight=()=>{null===this.selected.assignedElements()[0].nextElementSibling?(this.children[0].setAttribute("slot","next"),this.changeIndicator(this.maxSelected,0)):(this.selected.assignedElements()[0].nextElementSibling.setAttribute("slot","next"),this.changeIndicator(this.selectedIndicator,this.selectedIndicator+1)),this.activeTransition("move-right"),this.container.addEventListener("transitionend",this.handleTransition)},this.handleMove=t=>{let e;switch(this.leftChevron.setAttribute("disabled","true"),this.rightChevron.setAttribute("disabled","true"),this.selected.removeEventListener("touchstart",this.handleTouchStart),this.selected.removeEventListener("touchend",this.handleTouchEnd),e=void 0===t?this.touchMoveX>0?"left-chevron":this.touchMoveX<0||"right"===this.dir?"right-chevron":"left-chevron":t.currentTarget.id,this.touchMoveX=0,this.touchMoveY=0,e){case"left-chevron":this.moveLeft();break;case"right-chevron":this.moveRight();break;default:t.currentTarget.classList.contains("selected")||(Array.from(this.indicators).map((t=>t.setAttribute("disabled","true"))),t.currentTarget.dataset.indicator>this.selectedIndicator.toString()?(this.children[t.currentTarget.dataset.indicator].setAttribute("slot","next"),this.activeTransition("move-right")):(this.children[t.currentTarget.dataset.indicator].setAttribute("slot","prev"),this.activeTransition("move-left")),t.currentTarget.classList.add("selected"),this.changeIndicator(this.selectedIndicator,Number(t.currentTarget.dataset.indicator)),this.container.addEventListener("transitionend",this.handleTransition))}},this.handleTouchStart=t=>{this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY},this.handleTouchEnd=t=>{this.touchEndX=t.changedTouches[0].clientX,this.touchEndY=t.changedTouches[0].clientY,this.touchMoveX=this.touchEndX-this.touchStartX,this.touchMoveY=this.touchEndY-this.touchStartY,Math.abs(this.touchMoveX)>Math.abs(this.touchMoveY)&&this.handleMove(void 0)}}updated(){this.children[0].setAttribute("slot","selected"),this.indicators[0].classList.add("selected"),this.selectedIndicator=0,this.selected.addEventListener("touchstart",this.handleTouchStart),this.selected.addEventListener("touchend",this.handleTouchEnd),this.ride&&setInterval((()=>this.handleMove(void 0)),this.time||5e3),new MutationObserver((t=>{for(const e of t)"childList"===e.type&&(this.selected.assignedElements.length>0&&this.selected.assignedElements()[0].removeAttribute("slot"),this.changeIndicator(this.selectedIndicator,0),this.requestUpdate())})).observe(this,{childList:!0})}render(){this.maxSelected=this.childElementCount-1;const t=[];for(let e=0;e<=this.maxSelected;++e)t.push(I`<button
          class="indicator"
          data-indicator=${e}
          @click=${this.handleMove}
        ></button>`);return I`
      <div class="container">
        <slot name="prev"></slot>
        <slot name="selected"></slot>
        <slot name="next"></slot>
      </div>
      <button class="left-chevron" id="left-chevron" @click=${this.handleMove}>
        <img src=${"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjcuNSwwQzEwMS44NTUsMCwwLDEwMS44NTUsMCwyMjcuNVMxMDEuODU1LDQ1NSwyMjcuNSw0NTVTNDU1LDM1My4xNDUsNDU1LDIyNy41UzM1My4xNDUsMCwyMjcuNSwweiBNMjc2Ljc3MiwzMzQuNDExDQoJbC0yMS4yNDgsMjEuMTc4TDEyNy44NTIsMjI3LjVMMjU1LjUyNCw5OS40MTFsMjEuMjQ4LDIxLjE3OEwxNzAuMjA5LDIyNy41TDI3Ni43NzIsMzM0LjQxMXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"} />
      </button>
      <button
        class="right-chevron"
        id="right-chevron"
        @click=${this.handleMove}
      >
        <img src=${"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NSA0NTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjcuNSwwQzEwMS44NTUsMCwwLDEwMS44NTUsMCwyMjcuNVMxMDEuODU1LDQ1NSwyMjcuNSw0NTVTNDU1LDM1My4xNDUsNDU1LDIyNy41UzM1My4xNDUsMCwyMjcuNSwweiBNMTk5LjQ3NiwzNTUuNTg5DQoJbC0yMS4yNDgtMjEuMTc4TDI4NC43OTEsMjI3LjVMMTc4LjIyOCwxMjAuNTg5bDIxLjI0OC0yMS4xNzhMMzI3LjE0OCwyMjcuNUwxOTkuNDc2LDM1NS41ODl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="} />
      </button>
      <div class="indicators">${t}</div>
    `}};lt.styles=nt,at([st("slot[name=selected]")],lt.prototype,"selected",void 0),at([st("slot[name=prev]")],lt.prototype,"prev",void 0),at([st("slot[name=next]")],lt.prototype,"next",void 0),at([st(".container")],lt.prototype,"container",void 0),at([st(".left-chevron",!0)],lt.prototype,"leftChevron",void 0),at([st(".right-chevron",!0)],lt.prototype,"rightChevron",void 0),at([it({descriptor:t=>({get(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(".indicator"))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})],lt.prototype,"indicators",void 0),at([et({type:Boolean,reflect:!1})],lt.prototype,"ride",void 0),at([et({type:Number,reflect:!1})],lt.prototype,"time",void 0),at([et({type:String,reflect:!1})],lt.prototype,"dir",void 0),at([et({type:String,reflect:!1})],lt.prototype,"duration",void 0),lt=at([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("lulit-carousel")],lt)})()}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,d=h.trustedTypes,c=d?d.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.5.0");const y=window,$=y.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,w=`<${A}>`,E=document,S=(t="")=>E.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,P=t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,k=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,I=/"/g,U=/^(?:script|style|textarea|title)$/i,O=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=O(1),D=(O(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),H=new WeakMap,z=E.createTreeWalker(E,129,null,!1),Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=N;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===N?"!--"===l[1]?n=M:void 0!==l[1]?n=k:void 0!==l[2]?(U.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=null!=r?r:N,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?I:T):n===I||n===T?n=j:n===M||n===k?n=N:(n=j,r=void 0);const c=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===N?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+_+c):i+_+(-2===h?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,s]};class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=Z(t,e);if(this.el=B.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?Y:"@"===e[1]?J:K})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),z.nextNode(),a.push({type:2,index:++r});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)a.push({type:7,index:r}),t+=_.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){var r,o,n,a;if(e===D)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Q(t,l._$AS(t,e.values),l,s)),e}class G{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);z.currentNode=r;let o=z.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new V(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new F(o,this,t)),this.u.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=z.nextNode(),n++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),x(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):P(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new G(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new B(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new V(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,s[i+n],e,n),a===D&&(a=this._$AH[n]),o||(o=!x(a)||a!==this._$AH[n]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const W=$?$.emptyScript:"";class Y extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class J extends K{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Q(this,t,e,0))&&void 0!==i?i:R)===D)return;const s=this._$AH,r=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const q=y.litHtmlPolyfillSupport;null==q||q(B,V),(null!==(m=y.litHtmlVersions)&&void 0!==m?m:y.litHtmlVersions=[]).push("2.5.0");var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new V(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it});(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.2");const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)}function at(t){return nt({...t,state:!0})}function lt(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;i(216);var dt=function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function n(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,a)}l((s=s.apply(t,e||[])).next())}))};const ct=new URL("https://api.jikan.moe/v4/top/anime?limit=10"),ut=new URL("https://api.jikan.moe/v4/anime");const pt=function(t){return dt(this,void 0,void 0,(function*(){const e=yield fetch(t);switch(e.status){case 400:throw{status:400,msg:"Error 400: Bad Request"};case 404:throw{status:404,msg:"Error 404: Not Found"};case 405:throw{status:405,msg:"Error 405: Method Not Allowed"};case 429:throw{status:429,msg:"Error 429: Too Many Requests"};case 500:throw{status:500,msg:"Error 500: Internal Server Error"};case 503:throw{status:503,msg:"Error 503: Service Unavailable"}}return{data:(yield e.json()).data,status:e.status}}))},vt=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    width: calc(100% - 2rem);
    height: 2.5rem;
    transform: translateY(-1rem);
  }

  form {
    position: relative;
    width: 100%;
    height: 100%;
  }

  input {
    border: 1px solid var(--white);
  }

  input[type="search"]:-webkit-autofill,
  input[type="search"]:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  input[data-autocompleted] {
    background-color: transparent !important;
  }

  /* Add margin to the ‘X’ from Internet Explorer */
  input[type="search"]::-ms-clear {
    margin-left: 1rem;
  }
  input[type="search"]::-ms-reveal {
    margin-left: 1rem;
  }
  /* Add margin to the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    margin-left: 1rem;
  }

  input[type="search"] {
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0 1rem;
    height: 100%;
    width: calc(100% - 3rem);
    font-size: 1rem;
    color: var(--white);
    background-color: var(--black-50);
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid var(--white);
    border-radius: 0 0.5rem 0.5rem 0;
    height: 100%;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-50);
  }

  button:hover {
    cursor: pointer;
  }

  img {
    width: 1rem;
    filter: invert(100%) sepia(0%) saturate(7487%) hue-rotate(9deg)
      brightness(109%) contrast(103%);
    opacity: 50%;
  }
`;var gt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},ft=function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function n(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,a)}l((s=s.apply(t,e||[])).next())}))};let mt=class extends it{handleSubmit(t){var e;return ft(this,void 0,void 0,(function*(){null==t||t.preventDefault();try{if(t&&""!==(null===(e=this.$input)||void 0===e?void 0:e.value)){let t=new URL(ut);t.searchParams.append("q",this.$input?this.$input.value:""),this._sendData(yield pt(t))}else this._sendData(yield pt(ct))}catch(t){this._sendData({status:t.status,msg:t.msg})}}))}firstUpdated(){this.handleSubmit(void 0)}_sendData(t){this.dispatchEvent(new CustomEvent("apiResponse",{bubbles:!0,composed:!0,detail:t}))}render(){return L`
      <form @submit=${this.handleSubmit}>
        <input type="search" placeholder="Search anime" id="search" />
        <button type="submit"><img src="./Search-icon.svg" /></button>
      </form>
    `}};mt.styles=vt,gt([lt("#search")],mt.prototype,"$input",void 0),mt=gt([rt("form-search")],mt);const yt=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-top: 1rem;
    color: var(--white-50);
  }

  @media (min-width: 992px) and (min-height: 700px) {
    h1 {
      visibility: hidden;
    }
  }
`;var $t=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let bt=class extends it{render(){return L`
      <h1>Anime Summary</h1>
      <form-search></form-search>
    `}};bt.styles=yt,bt=$t([rt("section-home")],bt);const _t=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .carousel {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }

  .carousel img {
    height: 100%;
    width: 100%;
  }

  .carousel figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: var(--black-75);
  }

  .carousel figcaption h2 {
    margin-top: 1rem;
    color: var(--white);
  }

  .carousel figcaption p {
    margin: 2rem auto 0 auto;
    width: calc(100% - 7rem);
    height: 70%;
    line-height: 1.5;
    overflow-y: scroll;
    color: var(--white);
  }

  /* Hide scrollbar for Chrome, Safari and Opera */

  .carousel figcaption p::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  .carousel figcaption p {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .carousel:not(:defined) > * {
    display: none;
  }
`;var At=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let wt=class extends it{render(){var t;return L`
      <lulit-carousel class="carousel">
        ${null===(t=this.data)||void 0===t?void 0:t.map((t=>L`<figure>
              <img src="${t.images.webp.large_image_url}" />
              <figcaption>
                <h2>${t.title}</h2>
                <p>${t.synopsis}</p>
              </figcaption>
            </figure>`))}
      </lulit-carousel>
    `}};wt.styles=_t,At([nt()],wt.prototype,"data",void 0),wt=At([rt("section-carousel")],wt);const Et=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .error {
    height: 100vh;
    width: 100%;
    text-align: center;
  }

  h2 {
    text-align: center;
    padding: 4rem 0;
  }
`;var St=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let xt=class extends it{render(){return L`
      <section class="error">
        <h2>${this.msg||"Anime does not exist"}</h2>
        <img src="./raiden-shogun.gif" />
      </section>
    `}};xt.styles=Et,St([nt()],xt.prototype,"msg",void 0),xt=St([rt("section-error")],xt);const Ct=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    height: 100vh;
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: var(--black-50);
  }

  table {
    height: 100%;
    width: 100%;
    color: var(--white);
  }

  td {
    position: relative;
    width: 50%;
    height: 25%;
    text-align: center;
  }

  h3,
  p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  h3 {
    padding-top: 1.5rem;
  }

  p {
    padding-top: 3.5rem;
  }
`;var Pt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Nt=class extends it{render(){return L`
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>TYPE</h3>
                <p>${this.type}</p>
              </td>
              <td>
                <h3>SOURCE</h3>
                <p>${this.source}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>EPISODES</h3>
                <p>${this.episodes}</p>
              </td>
              <td>
                <h3>STATUS</h3>
                <p>${this.status}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>FROM</h3>
                <p>${this.from}</p>
              </td>
              <td>
                <h3>TO</h3>
                <p>${this.to}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>RATING</h3>
                <p>${this.rating}</p>
              </td>
              <td>
                <h3>STUDIO</h3>
                <p>${this.studio}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};Nt.styles=Ct,Pt([nt()],Nt.prototype,"type",void 0),Pt([nt()],Nt.prototype,"source",void 0),Pt([nt()],Nt.prototype,"episodes",void 0),Pt([nt()],Nt.prototype,"status",void 0),Pt([nt()],Nt.prototype,"from",void 0),Pt([nt()],Nt.prototype,"to",void 0),Pt([nt()],Nt.prototype,"rating",void 0),Pt([nt()],Nt.prototype,"studio",void 0),Nt=Pt([rt("section-data")],Nt);const Mt=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    height: 100vh;
    width: 100%;
  }

  iframe {
    height: 100%;
    width: 100%;
    border: 0;
  }
`;var kt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let jt=class extends it{render(){return""!==this.trailer?L`
          <iframe
            src="https://www.youtube.com/embed/${this.trailer}"
            allowfullscreen
          ></iframe>
        `:L``}};jt.styles=Mt,kt([nt()],jt.prototype,"trailer",void 0),jt=kt([rt("section-trailer")],jt);const Tt=n`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    height: 100vh;
    width: 100%;
  }

  div {
    background-color: var(--black-50);
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  table {
    width: 100%;
    padding: 0 1rem;
    text-align: center;
    color: white;
  }

  tr {
    text-align: center;
  }

  th {
    padding: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }

  td {
    height: 4rem;
    text-align: center;
  }
`;var It=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Ut=function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function n(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,a)}l((s=s.apply(t,e||[])).next())}))};let Ot=class extends it{constructor(){super(...arguments),this.id=""}willUpdate(t){return Ut(this,void 0,void 0,(function*(){t.has("id")&&(this._data=yield pt(new URL(`${ut.toString()}/${this.id}/full`)))}))}render(){var t,e;return L`
      <div>
        <table>
          <thead>
            <tr>
              <th>Openings</th>
            </tr>
          </thead>
          <tbody>
            ${null===(t=this._data)||void 0===t?void 0:t.data.theme.openings.map((t=>L`<tr>
                  <td>${t}</td>
                </tr>`))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Endings</th>
            </tr>
          </thead>
          <tbody>
            ${null===(e=this._data)||void 0===e?void 0:e.data.theme.endings.map((t=>L`<tr>
                  <td>${t}</td>
                </tr>`))}
          </tbody>
        </table>
      </div>
    `}};Ot.styles=Tt,It([nt()],Ot.prototype,"id",void 0),It([at()],Ot.prototype,"_data",void 0),Ot=It([rt("section-songs")],Ot);const Lt=n`
  :host {
    --white: hsla(0deg, 0%, 100%, 100%);
    --white-75: hsla(0deg, 0%, 100%, 75%);
    --white-50: hsla(0deg, 0%, 100%, 50%);
    --white-25: hsla(0deg, 0%, 100%, 25%);
    --black: hsla(0deg, 0%, 0%, 100%);
    --black-75: hsla(0deg, 0%, 0%, 75%);
    --black-50: hsla(0deg, 0%, 0%, 50%);
    --black-25: hsla(0deg, 0%, 0%, 25%);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  nav {
    display: none;
  }

  span {
    font-size: 1.5rem;
  }

  main {
    width: 100%;
    height: 100vh;
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  section {
    height: 100vh;
    width: 100%;
  }

  .home {
    height: 100%;
    width: 100%;
  }

  .data {
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .songs {
    background-image: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 992px) and (min-height: 700px) {
    nav {
      position: absolute;
      top: 1rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 0 1rem;
      border-radius: 1rem;
      height: 1.75rem;
      width: calc(100% - 2rem);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      color: white;
      background-color: var(--black-50);
    }

    img {
      width: 20px;
      height: 20px;
    }

    main {
      background-image: url("hero_lg.jpg");
    }

    div {
      position: absolute;
      top: 2.75rem;
      left: 0;
      height: calc(100vh - 75px - 2.75rem);
      width: 100%;
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 50% 50%;
      gap: 1rem;
      z-index: 0;
    }

    section {
      height: 100%;
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
    }

    .carousel {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .data {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      background: none;
    }

    .trailer {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .songs {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      background: none;
    }
  }
`;var Dt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n},Rt=function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function n(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,a)}l((s=s.apply(t,e||[])).next())}))};let Ht=class extends it{constructor(){super(...arguments),this._selected=0}_updateData(t){var e,i;return Rt(this,void 0,void 0,(function*(){this._data=t.detail,yield this.updateComplete,null===(e=this.$error)||void 0===e||e.scrollIntoView({behavior:"smooth"}),null===(i=this.$carousel)||void 0===i||i.scrollIntoView({behavior:"smooth"})}))}_updateSelected(t){this._selected=t.detail.selected}connectedCallback(){super.connectedCallback(),this.addEventListener("apiResponse",this._updateData),this.addEventListener("lutransitionend",this._updateSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("apiResponse",this._updateData),this.removeEventListener("lutransitionend",this._updateSelected)}render(){var t,e,i;return L`<nav>
        <span>Anime Summary</span>
        <a href="https://wwww.github.com/lufffer/LIT-ANIMESUMMARY">
          <img src="github-mark.svg" />
        </a>
      </nav>
      <main>
        <section class="home"><section-home></section-home></section>
      </main>
      ${(200===(null===(t=this._data)||void 0===t?void 0:t.status)||304===(null===(e=this._data)||void 0===e?void 0:e.status))&&this._data.data&&this._data.data.length>0?L` <div>
            <section class="carousel">
              <section-carousel
                .data="${this._data.data}"
                id="carousel"
              ></section-carousel>
            </section>
            <section class="data">
              <section-data
                type="${this._data.data[this._selected].type}"
                source="${this._data.data[this._selected].source}"
                episodes="${this._data.data[this._selected].episodes||0}"
                status="${this._data.data[this._selected].status}"
                from="${this._data.data[this._selected].aired.prop.from.day}/${this._data.data[this._selected].aired.prop.from.month}/${this._data.data[this._selected].aired.prop.from.year}"
                to="${this._data.data[this._selected].aired.prop.to.day||this._data.data[this._selected].aired.prop.from.day}/${this._data.data[this._selected].aired.prop.to.month||this._data.data[this._selected].aired.prop.from.month}/${this._data.data[this._selected].aired.prop.to.year||this._data.data[this._selected].aired.prop.from.year}"
                rating="${this._data.data[this._selected].rating}"
                studio="${this._data.data[this._selected].studios&&this._data.data[this._selected].studios.length>0?this._data.data[this._selected].studios[0].name:""}"
              >
              </section-data>
            </section>
            <section class="trailer">
              <section-trailer
                trailer="${this._data.data[this._selected].trailer.youtube_id}"
              ></section-trailer>
            </section>
            <section class="songs">
              <section-songs
                id="${this._data.data[this._selected].mal_id}"
              ></section-songs>
            </section>
          </div>`:L`<section-error
            msg="${null===(i=this._data)||void 0===i?void 0:i.msg}"
            id="error"
          ></section-error>`}`}};Ht.styles=Lt,Dt([lt("#error")],Ht.prototype,"$error",void 0),Dt([lt("#carousel")],Ht.prototype,"$carousel",void 0),Dt([at()],Ht.prototype,"_data",void 0),Dt([at()],Ht.prototype,"_selected",void 0),Ht=Dt([rt("anime-summary")],Ht)})()})();
//# sourceMappingURL=main.js.map