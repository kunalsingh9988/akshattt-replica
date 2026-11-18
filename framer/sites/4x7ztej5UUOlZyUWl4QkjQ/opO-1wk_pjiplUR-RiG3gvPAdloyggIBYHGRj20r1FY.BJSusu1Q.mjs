import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{A as t,C as n,L as r,N as i,P as a,_ as o,b as s,c,j as l,l as u,m as d,s as f,u as p,w as m,y as h,z as g}from"./react.DUaydndg.mjs";import{C as _,o as v,r as y,t as b}from"./motion.Be6IuVTg.mjs";import{C as x,D as S,E as C,F as w,H as T,O as E,P as D,Z as O,_t as k,b as ee,ct as A,dt as j,h as te,mt as ne,n as M,ot as re,pt as ie,r as N,rt as ae,st as oe,t as P,u as se,ut as ce,v as le,vt as F,w as ue,wt as I,x as L,yt as R}from"./framer.CpFnJGAS.mjs";import{C as de,S as z,T as fe,a as B,b as V,c as pe,d as me,i as he,l as ge,o as _e,r as ve,s as ye,u as H,w as U,x as be}from"./toplevel-deps.CFEDyqvs.mjs";import{n as xe,t as Se}from"./Lenis.BQdwEpAt.mjs";import{a as Ce,i as W,n as we,o as G,r as Te,t as Ee}from"./H8WdmyHet.C7WBiBV3.mjs";import{n as De,r as Oe}from"./IMzwiuEeL.CBcXgDPi.mjs";function ke(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t,n){return t&&Ae(e.prototype,t),n&&Ae(e,n),e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ne(Object(n),!0).forEach((function(t){Me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e,t){return Ie(e)||Re(e,t)||ze(e,t)||He()}function q(e){return Fe(e)||Le(e)||ze(e)||Ve()}function Fe(e){if(Array.isArray(e))return Be(e)}function Ie(e){if(Array.isArray(e))return e}function Le(e){if(typeof Symbol<`u`&&Symbol.iterator in Object(e))return Array.from(e)}function Re(e,t){if(typeof Symbol<`u`&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(e){i=!0,a=e}finally{try{r||s.return==null||s.return()}finally{if(i)throw a}}return n}}function ze(e,t){if(e){if(typeof e==`string`)return Be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(e,t){return Object.getOwnPropertyNames(Object(e)).reduce((function(n,r){var i=Object.getOwnPropertyDescriptor(Object(e),r),a=Object.getOwnPropertyDescriptor(Object(t),r);return Object.defineProperty(n,r,a||i)}),{})}function We(e){return typeof e==`string`}function Ge(e){return Array.isArray(e)}function Ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Ue(e),n;return t.types===void 0?t.split!==void 0&&(n=t.split):n=t.types,n!==void 0&&(t.types=(We(n)||Ge(n)?String(n):``).split(`,`).map((function(e){return String(e).trim()})).filter((function(e){return/((line)|(word)|(char))/i.test(e)}))),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(e.position)),t}function qe(e){var t=We(e)||Ge(e)?String(e):``;return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function Je(e){return typeof e==`object`&&!!e}function Ye(e){return Je(e)&&/^(1|3|11)$/.test(e.nodeType)}function Xe(e){return typeof e==`number`&&e>-1&&e%1==0}function Ze(e){return Je(e)&&Xe(e.length)}function Qe(e){return Ge(e)?e:e==null?[]:Ze(e)?Array.prototype.slice.call(e):[e]}function $e(e){var t=e;return We(e)&&(t=/^(#[a-z]\w+)$/.test(e.trim())?document.getElementById(e.trim().slice(1)):document.querySelectorAll(e)),Qe(t).reduce((function(e,t){return[].concat(q(e),q(Qe(t).filter(Ye)))}),[])}function J(e,t,n){if(!Je(e))return console.warn(`[data.set] owner is not an object`),null;var r=e[vt]||(e[vt]=++yt),i=Y[r]||(Y[r]={});return n===void 0?!t||Object.getPrototypeOf(t)!==Object.prototype||(Y[r]=K(K({},i),t)):t!==void 0&&(i[t]=n),n}function et(e,t){var n=Je(e)?e[vt]:null,r=n&&Y[n]||{};return t===void 0?r:r[t]}function tt(e){var t=e&&e[vt];t&&(delete e[t],delete Y[t])}function nt(){Object.keys(Y).forEach((function(e){delete Y[e]}))}function rt(){_t(Y).forEach((function(e){var t=Pe(e,2),n=t[0],r=t[1],i=r.isRoot,a=r.isSplit;(!i||!a)&&(Y[n]=null,delete Y[n])}))}function it(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:` `;return(e?String(e):``).trim().replace(/\s+/g,` `).split(t)}function at(e){return e.split(``)}function ot(e){return zt.test(e)}function st(e){return e.match(Lt)||[]}function ct(e){return ot(e)?st(e):at(e)}function lt(e){return e==null?``:String(e)}function ut(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:``;return e=lt(e),e&&We(e)&&!t&&ot(e)?ct(e):e.split(t)}function dt(e,t){var n=document.createElement(e);return t&&Object.keys(t).forEach((function(e){var r=t[e],i=We(r)?r.trim():r;i!==null&&i!==``&&(e===`children`?n.append.apply(n,q(Qe(i))):n.setAttribute(e,i))})),n}function ft(e,t){t=Ue(Bt,t);var n=qe(t.types),r=t.tagName,i=e.nodeValue,a=document.createDocumentFragment(),o=[],s=[];return/^\s/.test(i)&&a.append(` `),o=it(i).reduce((function(e,i,o,c){var l,u;return n.chars&&(u=ut(i).map((function(e){var n=dt(r,{class:`${t.splitClass} ${t.charClass}`,style:`display: inline-block;`,children:e});return J(n,`isChar`,!0),s=[].concat(q(s),[n]),n}))),n.words||n.lines?(l=dt(r,{class:`${t.wordClass} ${t.splitClass}`,style:`display: inline-block; ${n.words&&t.absolute?`position: relative;`:``}`,children:n.chars?u:i}),J(l,{isWord:!0,isWordStart:!0,isWordEnd:!0}),a.appendChild(l)):u.forEach((function(e){a.appendChild(e)})),o<c.length-1&&a.append(` `),n.words?e.concat(l):e}),[]),/\s$/.test(i)&&a.append(` `),e.replaceWith(a),{words:o,chars:s}}function pt(e,t){var n=e.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(n))return r;if(n===3&&/\S/.test(e.nodeValue))return ft(e,t);var i=Qe(e.childNodes);if(i.length&&(J(e,`isSplit`,!0),!et(e).isRoot)){e.style.display=`inline-block`,e.style.position=`relative`;var a=e.nextSibling,o=e.previousSibling,s=e.textContent||``,c=a?a.textContent:` `,l=o?o.textContent:` `;J(e,{isWordEnd:/\s$/.test(s)||/^\s/.test(c),isWordStart:/^\s/.test(s)||/\s$/.test(l)})}return i.reduce((function(e,n){var r=pt(n,t),i=r.words,a=r.chars;return{words:[].concat(q(e.words),q(i)),chars:[].concat(q(e.chars),q(a))}}),r)}function mt(e,t,n,r){if(!n.absolute)return{top:t?e.offsetTop:null};var i=e.offsetParent,a=Pe(r,2),o=a[0],s=a[1],c=0,l=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();c=u.x+o,l=u.y+s}var d=e.getBoundingClientRect(),f=d.width,p=d.height,m=d.x;return{width:f,height:p,top:d.y+s-l,left:m+o-c}}function ht(e){et(e).isWord?(tt(e),e.replaceWith.apply(e,q(e.childNodes))):Qe(e.children).forEach((function(e){return ht(e)}))}function gt(e,t,n){var r=qe(t.types),i=t.tagName,a=e.getElementsByTagName(`*`),o=[],s=[],c=null,l,u,d,f=[],p=e.parentElement,m=e.nextElementSibling,h=Vt(),_=g.getComputedStyle(e),v=_.textAlign,y=.2*parseFloat(_.fontSize);return t.absolute&&(d={left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth},u=e.offsetWidth,l=e.offsetHeight,J(e,{cssWidth:e.style.width,cssHeight:e.style.height})),Qe(a).forEach((function(i){var a=i.parentElement===e,l=mt(i,a,t,n),u=l.width,d=l.height,f=l.top,p=l.left;/^br$/i.test(i.nodeName)||(r.lines&&a&&((c===null||f-c>=y)&&(c=f,o.push(s=[])),s.push(i)),t.absolute&&J(i,{top:f,left:p,width:u,height:d}))})),p&&p.removeChild(e),r.lines&&(f=o.map((function(e){var n=dt(i,{class:`${t.splitClass} ${t.lineClass}`,style:`display: block; text-align: ${v}; width: 100%;`});J(n,`isLine`,!0);var r={height:0,top:1e4};return h.appendChild(n),e.forEach((function(e,t,i){var a=et(e),o=a.isWordEnd,s=a.top,c=a.height,l=i[t+1];r.height=Math.max(r.height,c),r.top=Math.min(r.top,s),n.appendChild(e),o&&et(l).isWordStart&&n.append(` `)})),t.absolute&&J(n,{height:r.height,top:r.top}),n})),r.words||ht(h),e.replaceChildren(h)),t.absolute&&(e.style.width=`${e.style.width||u}px`,e.style.height=`${l}px`,Qe(a).forEach((function(e){var t=et(e),n=t.isLine,r=t.top,i=t.left,a=t.width,o=t.height,s=et(e.parentElement),c=!n&&s.isLine;e.style.top=`${c?r-s.top:r}px`,e.style.left=n?`${d.left}px`:`${i-(c?d.left:0)}px`,e.style.height=`${o}px`,e.style.width=n?`${d.width}px`:`${a}px`,e.style.position=`absolute`}))),p&&(m?p.insertBefore(e,m):p.appendChild(e)),f}var _t,vt,Y,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{r(),(function(){function e(){for(var e=arguments.length,t=0;t<e;t++){var n=t<0||arguments.length<=t?void 0:arguments[t];n.nodeType===1||n.nodeType===11?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function n(){var e=this.parentNode,t=[...arguments],n=t.length;if(e)for(n||e.removeChild(this);n--;){var r=t[n];typeof r==`object`?r.parentNode&&r.parentNode.removeChild(r):r=this.ownerDocument.createTextNode(r),n?e.insertBefore(this.previousSibling,r):e.replaceChild(r,this)}}typeof Element<`u`&&(Element.prototype.append||(Element.prototype.append=e,DocumentFragment.prototype.append=e),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))})(),_t=Object.entries,vt=`_splittype`,Y={},yt=0,bt=`\\ud800-\\udfff`,xt=`\\u0300-\\u036f\\ufe20-\\ufe23`,St=`\\u20d0-\\u20f0`,Ct=`\\ufe0e\\ufe0f`,wt=`[${bt}]`,Tt=`[${xt}${St}]`,Et=`\\ud83c[\\udffb-\\udfff]`,Dt=`(?:${Tt}|${Et})`,Ot=`[^${bt}]`,kt=`(?:\\ud83c[\\udde6-\\uddff]){2}`,At=`[\\ud800-\\udbff][\\udc00-\\udfff]`,jt=`\\u200d`,Mt=`${Dt}?`,Nt=`[${Ct}]?`,Pt=`(?:`+jt+`(?:`+[Ot,kt,At].join(`|`)+`)`+Nt+Mt+`)*`,Ft=Nt+Mt+Pt,It=`(?:${[`${Ot}${Tt}?`,Tt,kt,At,wt].join(`|`)}
)`,Lt=RegExp(`${Et}(?=${Et})|${It}${Ft}`,`g`),Rt=[jt,bt,xt,St,Ct],zt=RegExp(`[${Rt.join(``)}]`),Bt={splitClass:``,lineClass:`line`,wordClass:`word`,charClass:`char`,types:[`lines`,`words`,`chars`],absolute:!1,tagName:`div`},Vt=function(){return document.createDocumentFragment()},Ht=Ue(Bt,{}),Ut=function(){je(e,null,[{key:`clearData`,value:function(){nt()}},{key:`setDefaults`,value:function(e){return Ht=Ue(Ht,Ke(e)),Bt}},{key:`revert`,value:function(e){$e(e).forEach((function(e){var t=et(e),n=t.isSplit,r=t.html,i=t.cssWidth,a=t.cssHeight;n&&(e.innerHTML=r,e.style.width=i||``,e.style.height=a||``,tt(e))}))}},{key:`create`,value:function(t,n){return new e(t,n)}},{key:`data`,get:function(){return Y}},{key:`defaults`,get:function(){return Ht},set:function(e){Ht=Ue(Ht,Ke(e))}}]);function e(t,n){ke(this,e),this.isSplit=!1,this.settings=Ue(Ht,Ke(n)),this.elements=$e(t),this.split()}return je(e,[{key:`split`,value:function(e){var t=this;this.revert(),this.elements.forEach((function(e){J(e,`html`,e.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var n=[g.pageXOffset,g.pageYOffset];e!==void 0&&(this.settings=Ue(this.settings,Ke(e)));var r=qe(this.settings.types);r.none||(this.elements.forEach((function(e){J(e,`isRoot`,!0);var n=pt(e,t.settings),r=n.words,i=n.chars;t.words=[].concat(q(t.words),q(r)),t.chars=[].concat(q(t.chars),q(i))})),this.elements.forEach((function(e){if(r.lines||t.settings.absolute){var i=gt(e,t.settings,n);t.lines=[].concat(q(t.lines),q(i))}})),this.isSplit=!0,g.scrollTo(n[0],n[1]),rt())}},{key:`revert`,value:function(){this.isSplit&&=(this.lines=null,this.words=null,this.chars=null,!1),e.revert(this.elements)}}]),e}()})))()}function Gt(e){let{text:t,images:n,tag:r,fontFamily:i,fontSize:o,lineHeight:c,letterSpacing:u,color:d,align:m,gap:v,enableAnimation:y,angle:b,duration:x,delay:S}=e,C=s(null),w=g!==void 0&&(g.location.href.includes(`framer.com`)||g.location.href.includes(`localhost`)),T=l(()=>t.split(`[]`),[t]),E=r,D=l(()=>{let e=i;if(e){if(typeof e==`string`)return e;if(typeof e==`object`)return e.family||e.fontFamily}},[i]),O=l(()=>{let e=i;if(typeof e==`object`&&e.fontWeight)return e.fontWeight},[i]),k=l(()=>T.map(()=>Math.random()),[T.length]);return h(()=>{if(!C.current||w)return;let e=null,t=()=>{let t=C.current;if(!t)return;e?.revert(),z.getAll().forEach(e=>{e.trigger===t&&e.kill()});let n=t.querySelector(`h1,h2,h3,h4,h5,h6,p,span`)||t;t.style.visibility=`hidden`,e=new Ut(n,{types:`lines`,lineClass:`gsap-line`}),e.lines.forEach(e=>{let t=document.createElement(`div`);t.style.cssText=`overflow:hidden; display:block;`,e.parentNode.insertBefore(t,e),t.appendChild(e),e.style.display=`block`}),U.set(e.lines,{y:`120%`}),t.style.visibility=`visible`,z.create({trigger:t,start:`top 95%`,once:!0,onEnter:()=>{U.to(e.lines,{y:`0%`,duration:.7,ease:`power3.out`,stagger:.06,delay:S||0})}})},n=U.context(()=>{document.fonts?.ready?document.fonts.ready.then(t):t()},C);z.addEventListener(`refreshInit`,t);let r,i=g.innerWidth,a=()=>{g.innerWidth!==i&&(i=g.innerWidth,clearTimeout(r),r=setTimeout(t,200))};return g.addEventListener(`resize`,a),()=>{n.revert(),e?.revert(),z.removeEventListener(`refreshInit`,t),g.removeEventListener(`resize`,a)}},[w,S]),/*#__PURE__*/ f(`div`,{ref:C,style:{width:`100%`,transform:`translateZ(0)`},children:/*#__PURE__*/ f(E,{style:{fontFamily:D,fontWeight:O,fontSize:o,lineHeight:c,letterSpacing:`${u}em`,color:d,textAlign:m,margin:0,padding:0,display:`block`,width:`100%`,whiteSpace:`pre-wrap`},children:T.map((e,t)=>{let r=t===T.length-1?null:n?.[t],i=k[t]||.5,o=i>.5?[b,-b]:[-b,b],s=y?{animate:{rotate:o},transition:{duration:x,repeat:1/0,repeatType:`reverse`,ease:`easeInOut`,delay:x*.5*i}}:{};return/*#__PURE__*/ p(a,{children:[e,r&&/*#__PURE__*/ f(_.span,{...s,style:{display:`inline-flex`,alignItems:`center`,height:`1em`,margin:`0 ${v}em`,verticalAlign:`middle`,transformOrigin:`center`,willChange:`transform`},children:/*#__PURE__*/ f(`img`,{src:r,alt:``,style:{height:`100%`,width:`auto`,display:`block`,objectFit:`contain`}})})]},t)})})})}function Kt(){return(Kt=e((()=>{r(),c(),m(),T(),b(),fe(),de(),Wt(),U.registerPlugin(z),ue(Gt,{text:{type:N.String,title:`Text`,displayTextArea:!0,defaultValue:`I design products that feel like they were built for actual humans.`},images:{type:N.Array,title:`Images`,control:{type:N.Image}},enableAnimation:{type:N.Boolean,title:`Animation`,defaultValue:!0},delay:{type:N.Number,title:`Delay`,defaultValue:0,min:0,step:.1},angle:{type:N.Number,title:`Angle`,defaultValue:15,hidden:e=>!e.enableAnimation},duration:{type:N.Number,title:`Duration`,defaultValue:2,hidden:e=>!e.enableAnimation},tag:{type:N.Enum,title:`Tag`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`p`,`span`],defaultValue:`h2`},fontFamily:{type:N.Font,title:`Font`},fontSize:{type:N.Number,title:`Size`,defaultValue:64},lineHeight:{type:N.Number,title:`Line Height`,defaultValue:1.1},letterSpacing:{type:N.Number,title:`Letter`,defaultValue:-.02},align:{type:N.SegmentedEnum,title:`Align`,options:[`left`,`center`,`right`]},gap:{type:N.Number,title:`Icon Gap`,defaultValue:.15},color:{type:N.Color,title:`Color`,defaultValue:`#000000`}})})))()}function qt(e){let{contactUrl:t,resumeUrl:n,narrate:r,intro:a,wave:c,pageColor:u,ownGrid:d,siteCursor:p,gridSize:m,radius:_,style:v}=e,y=s(null),[b,x]=o(!a||d!==!1),S=l(()=>{let e=JSON.stringify({contactUrl:t||`/contact`,resumeUrl:n||`/resume`,narrate:r,wave:c,intro:a,pageColor:u||`#FFFFFF`,ownGrid:d!==!1,siteCursor:p,gridSize:m,hostNav:!0});return Jt.replace(`/*__CONFIG__*/`,`window.HERO_CONFIG=`+e+`;`)},[t,n,r,a,c,u,d,p,m]);return h(()=>{i(()=>{x(!a||d!==!1)})},[a,d]),h(()=>{let e=e=>{let t=y.current;if(!t||e.source!==t.contentWindow)return;let n=e.data;if(n&&n.srishtiHero===`introDone`){i(()=>{x(!0)});return}if(!n||n.srishtiHero!==`go`||typeof n.url!=`string`||!n.url)return;let r=n.url;try{r=new URL(n.url,g.location.href).href}catch{}n.newTab?g.open(r,`_blank`,`noopener`):g.location.href=r};g.addEventListener(`message`,e);let t=e=>{for(let t=e;t&&t!==document.body;t=t.parentElement){let e=getComputedStyle(t);if(e.visibility===`hidden`||parseFloat(e.opacity)<.05)return!0}let t=getComputedStyle(e);return t.backgroundColor===`rgba(0, 0, 0, 0)`&&t.backgroundImage===`none`&&!e.textContent.trim()&&!e.querySelector(`img,svg,video,canvas,iframe`)},n=e=>{let n=y.current;if(!n||e.target===n||!n.contentDocument)return;let r=n.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom||!t(e.target))return;let i=n.contentDocument.elementFromPoint(e.clientX-r.left,e.clientY-r.top),a=i&&i.closest(`button, a, [role=radio]`);a&&(e.preventDefault(),e.stopPropagation(),a.click())};return document.addEventListener(`click`,n,!0),()=>{g.removeEventListener(`message`,e),document.removeEventListener(`click`,n,!0)}},[]),/*#__PURE__*/ f(`iframe`,{ref:y,"aria-label":`Srishti, interactive hero`,srcDoc:S,style:{...v,width:`100%`,height:`100%`,border:`none`,display:`block`,borderRadius:_,background:d===!1&&b?`transparent`:u||`#FFFFFF`}})}var Jt;function Yt(){return(Yt=e((()=>{r(),c(),T(),m(),qt.defaultProps={contactUrl:`/contact`,resumeUrl:`/resume`,narrate:!0,intro:!0,wave:!0,pageColor:`#FFFFFF`,ownGrid:!0,siteCursor:!0,gridSize:100,radius:0},ue(qt,{contactUrl:{type:N.Link,title:`Let’s talk link`},resumeUrl:{type:N.Link,title:`Resume link`},gridSize:{type:N.Number,title:`Grid size`,defaultValue:100,min:10,max:400,step:1,unit:`px`,displayStepper:!0},ownGrid:{type:N.Boolean,title:`Own Grid`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},siteCursor:{type:N.Boolean,title:`Site cursor`,defaultValue:!0,enabledTitle:`Use mine`,disabledTitle:`Normal`},narrate:{type:N.Boolean,title:`Auto narrate`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},intro:{type:N.Boolean,title:`Opening`,defaultValue:!0,enabledTitle:`Play`,disabledTitle:`Skip`},wave:{type:N.Boolean,title:`Wavy line`,defaultValue:!0,enabledTitle:`Show`,disabledTitle:`Hide`},pageColor:{type:N.Color,title:`Below the line`,defaultValue:`#FFFFFF`},radius:{type:N.Number,title:`Radius`,defaultValue:0,min:0,max:64,unit:`px`}}),Jt=`<!doctype html>
<html lang="en" title="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Srishti, product designer</title>
<meta name="description" content="Srishti is a product designer in New Delhi working across mobile and enterprise web, from research through handoff.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&amp;family=Instrument+Serif:ital@0;1&amp;family=Archivo+Black&amp;family=Caveat:wght@500..700&amp;family=JetBrains+Mono:wght@500;700&amp;display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&amp;family=Anton&amp;family=Silkscreen:wght@700&amp;family=Rubik+Mono+One&amp;family=Unbounded:wght@900&amp;family=Fraunces:ital,wght@1,900&amp;text=SRISHTIsrishti&amp;display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee+Shade&amp;family=Climate+Crisis&amp;family=DM+Serif+Display:ital@1&amp;family=Monoton&amp;family=Rampart+One&amp;family=Rubik+Glitch&amp;text=SRISHTIsrishti&amp;display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@700&amp;family=Sixtyfour&amp;family=Tilt+Warp&amp;family=Zilla+Slab+Highlight:wght@700&amp;family=Barrio&amp;family=Syne:wght@800&amp;family=Rubik+Wet+Paint&amp;text=SRISHTIsrishti&amp;display=swap">
<script>/*__CONFIG__*/<\/script>
<style>
*,*::before,*::after{box-sizing:border-box}
:root{
  --lift:0 0 0 1px rgba(22,18,63,.08),0 14px 30px -16px rgba(22,18,63,.3);
  --bg:#FFFFFF;--grid:#F5F5F5;--ink:#16123F;--muted:#4A4766;
  --sel:#2F4BFF;--sel-fg:#FFFFFF;--chip:#2E2EC4;--tag-bg:#2E2EC4;--tag-fg:#FFFFFF;--spark:#D4F04A;
  --btn-bg:#2E2EC4;--btn-fg:#FFFFFF;--dock-bg:#16123F;--dock-fg:#FFFFFF;
  --card:#FFFFFF;--card-fg:#16123F;--card-muted:#5B5875;--card-line:rgba(22,18,63,.12);
  --live:#1DB954;
  --f-ui:'Instrument Sans',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;
  --f-serif:'Instrument Serif',Georgia,'Times New Roman',serif;
  --f-heavy:'Archivo Black','Arial Black',system-ui,sans-serif;
  --f-hand:'Caveat','Segoe Print','Bradley Hand',cursive;
  --f-mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px);
  padding-bottom:env(safe-area-inset-bottom,0px);
}
html.splash,html.splash body{background:#1D1C23}
html{height:100%;background:var(--bg);scroll-padding-top:env(safe-area-inset-top,0px)}
body{margin:0;height:100%;background:var(--bg);color:var(--ink);font-family:var(--f-ui);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
html.own-grid-off,html.own-grid-off body{background:transparent !important}
.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
:focus-visible{outline:2px solid var(--sel);outline-offset:3px}
button{font:inherit}

/* ---------- hero canvas ---------- */
.hero{position:relative;height:100%;min-height:560px;overflow:hidden;isolation:isolate;background-color:var(--canvas,#FFFFFF);background-image:linear-gradient(var(--canvas-grid,#F5F5F5) 1px,transparent 1px),linear-gradient(90deg,var(--canvas-grid,#F5F5F5) 1px,transparent 1px);background-size:var(--grid-s,80px) var(--grid-s,80px);background-position:var(--grid-x,0px) var(--grid-y,0px);user-select:none;-webkit-user-select:none;touch-action:pan-y}
.hero.own-grid-off{background-color:transparent !important;background-image:none !important}
body[data-bp="sm"] .hero{min-height:540px}
body[data-short="1"] .hero{min-height:0}
body[data-short="1"] .wordmark{inset:4% 24% 36% 8%}
body[data-short="1"] .todo,body[data-short="1"] .clock-top,body[data-short="1"] .lanyard,body[data-short="1"] .gf-dim,body[data-short="1"] .tape .note{display:none}
body[data-short="1"] .tape-body{height:28px;font-size:11px;letter-spacing:.1em;padding:0 11px 0 10px}
body[data-short="1"] .lrows,body[data-short="1"] .lrow{gap:10px}
body[data-short="1"] .deck{right:10px;bottom:8px;padding:6px}
body[data-short="1"] .deck-top{display:none}
body[data-short="1"] .deck-cap,body[data-short="1"] .key kbd,body[data-short="1"] .klbl,body[data-short="1"] .deck-q{display:none}
body[data-short="1"] .key{height:36px;padding:0 11px}
body[data-short="1"] .dude{left:-26px;bottom:-2px;width:52px;height:97.5px}
body[data-short="1"] .speech{font-size:19px;bottom:70px;padding:5px 11px 7px}
body[data-short="1"] .rb-page{height:44px;padding:0 11px 0 10px;gap:7px}
body[data-short="1"] .rb-t{font-size:16px}
body[data-short="1"] .rb-note{font-size:16px;top:calc(100% + 7px)}
body[data-tall="1"] .wordmark{inset:25% 4% 39% 4%}
body[data-tall="1"] .lanyard{left:calc(100% - 100px)}
body[data-tall="1"] .lrows,body[data-narrow="1"] .lrows{flex-direction:column;gap:14px}
body[data-tall="1"] .lrow,body[data-narrow="1"] .lrow{justify-content:center}
.hero[data-tool="sticker"]{cursor:copy;touch-action:none}
.hero[data-tool="comment"]{cursor:cell}
.hero:not([data-tool="move"]) .glyph,.hero:not([data-tool="move"]) .sticker,.hero:not([data-tool="move"]) .idcard{pointer-events:none}

/* ---------- name ---------- */
.wordmark{position:absolute;inset:0 0 18% 0;display:flex;align-items:center;justify-content:center;gap:.07em;pointer-events:none;font-size:150px;color:var(--ink)}
body[data-bp="md"] .wordmark{inset:0 0 17% 0}
body[data-bp="sm"] .wordmark{inset:22% 0 38% 0;gap:.05em}
.glyph{position:relative;display:block;margin:0;padding:0;border:0;background:none;color:inherit;line-height:1;cursor:pointer;pointer-events:auto;touch-action:none;transform-origin:50% 50%;will-change:transform;-webkit-tap-highlight-color:transparent;outline-offset:6px}
.glyph:active{cursor:grabbing}
.glyph:focus-visible{outline:2px dashed var(--sel)}
.glyph .ch{display:block;line-height:1;padding:.02em .035em;white-space:pre;color:var(--ink-c);transition:color .45s,background-color .45s,box-shadow .45s}
.glyph[data-v="cut"] .ch{background:var(--paper-c);padding:.08em .12em .06em}
.glyph[data-v="block"] .ch{background:var(--paper-c);padding:.08em .12em .06em;box-shadow:.04em .04em 0 var(--blk-c)}
.glyph[data-v="outline"] .ch{color:transparent;-webkit-text-stroke:.03em var(--ink-c)}
.glyph[data-v="shadow"] .ch{text-shadow:.055em .05em 0 var(--blk-c)}
.glyph.ease,.sticker.ease{transition:transform .55s cubic-bezier(.2,1.35,.4,1)}
.glyph.pre{opacity:0}
.glyph.in{animation:pop .5s cubic-bezier(.2,1.6,.4,1) both}
.glyph.flip{animation:flipin .55s cubic-bezier(.3,1.5,.5,1) both;animation-delay:var(--d,0ms)}
.glyph.bump{animation:bump .35s cubic-bezier(.3,1.8,.5,1)}
@keyframes pop{from{opacity:0;scale:.3}to{opacity:1;scale:1}}
@keyframes flipin{0%{scale:1 .05;opacity:.4}60%{scale:1 1.14}100%{scale:1 1;opacity:1}}
@keyframes bump{0%{scale:.8}100%{scale:1}}

/* selection chrome */
.sel{position:absolute;inset:-6px;border:calc(1.5px / var(--s,1)) solid var(--sel);pointer-events:none;z-index:5}
.hd{position:absolute;width:calc(10px / var(--s,1));height:calc(10px / var(--s,1));background:#fff;border:calc(1.5px / var(--s,1)) solid var(--sel);pointer-events:auto;touch-action:none}
.hd[data-h="tl"]{left:0;top:0;translate:-50% -50%;cursor:nwse-resize}
.hd[data-h="tr"]{right:0;top:0;translate:50% -50%;cursor:nesw-resize}
.hd[data-h="bl"]{left:0;bottom:0;translate:-50% 50%;cursor:nesw-resize}
.hd[data-h="br"]{right:0;bottom:0;translate:50% 50%;cursor:nwse-resize}
.hd[data-h="tm"]{left:50%;top:0;translate:-50% -50%;pointer-events:none}
.hd[data-h="bm"]{left:50%;bottom:0;translate:-50% 50%;pointer-events:none}
.hd[data-h="ml"]{left:0;top:50%;translate:-50% -50%;pointer-events:none}
.hd[data-h="mr"]{right:0;top:50%;translate:50% -50%;pointer-events:none}
.sel b,.gframe b{position:absolute;white-space:nowrap;font-family:var(--f-ui);font-style:normal;letter-spacing:0;-webkit-text-stroke:0;text-shadow:none}
.sel-name{left:calc(-1.5px / var(--s,1));bottom:100%;padding-bottom:calc(6px / var(--s,1));color:var(--sel);font-size:calc(12px / var(--s,1));font-weight:600;line-height:1}
.sel-dim{left:50%;top:100%;margin-top:calc(12px / var(--s,1));translate:-50% 0;background:var(--sel);color:var(--sel-fg);padding:calc(4px / var(--s,1)) calc(7px / var(--s,1));border-radius:calc(5px / var(--s,1));font-size:calc(12px / var(--s,1));font-weight:700;line-height:1;font-variant-numeric:tabular-nums}
.gframe{position:absolute;left:0;top:0;width:0;height:0;z-index:15;border:1.5px solid var(--sel);pointer-events:none;transition:opacity .25s}
.gframe.off{opacity:0}
.gframe.off .hd{pointer-events:none}
.gframe[hidden]{display:none}
.gf-name{left:-1.5px;bottom:100%;padding-bottom:6px;color:var(--sel);font-size:12.5px;font-weight:600;line-height:1}
.gf-dim{left:50%;top:100%;margin-top:14px;translate:-50% 0;background:var(--sel);color:var(--sel-fg);padding:5px 8px;border-radius:5px;font-size:12.5px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}
body[data-bp="sm"] .gf-dim{display:none}

/* ---------- stickers ---------- */
.sticker{position:absolute;left:0;top:0;cursor:grab;touch-action:none;will-change:transform;-webkit-tap-highlight-color:transparent}
.sticker:active{cursor:grabbing}
.sticker .art{display:block;transition:opacity .3s,scale .5s cubic-bezier(.2,1.6,.4,1)}
.sticker .art svg{display:block}
.sticker.is-svg .art{filter:drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff) drop-shadow(0 6px 8px rgba(22,18,63,.12))}
.sticker.pre .art{opacity:0;scale:.3}
.sticker.dragging .art{scale:1.05}
.sticker.squish .art{animation:squish .45s cubic-bezier(.3,1.6,.5,1)}
@keyframes squish{30%{scale:1.14 .86}60%{scale:.94 1.07}100%{scale:1 1}}
.sticker .eyes-open{display:none}
.sticker.awake .eyes-open{display:inline}
.sticker.awake .eyes-closed{display:none}
.sticker .steam path{animation:steam 2.4s ease-in-out infinite}
.sticker .steam path:nth-child(2){animation-delay:-.8s}
@keyframes steam{50%{translate:0 -3px;opacity:.55}}
.cat-bub{position:absolute;left:62%;bottom:100%;translate:-50% -28px;z-index:3;background:var(--dock-bg);color:var(--dock-fg);font:600 13.5px/1 var(--f-ui);padding:8px 11px;border-radius:10px 10px 10px 3px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}
.cat-bub.show{opacity:1}
.heart-pop{position:absolute;left:50%;top:10%;width:22px;height:22px;margin-left:-11px;pointer-events:none;animation:floatup .9s ease-out forwards}
@keyframes floatup{0%{opacity:0;translate:0 0;scale:.4}20%{opacity:1;scale:1.1}100%{opacity:0;translate:var(--hx,0px) -70px;scale:.9}}
.chipframe{position:relative;padding:6px 14px 5px;border:1.5px solid var(--sel);background:color-mix(in srgb,var(--bg) 82%,transparent);font:700 30px/1 var(--f-ui);letter-spacing:-.01em;color:var(--chip);transition:color .45s}
.chipframe i{position:absolute;width:10px;height:10px;background:#fff;border:1.5px solid var(--sel)}
.chipframe i:nth-of-type(1){left:-5px;top:-5px}.chipframe i:nth-of-type(2){right:-5px;top:-5px}.chipframe i:nth-of-type(3){left:-5px;bottom:-5px}.chipframe i:nth-of-type(4){right:-5px;bottom:-5px}
/* skills as embossed label-maker tapes, printed by a little label maker */
.labels{position:absolute;left:0;top:0;z-index:40;display:flex;align-items:center;gap:20px;translate:-50% 0;transition:opacity .5s}
.labels.pre{opacity:0}
.lrows{display:flex;align-items:center;gap:18px}
.lrow{display:flex;align-items:center;gap:18px}
.tape{position:relative;display:block;margin:0;padding:0;border:0;background:none;color:inherit;font:inherit;cursor:grab;touch-action:none;-webkit-tap-highlight-color:transparent;rotate:var(--r,0deg);translate:0 0;filter:drop-shadow(0 5px 5px rgba(22,18,63,.28));transition:translate .5s cubic-bezier(.3,1.7,.45,1),rotate .5s cubic-bezier(.3,1.7,.45,1),filter .2s}
.tape-rev{display:block;clip-path:inset(-12px 100% -12px -12px);transition:clip-path 1s steps(18,end)}
.tape.printed .tape-rev,.sticker .tape-rev{clip-path:inset(-12px -12px -12px -12px)}
.sticker.printing .tape-rev{clip-path:inset(-12px 100% -12px -12px);transition:none}
.tape-body{position:relative;display:flex;align-items:center;height:38px;padding:0 17px 0 16px;background:var(--tc);background-image:linear-gradient(rgba(255,255,255,.22),rgba(255,255,255,0) 42%,rgba(0,0,0,.14)),radial-gradient(rgba(255,255,255,.07) 1px,transparent 1.3px);background-size:auto,4px 4px;clip-path:polygon(0 7%,100% 0,98.6% 100%,1.2% 94%);font:700 15px/1 var(--f-mono);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.tape-body i{display:inline-block;font-style:normal;color:#FDFDFD;text-shadow:0 1px 0 rgba(0,0,0,.4),0 -1px 0 rgba(255,255,255,.35),0 0 1px rgba(255,255,255,.4)}
.tape-body i.sp{width:.55em}
.t1{--tc:#D6334F;--r:-1.5deg}.t2{--tc:#16123F;--r:1deg}.t3{--tc:#2856D0;--r:-1deg}.t4{--tc:#178A55;--r:1.5deg}
@media (hover:hover){.tape:hover{translate:-1px -4px;rotate:0deg;filter:drop-shadow(0 12px 10px rgba(22,18,63,.32))}}
.tape.drag{cursor:grabbing;z-index:3;filter:drop-shadow(0 16px 14px rgba(22,18,63,.36));transition:filter .15s}
.tape.pop{animation:tapepop .4s cubic-bezier(.3,1.6,.5,1)}
@keyframes tapepop{40%{translate:0 -6px}}
.tape .note{position:absolute;left:50%;top:calc(100% + 10px);translate:-50% -6px;font:600 22px/1 var(--f-hand);letter-spacing:0;text-transform:none;color:var(--ink);white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s,translate .3s cubic-bezier(.3,1.5,.5,1)}
.tape .note::before{content:"";position:absolute;left:50%;top:-10px;width:1.8px;height:8px;background:currentColor;border-radius:2px;opacity:.7}
@media (hover:hover){.tape:hover .note{opacity:1;translate:-50% 0}}
.tape.drag .note{opacity:0}
body[data-bp="md"] .tape-body{height:34px;font-size:13px;padding:0 14px 0 13px}
body[data-bp="md"] .lrows,body[data-bp="md"] .lrow{gap:14px}
body[data-bp="sm"] .labels{gap:0}
body[data-bp="sm"] .lrows{flex-direction:column;gap:12px}
body[data-bp="sm"] .lrow{gap:10px;justify-content:center}
body[data-bp="sm"] .tape-body{height:30px;font-size:11.5px;letter-spacing:.1em;padding:0 12px 0 11px}
body[data-bp="sm"] .tape .note{display:none}
.yearpill{padding:7px 14px 6px;border-radius:12px;background:#D4F04A;color:#16123F;font:700 25px/1 var(--f-ui);box-shadow:0 0 0 2.5px #16123F,0 10px 16px -10px rgba(22,18,63,.45)}

/* ---------- Figma-style comment (top left) ---------- */
/* status line under the name */
.resume-btn{position:absolute;left:0;top:0;z-index:46;display:block;text-decoration:none;color:#16123F;-webkit-tap-highlight-color:transparent;transition:opacity .5s}
.resume-btn.pre{opacity:0}
.rb-in{position:relative;display:block;rotate:4deg;transition:rotate .45s cubic-bezier(.3,1.5,.5,1),translate .45s cubic-bezier(.3,1.5,.5,1)}
.resume-btn:hover .rb-in,.resume-btn:focus-visible .rb-in{rotate:0deg;translate:0 -4px}
.resume-btn:focus-visible{outline:none}
.resume-btn:focus-visible .rb-page{outline:2px solid var(--sel);outline-offset:4px}
.rb-page{position:relative;display:flex;align-items:center;gap:10px;height:58px;padding:0 16px 0 14px;border:2.5px solid #16123F;border-radius:8px 20px 8px 8px;background:#FFFFFF;box-shadow:4px 4px 0 #16123F;clip-path:polygon(-10px -10px,calc(100% - 18px) -10px,calc(100% + 10px) 18px,calc(100% + 10px) calc(100% + 10px),-10px calc(100% + 10px));transition:box-shadow .3s}
.resume-btn:hover .rb-page{box-shadow:6px 7px 0 #16123F}
.rb-page::after{content:"";position:absolute;right:-2.5px;top:-2.5px;width:20px;height:20px;background:#E6E6EE;border-left:2.5px solid #16123F;border-bottom:2.5px solid #16123F;border-radius:0 0 0 6px}
.rb-pdf{padding:5px 6px;border-radius:5px;background:#E8412C;color:#FFFFFF;font:700 11px/1 var(--f-mono)}
.rb-t{font:700 21px/1 var(--f-mono);letter-spacing:.02em}
.rb-dl{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:#00C8F6;border:2px solid #16123F}
.rb-dl svg{width:16px;height:16px;fill:none;stroke:#16123F;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.resume-btn:hover .rb-dl svg{animation:rbdrop .6s ease-in-out infinite}
@keyframes rbdrop{50%{translate:0 3px}}
.rb-clip{position:absolute;left:18px;top:-11px;z-index:2;width:13px;height:30px;fill:none;stroke:#8C89A0;stroke-width:2.2;stroke-linecap:round;transform-origin:50% 20%;transition:rotate .45s cubic-bezier(.3,1.6,.5,1)}
.resume-btn:hover .rb-clip{rotate:-20deg}
.resume-btn.tight .rb-note{display:none}
.rb-note{position:absolute;left:50%;top:calc(100% + 12px);translate:-50% 0;font:600 20px/1 var(--f-hand);color:var(--ink);white-space:nowrap;rotate:-3deg;transition:color .5s}
body[data-bp="sm"] .rb-page{height:48px;padding:0 12px 0 11px;gap:8px}
body[data-bp="sm"] .rb-t{font-size:17px}
body[data-bp="sm"] .rb-note{font-size:17px;top:calc(100% + 8px)}
.status{position:absolute;left:0;top:0;z-index:30;display:inline-flex;align-items:center;gap:10px;font:500 13px/1 var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-decoration:none;white-space:nowrap;translate:-50% 0;transition:color .3s,opacity .5s}
.status:hover{color:var(--ink)}
.status .live{position:relative;width:7px;height:7px;border-radius:50%;background:var(--live)}
.status .live::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1.5px solid var(--live);opacity:0}
@media (prefers-reduced-motion:no-preference){.status .live::after{animation:ping 2.4s ease-out infinite}}
@keyframes ping{0%{opacity:.8;scale:.4}100%{opacity:0;scale:1.5}}
.st-rot{position:relative;display:inline-block;height:2em;vertical-align:middle;transition:width .45s cubic-bezier(.3,1.2,.5,1)}
.st-hl{position:absolute;inset:0 -2px;background:#FFD60A;border-radius:4px 11px 5px 12px/11px 5px 12px 4px;rotate:-1.2deg;transform-origin:0 50%;box-shadow:2px 2px 0 rgba(22,18,63,.9);transition:scale .42s cubic-bezier(.65,0,.3,1)}
.st-rot.wipe .st-hl{transform-origin:100% 50%;scale:0 1}
.st-t{position:absolute;left:0;top:0;height:100%;display:flex;align-items:center;padding:0 10px;font:700 14px/1 var(--f-mono);letter-spacing:.1em;color:#16123F;white-space:nowrap;transition:opacity .16s}
.st-rot.wipe .st-t{opacity:0}
.st-go{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;opacity:0;translate:-4px 0;transition:opacity .2s,translate .25s}
.status:hover .st-go{opacity:1;translate:0 0}
.status.pre{opacity:0}
body[data-bp="sm"] .status{font-size:10.5px;letter-spacing:.08em}
body[data-bp="sm"] .st-t{font-size:11px;padding:0 7px}
/* top-left: a sticky to-do note */
.todo{position:absolute;left:56px;top:34px;z-index:640;width:208px;padding:16px 16px 14px 18px;background:#FFE55C;background-image:linear-gradient(180deg,rgba(255,255,255,.35),rgba(255,255,255,0) 30%),repeating-linear-gradient(transparent 0 29px,rgba(22,18,63,.07) 29px 30px);background-position:0 0,0 12px;color:#16123F;rotate:-3deg;border-radius:2px 2px 14px 2px;box-shadow:0 1px 0 rgba(0,0,0,.05),0 14px 22px -14px rgba(22,18,63,.45);transition:opacity .45s,translate .6s cubic-bezier(.2,1.3,.4,1),rotate .4s cubic-bezier(.3,1.5,.5,1)}
.todo.pre{opacity:0;translate:0 -16px}
.todo:hover{rotate:-1deg}
.todo::before{content:"";position:absolute;left:50%;top:-11px;width:74px;height:22px;margin-left:-37px;background:rgba(255,255,255,.55);border:1px solid rgba(22,18,63,.08);rotate:2deg;backdrop-filter:blur(1px)}
.todo::after{content:"";position:absolute;right:0;bottom:0;width:18px;height:18px;background:linear-gradient(135deg,#F2CF2E 50%,rgba(0,0,0,0) 50%);border-radius:0 0 14px 0;filter:drop-shadow(-1px -1px 1px rgba(22,18,63,.12))}
.todo h2{margin:0 0 6px;font:700 25px/1 var(--f-hand)}
.todo ul{list-style:none;margin:0;padding:0;font:600 21px/30px var(--f-hand)}
.todo li{display:flex;flex-wrap:wrap;align-items:center;gap:0 9px}
.todo .box{position:relative;flex:none;width:17px;height:17px;border:2px solid #16123F;border-radius:4px;background:rgba(255,255,255,.5)}
.todo .box svg{position:absolute;left:-3px;top:-6px;width:24px;height:22px;fill:none;stroke:#D6334F;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.todo .done span{text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:rgba(22,18,63,.55)}
.todo .tick{stroke-dasharray:30;stroke-dashoffset:30;transition:stroke-dashoffset .45s ease}
.todo .done .tick,.todo li.checked .tick{stroke-dashoffset:0}
.todo button{all:unset;display:flex;align-items:center;gap:9px;cursor:pointer;border-radius:4px}
.todo button:focus-visible{outline:2px solid #16123F;outline-offset:3px}
.todo button:hover .box{background:#FFFFFF}
.todo .go{display:none;flex-basis:100%;margin:-2px 0 0 26px;font:600 18px/1 var(--f-hand);color:#D6334F;text-decoration:underline;text-underline-offset:3px}
.todo li.checked .go{display:inline}
body[data-bp="md"] .todo{left:40px;top:28px;width:196px}
body[data-bp="sm"] .todo{display:none}
.clock-top{position:absolute;left:50%;top:40px;z-index:30;translate:-50% 0;font:500 15px/1 var(--f-mono);color:var(--ink);font-variant-numeric:tabular-nums;white-space:nowrap;transition:color .5s}
body[data-bp="sm"] .clock-top{display:none}

/* ---------- ID card ---------- */
.lanyard{--cw:188px;--strap:54px;position:absolute;top:0;left:90%;width:0;height:0;z-index:700}
body[data-bp="md"] .lanyard{--cw:156px;--strap:26px;left:91%}
body[data-bp="sm"] .lanyard{display:none}
.swing{position:absolute;left:0;top:0;width:0;height:0;transform-origin:0 0;transition:translate .9s cubic-bezier(.2,1.25,.35,1)}
.lanyard.pre .swing{translate:0 -520px}
.strap{position:absolute;left:-10px;top:-90px;width:20px;height:calc(var(--strap) + 100px);background:#2E2EC4;overflow:hidden;display:flex;justify-content:center;align-items:flex-end;box-shadow:inset 2px 0 0 rgba(255,255,255,.16),inset -2px 0 0 rgba(0,0,0,.18)}
.strap span{writing-mode:vertical-rl;color:#D4F04A;font:700 8.5px/1 var(--f-ui);letter-spacing:.18em;white-space:nowrap;padding-bottom:8px}
.clip{position:absolute;left:-15px;top:calc(var(--strap) - 4px);width:30px;height:28px;border-radius:8px;background:#C9CDD8;box-shadow:inset 0 0 0 1.5px rgba(22,18,63,.35),inset 0 -6px 0 rgba(22,18,63,.1)}
.clip::before{content:"";position:absolute;left:8px;top:7px;width:14px;height:7px;border-radius:3px;background:#fff;box-shadow:inset 0 0 0 1.5px rgba(22,18,63,.35)}
.idcard{position:absolute;left:calc(var(--cw) / -2);top:calc(var(--strap) + 16px);width:var(--cw);rotate:5deg;perspective:900px;cursor:grab;touch-action:none}
.idcard.grab{cursor:grabbing}
.flip{position:relative;transform-style:preserve-3d;transition:transform .75s cubic-bezier(.3,1.35,.5,1)}
.idcard.flipped .flip{transform:rotateY(180deg)}
.face{position:relative;padding:20px 10px 10px;border-radius:18px;background:#D4F04A;box-shadow:0 24px 34px -18px rgba(22,18,63,.55),inset 0 0 0 1.5px rgba(22,18,63,.1);-webkit-backface-visibility:hidden;backface-visibility:hidden}
.face::before{content:"";position:absolute;left:50%;top:7px;width:42px;height:7px;margin-left:-21px;border-radius:5px;background:rgba(22,18,63,.28)}
.face.back{position:absolute;inset:0;transform:rotateY(180deg)}
.face::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(110deg,transparent 36%,rgba(255,255,255,.55) 47%,rgba(200,230,255,.28) 53%,transparent 64%);background-size:260% 100%;background-position:var(--gx,100%) 0;opacity:0;transition:opacity .35s}
.idcard:hover .face::after,.idcard.grab .face::after{opacity:1}
.id-in{height:100%;background:#fff;border-radius:10px;padding:10px 10px 9px;color:#16123F;font-family:var(--f-ui)}
.id-top{display:flex;justify-content:space-between;align-items:center;font-size:10.5px;font-weight:700;line-height:1}
.id-org{display:flex;align-items:center;gap:5px}
.id-org i{width:8px;height:8px;border-radius:2px;background:#2E2EC4}
.id-yr{color:#5B5875;font-weight:600}
.id-photo{position:relative;aspect-ratio:4/3;margin-top:9px;padding:3px;border-radius:8px;background:#2E2EC4}
.id-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%;border-radius:5px;-webkit-user-drag:none;pointer-events:none}
.id-photo svg{position:absolute;right:-6px;top:-7px;width:20px;height:20px;fill:#D4F04A;filter:drop-shadow(0 0 0 #2E2EC4) drop-shadow(1px 1px 0 #2E2EC4) drop-shadow(-1px -1px 0 #2E2EC4)}
.id-sign{margin-top:9px;font:italic 400 24px/1 var(--f-serif);white-space:nowrap}
.id-role{margin-top:7px;font:400 13px/1.02 var(--f-heavy);letter-spacing:.03em}
.id-meta{margin-top:5px;font-size:10.5px;color:#5B5875;line-height:1.2}
.id-bar{display:block;width:100%;height:15px;margin-top:9px}
.back .id-in{display:flex;flex-direction:column}
.id-bt{font:400 12px/1 var(--f-heavy);letter-spacing:.07em}
.id-list{list-style:none;margin:11px 0 0;padding:0;display:grid;gap:8px;font-size:12.5px;font-weight:600;line-height:1.1}
.id-list li{display:flex;align-items:center;gap:7px}
.id-list li::before{content:"";flex:none;width:10px;height:10px;border-radius:3px;background:#D4F04A;box-shadow:inset 0 0 0 1.5px #16123F}
.id-prev{margin-top:auto;font-size:10.5px;color:#5B5875;line-height:1.3}
.id-prev b{display:block;color:#16123F;font-weight:700}
.id-hint{margin-top:7px;font-size:10px;font-weight:700;color:#2E2EC4}
body[data-bp="md"] .id-sign{font-size:20px}
body[data-bp="md"] .id-list{font-size:11px;gap:6px}

/* ---------- visitor notes ---------- */
.note{position:absolute;z-index:620;translate:0 -100%}
.note-pin{display:grid;place-items:center;width:34px;height:34px;border-radius:17px 17px 17px 3px;background:#D5157F;color:#fff;font-size:11px;font-weight:700;box-shadow:0 0 0 2.5px #fff,0 6px 14px -6px rgba(22,18,63,.45)}
.note-bubble{position:absolute;left:44px;bottom:0;min-width:180px;max-width:250px;background:var(--card);color:var(--card-fg);border-radius:12px;padding:9px 12px 10px;box-shadow:0 0 0 1px var(--card-line),0 12px 24px -12px rgba(22,18,63,.45);font-size:14px;line-height:1.35}
.note.left .note-bubble{left:auto;right:44px}
.note-who{display:block;font-size:12px;font-weight:700;color:#D5157F;margin-bottom:2px}
.note-bubble p{margin:0;overflow-wrap:anywhere}
.note form{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;min-width:250px}
.note input{flex:1;min-width:0;border:0;background:transparent;color:var(--card-fg);font:500 14px/1.3 var(--f-ui);padding:6px 0;outline:none}
.note input::placeholder{color:var(--card-muted)}
.note form button{width:32px;height:32px;flex:none;border:0;border-radius:8px;background:var(--btn-bg);color:var(--btn-fg);display:grid;place-items:center;cursor:pointer}
.note form button svg{width:16px;height:16px}

/* ---------- cursors ---------- */
.cur{position:absolute;left:0;top:0;z-index:830;margin:0;padding:0;border:0;background:none;color:inherit;pointer-events:none;will-change:transform;text-align:left}
.cur svg{display:block;filter:drop-shadow(0 1px 1.5px rgba(22,18,63,.3))}
.cur .pill{position:absolute;left:15px;top:19px;display:flex;flex-direction:column;gap:2px;background:var(--c);color:#fff;font:600 12.5px/1.25 var(--f-ui);padding:3px 8px 4px;border-radius:3px 11px 11px 11px;white-space:nowrap;box-shadow:0 3px 8px -2px rgba(22,18,63,.25)}
.cur .msg{display:none;font-weight:500;font-size:14.5px;line-height:1.3;white-space:normal;width:max-content;max-width:210px}
.cur.talk .pill{padding:6px 11px 8px;border-radius:3px 14px 14px 14px}
.cur.talk .nm{font-size:11px;opacity:.88}
.cur.talk .msg{display:block;animation:say .25s cubic-bezier(.2,1.5,.4,1)}
@keyframes say{from{opacity:0;translate:-6px 0}to{opacity:1;translate:0 0}}
.bot{pointer-events:auto;cursor:pointer;transition:opacity .3s}
.bot .pill{box-shadow:0 0 0 1.5px rgba(255,255,255,.9),0 3px 8px -2px rgba(22,18,63,.25)}
.bot.leaving{opacity:0}
.bot[hidden]{display:none}
body[data-bp="sm"] .cur .msg{max-width:150px;font-size:13.5px}

/* Srishti as a doodle: a jointed little figure, animated from script */
.doodle{position:absolute;left:0;top:0;z-index:845;width:0;height:0;will-change:transform}
.doodle.pre{opacity:0}
.dude{position:absolute;left:-38px;bottom:-2.5px;width:76px;height:142.5px;padding:0;border:0;background:none;cursor:pointer;pointer-events:auto;-webkit-tap-highlight-color:transparent}
.dude svg{display:block;width:100%;height:100%;overflow:visible}
.doodle.left .dude svg{scale:-1 1}
.dude .ln{fill:none;stroke:#16123F;stroke-width:2.7;stroke-linecap:round;stroke-linejoin:round}
.dude .thin{stroke-width:1.7}
.dude .fill{fill:#FFFFFF;stroke:#16123F;stroke-width:2.5;stroke-linejoin:round}
.dude .ink{fill:#16123F}
.dude .tee{fill:var(--tee,#00C8F6);stroke:#16123F;stroke-width:2.2;stroke-linejoin:round;transition:fill .5s}
.dude .shoe{fill:var(--shoe,#FF5B2E);stroke:#16123F;stroke-width:1.5;stroke-linejoin:round;transition:fill .5s}
.dude .skin{fill:#F2C6A1;stroke:#16123F;stroke-width:1.9;stroke-linejoin:round}
.dude .lo{fill:none;stroke:#16123F;stroke-linecap:round}
.dude .li{fill:none;stroke-linecap:round}
.dude .sneaker{fill:#FFFFFF;stroke:#16123F;stroke-width:1.6;stroke-linejoin:round}
.dude .lens{fill:rgba(255,255,255,.08);stroke:#16123F;stroke-width:2}
.dude .cheek{fill:#FF9DB5;opacity:.8}
.dude .shadow{fill:#16123F;opacity:.13;transition:opacity .3s}
.doodle.sitting .dude .shadow{opacity:0}
.dude .mouth-o{display:none}
.dude .tuck{opacity:0;transition:opacity .15s}.dude .hand{transition:opacity .15s}
.doodle.pockets .dude .tuck{opacity:1}.doodle.pockets .dude .hand{opacity:0}
.doodle.talking .mouth-s{display:none}
.doodle.talking .mouth-o{display:inline;transform-box:fill-box;transform-origin:50% 50%;animation:talk .2s steps(2) infinite}
@keyframes talk{50%{scale:1 .35}}
.dude .eyes{transform-box:fill-box;transform-origin:50% 50%}
@media (prefers-reduced-motion:no-preference){.dude .eyes{animation:blinkeye 4.4s infinite}}
@keyframes blinkeye{0%,94%,100%{scale:1 1}96%{scale:1 .1}}
body[data-bp="md"] .dude{left:-33.4px;bottom:-2.7px;width:66.9px;height:125.4px}
body[data-bp="sm"] .dude{left:-28.9px;bottom:-2.3px;width:57.8px;height:108.3px}
.speech{position:absolute;left:0;bottom:100px;margin:0;padding:7px 16px 10px;width:max-content;max-width:300px;background:#FFFFFF;color:#16123F;border:2.2px solid #16123F;border-radius:20px 16px 22px 14px/16px 22px 14px 20px;box-shadow:3px 3px 0 #16123F;font:600 27px/1.05 var(--f-hand);white-space:normal;pointer-events:auto;cursor:pointer;transform-origin:50% 100%;transition:opacity .2s,scale .3s cubic-bezier(.3,1.6,.5,1)}
.speech.empty{opacity:0;scale:.5}
.speech::after{content:"";position:absolute;bottom:-9px;width:14px;height:14px;background:#FFFFFF;border-right:2.2px solid #16123F;border-bottom:2.2px solid #16123F}
.speech.tail-r::after{right:16px;transform:rotate(45deg) skew(10deg,10deg)}
.speech.tail-l::after{left:16px;transform:rotate(45deg) skew(10deg,10deg)}
.speech .caret{display:inline-block;width:2px;height:.8em;margin-left:2px;vertical-align:-.05em;background:currentColor;border-radius:1px;animation:blink 1s steps(1) infinite}
.doodle.idle .speech .caret{display:none}
.speech .more{display:none;margin-top:2px;font:500 18px/1 var(--f-hand);color:#6B6880}
.doodle.idle .speech .more{display:block}
@keyframes blink{50%{opacity:0}}
body[data-bp="md"] .speech{font-size:24px;bottom:92px;max-width:260px}
body[data-bp="sm"] .speech{font-size:20px;bottom:80px;padding:5px 12px 8px;white-space:normal;width:max-content;max-width:calc(100vw - 110px)}

/* ---------- key deck ---------- */
.deck{position:absolute;right:44px;bottom:22px;z-index:900;width:440px;padding:10px;border-radius:20px;background:#FFFFFF;color:#16123F;box-shadow:var(--lift)}
.deck-top{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:2px 4px 11px 6px}
.deck-cap{margin:0;font:500 12.5px/1.25 var(--f-ui);color:#5B5875;max-width:210px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.deck-q{flex:none;width:22px;height:22px;margin:0 2px 0 -6px;padding:0;border:0;border-radius:6px;background:#F2F2F6;color:#5B5875;font:700 12px/1 var(--f-mono);cursor:pointer;display:grid;place-items:center}
.deck-q:hover{background:#E6E6EE;color:#16123F}
body[data-bp="sm"] .deck-q{display:none}
.keys-card{position:absolute;right:44px;bottom:150px;z-index:960;width:300px;padding:14px 16px 12px;border-radius:16px;background:#FFFFFF;color:#16123F;box-shadow:var(--lift);transform-origin:90% 100%;transition:opacity .2s,scale .25s cubic-bezier(.3,1.4,.5,1)}
.keys-card[hidden]{display:block;opacity:0;scale:.9;pointer-events:none;visibility:hidden}
body[data-bp="md"] .keys-card{right:36px;bottom:140px}
.keys-card h2{margin:0 0 10px;font:700 14px/1 var(--f-ui)}
.keys-card dl{display:grid;grid-template-columns:auto 1fr;gap:7px 12px;margin:0;font-size:13px;line-height:1.2}
.keys-card dt{display:flex;gap:4px;justify-content:flex-end}
.keys-card dd{margin:0;color:#4A4766;align-self:center}
.keys-card kbd{min-width:22px;padding:4px 6px;border-radius:6px;background:#F2F2F6;box-shadow:inset 0 -1.5px 0 rgba(22,18,63,.12);font:600 11px/1 var(--f-mono);text-align:center;color:#16123F}
.swatches{display:flex;align-items:center;gap:7px}
.sw,.key,.tray button,.resume-btn,.status,.todo a,.todo button,.glyph,.tape,.dude{touch-action:manipulation}
.sw{position:relative;width:18px;height:18px;padding:0;border:0;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(22,18,63,.2);cursor:pointer;transition:scale .2s cubic-bezier(.3,1.6,.5,1),box-shadow .2s}
.sw:hover{scale:1.25}
.sw[aria-checked="true"]{box-shadow:inset 0 0 0 1px rgba(22,18,63,.2),0 0 0 2.5px #F1F1F5,0 0 0 4px #16123F}
.keys{display:flex;gap:8px}
.key{position:relative;flex:1 1 0;min-width:0;width:auto;height:54px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:4px 0 0;border:0;border-radius:12px;background:#F5F5F8;color:#16123F;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(22,18,63,.06);transition:background-color .15s,translate .08s ease}
.key:hover{background:#ECECF2}
.key:active,.key.down{translate:0 1px;background:#E6E6EE}
.key[aria-pressed="true"]{background:#16123F;color:#FFFFFF}
.key svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.key kbd{position:absolute;left:8px;top:6px;font:600 10px/1 var(--f-ui);color:#8C89A0;opacity:0;transition:opacity .2s}
.deck:hover .key kbd{opacity:1}
.key[aria-pressed="true"] kbd{color:#B9B6DA}
.klbl{font:600 11px/1 var(--f-ui)}
.led{display:none}
.key-remix{flex:1.9 1 0;background:#00C8F6;box-shadow:none}
.key-remix:hover{background:#2AD3F9}
.key-remix:active,.key-remix.down{background:#00B5DF}
.key-remix kbd{color:#004E61}
.dice.roll{animation:roll .7s cubic-bezier(.3,1.4,.5,1)}
@keyframes roll{0%{rotate:0deg;scale:1}40%{rotate:200deg;scale:1.3}100%{rotate:360deg;scale:1}}
body[data-bp="md"] .deck{right:36px;bottom:16px}
.key-color{display:none}
body[data-bp="sm"] .deck{left:auto;right:12px;bottom:12px;width:max-content;margin:0;padding:5px;border-radius:999px}
body[data-bp="sm"] .deck-top,body[data-bp="sm"] .key.tool,body[data-bp="sm"] #undoBtn,body[data-bp="sm"] .key kbd{display:none}
body[data-bp="sm"] .keys{gap:5px}
body[data-bp="sm"] .key{flex:none;width:40px;height:40px;padding:0;gap:0;border-radius:999px}
body[data-bp="sm"] .key .klbl{display:none}
body[data-bp="sm"] .key svg{width:18px;height:18px}
body[data-bp="sm"] .key-color{display:grid;place-items:center}
body[data-bp="sm"] .key-color i{width:20px;height:20px;border-radius:50%;background:var(--next,#F0000F);box-shadow:inset 0 0 0 1.5px rgba(22,18,63,.25),0 0 0 2.5px #FFFFFF,0 0 0 4px #16123F;transition:background-color .3s,scale .25s cubic-bezier(.3,1.6,.5,1)}
body[data-bp="sm"] .key-color:active i{scale:.85}
body[data-bp="sm"] .key-remix{width:auto;flex-direction:row;gap:7px;padding:0 15px 0 12px}
body[data-bp="sm"] .key-remix .klbl{display:block;font-size:13px}
body[data-bp="sm"] .key-remix svg{width:18px;height:18px}
@media (hover:hover){
  [data-tip]:hover::after{content:attr(data-tip);position:absolute;left:50%;bottom:calc(100% + 12px);translate:-50% 0;z-index:5;background:#16123F;color:#fff;font:500 12.5px/1 var(--f-ui);padding:7px 9px;border-radius:7px;white-space:pre;pointer-events:none;box-shadow:0 0 0 1px rgba(255,255,255,.14)}
  .hero[data-tool="move"] .glyph:hover::before{content:"";position:absolute;inset:-6px;border:calc(1.5px / var(--s,1)) solid var(--sel);opacity:.55;pointer-events:none}
}

/* ---------- sticker sheet ---------- */
.tray{position:absolute;right:44px;bottom:172px;z-index:905;display:flex;gap:4px;padding:8px;background:#FFFFFF;border-radius:18px;box-shadow:0 0 0 1px rgba(22,18,63,.1),0 22px 40px -20px rgba(22,18,63,.5);transform-origin:70% 100%;animation:trayin .3s cubic-bezier(.2,1.5,.4,1)}
@keyframes trayin{from{opacity:0;scale:.8}to{opacity:1;scale:1}}
.tray[hidden]{display:none}
body[data-bp="md"] .tray{right:36px;bottom:164px}
body[data-bp="sm"] .tray{left:12px;right:12px;bottom:calc(var(--deck-h,130px) + 24px);justify-content:space-between}
.tray button{width:48px;height:48px;display:grid;place-items:center;padding:0;border:0;border-radius:12px;background:transparent;cursor:pointer}
.tray button:hover{background:#F1F1F5}
.tray button[aria-pressed="true"]{background:#F1F1F5;box-shadow:inset 0 0 0 2px #2E2EC4}
.tray svg{width:32px;height:32px;display:block}

/* ---------- toast ---------- */
.toast{position:absolute;right:44px;bottom:172px;z-index:950;max-width:calc(100% - 32px);background:#16123F;color:#fff;font:500 14px/1.3 var(--f-ui);padding:10px 14px;border-radius:12px;box-shadow:0 0 0 1px rgba(255,255,255,.12),0 16px 30px -14px rgba(22,18,63,.6);opacity:0;pointer-events:none;translate:0 10px;transition:opacity .25s,translate .25s}
.toast.show{opacity:1;translate:0 0}
.hero.tray-open .toast{bottom:246px}
body[data-bp="md"] .toast{right:36px;bottom:164px}
body[data-bp="md"] .hero.tray-open .toast{bottom:238px}
body[data-bp="sm"] .toast{right:auto;left:50%;bottom:calc(var(--deck-h,130px) + 24px);translate:-50% 10px;text-align:center;width:max-content;max-width:calc(100% - 40px)}
body[data-bp="sm"] .hero.tray-open .toast{bottom:calc(var(--deck-h,130px) + 102px)}
body[data-bp="sm"] .toast.show{translate:-50% 0}

/* ---------- colour flood + smart guides ---------- */
.rope{position:absolute;inset:0;z-index:2;width:100%;height:100%;overflow:visible;pointer-events:none}
/* opening: a dark canvas with the rest of the file, then zoom into this page */
.world{position:fixed;inset:0;z-index:0;overflow:hidden;background:#1D1C23;background-image:radial-gradient(rgba(255,255,255,.09) 1px,transparent 1.3px);background-size:24px 24px;pointer-events:none;transition:opacity .5s}
.world-in{position:absolute;left:50%;top:50%;width:0;height:0;transform-origin:0 0;will-change:transform}
.wf{position:absolute;border-radius:3px;background:#FFFFFF;box-shadow:0 18px 50px rgba(0,0,0,.4);opacity:0;transition:opacity .5s}
.wf.on{opacity:1}
.wf.slot{background:none;box-shadow:none;border:calc(2px * var(--inv,1)) solid transparent;transition:border-color .2s,opacity .3s}
.wf.slot.sel{border-color:#5B8CFF}
.wf.slot i{position:absolute;width:calc(9px * var(--inv,1));height:calc(9px * var(--inv,1));background:#FFFFFF;border:calc(1.5px * var(--inv,1)) solid #5B8CFF;opacity:0;transition:opacity .2s}
.wf.slot.sel i{opacity:1}
.wf.slot i:nth-child(1){left:calc(-5.5px * var(--inv,1));top:calc(-5.5px * var(--inv,1))}
.wf.slot i:nth-child(2){right:calc(-5.5px * var(--inv,1));top:calc(-5.5px * var(--inv,1))}
.wf.slot i:nth-child(3){left:calc(-5.5px * var(--inv,1));bottom:calc(-5.5px * var(--inv,1))}
.wf.slot i:nth-child(4){right:calc(-5.5px * var(--inv,1));bottom:calc(-5.5px * var(--inv,1))}
.wf-label{position:absolute;left:0;bottom:100%;margin-bottom:calc(7px * var(--inv,1));transform-origin:0 100%;scale:var(--inv,1);font:500 12px/1 var(--f-ui);color:#A5A4B4;white-space:nowrap;transition:color .2s}
.wf.slot.sel .wf-label{color:#8FB0FF}
.wf-dim{position:absolute;left:50%;top:100%;margin-top:calc(8px * var(--inv,1));transform-origin:0 0;translate:-50% 0;scale:var(--inv,1);padding:4px 7px;border-radius:4px;background:#5B8CFF;color:#FFFFFF;font:600 11px/1 var(--f-ui);white-space:nowrap;opacity:0;transition:opacity .2s}
.wf.slot.sel .wf-dim{opacity:1}
.sk{position:absolute;border-radius:6px;background:#EDEDF2}
.sk.c{background:var(--c)}
.hero.zooming{z-index:1;transform-origin:50% 50%;will-change:transform,opacity;transition:opacity .45s;box-shadow:0 18px 50px rgba(0,0,0,.45)}
.op-cursor{position:fixed;left:0;top:0;z-index:3000;pointer-events:none;transition:opacity .3s}
.op-cursor svg{display:block;width:22px;height:22px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.35));transition:scale .12s}
.op-cursor.press svg{scale:.8}
.op-cursor b{position:absolute;left:16px;top:18px;padding:4px 8px;border-radius:0 8px 8px 8px;background:#7D39FF;color:#FFFFFF;font:600 12px/1 var(--f-ui);white-space:nowrap}
.op-zoom{position:fixed;left:50%;bottom:20px;z-index:3000;translate:-50% 0;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;background:#2B2A33;color:#FFFFFF;font:600 12px/1 var(--f-mono);box-shadow:0 8px 20px rgba(0,0,0,.35);pointer-events:none;transition:opacity .35s}
.op-zoom span{color:#9D9CAB;font-family:var(--f-ui);font-weight:500}
.op-skip{position:fixed;right:20px;bottom:24px;z-index:3000;font:500 12px/1 var(--f-ui);color:#8C8B99;pointer-events:none;transition:opacity .35s}
body[data-bp="sm"] .op-skip{display:none}
.flood{position:absolute;inset:0;z-index:1;pointer-events:none;background-image:linear-gradient(var(--g) 1px,transparent 1px),linear-gradient(90deg,var(--g) 1px,transparent 1px);background-size:var(--grid-s,80px) var(--grid-s,80px);background-position:var(--grid-x,0px) var(--grid-y,0px);clip-path:circle(0 at var(--x) var(--y));transition:clip-path .75s cubic-bezier(.55,0,.2,1)}
.flood.go{clip-path:circle(150% at var(--x) var(--y))}
.guide{position:absolute;left:0;top:0;z-index:860;pointer-events:none;background:var(--guide,#FF2E93);display:none}
.guide.v{width:1px}
.guide.h{height:1px}
.guide.on{display:block}
.guide::before,.guide::after{content:"";position:absolute;width:5px;height:5px;border-radius:50%;background:inherit}
.guide.v::before{left:-2px;top:-2px}.guide.v::after{left:-2px;bottom:-2px}
.guide.h::before{top:-2px;left:-2px}.guide.h::after{top:-2px;right:-2px}

@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important}}
</style>
</head>
<body data-bp="lg">
<main class="hero" id="hero" data-tool="move">
  <h1 class="sr-only">Srishti, product designer in New Delhi</h1>
  <svg class="rope" id="rope" aria-hidden="true"><defs><pattern id="pageGrid" width="80" height="80" patternUnits="userSpaceOnUse"><rect id="pageBg" width="80" height="80" fill="#FFFFFF"/><path id="pageLines" d="M.5 0V80M0 .5H80" stroke="rgba(0,0,0,.04)" stroke-width="1"/></pattern></defs><path id="ropeFill" fill="url(#pageGrid)"/><path id="ropeLine" fill="none" stroke="#A3A2AC" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <p class="sr-only">I design for mobile and enterprise web, making complicated things simple, from research all the way to handoff. Currently at iBE.net, previously at vThink Technologies. Open to thoughtful projects.</p>

  <div class="wordmark" id="wordmark" role="group" aria-label="Srishti, written one letter at a time. Press Enter on a letter to change its typeface, or drag it."></div>

  <div class="gframe off" id="gframe" aria-hidden="true">
    <b class="gf-name">my name is</b>
    <i class="hd" data-h="tl"></i><i class="hd" data-h="tr"></i><i class="hd" data-h="bl"></i><i class="hd" data-h="br"></i>
    <i class="hd" data-h="tm"></i><i class="hd" data-h="bm"></i><i class="hd" data-h="ml"></i><i class="hd" data-h="mr"></i>
    <b class="gf-dim" id="gfDim"></b>
  </div>

  <div id="stickers"></div>

  <div class="lanyard pre" id="lanyard" aria-hidden="true">
    <div class="swing" id="swing">
      <div class="strap"><span>srishti &nbsp; srishti &nbsp; srishti</span></div>
      <div class="clip"></div>
      <div class="idcard" id="idcard" title="Click to flip, drag to swing">
        <div class="flip">
          <div class="face front">
            <div class="id-in">
              <div class="id-top"><span class="id-org"><i></i>iBE.net</span><span class="id-yr">2026</span></div>
              <div class="id-photo"><img src="data:image/jpeg;base64,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" alt="" draggable="false"><svg viewBox="0 0 100 100"><path d="M50 2C54 38 62 46 98 50C62 54 54 62 50 98C46 62 38 54 2 50C38 46 46 38 50 2Z"/></svg></div>
              <div class="id-sign">Srishti</div>
              <div class="id-role">PRODUCT<br>DESIGNER</div>
              <div class="id-meta">New Delhi, India</div>
              <span id="barcode"></span>
            </div>
          </div>
          <div class="face back">
            <div class="id-in">
              <div class="id-bt">GOOD AT</div>
              <ul class="id-list"><li>Interaction design</li><li>Prototyping</li><li>User research</li><li>Visual design</li></ul>
              <div class="id-prev"><b>Previously</b>vThink Technologies</div>
              <div class="id-hint">Click to flip back</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="todo pre" id="todo" data-ui>
    <h2>to-do</h2>
    <ul>
      <li class="done"><span class="box"><svg viewBox="0 0 24 22" aria-hidden="true"><path class="tick" d="M3 11l6 7L22 2"/></svg></span><span>design this site</span></li>
      <li class="done"><span class="box"><svg viewBox="0 0 24 22" aria-hidden="true"><path class="tick" d="M3 11l6 7L22 2"/></svg></span><span>coffee, 3rd cup</span></li>
      <li id="todoLast"><button type="button" id="todoBtn"><span class="box"><svg viewBox="0 0 24 22" aria-hidden="true"><path class="tick" d="M3 11l6 7L22 2"/></svg></span><span>work with you</span></button><a class="go" id="todoGo" href="/contact" target="_top">let’s talk →</a></li>
    </ul>
  </div>
  <time class="clock-top" id="clockTop" aria-hidden="true"></time>
  <div class="labels pre" id="skills" role="group" aria-label="What I do" data-ui>
    <div class="lrows">
      <div class="lrow"><button class="tape t1" type="button" aria-label="User Research"><span class="tape-rev"><span class="tape-body" aria-hidden="true"><i>U</i><i>S</i><i>E</i><i>R</i><i class="sp"></i><i>R</i><i>E</i><i>S</i><i>E</i><i>A</i><i>R</i><i>C</i><i>H</i></span></span><em class="note" aria-hidden="true">ask first</em></button><button class="tape t2" type="button" aria-label="UI / UX Design"><span class="tape-rev"><span class="tape-body" aria-hidden="true"><i>U</i><i>I</i><i class="sp"></i><i>/</i><i class="sp"></i><i>U</i><i>X</i><i class="sp"></i><i>D</i><i>E</i><i>S</i><i>I</i><i>G</i><i>N</i></span></span><em class="note" aria-hidden="true">flows &amp; pixels</em></button></div>
      <div class="lrow r2"><button class="tape t3" type="button" aria-label="Interaction Design"><span class="tape-rev"><span class="tape-body" aria-hidden="true"><i>I</i><i>N</i><i>T</i><i>E</i><i>R</i><i>A</i><i>C</i><i>T</i><i>I</i><i>O</i><i>N</i><i class="sp"></i><i>D</i><i>E</i><i>S</i><i>I</i><i>G</i><i>N</i></span></span><em class="note" aria-hidden="true">feels right</em></button><button class="tape t4" type="button" aria-label="Prototyping"><span class="tape-rev"><span class="tape-body" aria-hidden="true"><i>P</i><i>R</i><i>O</i><i>T</i><i>O</i><i>T</i><i>Y</i><i>P</i><i>I</i><i>N</i><i>G</i></span></span><em class="note" aria-hidden="true">click it, test it</em></button></div>
    </div>
  </div>
  <a class="resume-btn pre" id="resumeBtn" href="/resume" target="_blank" rel="noopener" data-ui aria-label="My resume, opens the PDF">
    <span class="rb-in">
      <svg class="rb-clip" viewBox="0 0 16 34" aria-hidden="true"><path d="M5 30V7.5a3.5 3.5 0 0 1 7 0V26a5.5 5.5 0 0 1-11 0V11"/></svg>
      <span class="rb-page" aria-hidden="true"><span class="rb-pdf">PDF</span><span class="rb-t">resume</span><span class="rb-dl"><svg viewBox="0 0 24 24"><path d="M12 4v12M6.5 11l5.5 5.5 5.5-5.5M5 20h14"/></svg></span></span>
      <span class="rb-note" aria-hidden="true">one page, no fluff</span>
    </span>
  </a>
  <a class="status pre" id="statusLine" href="/contact" target="_top" data-ui aria-label="Available for thoughtful projects, full-time roles, contract work and hard design problems. Contact Srishti."><i class="live" aria-hidden="true"></i><span aria-hidden="true">Available for</span><span class="st-rot" id="stRot" aria-hidden="true"><i class="st-hl"></i><span class="st-t" id="stT">thoughtful projects</span></span><svg class="st-go" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg></a>

  <div id="notes"></div>
  <div id="cursors"></div>

  <div class="tray" id="tray" data-ui role="group" aria-label="Pick a sticker, then click anywhere to stamp it" hidden></div>

  <div class="deck" id="dock" data-ui role="toolbar" aria-label="Play with the hero">
    <div class="deck-top">
      <p class="deck-cap" id="dockHint">Click a letter to restyle it</p>
      <button class="deck-q" id="keysBtn" type="button" aria-label="Keyboard shortcuts" aria-expanded="false" aria-controls="keysCard">?</button>
      <div class="swatches" id="swatches" role="radiogroup" aria-label="Background colour"></div>
    </div>
    <div class="keys">
      <button class="key tool" type="button" data-tool="sticker" data-key="s" aria-pressed="false" aria-label="Stickers"><i class="led" aria-hidden="true"></i><kbd aria-hidden="true">S</kbd><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8z"/><path d="M14 20v-4a2 2 0 0 1 2-2h4"/><path d="M8.6 13c.9.8 1.9 1.1 3 1.1"/><path d="M9 9.2h.01M14.5 9.2h.01" stroke-width="2.6"/></svg><span class="klbl">Stickers</span></button>
      <button class="key tool" type="button" data-tool="comment" data-key="c" aria-pressed="false" aria-label="Leave a note"><i class="led" aria-hidden="true"></i><kbd aria-hidden="true">C</kbd><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V11a7 7 0 0 1 7-7h2a7 7 0 0 1 0 14H8z"/></svg><span class="klbl">Note</span></button>
      <button class="key key-color" id="colorBtn" type="button" aria-label="Change the colour"><i aria-hidden="true"></i></button>
      <button class="key key-remix" id="remixBtn" type="button" data-key="r" aria-label="Remix every letter"><kbd aria-hidden="true">R</kbd><svg class="dice" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><g fill="currentColor" stroke="none"><circle cx="8.6" cy="8.6" r="1.45"/><circle cx="15.4" cy="8.6" r="1.45"/><circle cx="12" cy="12" r="1.45"/><circle cx="8.6" cy="15.4" r="1.45"/><circle cx="15.4" cy="15.4" r="1.45"/></g></svg><span class="klbl">Remix</span></button>
      <button class="key" id="tidyBtn" type="button" data-key="a" aria-label="Tidy up: reset everything to the start"><kbd aria-hidden="true">⇧A</kbd><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg><span class="klbl">Tidy</span></button>
      <button class="key" id="undoBtn" type="button" data-key="z" aria-label="Undo"><kbd aria-hidden="true" id="undoKbd">⌘Z</kbd><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg><span class="klbl">Undo</span></button>
    </div>
  </div>

  <i class="guide v" id="guideV" aria-hidden="true"></i><i class="guide h" id="guideH" aria-hidden="true"></i>

  <div class="keys-card" id="keysCard" data-ui role="dialog" aria-label="Keyboard shortcuts" hidden>
    <h2>Shortcuts</h2>
    <dl>
      <dt><kbd>R</kbd></dt><dd>Remix the letters</dd>
      <dt><kbd>T</kbd></dt><dd>Next colour</dd>
      <dt><kbd>S</kbd></dt><dd>Stamp stickers</dd>
      <dt><kbd>C</kbd></dt><dd>Leave a note</dd>
      <dt><kbd>⇧</kbd><kbd>A</kbd></dt><dd>Tidy up: start fresh, everything back to the beginning</dd>
      <dt><kbd id="kbdUndo">⌘</kbd><kbd>Z</kbd></dt><dd>Undo (add ⇧ to redo)</dd>
      <dt><kbd>←</kbd><kbd>→</kbd></dt><dd>Nudge what’s selected</dd>
      <dt><kbd>Del</kbd></dt><dd>Delete what’s selected</dd>
      <dt><kbd>Esc</kbd></dt><dd>Close or deselect</dd>
    </dl>
  </div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
</main>

<script>
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const rand = (a, b) => a + Math.random() * (b - a);
const randi = n => Math.floor(Math.random() * n);
const pick = a => a[randi(a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TOUCH = matchMedia('(hover: none)').matches;
const MAC = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
const MOD = MAC ? '⌘' : 'Ctrl+';
const CFG = Object.assign({contactUrl:'/contact', stakeholders:true, narrate:true, siteCursor:true}, window.HERO_CONFIG || {});

/* ---------------- the website's own cursor ----------------
   This hero runs in its own frame, and a frame keeps mouse movement to itself, so a custom cursor on the
   website freezes at the hero's edge. Here every move, press and release is passed on to the website
   (with the coordinates shifted into the website's space), so its cursor keeps following along.
   With siteCursor on, the normal arrow is hidden here too, so only the website's cursor shows. */
(function shareThePointer() {
  let host = null, frame = null;
  try { if (window.parent !== window) { host = window.parent; frame = window.frameElement; host.document; } } catch (e) { host = null; }
  if (!host) return;
  // only on computers with a mouse; phones and tablets are left completely alone
  const mouseDevice = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!mouseDevice) return;
  if (CFG.siteCursor) {
    const st = document.createElement('style');
    st.textContent = 'body:not([data-bp="sm"]),body:not([data-bp="sm"]) *,body:not([data-bp="sm"]) *::before,body:not([data-bp="sm"]) *::after{cursor:none !important}';
    document.head.appendChild(st);
  }
  const target = () => frame || host.document;
  const send = (type, e) => {
    try {
      const r = frame ? frame.getBoundingClientRect() : {left: 0, top: 0, width: innerWidth};
      const k = r.width ? r.width / innerWidth : 1;                     // the frame may be scaled on the page
      const init = {bubbles: true, cancelable: true, composed: true, view: host, clientX: r.left + e.clientX * k, clientY: r.top + e.clientY * k,
        screenX: e.screenX, screenY: e.screenY, button: e.button, buttons: e.buttons, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey};
      target().dispatchEvent(new host.MouseEvent(type, init));
      if (host.PointerEvent) target().dispatchEvent(new host.PointerEvent(type.replace('mouse', 'pointer'), Object.assign({pointerId: 1, pointerType: 'mouse', isPrimary: true}, init)));
    } catch (err) {}
  };
  const pass = type => e => { if (e.pointerType && e.pointerType !== 'mouse') return; send(type, e); };
  document.addEventListener('mousemove', pass('mousemove'), {passive: true, capture: true});
  document.addEventListener('mousedown', pass('mousedown'), {passive: true, capture: true});
  document.addEventListener('mouseup', pass('mouseup'), {passive: true, capture: true});
  document.addEventListener('mouseover', pass('mouseover'), {passive: true, capture: true});
})();
const AVATAR = 'data:image/jpeg;base64,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';

const stage = $('#hero'), wordmark = $('#wordmark'), gframe = $('#gframe'), gfDim = $('#gfDim');
const stickerLayer = $('#stickers'), notesLayer = $('#notes'), cursorLayer = $('#cursors');
const toastEl = $('#toast'), tray = $('#tray'), dock = $('#dock'), dockHint = $('#dockHint');
const touchy = () => bp === 'sm' || matchMedia('(hover: none)').matches;
const OWN_GRID = CFG.ownGrid !== false;
const WANT_OWN_GRID_OFF = !OWN_GRID;
let ownGridOffActive = false;

/* ---------------- data ---------------- */
const FONTS = [
  {n:'Bagel Fat One', s:1},
  {n:'Archivo Black', s:.98},
  {n:'Instrument Serif', s:1.45, low:.4},
  {n:'Instrument Serif', i:1, s:1.4, low:.7, label:'Instrument Serif Italic'},
  {n:'Anton', s:1.25},
  {n:'Silkscreen', w:700, s:.86},
  {n:'Rubik Mono One', s:.84},
  {n:'Unbounded', w:900, s:.86},
  {n:'Fraunces', w:900, i:1, s:1.02, low:.3, label:'Fraunces Black Italic'},
  {n:'Bungee Shade', s:.9, thin:1},
  {n:'Climate Crisis', s:.8},
  {n:'DM Serif Display', i:1, s:1.12, low:.6, label:'DM Serif Display Italic'},
  {n:'Monoton', s:.92, thin:1},
  {n:'Rampart One', s:.98, thin:1},
  {n:'Rubik Glitch', s:.96},
  {n:'Rubik Wet Paint', s:.96},
  {n:'Pixelify Sans', w:700, s:1.02},
  {n:'Sixtyfour', s:.74},
  {n:'Tilt Warp', s:1},
  {n:'Zilla Slab Highlight', w:700, s:1.04, thin:1},
  {n:'Barrio', s:1.04},
  {n:'Syne', w:800, s:1.02, low:.2}
];
const fname = f => f.label || f.n;
const fontIdx = n => FONTS.findIndex(f => fname(f) === n);

// palette slots: 0 light accent, 1 box/second colour, 2 cool, 3 hot, 4 ink. Every slot reads on its own background.
const BASE = {btnBg:'#2E2EC4', btnFg:'#FFFFFF', dockBg:'#16123F', dockFg:'#FFFFFF', card:'#FFFFFF', cardFg:'#16123F', cardMuted:'#5B5875', cardLine:'rgba(22,18,63,.12)'};
const THEMES = [
  {...BASE, id:'kagaz', tee:'#00C8F6', shoe:'#FF5B2E', guide:'#FF2E93', name:'Kagaz', note:'white paper', bg:'#FFFFFF', grid:'#F5F5F5', ink:'#16123F', muted:'#4A4766',
   sel:'#2F4BFF', selFg:'#FFFFFF', chip:'#2E2EC4', tagBg:'#2E2EC4', tagFg:'#FFFFFF', spark:'#D4F04A',
   p:['#D4F04A','#FF5A26','#2E2EC4','#D5157F','#16123F']},
  {...BASE, id:'lal', tee:'#FFCD00', shoe:'#16123F', guide:'#FFFFFF', name:'Lal', note:'#F0000F', bg:'#F0000F', grid:'rgba(255,255,255,.14)', ink:'#FFFFFF', muted:'#FFE3E5',
   sel:'#FFFFFF', selFg:'#C4000C', chip:'#FFFFFF', tagBg:'#16123F', tagFg:'#FFFFFF', spark:'#FFE45C',
   p:['#D4F04A','#FFFFFF','#FFE45C','#FFB3C7','#16123F']},
  {...BASE, id:'baingan', tee:'#D4F04A', shoe:'#FFCD00', guide:'#FFE45C', name:'Baingan', note:'#7D39FF', bg:'#7D39FF', grid:'rgba(255,255,255,.14)', ink:'#FFFFFF', muted:'#EDE3FF',
   sel:'#D4F04A', selFg:'#16123F', chip:'#D4F04A', tagBg:'#D4F04A', tagFg:'#16123F', spark:'#7D39FF',
   p:['#D4F04A','#FF9A3C','#FFFFFF','#FFB3E6','#16123F']},
  {...BASE, id:'pudina', tee:'#7D39FF', shoe:'#FFCD00', guide:'#16123F', name:'Pudina', note:'#00D07A', bg:'#00D07A', grid:'rgba(22,18,63,.08)', ink:'#16123F', muted:'#0B3B24',
   sel:'#16123F', selFg:'#FFFFFF', chip:'#16123F', tagBg:'#16123F', tagFg:'#FFFFFF', spark:'#D4F04A',
   p:['#FFFFFF','#FF5A26','#2E2EC4','#D5157F','#16123F']},
  {...BASE, id:'santra', tee:'#0346D4', shoe:'#FFFFFF', guide:'#16123F', name:'Santra', note:'#FF861D', bg:'#FF861D', grid:'rgba(22,18,63,.08)', ink:'#16123F', muted:'#3A1A00',
   sel:'#16123F', selFg:'#FFFFFF', chip:'#16123F', tagBg:'#16123F', tagFg:'#FFFFFF', spark:'#FF861D',
   p:['#7D39FF','#FFFFFF','#2E2EC4','#D5157F','#16123F']},
  {...BASE, id:'haldi', tee:'#F0000F', shoe:'#16123F', guide:'#FF2E93', name:'Haldi', note:'#FFCD00', bg:'#FFCD00', grid:'rgba(22,18,63,.08)', ink:'#16123F', muted:'#3A2E00',
   sel:'#2E2EC4', selFg:'#FFFFFF', chip:'#2E2EC4', tagBg:'#16123F', tagFg:'#FFFFFF', spark:'#FFCD00',
   p:['#7D39FF','#FF5A26','#2E2EC4','#D5157F','#16123F']},
  {...BASE, id:'gulab', tee:'#FFFFFF', shoe:'#0346D4', guide:'#16123F', name:'Gulab', note:'#FF777C', bg:'#FF777C', grid:'rgba(22,18,63,.08)', ink:'#16123F', muted:'#3A0F12',
   sel:'#2E2EC4', selFg:'#FFFFFF', chip:'#2E2EC4', tagBg:'#16123F', tagFg:'#FFFFFF', spark:'#FF777C',
   p:['#FFFFFF','#FFE45C','#2E2EC4','#8A0F52','#16123F']},
  {...BASE, id:'neel', tee:'#FF861D', shoe:'#FFFFFF', guide:'#FFE45C', name:'Neel', note:'#0346D4', bg:'#0346D4', grid:'rgba(255,255,255,.14)', ink:'#FFFFFF', muted:'#DCE6FF',
   sel:'#D4F04A', selFg:'#16123F', chip:'#FFFFFF', tagBg:'#D4F04A', tagFg:'#16123F', spark:'#0346D4',
   p:['#D4F04A','#16123F','#FFCD00','#FF777C','#FFFFFF']}
];

const CHARS = [...'SRISHTI'];
const INIT = [
  {f:'Bagel Fat One', v:'plain', ink:0, paper:1, blk:4, rot:-5, size:1.28, lift:.05},
  {f:'Archivo Black', v:'block', ink:4, paper:1, blk:4, rot:-4, size:1.05, lift:-.03},
  {f:'Instrument Serif', v:'plain', ink:4, paper:0, blk:4, rot:0, size:1.3, lift:-.02},
  {f:'Rubik Mono One', v:'plain', ink:2, paper:0, blk:4, rot:0, size:.82, lift:.08},
  {f:'Silkscreen', v:'plain', ink:1, paper:0, blk:4, rot:6, size:.95, lift:-.08},
  {f:'Anton', v:'plain', ink:3, paper:0, blk:4, rot:3, size:1.22, lift:.02},
  {f:'Unbounded', v:'block', ink:0, paper:1, blk:4, rot:4, size:.98, lift:-.02}
];

/* sticker art, all drawn here */
const SPARK = 'M50 2C54 38 62 46 98 50C62 54 54 62 50 98C46 62 38 54 2 50C38 46 46 38 50 2Z';
const starPath = (n, R, r) => { let d = ''; for (let i = 0; i < n * 2; i++) { const a = Math.PI * i / n - Math.PI / 2, rr = i % 2 ? r : R; d += (i ? 'L' : 'M') + (50 + Math.cos(a) * rr).toFixed(1) + ' ' + (50 + Math.sin(a) * rr).toFixed(1); } return d + 'Z'; };
function marigoldSVG(w) {
  let s = \`<svg viewBox="-50 -50 100 100" width="\${w}" height="\${w}" aria-hidden="true">\`;
  const ring = (n, R, r, fill, off) => { for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + off; s += \`<circle cx="\${(Math.cos(a) * R).toFixed(1)}" cy="\${(Math.sin(a) * R).toFixed(1)}" r="\${r}" fill="\${fill}" stroke="#B94A00" stroke-width="1.2"/>\`; } };
  ring(15, 35, 13, '#F57C00', 0); ring(12, 24, 11, '#FF9A1A', .2); ring(8, 12, 9, '#FFB33B', .4);
  return s + '<circle r="8" fill="#D35400" stroke="#8A3200" stroke-width="1.2"/></svg>';
}
const catSVG = (w = 134) => \`<svg viewBox="0 0 140 122" width="\${w}" aria-hidden="true"><path d="M18 60L24 9Q25 4 30 6L64 30Z" fill="#FF6A2C"/><path d="M122 60L116 9Q115 4 110 6L76 30Z" fill="#FF6A2C"/><path d="M27 45L31 18L52 32Z" fill="#FFB3C4"/><path d="M113 45L109 18L88 32Z" fill="#FFB3C4"/><path d="M8 76C8 44 36 26 70 26S132 44 132 76C132 104 106 118 70 118S8 104 8 76Z" fill="#FF6A2C"/><path d="M62 34l2 12M70 32v13M78 34l-2 12" stroke="#D9480F" stroke-width="3.5" stroke-linecap="round"/><g class="eyes-closed" fill="none" stroke="#2A1200" stroke-width="4.5" stroke-linecap="round"><path d="M38 73Q47 63 56 73"/><path d="M84 73Q93 63 102 73"/></g><g class="eyes-open"><g class="pup"><circle cx="47" cy="70" r="7.5" fill="#2A1200"/><circle cx="49.6" cy="67.2" r="2.4" fill="#fff"/><circle cx="93" cy="70" r="7.5" fill="#2A1200"/><circle cx="95.6" cy="67.2" r="2.4" fill="#fff"/></g></g><ellipse cx="35" cy="87" rx="9" ry="5.5" fill="#FF9DB5"/><ellipse cx="105" cy="87" rx="9" ry="5.5" fill="#FF9DB5"/><path d="M66 80h8l-4 4.5z" fill="#FF8FAB" stroke="#2A1200" stroke-width="1.5" stroke-linejoin="round"/><path d="M61 89q4.5 5 9 0q4.5 5 9 0" fill="none" stroke="#2A1200" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 81l22 2M6 95l20-5M136 81l-22 2M134 95l-20-5" stroke="#2A1200" stroke-width="2.6" stroke-linecap="round"/></svg>\`;
const coffeeSVG = (w = 88) => \`<svg viewBox="0 0 100 132" width="\${w}" aria-hidden="true"><g class="steam" fill="none" stroke="#B7A6F2" stroke-width="5" stroke-linecap="round"><path d="M40 22c-6-6 6-10 0-18"/><path d="M60 22c-6-6 6-10 0-18"/></g><path d="M22 36Q22 27 31 27H69Q78 27 78 36V41H22Z" fill="#2B1B14"/><rect x="41" y="29.5" width="18" height="4" rx="2" fill="#5A3A2A"/><rect x="12" y="39" width="76" height="11" rx="5.5" fill="#3A261C"/><path d="M16 50H84L76 124Q75.5 128 71 128H29Q24.5 128 24 124Z" fill="#FBF7F0"/><path d="M18.3 70H81.7L78.1 103H21.9Z" fill="#B7793F"/><text x="50" y="93" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="22" fill="#FFF3E2">coffee</text><path d="M16 50H84L76 124Q75.5 128 71 128H29Q24.5 128 24 124Z" fill="none" stroke="#2B1B14" stroke-width="2.4" stroke-linejoin="round"/></svg>\`;
const META = {
  uiux: {label:'skills', art:() => '<div class="chips"><span class="chip ch1">UI / UX Design</span><span class="chip ch2">Interaction Design</span><span class="chip ch3">Prototyping</span><span class="chip ch4">User Research</span></div>'},
  year: {label:'badge 2026', art:() => '<div class="yearpill">2026</div>'},
  cat: {label:'billi.png', svg:1, art:catSVG},
  tape: {label:'label.tape', art:() => ''},
  coffee: {label:'coffee-final-v2.svg', svg:1, art:coffeeSVG},
  marigold: {label:'genda-phool.svg', svg:1, art:(w = 84) => marigoldSVG(w)},
  sparkle: {label:'sparkle.svg', svg:1, art:(w = 66) => \`<svg viewBox="0 0 100 100" width="\${w}" aria-hidden="true"><path d="\${SPARK}" fill="#2E2EC4"/></svg>\`},
  sun: {label:'sun.svg', svg:1, art:(w = 84) => \`<svg viewBox="0 0 100 100" width="\${w}" aria-hidden="true"><path d="\${starPath(14, 48, 32)}" fill="#D4F04A" stroke="#16123F" stroke-width="2.5" stroke-linejoin="round"/><circle cx="50" cy="50" r="16" fill="#FF5A26" stroke="#16123F" stroke-width="2.5"/></svg>\`},
  heart: {label:'heart.svg', svg:1, art:(w = 64) => \`<svg viewBox="0 0 100 92" width="\${w}" aria-hidden="true"><path d="M50 88C20 66 6 50 6 32 6 18 17 8 30 8c10 0 16 6 20 14 4-8 10-14 20-14 13 0 24 10 24 24 0 18-14 34-44 56z" fill="#D5157F"/></svg>\`},
  wow: {label:'wow (final).svg', svg:1, art:(w = 92) => \`<svg viewBox="0 0 100 100" width="\${w}" aria-hidden="true"><path d="\${starPath(20, 49, 41)}" fill="#FF5A26"/><text x="50" y="59" text-anchor="middle" font-family="Instrument Sans, system-ui, sans-serif" font-weight="700" font-size="27" fill="#fff">wow</text></svg>\`}
};
const STAMPS = ['sparkle','sun','heart','wow','marigold','coffee'];
const STAMP_NAMES = {sparkle:'Sparkle', sun:'Sun', heart:'Heart', wow:'Wow', marigold:'Marigold', coffee:'Coffee'};

const PRE = [
  {id:'cat', kind:'cat', rot:-8, pos:{lg:[.09,.45], md:[.08,.47], tp:[.12,.67], sh:[.06,.2], sm:[.14,.1]}},
  {id:'year', kind:'year', rot:-8, pos:{lg:[.14,.66], md:[.12,.66], tp:[.87,.66], sh:null, sm:null}},
  {id:'coffee', kind:'coffee', rot:6, pos:{lg:[.34,.19], md:[.34,.2], tp:[.37,.2], sh:[.93,.16], sm:[.88,.1]}}
];
const PRE_POS = Object.fromEntries(PRE.map(p => [p.id, p.pos]));
const BPS = {lg:1, md:.82, sm:.68};

const BOTS = [
  {id:'client', name:'Client', c:'#C9361A', lines:['can the name be bigger?','love it. can it pop more?','what if it was more… blue?','my nephew does websites too','I’ll know it when I see it','can we see three more options?']},
  {id:'dev', name:'Dev', c:'#0B7A41', lines:['is this in the design system?','what’s the hover state?','that’s three sprints, minimum','works on my machine','which font is this? all of them?','are these tokens or vibes?','ship it friday?']}
];
const NUDGE = {client:['just moving this a bit','better, right?','small tweak, trust me'], dev:['fixed it (I think)','off by one pixel. fixed']};
const FLEE = ['ok ok, I’m going','didn’t touch anything','just looking!','you’re fast'];
const REJOIN = ['I’m back. I have notes','did I miss anything?','sorry, wrong tab'];
const REACT = {
  remix:[['client','go back to the first one'],['dev','that’s a lot of font files'],['client','can we try it in Comic Sans?'],['dev','roll again, I dare you']],
  theme:[['client','can we try it in blue?'],['dev','is there a token for this?'],['client','ooh, that one']],
  lal:[['dev','is this an error state?'],['client','love the energy!']],
  tidy:[['dev','finally, auto layout'],['client','clean. very enterprise']],
  del:[['client','wait, where did the {c} go?'],['dev','fewer letters, faster load']],
  stamp:[['client','can we add more stickers?'],['dev','is that a component?']],
  todo:[['client','finally, someone reads the brief'],['dev','ship it']],
  note:[['dev','can you put that in Jira?'],['client','noted!']],
  restyle:[['client','ooh, that one'],['dev','another font?']],
  cat:[['dev','a cat? in production?'],['client','can the cat be bigger?']],
  snap:[['dev','pixel perfect. respect']]
};

/* Srishti's cursor narration: each line points at something on the canvas */
const timeFmt = new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Kolkata', hour:'numeric', minute:'2-digit', hour12:true});
const LINES = [
  {at:'home', t:'hey, i am srishti'},
  {at:'home', t:'product designer in new delhi'},
  {at:'home', t:'i design for mobile & enterprise web'},
  {at:'home', t:'making complicated things simple'},
  {at:'chips', t:'the stuff i do all day'},
  {at:'home', t:'from research all the way to handoff'},
  {at:'id', t:'currently at iBE.net'},
  {at:'id', t:'previously at vThink Technologies'},
  {at:'home', t:() => \`it’s \${timeFmt.format(new Date()).toLowerCase()} here in delhi\`},
  {at:'coffee', t:'coffee first, then pixels'},
  {at:'cat', t:'i also like cats'},
  {at:'status', t:'and yes, i’m available'}
];
const lineOf = at => LINES.findIndex(l => l.at === at);

/* ---------------- state ---------------- */
let uid = 0, zTop = 60, tool = 'move', stampKind = 'sparkle', bp = 'lg', tall = false, narrow = false, short = false;
const S = {theme:0, wm:1, letters:[], stickers:[], notes:[]};
const glyphs = [], stickerEls = new Map(), wob = new Map();
let dragKey = null, restyles = 0, downTarget = null, homeBox = null;

CHARS.forEach((c, i) => {
  const d = INIT[i];
  S.letters.push({c, font:fontIdx(d.f), low:false, v:d.v, ink:d.ink, paper:d.paper, blk:d.blk, rot:d.rot, size:d.size, lift:d.lift, dx:0, dy:0, s:1, z:20 + i, hidden:false});
  const g = document.createElement('button');
  g.type = 'button'; g.className = 'glyph pre';
  g.innerHTML = '<span class="ch"></span>';
  wordmark.appendChild(g); glyphs.push(g);
});
PRE.forEach((p, k) => S.stickers.push({id:p.id, kind:p.kind, pre:true, x:0, y:0, dx:0, dy:0, rot:p.rot, s:1, z:40 + k}));

/* ---------------- theme ---------------- */
const swatchEls = THEMES.map((T, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'sw'; b.setAttribute('role', 'radio');
  b.style.setProperty('--c', T.bg);
  b.setAttribute('aria-label', \`\${T.name}, \${T.bg}\`);
  b.addEventListener('click', () => setTheme(i, swatchOrigin(i)));
  b.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + THEMES.length) % THEMES.length; setTheme(n, swatchOrigin(n)); swatchEls[n].focus(); }
  });
  $('#swatches').appendChild(b);
  return b;
});
function swatchOrigin(i) { const sr = stage.getBoundingClientRect(), r = swatchEls[i].getBoundingClientRect(); return {x:r.left + r.width / 2 - sr.left, y:r.top + r.height / 2 - sr.top}; }
let hostGridColor = null;   // the website's grid line colour, when it can be read
// Coloured themes paint the hero down to the wavy line (white under it), even with Own Grid off.
// The white theme stays see-through so the website's grid shows.
function setCanvas(T) {
  const tint = ownGridOffActive && T.id !== 'kagaz';
  if (ownGridOffActive) {
    stage.classList.toggle('own-grid-off', !tint);
    const pb = $('#pageBg'), pl = $('#pageLines'), rf = $('#ropeFill');
    if (pb) pb.setAttribute('fill', tint ? (CFG.pageColor || '#FFFFFF') : 'transparent');
    if (pl) pl.setAttribute('stroke', tint ? 'rgba(0,0,0,.04)' : 'transparent');
    if (rf) rf.setAttribute('fill', tint ? 'url(#pageGrid)' : 'none');
    if (!tint) {
      stage.style.setProperty('--canvas', 'transparent');
      stage.style.setProperty('--canvas-grid', 'transparent');
      return;
    }
  }
  stage.style.setProperty('--canvas', T.bg);
  stage.style.setProperty('--canvas-grid', T.grid);
}
function setCanvasOld(T) {
  if (ownGridOffActive) {
    stage.style.setProperty('--canvas', 'transparent');
    stage.style.setProperty('--canvas-grid', 'transparent');
    return;
  }
  stage.style.setProperty('--canvas', T.bg);
  stage.style.setProperty('--canvas-grid', T.id === 'kagaz' && hostGridColor ? hostGridColor : T.grid);
}
function applyTheme(keepCanvas) {
  const T = THEMES[S.theme], st = document.documentElement.style;
  const map = {'--bg':T.bg, '--grid':T.grid, '--ink':T.ink, '--muted':T.muted, '--sel':T.sel, '--sel-fg':T.selFg, '--chip':T.chip, '--tag-bg':T.tagBg, '--tag-fg':T.tagFg, '--spark':T.spark, '--btn-bg':T.btnBg, '--btn-fg':T.btnFg, '--dock-bg':T.dockBg, '--dock-fg':T.dockFg, '--card':T.card, '--card-fg':T.cardFg, '--card-muted':T.cardMuted, '--card-line':T.cardLine, '--guide':T.guide, '--tee':T.tee, '--shoe':T.shoe};
  for (const k in map) st.setProperty(k, map[k]);
  if (!keepCanvas) setCanvas(T);
  swatchEls.forEach((b, i) => { b.setAttribute('aria-checked', String(i === S.theme)); b.tabIndex = i === S.theme ? 0 : -1; });
  if (typeof colorBtn !== 'undefined') syncColorBtn();
}

/* ---------------- letters ---------------- */
let frameDirty = true, frameUntil = 0;
const touchFrame = (ms = 0) => { frameDirty = true; frameUntil = Math.max(frameUntil, performance.now() + ms); };
function renderGlyph(i) {
  const L = S.letters[i], g = glyphs[i], f = FONTS[L.font], P = THEMES[S.theme].p, ch = g.firstElementChild;
  ch.textContent = L.low ? L.c.toLowerCase() : L.c;
  ch.style.fontFamily = \`'\${f.n}', 'Archivo Black', sans-serif\`;
  ch.style.fontWeight = f.w || 400;
  ch.style.fontStyle = f.i ? 'italic' : 'normal';
  ch.style.fontSize = (f.s * L.size * (L.low ? 1.1 : 1)).toFixed(3) + 'em';
  ch.style.transform = \`translateY(\${L.lift.toFixed(3)}em)\`;
  g.dataset.v = L.v;
  g.style.setProperty('--ink-c', P[L.ink]);
  g.style.setProperty('--paper-c', P[L.paper]);
  g.style.setProperty('--blk-c', P[L.blk]);
  g.style.visibility = L.hidden ? 'hidden' : '';
  g.tabIndex = L.hidden ? -1 : 0;
  g.setAttribute('aria-label', \`Letter \${L.c}, set in \${fname(f)}\`);
  placeGlyph(i);
}
function placeGlyph(i) {
  const L = S.letters[i], g = glyphs[i], w = wob.get('g' + i) || 0;
  g.style.transform = \`translate(\${L.dx.toFixed(1)}px, \${L.dy.toFixed(1)}px) rotate(\${(L.rot + w).toFixed(2)}deg) scale(\${L.s.toFixed(3)})\`;
  g.style.setProperty('--s', L.s);
  g.style.zIndex = L.z;
  frameDirty = true;
}
function pickVariant(f) {
  const r = Math.random();
  if (f.thin) return r < .7 ? 'plain' : 'cut';
  return r < .4 ? 'plain' : r < .6 ? 'cut' : r < .75 ? 'block' : r < .88 ? 'shadow' : 'outline';
}
function styleLetter(L, fi) {
  const f = FONTS[fi];
  L.font = fi; L.low = f.low ? Math.random() < f.low : false; L.v = pickVariant(f);
  L.ink = randi(5);
  do { L.paper = randi(5); } while (L.paper === L.ink);
  do { L.blk = randi(5); } while (L.blk === L.paper || (L.v === 'shadow' && L.blk === L.ink));
}
function freshFont(i) {
  const avoid = new Set([S.letters[i].font, S.letters[i - 1]?.font, S.letters[i + 1]?.font]);
  let f; do { f = randi(FONTS.length); } while (avoid.has(f));
  return f;
}
function restyle(i) {
  commit();
  styleLetter(S.letters[i], freshFont(i));
  renderGlyph(i); updateSel(); touchFrame(400);
  const g = glyphs[i]; g.classList.remove('bump'); void g.offsetWidth; g.classList.add('bump');
  if (++restyles === 2) setHint('Now try Remix, or a colour');
  if (Math.random() < .3) react('restyle');
}
function remix() {
  commit();
  const dice = $('#remixBtn .dice'); if (dice && !REDUCED) { dice.classList.remove('roll'); dice.getBoundingClientRect(); dice.classList.add('roll'); }
  const pool = [...FONTS.keys()].sort(() => Math.random() - .5);
  S.letters.forEach(L => { styleLetter(L, pool.shift()); L.rot = rand(-7, 7); L.size = rand(.95, 1.15); L.lift = rand(-.07, .07); });
  S.letters.forEach((_, i) => renderGlyph(i));
  fit(); touchFrame(900);
  if (!REDUCED) glyphs.forEach((g, i) => { g.classList.remove('flip', 'in', 'bump'); void g.offsetWidth; g.style.setProperty('--d', (i * 50) + 'ms'); g.classList.add('flip'); });
  toast(pick(['Remixed. Six letters, six new moods', 'Same name, new outfit', 'Ransom note, but make it UX', 'Your type teacher just felt a chill']));
  react('remix'); updateSel();
}

/* ---------------- stickers ---------------- */
function makeSticker(s) {
  const m = META[s.kind], el = document.createElement('div');
  el.className = 'sticker' + (m.svg ? ' is-svg' : '');
  el.innerHTML = s.kind === 'tape'
    ? \`<div class="art"><span class="tape-rev"><span class="tape-body" style="--tc:\${s.color}">\${[...s.text.toUpperCase()].map(ch => ch === ' ' ? '<i class="sp"></i>' : \`<i>\${ch}</i>\`).join('')}</span></span></div>\`
    : \`<div class="art">\${m.art()}</div>\`;
  if (s.kind === 'cat') {
    el.insertAdjacentHTML('beforeend', '<span class="cat-bub" aria-hidden="true"></span>');
    el.addEventListener('pointerenter', () => { if (!catGreeted && !TOUCH) { catGreeted = true; catSay(el, 'You like cats?'); } });
  }
  el.addEventListener('animationend', e => { if (e.animationName === 'squish') el.classList.remove('squish'); });
  attachDrag(el, 's', s.id);
  return el;
}
function syncStickers() {
  const ids = new Set(S.stickers.map(s => s.id));
  for (const [id, el] of stickerEls) if (!ids.has(id)) { el.remove(); stickerEls.delete(id); }
  S.stickers.forEach(s => {
    if (!stickerEls.has(s.id)) { const el = makeSticker(s); stickerEls.set(s.id, el); stickerLayer.appendChild(el); }
    placeSticker(s);
  });
}
function placeSticker(s) {
  const el = stickerEls.get(s.id); if (!el) return;
  let x = s.x, y = s.y;
  if (s.pre) { const pp = PRE_POS[s.id], p = short && pp.sh !== undefined ? pp.sh : tall && pp.tp !== undefined ? pp.tp : pp[bp]; if (!p) { el.style.display = 'none'; return; } x = p[0]; y = p[1]; }
  el.style.display = '';
  const sc = s.s * BPS[bp], w = wob.get('s' + s.id) || 0;
  el.style.left = (x * 100).toFixed(3) + '%'; el.style.top = (y * 100).toFixed(3) + '%';
  el.style.transform = \`translate(-50%, -50%) translate(\${s.dx.toFixed(1)}px, \${s.dy.toFixed(1)}px) rotate(\${(s.rot + w).toFixed(2)}deg) scale(\${sc.toFixed(3)})\`;
  el.style.setProperty('--s', sc);
  el.style.zIndex = s.z;
}
const findSticker = id => S.stickers.find(s => s.id === id);

/* cat */
const CAT_LINES = ['meow', 'purr…', 'again!', 'ok, that’s enough pets', 'You like cats?'];
let catGreeted = false, catI = 0, catBubT, catAwakeT;
function catSay(el, text) {
  const bub = el.querySelector('.cat-bub'); if (!bub) return;
  bub.textContent = text; bub.classList.add('show');
  clearTimeout(catBubT); catBubT = setTimeout(() => bub.classList.remove('show'), 1900);
}
function catPoke(el) {
  catSay(el, catGreeted ? CAT_LINES[catI++ % CAT_LINES.length] : 'You like cats?');
  catGreeted = true;
  el.classList.remove('squish'); void el.offsetWidth; el.classList.add('squish');
  el.classList.add('awake'); clearTimeout(catAwakeT); catAwakeT = setTimeout(() => { if (TOUCH) el.classList.remove('awake'); }, 1500);
  if (!REDUCED) {
    const h = document.createElement('span');
    h.className = 'heart-pop'; h.style.setProperty('--hx', rand(-24, 24).toFixed(0) + 'px');
    h.innerHTML = '<svg viewBox="0 0 100 92" width="22" height="22" aria-hidden="true"><path d="M50 88C20 66 6 50 6 32 6 18 17 8 30 8c10 0 16 6 20 14 4-8 10-14 20-14 13 0 24 10 24 24 0 18-14 34-44 56z" fill="#D5157F"/></svg>';
    el.appendChild(h); setTimeout(() => h.remove(), 950);
  }
  if (catI === 2) react('cat');
}
let lastClient = {x:-9999, y:-9999}, eyesQueued = false;
function updateCatEyes() {
  eyesQueued = false;
  const el = stickerEls.get('cat'); if (!el || el.style.display === 'none' || TOUCH) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * .55;
  const dx = lastClient.x - cx, dy = lastClient.y - cy, d = Math.hypot(dx, dy) || 1;
  const awake = (ptr.inside && d < 260) || dragKey === 'scat';
  el.classList.toggle('awake', awake);
  if (awake) { const m = Math.min(1, d / 120), pup = el.querySelector('.pup'); if (pup) pup.style.transform = \`translate(\${(dx / d * 3.4 * m).toFixed(2)}px, \${(dy / d * 2.6 * m).toFixed(2)}px)\`; }
}

/* ---------------- drag (letters + stickers) ---------------- */
const guideV = $('#guideV'), guideH = $('#guideH');
let snapped = 0;
function snapTargets(kind, key) {
  const sr = stage.getBoundingClientRect(), xs = [], ys = [];
  glyphs.forEach((g, i) => {
    if (S.letters[i].hidden || (kind === 'g' && i === key)) return;
    const r = g.getBoundingClientRect();
    xs.push({v:r.left + r.width / 2 - sr.left, r});
    ys.push({v:r.top + r.height / 2 - sr.top, r, b:false});
    if (kind === 'g') ys.push({v:r.bottom - sr.top, r, b:true});
  });
  if (kind === 's' && frameBox) xs.push({v:frameBox.x + frameBox.w / 2, r:null});
  return {xs, ys, sr};
}
function hideGuides() { guideV.classList.remove('on'); guideH.classList.remove('on'); }
function snapTo(el, o, place, T) {
  const sr = T.sr, r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2 - sr.left, cy = r.top + r.height / 2 - sr.top, by = r.bottom - sr.top;
  let bx = null, byy = null;
  for (const t of T.xs) { const d = t.v - cx; if (Math.abs(d) < 7 && (!bx || Math.abs(d) < Math.abs(bx.d))) bx = {d, t}; }
  for (const t of T.ys) { const d = t.v - (t.b ? by : cy); if (Math.abs(d) < 7 && (!byy || Math.abs(d) < Math.abs(byy.d))) byy = {d, t}; }
  if (bx) o.dx += bx.d;
  if (byy) o.dy += byy.d;
  if (!bx && !byy) { hideGuides(); return; }
  place();
  const q = el.getBoundingClientRect();
  if (bx) {
    const tr = bx.t.r || {top:sr.top + frameBox.y, bottom:sr.top + frameBox.y + frameBox.h};
    const y0 = Math.min(q.top, tr.top) - sr.top - 14, y1 = Math.max(q.bottom, tr.bottom) - sr.top + 14;
    guideV.style.transform = \`translate(\${bx.t.v.toFixed(1)}px, \${y0.toFixed(1)}px)\`; guideV.style.height = (y1 - y0).toFixed(1) + 'px'; guideV.classList.add('on');
  } else guideV.classList.remove('on');
  if (byy) {
    const tr = byy.t.r, x0 = Math.min(q.left, tr.left) - sr.left - 14, x1 = Math.max(q.right, tr.right) - sr.left + 14;
    guideH.style.transform = \`translate(\${x0.toFixed(1)}px, \${byy.t.v.toFixed(1)}px)\`; guideH.style.width = (x1 - x0).toFixed(1) + 'px'; guideH.classList.add('on');
  } else guideH.classList.remove('on');
  if (++snapped === 6) react('snap');
}
function attachDrag(el, kind, key) {
  const wkey = kind + key;
  const obj = () => kind === 'g' ? S.letters[key] : findSticker(key);
  const place = () => kind === 'g' ? placeGlyph(key) : placeSticker(obj());
  el.addEventListener('pointerdown', e => {
    if (tool !== 'move' || e.button > 0) return;
    const o = obj(); if (!o) return;
    e.stopPropagation(); downTarget = e.target;
    const sx = e.clientX, sy = e.clientY, ox = o.dx, oy = o.dy;
    let moved = false, lastX = sx, lastT = performance.now(), targets = null;
    el.setPointerCapture(e.pointerId);
    o.z = ++zTop; place();
    const mv = ev => {
      const mx = ev.clientX - sx, my = ev.clientY - sy;
      if (!moved) {
        if (Math.hypot(mx, my) < 5) return;
        moved = true; commit(); el.classList.add('dragging'); dragKey = wkey; select(kind, key); targets = snapTargets(kind, key);
      }
      o.dx = ox + mx; o.dy = oy + my;
      const now = performance.now(), dt = Math.max(8, now - lastT), vx = (ev.clientX - lastX) / dt * 16;
      lastX = ev.clientX; lastT = now;
      wob.set(wkey, clamp((wob.get(wkey) || 0) * .5 + vx * .9, -16, 16));
      place();
      if (targets && !ev.altKey) snapTo(el, o, place, targets); else hideGuides();
    };
    const up = () => {
      el.removeEventListener('pointermove', mv); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up);
      el.classList.remove('dragging'); dragKey = null; hideGuides();
      if (!moved) {
        if (kind === 'g') { select('g', key); restyle(key); }
        else {
          select('s', key);
          if (o.kind === 'cat') catPoke(el);
          if (o.kind === 'coffee') narrate(lineOf('coffee'));
        }
      }
      if (kind === 's' && o.kind === 'cat') updateCatEyes();
    };
    el.addEventListener('pointermove', mv); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  });
}

/* ---------------- selection ---------------- */
let sel = null;
const selNode = document.createElement('span');
selNode.className = 'sel'; selNode.setAttribute('aria-hidden', 'true');
selNode.innerHTML = '<i class="hd" data-h="tl"></i><i class="hd" data-h="tr"></i><i class="hd" data-h="bl"></i><i class="hd" data-h="br"></i><b class="sel-name"></b><b class="sel-dim"></b>';
const isSel = (k, key) => !!sel && sel.k === k && sel.key === key;
const selEl = () => !sel ? null : sel.k === 'g' ? glyphs[sel.key] : stickerEls.get(sel.key);
const selObj = () => !sel ? null : sel.k === 'g' ? S.letters[sel.key] : findSticker(sel.key);
function select(k, key) {
  if (isSel(k, key)) { updateSel(); return; }
  clearSel();
  const el = k === 'g' ? glyphs[key] : stickerEls.get(key);
  if (!el || (k === 'g' && S.letters[key].hidden)) return;
  sel = {k, key};
  el.appendChild(selNode);
  updateSel();
}
function updateSel() {
  const el = selEl(), o = selObj(); if (!el || !o) return;
  const sc = sel.k === 'g' ? o.s : o.s * BPS[bp];
  selNode.querySelector('.sel-name').textContent = sel.k === 'g' ? fname(FONTS[o.font]) : META[o.kind].label;
  selNode.querySelector('.sel-dim').textContent = \`\${Math.round(el.offsetWidth * sc)} × \${Math.round(el.offsetHeight * sc)}\`;
}
function clearSel() { selNode.remove(); sel = null; if (introDone) gframe.classList.remove('off'); }
selNode.querySelectorAll('.hd').forEach(h => h.addEventListener('pointerdown', e => {
  if (!sel || e.button > 0) return;
  e.stopPropagation(); e.preventDefault();
  const el = selEl(), o = selObj(); if (!el || !o) return;
  commit();
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const d0 = Math.max(12, Math.hypot(e.clientX - cx, e.clientY - cy)), s0 = o.s, k = sel.k, key = sel.key;
  h.setPointerCapture(e.pointerId);
  const mv = ev => { o.s = clamp(s0 * Math.hypot(ev.clientX - cx, ev.clientY - cy) / d0, .35, 3.5); k === 'g' ? placeGlyph(key) : placeSticker(o); updateSel(); };
  const up = () => { h.removeEventListener('pointermove', mv); h.removeEventListener('pointerup', up); h.removeEventListener('pointercancel', up); };
  h.addEventListener('pointermove', mv); h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
}));
gframe.querySelectorAll('.hd[data-h="tl"],.hd[data-h="tr"],.hd[data-h="bl"],.hd[data-h="br"]').forEach(h => h.addEventListener('pointerdown', e => {
  if (e.button > 0 || !frameBox) return;
  e.stopPropagation(); e.preventDefault();
  commit();
  const sr = stage.getBoundingClientRect(), cx = sr.left + frameBox.x + frameBox.w / 2, cy = sr.top + frameBox.y + frameBox.h / 2;
  const d0 = Math.max(20, Math.hypot(e.clientX - cx, e.clientY - cy)), w0 = S.wm;
  h.setPointerCapture(e.pointerId);
  const mv = ev => { S.wm = clamp(w0 * Math.hypot(ev.clientX - cx, ev.clientY - cy) / d0, .55, 1.4); fit(); };
  const up = () => { h.removeEventListener('pointermove', mv); h.removeEventListener('pointerup', up); h.removeEventListener('pointercancel', up); };
  h.addEventListener('pointermove', mv); h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
}));
glyphs.forEach((g, i) => {
  attachDrag(g, 'g', i);
  g.addEventListener('focus', () => { if (tool === 'move' && g.matches(':focus-visible')) select('g', i); });
  g.addEventListener('click', e => { if (e.detail !== 0) return; select('g', i); restyle(i); });
  g.addEventListener('animationend', () => { g.classList.remove('in', 'flip', 'bump'); touchFrame(); });
});
function nudgeSel(dx, dy) { const o = selObj(); if (!o) return; commit(); o.dx += dx; o.dy += dy; sel.k === 'g' ? placeGlyph(sel.key) : placeSticker(o); }
function deleteSel() {
  const o = selObj(); if (!o) return;
  commit();
  if (sel.k === 'g') {
    const c = o.c, i = S.letters.indexOf(o); o.hidden = true; clearSel(); renderGlyph(i);
    toast(\`Deleted \${c}. \${MOD}Z brings it back\`); react('del', c);
  } else {
    S.stickers = S.stickers.filter(s => s !== o); clearSel(); syncStickers();
    toast(\`Sticker removed. \${MOD}Z brings it back\`);
  }
}

/* ---------------- history ---------------- */
const past = [], future = [];
const snap = () => JSON.stringify({theme:S.theme, wm:S.wm, letters:S.letters, stickers:S.stickers, notes:S.notes});
function commit() { past.push(snap()); if (past.length > 80) past.shift(); future.length = 0; }
const START = snap();   // the page exactly as it first loads: white, original letters, original stickers
function restore(json) {
  const o = JSON.parse(json);
  clearSel(); closeComposer(); wob.clear();
  Object.assign(S, o);
  renderAll(); fit();
}
function undo() { if (!past.length) { toast('Nothing to undo'); return; } future.push(snap()); restore(past.pop()); }
function redo() { if (!future.length) { toast('Nothing to redo'); return; } past.push(snap()); restore(future.pop()); }

/* ---------------- actions ---------------- */
let themed = false, floodTok = 0;
function setTheme(i, origin) {
  if (i === S.theme) return;
  commit();
  S.theme = i;
  const T = THEMES[i], flood = !REDUCED && origin;
  applyTheme(flood); S.letters.forEach((_, j) => renderGlyph(j));
  if (flood) { if (ownGridOffActive) { const pb0 = $('#pageBg'), pl0 = $('#pageLines'), rf0 = $('#ropeFill'); if (pb0) pb0.setAttribute('fill', CFG.pageColor || '#FFFFFF'); if (pl0) pl0.setAttribute('stroke', 'rgba(0,0,0,.04)'); if (rf0) rf0.setAttribute('fill', 'url(#pageGrid)'); }
    const tok = ++floodTok, f = document.createElement('div');
    f.className = 'flood'; f.style.backgroundColor = T.bg; f.style.setProperty('--g', T.grid);
    f.style.setProperty('--x', origin.x.toFixed(0) + 'px'); f.style.setProperty('--y', origin.y.toFixed(0) + 'px');
    stage.appendChild(f);
    requestAnimationFrame(() => requestAnimationFrame(() => f.classList.add('go')));
    setTimeout(() => { if (tok === floodTok) setCanvas(T); f.remove(); }, 780);
  }
  toast(\`Theme: \${T.name}, \${T.note}\`);
  react(T.id === 'lal' ? 'lal' : 'theme');
  if (!themed) { themed = true; setHint('Drag anything, it snaps'); }
  if (narr.phase === 'idle' && !REDUCED) setTimeout(() => narrate(narr.i, i === 0 ? 'back to white, nice' : \`ooh, \${T.name.toLowerCase()}!\`, 'home'), 500);
}
function nextTheme() { const n = (S.theme + 1) % THEMES.length; setTheme(n, swatchOrigin(n)); }
// phone colour button: shows the colour you'll get next, and floods the page from the button
const colorBtn = $('#colorBtn');
function syncColorBtn() { const n = (S.theme + 1) % THEMES.length; colorBtn.style.setProperty('--next', THEMES[n].bg); colorBtn.setAttribute('aria-label', \`Change the colour to \${THEMES[n].name}\`); }
colorBtn.addEventListener('click', () => {
  const n = (S.theme + 1) % THEMES.length, sr = stage.getBoundingClientRect(), r = colorBtn.getBoundingClientRect();
  setTheme(n, {x:r.left + r.width / 2 - sr.left, y:r.top + r.height / 2 - sr.top});
});
function tidy() {
  // Tidy is a full reset: back to white, the original letters and typefaces, the original stickers in place,
  // no visitor stickers or notes. One Undo brings everything back.
  closeComposer(); clearSel(); setTool('move');
  const o = JSON.parse(START);
  if (S.theme !== o.theme) {
    // the white floods back in from the button, like any colour change (this also saves the Undo step)
    const sr = stage.getBoundingClientRect(), btn = bp === 'sm' ? $('#tidyBtn') : swatchEls[o.theme], r = btn.getBoundingClientRect();
    setTheme(o.theme, {x:r.left + r.width / 2 - sr.left, y:r.top + r.height / 2 - sr.top});
  } else commit();
  wob.clear();
  const els = [...glyphs, ...stickerEls.values()];
  els.forEach(el => el.classList.add('ease'));
  S.wm = o.wm; S.letters = o.letters; S.stickers = o.stickers; S.notes = [];
  syncStickers(); syncNotes();
  S.letters.forEach((_, i) => renderGlyph(i)); S.stickers.forEach(placeSticker);
  todoLast.classList.remove('checked');
  fit(); touchFrame(650);
  setTimeout(() => { [...glyphs, ...stickerEls.values()].forEach(el => el.classList.remove('ease')); updateSel(); }, 620);
  toast('Fresh start. Everything’s back to the beginning'); react('tidy');
}
function setHint(t) { dockHint.textContent = t; }
if (TOUCH) setHint('Tap a letter to restyle it');

/* stamps */
let stampCount = 0;
function stamp(p) {
  commit();
  const W = stage.clientWidth, H = stage.clientHeight;
  const s = {id:'u' + (++uid), kind:stampKind, pre:false, x:p.x / W, y:p.y / H, dx:0, dy:0, rot:rand(-14, 14), s:bp === 'sm' ? 1.1 : 1 / BPS[bp], z:++zTop};
  S.stickers.push(s); syncStickers();
  const el = stickerEls.get(s.id);
  if (!REDUCED) { el.classList.add('pre'); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('pre'))); }
  if (++stampCount === 1 || Math.random() < .2) react('stamp');
}
function freeSpot() {
  const W = stage.clientWidth, H = stage.clientHeight, sr = stage.getBoundingClientRect();
  const box = el => { const r = el.getBoundingClientRect(); return {l:r.left - sr.left, t:r.top - sr.top, r:r.right - sr.left, b:r.bottom - sr.top}; };
  const keepOut = [{l:homeBox.x, t:homeBox.y, r:homeBox.x + homeBox.w, b:homeBox.y + homeBox.h}];
  [skills, statusLine, resumeBtn, dock, tray, owner.el.querySelector('.dude')].forEach(el => { if (el && el.offsetParent !== null) keepOut.push(box(el)); });
  const dk = box(dock), yMax = Math.min(H, dk.t) - 46, taken = S.stickers.map(t => ({x:t.x * W, y:t.y * H}));
  let best = null, bestScore = -Infinity;
  for (let i = 0; i < 40; i++) {
    const p = {x:rand(36, W - 36), y:rand(56, Math.max(70, yMax))};
    const hit = keepOut.some(r => p.x > r.l - 34 && p.x < r.r + 34 && p.y > r.t - 34 && p.y < r.b + 34);
    const d = taken.reduce((m, t) => Math.min(m, Math.hypot(t.x - p.x, t.y - p.y)), 300) - (hit ? 1000 : 0);
    if (d > bestScore) { bestScore = d; best = p; }
  }
  return best;
}
STAMPS.forEach(k => {
  const b = document.createElement('button');
  b.type = 'button'; b.setAttribute('aria-label', STAMP_NAMES[k]); b.setAttribute('aria-pressed', String(k === stampKind));
  b.innerHTML = META[k].art(32);
  b.addEventListener('click', () => {
    stampKind = k; tray.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    // on phones, picking a sticker drops it on the page right away
    if (touchy()) { stamp(freeSpot()); toast('Sticker added. Drag it anywhere'); }
  });
  tray.appendChild(b);
});

/* visitor notes */
let composer = null;
function makeNote(n) {
  const el = document.createElement('div');
  el.className = 'note' + (n.x > .66 ? ' left' : ''); el.dataset.ui = '';
  el.style.left = (n.x * 100) + '%'; el.style.top = (n.y * 100) + '%';
  el.innerHTML = '<span class="note-pin" aria-hidden="true">You</span><div class="note-bubble"><span class="note-who"></span><p></p></div>';
  el.querySelector('.note-who').textContent = visitorName;
  el.querySelector('p').textContent = n.t;
  return el;
}
function syncNotes() { notesLayer.replaceChildren(...S.notes.map(makeNote)); }
function openComposer(p) {
  closeComposer();
  const W = stage.clientWidth, H = stage.clientHeight, x = p.x / W, y = p.y / H;
  const el = document.createElement('div');
  el.className = 'note' + (x > .66 ? ' left' : ''); el.dataset.ui = '';
  el.style.left = (x * 100) + '%'; el.style.top = (y * 100) + '%';
  el.innerHTML = '<span class="note-pin" aria-hidden="true">You</span><form class="note-bubble"><label class="sr-only" for="noteInput">Leave a note</label><input id="noteInput" maxlength="120" placeholder="Leave a note for Srishti" autocomplete="off"><button type="submit" aria-label="Pin note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg></button></form>';
  notesLayer.appendChild(el);
  composer = {el, x, y};
  const input = el.querySelector('input');
  if (p.now) input.focus({preventScroll:true}); else setTimeout(() => input.focus(), 0);
  el.querySelector('form').addEventListener('submit', ev => { ev.preventDefault(); submitNote(); });
  input.addEventListener('keydown', ev => { if (ev.key === 'Escape') { ev.stopPropagation(); closeComposer(); setTool('move'); } });
  input.addEventListener('blur', () => setTimeout(() => {
    if (composer && composer.el === el && !el.contains(document.activeElement)) { if (input.value.trim()) submitNote(); else closeComposer(); }
  }, 150));
}
function closeComposer() { if (composer) { const c = composer; composer = null; c.el.remove(); } }
function submitNote() {
  if (!composer) return;
  const t = composer.el.querySelector('input').value.trim(), {x, y} = composer;
  closeComposer();
  if (!t) return;
  commit(); S.notes.push({id:'n' + (++uid), x, y, t}); syncNotes();
  toast('Note pinned. It stays on your screen'); react('note'); setTool('move');
}

/* tools */
function setTool(t) {
  tool = t; stage.dataset.tool = t;
  dock.querySelectorAll('.tool').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tool === t)));
  tray.hidden = t !== 'sticker';
  stage.classList.toggle('tray-open', t === 'sticker');
  if (t !== 'move') clearSel();
  if (t !== 'comment') closeComposer();
}
dock.querySelectorAll('.tool').forEach(b => b.addEventListener('click', () => {
  setTool(tool === b.dataset.tool ? 'move' : b.dataset.tool);
  if (!touchy()) return;
  if (tool === 'sticker') toast('Pick a sticker to add it');
  if (tool === 'comment') {
    // phones: open the note right away, just above the name
    const W = stage.clientWidth;
    openComposer({x:Math.max(12, W * .05), y:Math.max(110, homeBox.y - 18), now:true});
  }
}));
$('#remixBtn').addEventListener('click', remix);
syncColorBtn();
$('#tidyBtn').addEventListener('click', tidy);
$('#undoBtn').addEventListener('click', undo);
$('#undoKbd').textContent = MAC ? '⌘Z' : 'Ctrl Z';
$('#remixBtn .dice').addEventListener('animationend', e => e.currentTarget.classList.remove('roll'));
function pressKey(k) { const el = dock.querySelector(\`.key[data-key="\${k}"]\`); if (!el) return; el.classList.add('down'); setTimeout(() => el.classList.remove('down'), 150); }

let toastT;
function toast(msg) {
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2700);
}

/* Figma-style comment */
const skills = $('#skills'), chips = [...skills.querySelectorAll('.tape')];
const CHIP_LINES = ['talking to people before pixels', 'flows, wireframes & polished ui', 'micro-interactions that feel right', 'if it’s not clickable, is it real?'];
// the letters sit a little uneven, like real embossed tape
skills.querySelectorAll('.tape-body i:not(.sp)').forEach(l => { l.style.translate = \`0 \${(Math.random() * 1.6 - .8).toFixed(2)}px\`; l.style.rotate = \`\${(Math.random() * 3 - 1.5).toFixed(1)}deg\`; });
function printTape(t, delay = 0) {
  setTimeout(() => {
    t.classList.remove('printed'); void t.offsetWidth;
    t.classList.add('printed');
    setTimeout(() => { t.classList.remove('pop'); void t.offsetWidth; t.classList.add('pop'); }, 1000);
  }, delay);
}
function printAll() { chips.forEach((t, i) => printTape(t, i * 420)); }
function chipTap(i) { printTape(chips[i]); narrate(lineOf('chips'), CHIP_LINES[i], 'chip:' + i); }
chips.forEach((c, i) => {
  c.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    e.preventDefault(); e.stopPropagation();
    const sx = e.clientX, sy = e.clientY; let moved = false;
    c.setPointerCapture(e.pointerId);
    const mv = ev => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (!moved) { if (Math.hypot(dx, dy) < 5) return; moved = true; c.classList.add('drag'); }
      const tx = dx * .7 / (1 + Math.abs(dx) / 260), ty = dy * .7 / (1 + Math.abs(dy) / 200);
      c.style.translate = \`\${tx.toFixed(1)}px \${ty.toFixed(1)}px\`;
      c.style.rotate = \`\${clamp(dx * .05, -12, 12).toFixed(1)}deg\`;
    };
    const up = () => {
      c.removeEventListener('pointermove', mv); c.removeEventListener('pointerup', up); c.removeEventListener('pointercancel', up);
      if (moved) { c.classList.remove('drag'); c.style.translate = ''; c.style.rotate = ''; }
      else chipTap(i);
    };
    c.addEventListener('pointermove', mv); c.addEventListener('pointerup', up); c.addEventListener('pointercancel', up);
  });
  c.addEventListener('click', e => { if (e.detail === 0) chipTap(i); });
});
const statusLine = $('#statusLine'), stRot = $('#stRot'), resumeBtn = $('#resumeBtn');
if (CFG.resumeUrl) resumeBtn.href = CFG.resumeUrl;
function placeResume() {
  const W = stage.clientWidth, H = stage.clientHeight, sr = stage.getBoundingClientRect();
  const k = sr.width / W || 1;                                     // the page may be zoomed during the opening
  const loc = r => ({l:(r.left - sr.left) / k, t:(r.top - sr.top) / k, r:(r.right - sr.left) / k, b:(r.bottom - sr.top) / k});
  const w = resumeBtn.offsetWidth, hBtn = resumeBtn.offsetHeight, note = bp === 'sm' ? 30 : 36;
  const kr = loc(skills.getBoundingClientRect()), dk = loc($('#dock').getBoundingClientRect());
  const cardEl = $('#idcard'), card = bp === 'sm' || !cardEl.offsetParent || short ? null : loc(cardEl.getBoundingClientRect());
  const fr = {r:homeBox.x + homeBox.w + 30};
  // each spot is a free rectangle; the button (plus its handwritten note) is centred in the first one it fits
  const spots = [];
  const right = {x0:fr.r + 20, x1:W - 16, y0:(card ? card.b : 0) + 20, y1:dk.t - 24};           // beside the name, under the ID card
  const besideTapes = {x0:kr.r + 24, x1:W - 16, y0:kr.t - 30, y1:Math.min(dk.t - 16, kr.b + 60)}; // to the right of the skill tapes
  const below = {x0:16, x1:W - 16, y0:kr.b + 14, y1:dk.t - 14};                                   // under the tapes
  const top = {x0:W * .3, x1:W * .7, y0:12, y1:homeBox.y - 60};                                    // phones: between the cat and the coffee
  if (bp === 'sm' || tall) spots.push(below, besideTapes, top); else spots.push(right, besideTapes, below);
  let pick = null, tight = false;
  for (const z of spots) {
    if (z.x1 - z.x0 >= w && z.y1 - z.y0 >= hBtn + note) { pick = z; break; }
  }
  if (!pick) for (const z of spots) if (z.x1 - z.x0 >= w && z.y1 - z.y0 >= hBtn) { pick = z; tight = true; break; }
  resumeBtn.classList.toggle('tight', tight);
  resumeBtn.style.visibility = pick ? '' : 'hidden';
  if (!pick) return;
  const tot = hBtn + (tight ? 0 : note);
  const cx = (pick.x0 + pick.x1) / 2, cy = (pick.y0 + pick.y1) / 2 - tot / 2 + hBtn / 2;
  resumeBtn.style.transform = \`translate(\${(cx - w / 2).toFixed(0)}px, \${(cy - hBtn / 2).toFixed(0)}px)\`;
}
const ST_WORDS = ['thoughtful projects', 'full-time roles', 'contract work', 'hard design problems'];
let stI = 0, stHover = false;
statusLine.addEventListener('pointerenter', () => { stHover = true; });
statusLine.addEventListener('pointerleave', () => { stHover = false; });
const stT = $('#stT'), stMeasure = document.createElement('span');
stMeasure.className = 'st-t'; stMeasure.style.cssText = 'position:absolute;visibility:hidden;height:auto;left:-9999px';
statusLine.appendChild(stMeasure);
const widthOf = t => { stMeasure.textContent = t; return stMeasure.offsetWidth; };
function sizeStatus() { stRot.style.width = widthOf(ST_WORDS[stI]) + 'px'; }
function scramble(txt) {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/+*#', start = performance.now(), dur = 480;
  const step = () => {
    const p = Math.min(1, (performance.now() - start) / dur), n = Math.floor(p * txt.length);
    let out = txt.slice(0, n);
    for (let i = n; i < txt.length; i++) out += txt[i] === ' ' ? ' ' : pool[randi(pool.length)];
    stT.textContent = out;
    if (p < 1) requestAnimationFrame(step);
  };
  step();
}
function rotateStatus() {
  if (stHover || document.hidden || REDUCED) return;
  stI = (stI + 1) % ST_WORDS.length;
  const next = ST_WORDS[stI];
  stRot.classList.add('wipe');                       // marker wipes off to the right
  setTimeout(() => {
    stRot.style.width = widthOf(next) + 'px';
    stRot.classList.remove('wipe');                  // marker draws back in from the left
    scramble(next);                                  // letters settle into the new words
  }, 400);
}
setInterval(rotateStatus, 3200);
if (CFG.contactUrl) statusLine.href = CFG.contactUrl;

/* canvas pointer */
const ptr = {x:-999, y:-999, inside:false, mouse:false};
let ptrPrevY = null;
function local(e) { const r = stage.getBoundingClientRect(); return {x:e.clientX - r.left, y:e.clientY - r.top}; }
stage.addEventListener('pointermove', e => {
  const p = local(e); ptr.x = p.x; ptr.y = p.y; ptr.inside = true; ptr.mouse = e.pointerType === 'mouse';
  lastClient = {x:e.clientX, y:e.clientY};
  if (!eyesQueued) { eyesQueued = true; requestAnimationFrame(updateCatEyes); }
});
stage.addEventListener('pointerleave', () => { ptr.inside = false; if (!eyesQueued) { eyesQueued = true; requestAnimationFrame(updateCatEyes); } });
stage.addEventListener('pointerdown', e => {
  if (e.button > 0) return;
  if (e.target.closest('[data-ui]')) return;
  const p = local(e);
  if (tool === 'move') { clearSel(); return; }
  if (tool === 'sticker') { stamp(p); return; }
  if (tool === 'comment') { e.preventDefault(); openComposer(p); }
});
const keysCard = $('#keysCard'), keysBtn = $('#keysBtn');
if (!MAC) $('#kbdUndo').textContent = 'Ctrl';
function toggleKeys(open = keysCard.hidden) { keysCard.hidden = !open; keysBtn.setAttribute('aria-expanded', String(open)); }
keysBtn.addEventListener('click', () => toggleKeys());
document.addEventListener('pointerdown', e => { if (!keysCard.hidden && !e.target.closest('#keysCard, #keysBtn')) toggleKeys(false); });
document.addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('input, textarea, [contenteditable]')) return;
  const k = e.key.toLowerCase(), mod = e.metaKey || e.ctrlKey;
  if (mod && k === 'z') { e.preventDefault(); pressKey('z'); e.shiftKey ? redo() : undo(); return; }
  if (mod && k === 'y') { e.preventDefault(); redo(); return; }
  if (mod || e.altKey) return;
  if (k === 'escape') { if (!keysCard.hidden) toggleKeys(false); else if (tool !== 'move') setTool('move'); else clearSel(); return; }
  if (e.key === '?') { toggleKeys(); return; }
  if (e.shiftKey && k === 'a') { pressKey('a'); tidy(); return; }
  const arrows = {arrowleft:[-1,0], arrowright:[1,0], arrowup:[0,-1], arrowdown:[0,1]};
  if (arrows[k] && sel) { e.preventDefault(); const m = e.shiftKey ? 10 : 1; nudgeSel(arrows[k][0] * m, arrows[k][1] * m); return; }
  if ((k === 'delete' || k === 'backspace') && sel) { e.preventDefault(); deleteSel(); return; }
  if (k === 's') setTool(tool === 'sticker' ? 'move' : 'sticker');
  else if (k === 'c') setTool(tool === 'comment' ? 'move' : 'comment');
  else if (k === 'r') { pressKey('r'); remix(); }
  else if (k === 't') nextTheme();
});

/* ---------------- layout ---------------- */
let frameBox = null, introDone = false;
function computeFrame() {
  const sr = stage.getBoundingClientRect();
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  glyphs.forEach((g, i) => {
    if (S.letters[i].hidden || g.classList.contains('pre')) return;
    const r = g.getBoundingClientRect();
    x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom);
  });
  if (x0 === Infinity) { frameBox = null; gframe.hidden = true; return null; }
  const pad = bp === 'lg' ? 26 : bp === 'md' ? 20 : 12;
  frameBox = {x:x0 - sr.left - pad, y:y0 - sr.top - pad, w:x1 - x0 + pad * 2, h:y1 - y0 + pad * 2};
  gframe.hidden = false;
  gframe.style.transform = \`translate(\${frameBox.x.toFixed(1)}px, \${frameBox.y.toFixed(1)}px)\`;
  gframe.style.width = frameBox.w.toFixed(1) + 'px'; gframe.style.height = frameBox.h.toFixed(1) + 'px';
  gfDim.textContent = \`\${Math.round(frameBox.w)} × \${Math.round(frameBox.h)}\`;
  return frameBox;
}
function fit() {
  const W = stage.clientWidth, H = stage.clientHeight;
  // phones (and very short screens) get the stacked layout; tablets use the medium layout,
  // re-arranged top to bottom when they're held upright ("tall"), and tightened on narrow landscapes
  // phones turned sideways ("short"): a compact landscape version of the tablet layout
  const vh = window.innerHeight || H, sideways = vh < 560 && W > vh * 1.3;
  const nb = sideways ? 'md' : (W < 700 || H < 500) ? 'sm' : W < 1360 ? 'md' : 'lg';
  if (nb !== bp) { bp = nb; document.body.dataset.bp = bp; }
  short = sideways;
  tall = bp === 'md' && !short && H / W > 1.12;
  narrow = bp === 'md' && !tall && !short && W < 1200;
  document.body.dataset.short = short ? '1' : '';
  document.body.dataset.tall = tall ? '1' : '';
  document.body.dataset.narrow = narrow ? '1' : '';
  wordmark.style.fontSize = '100px';
  const tw = glyphs.reduce((a, g) => a + g.offsetWidth, 0) + (bp === 'sm' ? 5 : 7) * (glyphs.length - 1);
  const th = Math.max(...glyphs.map(g => g.offsetHeight));
  const maxW = W * (bp === 'sm' ? .88 : tall ? .84 : short ? .54 : narrow ? .58 : .72), maxH = H * (bp === 'sm' ? (H < 700 ? .16 : .19) : tall ? .19 : short ? .27 : bp === 'md' ? .27 : .3);
  wordmark.style.fontSize = (100 * Math.min(maxW / tw, maxH / th) * S.wm).toFixed(2) + 'px';
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  glyphs.forEach(g => { x0 = Math.min(x0, g.offsetLeft); y0 = Math.min(y0, g.offsetTop); x1 = Math.max(x1, g.offsetLeft + g.offsetWidth); y1 = Math.max(y1, g.offsetTop + g.offsetHeight); });
  homeBox = {x:x0 + wordmark.offsetLeft, y:y0 + wordmark.offsetTop, w:x1 - x0, h:y1 - y0};
  const hx = (homeBox.x + homeBox.w / 2).toFixed(0), hb = homeBox.y + homeBox.h;
  const shortPhone = bp === 'sm' && H < 700;
  statusLine.style.transform = \`translate(\${hx}px, \${(hb + (bp === 'sm' ? (shortPhone ? 30 : 42) : short ? 26 : bp === 'md' ? 62 : 80)).toFixed(0)}px)\`;
  skills.style.transform = \`translate(\${hx}px, \${(hb + (bp === 'sm' ? (shortPhone ? 78 : 100) : short ? 58 : bp === 'md' ? 122 : 152)).toFixed(0)}px)\`;
  sizeStatus();
  S.stickers.forEach(placeSticker);
  computeFrame(); updateSel();
  requestAnimationFrame(placeResume);
  stage.style.setProperty('--deck-h', dock.offsetHeight + 'px');
}

/* ---------------- Srishti the doodle ---------------- */
const owner = {el:document.createElement('div'), x:-60, y:0, target:null, face:1, walking:false, waveCool:0, quietSince:performance.now(), noticed:false};
owner.el.className = 'doodle pre';
owner.el.innerHTML = \`<button class="dude" type="button" data-ui aria-label="Tell me the next thing about Srishti"><svg viewBox="0 0 80 150" aria-hidden="true">
  <ellipse class="shadow" cx="40" cy="147.6" rx="20" ry="3.2"/>
  <g data-j="body">
    <g data-j="thighL"><path d="M31.6 82V110" stroke="#121214" stroke-width="16" stroke-linecap="round"/><g data-j="shinL"><path d="M31.6 110V140.4" stroke="#121214" stroke-width="16"/></g></g>
    <g data-j="thighR"><path d="M48.4 82V110" stroke="#121214" stroke-width="16" stroke-linecap="round"/><g data-j="shinR"><path d="M48.4 110V140.4" stroke="#121214" stroke-width="16"/></g></g>
    <g data-j="thighL"><path d="M31.6 82V110" stroke="#97BCE6" stroke-width="13.4" stroke-linecap="round"/><path d="M35.2 88V110" stroke="#7AA3D6" stroke-width="3" stroke-linecap="round" opacity=".55"/><g data-j="shinL"><g transform="rotate(-9 31.6 143)"><path d="M24 145.4c0-4.2 3.3-7.6 7.6-7.6s7.6 3.4 7.6 7.6z" fill="#FFFFFF" stroke="#121214" stroke-width="1.3" stroke-linejoin="round"/><path d="M29 140.8c1.8-.7 3.4-.7 5.2 0" fill="none" stroke="#A9AEB8" stroke-width=".9" stroke-linecap="round"/><rect x="23.4" y="144.8" width="16.4" height="2.8" rx="1.3" fill="#E6E8ED" stroke="#121214" stroke-width="1.2"/></g><path d="M31.6 110V140" stroke="#97BCE6" stroke-width="13.4"/><path d="M35.2 110V136" stroke="#7AA3D6" stroke-width="3" stroke-linecap="round" opacity=".55"/><path d="M25.4 137.6c2.4 1.2 4.8 1 7.2-.2 1.6-.7 3.2-.6 5 .3" fill="none" stroke="#7AA3D6" stroke-width=".9" stroke-linecap="round"/><path d="M23.7 140.6h15.8" stroke="#121214" stroke-width="1.3" stroke-linecap="round"/></g></g>
    <g data-j="thighR"><path d="M48.4 82V110" stroke="#97BCE6" stroke-width="13.4" stroke-linecap="round"/><path d="M44.8 88V110" stroke="#7AA3D6" stroke-width="3" stroke-linecap="round" opacity=".55"/><g data-j="shinR"><g transform="rotate(9 48.4 143)"><path d="M40.8 145.4c0-4.2 3.3-7.6 7.6-7.6s7.6 3.4 7.6 7.6z" fill="#FFFFFF" stroke="#121214" stroke-width="1.3" stroke-linejoin="round"/><path d="M45.8 140.8c1.8-.7 3.4-.7 5.2 0" fill="none" stroke="#A9AEB8" stroke-width=".9" stroke-linecap="round"/><rect x="40.2" y="144.8" width="16.4" height="2.8" rx="1.3" fill="#E6E8ED" stroke="#121214" stroke-width="1.2"/></g><path d="M48.4 110V140" stroke="#97BCE6" stroke-width="13.4"/><path d="M44.8 110V136" stroke="#7AA3D6" stroke-width="3" stroke-linecap="round" opacity=".55"/><path d="M42.2 137.6c2.4 1.2 4.8 1 7.2-.2 1.6-.7 3.2-.6 5 .3" fill="none" stroke="#7AA3D6" stroke-width=".9" stroke-linecap="round"/><path d="M40.5 140.6h15.8" stroke="#121214" stroke-width="1.3" stroke-linecap="round"/></g></g>
    <path d="M25.2 82.4H54.8L55 85.8C45 87 35 87 25 85.8Z" fill="#97BCE6" stroke="#121214" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M40 86.4V94.2M40 94.2c-1.2 1-2.8 1.5-4.4 1.6M40.6 86.6v4.8" fill="none" stroke="#7AA3D6" stroke-width=".9" stroke-linecap="round"/>
    <path d="M25.4 86.4c2.4 2.6 5 3.6 8.2 3.8M54.6 86.4c-2.4 2.6-5 3.6-8.2 3.8" fill="none" stroke="#7AA3D6" stroke-width=".9" stroke-linecap="round"/>
    <path d="M25.6 44C30 41.8 50 41.8 54.4 44L58.4 48.4 57.6 83.2C51 84.4 46.6 84.6 44.8 84.2H35.2C33.4 84.6 29 84.4 22.4 83.2L21.6 48.4Z" fill="#1F1F23" stroke="#121214" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M27.6 54.8c.8 4.4.8 9.2 0 14M52.4 54.8c-.8 4.4-.8 9.2 0 14M24.4 80.2c3.4 1.2 7.2 1.8 10.8 1.8M55.6 80.2c-3.4 1.2-7.2 1.8-10.8 1.8" fill="none" stroke="#0C0C0E" stroke-width=".9" stroke-linecap="round"/>
    <path d="M35.4 43H44.6L45.2 84.4C41.8 85.2 38.2 85.2 34.8 84.4Z" fill="#FFFFFF" stroke="#121214" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M36.2 43.4c2 2.4 5.6 2.4 7.6 0" fill="none" stroke="#8E929C" stroke-width="1" stroke-linecap="round"/>
    <path d="M36.6 78.6c2.2.9 4.6.9 6.8 0" fill="none" stroke="#D5D8DF" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M31.2 43.8C31.6 41.2 33.4 39.4 35.8 38.8L36 44.4C34.6 45.6 33 46.2 31.6 46.4ZM48.8 43.8C48.4 41.2 46.6 39.4 44.2 38.8L44 44.4C45.4 45.6 47 46.2 48.4 46.4Z" fill="#27272C" stroke="#121214" stroke-width="1.1" stroke-linejoin="round"/>
    <g data-j="lan"></g>
    <g data-j="armL"><path d="M23.8 48V64" stroke="#121214" stroke-width="12.6" stroke-linecap="round"/><g data-j="foreL"><path d="M23.8 64V81.8" stroke="#121214" stroke-width="11.6" stroke-linecap="round"/></g></g>
    <g data-j="armR"><path d="M56.2 48V64" stroke="#121214" stroke-width="12.6" stroke-linecap="round"/><g data-j="foreR"><path d="M56.2 64V81.8" stroke="#121214" stroke-width="11.6" stroke-linecap="round"/></g></g>
    <g data-j="armL"><path d="M23.8 48V64" stroke="#1F1F23" stroke-width="10" stroke-linecap="round"/><path d="M19.8 52.6c1.8.8 3.6.6 5.2-.4M19.4 60.6c2.2 1 4.6.9 6.2-.2" fill="none" stroke="#0C0C0E" stroke-width=".9" stroke-linecap="round"/><g data-j="foreL"><path d="M23.8 64V81.8" stroke="#1F1F23" stroke-width="9" stroke-linecap="round"/><path d="M20.8 70c2 1 4.2.9 6-.2" fill="none" stroke="#0C0C0E" stroke-width=".9" stroke-linecap="round"/><path d="M18 79.6h8.8" stroke="#121214" stroke-width="1" stroke-linecap="round"/><g class="hand"><ellipse cx="23.8" cy="85.4" rx="3.6" ry="4" fill="#FFC792" stroke="#121214" stroke-width="1.2"/><ellipse cx="26.2" cy="84" rx="1.4" ry="2.2" fill="#FFC792" stroke="#121214" stroke-width="1.1"/></g><g class="tuck"><path d="M19 81.6c0 2.2 1.5 3.6 3.4 3.6s3.4-1.4 3.4-3.6z" fill="#FFC792" stroke="#121214" stroke-width="1.1"/><path d="M17.4 84.6c3.2-1.4 6.8-1.4 10 0" fill="none" stroke="#121214" stroke-width="1.3" stroke-linecap="round"/></g></g></g>
    <g data-j="armR"><path d="M56.2 48V64" stroke="#1F1F23" stroke-width="10" stroke-linecap="round"/><path d="M55 52.6c1.8.8 3.6.6 5.2-.4M54.6 60.6c2.2 1 4.6.9 6.2-.2" fill="none" stroke="#0C0C0E" stroke-width=".9" stroke-linecap="round"/><g data-j="foreR"><path d="M56.2 64V81.8" stroke="#1F1F23" stroke-width="9" stroke-linecap="round"/><path d="M53.2 70c2 1 4.2.9 6-.2" fill="none" stroke="#0C0C0E" stroke-width=".9" stroke-linecap="round"/><path d="M53.2 79.6h8.8" stroke="#121214" stroke-width="1" stroke-linecap="round"/><g class="hand"><ellipse cx="56.2" cy="85.4" rx="3.6" ry="4" fill="#FFC792" stroke="#121214" stroke-width="1.2"/><ellipse cx="53.8" cy="84" rx="1.4" ry="2.2" fill="#FFC792" stroke="#121214" stroke-width="1.1"/></g><g class="tuck"><path d="M54.2 81.6c0 2.2 1.5 3.6 3.4 3.6s3.4-1.4 3.4-3.6z" fill="#FFC792" stroke="#121214" stroke-width="1.1"/><path d="M52.6 84.6c3.2-1.4 6.8-1.4 10 0" fill="none" stroke="#121214" stroke-width="1.3" stroke-linecap="round"/></g></g></g>
    <g data-j="head">
      <rect x="35.8" y="29" width="8.4" height="15.4" rx="3" fill="#FFC792" stroke="#121214" stroke-width="1.2"/>
      <path d="M36.4 36.6c2.2 1.4 5 1.4 7.2 0" fill="none" stroke="#E0A472" stroke-width="1.6" stroke-linecap="round"/>
      <g transform="translate(25.003 0.4) scale(0.0412)"><path d="M331.707 0.205712C336.69 -0.55477 345.271 0.546766 339.57 7.72481C337.072 10.8702 330.816 14.8398 327.596 17.8658C319.318 25.6421 313.314 33.918 307.041 43.2501C352.077 26.9646 391.65 23.927 439.214 30.0684C473.919 34.0153 510.082 40.0992 543.496 26.0976C549.025 23.7782 555.791 17.7642 560.554 21.5427C561.944 24.1101 561.736 25.7547 560.965 28.5756C555.583 48.3255 538.34 62.0491 521.949 72.0456C560.04 76.1468 594.09 89.9506 626.904 109.345C653.343 124.975 680.309 142.295 711.885 143.931C716.386 144.164 722.417 144.446 726.354 146.493C728.222 151.349 725.975 155.219 722.748 158.906C709.032 174.585 692.139 183.149 672.257 188.243C708.01 221.329 727.322 264.026 723.372 313.975C723.274 315.266 721.333 316.296 720.299 316.737C716.19 316.584 710.624 308.832 707.483 305.656C701.966 300.079 696.768 295.68 690.449 291.043C693.663 307.459 693.651 330.762 690.424 346.917C689.206 353.016 684.087 358.82 681.932 365.009C673.255 389.927 664.952 415.177 655.988 439.983C670.469 438.574 683.811 444.518 692.022 456.59C706.559 477.96 706.73 509.499 702.487 534.01C695.825 572.463 677.566 613.279 645.016 636.43C629.096 647.562 613.035 652.264 593.87 648.829C590.906 661.375 586.014 674.032 582.028 686.339C562.104 747.827 512.96 793.352 463.859 832.545C451.84 842.146 439.294 850.724 425.351 857.276C418.965 860.099 412.389 862.481 405.678 864.403C368.107 875.045 312.086 872.467 278.61 851.422C233.119 822.828 185.316 780.597 155.631 735.36C139.869 711.339 129.652 676.481 122.109 649.319C100.289 653.103 80.5658 645.498 64.535 630.338C34.3282 601.774 18.1633 556.451 15.6921 515.463C14.4981 495.649 17.8927 468.983 31.7051 453.52C40.3808 444.212 48.8214 441.359 61.1587 440.791C47.1241 400.884 33.7569 366.89 28.605 324.611C23.1634 328.266 8.16563 340.345 4.56772 341.894C2.06217 341.626 3.15943 342.052 1.13515 340.606C0.636736 339.675 -0.0509 338.353 0.0029828 337.263C2.15462 293.63 19.7321 247.393 48.6475 214.937C42.9856 214.738 37.3168 214.829 31.6647 215.21C25.8104 215.652 7.23553 218.932 3.38168 217.713C0.67101 215.049 0.514888 212.764 3.05656 209.673C26.7209 180.898 54.3199 161.561 91.5199 156.585C84.3927 123.758 99.6433 94.4223 123.674 72.3015C125.745 70.3954 128.042 69.0496 130.894 69.3619C132.354 70.5062 133.531 72.6003 132.955 74.4219C126.255 95.6052 122.966 113.804 125.701 136.408C132.179 121.72 143.008 105.525 153.201 93.2026C198.091 39.8512 262.26 6.4206 331.707 0.205712Z" fill="#121214"/><path d="M658.363 455.108C669.152 454.208 679.72 462.254 683.449 471.996C703.202 523.656 675.293 605.19 625.378 630.411C619.402 633.43 605.233 636.534 599.006 634.22C595.449 628.078 615.3 592.124 600.188 590.618C591.267 589.583 589.583 607.364 588.193 613.579C573.228 680.565 551.099 736.267 498.374 782.698C474.145 804.036 445.514 832.57 413.79 845.447C380.089 859.132 332.835 858.709 298.976 844.467C255.793 823.655 204.336 776.838 176.048 738.795C169.451 729.837 163.667 720.31 158.763 710.323C144.994 682.225 137.37 650.917 129.384 620.804C128.047 615.765 124.159 594.781 120.933 592.265C119.64 591.248 117.988 590.795 116.355 591.016C107.246 592.161 110.759 603.421 112.099 609.226C114.067 617.755 116.22 626.29 118.31 634.795C112.779 635.659 109.549 635.659 104.108 634.82C54.5289 623.627 28.4 548.632 30.3563 503.242C30.9135 490.322 34.6829 470.93 45.0149 462.076C49.6788 458.084 55.7529 456.131 61.8723 456.658C73.0983 457.594 80.9615 465.965 87.6729 474.041C87.5076 479.993 86.0552 490.885 89.1033 495.6C91.0173 498.558 93.6074 498.631 96.8159 499.158C97.7974 503.107 98.7453 507.136 99.7954 511.073C101.78 518.519 104.729 536.955 115.717 525.45C119.883 548.203 129.785 580.049 147.567 595.228C174.43 616.512 212.302 615.073 243.948 613.836C299.538 611.656 315.093 578.984 328.961 530.667C334.239 512.279 332.957 504.54 356.252 504.179C365.124 504.038 372.557 505.458 379.176 511.869C383.781 532.008 392.672 558.582 402.56 576.92C411.776 594.004 424.609 604.811 443.781 609.636C474.965 617.486 529.614 617.296 557.786 601.241C586.411 584.923 593.226 544.885 600.665 515.972C600.702 518.457 600.617 525.021 602.013 526.375C611.197 535.277 614.522 517.582 615.398 513.363C616.683 507.185 617.394 503.805 618.263 498.949C630.895 496.329 627.215 485.993 627.093 475.008C637.049 463.601 642.645 457.098 658.363 455.108Z" fill="#FFC792"/><path d="M341.739 549.213C347.827 548.864 351.219 550.934 350.656 557.688C350.148 563.774 348.77 570.13 347.744 576.192L341.444 613.597C340.079 621.759 336.731 634.14 341.888 641.225C348.298 650.029 364.414 643.753 371.958 651.034C375.258 654.211 370.911 658.761 368.309 660.647C344.37 661.308 320.988 657.389 325.641 625.77C329.215 601.48 333.805 577.196 337.986 553.004C338.174 551.914 340.828 549.918 341.739 549.213Z" fill="#121214"/><path d="M658.038 486.856C670.768 486.226 676.793 500.358 667.712 503.664C666.114 503.646 664.461 502.831 663.157 501.889C653.421 494.823 643.575 514.588 639.896 521.543C651.621 526.221 656.513 535.81 656.758 548.05C657.04 562.182 650.997 576.259 641.426 586.515C635.848 592.497 626.596 594.806 628.286 583.307C629.835 581.035 632.621 578.543 634.624 576.443C640.055 570.705 641.818 566.113 644.292 558.545C646.306 552.367 645.878 535.357 637.673 533.581C631.164 532.173 631.746 546.25 625.69 550.757C611.038 553.585 625.225 524.256 627.374 520.056C634.072 507.001 642.761 490.732 658.038 486.856Z" fill="#121214"/><path d="M57.1301 489.82C70.4361 489.226 80.3597 502.562 86.4681 513.363C91.5643 522.376 100.359 539.368 99.3884 550.242C99.2977 551.265 96.6942 553.304 95.5609 553.518C87.5366 555.122 90.1297 541.578 83.5805 537.99C75.5868 538.425 75.5721 552.042 76.2738 557.908C77.5517 568.605 81.9983 576.283 89.5645 583.643C93.899 587.844 90.8706 595.577 85.2435 593.912C79.306 591.732 74.3769 584.66 71.4507 579.235C62.1167 561.937 58.787 535.822 79.4346 525.413C74.9458 516.057 69.2275 507.258 59.8225 502.482C47.6051 514.226 41.5072 495.741 57.1301 489.82Z" fill="#121214"/><path d="M510.914 261.221C511.979 262.379 513.932 267.213 514.618 268.9C523.166 289.992 528.971 311.958 531.64 334.561C532.283 339.987 531.652 356.652 534.114 359.63C539.459 362.47 541.97 356.065 544.327 352.177C552.471 338.712 558.9 324.587 564.515 309.942C570.35 332.822 574.104 354.72 574.924 378.41C574.538 380.479 577.679 384.391 579.712 383.432C585.045 380.916 591.346 370.543 594.683 365.892C600.249 400.417 604.511 428.57 604.094 463.876C561.429 455.531 517.876 452.614 474.482 455.2C451.33 456.535 417.886 459.713 397.233 470.746C391.441 473.839 387.406 477.806 383.089 482.65C362.044 478.541 351.274 479.025 330.682 482.809C327.113 478.694 323.682 475.333 319.078 472.375C285.593 450.847 194.867 452.987 154.806 457.086C139.819 458.684 124.938 461.152 110.239 464.476C108.44 434.546 109.998 416.211 124.763 389.718C121.672 357.528 127.895 337.167 150.521 313.906L159.162 306.092C154.325 315.998 134.665 367.898 145.63 372.783C148.963 372.446 168.343 352.655 172.792 348.894C203.141 323.242 235.36 302.242 270.861 284.392C255.749 317.894 237.555 343.661 206.657 363.308C205.579 363.993 204.745 365.325 204.444 366.582C204.928 369.277 204.32 368.214 206.064 370.022C211.23 371.905 232.563 369 238.054 367.821C303.261 353.815 356.595 318.243 393.908 263.745C385.906 295.038 374.315 322.871 352.596 347.484C348.518 352.104 336.294 360.763 336.333 366.182C340.45 372.553 373.206 364.448 380.579 362.307C435.227 346.436 482.925 311.179 510.914 261.221Z" fill="#FFC792"/><path d="M188.899 411.631C207.118 411.008 291.613 419.715 302.939 428.781C307.475 432.413 312.374 440.903 312.746 446.836C312.862 448.695 312.489 450.604 311.062 451.928C306.544 456.119 283.531 450.667 276.638 449.945C245.622 445.893 213.409 442.259 182.141 442.057C176.718 442.021 154.867 445.165 152.311 443.83C150.926 443.106 149.725 441.718 149.352 440.187C148.817 437.984 149.954 435.839 151.257 434.147C158.152 425.192 177.544 412.965 188.899 411.631Z" fill="#121214"/><path d="M517.412 411.692C536.895 410.618 545.027 419.959 559.245 431.204C567.658 437.86 564.186 446.277 554.389 444.166C541.488 441.387 530.754 441.998 517.791 442.619C494.089 443.923 470.43 446.005 446.856 448.861C440.28 449.664 407.564 455.696 403.829 452.658C402.709 451.747 402.103 450.537 401.925 449.116C401.301 444.03 406.236 434.543 409.53 430.761C419.627 419.166 499.037 412.568 517.412 411.692Z" fill="#121214"/><path d="M477.01 471.078C498.459 469.057 559.91 470.092 576.589 482.913C598.302 499.605 578.181 562.556 562.911 580.013C547.793 597.298 526.509 599.288 505.323 601.174C477.402 602.521 434.62 603.47 417.733 577.043C406.528 559.507 384.24 507.448 400.925 488.822C413.557 474.721 458.739 472.259 477.01 471.078Z" fill="#FFC792"/><path d="M192.265 471.077C221.967 468.818 282.036 470.832 308.128 485.136C332.877 498.698 307.292 561.215 295.241 577.931C284.06 593.44 270.662 597.224 252.319 600.127C250.571 600.359 248.818 600.561 247.062 600.721C221.864 603.023 177.861 602.943 156.91 586.227C137.054 570.387 116.859 507.901 134.451 485.534C143.848 473.582 176.726 472.094 192.265 471.077Z" fill="#FFC792"/><g class="eyes"><path d="M478.394 488.834C497.878 487.634 525.223 492.618 540.335 505.384C548.203 512.034 539.753 525.088 528.383 515.016C523.741 510.901 511.379 506.866 505.323 505.366C507.852 521.672 504.019 535.994 487.395 542.276C462.707 545.858 453.773 527.397 456.688 505.77C450.277 507.258 446.083 508.997 440.388 512.291C436.218 514.704 430.236 520.674 425.668 517.539C421.86 514.924 420.109 510.05 423.911 506.591C438.239 493.549 459.694 489.752 478.394 488.834Z" fill="#121214"/><path d="M225.156 488.834C244.536 487.475 276.933 492.618 291.064 507.699C295.006 512.254 287.63 520.851 283.069 518.182C273.881 512.799 268.212 509.199 257.967 506.211C260.026 522.719 255.496 539.563 236.711 542.784C234.529 542.974 232.334 542.949 230.159 542.698C211.207 540.678 206.722 521.255 209.087 505.378C195.791 508.262 189.975 511.734 178.447 518.769C175.922 520.306 170.311 516.498 170.268 512.855C170.159 503.535 185.51 498.043 192.65 494.981C202.712 490.989 214.344 489.52 225.156 488.834Z" fill="#121214"/></g><path d="M327.926 719.697C340.243 719.434 410.325 718.375 416.209 721.24C417.752 721.987 418.732 723.659 419.087 725.282C419.467 727.014 419.118 729.047 417.966 730.437C414.562 734.552 394.172 732.801 388.27 732.666C370.041 732.256 351.807 732.201 333.58 732.495C323.833 732.642 314.427 732.795 304.307 732.911C297.897 734.43 292.958 725.925 297.698 722.226C301.989 718.883 322.672 719.808 327.926 719.697Z" fill="#121214" class="mouth-s"/><ellipse class="mouth-o" cx="357" cy="728" rx="34" ry="26" fill="#5C2A21"/></g>
      <g data-j="hair"></g>
    </g>
  </g>
</svg></button><p class="speech empty" aria-hidden="true"><span class="tt"></span><span class="caret"></span><span class="more"></span></p>\`;
/* rig: every joint is posed each frame, so walking, sitting and waving follow simple body mechanics */
const J = {};
owner.el.querySelectorAll('[data-j]').forEach(g => { (J[g.dataset.j] = J[g.dataset.j] || []).push(g); });
const PIV = {thighL:[31.6, 82], shinL:[31.6, 110], thighR:[48.4, 82], shinR:[48.4, 110], armL:[23.8, 48], foreL:[23.8, 64], armR:[56.2, 48], foreR:[56.2, 64], lan:[40, 44], head:[40, 44], hair:[40, 10]};
const rig = {phase:0, amp:0, lean:0, sit:0, wave:0, fall:0, land:0, talk:0, pull:0, lan:0, lanV:0, hair:0, hairV:0, lastVx:0, t:0};
const pose = (k, deg) => { const [x, y] = PIV[k], t = \`rotate(\${deg.toFixed(2)} \${x} \${y})\`; J[k].forEach(g => g.setAttribute('transform', t)); };
const mix = (a, b, t) => a + (b - a) * t;
let waveT = 0;
function waveHand(ms) { owner.el.classList.add('waving'); clearTimeout(waveT); waveT = setTimeout(() => owner.el.classList.remove('waving'), ms); }
const approach = (v, target, rate, dt) => v + (target - v) * Math.min(1, rate * dt);
function tickRig(dt) {
  if (REDUCED) return;
  rig.t += dt;
  const cl = owner.el.classList, speed = Math.hypot(owner.vx || 0, owner.vy || 0), t = rig.t;
  // stride is tied to distance covered, so feet don't skate
  rig.phase += (speed * dt) / 54 * Math.PI;
  rig.amp = approach(rig.amp, owner.walking ? clamp(speed / 240, .35, 1) : 0, 9, dt);
  rig.lean = approach(rig.lean, owner.walking ? -clamp(speed / 620, 0, 1) * 9 : 0, 6, dt);
  rig.sit = approach(rig.sit, cl.contains('sitting') && !owner.walking ? 1 : 0, 5, dt);
  rig.wave = approach(rig.wave, cl.contains('waving') && !owner.walking ? 1 : 0, 10, dt);
  rig.fall = approach(rig.fall, cl.contains('falling') ? 1 : 0, 14, dt);
  rig.pull = approach(rig.pull, cl.contains('pulling') ? 1 : 0, 10, dt);
  rig.talk = approach(rig.talk, cl.contains('talking') ? 1 : 0, 8, dt);
  const crossWant = !owner.walking && !cl.contains('talking') && !cl.contains('waving') && !cl.contains('sitting') && !cl.contains('pulling') && !cl.contains('falling') ? 1 : 0;
  rig.cross = approach(rig.cross || 0, crossWant, crossWant ? 3 : 14, dt);   // folds slowly, unfolds fast
  rig.land = Math.max(0, rig.land - dt * 4.5);
  const A = rig.amp, ph = rig.phase, sph = Math.sin(ph), cph = Math.cos(ph);
  // legs: thigh swings from the hip, the knee bends while that leg swings through
  // relaxed A-stance when still (feet a little apart), full stride when walking
  let thL = -26 * A * sph + 3.5 * (1 - A), knL = 46 * A * Math.max(0, cph);
  let thR = 26 * A * sph - 3.5 * (1 - A), knR = 46 * A * Math.max(0, -cph);
  // arms swing against the legs, elbows soften on the forward swing
  let arL = 22 * A * sph, fL = -8 - 20 * A * Math.max(0, -sph);
  let arR = -22 * A * sph, fR = -8 - 20 * A * Math.max(0, sph);
  // body rises as the legs pass under it, and breathes when standing
  let bodyY = -2.4 * A * (1 + Math.cos(2 * ph)) / 2 + (1 - A) * .6 * Math.sin(t * 2.2);
  let lean = rig.lean;
  // a light gesture while talking
  arL += rig.talk * 6 * Math.sin(t * 5); fL -= rig.talk * (14 + 10 * Math.sin(t * 7));
  // standing still: arms folded across the chest
  // standing still: hands in the jeans pockets, elbows a little out
  if (rig.cross > .001) { const k = rig.cross; arL = mix(arL, 6, k); fL = mix(fL, -24, k); arR = mix(arR, -6, k); fR = mix(fR, 24, k); }
  owner.el.classList.toggle('pockets', rig.cross > .55);
  // sitting on an edge: thighs forward, shins hang and swing, hands on the knees
  if (rig.sit > .001) {
    const k = rig.sit, dangle = 12 * Math.sin(t * 2.4), dangle2 = 12 * Math.sin(t * 2.4 + 1.3);
    thL = mix(thL, -86, k); knL = mix(knL, 84 + dangle, k); thR = mix(thR, -82, k); knR = mix(knR, 80 + dangle2, k);
    arL = mix(arL, -34, k); fL = mix(fL, -38, k); arR = mix(arR, -26, k); fR = mix(fR, -44, k);
    bodyY += 62 * k; lean = mix(lean, 4, k);
  }
  // waving: upper arm up, the forearm does the waving from the elbow
  if (rig.wave > .001) { arR = mix(arR, -150, rig.wave); fR = mix(fR, -14 + 26 * Math.sin(t * 14), rig.wave); }
  // reaching for the frame's corner handle
  if (rig.pull > .001) { arR = mix(arR, -72, rig.pull); fR = mix(fR, -18, rig.pull); lean = mix(lean, -6, rig.pull); }
  // falling: arms up, knees tucked a little
  if (rig.fall > .001) { const k = rig.fall; arL = mix(arL, 150, k); arR = mix(arR, -150, k); fL = mix(fL, 20, k); fR = mix(fR, -20, k); thL = mix(thL, -18, k); knL = mix(knL, 30, k); thR = mix(thR, 12, k); knR = mix(knR, 22, k); }
  // landing: knees give, body dips, then springs back
  if (rig.land > 0) { const k = Math.sin(rig.land * Math.PI / 2); thL -= 28 * k; knL += 56 * k; thR -= 24 * k; knR += 50 * k; bodyY += 7 * k; }
  // secondary motion: the lanyard card and the hair swing from changes in speed
  const vx = (owner.vx || 0) * (owner.face || 1), ax = (vx - rig.lastVx) / Math.max(dt, .008); rig.lastVx = vx;
  rig.lanV += (-60 * rig.lan - 5 * rig.lanV + clamp(ax, -3000, 3000) * .018 + (lean - rig.lan) * 4) * dt; rig.lan += rig.lanV * dt;
  rig.hairV += (-80 * rig.hair - 7 * rig.hairV + clamp(ax, -3000, 3000) * .012) * dt; rig.hair += rig.hairV * dt;
  const headTilt = -lean * .35 + rig.talk * 2.5 * Math.sin(t * 6.5) + (1 - A) * 1.2 * Math.sin(t * .9);
  J.body[0].setAttribute('transform', \`translate(0 \${bodyY.toFixed(2)}) rotate(\${lean.toFixed(2)} 40 82)\`);
  pose('thighL', thL); pose('shinL', knL); pose('thighR', thR); pose('shinR', knR);
  pose('armL', arL); pose('foreL', fL); pose('armR', arR); pose('foreR', fR);
  pose('lan', clamp(rig.lan, -40, 40)); pose('head', headTilt); pose('hair', clamp(rig.hair, -8, 8));
}
cursorLayer.appendChild(owner.el);
const dude = owner.el.querySelector('.dude'), speech = owner.el.querySelector('.speech'), tagTT = owner.el.querySelector('.tt');
owner.el.querySelector('.more').textContent = TOUCH ? '(tap me)' : '(click me)';
let tagW = 0, tagHover = false, tagFocus = false;
function measureTag() { tagW = speech.offsetWidth; }
[dude, speech].forEach(el => {
  el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') tagHover = true; });
  el.addEventListener('pointerleave', () => { tagHover = false; });
  el.addEventListener('click', () => narrate(narr.i + 1));
});
dude.addEventListener('focus', () => { tagFocus = dude.matches(':focus-visible'); });
dude.addEventListener('blur', () => { tagFocus = false; });

// where the doodle's feet go for each line, and which side it talks from
function targetPoint(key, sr) {
  const W = stage.clientWidth;
  if (key === 'home') {
    if (!frameBox) return null;
    if (short) return {x:Math.max(40, frameBox.x - 34), y:frameBox.y + frameBox.h, side:'right'};
    return {x:frameBox.x + frameBox.w * (bp === 'sm' ? .86 : .74), y:frameBox.y, side:'left'};
  }
  if (key === 'id') {
    if (bp === 'sm' || short) return targetPoint('home', sr);
    const r = $('#idcard').getBoundingClientRect(); return {x:r.left - sr.left - 26, y:r.bottom - sr.top, side:'left'};
  }
  if ((bp === 'sm' || short) && (String(key).startsWith('chip') || key === 'status')) return targetPoint('home', sr);
  if (key === 'chips' || String(key).startsWith('chip:')) {
    const i = key === 'chips' ? 1 : +key.slice(5), r = chips[i].getBoundingClientRect(), dk = $('#dock').getBoundingClientRect();
    return {x:Math.min(r.left + r.width / 2, dk.left - 50) - sr.left, y:r.bottom - sr.top + 150, side:i < 2 ? 'right' : 'left'};
  }
  if (key === 'coffee' || key === 'cat') {
    const el = stickerEls.get(key); if (!el || el.style.display === 'none') return targetPoint('home', sr);
    const r = el.getBoundingClientRect();
    return {x:r.right - sr.left + 24, y:r.bottom - sr.top - 4};
  }
  if (key === 'status') {
    const r = statusLine.getBoundingClientRect();
    return bp === 'sm' ? {x:r.left - sr.left + 20, y:r.bottom - sr.top + 70} : {x:r.right - sr.left + 34, y:r.bottom - sr.top + 20};
  }
  return null;
}
function tickOwner(dt) {
  if (owner.target === null) return;
  const sr = stage.getBoundingClientRect(), p = typeof owner.target === 'object' ? owner.target : targetPoint(owner.target, sr);
  const W = stage.clientWidth, H = stage.clientHeight;
  if (p) { owner.tx = clamp(p.x, 30, W - 30); owner.ty = clamp(p.y, 90, H - 8); owner.side = p.side || 'right'; }
  const dx = owner.tx - owner.x, dy = owner.ty - owner.y, d = Math.hypot(dx, dy);
  owner.vx = owner.vx || 0; owner.vy = owner.vy || 0;
  if (REDUCED || owner.snap) { owner.x = owner.tx; owner.y = owner.ty; owner.vx = owner.vy = 0; }
  else if (d < 1.2 && Math.hypot(owner.vx, owner.vy) < 30) { owner.x = owner.tx; owner.y = owner.ty; owner.vx = owner.vy = 0; }
  else {
    // arrive: speed up towards a cruising pace, then brake so he eases to a stop on the spot
    const vmax = clamp(d * 2.1, 240, 780), want = Math.min(vmax, Math.sqrt(2 * 3400 * d));
    const wx = dx / (d || 1) * want, wy = dy / (d || 1) * want, acc = 4400 * dt;
    const ex = wx - owner.vx, ey = wy - owner.vy, el = Math.hypot(ex, ey), k = el > acc ? acc / el : 1;
    owner.vx += ex * k; owner.vy += ey * k;
    owner.x += owner.vx * dt; owner.y += owner.vy * dt;
    if (Math.abs(owner.vx) > 25) owner.face = owner.vx < 0 ? -1 : 1;
  }
  const walking = !REDUCED && Math.hypot(owner.vx, owner.vy) > 18;
  if (walking !== owner.walking) { owner.walking = walking; owner.el.classList.toggle('walking', walking); }
  // turns to look at the cursor when it comes close, waves, and sits down after a quiet spell
  const now = performance.now(), hx = owner.x, hy = owner.y - 110;
  const near = !walking && ptr.inside && ptr.mouse && Math.hypot(ptr.x - hx, ptr.y - hy) < 150;
  if (near) {
    owner.quietSince = now;
    if (owner.el.classList.contains('sitting')) owner.el.classList.remove('sitting');
    if (!owner.noticed && now > owner.waveCool) {
      owner.noticed = true; owner.waveCool = now + 7000;
      waveHand(1700);
      if (narr.phase === 'idle') { const keep = tagTT.textContent; setTagText('oh, hey!'); setTimeout(() => { if (narr.phase === 'idle') setTagText(keep); }, 1600); }
    }
  } else owner.noticed = false;
  if (walking || narr.phase !== 'idle') owner.quietSince = now;
  else if (!REDUCED && now - owner.quietSince > 9000) owner.el.classList.add('sitting');
  owner.el.classList.toggle('left', walking ? owner.face < 0 : near ? ptr.x < owner.x - 4 : owner.side === 'left');
  owner.el.style.transform = \`translate(\${owner.x.toFixed(1)}px, \${owner.y.toFixed(1)}px)\`;
  // speech sits beside the head, flipping sides near an edge
  const gap = bp === 'sm' ? 22 : 28;
  let left = owner.side === 'left' ? -gap - tagW : gap;
  if (owner.side !== 'left' && owner.x + left + tagW > W - 12) left = -gap - tagW;
  if (owner.side === 'left' && owner.x + left < 12 && owner.x + gap + tagW < W - 12) left = gap;
  left = clamp(left, 12 - owner.x, W - 12 - tagW - owner.x);
  speech.style.translate = \`\${left.toFixed(0)}px 0\`;
  speech.style.textAlign = left < 0 ? 'right' : 'left';
  speech.classList.toggle('tail-r', left < 0); speech.classList.toggle('tail-l', left >= 0);
}

const narr = {i:0, phase:'off', full:'', shown:0, acc:0, t:0, hold:0, moveT:0, auto:!REDUCED && CFG.narrate !== false};
function setTagText(t) { if (tagTT.textContent !== t) { tagTT.textContent = t; speech.classList.toggle('empty', !t); measureTag(); } }
function narrate(i, text, at) {
  narr.i = ((i % LINES.length) + LINES.length) % LINES.length;
  const L = LINES[narr.i];
  narr.full = text || (typeof L.t === 'function' ? L.t() : L.t);
  owner.target = at || L.at;
  narr.shown = 0; narr.acc = 0; narr.t = 0; narr.moveT = 0;
  narr.hold = 2600 + narr.full.length * 45;
  narr.phase = 'move';
  owner.el.classList.remove('idle', 'waving', 'talking', 'sitting');
  owner.quietSince = performance.now();
  setTagText('');
}
const paused = () => tagHover || tagFocus || !!dragKey || document.hidden;
function tickNarr(dt) {
  if (narr.phase === 'off' || narr.phase === 'idle') return;
  const ms = dt * 1000;
  if (narr.phase === 'move') {
    narr.moveT += ms;
    if ((!owner.walking && narr.moveT > 120) || narr.moveT > 2600) { narr.phase = 'type'; owner.el.classList.add('talking'); if (narr.i === 0 || Math.random() < .35) waveHand(1300); }
  } else if (narr.phase === 'type') {
    if (REDUCED) narr.shown = narr.full.length;
    else { narr.acc += ms; while (narr.acc > 38 && narr.shown < narr.full.length) { narr.acc -= 38; narr.shown++; } }
    setTagText(narr.full.slice(0, narr.shown));
    if (narr.shown >= narr.full.length) { narr.phase = 'hold'; narr.t = 0; owner.el.classList.remove('talking'); }
  } else if (narr.phase === 'hold') {
    if (!narr.auto) { narr.phase = 'idle'; owner.el.classList.add('idle'); measureTag(); return; }
    if (paused()) return;
    narr.t += ms;
    if (narr.t >= narr.hold) {
      if (narr.i === LINES.length - 1) { narr.auto = false; narrate(0); }
      else narrate(narr.i + 1);
    }
  }
}

const clockFmt = new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Kolkata', hour:'numeric', minute:'2-digit', second:'2-digit', hour12:true});
const tickClock = () => { $('#clockTop').textContent = clockFmt.format(new Date()); };
tickClock(); setInterval(tickClock, 1000);

/* ---------------- stakeholder cursors ---------------- */
const ARROW = c => \`<svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true"><path d="M2.5 2.2v16l4.3-4 3.1 6.6 3-1.3-3-6.5 6.3-.3z" fill="\${c}" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>\`;
function makeCursor(name, color) {
  const el = document.createElement('button');
  el.type = 'button'; el.className = 'cur bot'; el.style.setProperty('--c', color);
  el.tabIndex = -1; el.dataset.ui = ''; el.setAttribute('aria-hidden', 'true'); el.title = \`Remove \${name} from the file\`;
  el.innerHTML = \`\${ARROW(color)}<span class="pill"><span class="nm"></span><span class="msg"></span></span>\`;
  el.querySelector('.nm').textContent = name;
  return el;
}
function say(c, text, ms = 3000) { c.msg.textContent = text; c.el.classList.add('talk'); c.talkUntil = performance.now() + ms; }
const bots = [];
function botBounds() { const W = stage.clientWidth, H = stage.clientHeight; return {x0:24, x1:W - (bp === 'sm' ? 180 : 150), y0:24, y1:bp === 'sm' ? H * .5 : H - 250}; }
function joinBots() {
  return;   // Client and Dev cursors are switched off
  if (CFG.stakeholders === false || bots.length) return;
  const W = stage.clientWidth, H = stage.clientHeight, bb = botBounds();
  BOTS.forEach((d, k) => {
    const el = makeCursor(d.name, d.c);
    const b = {...d, el, msg:el.querySelector('.msg'), x:k === 0 ? -40 : k === 1 ? W + 20 : W * .45, y:k === 2 ? -40 : H * rand(.3, .5),
      tx:rand(bb.x0 + 60, bb.x1 - 60), ty:rand(bb.y0 + 30, bb.y1 - 30), speed:.03, next:performance.now() + rand(1400, 3200),
      task:null, talkUntil:0, gone:false, li:randi(d.lines.length), fleeing:false, flees:0, fleeSay:0, tiredUntil:0};
    if (REDUCED) { b.x = b.tx; b.y = b.ty; }
    el.addEventListener('click', () => kick(b));
    cursorLayer.appendChild(el); bots.push(b);
  });
  toast('Client and Dev joined the file');
}
function nextLine(b) { b.li = (b.li + 1) % b.lines.length; return b.lines[b.li]; }
function kick(b) {
  if (b.gone) return;
  b.gone = true; b.el.classList.add('leaving');
  toast(\`\${b.name} was removed from the file\`);
  setTimeout(() => { b.el.hidden = true; }, 320);
  setTimeout(() => {
    const bb = botBounds();
    b.gone = false; b.el.hidden = false; b.el.classList.remove('leaving'); b.x = -40; b.y = rand(bb.y0, bb.y1);
    b.tx = rand(bb.x0 + 60, bb.x1 - 60); b.ty = rand(bb.y0, bb.y1); b.task = null; b.flees = 0;
    say(b, pick(REJOIN), 3200);
  }, 24000);
}
/* sticky to-do: the last item is for the visitor */
const todo = $('#todo'), todoLast = $('#todoLast');
if (CFG.contactUrl) $('#todoGo').href = CFG.contactUrl;
// open contact links in the whole browser tab, never inside the hero's own frame
// In Framer, the SrishtiHero component opens the link for us, exactly like any other Framer link.
// Anywhere else, the link just opens in the whole tab (target="_top").
function openLink(url, newTab) {
  if (CFG.hostNav && window.parent !== window) { window.parent.postMessage({srishtiHero:'go', url:url, newTab:!!newTab}, '*'); return true; }
  return false;
}
[$('#todoGo'), statusLine].forEach(a => a.addEventListener('click', e => {
  if (openLink(CFG.contactUrl || a.getAttribute('href'), false)) { e.preventDefault(); e.stopPropagation(); }
}));
// the resume button stays a plain link (opens in a new tab): phones only allow new tabs from a real tap on a link
$('#todoBtn').addEventListener('click', () => {
  const on = !todoLast.classList.contains('checked');
  todoLast.classList.toggle('checked', on);
  if (on) {
    burst(todoLast);
    if (introDone && !introPlaying) narrate(narr.i, 'yay! let’s talk', 'home');
    react('todo');
  }
});
function burst(el) {
  if (REDUCED) return;
  const sr = stage.getBoundingClientRect(), r = el.getBoundingClientRect(), cx = r.left - sr.left + 20, cy = r.top - sr.top + r.height / 2;
  ['#D6334F', '#00C8F6', '#7D39FF', '#00D07A', '#FF861D', '#16123F'].forEach((c, k) => {
    for (let j = 0; j < 2; j++) {
      const d = document.createElement('i'), ang = rand(0, Math.PI * 2), dist = rand(40, 90);
      d.style.cssText = \`position:absolute;left:\${cx}px;top:\${cy}px;width:7px;height:7px;border-radius:\${k % 2 ? '50%' : '1px'};background:\${c};z-index:700;pointer-events:none\`;
      stage.appendChild(d);
      d.animate([{transform:'translate(-50%,-50%) scale(1)', opacity:1}, {transform:\`translate(calc(-50% + \${Math.cos(ang) * dist}px), calc(-50% + \${Math.sin(ang) * dist + 30}px)) rotate(\${rand(-200, 200)}deg) scale(.6)\`, opacity:0}], {duration:rand(700, 1000), easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish = () => d.remove();
    }
  });
}
const ADJ = ['Curious', 'Sleepy', 'Cosmic', 'Chill', 'Sneaky', 'Fuzzy', 'Brave', 'Happy'], ANIMAL = ['Otter', 'Capybara', 'Panda', 'Koala', 'Fox', 'Owl', 'Penguin', 'Red Panda', 'Llama', 'Hedgehog'];
const visitorName = \`\${ADJ[randi(ADJ.length)]} \${ANIMAL[randi(ANIMAL.length)]}\`;

let lastReact = 0;
function react(evt, extra) {
  const now = performance.now(); if (now - lastReact < 1400) return;
  const opts = (REACT[evt] || []).filter(([id]) => bots.some(b => b.id === id && !b.gone)); if (!opts.length) return;
  lastReact = now;
  const [id, text] = pick(opts), b = bots.find(x => x.id === id);
  setTimeout(() => say(b, text.replace('{c}', extra || ''), 3200), 380);
}
function decide(b, now, bb) {
  const vis = S.letters.map((_, i) => i).filter(i => !S.letters[i].hidden && !isSel('g', i) && dragKey !== 'g' + i);
  if (Math.random() < .2 && vis.length) {
    const i = pick(vis), sr = stage.getBoundingClientRect(), r = glyphs[i].getBoundingClientRect();
    b.tx = r.left - sr.left + r.width * rand(.3, .7); b.ty = r.top - sr.top + r.height * rand(.3, .7); b.task = {i}; b.speed = .045;
  } else {
    b.tx = rand(bb.x0, bb.x1); b.ty = rand(bb.y0, bb.y1); b.speed = .03; b.task = null;
    if (Math.random() < .15 && !b.talkUntil) say(b, nextLine(b));
  }
  b.next = now + rand(4500, 9000);
}
function doTask(b) {
  const i = b.task.i; b.task = null;
  const L = S.letters[i]; if (L.hidden || isSel('g', i) || dragKey === 'g' + i) return;
  const g = glyphs[i], ddx = rand(-18, 18), ddy = rand(-10, 10), W = stage.clientWidth;
  L.dx = clamp(L.dx + ddx, -W * .3, W * .3); L.dy = clamp(L.dy + ddy, -140, 140); L.rot = clamp(L.rot + rand(-7, 7), -22, 22);
  g.classList.add('ease'); placeGlyph(i); touchFrame(600); setTimeout(() => g.classList.remove('ease'), 560);
  b.tx = b.x + ddx; b.ty = b.y + ddy; b.speed = .08;
  if (Math.random() < .5 && !b.talkUntil) say(b, pick(NUDGE[b.id]));
}
function tickBots(now) {
  const bb = botBounds();
  for (const b of bots) {
    if (b.gone) continue;
    if (!REDUCED) {
      const dp = Math.hypot(b.x - ptr.x, b.y - ptr.y), tired = now < b.tiredUntil;
      if (ptr.inside && ptr.mouse && dp < 105 && !tired && !dragKey) {
        if (!b.fleeing) {
          b.fleeing = true; b.flees++;
          if (b.flees >= 4) { b.tiredUntil = now + 9000; b.flees = 0; b.fleeing = false; b.tx = b.x; b.ty = b.y; say(b, 'ok fine. you got me', 2600); continue; }
          if (now > b.fleeSay) { say(b, pick(FLEE), 1800); b.fleeSay = now + 4500; }
        }
        const a = Math.atan2(b.y - ptr.y || .1, b.x - ptr.x || .1);
        b.tx = clamp(b.x + Math.cos(a) * 210, bb.x0, bb.x1); b.ty = clamp(b.y + Math.sin(a) * 210, bb.y0, bb.y1);
        if (Math.hypot(b.tx - b.x, b.ty - b.y) < 40) { b.tx = rand(bb.x0, bb.x1); b.ty = rand(bb.y0, bb.y1); }
        b.speed = .13; b.task = null; b.next = now + 1500;
      } else {
        if (dp > 170) b.fleeing = false;
        if (!tired && now > b.next && !b.task) decide(b, now, bb);
      }
      b.x += (b.tx - b.x) * b.speed; b.y += (b.ty - b.y) * b.speed;
      if (b.task && Math.hypot(b.tx - b.x, b.ty - b.y) < 5) doTask(b);
    }
    if (b.talkUntil && now > b.talkUntil) { b.el.classList.remove('talk'); b.talkUntil = 0; }
    b.el.style.transform = \`translate(\${b.x.toFixed(1)}px, \${b.y.toFixed(1)}px)\`;
  }
}

/* ---------------- ID card: swing + flip ---------------- */
const lan = $('#lanyard'), swing = $('#swing'), idcard = $('#idcard');
const pend = {th:0, om:0, drag:false};
(function barcode() {
  const seq = [2,1,1,3,1,2,2,1,3,1,1,2,1,1,3,2,1,2,1,1,2,3,1,1,2,1,2,1,3,1,1,2,1,2,2,1,1,3,1,2];
  let x = 0, s = '';
  seq.forEach((w, i) => { if (i % 2 === 0) s += \`<rect x="\${x}" y="0" width="\${w}" height="16" fill="#16123F"/>\`; x += w; });
  $('#barcode').outerHTML = \`<svg class="id-bar" viewBox="0 0 \${x} 16" preserveAspectRatio="none" aria-hidden="true">\${s}</svg>\`;
})();
idcard.addEventListener('pointerdown', e => {
  if (tool !== 'move' || e.button > 0) return;
  e.stopPropagation(); e.preventDefault(); clearSel();
  const pr = lan.getBoundingClientRect(), px = pr.left, py = pr.top;
  const ang = ev => -Math.atan2(ev.clientX - px, ev.clientY - py);
  const off = pend.th - ang(e), sx = e.clientX, sy = e.clientY;
  let lastTh = pend.th, lastT = performance.now(), travel = 0;
  pend.drag = true; idcard.classList.add('grab'); idcard.setPointerCapture(e.pointerId);
  const mv = ev => {
    travel = Math.max(travel, Math.hypot(ev.clientX - sx, ev.clientY - sy));
    if (travel < 5) return;
    const th = clamp(ang(ev) + off, -1.35, 1.35), now = performance.now(), dt = Math.max(.008, (now - lastT) / 1000);
    pend.om = pend.om * .4 + ((th - lastTh) / dt) * .6; lastTh = th; lastT = now; pend.th = th;
    swing.style.transform = \`rotate(\${th}rad)\`;
  };
  const up = () => {
    pend.drag = false; idcard.classList.remove('grab');
    idcard.removeEventListener('pointermove', mv); idcard.removeEventListener('pointerup', up); idcard.removeEventListener('pointercancel', up);
    if (travel < 5) {
      const back = idcard.classList.toggle('flipped');
      pend.om += .8;
      if (back) narrate(lineOf('id'), 'things i’m good at', 'id');
      else narrate(lineOf('id'));
    } else pend.om = clamp(pend.om, -9, 9);
  };
  idcard.addEventListener('pointermove', mv); idcard.addEventListener('pointerup', up); idcard.addEventListener('pointercancel', up);
});
idcard.addEventListener('pointermove', e => {
  const r = idcard.getBoundingClientRect();
  idcard.style.setProperty('--gx', (100 - clamp((e.clientX - r.left) / r.width, 0, 1) * 100).toFixed(1) + '%');
  if (!pend.drag && e.pointerType === 'mouse' && !REDUCED) pend.om += clamp(-e.movementX * .045, -.5, .5);
});
function tickPend(dt) {
  if (pend.drag) return;
  if (Math.abs(pend.th) < .0008 && Math.abs(pend.om) < .0008) { if (pend.th !== 0) { pend.th = 0; pend.om = 0; swing.style.transform = 'rotate(0rad)'; } return; }
  const a = -30 * Math.sin(pend.th) - 1.35 * pend.om;
  pend.om += a * dt; pend.th += pend.om * dt;
  swing.style.transform = \`rotate(\${pend.th.toFixed(4)}rad)\`;
}

/* ---------------- loop ---------------- */
function tickWob() {
  for (const [k, v] of wob) {
    const nv = v * .84;
    if (Math.abs(nv) < .05) wob.delete(k); else wob.set(k, nv);
    if (k[0] === 'g') placeGlyph(+k.slice(1)); else { const s = findSticker(k.slice(1)); if (s) placeSticker(s); }
  }
}
let running = true, lastT = performance.now();
/* ---------------- the wavy line ---------------- */
const ropeSvg = $('#rope'), ropeFill = $('#ropeFill'), ropeLine = $('#ropeLine');
const ROPE_N = 60, rp = Array.from({length:ROPE_N}, () => ({y:0, v:0, side:0}));
let ropeT = 0;
if (CFG.wave === false) ropeSvg.style.display = 'none';
if (CFG.pageColor) $('#pageBg').setAttribute('fill', CFG.pageColor);
function applyOwnGridTransparency(active) {
  ownGridOffActive = !!active;
  document.documentElement.classList.toggle('own-grid-off', ownGridOffActive);
  stage.classList.toggle('own-grid-off', ownGridOffActive);
  if (ownGridOffActive) {
    $('#pageBg').setAttribute('fill', 'transparent');
    $('#pageLines').setAttribute('stroke', 'transparent');
    ropeFill.setAttribute('fill', 'none');
  } else {
    $('#pageBg').setAttribute('fill', CFG.pageColor || '#FFFFFF');
    $('#pageLines').setAttribute('stroke', 'rgba(0,0,0,.04)');
    ropeFill.setAttribute('fill', 'url(#pageGrid)');
  }
  setCanvas(THEMES[S.theme]);
  alignGrid();
  if (ownGridOffActive && window.parent !== window) {
    window.parent.postMessage({srishtiHero:'introDone'}, '*');
  }
}

/* ---------------- grid that lines up with the website ----------------
   The website's page has its own grid behind everything. So the hero's grid carries on seamlessly into it,
   the hero reads that grid (its cell size, line colour and where its lines fall) and draws its own grid to
   match, including the white area under the curve. If the website's grid can't be read (for example it's an
   image), the Grid size setting is used, lined up with the page's top-left corner. */
function hostGrid(host) {
  // look for a large element on the website whose background is a CSS line grid
  let best = null;
  try {
    const els = host.document.querySelectorAll('body, body *');
    for (let i = 0; i < els.length && i < 4000; i++) {
      const el = els[i]; if (el.tagName === 'IFRAME') continue;
      const cs = host.getComputedStyle(el), bi = cs.backgroundImage;
      if (!bi || bi.indexOf('linear-gradient') < 0 || (bi.match(/linear-gradient/g) || []).length < 2) continue;
      const sz = cs.backgroundSize.match(/^([\\d.]+)px(?: ([\\d.]+)px)?/);
      if (!sz) continue;
      const gs = parseFloat(sz[1]), gs2 = sz[2] ? parseFloat(sz[2]) : gs;
      if (gs < 8 || gs > 400 || Math.abs(gs - gs2) > .5) continue;
      const r = el.getBoundingClientRect(), area = r.width * r.height;
      if (area < host.innerWidth * 200) continue;
      if (!best || area > best.area) {
        const pos = cs.backgroundPosition.split(',')[0].trim().split(/\\s+/).map(v => parseFloat(v) || 0);
        const col = (bi.match(/rgba?\\([^)]*\\)|#[0-9a-f]{3,8}/i) || [null])[0];
        best = {area, size: gs, color: col, ox: r.left + (pos[0] || 0), oy: r.top + (pos[1] || 0)};
      }
    }
  } catch (e) {}
  return best;
}
function alignGrid() {
  if (ownGridOffActive) {
    const size = +CFG.gridSize || 80;
    stage.style.setProperty('--grid-s', size.toFixed(3) + 'px');
    stage.style.setProperty('--grid-x', '0px');
    stage.style.setProperty('--grid-y', '0px');
    const pat = $('#pageGrid');
    pat.setAttribute('width', size);
    pat.setAttribute('height', size);
    pat.setAttribute('patternTransform', 'translate(0 0)');
    $('#pageBg').setAttribute('width', size);
    $('#pageBg').setAttribute('height', size);
    $('#pageLines').setAttribute('d', 'M.5 0V' + size + 'M0 .5H' + size);
    return;
  }
  let host = null, frame = null;
  try { if (window.parent !== window) { host = window.parent; frame = window.frameElement; host.document; } } catch (e) { host = null; }
  let size = +CFG.gridSize || 80, ox = 0, oy = 0, color = null;
  if (host && frame) {
    const fr = frame.getBoundingClientRect(), k = fr.width ? fr.width / innerWidth : 1;
    const g = CFG.gridSize && CFG.gridMatch === false ? null : hostGrid(host);
    if (g) { size = g.size / k; color = g.color; ox = (g.ox - fr.left) / k; oy = (g.oy - fr.top) / k; }
    else if (CFG.gridAlign !== 'hero') {
      // line the grid up with the website page's own top-left corner
      ox = (-(fr.left + host.scrollX)) / k; oy = (-(fr.top + host.scrollY)) / k;
    }
  }
  const m = v => ((v % size) + size) % size;
  const gx = m(ox), gy = m(oy);
  stage.style.setProperty('--grid-s', size.toFixed(3) + 'px');
  stage.style.setProperty('--grid-x', gx.toFixed(2) + 'px');
  stage.style.setProperty('--grid-y', gy.toFixed(2) + 'px');
  const pat = $('#pageGrid');
  pat.setAttribute('width', size); pat.setAttribute('height', size);
  pat.setAttribute('patternTransform', \`translate(\${gx.toFixed(2)} \${gy.toFixed(2)})\`);
  $('#pageBg').setAttribute('width', size); $('#pageBg').setAttribute('height', size);
  $('#pageLines').setAttribute('d', \`M.5 0V\${size}M0 .5H\${size}\`);
  if (color) { $('#pageLines').setAttribute('stroke', color); hostGridColor = color; setCanvas(THEMES[S.theme]); }
}
alignGrid();
addEventListener('resize', () => requestAnimationFrame(alignGrid));
setTimeout(alignGrid, 1200); setTimeout(alignGrid, 4000);        // the website may still be laying out when the hero starts
function ropeBase(u, H) {
  const [a0, a1, a2] = bp === 'sm' ? [60, 112, 78] : bp === 'md' ? [64, 150, 90] : [70, 170, 100];
  return H - (a0 * (1 - u) * (1 - u) + 2 * a1 * u * (1 - u) + a2 * u * u);
}
function tickRope(dt) {
  if (CFG.wave === false) return;
  const W = stage.clientWidth, H = stage.clientHeight;
  ropeT += dt;
  const vy = ptrPrevY === null || !ptr.inside ? 0 : (ptr.y - ptrPrevY) / Math.max(dt, .008);
  ptrPrevY = ptr.inside ? ptr.y : null;
  const j = Math.round(clamp(ptr.x / W, 0, 1) * (ROPE_N - 1));
  // the cursor plucks the line when it crosses it
  if (ptr.inside && !REDUCED) {
    const u = j / (ROPE_N - 1), ly = ropeBase(u, H) + rp[j].y, side = Math.sign(ptr.y - ly);
    if (rp[j].side && side && side !== rp[j].side && Math.abs(ptr.y - ly) < 60) {
      for (let k = -6; k <= 6; k++) { const q = rp[j + k]; if (q) q.v += clamp(vy, -1400, 1400) * .55 * Math.exp(-(k * k) / 10); }
    }
    rp[j].side = side;
  }
  // springy string: each point pulls on its neighbours and eases back to rest
  const sub = 3, h = dt / sub;
  for (let n = 0; n < sub; n++) {
    for (let i = 1; i < ROPE_N - 1; i++) {
      const p = rp[i], lap = rp[i - 1].y + rp[i + 1].y - 2 * p.y;
      p.v += (1800 * lap - 26 * p.y - 5 * p.v) * h;
    }
    for (let i = 1; i < ROPE_N - 1; i++) rp[i].y += rp[i].v * h;
  }
  let line = '', prev = null;
  const pts = rp.map((p, i) => {
    const u = i / (ROPE_N - 1);
    const drift = REDUCED ? 0 : 5 * Math.sin(ropeT * .7 + u * 6.2) + 2.2 * Math.sin(ropeT * 1.55 - u * 11);
    return [u * W, ropeBase(u, H) + p.y + drift];
  });
  line = \`M\${pts[0][0].toFixed(1)} \${pts[0][1].toFixed(1)}\`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
    line += \`Q\${pts[i][0].toFixed(1)} \${pts[i][1].toFixed(1)} \${mx.toFixed(1)} \${my.toFixed(1)}\`;
  }
  line += \`L\${pts[pts.length - 1][0].toFixed(1)} \${pts[pts.length - 1][1].toFixed(1)}\`;
  ropeLine.setAttribute('d', line);
  ropeFill.setAttribute('d', \`\${line}L\${W} \${H + 4}L0 \${H + 4}Z\`);
}

function loop(now) {
  const dt = Math.min(.05, (now - lastT) / 1000); lastT = now;
  if (running) {
    tickBots(now); tickWob(); tickPend(Math.min(dt, .033)); tickRope(Math.min(dt, .033));
    if (frameDirty || now < frameUntil) { frameDirty = false; computeFrame(); }
    tickNarr(dt); tickOwner(dt); tickRig(Math.min(dt, .033));
  }
  requestAnimationFrame(loop);
}
new IntersectionObserver(([en]) => { running = en.isIntersecting; }).observe(stage);

/* ---------------- boot ---------------- */
function renderAll() { applyTheme(); S.letters.forEach((_, i) => renderGlyph(i)); syncStickers(); syncNotes(); }
renderAll();
stickerEls.forEach(el => el.classList.add('pre'));
fit();
new ResizeObserver(() => fit()).observe(stage);
if (document.fonts) {
  FONTS.forEach(f => document.fonts.load(\`\${f.i ? 'italic ' : ''}\${f.w || 400} 40px "\${f.n}"\`, 'SRISHTIsrishti').catch(() => {}));
  document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', () => fit());
}
requestAnimationFrame(loop);

/* ---------------- opening: the doodle builds the page ---------------- */
let introPlaying = false, introSkip = false, wmFinal = 1;
const SKIP = new Error('skip');
const pause = async ms => { await sleep(ms); if (introSkip) throw SKIP; };
const introFinish = () => {
  if (WANT_OWN_GRID_OFF) applyOwnGridTransparency(true);
  requestAnimationFrame(placeResume);
  introDone = true;
  if (!sel) gframe.classList.remove('off');
  touchFrame();
  joinBots();
};
function fallTo(x, y) {
  return new Promise(res => {
    owner.target = null; owner.x = x; owner.y = -140; owner.walking = false; owner.el.classList.remove('walking');
    owner.el.classList.add('falling');
    let v = 0, last = performance.now(), bounced = false;
    const step = now => {
      if (introSkip) { owner.el.classList.remove('falling'); return res(); }
      const dt = Math.min(.033, (now - last) / 1000); last = now;
      v += 2800 * dt; owner.y += v * dt;
      if (owner.y >= y) {
        owner.y = y;
        if (!bounced && v > 400) { bounced = true; v = -v * .16; owner.el.classList.remove('falling'); rig.land = 1; }
        else { owner.el.style.transform = \`translate(\${owner.x.toFixed(1)}px, \${owner.y.toFixed(1)}px)\`; return res(); }
      }
      owner.el.style.transform = \`translate(\${owner.x.toFixed(1)}px, \${owner.y.toFixed(1)}px)\`;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
function walkTo(pt) {
  owner.target = {x:pt.x, y:pt.y, side:pt.side || 'right'};
  return new Promise(res => {
    const t0 = performance.now();
    const chk = () => {
      if (introSkip) return res();
      const d = Math.hypot(owner.x - (owner.tx ?? pt.x), owner.y - (owner.ty ?? pt.y));
      if ((d < 3 && performance.now() - t0 > 80) || performance.now() - t0 > 3200) return res();
      requestAnimationFrame(chk);
    };
    requestAnimationFrame(chk);
  });
}
function quip(t) { owner.el.classList.add('talking'); setTagText(t); setTimeout(() => owner.el.classList.remove('talking'), 700); }
function showRest() {
  lan.classList.remove('pre'); todo.classList.remove('pre'); statusLine.classList.remove('pre'); skills.classList.remove('pre'); resumeBtn.classList.remove('pre');
  let k = 0; for (const el of stickerEls.values()) { const d = k++ * 110; setTimeout(() => el.classList.remove('pre'), d); }
}
function endState() {
  // everything in its final place, used when the opening finishes or is skipped
  S.wm = wmFinal; fit();
  glyphs.forEach(g => { g.classList.remove('pre'); });
  stickerEls.forEach(el => el.classList.remove('pre'));
  lan.classList.remove('pre'); todo.classList.remove('pre'); statusLine.classList.remove('pre'); skills.classList.remove('pre'); resumeBtn.classList.remove('pre');
  chips.forEach(t => t.classList.add('printed'));
  owner.el.classList.remove('pre', 'falling', 'pulling'); computeFrame();
}
function playIntro() { return playSplash(); }
/* opening: start zoomed out on Srishti's whole file, his cursor picks this page, zoom to selection */
let introWatch = 0;
async function playSplash() {
  if (introPlaying) return;
  introPlaying = true; introSkip = false;
  introWatch = setTimeout(() => { if (introPlaying) introSkip = true; }, 9000);
  endState(); owner.el.classList.add('pre'); gframe.classList.add('off');
  const W = stage.clientWidth, H = stage.clientHeight, small = bp === 'sm';
  const s0 = small ? .34 : .24, cx = innerWidth / 2, cy = innerHeight / 2;
  const world = document.createElement('div'); world.className = 'world'; world.setAttribute('aria-hidden', 'true');
  const wi = document.createElement('div'); wi.className = 'world-in'; world.appendChild(wi);
  const sk = (x, y, w, h, c) => \`<i class="sk\${c ? ' c' : ''}" style="left:\${x}%;top:\${y}%;width:\${w}%;height:\${h}%\${c ? \`;--c:\${c}\` : ''}"></i>\`;
  const FR = [
    {n:'About', x:-1.13, y:-.12, w:.8, h:1.25, c:'#FFE55C'},
    {n:'Parkin', x:1.12, y:-.02, w:.85, h:1.15, c:'#00D07A'},
    {n:'CP Signage', x:-.12, y:1.22, w:.95, h:.82, c:'#F0000F'},
    {n:'Telemedicine kiosk', x:1.02, y:1.3, w:.62, h:.9, c:'#0346D4'},
    {n:'Contact', x:.14, y:-1.22, w:.6, h:.72, c:'#7D39FF'},
    {n:'Playground', x:-1.02, y:1.28, w:.66, h:.7, c:'#FF861D'}
  ];
  const frames = FR.map(f => {
    const el = document.createElement('div'); el.className = 'wf';
    const w = f.w * W, h = f.h * H;
    el.style.cssText = \`left:\${(f.x * W - w / 2).toFixed(0)}px;top:\${(f.y * H - h / 2).toFixed(0)}px;width:\${w.toFixed(0)}px;height:\${h.toFixed(0)}px\`;
    el.innerHTML = \`<span class="wf-label">\${f.n}</span>\` + sk(6, 5, 88, 4) + sk(6, 13, 55, 34, f.c) + sk(64, 13, 30, 15) + sk(64, 31, 30, 16) + sk(6, 53, 70, 3) + sk(6, 59, 52, 3) + sk(6, 70, 40, 12, f.c) + sk(52, 70, 42, 12);
    wi.appendChild(el); return el;
  });
  const slot = document.createElement('div'); slot.className = 'wf slot on';
  slot.style.cssText = \`left:\${-W / 2}px;top:\${-H / 2}px;width:\${W}px;height:\${H}px\`;
  slot.innerHTML = \`<i></i><i></i><i></i><i></i><span class="wf-label">srishti.fig / Hero</span><span class="wf-dim">\${W} × \${H}</span>\`;
  wi.appendChild(slot);
  const cur = document.createElement('div'); cur.className = 'op-cursor'; cur.setAttribute('aria-hidden', 'true');
  cur.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 3l15.5 7.2-6.8 2-2 6.8z" fill="#7D39FF" stroke="#FFFFFF" stroke-width="1.6" stroke-linejoin="round"/></svg><b>Srishti</b>';
  const zp = document.createElement('div'); zp.className = 'op-zoom'; zp.setAttribute('aria-hidden', 'true'); zp.innerHTML = '<span>Zoom</span><strong></strong>';
  const hint = document.createElement('div'); hint.className = 'op-skip'; hint.setAttribute('aria-hidden', 'true'); hint.textContent = 'click anywhere to skip';
  document.body.append(world, cur, zp, hint);
  const zpNum = zp.querySelector('strong');
  document.documentElement.classList.add('splash');
  stage.classList.add('zooming');
  const setScale = sc => {
    stage.style.transform = \`scale(\${sc})\`; wi.style.transform = \`scale(\${sc})\`;
    world.style.setProperty('--inv', (1 / sc).toFixed(4)); zpNum.textContent = Math.round(sc * 100) + '%';
  };
  const place = (x, y) => { cur.style.transform = \`translate(\${x.toFixed(1)}px, \${y.toFixed(1)}px)\`; };
  const inOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const tween = (dur, fn, ease = inOut) => new Promise(res => {
    const t0 = performance.now();
    const step = now => { if (introSkip) return res(); const p = Math.min(1, (now - t0) / dur); fn(ease(p)); if (p < 1) requestAnimationFrame(step); else res(); };
    requestAnimationFrame(step);
  });
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return; cleaned = true;
    stage.style.transform = ''; stage.style.opacity = ''; stage.classList.remove('zooming');
    document.documentElement.classList.remove('splash');
    [world, cur, zp, hint].forEach(el => el.remove());
  };
  try {
    setScale(s0 * .9); stage.style.opacity = '0'; place(innerWidth * .82, innerHeight + 40);
    await pause(60);
    // the file fades up: this page in the middle, the rest of the work around it
    stage.style.opacity = '1';
    frames.forEach((f, i) => setTimeout(() => f.classList.add('on'), 120 + i * 70));
    await tween(700, e => setScale(s0 * (.9 + .1 * e)));
    // Srishti's cursor swoops in and selects this page
    const tx = cx - W * s0 * .3, ty = cy - H * s0 * .22, fx = innerWidth * .82, fy = innerHeight + 40;
    await tween(750, e => place(fx + (tx - fx) * e, fy + (ty - fy) * e - Math.sin(e * Math.PI) * 60));
    if (introSkip) throw SKIP;
    cur.classList.add('press'); slot.classList.add('sel');
    await pause(160); cur.classList.remove('press');
    await pause(420);
    // zoom to selection
    cur.style.opacity = '0'; slot.style.opacity = '0'; hint.style.opacity = '0';
    await tween(1050, e => setScale(s0 + (1 - s0) * e));
    if (introSkip) throw SKIP;
    setScale(1);
    zp.style.opacity = '0'; world.style.opacity = '0';
    await pause(120);
    cleanup();
    // and the figure drops onto the frame to say hey
    gframe.classList.remove('off'); computeFrame();
    const home = targetPoint('home', stage.getBoundingClientRect());
    owner.el.classList.remove('pre');
    await fallTo(home.x, home.y);
    placeOwnerHome();
    narrate(0);
  } catch (err) {
    // skipped, or something went wrong: either way, jump straight to the finished page
    try { cleanup(); endState(); gframe.classList.remove('off'); placeOwnerHome(); narrate(0); } catch (e2) {}
  } finally {
    clearTimeout(introWatch);
    try { cleanup(); } catch (e3) {}
    introPlaying = false;
    owner.el.classList.remove('pulling', 'falling'); owner.snap = false;
    introFinish();
  }
}
function placeOwnerHome() {
  owner.target = 'home'; owner.vx = owner.vy = 0;
  const p = targetPoint('home', stage.getBoundingClientRect());
  if (p) { owner.x = owner.tx = p.x; owner.y = owner.ty = p.y; }
}
// a click or key press skips the opening
document.addEventListener('pointerdown', () => { if (introPlaying) introSkip = true; }, true);
document.addEventListener('keydown', () => { if (introPlaying) introSkip = true; }, true);

(async function intro() {
  await Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), sleep(1600)]);
  fit();
  if (WANT_OWN_GRID_OFF && !(REDUCED || CFG.intro === false)) {
    applyOwnGridTransparency(false);
  }
  if (REDUCED || CFG.intro === false) {
    endState();
    if (!REDUCED) { owner.x = -40; owner.y = frameBox ? frameBox.y : stage.clientHeight * .4; }
    narrate(0); introFinish(); return;
  }
  playIntro();
})();
})();
<\/script>
</body>
</html>
`})))()}function Xt(e,t){return e===`parkin`?`<div class="phone"><div class="screen"><div class="sb"><span>9:41</span><span>●●● ▮</span></div><div class="p-head"><div class="p-logo"><i>P</i>Park iN</div><div class="p-title">Parking near you</div><div class="p-loc"><i></i><span class="free-n">Live availability</span></div></div><div class="legend"><span style="--c:#2FB566">Free</span><span style="--c:#E0473C">Full</span><span style="--c:#2F6BFF">EV charging</span></div><div class="lot" role="group" aria-label="Parking slots"><div class="lot-col lot-a"></div><div class="lane" aria-hidden="true"></div><div class="lot-col lot-b"></div></div><div class="stepper" aria-hidden="true"><span class="stp">Slot</span><span class="stp">Time</span><span class="stp">Pay</span><span class="stp">Done</span></div><div class="p-sheet" aria-live="polite"></div></div></div>`:e===`ent`?`<div class="window"><div class="layer old" aria-hidden="true"><div class="tb"><span>Platform — Records</span><i>_ □ \xd7</i></div><div class="mb"><span>File</span><span>Edit</span><span>View</span><span>Records</span><span>Tools</span><span>Help</span></div><div class="tools"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="bd"><aside class="o-side"><span>Dashboard</span><span class="on">Records</span><span>Reports</span><span>Users</span><span>Settings</span></aside><main><div class="filters"><span></span><span></span><b>Search</b></div><table><tbody><tr><th>ID</th><th>Name</th><th>Owner</th><th>Status</th></tr>${[[60,80,55,40],[50,65,70,45],[60,90,50,40],[55,70,60,50],[60,60,75,40],[45,85,55,45]].map(e=>`<tr>${e.map(e=>`<td><i style="--w:${e}%"></i></td>`).join(``)}</tr>`).join(``)}</tbody></table></main></div><span class="ltag">Before</span></div><div class="layer new" aria-hidden="true"><div class="tb"><span class="logo"></span><span class="search">Search records</span><span class="av"></span></div><div class="bd"><aside><span>Dashboard</span><span class="on">Records</span><span>Reports</span><span>Users</span><span>Settings</span></aside><main><div class="kpis"><div class="kpi"><i></i><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0 24 L15 20 L30 22 L45 14 L60 16 L75 9 L100 5" fill="none" stroke="#DE1A4F" stroke-width="2.5"/></svg></div><div class="kpi"><i></i><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0 12 L20 15 L40 10 L60 18 L80 13 L100 16" fill="none" stroke="#1D8A4B" stroke-width="2.5"/></svg></div><div class="kpi"><i></i><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0 6 L20 10 L40 9 L60 15 L80 20 L100 22" fill="none" stroke="#A8650B" stroke-width="2.5"/></svg></div></div><div class="tbl"><div class="row"><span>Name</span><span>Owner</span><span>Status</span></div><div class="row"><i style="--w:80%"></i><i style="--w:55%"></i><span class="pill g">Active</span></div><div class="row"><i style="--w:65%"></i><i style="--w:70%"></i><span class="pill a">Pending</span></div><div class="row"><i style="--w:90%"></i><i style="--w:50%"></i><span class="pill g">Active</span></div><div class="row"><i style="--w:70%"></i><i style="--w:60%"></i><span class="pill b">Review</span></div></div></main></div><span class="ltag">After</span></div><div class="handle" aria-hidden="true"></div><input type="range" min="0" max="100" value="50" step="0.5" aria-label="Compare the old and new interface"></div>`:e===`cp`?`<div class="cp-board"><svg class="map" viewBox="0 0 400 400" role="group" aria-label="Schematic map of Connaught Place blocks"></svg><div class="signs" aria-live="polite"><div class="sign"><span class="bk s-en">Block A</span><span class="sep"></span><span class="hi s-hi">ब्लॉक ए</span></div><div class="dir"><div class="t"><span class="s-ring">Inner Circle</span><b lang="hi" class="s-ring-hi">इनर सर्कल</b></div><span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V4M5 11l7-7 7 7"/></svg></span></div><span class="cp-note">Schematic · not to scale</span></div></div>`:e===`kiosk`?`<div class="kiosk"><div class="k-body"><span class="k-cam" aria-hidden="true"></span><div class="k-screen"><div class="k-top"><span>Tele-consult</span><i>Self-service</i></div><div class="k-in" aria-live="polite"></div></div></div><div class="k-lower" aria-hidden="true"><i></i><i></i></div></div>`:e===`car`?`<div class="arphone"><div class="ar-view"><div class="ar-floor" aria-hidden="true"></div><svg class="car base" viewBox="0 0 600 260" aria-hidden="true"><ellipse cx="305" cy="236" rx="270" ry="12" class="shadow"/><path class="body" d="${hn}"/><path class="win" d="M408 90 Q400 80 382 80 L318 80 L318 124 L452 124 Z"/><path class="win" d="M304 80 L258 80 Q242 82 230 92 L198 124 L304 124 Z"/><path class="detail" d="M311 126 L311 188 M200 150 L420 150 M60 150 L80 150 M535 150 L556 150 M300 160 l14 0"/><circle class="wheel" cx="145" cy="195" r="38"/><circle class="hub" cx="145" cy="195" r="15"/><circle class="wheel" cx="465" cy="195" r="38"/><circle class="hub" cx="465" cy="195" r="15"/><g class="hits"></g></svg><svg class="car xray" viewBox="0 0 600 260" aria-hidden="true"><defs><pattern id="${t}-mesh" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0H0V14" fill="none" stroke="#FFD23F" stroke-width="1"/></pattern><clipPath id="${t}-clip"><path d="${hn}"/><circle cx="145" cy="195" r="38"/><circle cx="465" cy="195" r="38"/></clipPath></defs><rect width="600" height="260" fill="url(#${t}-mesh)" clip-path="url(#${t}-clip)"/><path d="${hn}" fill="none" stroke="#FFD23F" stroke-width="3"/><circle cx="145" cy="195" r="38" fill="none" stroke="#FFD23F" stroke-width="3"/><circle cx="465" cy="195" r="38" fill="none" stroke="#FFD23F" stroke-width="3"/></svg><div class="scanline" aria-hidden="true"></div><span class="vf tl"></span><span class="vf tr"></span><span class="vf bl"></span><span class="vf br"></span><div class="hud-top"><span class="rec">AI scan \xb7 concept</span><span class="cnt">0/6 parts</span></div><div class="hud-card" aria-live="polite"><b>Scanning…</b><span>Move around the car</span></div><span class="shutter" aria-hidden="true"></span></div></div>`:``}function Zt(e,t){let n=new AbortController,r=(e,t,r,i={})=>e.addEventListener(t,r,{...i,signal:n.signal}),i=!1,a=/* @__PURE__ */ new Set,o=/* @__PURE__ */ new Set,s=(e,t)=>{let n=setTimeout(()=>{a.delete(n),i||e()},t);return a.add(n),n},c=(e,t)=>{let n=setInterval(()=>{i||e()},t);return o.add(n),n},l=[],u=[],d=0,f=e=>typeof matchMedia==`function`&&matchMedia(e).matches,p=f(`(prefers-reduced-motion: reduce)`),m=f(`(pointer: fine)`),h=!t.canvas,_=h&&t.autoDemo&&!p,v=(t,n=e)=>n.querySelector(t),y=(t,n=e)=>Array.from(n.querySelectorAll(t));function b(){let e=/* @__PURE__ */ new Set,t={t(t,n){let r=setTimeout(()=>{e.delete(r),i||t()},n);return e.add(r),r},i(t,n){let r=setInterval(()=>{i||t()},n);return e.add(r),r},clear(){e.forEach(e=>{clearTimeout(e),clearInterval(e)}),e.clear()}};return l.push(t),t}function x(e){if(!_)return{moveTo(){},tap(e,t,n){n()},hide(){},jump(e,t){}};let n=document.createElement(`div`);n.className=`peer cur`,n.setAttribute(`aria-hidden`,`true`),n.innerHTML=`<svg viewBox="0 0 18 18"><path d="M2 1.5 15 8l-6 1.6L6.2 16z"/></svg><b></b>`,n.querySelector(`b`).textContent=t.cursorName,e.appendChild(n);let r=0,i=0,a=t=>{let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=r.width/e.offsetWidth||1;return[(n.left-r.left+n.width*.55)/i,(n.top-r.top+n.height*.55)/i]};return{moveTo(e,t){r=e,i=t,n.style.transform=`translate3d(${(e-2).toFixed(1)}px,${(t-2).toFixed(1)}px,0)`,n.classList.contains(`on`)||n.classList.add(`on`)},tap(t,o,s){if(!o)return s();n.classList.remove(`track`);let c=a(o);this.moveTo(c[0],c[1]),t.t(()=>{n.classList.add(`press`);let a=document.createElement(`span`);a.className=`rip`,a.style.left=r+`px`,a.style.top=i+`px`,e.appendChild(a),setTimeout(()=>a.remove(),650),t.t(()=>{n.classList.remove(`press`),s()},140)},780)},hide(){n.classList.remove(`on`)},jump(e,t){n.classList.add(`track`),this.moveTo(e,t)}}}function S(e){let t=[`A1`,`A2`,`A3`,`A4`,`A5`,`A6`],n=[`B1`,`B2`,`B3`,`B4`,`B5`,`B6`],i=[...t,...n],a=/* @__PURE__ */ new Set([`A1`,`A2`,`B6`]),o=/* @__PURE__ */ new Set([`A3`,`A5`,`B2`,`B4`,`B5`]),s=null,c=0,l=`2h`,u=!1,d=!1,f=b(),m=b(),h=x(e),g={},S=(e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.className=`slot`,n.dataset.id=e,n.innerHTML=`<span class="st">${e}</span>${a.has(e)?`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>`:``}`,t.appendChild(n),g[e]=n};t.forEach(t=>S(t,v(`.lot-a`,e))),n.forEach(t=>S(t,v(`.lot-b`,e)));let C=v(`.p-sheet`,e),w=y(`.stp`,e),T=v(`.free-n`,e);function E(){i.forEach(e=>{let t=g[e],n=o.has(e);t.classList.toggle(`full`,n),t.classList.toggle(`ev`,a.has(e)),t.classList.toggle(`sel`,e===s),t.setAttribute(`aria-label`,`Slot ${e}${a.has(e)?`, EV charging`:``}, ${n?`full`:`free`}`),t.disabled=n}),T.textContent=`${i.filter(e=>!o.has(e)).length} spots free right now`}function D(){w.forEach((e,t)=>{e.classList.toggle(`on`,t+1===c),e.classList.toggle(`done`,t+1<c)});let e=s&&a.has(s)?`EV charging bay`:`Standard bay`;C.innerHTML=[`<b>Pick a spot</b><span class="sub">Green is free, blue has an EV charger. Spots update as cars come and go.</span>`,`<b>Slot ${s}</b><span class="sub">${e}</span><button type="button" class="p-cta" data-act="next">Continue</button>`,`<b>How long?</b><div class="p-chips">${[`1h`,`2h`,`3h`,`4h`].map(e=>`<button type="button" data-act="dur" data-v="${e}" aria-pressed="${e===l}">${e}</button>`).join(``)}</div><button type="button" class="p-cta" data-act="next">Continue</button>`,`<b>Review</b><dl><dt>Slot</dt><dd>${s}</dd><dt>Duration</dt><dd>${l}</dd><dt>Type</dt><dd>${e}</dd></dl><button type="button" class="p-cta" data-act="pay">Pay with UPI</button>`,`<div class="ticket"><span class="ok">✓</span><div><b>Booked</b><br><span class="sub">Slot ${s} \xb7 ${l}</span></div></div><div class="barcode"></div><button type="button" class="p-cta alt" data-act="done">Done</button>`][c]}function O(e){o.has(e)||(s=e,c=1,E(),D())}function k(e,t){e===`next`&&c++,e===`dur`&&t&&(l=t),e===`pay`&&(c=4),e===`done`&&(s=null,c=0),E(),D()}r(e,`click`,e=>{let t=e.target.closest(`.slot`),n=e.target.closest(`[data-act]`);e.isTrusted&&(t||n)&&(u=!0,m.clear(),h.hide()),t&&O(t.dataset.id),n&&k(n.dataset.act,n.dataset.v)});function ee(){let e=i.filter(e=>e!==s),t=e[Math.floor(Math.random()*e.length)];o.has(t)?o.size>3&&o.delete(t):o.size<7&&o.add(t),E()}let A=e=>v(e,C);function j(){if(u||!d||!_)return;let e=i.filter(e=>!o.has(e)),t=e[Math.floor(Math.random()*e.length)];m.t(()=>h.tap(m,g[t],()=>{O(t),m.t(()=>h.tap(m,A(`[data-act=next]`),()=>{k(`next`),m.t(()=>h.tap(m,A(`[data-v="3h"]`),()=>{k(`dur`,`3h`),m.t(()=>h.tap(m,A(`[data-act=next]`),()=>{k(`next`),m.t(()=>h.tap(m,A(`[data-act=pay]`),()=>{k(`pay`),m.t(()=>h.tap(m,A(`[data-act=done]`),()=>{k(`done`),l=`2h`,j()}),1700)}),500)}),400)}),500)}),500)}),1300)}return E(),D(),{start(){d=!0,p||f.i(ee,1800),j()},stop(){d=!1,f.clear(),m.clear(),h.hide(),u||(s=null,c=0,l=`2h`,E(),D())}}}function C(e){let t=v(`.window`,e),n=v(`input`,e),a=x(e),o=!1,s=0,c=0,l=v(`.new`,e),u=v(`.handle`,e),d=0,f=(e,r)=>{d||=t.offsetWidth,l.style.clipPath=`inset(0 0 0 ${e}%)`,u.style.transform=`translate3d(${(d*e/100).toFixed(1)}px,0,0)`,r||(n.value=e)};r(g,`resize`,()=>{d=0,f(+n.value,!0)});let p=()=>{cancelAnimationFrame(s),s=0},m=()=>{o=!0,p(),a.hide()};[`pointerdown`,`keydown`].forEach(e=>r(n,e,m)),r(n,`input`,()=>{m(),f(+n.value,!0)});let h=null,y=0;function b(n){if(i)return;if(!h||n-y>400){let r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),a=i.width/e.offsetWidth||1;h={x:(r.left-i.left)/a,y:(r.top-i.top)/a,w:r.width/a,h:r.height/a},y=n}let r=50+30*Math.sin((n-c)/1250);f(+r.toFixed(2),!0),a.jump(h.x+h.w*r/100+6,h.y+h.h*.5+20),s=requestAnimationFrame(b)}return f(50),{start(){o||!_||s||(h=null,d=0,c=performance.now(),s=requestAnimationFrame(b))},stop(){p(),a.hide()}}}function w(e){let t=v(`svg.map`,e),n=x(e),i=(e,t)=>{let n=t*Math.PI/180;return[200+e*Math.sin(n),200-e*Math.cos(n)]},a=(e,t,n,r)=>{let[a,o]=i(t,n),[s,c]=i(t,r),[l,u]=i(e,r),[d,f]=i(e,n);return`M${a} ${o} A${t} ${t} 0 0 1 ${s} ${c} L${l} ${u} A${e} ${e} 0 0 0 ${d} ${f}Z`},o=(e,n,r=t)=>{let i=document.createElementNS(`http://www.w3.org/2000/svg`,e);for(let e in n)i.setAttribute(e,n[e]);return r.appendChild(i),i};o(`circle`,{cx:200,cy:200,r:192,class:`ground`});for(let e=0;e<8;e++){let t=e*45,[n,r]=i(112,t),[a,s]=i(198,t);o(`line`,{x1:n,y1:r,x2:a,y2:s,class:`radial`})}for(let e=0;e<6;e++){let t=e*60+30,[n,r]=i(60,t),[a,s]=i(112,t);o(`line`,{x1:n,y1:r,x2:a,y2:s,class:`radial`})}[62,112,162].forEach(e=>o(`circle`,{cx:200,cy:200,r:e,class:`road`})),o(`circle`,{cx:200,cy:200,r:54,class:`park`}),o(`text`,{x:200,y:230,class:`lbl`}).textContent=`CENTRAL PARK`;let s=o(`path`,{class:`route`,d:``});o(`circle`,{cx:200,cy:200,r:6,class:`pin-ring`}),o(`circle`,{cx:200,cy:200,r:6,class:`pin`}),o(`text`,{x:200,y:186,class:`lbl`}).textContent=`YOU ARE HERE`;let c={A:`ए`,B:`बी`,C:`सी`,D:`डी`,E:`ई`,F:`एफ`,G:`जी`,H:`एच`,I:`आई`,J:`जे`,K:`के`,L:`एल`,M:`एम`,N:`एन`},l=[];`ABCDEF`.split(``).forEach((e,t)=>l.push({L:e,ring:`inner`,a:t*60,r1:68,r2:106,span:30})),`GHIJKLMN`.split(``).forEach((e,t)=>l.push({L:e,ring:`outer`,a:t*45+22.5,r1:118,r2:156,span:22.5})),l.forEach(e=>{let t=o(`g`,{class:`b`,tabindex:`0`,role:`button`,"aria-label":`Block ${e.L}, ${e.ring===`inner`?`Inner`:`Outer`} Circle`});o(`path`,{class:`blk`,d:a(e.r1,e.r2,e.a-e.span+5,e.a+e.span-5)},t);let[n,r]=i((e.r1+e.r2)/2,e.a);o(`text`,{x:n,y:r},t).textContent=e.L,e.g=t,e.mid=[n,r]});let u=v(`.s-en`,e),d=v(`.s-hi`,e),f=v(`.arrow svg`,e),p=v(`.s-ring`,e),m=v(`.s-ring-hi`,e),h=0,g=0,y=!1,S=!1,C=b();function w(e){h=e;let t=l[e];l.forEach((t,n)=>t.g.classList.toggle(`sel`,n===e));let[n,r]=t.mid,[a,o]=i(112,t.a);s.setAttribute(`d`,`M200 200 L${i(54,t.a).join(` `)} ${t.ring===`outer`?`L${a} ${o} `:``}L${n} ${r}`),u.textContent=`Block ${t.L}`,d.textContent=`ब्लॉक ${c[t.L]}`;let _=t.a-(g%360+360)%360;_>180&&(_-=360),_<-180&&(_+=360),g+=_,f.style.transform=`rotate(${g}deg)`,p.textContent=t.ring===`inner`?`Inner Circle`:`Outer Circle`,m.textContent=t.ring===`inner`?`इनर सर्कल`:`आउटर सर्कल`}let T=e=>{y=!0,C.clear(),n.hide(),w(e)};l.forEach((e,t)=>{r(e.g,`click`,e=>{e.isTrusted&&T(t)}),r(e.g,`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),T(t))})});function E(){if(y||!S||!_)return;let e;do e=Math.floor(Math.random()*l.length);while(e===h);C.t(()=>n.tap(C,l[e].g.querySelector(`text`),()=>{w(e),E()}),1100)}return w(0),{start(){S=!0,E()},stop(){S=!1,C.clear(),n.hide()}}}function T(e){let t=v(`.k-in`,e),n=b(),i=b(),a=x(e),o=0,s=`en`,c=!1,l=!1,u={en:{q2:`What do you need help with?`,opts:[`Fever`,`Cough & cold`,`Follow-up visit`,`Something else`],conn:`Connecting you to a doctor…`,stay:`Please stay in front of the screen.`,end:`End consultation`},hi:{q2:`आपको किस बात में मदद चाहिए?`,opts:[`बुखार`,`खांसी-जुकाम`,`फॉलो-अप`,`कुछ और`],conn:`डॉक्टर से जोड़ रहे हैं…`,stay:`कृपया स्क्रीन के सामने रहें।`,end:`परामर्श समाप्त करें`}},d=e=>`<div class="k-dots" aria-hidden="true">${[0,1,2,3].map(t=>`<i class="${t<=e?`on`:``}"></i>`).join(``)}</div>`;function f(e){o=e,n.clear(),o===0&&(s=`en`);let r=u[s],i=s===`hi`?` lang="hi"`:``;t.innerHTML=[`${d(-1)}<div class="k-hero"><span class="k-big">Namaste</span><p class="k-p">Talk to a doctor from right here.</p></div><button type="button" class="k-btn" data-go="1">Tap to start</button>`,`${d(0)}<span class="k-q">Choose your language</span><p class="k-p" lang="hi">भाषा चुनें</p><div class="k-grid"><button type="button" class="k-opt" data-go="2" data-lang="en">English</button><button type="button" class="k-opt" lang="hi" data-go="2" data-lang="hi">हिन्दी</button></div>`,`${d(1)}<span class="k-q"${i}>${r.q2}</span><div class="k-grid two">${r.opts.map(e=>`<button type="button" class="k-opt"${i} data-go="3">${e}</button>`).join(``)}</div>`,`${d(2)}<div class="k-spin" aria-hidden="true"></div><div class="k-center"><span class="k-q"${i}>${r.conn}</span><p class="k-p"${i}>${r.stay}</p></div>`,`${d(3)}<div class="k-video"><span class="k-live">Live</span><span class="k-doc">Dr</span><span class="k-self" aria-hidden="true"></span></div><div class="k-ctrls"><button type="button" class="k-round" aria-label="Mute microphone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></button><button type="button" class="k-btn end"${i} data-go="0">${r.end}</button></div>`][o],o===3&&n.t(()=>f(4),1900),p()}r(t,`click`,e=>{let t=e.target.closest(`[data-go]`);t&&(e.isTrusted&&(c=!0,i.clear(),a.hide()),t.dataset.lang&&(s=t.dataset.lang),f(+t.dataset.go))});function p(){if(i.clear(),c||!l||!_)return;let e={0:900,1:700,2:700,4:2400}[o];if(e==null)return;let n=y(`.k-opt`,t),r=o===2?n[Math.floor(Math.random()*4)]:o===1?n[Math.random()<.5?0:1]:v(`[data-go]`,t);i.t(()=>a.tap(i,r,()=>{r.dataset.lang&&(s=r.dataset.lang),f(+r.dataset.go)}),e)}return f(0),{start(){l=!0,p()},stop(){l=!1,i.clear(),a.hide(),c||f(0)}}}function E(e){let t=v(`.ar-view`,e),n=v(`.car.base`,e),a=v(`.car.xray`,e),o=v(`.scanline`,e),s=v(`.hits`,e),c=v(`.cnt`,e),l=v(`.hud-card`,e),u=x(e),d=[{n:`Rear tyre`,x:145,y:195,w:88,h:88,s:`Check tread depth`,warn:1},{n:`Roof`,x:318,y:70,w:130,h:26,s:`Looks fine`},{n:`Front door`,x:372,y:156,w:112,h:58,s:`Possible scratch`,warn:1},{n:`Front tyre`,x:465,y:195,w:88,h:88,s:`Looks fine`},{n:`Headlight`,x:547,y:150,w:36,h:24,s:`Looks fine`},{n:`Front bumper`,x:556,y:180,w:32,h:30,s:`Minor scuff`,warn:1}],f=(e,t,n,r,i=10)=>`M${e} ${t+i}V${t}H${e+i}M${e+n-i} ${t}H${e+n}V${t+i}M${e+n} ${t+r-i}V${t+r}H${e+n-i}M${e+i} ${t+r}H${e}V${t+r-i}`;d.forEach(e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);t.setAttribute(`class`,`hit`+(e.warn?` warn`:``));let n=e.x-e.w/2,r=e.y-e.h/2;t.innerHTML=`<rect x="${n}" y="${r}" width="${e.w}" height="${e.h}"/><path d="${f(n,r,e.w,e.h)}"/><text x="${n}" y="${r-7}">${e.n}${e.warn?` ?`:``}</text>`,s.appendChild(t),e.g=t});let m=0,h=0,g=!1,y=-1,b=null,S=0,C=(r,i)=>{if(i||!b||r-S>400){let i=e.getBoundingClientRect();b={v:t.getBoundingClientRect(),b:n.getBoundingClientRect(),r:i,sc:i.width/e.offsetWidth||1},S=r}return b};function w(e,t,n){n||=C(performance.now(),!0);let r=n.b,i=`radial-gradient(circle 86px at ${(e-r.left).toFixed(0)}px ${(t-r.top).toFixed(0)}px,#000 62%,transparent 100%)`;a.style.webkitMaskImage=i,a.style.maskImage=i;let o=(e-r.left)/r.width*600,s=(t-r.top)/r.height*260,c=-1,u=80;if(d.forEach((e,t)=>{if(!e.g.classList.contains(`on`))return;let n=Math.hypot(e.x-o,e.y-s);n<u&&(u=n,c=t)}),c!==y){y=c,d.forEach((e,t)=>e.g.classList.toggle(`cur`,t===c));let e=d[c];l.classList.toggle(`warn`,!!(e&&e.warn)),l.innerHTML=e?`<b>${e.n}</b><span>${e.s}</span>`:`<b>Scanning…</b><span>Move around the car</span>`}}let T=-1;function E(t){if(i)return;let n=C(t),r=n.v,a=n.b,s=(t-h)%5200,l=Math.min(1,s/4200);o.style.transform=`translate3d(${(r.width/(n.r.width/e.offsetWidth||1)*l).toFixed(1)}px,0,0)`;let f=(r.left+r.width*l-a.left)/a.width*600,p=0;if(d.forEach(e=>{f>=e.x-e.w/2&&p++}),p!==T&&(T=p,d.forEach((e,t)=>e.g.classList.toggle(`on`,t<p)),c.textContent=`${p}/6 parts`),!g&&_){let e=(t-h)/1e3,i=r.left+r.width*(.5+.32*Math.sin(e*.8)),a=r.top+r.height*(.56+.16*Math.sin(e*1.3));w(i,a,n),u.jump((i-n.r.left)/n.sc,(a-n.r.top)/n.sc)}m=requestAnimationFrame(E)}return r(t,`pointermove`,e=>{g||(g=!0,u.hide()),w(e.clientX,e.clientY)}),r(t,`pointerdown`,e=>{g=!0,u.hide(),w(e.clientX,e.clientY)}),{start(){b=null,T=-1,p?(d.forEach(e=>e.g.classList.add(`on`)),c.textContent=`6/6 parts`):m||=(h=performance.now(),requestAnimationFrame(E))},stop(){cancelAnimationFrame(m),m=0,u.hide()}}}let D=v(`.fw`),O=v(`.deck`),k=v(`.stage`),ee=v(`.stage-in`),A=y(`.card`),j=A.length;if(!j||!D||!O||!k||!ee)return()=>{};A.forEach((e,n)=>{let r=e.dataset.kind,i=v(`.dev`,e),a=v(`.leads`,e);i&&gn.has(r)&&(i.innerHTML=Xt(r,t.uid+`p`+n)),a&&(a.innerHTML=``)});let te={start(){},stop(){}},ne=A.map(e=>{let t=v(`.c-stage`,e),n=e.dataset.kind;try{if(n===`parkin`)return S(t);if(n===`ent`)return C(t);if(n===`cp`)return w(t);if(n===`kiosk`)return T(t);if(n===`car`)return E(t)}catch{}return te});function M(e,t){if(t)e.track.style.transform=``,e.anim.play(),e.anim.currentTime=e.ct;else{e.anim.playState!==`idle`&&(e.ct=e.anim.currentTime||e.ct),e.anim.cancel();let t=e.ct%26e3/26e3,n=e.dir<0?-50*t:-50*(1-t);e.track.style.transform=`translate(${n.toFixed(3)}%,0)`}}let re=A.map((e,t)=>{let n=v(`.mq-track`,e),r=t%2?1:-1,i=null;h&&!p&&n&&n.animate&&(i=n.animate(r<0?[{transform:`translate3d(0,0,0)`},{transform:`translate3d(-50%,0,0)`}]:[{transform:`translate3d(-50%,0,0)`},{transform:`translate3d(0,0,0)`}],{duration:26e3,iterations:1/0}),i.currentTime=Math.random()*26e3,u.push(i));let a={track:n,anim:i,dir:r,ct:i?i.currentTime:0};return i&&M(a,!1),a}),ie=A.map(e=>({dev:v(`.dev`,e),tx:0,ty:0,x:0,y:0})),N=!1;h&&m&&!p&&A.forEach((e,t)=>{let n=null;r(e,`pointerenter`,()=>{n=e.getBoundingClientRect()}),r(e,`pointermove`,r=>{(!n||N)&&(n=e.getBoundingClientRect()),ie[t].tx=((r.clientX-n.left)/n.width-.5)*2,ie[t].ty=((r.clientY-n.top)/n.height-.5)*2}),r(e,`pointerleave`,()=>{ie[t].tx=0,ie[t].ty=0})});let ae=A.map(e=>{let t=v(`.c-stage`,e),n=v(`.leads`,e);return{stage:t,list:y(`.note`,e).map(e=>{let i=e.dataset.to,a=null;try{a=i?v(i,t):null}catch{}let o=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),s=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`);s.setAttribute(`r`,`4`);let c=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`);return c.setAttribute(`r`,`9`),c.setAttribute(`class`,`ring`),n&&a&&n.append(o,c,s),r(e,`pointerenter`,()=>a&&a.classList.add(`spot`)),r(e,`pointerleave`,()=>a&&a.classList.remove(`spot`)),{nEl:e,target:a,path:o,dot:s,ring:c}})}});function oe(t){let n=ae[t];if(!n||!n.list.length||!n.stage||n.stage.offsetWidth===0||e.clientWidth<=800)return;let r=n.stage.getBoundingClientRect(),i=r.width/n.stage.offsetWidth||1,a=n.list.map(({nEl:e,target:t})=>!t||e.offsetParent===null?null:[e.getBoundingClientRect(),t.getBoundingClientRect()]);n.list.forEach(({path:e,dot:t,ring:n},o)=>{let s=a[o];if(!s){e.setAttribute(`d`,``),t.setAttribute(`r`,`0`),n.setAttribute(`r`,`0`);return}t.setAttribute(`r`,`4`),n.setAttribute(`r`,`9`);let[c,l]=s,u=(l.left+l.width/2-r.left)/i,d=(l.top+l.height/2-r.top)/i,f=((c.left+c.width/2<l.left+l.width/2?c.right:c.left)-r.left)/i,p=(c.top+c.height/2-r.top)/i,m=f+(u-f)*.55;e.setAttribute(`d`,`M${f} ${p} C${m} ${p} ${m} ${d} ${u} ${d}`),t.setAttribute(`cx`,String(u)),t.setAttribute(`cy`,String(d)),n.setAttribute(`cx`,String(u)),n.setAttribute(`cy`,String(d))})}function P(){let e=A[0].offsetWidth;if(!e)return;D.classList.remove(`tabs-num`),D.style.setProperty(`--tabfs`,`1`);let t=()=>A.map(e=>{let t=v(`.tab-l`,e),n=v(`.n`,t),r=v(`.nm`,t),i=getComputedStyle(t),a=parseFloat(i.fontSize)||16,o=(parseFloat(i.paddingLeft)||0)+(parseFloat(i.paddingRight)||0),s=r&&getComputedStyle(r).display!==`none`;return{text:(n?n.offsetWidth:0)+(s?r.scrollWidth+a*.3:0),pad:o}}),n=t(),r=e*.012,i=e*.94-r*(j-1),a=.84,o=()=>{let e=n.reduce((e,t)=>e+t.text,0),t=n.reduce((e,t)=>e+t.pad,0);return e>0?Math.min(1,(i*a-t)/e):1},s=o();s<.72&&(D.classList.add(`tabs-num`),n=t(),s=o()),s=Math.max(.6,s),D.style.setProperty(`--tabfs`,s.toFixed(3));let c=n.map(e=>(e.text*s+e.pad)/a),l=c.reduce((e,t)=>e+t,0);l<i&&(c=c.map(t=>Math.min(t*i/l,e*.26)));let u=e*.03;A.forEach((t,n)=>{t.style.setProperty(`--tx`,(u/e*100).toFixed(3)+`%`),t.style.setProperty(`--tw`,(c[n]/e*100).toFixed(3)+`%`),u+=c[n]+r})}function se(){let e=A[0].offsetWidth;if(!e)return;let t=parseFloat(getComputedStyle(D).getPropertyValue(`--tab`))||44,n=Math.max(1,Math.min(j-1,5)),r=e=>-Math.min(j-1-e,n)*z,i=A.map(e=>{let t=v(`.tab`,e);return[t.offsetLeft,t.offsetLeft+t.offsetWidth]}),a=A.map(e=>{let t=v(`.tab`,e),n=v(`.n`,t),r=v(`.nm`,t),i=r&&getComputedStyle(r).display!==`none`,a=(n?n.offsetWidth:0)+(i?Math.min(r.scrollWidth,r.offsetWidth||r.scrollWidth)+6:0),o=t.offsetLeft+t.offsetWidth/2;return[o-a/2-8,o+a/2+8]}),o=[],s=(e,t,n,r)=>Math.max(0,Math.min(t,r)-Math.max(e,n)),c=e=>e&&getComputedStyle(e).display!==`none`;function l(n,c,l,u){let d=r(n)+l,f=r(n)+Math.min(u,n<j-1?r(n+1)-r(n):1e9),p=Math.max(1,(f-d)*c),m=e*.02,h=1/0;for(let l=e*.02;l<=e*.98-c;l+=e*.005){let u=0,g=0,_=0,v=0,y=e;i.forEach(([e,i],o)=>{let p=r(o)-t,m=r(o),h=s(l,l+c,e,i)*s(d,f,p,m);h&&(o>n?_+=h:(g+=h,u+=s(l,l+c,a[o][0],a[o][1])*s(d,f,p+6,m-4)))}),o.forEach(e=>{v+=s(l,l+c,e[0],e[1])*s(d,f,e[2],e[3]),y=Math.min(y,Math.abs(l+c/2-(e[0]+e[1])/2))});let b=60*u+.3*g+2*_+4*v-Math.min(y,e*.25)/e*60;_/p>.45&&(b+=1e6),b<h-1e-6&&(h=b,m=l)}return o.push([m,m+c,d,f]),m}A.forEach((t,n)=>{let r=v(`.stamp`,t);if(!c(r))return;let i=parseFloat(getComputedStyle(r).top)||-40,a=l(n,r.offsetWidth+12,i-6,i+r.offsetHeight+6);t.style.setProperty(`--sx`,((a+6)/e*100).toFixed(2)+`%`)});let u=A[j-1],d=v(`.clip`,u),f=v(`.pen`,u);if(c(d)){let t=parseFloat(getComputedStyle(d).top)||-58,n=l(j-1,d.offsetWidth+8,t,t+d.offsetHeight);u.style.setProperty(`--cx`,((n+4)/e*100).toFixed(2)+`%`)}if(c(f)){let t=parseFloat(getComputedStyle(f).top)||-14,n=l(j-1,f.offsetWidth+10,t-16,t+f.offsetHeight+16);u.style.setProperty(`--px`,((n+5)/e*100).toFixed(2)+`%`)}}let ce=``,le=p?0:1150,F=Math.max(1,Math.min(j-1,5)),ue=A.map(()=>({bur:null,far:null,vis:!1})),I=0,L=-1,R=0,de=1,z=18,fe=0,B=0,V=e=>R+e*de,pe=e=>Math.max(0,Math.min(j-1,e)),me=e=>e>=R-2&&e<=V(j-1)+2,he=e=>e%2?`1 -0.16 0.17`:`1 0.16 -0.17`;function ge(e,n){return e>0?{t:`0 calc(100% + 160px)`,r:`${he(n)} ${t.tilt}deg`,s:`.86`}:{t:`0 ${(-Math.min(-e,F)*z).toFixed(1)}px`,r:`${he(n)} 0deg`,s:`1`}}function _e(){A.forEach((e,t)=>{let n=t-I,r=ue[t],i=ge(n,t);e.style.translate=i.t,e.style.rotate=i.r,e.style.scale=i.s,e.classList.toggle(`top`,n===0);let a=h?n>1:n>0;a!==r.far&&(e.classList.toggle(`far`,a),r.far=a);let o=n<-1;o!==r.bur&&(r.bur=o,o?s(()=>{r.bur&&e.classList.add(`buried`)},le+60):e.classList.remove(`buried`))})}function ve(e,t){let n=re[e],r=ue[e];n.anim&&r.vis!==t&&(M(n,t),r.vis=t)}function ye(){let e=scrollY,t=innerHeight,n=e>=R-t*.45&&e<=V(j-1)+t*.3?I:-1;n!==L&&(L>=0&&(ne[L].stop(),A[L].classList.remove(`live`),ve(L,!1)),L=n),L>=0&&!N&&!A[L].classList.contains(`live`)&&(ne[L].start(),A[L].classList.add(`live`),ve(L,!0),B=40)}function H(e){e=pe(e),e!==I&&(I=e,N=!0,performance.now(),_e(),clearTimeout(fe),fe=s(()=>{N=!1,ye()},le),ye())}let U=e=>g.scrollTo({top:Math.round(e),behavior:`instant`}),be=0,xe=()=>{R=O.getBoundingClientRect().top+scrollY-be};function Se(){xe();let e=scrollY,t=p?0:Math.max(0,Math.min(1,(R-e)/(innerHeight*.9))),n=``;if(t>0){let e=t*t*(3-2*t);n=`perspective(1200px) translate3d(0,${(e*8).toFixed(2)}vh,0) rotateX(${(e*40).toFixed(2)}deg) rotateY(${(e*8).toFixed(2)}deg) rotateZ(${(-e*6).toFixed(2)}deg) scale(${(1-e*.08).toFixed(4)})`}n!==ce&&(ee.style.transform=n,ce=n);let r=performance.now(),i=me(e);if(i&&!Ee&&!Ce&&G<0&&r-we<1500){De(1200),H(e-R<V(j-1)-e?0:j-1);let t=g.lenis;t&&typeof t.scrollTo==`function`&&t.scrollTo(V(I),{immediate:!0})}Ee=i,r<W?(W=Math.max(W,r+300),G>=0?H(G):i||H(e<R?0:j-1)):H(i?Math.round((e-R)/de):e<R?0:j-1),ye()}let Ce=f(`(pointer: coarse)`),W=0,we=0,G=-1,Te=!1,Ee=!1;function De(e){W=Math.max(W,performance.now()+e),Te=!0}let Oe=[],ke=null;h&&!p&&f(`(pointer: coarse)`)&&(ke=document.documentElement.style.scrollSnapType,document.documentElement.style.scrollSnapType=`y proximity`,A.forEach(()=>{let e=document.createElement(`i`);e.className=`snap`,e.setAttribute(`aria-hidden`,`true`),O.appendChild(e),Oe.push(e)}));function Ae(){if(i)return;if(e.style.setProperty(`--u`,(e.clientWidth/100).toFixed(2)+`px`),z=parseFloat(getComputedStyle(D).getPropertyValue(`--peek`))||18,P(),se(),!h){_e(),oe(I);return}let t=be=parseFloat(getComputedStyle(k).top)||0;de=Math.max(320,Math.round(innerHeight*.85)),O.style.height=k.offsetHeight+(j-1)*de+`px`,R=O.getBoundingClientRect().top+scrollY-t,Oe.forEach((e,n)=>{e.style.top=n*de+`px`,e.style.scrollMarginTop=t+`px`}),_e(),Se(),B=20}let je=0,Me=()=>{je||i||(je=requestAnimationFrame(()=>{je=0,Ae()}))},Ne=null;if(typeof ResizeObserver==`function`){let t=-1,n=-1;Ne=new ResizeObserver(()=>{let r=e.clientWidth,i=document.body?document.body.scrollHeight:0;(r!==t||h&&Math.abs(i-n)>1)&&(t=r,n=i,Me())}),Ne.observe(e),h&&document.body&&Ne.observe(document.body)}let K=document.fonts;if(K&&K.ready&&K.ready.then(()=>Me()),K&&K.addEventListener&&r(K,`loadingdone`,Me),!h)I=pe(t.preview),Ae(),s(()=>oe(I),400);else{r(g,`scroll`,Se,{passive:!0}),r(g,`resize`,Me);let e=`ready`,t=0,n=0,a=0,o=0,s=e=>{e.preventDefault(),e.stopPropagation()};r(g,`wheel`,r=>{if(p||r.ctrlKey||Math.abs(r.deltaX)>Math.abs(r.deltaY))return;xe();let i=performance.now(),c=r.deltaY*(r.deltaMode===1?16:r.deltaMode===2?innerHeight:1),l=Math.abs(c),u=Math.sign(c);we=i;let d=i-t>160||i>a&&l>=Math.max(8,n*1.5)&&l-n>=3,f=l>n;t=i,n=l;let m=scrollY,h=me(m);if(d&&(e=h?`ready`:`native`,o=0),!u||!h)return;if(G=-1,De(400),e===`native`){s(r),e=`spent`,a=i+(f||d?250:40);return}if(e===`spent`)return s(r);let g=I+u;g<0||g>j-1?(e=`native`,W=0,Te=!1,Math.abs(m-V(I))>1&&U(V(I))):(s(r),o+=c,!(Math.abs(o)<6)&&(e=`spent`,o=0,H(g),U(V(g)),a=i+550))},{capture:!0,passive:!1}),r(g,`keydown`,e=>{if(p||e.altKey||e.metaKey||e.ctrlKey)return;let t=e.target;if(t&&t.closest&&t.closest(`input,textarea,select,button,a,[contenteditable="true"],[role="button"]`))return;let n=[`ArrowDown`,`PageDown`].includes(e.key)||e.key===` `&&!e.shiftKey,r=[`ArrowUp`,`PageUp`].includes(e.key)||e.key===` `&&e.shiftKey;if(xe(),!n&&!r||!me(scrollY))return;let i=I+(n?1:-1);i<0||i>j-1||(e.preventDefault(),H(i),U(V(i)))});let l=e=>{xe(),G=e,H(e),De(1400),g.scrollTo({top:V(e),behavior:p?`auto`:`smooth`})};y(`.mini`).forEach(e=>r(e,`click`,()=>l(+e.dataset.go))),y(`.tab`).forEach(e=>r(e,`click`,()=>{let t=+e.dataset.go;t!==I&&l(t)}));let u=()=>{if(!i){if(L>=0&&!N){let e=ie[L];(Math.abs(e.tx-e.x)>.002||Math.abs(e.ty-e.y)>.002)&&e.dev&&!p&&(e.x+=(e.tx-e.x)*.1,e.y+=(e.ty-e.y)*.1,e.dev.style.transform=`rotateY(${(e.x*9).toFixed(2)}deg) rotateX(${(-e.y*7).toFixed(2)}deg) translate3d(${(e.x*10).toFixed(1)}px,${(e.y*8).toFixed(1)}px,0)`,B=Math.max(B,2)),B>0&&(B--,oe(L))}d=requestAnimationFrame(u)}};d=requestAnimationFrame(u),c(()=>{L>=0&&!N&&(B=Math.max(B,1))},500),m&&!p&&y(`.spin`).forEach(e=>{r(e,`pointermove`,t=>{let n=e.getBoundingClientRect();e.style.translate=`${(t.clientX-n.left-n.width/2)*.25}px ${(t.clientY-n.top-n.height/2)*.25}px`}),r(e,`pointerleave`,()=>{e.style.translate=``})}),c(()=>{!Te||performance.now()<W||(Te=!1,G=-1,xe(),me(scrollY)&&Math.abs(scrollY-V(I))>1&&U(V(I)))},120),Ae(),requestAnimationFrame(()=>requestAnimationFrame(()=>!i&&O.classList.remove(`boot`)))}return e.__deck=()=>({k:I,top0:R,step:de,n:j,active:L,flipping:N}),()=>{ne.forEach(e=>{try{e.stop()}catch{}}),i=!0,n.abort(),l.forEach(e=>e.clear()),a.forEach(e=>clearTimeout(e)),o.forEach(e=>clearInterval(e)),cancelAnimationFrame(d),cancelAnimationFrame(je),clearTimeout(fe),Ne&&Ne.disconnect(),u.forEach(e=>{try{e.cancel()}catch{}}),e.querySelectorAll(`.peer,.rip,.snap`).forEach(e=>e.remove()),ke!==null&&(document.documentElement.style.scrollSnapType=ke),A.forEach(e=>e.classList.remove(`top`,`far`,`buried`,`live`)),O.classList.add(`boot`),ee.style.transform=``,delete e.__deck}}function Qt(e,t){let n={...e};if(t)for(let e in t)t[e]!==void 0&&t[e]!==null&&(n[e]=t[e]);return n}function $t({href:e,newTab:t,children:n,...r}){let i=ne(),a=t?{target:`_blank`,rel:`noopener`}:{};return e&&!/^(https?:|mailto:|tel:|\/|#)/i.test(e)&&te?/*#__PURE__*/ f(te,{href:e,openInNewTab:t,children:/*#__PURE__*/ f(`a`,{...r,children:n})}):/*#__PURE__*/ f(`a`,{href:e,...a,...r,onClick:n=>an(n,i,e,t,r.onClick),children:n})}function en({w:e,h:t,die:n,children:r}){let i=e+12,a=t+12;return/*#__PURE__*/ f(`span`,{className:`stamp`,"aria-hidden":`true`,style:Q({"--w0":Math.round(i*Cn)+`px`,"--h0":Math.round(a*Cn)+`px`}),children:/*#__PURE__*/ p(`svg`,{width:Math.round(i*Cn),height:Math.round(a*Cn),viewBox:`-6 -6 ${i} ${a}`,children:[/*#__PURE__*/ f(`g`,{className:`die`,children:n}),r]})})}function tn({kind:e,id:t,num:n,img:r}){let i=e=>`url(#${t}${e})`;return e===`parkin`?/*#__PURE__*/ p(en,{w:66,h:88,die:/*#__PURE__*/ p(u,{children:[/*#__PURE__*/ f(`rect`,{x:`1`,y:`0`,width:`64`,height:`64`,rx:`10`}),/*#__PURE__*/ f(`rect`,{x:`1`,y:`66`,width:`64`,height:`20`,rx:`5`})]}),children:[/*#__PURE__*/ f(`defs`,{children:/*#__PURE__*/ p(`linearGradient`,{id:t+`a`,x1:`0`,y1:`0`,x2:`.4`,y2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#3D7DFF`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#1A47C9`})]})}),/*#__PURE__*/ f(`rect`,{x:`1`,y:`0`,width:`64`,height:`64`,rx:`10`,fill:i(`a`)}),/*#__PURE__*/ f(`rect`,{x:`5.5`,y:`4.5`,width:`55`,height:`55`,rx:`6.5`,fill:`none`,stroke:`#fff`,strokeWidth:`2.2`}),/*#__PURE__*/ f(`path`,{d:`M21 13 h14 a12.5 12.5 0 0 1 0 25 h-6 v14 h-8 z M29 20.5 v10 h6 a5 5 0 0 0 0 -10 z`,fill:`#fff`,fillRule:`evenodd`}),/*#__PURE__*/ f(`path`,{d:`M1 10 A10 10 0 0 1 11 0 H44 L1 40 Z`,fill:`#fff`,opacity:`.09`}),/*#__PURE__*/ f(`rect`,{x:`1`,y:`66`,width:`64`,height:`20`,rx:`5`,fill:`#16A34A`}),/*#__PURE__*/ f(`path`,{d:`M12.5 69 L7 77.5 H11 L9.8 83.5 L15.6 74.6 H11.6 Z`,fill:`#fff`}),/*#__PURE__*/ f(`text`,{x:`19`,y:`79`,fontSize:`7`,textLength:`40`,lengthAdjust:`spacingAndGlyphs`,fill:`#fff`,children:`EV CHARGING`})]}):e===`ent`?/*#__PURE__*/ p(en,{w:108,h:74,die:/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`108`,height:`74`,rx:`9`}),children:[/*#__PURE__*/ f(`defs`,{children:/*#__PURE__*/ p(`linearGradient`,{id:t+`a`,x1:`0`,x2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#0A246A`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#3A6EA5`})]})}),/*#__PURE__*/ f(`path`,{d:`M9 0 H54 V74 H9 A9 9 0 0 1 0 65 V9 A9 9 0 0 1 9 0 Z`,fill:`#D4D0C8`}),/*#__PURE__*/ f(`path`,{d:`M9 0 H54 V12 H0 V9 A9 9 0 0 1 9 0 Z`,fill:i(`a`)}),/*#__PURE__*/ f(`rect`,{x:`6`,y:`4.6`,width:`22`,height:`2.8`,rx:`1`,fill:`#fff`,opacity:`.85`}),/*#__PURE__*/ f(`rect`,{x:`4.5`,y:`16`,width:`13`,height:`53`,fill:`#fff`,stroke:`#808080`,strokeWidth:`.8`}),/*#__PURE__*/ f(`rect`,{x:`5.5`,y:`23`,width:`11`,height:`4.5`,fill:`#0A246A`}),[17,24,31,38,45,52,59].map((e,t)=>/*#__PURE__*/ p(`g`,{children:[/*#__PURE__*/ f(`rect`,{x:`21`,y:e,width:`30`,height:`5.6`,fill:`#fff`,stroke:`#B9B9B9`,strokeWidth:`.6`}),/*#__PURE__*/ f(`rect`,{x:`23`,y:e+2.1,width:[18,22,14,20,16,24,12][t],height:`1.5`,fill:`#9A9A9A`})]},e)),/*#__PURE__*/ f(`path`,{d:`M54 0 H99 A9 9 0 0 1 108 9 V65 A9 9 0 0 1 99 74 H54 Z`,fill:`#F6F7F9`}),/*#__PURE__*/ f(`path`,{d:`M54 0 H99 A9 9 0 0 1 108 9 V12 H54 Z`,fill:`#fff`}),/*#__PURE__*/ f(`rect`,{x:`54`,y:`12`,width:`54`,height:`.8`,fill:`#E6E8EE`}),/*#__PURE__*/ f(`rect`,{x:`59`,y:`3.5`,width:`5`,height:`5`,rx:`1.6`,fill:`#DE1A4F`}),/*#__PURE__*/ f(`rect`,{x:`67`,y:`4`,width:`24`,height:`4`,rx:`2`,fill:`#EEF0F4`}),/*#__PURE__*/ f(`circle`,{cx:`101.5`,cy:`6`,r:`2.6`,fill:`#FFC9A8`}),/*#__PURE__*/ f(`rect`,{x:`59`,y:`16.5`,width:`22`,height:`16`,rx:`2.6`,fill:`#fff`,stroke:`#E6E8EE`,strokeWidth:`.7`}),/*#__PURE__*/ f(`path`,{d:`M61.5 29 L65 27 L68.5 28 L72 23.5 L75 25 L78.5 20`,fill:`none`,stroke:`#DE1A4F`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`rect`,{x:`84`,y:`16.5`,width:`19.5`,height:`16`,rx:`2.6`,fill:`#fff`,stroke:`#E6E8EE`,strokeWidth:`.7`}),/*#__PURE__*/ f(`rect`,{x:`87`,y:`20`,width:`9`,height:`2`,rx:`1`,fill:`#E2E5EC`}),/*#__PURE__*/ f(`text`,{x:`87`,y:`29.6`,fontSize:`6.5`,textLength:`12`,lengthAdjust:`spacingAndGlyphs`,fill:`#141821`,children:`92%`}),/*#__PURE__*/ f(`rect`,{x:`59`,y:`36`,width:`44.5`,height:`33`,rx:`3`,fill:`#fff`,stroke:`#E6E8EE`,strokeWidth:`.7`}),[42,50.5,59].map((e,t)=>/*#__PURE__*/ p(`g`,{children:[/*#__PURE__*/ f(`rect`,{x:`62.5`,y:e,width:[16,12,18][t],height:`2.2`,rx:`1.1`,fill:`#DFE3EA`}),/*#__PURE__*/ f(`rect`,{x:`88`,y:e-1.4,width:`12`,height:`5`,rx:`2.5`,fill:[`#E3F6EA`,`#FFF1DC`,`#FDE8EE`][t]})]},e)),/*#__PURE__*/ f(`rect`,{x:`53.4`,y:`0`,width:`1.2`,height:`74`,fill:`#fff`}),/*#__PURE__*/ f(`circle`,{cx:`54`,cy:`40`,r:`7.5`,fill:`#fff`,stroke:`rgba(20,24,33,.15)`,strokeWidth:`.8`}),/*#__PURE__*/ f(`rect`,{x:`51.3`,y:`36.5`,width:`1.3`,height:`7`,rx:`.65`,fill:`#141821`}),/*#__PURE__*/ f(`rect`,{x:`55.4`,y:`36.5`,width:`1.3`,height:`7`,rx:`.65`,fill:`#141821`})]}):e===`cp`?/*#__PURE__*/ p(en,{w:100,h:94,die:/*#__PURE__*/ p(u,{children:[/*#__PURE__*/ f(`rect`,{x:`44`,y:`0`,width:`11`,height:`92`,rx:`3`}),/*#__PURE__*/ f(`path`,{d:wn}),/*#__PURE__*/ f(`path`,{d:Tn}),/*#__PURE__*/ f(`rect`,{x:`35`,y:`87`,width:`29`,height:`7`,rx:`2.5`})]}),children:[/*#__PURE__*/ p(`defs`,{children:[/*#__PURE__*/ p(`linearGradient`,{id:t+`a`,x1:`0`,x2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#262A33`}),/*#__PURE__*/ f(`stop`,{offset:`.45`,stopColor:`#5A606C`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#23262E`})]}),/*#__PURE__*/ p(`linearGradient`,{id:t+`b`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#2A4FA8`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#1A3480`})]})]}),/*#__PURE__*/ f(`rect`,{x:`45`,y:`2`,width:`9`,height:`88`,rx:`2`,fill:i(`a`)}),/*#__PURE__*/ f(`rect`,{x:`43.5`,y:`0`,width:`12`,height:`5`,rx:`2`,fill:`#1C2130`}),/*#__PURE__*/ f(`path`,{d:wn,fill:i(`b`)}),/*#__PURE__*/ f(`text`,{x:`10`,y:`24`,fontSize:`9.5`,textLength:`45`,lengthAdjust:`spacingAndGlyphs`,fill:`#fff`,children:`BLOCK A`}),/*#__PURE__*/ f(`text`,{className:`d`,x:`10`,y:`34.5`,fontSize:`8`,textLength:`31`,lengthAdjust:`spacingAndGlyphs`,fill:`#fff`,opacity:`.92`,children:`ब्लॉक ए`}),/*#__PURE__*/ f(`path`,{d:`M76 20.5 L81.5 25 L76 29.5`,fill:`none`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`path`,{d:Tn,fill:`#fff`,stroke:`#1C3C8C`,strokeWidth:`1.6`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`path`,{d:`M17 51 L12.5 55.5 L17 60`,fill:`none`,stroke:`#1C3C8C`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`text`,{x:`22`,y:`53.6`,fontSize:`7`,textLength:`52`,lengthAdjust:`spacingAndGlyphs`,fill:`#1C3C8C`,children:`INNER CIRCLE`}),/*#__PURE__*/ f(`text`,{className:`d`,x:`22`,y:`62`,fontSize:`6.5`,textLength:`32`,lengthAdjust:`spacingAndGlyphs`,fill:`#1C3C8C`,children:`इनर सर्कल`}),/*#__PURE__*/ f(`rect`,{x:`35`,y:`87`,width:`29`,height:`7`,rx:`2.5`,fill:`#2B2F3A`})]}):e===`kiosk`?/*#__PURE__*/ p(en,{w:64,h:96,die:/*#__PURE__*/ p(u,{children:[/*#__PURE__*/ f(`rect`,{x:`8`,y:`0`,width:`48`,height:`72`,rx:`8`}),/*#__PURE__*/ f(`path`,{d:`M15 70 H49 L53 90 H11 Z`}),/*#__PURE__*/ f(`rect`,{x:`5`,y:`88`,width:`54`,height:`8`,rx:`3`})]}),children:[/*#__PURE__*/ p(`defs`,{children:[/*#__PURE__*/ p(`linearGradient`,{id:t+`a`,x1:`0`,x2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#B4BAC2`}),/*#__PURE__*/ f(`stop`,{offset:`.32`,stopColor:`#EEF0F3`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#C3C8CF`})]}),/*#__PURE__*/ p(`linearGradient`,{id:t+`b`,x1:`0`,x2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#959BA4`}),/*#__PURE__*/ f(`stop`,{offset:`.35`,stopColor:`#D2D6DB`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#A8AEB6`})]}),/*#__PURE__*/ p(`linearGradient`,{id:t+`c`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#3474F0`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#1C46B6`})]})]}),/*#__PURE__*/ f(`path`,{d:`M15 70 H49 L53 90 H11 Z`,fill:i(`b`)}),/*#__PURE__*/ f(`rect`,{x:`24`,y:`77`,width:`16`,height:`2.4`,rx:`1.2`,fill:`#2A2B30`}),/*#__PURE__*/ f(`rect`,{x:`5`,y:`88`,width:`54`,height:`8`,rx:`3`,fill:`#5C626B`}),/*#__PURE__*/ f(`rect`,{x:`8`,y:`0`,width:`48`,height:`72`,rx:`8`,fill:i(`a`)}),/*#__PURE__*/ f(`circle`,{cx:`32`,cy:`5.8`,r:`1.7`,fill:`#1D1D20`}),/*#__PURE__*/ f(`rect`,{x:`13`,y:`11`,width:`38`,height:`44`,rx:`3.5`,fill:`#17181C`}),/*#__PURE__*/ f(`rect`,{x:`15.5`,y:`13.5`,width:`33`,height:`39`,rx:`2`,fill:i(`c`)}),/*#__PURE__*/ f(`path`,{d:`M17.5 13.5 H46.5 A2 2 0 0 1 48.5 15.5 V18 H15.5 V15.5 A2 2 0 0 1 17.5 13.5 Z`,fill:`#fff`,opacity:`.16`}),/*#__PURE__*/ f(`circle`,{cx:`32`,cy:`28.5`,r:`5.2`,fill:`#E8EEFB`}),/*#__PURE__*/ f(`path`,{d:`M22.5 43 C22.5 36.5 27 34.5 32 34.5 C37 34.5 41.5 36.5 41.5 43 Z`,fill:`#E8EEFB`}),/*#__PURE__*/ f(`circle`,{cx:`42.5`,cy:`21.5`,r:`4.2`,fill:`#22C55E`}),/*#__PURE__*/ f(`path`,{d:`M41.6 19 h1.8 v1.6 h1.6 v1.8 h-1.6 v1.6 h-1.8 v-1.6 h-1.6 v-1.8 h1.6 z`,fill:`#fff`}),/*#__PURE__*/ f(`rect`,{x:`20`,y:`46`,width:`24`,height:`4`,rx:`2`,fill:`#fff`,opacity:`.95`}),[59,62,65].map(e=>/*#__PURE__*/ f(`rect`,{x:`25`,y:e,width:`14`,height:`1.3`,rx:`.65`,fill:`#80868F`},e))]}):e===`car`?/*#__PURE__*/ p(en,{w:124,h:72,die:/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`124`,height:`72`,rx:`12`}),children:[/*#__PURE__*/ p(`defs`,{children:[/*#__PURE__*/ p(`linearGradient`,{id:t+`a`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#1C2434`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#0A0C11`})]}),/*#__PURE__*/ p(`linearGradient`,{id:t+`b`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#F4F7FB`}),/*#__PURE__*/ f(`stop`,{offset:`.55`,stopColor:`#C9D2DE`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#8E9AAB`})]}),/*#__PURE__*/ p(`linearGradient`,{id:t+`c`,x1:`0`,x2:`1`,children:[/*#__PURE__*/ f(`stop`,{offset:`0`,stopColor:`#FFD23F`,stopOpacity:`0`}),/*#__PURE__*/ f(`stop`,{offset:`1`,stopColor:`#FFD23F`,stopOpacity:`.35`})]})]}),/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`124`,height:`72`,rx:`12`,fill:i(`a`)}),/*#__PURE__*/ p(`g`,{stroke:`#7DE3FF`,strokeOpacity:`.2`,strokeWidth:`.8`,children:[[56,61,66].map(e=>/*#__PURE__*/ f(`line`,{x1:`8`,y1:e,x2:`116`,y2:e},e)),[-40,-20,0,20,40].map(e=>/*#__PURE__*/ f(`line`,{x1:62+e*.5,y1:`52`,x2:62+e*1.6,y2:`70`},e))]}),/*#__PURE__*/ p(`g`,{transform:`translate(13 14) scale(0.163)`,children:[/*#__PURE__*/ f(`ellipse`,{cx:`305`,cy:`236`,rx:`270`,ry:`12`,fill:`#000`,opacity:`.5`}),/*#__PURE__*/ f(`path`,{d:hn,fill:i(`b`)}),/*#__PURE__*/ f(`path`,{d:`M408 90 Q400 80 382 80 L318 80 L318 124 L452 124 Z`,fill:`#1E2A3D`}),/*#__PURE__*/ f(`path`,{d:`M304 80 L258 80 Q242 82 230 92 L198 124 L304 124 Z`,fill:`#1E2A3D`}),/*#__PURE__*/ f(`path`,{d:`M332 86 L362 86 L346 118 L320 118 Z`,fill:`#7DE3FF`,opacity:`.2`}),/*#__PURE__*/ f(`path`,{d:`M311 126 L311 186 M200 150 L420 150`,stroke:`#7F8B9C`,strokeWidth:`5`,fill:`none`}),/*#__PURE__*/ f(`rect`,{x:`540`,y:`148`,width:`22`,height:`12`,rx:`4`,fill:`#FFE7A3`}),/*#__PURE__*/ f(`rect`,{x:`44`,y:`150`,width:`16`,height:`10`,rx:`3`,fill:`#E5484D`}),[145,465].map(e=>/*#__PURE__*/ p(`g`,{children:[/*#__PURE__*/ f(`circle`,{cx:e,cy:`195`,r:`40`,fill:`#15181D`}),/*#__PURE__*/ f(`circle`,{cx:e,cy:`195`,r:`18`,fill:`#C9D1DB`}),/*#__PURE__*/ f(`circle`,{cx:e,cy:`195`,r:`6`,fill:`#15181D`})]},e))]}),/*#__PURE__*/ f(`rect`,{x:`66`,y:`8`,width:`11`,height:`56`,fill:i(`c`)}),/*#__PURE__*/ f(`rect`,{x:`76.5`,y:`8`,width:`1.6`,height:`56`,rx:`.8`,fill:`#FFD23F`}),/*#__PURE__*/ f(`path`,{d:`M12 28 V20 H20 M104 20 H112 V28 M112 54 V62 H104 M20 62 H12 V54`,fill:`none`,stroke:`#7DE3FF`,strokeWidth:`1.8`,strokeLinecap:`round`}),/*#__PURE__*/ f(`rect`,{x:`83`,y:`5`,width:`34`,height:`11`,rx:`5.5`,fill:`#7DE3FF`}),/*#__PURE__*/ f(`text`,{className:`m`,x:`88`,y:`12.6`,fontSize:`6.6`,textLength:`24`,lengthAdjust:`spacingAndGlyphs`,fill:`#0B0D12`,children:`✓ 6/6`})]}):e===`image`&&r?/*#__PURE__*/ p(en,{w:96,h:72,die:/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`96`,height:`72`,rx:`8`}),children:[/*#__PURE__*/ f(`defs`,{children:/*#__PURE__*/ f(`clipPath`,{id:t+`a`,children:/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`96`,height:`72`,rx:`6`})})}),/*#__PURE__*/ f(`rect`,{x:`0`,y:`0`,width:`96`,height:`72`,rx:`6`,fill:`#DDD`}),/*#__PURE__*/ f(`image`,{href:r,x:`0`,y:`0`,width:`96`,height:`72`,preserveAspectRatio:`xMidYMid slice`,clipPath:i(`a`)})]}):/*#__PURE__*/ p(en,{w:64,h:64,die:/*#__PURE__*/ f(`circle`,{cx:`32`,cy:`32`,r:`32`}),children:[/*#__PURE__*/ f(`circle`,{cx:`32`,cy:`32`,r:`32`,style:{fill:`var(--bg)`}}),/*#__PURE__*/ f(`circle`,{cx:`32`,cy:`32`,r:`27`,fill:`none`,style:{stroke:`var(--fg)`},strokeOpacity:`.35`,strokeWidth:`1.2`,strokeDasharray:`2 3`}),/*#__PURE__*/ f(`text`,{className:`m`,x:`32`,y:`33`,fontSize:`24`,textAnchor:`middle`,dominantBaseline:`central`,style:{fill:`var(--fg)`},children:n})]})}function nn(){try{let e=I.current();return e===I.canvas||e===I.export||e===I.thumbnail}catch{return!1}}function rn(e){let t=Qt($,e),r=(t.projects&&t.projects.length?t.projects:on).map(e=>Qt(X,e)),i=r.length,o=nn(),c=s(null),l=`fw`+n().replace(/[^a-zA-Z0-9]/g,``),d=(e,n)=>t.customFonts&&e&&e.fontFamily?e.fontFamily:n,m={...t.style||{},"--paper":t.paperColor,"--grid":t.gridColor,"--gs":t.gridSize+`px`,"--ink":t.inkColor,"--muted":t.mutedColor,"--nav-d":t.topOffset+`px`,"--nav-m":t.topOffsetPhone+`px`,"--side":t.sidePadding+`px`,"--maxw":t.maxWidth+`px`,"--f-body":d(t.fontBody,ln),"--f-mono":d(t.fontMono,un),"--f-serif":d(t.fontTab,dn),"--f-hand":d(t.fontHand,fn),"--f-deva":pn};o&&(m[`--vh`]=Math.max(560,t.canvasHeight)/100+`px`);let g=JSON.stringify([r,t.autoDemo,t.cursorName,t.tilt,t.previewProject,t.stamps,t.clip,t.pen,t.showIntro,t.showOutro,m,o]);h(()=>{let e=c.current;if(e)return Zt(e,{canvas:o,preview:Math.round((t.previewProject||1)-1),uid:l,cursorName:t.cursorName||``,autoDemo:!!t.autoDemo,tilt:t.tilt})},[g]);let _=Math.min(48,12*(i-1)),v=94/Math.max(1,i);return/*#__PURE__*/ p(`div`,{ref:c,className:`fwk`+(t.grid?` grid`:``)+(o?` is-canvas`:``),style:Q(m),children:[/*#__PURE__*/ f(`link`,{rel:`stylesheet`,href:t.customFonts?cn:sn}),/*#__PURE__*/ f(`style`,{dangerouslySetInnerHTML:{__html:vn+_n}}),/*#__PURE__*/ p(`section`,{className:`fw`,style:Q({"--depth":Math.max(1,Math.min(i-1,5))}),"aria-labelledby":`${l}-title`,children:[t.showIntro&&/*#__PURE__*/ p(`header`,{className:`intro`,children:[/*#__PURE__*/ p(`div`,{children:[t.introHand&&/*#__PURE__*/ f(`span`,{className:`hand`,children:t.introHand}),/*#__PURE__*/ p(`h2`,{id:`${l}-title`,children:[/*#__PURE__*/ f(`span`,{children:t.introLine1}),/*#__PURE__*/ p(`span`,{children:[t.introLine2,t.showCount&&/*#__PURE__*/ p(`sup`,{children:[`(`,Sn(i),`)`]})]})]}),t.introText&&/*#__PURE__*/ f(`p`,{children:t.introText}),t.introHint&&/*#__PURE__*/ p(`div`,{className:`hint`,children:[/*#__PURE__*/ f(`i`,{}),t.introHint]})]}),/*#__PURE__*/ p(`div`,{className:`fan`,role:`list`,"aria-label":`Jump to a project`,style:Q({"--soon-l":JSON.stringify(t.soonBadge||`soon`)}),children:[t.fanNote&&/*#__PURE__*/ f(`span`,{className:`fan-note`,children:t.fanNote}),r.map((e,t)=>/*#__PURE__*/ p(`button`,{className:`mini`+(e.comingSoon?` soon`:``),type:`button`,"data-go":t,role:`listitem`,style:Q({"--r":(i>1?-_/2+_*t/(i-1):0)+`deg`,"--c":e.bg,"--f":e.fg}),children:[/*#__PURE__*/ f(`b`,{children:Sn(t+1)}),/*#__PURE__*/ f(`span`,{className:`art`}),/*#__PURE__*/ p(`span`,{children:[/*#__PURE__*/ f(`strong`,{children:e.short||e.title}),/*#__PURE__*/ p(`small`,{children:[/*#__PURE__*/ f(`span`,{children:e.category}),/*#__PURE__*/ f(`span`,{children:e.year})]})]})]},t))]})]}),/*#__PURE__*/ f(`div`,{className:`deck boot`,style:o?void 0:Q({height:`calc(var(--vh) * ${100+85*(i-1)})`}),children:/*#__PURE__*/ f(`div`,{className:`stage`,children:/*#__PURE__*/ f(`div`,{className:`stage-in`,children:r.map((e,n)=>{let r=mn[e.prototype]?e.prototype:`none`,a=mn[r],o=Sn(n+1),s=!e.comingSoon&&!!e.link,c=(e.tags||``).split(`,`).map(e=>e.trim()).filter(Boolean),d=[1,2,3].map(t=>({j:t,label:e[`n${t}Label`],stat:e[`n${t}Stat`],title:e[`n${t}Title`],text:e[`n${t}Text`]})).filter(e=>e.label||e.stat||e.title||e.text),m=e.image&&e.image.src?e.image:null,h=parseFloat(e.imageRatio)||1.6,g=e.marquee||e.tab||e.title,_=/*#__PURE__*/ p(u,{children:[/*#__PURE__*/ f(`span`,{children:g}),/*#__PURE__*/ f(`i`,{children:`✦`}),/*#__PURE__*/ f(`span`,{className:`o`,children:g}),/*#__PURE__*/ f(`i`,{children:`✦`})]}),y=e.tape?[,,,,,,].fill(e.tape).join(` `)+` `:``;return/*#__PURE__*/ p(`article`,{className:`card`+(e.comingSoon?` soon`:``)+(n===i-1?` last`:``),"data-i":n,"data-kind":r,"aria-labelledby":`${l}-t${n}`,style:Q({"--i":n,"--bg":e.bg,"--fg":e.fg,"--tone":e.tone,"--line":e.line,"--pc":e.cursor,"--dot":e.accent,"--tx":`${3+n*v}%`,"--tw":`${v-1.2}%`,"--sx":`${[65,84,6.5,27][n%4]}%`,"--sr":`${xn[n%4]}deg`}),children:[/*#__PURE__*/ p(`button`,{className:`tab`,type:`button`,"data-go":n,"aria-label":`Show project ${o}, ${e.tab||e.title}`,children:[/*#__PURE__*/ f(`svg`,{className:`tab-shape`,viewBox:`0 0 300 44`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:/*#__PURE__*/ f(`path`,{d:yn})}),/*#__PURE__*/ p(`span`,{className:`tab-l`,children:[/*#__PURE__*/ f(`span`,{className:`n`,children:o}),e.tab&&/*#__PURE__*/ p(`span`,{className:`nm`,children:[` `,e.tab]})]})]}),t.stamps&&/*#__PURE__*/ f(tn,{kind:r,id:`${l}s${n}`,num:o,img:r===`image`&&m&&m.src||``}),n===i-1&&t.clip&&/*#__PURE__*/ f(`span`,{className:`clip`,"aria-hidden":`true`,children:/*#__PURE__*/ p(`svg`,{viewBox:`0 0 110 92`,children:[/*#__PURE__*/ f(`path`,{d:`M36 46 L20 6 Q19 3 22 3 L44 3 Q47 3 46 6 L44 46`,fill:`none`,stroke:`#9EA3AB`,strokeWidth:`4.5`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`path`,{d:`M74 46 L90 6 Q91 3 88 3 L66 3 Q63 3 64 6 L66 46`,fill:`none`,stroke:`#D3D6DB`,strokeWidth:`4.5`,strokeLinejoin:`round`}),/*#__PURE__*/ f(`path`,{d:`M22 44 H88 L96 88 Q96 91 93 91 H17 Q14 91 14 88 Z`,fill:`#121316`}),/*#__PURE__*/ f(`path`,{d:`M22 44 H88 L90 54 H20 Z`,fill:`#33363d`}),/*#__PURE__*/ f(`path`,{d:`M30 62 H80`,stroke:`#2b2d33`,strokeWidth:`2`,strokeLinecap:`round`}),/*#__PURE__*/ f(`circle`,{cx:`36`,cy:`49`,r:`3`,fill:`#C9CCD2`}),/*#__PURE__*/ f(`circle`,{cx:`74`,cy:`49`,r:`3`,fill:`#C9CCD2`})]})}),n===i-1&&t.pen&&/*#__PURE__*/ f(`span`,{className:`pen`,"aria-hidden":`true`,children:/*#__PURE__*/ p(`svg`,{viewBox:`0 0 220 24`,children:[/*#__PURE__*/ f(`rect`,{x:`18`,y:`6`,width:`150`,height:`12`,rx:`6`,fill:`#16171b`}),/*#__PURE__*/ f(`rect`,{x:`40`,y:`6`,width:`34`,height:`12`,fill:`#2c2e34`}),/*#__PURE__*/ f(`path`,{d:`M168 6 L206 12 L168 18 Z`,fill:`#c9ccd2`}),/*#__PURE__*/ f(`path`,{d:`M200 11 L214 12 L200 13 Z`,fill:`#16171b`}),/*#__PURE__*/ f(`rect`,{x:`10`,y:`7`,width:`12`,height:`10`,rx:`3`,fill:`#c9ccd2`}),/*#__PURE__*/ f(`rect`,{x:`26`,y:`3`,width:`70`,height:`3`,rx:`1.5`,fill:`#c9ccd2`})]})}),/*#__PURE__*/ p(`div`,{className:`c-inner`,children:[/*#__PURE__*/ f(`span`,{className:`shade`,"aria-hidden":`true`}),/*#__PURE__*/ f(`div`,{className:`mq`,"aria-hidden":`true`,children:/*#__PURE__*/ p(`div`,{className:`mq-track`,children:[_,_]})}),e.comingSoon&&y&&/*#__PURE__*/ f(`div`,{className:`tape`,"aria-hidden":`true`,children:/*#__PURE__*/ f(`span`,{children:y})}),/*#__PURE__*/ p(`header`,{className:`c-top`,children:[/*#__PURE__*/ p(`div`,{className:`c-id`,children:[/*#__PURE__*/ f(`span`,{className:`num`,children:o}),/*#__PURE__*/ p(`div`,{children:[/*#__PURE__*/ f(`h3`,{id:`${l}-t${n}`,children:s?/*#__PURE__*/ f($t,{href:e.link,newTab:t.newTab,children:e.title}):e.title}),e.meta&&/*#__PURE__*/ f(`span`,{className:`meta`,children:e.meta})]})]}),(c.length>0||e.award)&&/*#__PURE__*/ p(`ul`,{className:`c-tags`,children:[e.award&&/*#__PURE__*/ f(`li`,{className:`award`,children:e.award}),c.map((e,t)=>/*#__PURE__*/ f(`li`,{children:e},t))]})]}),/*#__PURE__*/ p(`div`,{className:`c-stage`,"data-demo":r,children:[/*#__PURE__*/ f(`svg`,{className:`leads`,"aria-hidden":`true`}),gn.has(r)?/*#__PURE__*/ f(`div`,{className:`dev`,dangerouslySetInnerHTML:{__html:Xt(r,l+`p`+n)}},r):/*#__PURE__*/ f(`div`,{className:`dev`,children:r===`image`&&/*#__PURE__*/ f(`div`,{className:`img-proto`,style:Q({"--ar":h}),children:m?/*#__PURE__*/ f(`img`,{src:m.src,srcSet:m.srcSet,alt:m.alt||e.title,loading:`lazy`}):/*#__PURE__*/ f(`span`,{className:`ph`,children:`Add an image in the Projects panel`})})},r),d.map(e=>/*#__PURE__*/ p(`div`,{className:`note n${e.j}`,"data-to":a.anchors[e.j-1]||``,style:Q({"--x":a.pos[e.j-1][0],"--y":a.pos[e.j-1][1]}),children:[e.label&&/*#__PURE__*/ f(`span`,{className:`k`,children:e.label}),e.stat&&/*#__PURE__*/ f(`span`,{className:`big`,children:e.stat}),e.title&&/*#__PURE__*/ f(`b`,{children:e.title}),e.text]},e.j))]}),/*#__PURE__*/ p(`footer`,{className:`c-bot`,children:[/*#__PURE__*/ f(`p`,{className:`c-desc`,children:e.description}),e.comingSoon?/*#__PURE__*/ p(`span`,{className:`spin locked`,role:`img`,"aria-label":`Case study coming soon`,children:[/*#__PURE__*/ p(`svg`,{viewBox:`0 0 120 120`,"aria-hidden":`true`,children:[/*#__PURE__*/ f(`defs`,{children:/*#__PURE__*/ f(`path`,{id:`${l}-c${n}`,d:bn})}),/*#__PURE__*/ f(`text`,{children:/*#__PURE__*/ f(`textPath`,{href:`#${l}-c${n}`,children:t.soonRing})})]}),/*#__PURE__*/ f(`span`,{className:`arr`,"aria-hidden":`true`,children:/*#__PURE__*/ p(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`28`,height:`28`,children:[/*#__PURE__*/ f(`rect`,{x:`5`,y:`11`,width:`14`,height:`10`,rx:`2`}),/*#__PURE__*/ f(`path`,{d:`M8 11V8a4 4 0 0 1 8 0v3`})]})})]}):s?/*#__PURE__*/ p($t,{className:`spin`,href:e.link,newTab:t.newTab,"aria-label":`View the ${e.title} case study`,children:[/*#__PURE__*/ p(`svg`,{viewBox:`0 0 120 120`,"aria-hidden":`true`,children:[/*#__PURE__*/ f(`defs`,{children:/*#__PURE__*/ f(`path`,{id:`${l}-c${n}`,d:bn})}),/*#__PURE__*/ f(`text`,{children:/*#__PURE__*/ f(`textPath`,{href:`#${l}-c${n}`,children:t.ctaRing})})]}),/*#__PURE__*/ f(`span`,{className:`arr`,"aria-hidden":`true`,children:`↗`})]}):null]})]})]},n)})})})}),t.showOutro&&/*#__PURE__*/ p(`div`,{className:`after`,children:[/*#__PURE__*/ f(`p`,{children:(t.outroText||``).split(`
`).map((e,t,n)=>/*#__PURE__*/ p(a,{children:[e,t<n.length-1&&/*#__PURE__*/ f(`br`,{})]},t))}),t.outroButton&&/*#__PURE__*/ f($t,{href:t.outroLink||`#`,newTab:t.newTab,children:t.outroButton})]})]})]})}function an(e,t,n,r,i){if(i&&i(e),!e||e.defaultPrevented||r||e.metaKey||e.ctrlKey||e.shiftKey||e.button===1||!t||!t.routes||typeof t.navigate!=`function`||!n)return;let a=String(n).trim(),o=a.match(/^https?:\/\/(www\.)?akshattt\.com(\/[^?#]*)?/i);if(o)a=o[2]||`/`;else if(/^(https?:|mailto:|tel:|#)/i.test(a))return;a=a.replace(/^\.\//,`/`).replace(/[?#].*$/,``),a.startsWith(`/`)||(a=`/`+a),a.length>1&&(a=a.replace(/\/+$/,``));for(let[n,r]of Object.entries(t.routes))if(r&&r.path===a){e.preventDefault(),t.navigate(n,``);return}}var X,on,sn,cn,ln,un,dn,fn,pn,Z,mn,hn,gn,_n,vn,yn,bn,xn,Q,Sn,Cn,wn,Tn,$,En;function Dn(){return(Dn=e((()=>{r(),c(),m(),T(),X={title:`New project`,tab:`New`,short:``,category:`Category`,year:`2026`,meta:``,tags:``,award:``,description:``,link:``,comingSoon:!1,tape:`Work in progress ✦ Coming soon ✦`,marquee:``,prototype:`image`,image:void 0,imageRatio:`1.6`,bg:`#5B4BFF`,fg:`#FFFFFF`,tone:`#4E3FEA`,line:`#FFFFFF`,cursor:`#DE1A4F`,accent:`#5B4BFF`,n1Label:``,n1Stat:``,n1Title:``,n1Text:``,n2Label:``,n2Stat:``,n2Title:``,n2Text:``,n3Label:``,n3Stat:``,n3Title:``,n3Text:``},on=[{title:`ParkIn`,tab:`ParkIn`,short:`ParkIn`,category:`Mobile app`,year:`2026`,meta:`Jan 12, 2026 · Mobile app`,tags:`User research, Prototyping`,description:`A smart parking platform that lets people reserve parking, book EV charging and rent out private spots in real time. 85% of usability test participants completed a booking within two minutes.`,link:`/project/parkin-app`,marquee:`Park iN`,prototype:`parkin`,bg:`#22B5EA`,fg:`#111214`,tone:`#5ACCF3`,line:`#111214`,cursor:`#DE1A4F`,accent:`#22B5EA`,n1Label:`Note 01`,n1Title:`Colour-coded slots`,n1Text:`Green is free, red is full, blue has an EV charger.`,n2Label:`Research`,n2Stat:`72%`,n2Text:`of respondents ranked real-time availability as their top need.`,n3Label:`Note 02`,n3Title:`Four-step booking`,n3Text:`Slot, time, pay, done. Try it on the phone.`},{title:`Enterprise Platform`,tab:`Enterprise`,short:`Enterprise Platform`,category:`SaaS`,year:`2025`,meta:`Jun 1, 2025 · Web + mobile`,tags:`SaaS, Transformation`,description:`Led the redesign of an enterprise platform during its rebranding, modernising the desktop and mobile experience while preserving familiar workflows.`,link:`/project/enterprise-platform`,marquee:`Enterprise`,prototype:`ent`,bg:`#DE1A4F`,fg:`#FFFFFF`,tone:`#C70F41`,line:`#FFFFFF`,cursor:`#111214`,accent:`#DE1A4F`,n1Label:`Note 01`,n1Title:`Familiar workflows kept`,n1Text:`Navigation stays where long-time users expect it. Only the visual system changes.`,n2Label:`Try it`,n2Title:`Drag the handle`,n2Text:`Legacy screen on the left, the redesign on the right.`,n3Label:`Note 02`,n3Title:`Desktop and mobile`,n3Text:`Both rebuilt together during the rebrand.`},{title:`CP Signage System`,tab:`CP Signage`,short:`CP Signage`,category:`Wayfinding`,year:`2025`,meta:`Jan 2, 2025 · Wayfinding`,tags:`Wayfinding, Signage design`,award:`★ CPVS 2025–26`,description:`A clear, accessible and heritage-sensitive wayfinding system for Connaught Place. Selected under CPVS 2025–26 in the STP and FTP categories.`,link:`/project/signage-system`,marquee:`CP Signage`,prototype:`cp`,bg:`#E9A425`,fg:`#111214`,tone:`#F4BF55`,line:`#111214`,cursor:`#DE1A4F`,accent:`#E9A425`,n1Label:`Note 01`,n1Title:`Bilingual signs`,n1Text:`English and Hindi side by side, as on the real panels.`,n2Label:`Try it`,n2Title:`Tap any block`,n2Text:`The sign re-points to it from Central Park.`,n3Label:`Note 02`,n3Title:`Heritage-sensitive`,n3Text:`Designed to sit inside CP's protected architecture.`},{title:`Telemedical Kiosk`,tab:`Kiosk`,short:`Telemedical Kiosk`,category:`Healthcare`,year:`2025`,meta:`Apr 26, 2025 · Kiosk`,tags:`Healthcare UX, Kiosk design`,description:`A self-service healthcare kiosk that enables accessible remote consultations and streamlined patient care.`,link:`/project/telemedical-kiosk`,marquee:`Kiosk`,prototype:`kiosk`,bg:`#1FA868`,fg:`#FFFFFF`,tone:`#169457`,line:`#FFFFFF`,cursor:`#DE1A4F`,accent:`#1FA868`,n1Label:`Note 01`,n1Title:`Self-service`,n1Text:`Patients start a consultation on their own, one guided step at a time.`,n2Label:`Note 02`,n2Title:`Remote consultation`,n2Text:`A doctor joins over video, right at the kiosk.`,n3Label:`Try it`,n3Title:`The screen is live`,n3Text:`Tap through the flow, in English or हिन्दी.`},{title:`AI + AR Vehicle Inspection`,tab:`Car Inspection`,short:`AI + AR Vehicle Inspection`,category:`In progress`,year:`2026`,meta:`2026 · In progress · AI · AR · Mobile app`,tags:``,description:`An AI and AR powered app for inspecting vehicles. I'm designing it right now, and the case study lands soon.`,link:``,comingSoon:!0,tape:`Work in progress ✦ Coming soon ✦`,marquee:`Coming soon`,prototype:`car`,bg:`#121318`,fg:`#FFFFFF`,tone:`#1E2029`,line:`#7DE3FF`,cursor:`#22B5EA`,accent:`#7DE3FF`,n1Label:`AI`,n1Title:`Reads the car part by part`,n1Text:`The camera feed is checked panel by panel, flagging what looks off.`,n2Label:`AR`,n2Title:`Guidance on the vehicle`,n2Text:`Findings sit on the real car, right where they are.`,n3Label:`Sneak peek`,n3Title:`Move over the car`,n3Text:`The lens shows the inspection layer underneath.`}],sn=`https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400..900&family=Instrument+Serif&family=JetBrains+Mono:wght@400;500;700&family=Gochi+Hand&family=Noto+Sans+Devanagari:wght@500;700&display=swap`,cn=`https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@500;700&display=swap`,ln=`"Inter Tight", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif`,un=`"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace`,dn=`"Instrument Serif", "Iowan Old Style", "Times New Roman", serif`,fn=`"Gochi Hand", "Segoe Print", "Bradley Hand", cursive`,pn=`"Noto Sans Devanagari", "Mangal", "Kohinoor Devanagari", sans-serif`,Z=e=>`calc(${e}% - var(--nw))`,mn={parkin:{anchors:[`.lot`,`.p-loc`,`.p-sheet`],pos:[[`3%`,`8%`],[Z(97),`6%`],[Z(97),`64%`]]},ent:{anchors:[`.o-side`,`.handle`,`.window`],pos:[[`2%`,`10%`],[Z(98),`8%`],[`2%`,`66%`]]},cp:{anchors:[`.sign`,`.map .park`,`.map`],pos:[[Z(98),`8%`],[`2%`,`8%`],[`2%`,`68%`]]},kiosk:{anchors:[`.k-screen`,`.k-cam`,`.k-in`],pos:[[`3%`,`10%`],[Z(97),`8%`],[Z(97),`64%`]]},car:{anchors:[`.hits`,`.hud-card`,`.ar-view`],pos:[[`2%`,`6%`],[`2%`,`68%`],[Z(98),`66%`]]},image:{anchors:[`.img-proto`,`.img-proto`,`.img-proto`],pos:[[`2.5%`,`8%`],[Z(97.5),`8%`],[`2.5%`,`66%`]]},none:{anchors:[],pos:[[`2.5%`,`8%`],[Z(97.5),`8%`],[`2.5%`,`66%`]]}},hn=`M40 192 L40 162 Q42 142 72 136 L152 128 L214 84 Q228 72 254 70 L382 70 Q406 72 422 86 L470 128 L538 138 Q566 143 568 166 L568 192 Z`,gn=/* @__PURE__ */ new Set([`parkin`,`ent`,`cp`,`kiosk`,`car`]),_n=`
.fwk{--u:1vw;--vh:1svh;container:fwk / inline-size;position:relative;width:100%;overflow-x:clip;color:var(--ink);font-family:var(--f-body);font-size:16px;line-height:1.5;text-align:left;
  -webkit-font-smoothing:antialiased;--cyan:#22B5EA;--crimson:#DE1A4F;--mustard:#E9A425;--green:#1FA868;--violet:#5B4BFF;--note:#F3D98E}
.fwk.grid{background-color:var(--paper);background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:var(--gs) var(--gs)}
.fwk .fw{--nav:var(--nav-d);--peek:18px;--tab:44px;--lane:0px;--foot:16px;--nw:clamp(170px,calc(var(--u) * 15.5),224px);
  max-width:calc(var(--maxw) + var(--side) * 2);margin:0 auto;padding-inline:var(--side)}
@container fwk (max-width: 1180px){ .fwk .fw{--sk:.8} }
@container fwk (max-width: 560px){ .fwk .fw{--nav:var(--nav-m);--peek:12px;--tab:34px;--lane:0px;--foot:10px} }
.fwk,.fwk *,.fwk *::before,.fwk *::after{box-sizing:border-box}
.fwk button{font:inherit;color:inherit}
.fwk a{color:inherit}
.fwk :focus-visible{outline:2px solid var(--ink);outline-offset:3px}
.fwk h2,.fwk h3,.fwk p,.fwk ul{font-family:inherit}
.fwk .fw.tabs-num .tab-l .nm{display:none}
.fwk.is-canvas .deck{height:auto}
.fwk .snap{position:absolute;left:0;width:1px;height:1px;scroll-snap-align:start;scroll-snap-stop:always;pointer-events:none}
.fwk.is-canvas .stage{position:relative;top:0}
/* image prototype */
.fwk .img-proto{position:relative;width:min(62cqw,calc(var(--ar) * 84cqh));aspect-ratio:var(--ar);border-radius:18px;overflow:hidden;rotate:-2deg;
  background:color-mix(in srgb,var(--fg) 12%,transparent);box-shadow:0 26px 34px -20px rgba(0,0,0,.55)}
.fwk .img-proto img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.fwk .img-proto .ph{position:absolute;inset:14px;display:grid;place-items:center;border:2px dashed currentColor;border-radius:12px;opacity:.6;
  font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-align:center;padding:12px}
@container fwk (max-width: 560px){ .fwk .img-proto{width:min(94cqw,calc(var(--ar) * 90cqh))} }
`,vn=`/* ───────── intro: headline + a hand of cards ───────── */
.fwk .intro{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);align-items:center;gap:32px;padding-block:clamp(64px,calc(var(--vh) * 12),140px) clamp(40px,calc(var(--vh) * 8),90px)}
.fwk .hand{font-family:var(--f-hand);font-size:clamp(1.4rem,calc(var(--u) * 2),1.8rem);line-height:1;display:inline-block;transform:rotate(-3deg)}
.fwk .intro h2{margin:.2em 0 0;font-weight:850;font-size:clamp(3.6rem,calc(var(--u) * 10.4),10rem);line-height:.82;letter-spacing:-.065em}
.fwk .intro h2 span{display:block}
.fwk .intro h2 sup{font-family:var(--f-mono);font-weight:700;font-size:.26em;letter-spacing:0;vertical-align:top;position:relative;top:.35em;margin-left:.12em;color:var(--crimson)}
.fwk .intro p{margin:28px 0 0;max-width:34ch;font-size:clamp(1.05rem,calc(var(--u) * 1.3),1.2rem);color:var(--muted)}
.fwk .intro .hint{margin-top:22px;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px}
.fwk .intro .hint i{width:28px;height:1.5px;background:var(--ink)}
.fwk .fan{position:relative;height:clamp(300px,calc(var(--u) * 34),420px);justify-self:center;width:100%;max-width:460px}
.fwk .mini{--r:0deg;--c:var(--cyan);--f:var(--ink);position:absolute;left:50%;bottom:6%;width:clamp(150px,calc(var(--u) * 13),190px);aspect-ratio:3/4.1;translate:-50% 0;
  transform-origin:50% 135%;rotate:var(--r);transition:rotate .5s cubic-bezier(.3,1.3,.5,1),translate .45s cubic-bezier(.3,1.3,.5,1),box-shadow .3s;
  border:0;border-radius:18px;background:var(--c);color:var(--f);padding:14px 14px 16px;text-align:left;cursor:pointer;
  display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 18px 30px -18px rgba(0,0,0,.45)}
.fwk .mini.soon .art{background:repeating-linear-gradient(45deg,rgba(245,211,58,.9) 0 8px,transparent 8px 16px);opacity:.85}
.fwk .mini.soon .art::before{display:none}
.fwk .mini.soon b::after{content:var(--soon-l,"soon");font-family:var(--f-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;margin-left:8px;padding:2px 6px;border-radius:999px;background:#F5D33A;color:#111;vertical-align:middle}
.fwk .fan:hover .mini{rotate:calc(var(--r) * 1.45)}
.fwk .mini:hover,.fwk .mini:focus-visible{translate:-50% -34px;box-shadow:0 30px 40px -20px rgba(0,0,0,.5);z-index:5}
.fwk .mini b{font-family:var(--f-mono);font-weight:700;letter-spacing:-.06em;font-size:2.4rem;line-height:.9}
.fwk .mini strong{font-weight:750;font-size:1.15rem;line-height:1.05;letter-spacing:-.03em;display:block}
.fwk .mini small{font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;opacity:.8;display:flex;justify-content:space-between;margin-top:6px}
.fwk .mini .art{flex:1;margin:10px 0;border-radius:10px;background:color-mix(in srgb,var(--f) 12%,transparent);position:relative;overflow:hidden}
.fwk .mini .art::before{content:"";position:absolute;inset:22% 30%;border-radius:8px;border:2px solid var(--f);opacity:.55}
.fwk .fan-note{position:absolute;right:0;top:0;font-family:var(--f-hand);font-size:1.35rem;transform:rotate(6deg);line-height:1.05;text-align:right}

/* ───────── deck ───────── */
/* The deck is a tall section with one pinned stage. Scrolling inside it only changes which poster is
   on top; the posters then move with CSS transitions, which the graphics card runs on its own thread,
   so the motion stays smooth even while the prototypes are busy. */
.fwk .deck{position:relative;height:calc(var(--vh) * 440)}
.fwk .stage{position:sticky;top:var(--nav);height:calc(var(--vh) * 100 - var(--nav));min-height:540px}
.fwk .stage-in{position:absolute;inset:0;transform-origin:50% 0;perspective:1200px;perspective-origin:50% 20%}
.fwk .card{
  position:absolute;left:0;right:0;top:calc(var(--lane) + var(--peek) * var(--depth) + var(--tab) + 6px);bottom:var(--foot);
  /* position, tilt and size animate separately: the card rises fast while still tilted, then flattens as it lands */
  transition:translate .95s cubic-bezier(.2,.75,.2,1),rotate 1.15s cubic-bezier(.55,0,.15,1),scale .95s cubic-bezier(.2,.75,.2,1);
  color:var(--fg);isolation:isolate;
  transform-origin:50% 0;will-change:translate,rotate,scale;
}
.fwk .c-inner{position:absolute;inset:0;background:var(--bg);border-radius:30px;overflow:hidden;isolation:isolate;
  display:grid;grid-template-rows:auto minmax(0,1fr) auto;padding:clamp(18px,calc(var(--u) * 2.4),32px) clamp(18px,calc(var(--u) * 2.6),36px);
  box-shadow:0 -6px 16px -12px rgba(0,0,0,.35);contain:layout paint}
/* folder tab carrying the project name; tabs sit side by side so every name stays readable in the stack */
.fwk .tab{position:absolute;bottom:calc(100% - 2px);left:var(--tx);width:var(--tw);height:var(--tab);padding:0;border:0;background:none;color:var(--fg);cursor:pointer;z-index:2}
.fwk .tab-shape{position:absolute;inset:0;width:100%;height:calc(100% + 3px);overflow:visible}
.fwk .tab-shape path{fill:var(--bg)}
.fwk .tab-l{position:relative;display:flex;align-items:center;justify-content:center;gap:.3em;height:100%;padding:6px 14px 0;font-family:var(--f-serif);
  font-size:calc(clamp(.8rem,calc(var(--u) * 1.65),1.6rem) * var(--tabfs,1));line-height:1;text-transform:uppercase;white-space:nowrap;overflow:hidden}
.fwk .tab-l .nm{overflow:hidden;text-overflow:ellipsis}
.fwk .card:not(.top) .tab:hover .tab-l{text-decoration:underline;text-decoration-thickness:1.5px;text-underline-offset:4px}
.fwk .card.top .tab{cursor:default}
/* tabs stay side by side, each as wide as its name; stamps sit where no later tab can cover them */
/* die-cut stickers stuck to each folder; they show once the folder is filed under the next one.
   The last folder is never covered, so its sticker is always on. */
.fwk .stamp{position:absolute;top:max(calc(var(--peek) + 8px - var(--sh)), calc(-1 * (var(--lane) + var(--tab) + 2px + var(--peek) * var(--i))));left:var(--sx);z-index:3;rotate:var(--sr);pointer-events:none;
  filter:drop-shadow(0 5px 6px rgba(0,0,0,.24)) drop-shadow(0 1px 1.5px rgba(0,0,0,.2));
  transition:opacity .35s ease .3s,scale .5s cubic-bezier(.3,1.5,.5,1) .3s}
.fwk .stamp{--sh:calc(var(--h0) * var(--sk,1))}
.fwk .stamp svg{display:block;overflow:visible;width:calc(var(--w0) * var(--sk,1));height:var(--sh)}
.fwk .stamp .die *{fill:#fff;stroke:#fff;stroke-width:9px;stroke-linejoin:round}
.fwk .stamp text{font-family:var(--f-body);font-weight:800;letter-spacing:.02em}
.fwk .stamp text.m{font-family:var(--f-mono);font-weight:700}
.fwk .stamp text.d{font-family:var(--f-deva);font-weight:700;letter-spacing:0}
.fwk .card.top .stamp{opacity:0;scale:1.22;transition-delay:0s}
.fwk .card.last .stamp{top:max(calc(16px - var(--sh)), calc(-1 * (var(--lane) + var(--tab) + 2px + var(--peek) * var(--i))))}
.fwk .card.last.top .stamp{opacity:1;scale:1}
/* the folder still in progress is held by a binder clip, with a pen resting on it */
.fwk .clip{position:absolute;top:-58px;left:var(--cx,17%);width:64px;z-index:3;pointer-events:none;filter:drop-shadow(0 4px 4px rgba(0,0,0,.3))}
.fwk .clip svg,.fwk .pen svg{display:block;width:100%;height:auto}
.fwk .pen{position:absolute;top:-14px;left:var(--px,36%);width:170px;z-index:3;rotate:-9deg;pointer-events:none;filter:drop-shadow(0 3px 3px rgba(0,0,0,.35))}

.fwk .shade{position:absolute;inset:0;background:#0a0a0c;opacity:0;pointer-events:none;z-index:30;transition:opacity .95s cubic-bezier(.2,.75,.2,1)}
.fwk .card.far{visibility:hidden}
.fwk .deck.boot .card,.fwk .deck.boot .shade{transition:none!important}

/* fully covered posters only show their top edge: skip painting everything inside */
.fwk .card.buried .c-inner > :not(.shade){visibility:hidden}

/* the giant scrolling name */
.fwk .mq{position:absolute;left:0;right:0;top:50%;translate:0 -50%;z-index:0;pointer-events:none;white-space:nowrap;overflow:hidden}
.fwk .mq-track{display:inline-flex;align-items:center;gap:.22em;font-weight:900;font-size:clamp(110px,calc(var(--vh) * 31),340px);line-height:.8;letter-spacing:-.065em;text-transform:uppercase;color:var(--tone)}
.fwk .card.live .mq-track{will-change:transform}
.fwk .mq-track .o{color:transparent;-webkit-text-stroke:2px var(--tone)}
.fwk .mq-track i{font-style:normal;font-size:.4em;letter-spacing:0}

.fwk .c-top,.fwk .c-bot{position:relative;z-index:3;display:flex;justify-content:space-between;gap:20px}
.fwk .c-top{align-items:flex-start}
.fwk .c-id{display:flex;gap:16px;align-items:flex-start;min-width:0}
.fwk .c-id .num{font-family:var(--f-mono);font-weight:700;letter-spacing:-.06em;font-size:clamp(2.2rem,calc(var(--u) * 3.6),3.2rem);line-height:.8}
.fwk .c-id h3{margin:0;font-weight:750;font-size:clamp(1.6rem,calc(var(--u) * 2.6),2.4rem);line-height:1;letter-spacing:-.04em}
.fwk .c-id h3 a{text-decoration:none}
.fwk .c-id .meta{display:block;margin-top:6px;font-family:var(--f-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.8}
.fwk .c-tags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;margin:0;padding:0;list-style:none;max-width:44%}
.fwk .c-tags li{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;padding:6px 11px;border:1.5px solid var(--fg);border-radius:999px;white-space:nowrap}
.fwk .c-tags li.award{background:var(--fg);color:var(--bg)}
.fwk .c-bot{align-items:flex-end}
.fwk .c-desc{margin:0;max-width:38ch;font-size:clamp(1rem,calc(var(--u) * 1.15),1.12rem);line-height:1.4}

/* spinning case-study button */
.fwk .spin{position:relative;flex:none;width:clamp(96px,calc(var(--u) * 9),128px);aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg);display:grid;place-items:center;text-decoration:none;
  transition:scale .3s cubic-bezier(.3,1.4,.5,1)}
.fwk .spin svg{position:absolute;inset:0;width:100%;height:100%;animation:fwk-turn 16s linear infinite}
.fwk .spin text{font-family:var(--f-mono);font-size:9.6px;font-weight:700;letter-spacing:.2em;fill:currentColor}
.fwk .spin .arr svg{position:static;inset:auto;width:28px;height:28px;animation:none}
.fwk .spin .arr{font-size:clamp(1.6rem,calc(var(--u) * 2.4),2.2rem);font-weight:600;transition:rotate .35s}
.fwk .spin:hover{scale:1.08}
.fwk .spin:hover .arr{rotate:45deg}
@keyframes fwk-turn{to{rotate:360deg}}

/* stage: the prototype + notes */
.fwk .c-stage{position:relative;z-index:2;min-height:0;container-type:size;display:grid;place-items:center;perspective:1300px}
.fwk .dev{position:relative;z-index:2;display:grid;place-items:center}
.fwk .leads{position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;overflow:visible;contain:layout}
.fwk .leads path{fill:none;stroke:var(--line);stroke-width:1.5;stroke-dasharray:4 5}
.fwk .leads circle{fill:var(--line)}
.fwk .leads circle.ring{fill:none;stroke:var(--line);stroke-width:1.5}
.fwk .note{position:absolute;left:var(--x);top:var(--y);z-index:4;width:var(--nw);background:#fff;color:#111214;padding:11px 13px 12px;border-radius:12px;
  box-shadow:0 8px 14px -10px rgba(0,0,0,.45);font-size:13px;line-height:1.35;cursor:default;transition:translate .3s, box-shadow .3s}
.fwk .note:hover{translate:0 -3px;box-shadow:0 20px 30px -16px rgba(0,0,0,.55)}
.fwk .note .k{display:flex;align-items:center;gap:6px;font-family:var(--f-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#6a6c70;margin-bottom:4px}
.fwk .note .k::before{content:"";width:8px;height:8px;border-radius:2px;background:var(--dot)}
.fwk .note b{display:block;font-size:14.5px;letter-spacing:-.01em}
.fwk .note .big{display:block;font-weight:800;font-size:28px;letter-spacing:-.04em;line-height:1}
.fwk .card.live .note{animation:fwk-noteIn .6s cubic-bezier(.3,1.3,.5,1) both}
.fwk .card.live .note.n2{animation-delay:.12s}
.fwk .card.live .note.n3{animation-delay:.24s}
@keyframes fwk-noteIn{from{opacity:0;translate:0 14px;scale:.94}}
.fwk .spot{outline:3px solid #fff!important;outline-offset:5px;animation:fwk-spot 1s ease-in-out infinite alternate}
@keyframes fwk-spot{to{outline-offset:9px}}

/* SRISHTI multiplayer cursor */
.fwk .cur{display:flex;align-items:flex-start;gap:1px}
.fwk .cur svg{width:18px;height:18px;flex:none;filter:drop-shadow(0 1px 1px rgba(0,0,0,.25));transition:transform .15s}
.fwk .cur svg path{fill:var(--pc);stroke:#fff;stroke-width:1.4}
.fwk .cur b{font-family:var(--f-mono);font-weight:700;font-size:11px;letter-spacing:.06em;color:#fff;background:var(--pc);padding:3px 8px;border-radius:999px;margin-top:12px;white-space:nowrap}
.fwk .peer{position:absolute;left:0;top:0;z-index:9;pointer-events:none;opacity:0;transition:transform .75s cubic-bezier(.55,0,.2,1),opacity .35s}
.fwk .peer.on{opacity:1}
.fwk .peer.track{transition:opacity .35s}
.fwk .card.live .dev,.fwk .card.live .peer{will-change:transform}
.fwk .peer.press svg{transform:scale(.82) translate(-1px,-1px)}
.fwk .rip{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:2px solid var(--pc);z-index:8;pointer-events:none;animation:fwk-rip .6s ease-out forwards}
@keyframes fwk-rip{from{transform:scale(.2);opacity:1}to{transform:scale(1.4);opacity:0}}

/* ───────── 01 · ParkIn phone ───────── */
.fwk .phone{height:min(94cqh,560px);aspect-ratio:9/18.6;background:#0C0D12;border-radius:34px;padding:7px;position:relative;rotate:-5deg;
  box-shadow:0 26px 30px -18px rgba(0,30,60,.5),0 0 0 1.5px rgba(255,255,255,.14) inset;font-size:clamp(8.5px,2cqh,12px)}
.fwk .phone::before{content:"";position:absolute;top:14px;left:50%;width:28%;height:15px;border-radius:10px;background:#0C0D12;transform:translateX(-50%);z-index:3}
.fwk .screen{height:100%;border-radius:28px;overflow:hidden;background:#F6F6FB;color:#14151B;display:flex;flex-direction:column}
.fwk .sb{display:flex;justify-content:space-between;padding:1.1em 1.9em .3em;font-weight:600;font-size:.95em}
.fwk .p-head{padding:.6em 1.3em .5em;display:flex;flex-direction:column;gap:.15em}
.fwk .p-logo{display:flex;align-items:center;gap:.45em;font-weight:700;font-size:1.05em}
.fwk .p-logo i{width:1.6em;height:1.6em;border-radius:.45em;background:var(--violet);color:#fff;display:grid;place-items:center;font-style:normal;font-weight:800;font-size:.9em}
.fwk .p-title{font-weight:650;font-size:1.65em;letter-spacing:-.03em;line-height:1.05;margin-top:.2em}
.fwk .p-loc{color:#5E6170;font-size:.95em;display:flex;align-items:center;gap:.45em;align-self:flex-start;border-radius:.4em}
.fwk .p-loc i{width:.6em;height:.6em;border-radius:50%;background:#2FB566;position:relative;flex:none}
.fwk .p-loc i::after{content:"";position:absolute;inset:-.25em;border-radius:50%;background:rgba(47,181,102,.35);animation:fwk-live 1.6s infinite}
@keyframes fwk-live{from{transform:scale(.6);opacity:1}to{transform:scale(1.6);opacity:0}}
.fwk .legend{display:flex;gap:.9em;padding:.2em 1.3em .6em;font-size:.86em;color:#3c3f48}
.fwk .legend span{display:flex;align-items:center;gap:.35em}
.fwk .legend span::before{content:"";width:.8em;height:.8em;border-radius:.2em;background:var(--c)}
.fwk .lot{flex:1;min-height:0;margin:0 1em;padding:.7em;background:#24252E;border-radius:1em;display:grid;grid-template-columns:1fr .45fr 1fr;gap:.4em}
.fwk .lot-col{display:flex;flex-direction:column;gap:.35em}
.fwk .lane{border-left:2px dashed rgba(255,255,255,.35);margin-left:50%}
.fwk .slot{flex:1;min-height:0;border:0;border-radius:.4em;display:flex;align-items:center;justify-content:space-between;padding:0 .55em;cursor:pointer;
  background:#2FB566;color:#fff;font-weight:700;font-size:.9em;transition:background .45s, transform .2s, box-shadow .2s}
.fwk .slot svg{width:1em;height:1em}
.fwk .slot.ev{background:#2F6BFF}
.fwk .slot.full{background:#E0473C;cursor:not-allowed}
.fwk .slot.full .st::after{content:" · full";font-weight:500;opacity:.85}
.fwk .slot.sel{box-shadow:0 0 0 .2em #fff, 0 0 0 .38em var(--violet);transform:scale(1.04)}
.fwk .slot:not(.full):hover{transform:scale(1.03)}
.fwk .stepper{display:flex;gap:.3em;padding:0 1.3em;margin:.8em 0 .5em}
.fwk .stp{flex:1;font-size:.74em;color:#8b8e9a;text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.fwk .stp::before{content:"";display:block;height:.28em;border-radius:1em;background:#DCDCE6;margin-bottom:.3em}
.fwk .stp.on{color:#14151B}.fwk .stp.on::before{background:var(--violet)}
.fwk .stp.done::before{background:#2FB566}
.fwk .p-sheet{flex:none;height:34%;margin:0 .6em .6em;padding:1em 1.1em;border-radius:1.2em;background:#fff;box-shadow:0 -6px 20px -10px rgba(0,0,0,.2);display:flex;flex-direction:column;gap:.55em}
.fwk .p-sheet b{font-weight:700;font-size:1.3em;letter-spacing:-.02em;line-height:1.1}
.fwk .p-sheet .sub{color:#5E6170}
.fwk .p-cta{margin-top:auto;border:0;border-radius:.8em;padding:.85em;background:var(--violet);color:#fff;font-weight:700;cursor:pointer}
.fwk .p-cta.alt{background:#EEEEF5;color:#14151B}
.fwk .p-chips{display:flex;gap:.4em}
.fwk .p-chips button{flex:1;border:1.5px solid #DCDCE6;background:#fff;border-radius:.6em;padding:.55em 0;font-weight:600;cursor:pointer}
.fwk .p-chips button[aria-pressed="true"]{border-color:var(--violet);background:#EEECFF;color:var(--violet)}
.fwk .p-sheet dl{display:grid;grid-template-columns:auto 1fr;gap:.15em 1em;margin:0}
.fwk .p-sheet dt{color:#5E6170}.fwk .p-sheet dd{margin:0;font-weight:600;text-align:right}
.fwk .ticket{display:flex;align-items:center;gap:.8em}
.fwk .ticket .ok{width:2.2em;height:2.2em;border-radius:50%;background:#2FB566;color:#fff;display:grid;place-items:center;font-weight:800;flex:none}
.fwk .barcode{height:2.2em;border-radius:.3em;background:repeating-linear-gradient(90deg,#14151B 0 2px,transparent 2px 4px,#14151B 4px 5px,transparent 5px 8px,#14151B 8px 11px,transparent 11px 12px)}

/* ───────── 02 · Enterprise compare ───────── */
.fwk .window{--x:50%;position:relative;width:min(50cqw,122cqh);aspect-ratio:16/10.4;border-radius:12px;overflow:hidden;container-type:inline-size;rotate:2deg;
  box-shadow:0 26px 34px -20px rgba(60,0,15,.7),0 0 0 1px rgba(255,255,255,.2)}
.fwk .layer{position:absolute;inset:0;display:flex;flex-direction:column}
.fwk .old{background:#D4D0C8;color:#000;font-family:Tahoma,Verdana,"Segoe UI",sans-serif;font-size:1.45cqw}
.fwk .old .tb{background:linear-gradient(90deg,#0A246A,#3A6EA5);color:#fff;font-weight:700;padding:.45em .8em;display:flex;justify-content:space-between}
.fwk .old .tb i{font-style:normal;letter-spacing:.3em}
.fwk .old .mb{display:flex;gap:1.2em;padding:.3em .8em;border-bottom:1px solid #808080}
.fwk .old .tools{display:flex;gap:.3em;padding:.35em .6em;border-bottom:1px solid #808080}
.fwk .old .tools span{width:1.7em;height:1.5em;background:#D4D0C8;border:1px solid;border-color:#fff #808080 #808080 #fff}
.fwk .old .bd{flex:1;display:grid;grid-template-columns:22% 1fr;gap:.5em;padding:.5em;min-height:0}
.fwk .old aside{background:#fff;border:1px solid;border-color:#808080 #fff #fff #808080;padding:.4em;display:flex;flex-direction:column;gap:.25em}
.fwk .old aside span{padding:.1em .3em}
.fwk .old aside span.on{background:#0A246A;color:#fff}
.fwk .old main{display:flex;flex-direction:column;gap:.5em;min-height:0}
.fwk .old .filters{display:flex;gap:.5em;align-items:center}
.fwk .old .filters span{flex:1;height:1.5em;background:#fff;border:1px solid;border-color:#808080 #fff #fff #808080}
.fwk .old .filters b{font-weight:400;padding:.15em .8em;border:1px solid;border-color:#fff #404040 #404040 #fff}
.fwk .old table{width:100%;border-collapse:collapse;background:#fff;font-size:.95em}
.fwk .old th{background:#D4D0C8;border:1px solid #808080;text-align:left;font-weight:400;padding:.15em .3em}
.fwk .old td{border:1px solid #C0C0C0;padding:.12em .3em;height:1.55em}
.fwk .old td i{display:block;height:.55em;background:#9a9a9a;width:var(--w)}
.fwk .new{background:#F6F7F9;color:#141821;font-family:var(--f-body);font-size:1.45cqw;clip-path:inset(0 0 0 50%)}
.fwk .new .tb{display:flex;align-items:center;gap:1em;padding:.8em 1.2em;background:#fff;border-bottom:1px solid #E6E8EE}
.fwk .new .logo{width:1.6em;height:1.6em;border-radius:.45em;background:linear-gradient(135deg,#DE1A4F,#FF7A9C)}
.fwk .new .search{flex:1;max-width:45%;height:2em;border-radius:999px;background:#F1F3F7;display:flex;align-items:center;padding-left:.9em;color:#8a90a0;font-size:.9em}
.fwk .new .av{margin-left:auto;width:1.9em;height:1.9em;border-radius:50%;background:#FFC9A8}
.fwk .new .bd{flex:1;display:grid;grid-template-columns:20% 1fr;min-height:0}
.fwk .new aside{padding:1em .8em;display:flex;flex-direction:column;gap:.35em;border-right:1px solid #E6E8EE;background:#fff}
.fwk .new aside span{padding:.45em .7em;border-radius:.6em;color:#4a5060;display:flex;gap:.5em;align-items:center}
.fwk .new aside span::before{content:"";width:.8em;height:.8em;border-radius:.25em;background:currentColor;opacity:.35}
.fwk .new aside span.on{background:#FDE8EE;color:#C3123F;font-weight:600}
.fwk .new main{padding:1em 1.2em;display:flex;flex-direction:column;gap:.9em;min-height:0}
.fwk .new .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:.8em}
.fwk .new .kpi{background:#fff;border-radius:.8em;padding:.7em .8em;border:1px solid #E9EBF0;display:flex;flex-direction:column;gap:.4em}
.fwk .new .kpi i{height:.55em;width:45%;border-radius:1em;background:#E2E5EC}
.fwk .new .kpi svg{width:100%;height:2.2em}
.fwk .new .tbl{background:#fff;border-radius:.8em;border:1px solid #E9EBF0;overflow:hidden;flex:1;min-height:0}
.fwk .new .row{display:grid;grid-template-columns:1.4fr 1fr .8fr;gap:1em;align-items:center;padding:.62em .9em;border-top:1px solid #F0F1F5}
.fwk .new .row:first-child{border-top:0;color:#8a90a0;font-size:.85em}
.fwk .new .row i{display:block;height:.6em;border-radius:1em;background:#DFE3EA;width:var(--w)}
.fwk .pill{justify-self:start;font-size:.8em;padding:.2em .7em;border-radius:999px;font-weight:600}
.fwk .pill.g{background:#E3F6EA;color:#1D8A4B}.fwk .pill.a{background:#FFF1DC;color:#A8650B}.fwk .pill.b{background:#FDE8EE;color:#C3123F}
.fwk .ltag{position:absolute;bottom:.9em;font-family:var(--f-mono);font-size:max(9px,1.2cqw);letter-spacing:.1em;text-transform:uppercase;padding:.35em .7em;z-index:2}
.fwk .old .ltag{left:.9em;background:#000;color:#fff}
.fwk .new .ltag{right:.9em;background:var(--crimson);color:#fff}
.fwk .handle{position:absolute;top:0;bottom:0;left:0;width:2px;margin-left:-1px;background:#fff;z-index:3;pointer-events:none;transform:translateX(var(--hx,0px))}
.fwk .handle::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:max(28px,4.4cqw);height:max(28px,4.4cqw);border-radius:50%;background:#fff;
  box-shadow:0 6px 18px rgba(0,0,0,.35);background-image:linear-gradient(90deg,transparent 38%,#141821 38% 44%,transparent 44% 56%,#141821 56% 62%,transparent 62%);background-size:60% 40%;background-position:center;background-repeat:no-repeat}
.fwk .window input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;z-index:4;-webkit-appearance:none;appearance:none}
.fwk .window:has(input:focus-visible){outline:2px solid #fff;outline-offset:4px}

/* ───────── 03 · CP wayfinding ───────── */
.fwk .cp-board{position:relative;width:min(52cqw,128cqh);aspect-ratio:1.42/1;background:#F1EDE5;border-radius:22px;padding:4%;display:flex;align-items:center;gap:4%;rotate:-2deg;
  background-image:repeating-linear-gradient(90deg,transparent 0 46px,rgba(150,135,110,.1) 46px 48px,transparent 48px 52px,rgba(150,135,110,.1) 52px 54px,transparent 54px 100px);
  box-shadow:0 26px 34px -20px rgba(80,50,0,.55)}
.fwk .cp-board svg.map{height:100%;width:auto;aspect-ratio:1/1;flex:none;overflow:visible}
.fwk .map .ground{fill:#E2DACA}
.fwk .map .road{fill:none;stroke:#FBF8F2;stroke-width:9}
.fwk .map .radial{stroke:#FBF8F2;stroke-width:7}
.fwk .map .park{fill:#9DBB7E}
.fwk .map .blk{fill:#fff;stroke:#BDB29A;stroke-width:1;cursor:pointer;transition:fill .3s}
.fwk .map g.b:hover .blk,.fwk .map g.b:focus-visible .blk{fill:#DCE5FF}
.fwk .map g.b.sel .blk{fill:#1C3C8C;stroke:#1C3C8C}
.fwk .map g.b text{font-family:var(--f-body);font-weight:700;font-size:15px;fill:#2E2A22;text-anchor:middle;dominant-baseline:central;pointer-events:none}
.fwk .map g.b.sel text{fill:#fff}
.fwk .map g.b:focus{outline:none}
.fwk .map .route{stroke:#DE1A4F;stroke-width:3;stroke-dasharray:2 7;stroke-linecap:round;fill:none}
.fwk .map .pin{fill:#111214}
.fwk .map .pin-ring{fill:none;stroke:#111214;stroke-width:2;transform-origin:200px 200px;transform:scale(1.6);opacity:.5}
@keyframes fwk-ping{0%{transform:scale(.6);opacity:1}100%{transform:scale(2.2);opacity:0}}
.fwk .map .lbl{font-family:var(--f-mono);font-size:8.5px;fill:#4f4738;letter-spacing:.08em;text-anchor:middle}
.fwk .signs{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px;font-size:clamp(9px,2cqh,14px)}
.fwk .sign{background:#1C3C8C;color:#fff;border-radius:.5em;padding:.7em .9em;box-shadow:0 0 0 .2em #fff,0 18px 30px -18px rgba(10,20,60,.7);display:flex;align-items:center;gap:.7em}
.fwk .sign .bk{font-weight:700;font-size:1.3em;white-space:nowrap}
.fwk .sign .sep{width:2px;align-self:stretch;background:rgba(255,255,255,.7)}
.fwk .sign .hi{font-family:var(--f-deva);font-weight:700;font-size:1.2em;white-space:nowrap}
.fwk .dir{background:#fff;color:#1C3C8C;border-radius:.5em;padding:.7em .9em;display:flex;align-items:center;justify-content:space-between;gap:.6em;box-shadow:0 18px 30px -18px rgba(10,20,60,.5)}
.fwk .dir .t{display:flex;flex-direction:column;line-height:1.15}
.fwk .dir .t span{font-family:var(--f-mono);font-size:.72em;letter-spacing:.1em;text-transform:uppercase;color:#56607a}
.fwk .dir .t b{font-size:1.05em}
.fwk .dir .t b[lang="hi"]{font-family:var(--f-deva)}
.fwk .arrow{width:2.6em;height:2.6em;border-radius:50%;background:#1C3C8C;color:#fff;display:grid;place-items:center;flex:none}
.fwk .arrow svg{width:60%;height:60%;transition:transform .6s cubic-bezier(.3,1.4,.5,1)}
.fwk .cp-note{font-family:var(--f-mono);font-size:.68em;letter-spacing:.08em;text-transform:uppercase;color:#6b634f}

/* ───────── 04 · Kiosk ───────── */
.fwk .kiosk{height:min(98cqh,600px);aspect-ratio:.5;display:flex;flex-direction:column;align-items:center;font-size:clamp(8.5px,2.05cqh,13px);rotate:3deg}
.fwk .k-body{width:100%;flex:0 0 66%;background:linear-gradient(90deg,#B9BEC4,#E4E7EA 30%,#CDD1D6);border-radius:.9em .9em .4em .4em;padding:.9em .8em 1em;display:flex;flex-direction:column;gap:.6em;
  box-shadow:0 24px 30px -18px rgba(0,40,20,.65)}
.fwk .k-cam{width:.8em;height:.8em;border-radius:50%;background:#1d1d20;margin:0 auto}
.fwk .k-screen{flex:1;min-height:0;border-radius:.4em;background:#fff;border:.4em solid #1B1C20;overflow:hidden;display:flex;flex-direction:column;color:#0F1E3D}
.fwk .k-top{background:#2A5BD7;color:#fff;padding:.6em .8em;display:flex;justify-content:space-between;align-items:center;font-family:var(--f-mono);font-size:.75em;letter-spacing:.08em;text-transform:uppercase}
.fwk .k-top i{font-style:normal;opacity:.8}
.fwk .k-in{flex:1;min-height:0;display:flex;flex-direction:column;gap:.8em;padding:1em}
.fwk .k-dots{display:flex;gap:.35em}
.fwk .k-dots i{flex:1;height:.3em;border-radius:1em;background:#E1E7F5}
.fwk .k-dots i.on{background:#2A5BD7}
.fwk .k-hero{margin-top:auto;display:flex;flex-direction:column;gap:.3em}
.fwk .k-big{font-weight:800;font-size:2.6em;line-height:.95;letter-spacing:-.04em}
.fwk .k-q{font-weight:700;font-size:1.5em;line-height:1.1;letter-spacing:-.02em}
.fwk [lang="hi"].k-q,.fwk [lang="hi"].k-opt,.fwk [lang="hi"].k-btn,.fwk [lang="hi"].k-p{font-family:var(--f-deva)}
.fwk .k-p{margin:0;color:#4B5A78}
.fwk .k-btn{border:0;border-radius:.6em;background:#2A5BD7;color:#fff;font-weight:700;padding:1em;font-size:1.05em;cursor:pointer;margin-top:auto}
.fwk .k-btn.end{background:#D23B30;margin-top:0;flex:1}
.fwk .k-grid{display:grid;gap:.55em;margin-top:auto}
.fwk .k-grid.two{grid-template-columns:1fr 1fr}
.fwk .k-opt{border:2px solid #D3DDF3;background:#F3F6FD;border-radius:.6em;padding:1.05em .6em;font-weight:650;font-size:1em;cursor:pointer;text-align:left;color:#0F1E3D}
.fwk .k-opt:hover{border-color:#2A5BD7}
.fwk .k-spin{width:3.2em;height:3.2em;border-radius:50%;border:.38em solid #E1E7F5;border-top-color:#2A5BD7;animation:fwk-spinr 1s linear infinite;margin:auto auto .6em}
@keyframes fwk-spinr{to{transform:rotate(360deg)}}
.fwk .k-center{margin-bottom:auto;text-align:center;display:flex;flex-direction:column;gap:.3em}
.fwk .k-video{flex:1;min-height:0;border-radius:.5em;background:radial-gradient(circle at 50% 40%,#355A9E,#132447);position:relative;display:grid;place-items:center}
.fwk .k-doc{width:4.2em;height:4.2em;border-radius:50%;background:#D6E2FA;color:#1B3F8F;display:grid;place-items:center;font-weight:800;font-size:1.2em}
.fwk .k-live{position:absolute;left:.7em;top:.6em;color:#fff;font-size:.8em;font-weight:600;display:flex;align-items:center;gap:.35em}
.fwk .k-live::before{content:"";width:.55em;height:.55em;border-radius:50%;background:#FF5A4E;animation:fwk-blink 1.4s infinite}
@keyframes fwk-blink{50%{opacity:.25}}
.fwk .k-self{position:absolute;right:.6em;bottom:.6em;width:26%;aspect-ratio:3/4;border-radius:.3em;background:#E9D9C8;border:2px solid #fff}
.fwk .k-ctrls{display:flex;gap:.5em}
.fwk .k-round{width:3.2em;border:0;border-radius:.6em;background:#E1E7F5;color:#0F1E3D;cursor:pointer;display:grid;place-items:center}
.fwk .k-round svg{width:1.3em;height:1.3em}
.fwk .k-lower{width:100%;flex:1;background:linear-gradient(90deg,#9FA5AC,#CED2D7 30%,#B3B8BE);border-radius:.3em;display:flex;flex-direction:column;align-items:center;gap:.8em;padding-top:1.1em}
.fwk .k-lower i{width:46%;height:.5em;border-radius:.3em;background:#2a2b30}
.fwk .k-lower i:nth-child(2){width:30%;height:2.2em;background:#3a3c42}


/* ───────── 05 · coming soon: AR inspection teaser ───────── */
.fwk .tape{position:absolute;z-index:6;right:-92px;top:52px;width:400px;rotate:35deg;background:#F5D33A;color:#111;overflow:hidden;pointer-events:none;
  font-family:var(--f-mono);font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;padding:8px 0;
  box-shadow:0 0 0 0 transparent,inset 0 5px 0 -1px #111,inset 0 -5px 0 -1px #111}
.fwk .tape span{display:inline-block;white-space:nowrap;animation:fwk-tape 14s linear infinite}
@keyframes fwk-tape{to{translate:-50% 0}}
.fwk .arphone{width:min(60cqw,152cqh);aspect-ratio:19.5/9;background:#07080B;border-radius:30px;padding:9px;rotate:-3deg;
  box-shadow:0 26px 34px -18px rgba(0,0,0,.85),0 0 0 1.5px rgba(255,255,255,.12) inset,0 0 40px -14px rgba(125,227,255,.35)}
.fwk .ar-view{--mx:50%;--my:50%;--p:0%;position:relative;height:100%;border-radius:22px;overflow:hidden;cursor:crosshair;
  background:radial-gradient(ellipse at 50% 25%,#2B3142,#0D0F15 72%)}
.fwk .ar-floor{position:absolute;left:-20%;right:-20%;bottom:-6%;height:46%;transform:perspective(300px) rotateX(58deg);transform-origin:50% 100%;
  background-image:linear-gradient(rgba(125,227,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(125,227,255,.16) 1px,transparent 1px);background-size:34px 34px}
.fwk .car{position:absolute;left:9%;width:82%;bottom:9%;height:auto;overflow:visible}
.fwk .car .shadow{fill:rgba(0,0,0,.45)}
.fwk .car .body{fill:rgba(125,227,255,.07);stroke:#7DE3FF;stroke-width:2.2}
.fwk .car .win{fill:rgba(125,227,255,.14);stroke:#7DE3FF;stroke-width:1.6}
.fwk .car .detail{fill:none;stroke:#7DE3FF;stroke-width:1.6;opacity:.7}
.fwk .car .wheel{fill:#0D0F15;stroke:#7DE3FF;stroke-width:2.2}
.fwk .car .hub{fill:none;stroke:#7DE3FF;stroke-width:1.4;opacity:.7}
.fwk .car.xray{pointer-events:none;-webkit-mask-image:radial-gradient(circle 86px at 50% 50%,#000 62%,transparent 100%);mask-image:radial-gradient(circle 86px at 50% 50%,#000 62%,transparent 100%)}
.fwk .hit{opacity:0;transition:opacity .35s}
.fwk .hit.on{opacity:1}
.fwk .hit path{fill:none;stroke:#fff;stroke-width:2.4}
.fwk .hit.warn path{stroke:#FFC23D}
.fwk .hit rect{fill:transparent;cursor:pointer}
.fwk .hit text{font-family:var(--f-mono);font-size:12px;font-weight:700;fill:#fff;letter-spacing:.04em}
.fwk .hit.warn text{fill:#FFC23D}
.fwk .hit.cur path{stroke-width:3.6}
.fwk .scanline{position:absolute;top:0;bottom:0;left:0;width:2px;background:#7DE3FF;box-shadow:0 0 18px 4px rgba(125,227,255,.55);pointer-events:none}
.fwk .scanline::before{content:"";position:absolute;right:2px;top:0;bottom:0;width:90px;background:linear-gradient(90deg,transparent,rgba(125,227,255,.14))}
.fwk .vf{position:absolute;width:22px;height:22px;border:2.5px solid rgba(255,255,255,.85);pointer-events:none}
.fwk .vf.tl{left:14px;top:14px;border-right:0;border-bottom:0;border-radius:6px 0 0 0}.fwk .vf.tr{right:14px;top:14px;border-left:0;border-bottom:0;border-radius:0 6px 0 0}
.fwk .vf.bl{left:14px;bottom:14px;border-right:0;border-top:0;border-radius:0 0 0 6px}.fwk .vf.br{right:14px;bottom:14px;border-left:0;border-top:0;border-radius:0 0 6px 0}
.fwk .hud-top{position:absolute;top:18px;left:46px;right:46px;display:flex;justify-content:space-between;font-family:var(--f-mono);font-size:max(9px,1.6cqh);letter-spacing:.1em;text-transform:uppercase;color:#fff;pointer-events:none}
.fwk .hud-top .rec{display:flex;align-items:center;gap:6px}
.fwk .hud-top .rec::before{content:"";width:7px;height:7px;border-radius:50%;background:#FF4D4D;animation:fwk-blink 1.2s infinite}
.fwk .hud-card{position:absolute;left:46px;bottom:18px;min-width:150px;background:rgba(10,12,16,.88);
  border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:7px 11px;color:#fff;font-size:max(10px,1.9cqh);line-height:1.3;pointer-events:none}
.fwk .hud-card b{display:block}
.fwk .hud-card span{opacity:.75}
.fwk .hud-card.warn b{color:#FFC23D}
.fwk .shutter{position:absolute;right:20px;top:50%;translate:0 -50%;width:max(34px,8cqh);aspect-ratio:1;border-radius:50%;border:3px solid #fff;box-shadow:inset 0 0 0 4px #121318,inset 0 0 0 30px rgba(255,255,255,.85);pointer-events:none}
.fwk .spin.locked{background:transparent;color:var(--fg);border:2px dashed rgba(255,255,255,.55);cursor:not-allowed}
.fwk .spin.locked:hover{scale:1;animation:fwk-nope .45s}
.fwk .spin.locked:hover .arr{rotate:0deg}
@keyframes fwk-nope{20%{translate:-6px 0}40%{translate:5px 0}60%{translate:-4px 0}80%{translate:3px 0}}

/* ───────── outro ───────── */
.fwk .after{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px 32px;padding-block:clamp(56px,calc(var(--vh) * 12),130px)}
.fwk .after p{margin:0;font-weight:850;font-size:clamp(2rem,calc(var(--u) * 5),4.2rem);line-height:.9;letter-spacing:-.06em}
.fwk .after a{font-family:var(--f-mono);font-weight:700;font-size:13px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;padding:14px 18px;border:1.5px solid var(--ink);background:var(--paper);transition:background .2s,color .2s}
.fwk .after a:hover{background:var(--ink);color:var(--paper)}

/* ───────── responsive ───────── */
@container fwk (max-width: 1100px){
  .fwk .note.n3{display:none}
}
@container fwk (max-width: 760px){
  .fwk .tab-l .nm{display:none}
}
@container fwk (max-width: 800px){
  .fwk .intro{grid-template-columns:1fr}
  .fwk .fan{height:300px;max-width:380px}
  .fwk .note,.fwk .leads{display:none}
  .fwk .c-tags{display:none}
  .fwk .mq-track{font-size:clamp(90px,calc(var(--vh) * 22),200px)}
}
@container fwk (max-width: 560px){
  .fwk .c-inner{border-radius:22px;padding:16px}
  .fwk .tab-l{font-size:1.05rem;padding:5px 6px 0}
  .fwk .tab-l .nm{display:none}
  .fwk .stamp,.fwk .pen{display:none}
  .fwk .clip{width:40px;top:-36px}
  .fwk .c-id{gap:10px}
  .fwk .c-desc{font-size:.92rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
  .fwk .spin{width:84px}
  .fwk .spin text{font-size:10.5px}
  .fwk .window{width:94cqw}
  .fwk .phone{--ph:min(72cqh,115cqw,440px);height:var(--ph);font-size:calc(var(--ph) / 47);border-radius:28px;padding:6px}
  .fwk .phone .screen{border-radius:23px}
  .fwk .kiosk{--kh:min(70cqh,110cqw,420px);height:var(--kh);font-size:calc(var(--kh) / 48)}
  .fwk .cp-board{width:96cqw;flex-direction:column;aspect-ratio:auto;height:96cqh;gap:10px;justify-content:center}
  .fwk .cp-board svg.map{height:auto;width:min(100%,64cqh)}
  .fwk .signs{flex:none;width:100%;flex-direction:row;flex-wrap:wrap;justify-content:center;font-size:clamp(9px,3cqw,12px)}
  .fwk .cp-note{width:100%;text-align:center}
  .fwk .fan{height:260px}
  .fwk .mini{width:118px}
  .fwk .mini b{font-size:1.8rem}
  .fwk .mini strong{font-size:.95rem}
  .fwk .fan-note{display:none}
  .fwk .arphone{width:96cqw}
  .fwk .tape{top:auto;bottom:92px;right:-24px;left:-24px;width:auto;rotate:-5deg;font-size:10px;padding:6px 0}
  .fwk .hud-top{left:34px;right:34px;top:14px}
  .fwk .hud-card{left:34px;bottom:12px;min-width:0}
}
@media (prefers-reduced-motion: reduce){
  .fwk *,.fwk *::before,.fwk *::after{animation:none!important;transition:none!important}
  .fwk .stage-in{transform:none!important}
}
`,yn=`M0 44 C14 44 18 38 22 30 L33 10 C37 3 43 0 51 0 L249 0 C257 0 263 3 267 10 L278 30 C282 38 286 44 300 44 L300 47 L0 47 Z`,bn=`M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0`,xn=[-7,6,-5,8],Q=e=>e,Sn=e=>String(e).padStart(2,`0`),Cn=.96,wn=`M7 12 H84 L95.5 25 L84 38 H7 A3 3 0 0 1 4 35 V15 A3 3 0 0 1 7 12 Z`,Tn=`M17 45 H91 A3 3 0 0 1 94 48 V63 A3 3 0 0 1 91 66 H17 L5.5 55.5 Z`,$={projects:on,showIntro:!0,introHand:`explore my work!`,introLine1:`Selected`,introLine2:`work`,showCount:!0,introText:`This is a showcase of what happens when curiosity drives the process. Every project below is a working prototype, so go ahead and tap things.`,introHint:`Pick a card or scroll`,fanNote:`pick one →`,soonBadge:`soon`,showOutro:!0,outroText:`That's the deck.
There's more in the archive.`,outroButton:`See all projects ↗`,outroLink:`/project`,ctaRing:`VIEW CASE STUDY · VIEW CASE STUDY · `,soonRing:`COMING SOON · IN PROGRESS · `,newTab:!0,autoDemo:!0,cursorName:`SRISHTI`,stamps:!0,clip:!0,pen:!0,tilt:44,topOffset:64,topOffsetPhone:10,sidePadding:16,maxWidth:1360,grid:!0,paperColor:`#FAFAF8`,gridColor:`#EDEDEA`,gridSize:94,inkColor:`#111214`,mutedColor:`#686A6E`,customFonts:!1,previewProject:1,canvasHeight:860},rn.displayName=`Featured Work`,En=(e,t)=>({[`n${e}Label`]:{type:N.String,title:`Note ${e} \xb7 Label`,defaultValue:``,placeholder:t},[`n${e}Stat`]:{type:N.String,title:`Note ${e} \xb7 Big number`,defaultValue:``,placeholder:`e.g. 72% (optional)`},[`n${e}Title`]:{type:N.String,title:`Note ${e} \xb7 Title`,defaultValue:``},[`n${e}Text`]:{type:N.String,title:`Note ${e} \xb7 Text`,defaultValue:``,displayTextArea:!0}}),ue(rn,{projects:{type:N.Array,title:`Projects`,maxCount:8,defaultValue:on,control:{type:N.Object,controls:{title:{type:N.String,title:`Title`,defaultValue:X.title},tab:{type:N.String,title:`Folder tab`,defaultValue:X.tab},short:{type:N.String,title:`Fan card name`,defaultValue:``,placeholder:`Uses the title if empty`},category:{type:N.String,title:`Fan card tag`,defaultValue:X.category},year:{type:N.String,title:`Year`,defaultValue:X.year},meta:{type:N.String,title:`Date line`,defaultValue:``,placeholder:`Jan 12, 2026 · Mobile app`},tags:{type:N.String,title:`Tags`,defaultValue:``,placeholder:`Comma separated`},award:{type:N.String,title:`Highlight tag`,defaultValue:``,placeholder:`★ Award (optional)`},description:{type:N.String,title:`Description`,defaultValue:``,displayTextArea:!0},link:{type:N.Link,title:`Case study link`,defaultValue:``},comingSoon:{type:N.Boolean,title:`Coming soon`,defaultValue:!1,description:`Locks the button and adds the tape.`},tape:{type:N.String,title:`Tape text`,defaultValue:X.tape},marquee:{type:N.String,title:`Big scrolling word`,defaultValue:``,placeholder:`Uses the tab name if empty`},prototype:{type:N.Enum,title:`Prototype`,defaultValue:`image`,options:[`parkin`,`ent`,`cp`,`kiosk`,`car`,`image`,`none`],optionTitles:[`ParkIn phone`,`Before / after slider`,`CP signage map`,`Kiosk flow`,`AR car scan`,`Image`,`None`]},image:{type:N.ResponsiveImage,title:`Image`,description:`Used when Prototype is Image.`},imageRatio:{type:N.Enum,title:`Image shape`,defaultValue:`1.6`,options:[`1.6`,`1.333`,`1`,`0.75`,`0.5625`],optionTitles:[`16:10`,`4:3`,`Square`,`3:4`,`Phone 9:16`]},bg:{type:N.Color,title:`Folder colour`,defaultValue:X.bg},fg:{type:N.Color,title:`Text colour`,defaultValue:X.fg},tone:{type:N.Color,title:`Big word colour`,defaultValue:X.tone},line:{type:N.Color,title:`Note lines`,defaultValue:X.line},accent:{type:N.Color,title:`Note dot`,defaultValue:X.accent},cursor:{type:N.Color,title:`Cursor colour`,defaultValue:X.cursor},...En(1,`Note 01`),...En(2,`Note 02`),...En(3,`Try it`)}}},showIntro:{type:N.Boolean,title:`Intro`,defaultValue:!0},introHand:{type:N.String,title:`Handwritten`,defaultValue:$.introHand,hidden:e=>!e.showIntro},introLine1:{type:N.String,title:`Heading 1`,defaultValue:$.introLine1,hidden:e=>!e.showIntro},introLine2:{type:N.String,title:`Heading 2`,defaultValue:$.introLine2,hidden:e=>!e.showIntro},showCount:{type:N.Boolean,title:`Count (05)`,defaultValue:!0,hidden:e=>!e.showIntro},introText:{type:N.String,title:`Intro text`,defaultValue:$.introText,displayTextArea:!0,hidden:e=>!e.showIntro},introHint:{type:N.String,title:`Hint`,defaultValue:$.introHint,hidden:e=>!e.showIntro},fanNote:{type:N.String,title:`Fan note`,defaultValue:$.fanNote,hidden:e=>!e.showIntro},soonBadge:{type:N.String,title:`Soon badge`,defaultValue:$.soonBadge,hidden:e=>!e.showIntro},showOutro:{type:N.Boolean,title:`Outro`,defaultValue:!0},outroText:{type:N.String,title:`Outro text`,defaultValue:$.outroText,displayTextArea:!0,hidden:e=>!e.showOutro},outroButton:{type:N.String,title:`Outro button`,defaultValue:$.outroButton,hidden:e=>!e.showOutro},outroLink:{type:N.Link,title:`Outro link`,defaultValue:$.outroLink,hidden:e=>!e.showOutro},ctaRing:{type:N.String,title:`Button ring`,defaultValue:$.ctaRing},soonRing:{type:N.String,title:`Soon ring`,defaultValue:$.soonRing},newTab:{type:N.Boolean,title:`Links`,defaultValue:!0,enabledTitle:`New tab`,disabledTitle:`Same tab`},autoDemo:{type:N.Boolean,title:`Demo cursor`,defaultValue:!0,description:`A named cursor plays each prototype until the visitor takes over.`},cursorName:{type:N.String,title:`Cursor name`,defaultValue:$.cursorName,hidden:e=>!e.autoDemo},stamps:{type:N.Boolean,title:`Stickers`,defaultValue:!0},clip:{type:N.Boolean,title:`Binder clip`,defaultValue:!0},pen:{type:N.Boolean,title:`Pen`,defaultValue:!0},tilt:{type:N.Number,title:`Card tilt`,defaultValue:44,min:0,max:70,step:1,unit:`°`},topOffset:{type:N.Number,title:`Navbar gap`,defaultValue:64,min:0,max:240,step:1,unit:`px`,description:`Height of your fixed navbar, so cards stop below it.`},topOffsetPhone:{type:N.Number,title:`Navbar gap (phone)`,defaultValue:10,min:0,max:240,step:1,unit:`px`},sidePadding:{type:N.Number,title:`Side padding`,defaultValue:16,min:0,max:160,step:1,unit:`px`},maxWidth:{type:N.Number,title:`Max width`,defaultValue:1360,min:600,max:2400,step:10,unit:`px`},grid:{type:N.Boolean,title:`Grid paper`,defaultValue:!0},paperColor:{type:N.Color,title:`Paper`,defaultValue:$.paperColor,hidden:e=>!e.grid},gridColor:{type:N.Color,title:`Grid lines`,defaultValue:$.gridColor,hidden:e=>!e.grid},gridSize:{type:N.Number,title:`Grid size`,defaultValue:94,min:8,max:300,step:1,unit:`px`,hidden:e=>!e.grid},inkColor:{type:N.Color,title:`Ink`,defaultValue:$.inkColor},mutedColor:{type:N.Color,title:`Muted text`,defaultValue:$.mutedColor},customFonts:{type:N.Boolean,title:`Fonts`,defaultValue:!1,enabledTitle:`Custom`,disabledTitle:`Default`,description:`Default loads Inter Tight, JetBrains Mono, Instrument Serif and Gochi Hand.`},fontBody:{type:N.Font,title:`Main font`,controls:`basic`,defaultFontType:`sans-serif`,hidden:e=>!e.customFonts},fontMono:{type:N.Font,title:`Mono font`,controls:`basic`,defaultFontType:`monospace`,hidden:e=>!e.customFonts},fontTab:{type:N.Font,title:`Tab font`,controls:`basic`,defaultFontType:`serif`,hidden:e=>!e.customFonts},fontHand:{type:N.Font,title:`Handwritten font`,controls:`basic`,defaultFontType:`sans-serif`,hidden:e=>!e.customFonts},previewProject:{type:N.Number,title:`Canvas shows`,defaultValue:1,min:1,max:8,step:1,displayStepper:!0,description:`Which project sits in front while you edit. The live site scrolls through all of them.`},canvasHeight:{type:N.Number,title:`Canvas height`,defaultValue:860,min:560,max:1400,step:10,unit:`px`}})})))()}var On,kn,An;function jn(){return(jn=e((()=>{T(),S.loadFonts([`FR;InterDisplay-Medium`,`Inter-Black`,`Inter-BlackItalic`,`Inter-BoldItalic`]),On=[{explicitInter:!0,fonts:[{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,weight:`900`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,weight:`700`},{cssFamilyName:`Inter`,source:`framer`,style:`italic`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,weight:`700`}]}],kn=[`.framer-62fp8 .framer-styles-preset-jjv5nu:not(.rich-text-wrapper), .framer-62fp8 .framer-styles-preset-jjv5nu.rich-text-wrapper h4 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1199px) and (min-width: 810px) { .framer-62fp8 .framer-styles-preset-jjv5nu:not(.rich-text-wrapper), .framer-62fp8 .framer-styles-preset-jjv5nu.rich-text-wrapper h4 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-62fp8 .framer-styles-preset-jjv5nu:not(.rich-text-wrapper), .framer-62fp8 .framer-styles-preset-jjv5nu.rich-text-wrapper h4 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],An=`framer-62fp8`})))()}var Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr;function fr(){return(fr=e((()=>{c(),T(),b(),m(),xe(),Kt(),G(),Yt(),B(),he(),be(),Dn(),W(),jn(),De(),Mn=D(Se),Nn=D(ve),Pn=D(qt),Fn=R(_.div),In=D(Ce),Ln=R(M),Rn=D(Gt),zn=F(_.div,{nodeId:`lIy854w_h`,override:_e,scopeId:`IMzwiuEeL`}),Bn=F(_.div,{nodeId:`cpqFm___x`,override:ye,scopeId:`IMzwiuEeL`}),Vn=D(V),Hn=F(_.div,{nodeId:`u2Y4lEeid`,override:_e,scopeId:`IMzwiuEeL`}),Un=F(_.div,{nodeId:`kSlfoLDKQ`,override:pe,scopeId:`IMzwiuEeL`}),Wn=F(_.div,{nodeId:`TDN3MAbVv`,override:ge,scopeId:`IMzwiuEeL`}),Gn=F(_.div,{nodeId:`FJ3k6wXt9`,override:H,scopeId:`IMzwiuEeL`}),Kn=F(_.div,{nodeId:`uASlOMBfe`,override:me,scopeId:`IMzwiuEeL`}),qn=D(rn),Jn={eQRw3bIZC:`(min-width: 1440px)`,jzi64tcGp:`(min-width: 810px) and (max-width: 1439.98px)`,oYMw7dt8S:`(max-width: 809.98px)`},Yn=[],Xn=`framer-82D1a`,Zn={eQRw3bIZC:`framer-v-s8d5gr`,jzi64tcGp:`framer-v-6kqop5`,oYMw7dt8S:`framer-v-7h10me`},Qn=(e,t,n)=>e&&t?`position`:n,$n={opacity:1,rotate:-10,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},er={damping:30,delay:0,mass:7.3,stiffness:693,type:`spring`},tr=e=>e.preventDefault(),nr={cursor:`grabbing`},rr=(e,t)=>{if(e&&typeof e==`object`)return{...e,alt:t}},ir=(e,t)=>`translate(-50%, -50%) ${t}`,ar={Desktop:`eQRw3bIZC`,Phone:`oYMw7dt8S`,Tablet:`jzi64tcGp`},or=({value:e})=>A()?null:/*#__PURE__*/ f(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),sr=({height:e,id:t,width:n,...r})=>({...r,variant:ar[r.variant]??r.variant??`eQRw3bIZC`}),cr=/*#__PURE__*/ d(function(e,r){let i=s(null),o=r??i;n();let{activeLocale:c,contentLocale:u,setLocale:d}=ce();ae();let{style:m,className:h,layoutId:g,variant:b,...x}=sr(e),S=l(()=>Oe({},u),[u]);j(S);let[w,T]=oe(b,Jn,!1),E=C(Xn,Ee,An),D=t(se)?.isLayoutTemplate,O=!!t(v)?.transition?.layout,k=Qn(D,O),A=ie(`Z2sRPWbsf`),te=s(null),N=ie(`uKdYzdIus`),F=s(null);return ne(),re({}),/*#__PURE__*/ f(se.Provider,{value:{activeVariantId:w,humanReadableVariantMap:ar,primaryVariantId:`eQRw3bIZC`,variantClassNames:Zn},children:/*#__PURE__*/ p(y,{id:g??`IMzwiuEeL`,children:[/*#__PURE__*/ f(or,{value:`html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`}),/*#__PURE__*/ p(_.div,{...x,className:C(E,`framer-s8d5gr`,h),ref:o,style:{...m},children:[/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-e4j7mq-container`,"data-framer-name":`Smooth Scroll`,isAuthoredByUser:!0,isModuleExternal:!0,layout:k,layoutScroll:!0,name:`Smooth Scroll`,nodeId:`uq1QnIBp3`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(Se,{height:`100%`,id:`uq1QnIBp3`,infinite:!1,intensity:5,layoutId:`uq1QnIBp3`,name:`Smooth Scroll`,orientation:`vertical`,smooth:!0,width:`100%`})})}),/*#__PURE__*/ p(_.div,{className:`framer-bzok9y`,"data-framer-name":`Hero + About`,layout:k,children:[/*#__PURE__*/ f(`section`,{className:`framer-15n2sit`,"data-framer-name":`Hero Section`,children:/*#__PURE__*/ p(`div`,{className:`framer-syyabg`,"data-framer-name":`Contain`,children:[/*#__PURE__*/ f(`div`,{className:`framer-gjl2ae`,"data-framer-name":`Ruler`,id:A,ref:te,children:/*#__PURE__*/ f(`div`,{className:`framer-o2c88a`,"data-framer-name":`Contain`,children:/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-1ao907p-container`,isAuthoredByUser:!0,nodeId:`fah5OYOr3`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(ve,{color:`var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,height:`100%`,id:`fah5OYOr3`,layoutId:`fah5OYOr3`,majorStep:100,speed:.2,style:{width:`100%`},subdivisions:2,width:`100%`})})})})}),/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-17qxhf4-container`,isAuthoredByUser:!0,nodeId:`UDnzlBhGM`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(qt,{contactUrl:`/contact`,gridSize:100,height:`100%`,id:`UDnzlBhGM`,intro:!0,layoutId:`UDnzlBhGM`,narrate:!0,ownGrid:!1,pageColor:`rgb(255, 255, 255)`,radius:0,resumeUrl:`https://drive.google.com/file/d/1_JMXwdVLXa3tqI3x3Iobfqh0WQvg-KFH/view?usp=sharing`,siteCursor:!0,style:{height:`100%`,width:`100%`},wave:!0,width:`100%`})})})]})}),/*#__PURE__*/ f(`section`,{className:`framer-1u3kxkv`,"data-framer-name":`About`,children:/*#__PURE__*/ f(_.div,{className:`framer-12ykyxy`,"data-framer-name":`Contain`,id:N,ref:F,style:{originY:0},children:/*#__PURE__*/ p(`div`,{className:`framer-1hfxr5x`,"data-framer-name":`Content`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1qxp9j6`,"data-framer-name":`Decoration`,children:/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1o05o96`,"data-styles-preset":`H8WdmyHet`,dir:`auto`,children:`about me!`})}),className:`framer-372ism`,fonts:[`Inter`],style:{rotate:14},verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ p(Fn,{__framer__animate:{transition:er},__framer__animateOnce:!0,__framer__enter:$n,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-12cun56`,"data-border":!0,"data-framer-name":`Text`,children:[/*#__PURE__*/ p(`div`,{className:`framer-11hf68e`,"data-framer-name":`Border`,children:[/*#__PURE__*/ f(`div`,{className:`framer-lz4pc4`,"data-border":!0,"data-framer-name":`rectangle`}),/*#__PURE__*/ f(`div`,{className:`framer-5e70fl`,"data-border":!0,"data-framer-name":`rectangle`}),/*#__PURE__*/ f(`div`,{className:`framer-1fib0fp`,"data-border":!0,"data-framer-name":`rectangle`}),/*#__PURE__*/ f(`div`,{className:`framer-6r03wo`,"data-border":!0,"data-framer-name":`rectangle`})]}),/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h4`,{className:`framer-styles-preset-jjv5nu`,"data-styles-preset":`TI_CAjGBM`,dir:`auto`,children:`what's up`})}),className:`framer-i77336`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ p(`div`,{className:`framer-ljnwxn`,"data-framer-name":`Image`,children:[/*#__PURE__*/ f(P,{height:192,width:`162px`,children:/*#__PURE__*/ f(Ln,{__perspectiveFX:!1,__targetOpacity:1,className:`framer-1usv7ks-container`,drag:!0,dragMomentum:!1,nodeId:`K2faoAMjS`,onMouseDown:tr,rendersWithMotion:!0,scopeId:`IMzwiuEeL`,style:{rotate:12},whileTap:nr,children:/*#__PURE__*/ f(Ce,{FfMVhlfbN:rr({pixelHeight:4032,pixelWidth:2688,positionX:`52.2%`,positionY:`71.4%`,src:`/framer/images/PG2pqlmO0iCJYv7JWFudLFJunaQ.jpg`,srcSet:`/framer/images/PG2pqlmO0iCJYv7JWFudLFJunaQ.jpg 682w,/framer/images/PG2pqlmO0iCJYv7JWFudLFJunaQ.jpg 1365w,/framer/images/PG2pqlmO0iCJYv7JWFudLFJunaQ.jpg 2688w`},`a man (me)`),height:`100%`,id:`K2faoAMjS`,L_BjSwjBv:`2026`,layoutId:`K2faoAMjS`,style:{height:`100%`,width:`100%`},width:`100%`})})}),/*#__PURE__*/ f(P,{height:192,width:`162px`,children:/*#__PURE__*/ f(Ln,{__perspectiveFX:!1,__targetOpacity:1,className:`framer-1g6trdm-container`,drag:!0,dragMomentum:!1,nodeId:`TKzy9r5GU`,onMouseDown:tr,rendersWithMotion:!0,scopeId:`IMzwiuEeL`,style:{rotate:-14},children:/*#__PURE__*/ f(Ce,{FfMVhlfbN:rr({pixelHeight:1536,pixelWidth:2048,src:`/framer/images/I0cfBwrNRzbuP22hNZpp5RuxK4.jpg`,srcSet:`/framer/images/I0cfBwrNRzbuP22hNZpp5RuxK4.jpg 512w,/framer/images/I0cfBwrNRzbuP22hNZpp5RuxK4.jpg 1024w,/framer/images/I0cfBwrNRzbuP22hNZpp5RuxK4.jpg 2048w`},`my workspace`),height:`100%`,id:`TKzy9r5GU`,L_BjSwjBv:`my workspace`,layoutId:`TKzy9r5GU`,style:{height:`100%`,width:`100%`},width:`100%`})})})]}),/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-1r6gymq-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`ubsTop0k4`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(le,{breakpoint:w,overrides:{jzi64tcGp:{fontSize:44},oYMw7dt8S:{fontSize:32}},children:/*#__PURE__*/ f(Gt,{align:`center`,angle:0,color:`var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,delay:0,duration:2,enableAnimation:!0,fontFamily:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:500},fontSize:68,gap:.1,height:`100%`,id:`ubsTop0k4`,images:[`/framer/images/PG2pqlmO0iCJYv7JWFudLFJunaQ.jpg`,`/framer/images/FZxylYfrf6MjQ4LPhIBR4t1H5s.png`,`/framer/images/c3dZgxHqG5LPDkUqNkbQbZSjBk.png`],layoutId:`ubsTop0k4`,letterSpacing:-.03,lineHeight:1.1,style:{maxWidth:`100%`,width:`100%`},tag:`p`,text:`‎‎I'm Srishti [] a Product Designer in India who gets excited [] about making complicated things simple []. `,width:`100%`})})})}),/*#__PURE__*/ p(`div`,{className:`framer-1btv9kp`,"data-framer-name":`List Tag`,children:[/*#__PURE__*/ f(`div`,{className:`framer-54pl82`,"data-framer-name":`Tag`,children:/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h4`,{className:`framer-styles-preset-jjv5nu`,"data-styles-preset":`TI_CAjGBM`,dir:`auto`,style:{"--framer-text-color":`var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`},children:`Interaction Design`})}),className:`framer-31wgst`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ f(`div`,{className:`framer-ge2k9a`,"data-border":!0,"data-framer-name":`Icon`,children:/*#__PURE__*/ f(zn,{className:`framer-14tvjdo`,"data-framer-name":`Interactive`,transformTemplate:ir})}),/*#__PURE__*/ f(`div`,{className:`framer-1yf7kob`,"data-framer-name":`Tag`,children:/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h4`,{className:`framer-styles-preset-jjv5nu`,"data-styles-preset":`TI_CAjGBM`,dir:`auto`,style:{"--framer-text-color":`var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`},children:`Prototyping`})}),className:`framer-qyyr1q`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ f(`div`,{className:`framer-4njtx0`,"data-framer-name":`Icon`,children:/*#__PURE__*/ p(`div`,{className:`framer-nkhlih`,"data-framer-name":`Interactive`,children:[/*#__PURE__*/ f(Bn,{className:`framer-1rci139`,"data-framer-name":`Prototype animate`,transformTemplate:ir}),/*#__PURE__*/ f(`div`,{className:`framer-fl9u67`})]})}),/*#__PURE__*/ f(`div`,{className:`framer-zperoz`,"data-framer-name":`Tag`,children:/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h4`,{className:`framer-styles-preset-jjv5nu`,"data-styles-preset":`TI_CAjGBM`,dir:`auto`,style:{"--framer-text-color":`var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`},children:`User Research`})}),className:`framer-eoyoj8`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ p(`div`,{className:`framer-gnsd3i`,"data-framer-name":`Icon`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1mkjmyx`,"data-framer-name":`Interactive`,children:/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-189qpoq-container`,"data-code-component-plugin-id":`84d4c1`,isAuthoredByUser:!0,nodeId:`pD036vj5R`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(V,{color:`var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255))`,height:`100%`,id:`pD036vj5R`,layoutId:`pD036vj5R`,stroke:!1,strokeColor:`var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`,style:{height:`100%`,width:`100%`},svgCode:`<svg width="732" height="395" viewBox="0 0 732 395" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M365.914 394.012C516.48 394.012 647.127 297.818 712.173 239.865C738.38 216.516 738.38 177.497 712.173 154.147C647.127 96.1942 516.48 0 365.914 0C215.348 0 84.702 96.1942 19.6557 154.147C-6.55192 177.497 -6.55188 216.516 19.6557 239.865C84.702 297.818 215.348 394.012 365.914 394.012ZM365.914 334.452C441.965 334.452 503.615 272.916 503.615 197.005C503.615 121.096 441.965 59.5597 365.914 59.5597C289.865 59.5597 228.215 121.096 228.215 197.005C228.215 272.916 289.865 334.452 365.914 334.452Z" fill="black"/>
</svg>
`,width:`100%`})})})}),/*#__PURE__*/ f(Hn,{className:`framer-iw497p`,"data-framer-name":`Star`,transformTemplate:ir})]}),/*#__PURE__*/ f(`div`,{className:`framer-1qr8pew`,"data-framer-name":`Tag`,children:/*#__PURE__*/ f(L,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h4`,{className:`framer-styles-preset-jjv5nu`,"data-styles-preset":`TI_CAjGBM`,dir:`auto`,style:{"--framer-text-color":`var(--token-4f4ed186-9023-4858-830a-5202d69249c1, rgb(17, 18, 18))`},children:`Visual Design`})}),className:`framer-vyqlo8`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ p(`div`,{className:`framer-xoi2wh`,"data-framer-name":`Icon`,children:[/*#__PURE__*/ p(`div`,{className:`framer-b1sd0p`,children:[/*#__PURE__*/ f(Un,{className:`framer-10nh4p1`}),/*#__PURE__*/ f(Wn,{className:`framer-mv0yts`}),/*#__PURE__*/ f(Gn,{className:`framer-15ym2yx`}),/*#__PURE__*/ f(Kn,{className:`framer-ahwnzz`})]}),/*#__PURE__*/ f(`div`,{className:`framer-1q80jof`}),/*#__PURE__*/ f(`div`,{className:`framer-m8f5ce`}),/*#__PURE__*/ f(`div`,{className:`framer-x7ek3a`}),/*#__PURE__*/ f(`div`,{className:`framer-sjjzc6`})]})]})]})})})]}),/*#__PURE__*/ f(_.section,{className:`framer-19ielic`,"data-framer-name":`Feature Works`,layout:k,children:/*#__PURE__*/ f(ee,{links:[{href:{webPageId:`Gxp3OcBKU`},implicitPathVariables:void 0},{href:{webPageId:`Cwh5RaOql`},implicitPathVariables:void 0},{href:{webPageId:`UZCNW_R94`},implicitPathVariables:void 0},{href:{webPageId:`J4Fdt9jNb`},implicitPathVariables:void 0},{href:{webPageId:`vmf4mGFE3`},implicitPathVariables:void 0},{href:{webPageId:`Gxp3OcBKU`},implicitPathVariables:void 0},{href:{webPageId:`Cwh5RaOql`},implicitPathVariables:void 0},{href:{webPageId:`UZCNW_R94`},implicitPathVariables:void 0},{href:{webPageId:`J4Fdt9jNb`},implicitPathVariables:void 0},{href:{webPageId:`vmf4mGFE3`},implicitPathVariables:void 0},{href:{webPageId:`Gxp3OcBKU`},implicitPathVariables:void 0},{href:{webPageId:`Cwh5RaOql`},implicitPathVariables:void 0},{href:{webPageId:`UZCNW_R94`},implicitPathVariables:void 0},{href:{webPageId:`J4Fdt9jNb`},implicitPathVariables:void 0},{href:{webPageId:`vmf4mGFE3`},implicitPathVariables:void 0}],children:e=>/*#__PURE__*/ f(P,{children:/*#__PURE__*/ f(M,{className:`framer-1ycauci-container`,isAuthoredByUser:!0,nodeId:`GL8GS7MTx`,scopeId:`IMzwiuEeL`,children:/*#__PURE__*/ f(le,{breakpoint:w,overrides:{jzi64tcGp:{outroLink:e[9],projects:[{accent:`rgb(34, 181, 234)`,award:``,bg:`rgb(34, 181, 234)`,category:`Mobile app`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A smart parking platform that lets people reserve parking, book EV charging and rent out private spots in real time. 85% of usability test participants completed a booking within two minutes.`,fg:`rgb(17, 18, 20)`,id:`default-item-0`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[5],marquee:`Park iN`,meta:`Jan 12, 2026 · Mobile app`,n1Label:`Note 01`,n1Stat:``,n1Text:`Green is free, red is full, blue has an EV charger.`,n1Title:`Colour-coded slots`,n2Label:`Research`,n2Stat:`72%`,n2Text:`of respondents ranked real-time availability as their top need.`,n2Title:``,n3Label:`Note 02`,n3Stat:``,n3Text:`Slot, time, pay, done. Try it on the phone.`,n3Title:`Four-step booking`,prototype:`parkin`,short:`ParkIn`,tab:`ParkIn`,tags:`User research, Prototyping`,tape:`Work in progress ✦ Coming soon ✦`,title:`ParkIn`,tone:`rgb(90, 204, 243)`,year:`2026`},{accent:`rgb(222, 26, 79)`,award:``,bg:`rgb(222, 26, 79)`,category:`SaaS`,comingSoon:!1,cursor:`rgb(17, 18, 20)`,description:`Led the redesign of an enterprise platform during its rebranding, modernising the desktop and mobile experience while preserving familiar workflows.`,fg:`rgb(255, 255, 255)`,id:`default-item-1`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[6],marquee:`Enterprise`,meta:`Jun 1, 2025 · Web + mobile`,n1Label:`Note 01`,n1Stat:``,n1Text:`Navigation stays where long-time users expect it. Only the visual system changes.`,n1Title:`Familiar workflows kept`,n2Label:`Try it`,n2Stat:``,n2Text:`Legacy screen on the left, the redesign on the right.`,n2Title:`Drag the handle`,n3Label:`Note 02`,n3Stat:``,n3Text:`Both rebuilt together during the rebrand.`,n3Title:`Desktop and mobile`,prototype:`ent`,short:`Enterprise Platform`,tab:`Enterprise`,tags:`SaaS, Transformation`,tape:`Work in progress ✦ Coming soon ✦`,title:`Enterprise Platform`,tone:`rgb(199, 15, 65)`,year:`2025`},{accent:`rgb(233, 164, 37)`,award:`★ CPVS 2025–26`,bg:`rgb(233, 164, 37)`,category:`Wayfinding`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A clear, accessible and heritage-sensitive wayfinding system for Connaught Place. Selected under CPVS 2025–26 in the STP and FTP categories.`,fg:`rgb(17, 18, 20)`,id:`default-item-2`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[7],marquee:`CP Signage`,meta:`Jan 2, 2025 · Wayfinding`,n1Label:`Note 01`,n1Stat:``,n1Text:`English and Hindi side by side, as on the real panels.`,n1Title:`Bilingual signs`,n2Label:`Try it`,n2Stat:``,n2Text:`The sign re-points to it from Central Park.`,n2Title:`Tap any block`,n3Label:`Note 02`,n3Stat:``,n3Text:`Designed to sit inside CP's protected architecture.`,n3Title:`Heritage-sensitive`,prototype:`cp`,short:`CP Signage`,tab:`CP Signage`,tags:`Wayfinding, Signage design`,tape:`Work in progress ✦ Coming soon ✦`,title:`CP Signage System`,tone:`rgb(244, 191, 85)`,year:`2025`},{accent:`rgb(31, 168, 104)`,award:``,bg:`rgb(31, 168, 104)`,category:`Healthcare`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A self-service healthcare kiosk that enables accessible remote consultations and streamlined patient care.`,fg:`rgb(255, 255, 255)`,id:`default-item-3`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[8],marquee:`Kiosk`,meta:`Apr 26, 2025 · Kiosk`,n1Label:`Note 01`,n1Stat:``,n1Text:`Patients start a consultation on their own, one guided step at a time.`,n1Title:`Self-service`,n2Label:`Note 02`,n2Stat:``,n2Text:`A doctor joins over video, right at the kiosk.`,n2Title:`Remote consultation`,n3Label:`Try it`,n3Stat:``,n3Text:`Tap through the flow, in English or हिन्दी.`,n3Title:`The screen is live`,prototype:`kiosk`,short:`Telemedical Kiosk`,tab:`Kiosk`,tags:`Healthcare UX, Kiosk design`,tape:`Work in progress ✦ Coming soon ✦`,title:`Telemedical Kiosk`,tone:`rgb(22, 148, 87)`,year:`2025`},{accent:`rgb(125, 227, 255)`,award:``,bg:`rgb(18, 19, 24)`,category:`In progress`,comingSoon:!0,cursor:`rgb(34, 181, 234)`,description:`An AI and AR powered app for inspecting vehicles. I'm designing it right now, and the case study lands soon.`,fg:`rgb(255, 255, 255)`,id:`default-item-4`,imageRatio:`1.6`,line:`rgb(125, 227, 255)`,marquee:`Coming soon`,meta:`2026 · In progress · AI · AR · Mobile app`,n1Label:`AI`,n1Stat:``,n1Text:`The camera feed is checked panel by panel, flagging what looks off.`,n1Title:`Reads the car part by part`,n2Label:`AR`,n2Stat:``,n2Text:`Findings sit on the real car, right where they are.`,n2Title:`Guidance on the vehicle`,n3Label:`Sneak peek`,n3Stat:``,n3Text:`The lens shows the inspection layer underneath.`,n3Title:`Move over the car`,prototype:`car`,short:`AI + AR Vehicle Inspection`,tab:`Car Inspection`,tags:``,tape:`Work in progress ✦ Coming soon ✦`,title:`AI + AR Vehicle Inspection`,tone:`rgb(30, 32, 41)`,year:`2026`}]},oYMw7dt8S:{outroLink:e[14],projects:[{accent:`rgb(34, 181, 234)`,award:``,bg:`rgb(34, 181, 234)`,category:`Mobile app`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A smart parking platform that lets people reserve parking, book EV charging and rent out private spots in real time. 85% of usability test participants completed a booking within two minutes.`,fg:`rgb(17, 18, 20)`,id:`default-item-0`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[10],marquee:`Park iN`,meta:`Jan 12, 2026 · Mobile app`,n1Label:`Note 01`,n1Stat:``,n1Text:`Green is free, red is full, blue has an EV charger.`,n1Title:`Colour-coded slots`,n2Label:`Research`,n2Stat:`72%`,n2Text:`of respondents ranked real-time availability as their top need.`,n2Title:``,n3Label:`Note 02`,n3Stat:``,n3Text:`Slot, time, pay, done. Try it on the phone.`,n3Title:`Four-step booking`,prototype:`parkin`,short:`ParkIn`,tab:`ParkIn`,tags:`User research, Prototyping`,tape:`Work in progress ✦ Coming soon ✦`,title:`ParkIn`,tone:`rgb(90, 204, 243)`,year:`2026`},{accent:`rgb(222, 26, 79)`,award:``,bg:`rgb(222, 26, 79)`,category:`SaaS`,comingSoon:!1,cursor:`rgb(17, 18, 20)`,description:`Led the redesign of an enterprise platform during its rebranding, modernising the desktop and mobile experience while preserving familiar workflows.`,fg:`rgb(255, 255, 255)`,id:`default-item-1`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[11],marquee:`Enterprise`,meta:`Jun 1, 2025 · Web + mobile`,n1Label:`Note 01`,n1Stat:``,n1Text:`Navigation stays where long-time users expect it. Only the visual system changes.`,n1Title:`Familiar workflows kept`,n2Label:`Try it`,n2Stat:``,n2Text:`Legacy screen on the left, the redesign on the right.`,n2Title:`Drag the handle`,n3Label:`Note 02`,n3Stat:``,n3Text:`Both rebuilt together during the rebrand.`,n3Title:`Desktop and mobile`,prototype:`ent`,short:`Enterprise Platform`,tab:`Enterprise`,tags:`SaaS, Transformation`,tape:`Work in progress ✦ Coming soon ✦`,title:`Enterprise Platform`,tone:`rgb(199, 15, 65)`,year:`2025`},{accent:`rgb(233, 164, 37)`,award:`★ CPVS 2025–26`,bg:`rgb(233, 164, 37)`,category:`Wayfinding`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A clear, accessible and heritage-sensitive wayfinding system for Connaught Place. Selected under CPVS 2025–26 in the STP and FTP categories.`,fg:`rgb(17, 18, 20)`,id:`default-item-2`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[12],marquee:`CP Signage`,meta:`Jan 2, 2025 · Wayfinding`,n1Label:`Note 01`,n1Stat:``,n1Text:`English and Hindi side by side, as on the real panels.`,n1Title:`Bilingual signs`,n2Label:`Try it`,n2Stat:``,n2Text:`The sign re-points to it from Central Park.`,n2Title:`Tap any block`,n3Label:`Note 02`,n3Stat:``,n3Text:`Designed to sit inside CP's protected architecture.`,n3Title:`Heritage-sensitive`,prototype:`cp`,short:`CP Signage`,tab:`CP Signage`,tags:`Wayfinding, Signage design`,tape:`Work in progress ✦ Coming soon ✦`,title:`CP Signage System`,tone:`rgb(244, 191, 85)`,year:`2025`},{accent:`rgb(31, 168, 104)`,award:``,bg:`rgb(31, 168, 104)`,category:`Healthcare`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A self-service healthcare kiosk that enables accessible remote consultations and streamlined patient care.`,fg:`rgb(255, 255, 255)`,id:`default-item-3`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[13],marquee:`Kiosk`,meta:`Apr 26, 2025 · Kiosk`,n1Label:`Note 01`,n1Stat:``,n1Text:`Patients start a consultation on their own, one guided step at a time.`,n1Title:`Self-service`,n2Label:`Note 02`,n2Stat:``,n2Text:`A doctor joins over video, right at the kiosk.`,n2Title:`Remote consultation`,n3Label:`Try it`,n3Stat:``,n3Text:`Tap through the flow, in English or हिन्दी.`,n3Title:`The screen is live`,prototype:`kiosk`,short:`Telemedical Kiosk`,tab:`Kiosk`,tags:`Healthcare UX, Kiosk design`,tape:`Work in progress ✦ Coming soon ✦`,title:`Telemedical Kiosk`,tone:`rgb(22, 148, 87)`,year:`2025`},{accent:`rgb(125, 227, 255)`,award:``,bg:`rgb(18, 19, 24)`,category:`In progress`,comingSoon:!0,cursor:`rgb(34, 181, 234)`,description:`An AI and AR powered app for inspecting vehicles. I'm designing it right now, and the case study lands soon.`,fg:`rgb(255, 255, 255)`,id:`default-item-4`,imageRatio:`1.6`,line:`rgb(125, 227, 255)`,marquee:`Coming soon`,meta:`2026 · In progress · AI · AR · Mobile app`,n1Label:`AI`,n1Stat:``,n1Text:`The camera feed is checked panel by panel, flagging what looks off.`,n1Title:`Reads the car part by part`,n2Label:`AR`,n2Stat:``,n2Text:`Findings sit on the real car, right where they are.`,n2Title:`Guidance on the vehicle`,n3Label:`Sneak peek`,n3Stat:``,n3Text:`The lens shows the inspection layer underneath.`,n3Title:`Move over the car`,prototype:`car`,short:`AI + AR Vehicle Inspection`,tab:`Car Inspection`,tags:``,tape:`Work in progress ✦ Coming soon ✦`,title:`AI + AR Vehicle Inspection`,tone:`rgb(30, 32, 41)`,year:`2026`}]}},children:/*#__PURE__*/ f(rn,{autoDemo:!0,canvasHeight:860,clip:!0,ctaRing:`VIEW CASE STUDY · VIEW CASE STUDY · `,cursorName:`SRISHTI`,customFonts:!1,fanNote:`pick one →`,fontBody:{fontFamily:`"Inter", "Inter Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400},fontHand:{fontFamily:`"Inter", "Inter Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400},fontMono:{fontFamily:`"Fragment Mono", "Fragment Mono Placeholder", monospace`,fontStyle:`normal`,fontWeight:400},fontTab:{fontFamily:`"Noto Serif", "Noto Serif Placeholder", serif`,fontStyle:`normal`,fontWeight:400},grid:!1,gridColor:`rgb(237, 237, 237)`,gridSize:90,height:`100%`,id:`GL8GS7MTx`,inkColor:`rgb(17, 18, 20)`,introHand:`explore my work!`,introHint:`Pick a card or scroll`,introLine1:`Selected`,introLine2:`work`,introText:`This is a showcase of what happens when curiosity drives the process. Every project below is a working prototype, so go ahead and tap things.`,layoutId:`GL8GS7MTx`,maxWidth:1360,mutedColor:`rgb(104, 106, 110)`,newTab:!0,outroButton:`See all projects ↗`,outroLink:e[4],outroText:`That's the deck.
There's more in the archive.`,paperColor:`rgb(255, 255, 255)`,pen:!0,previewProject:1,projects:[{accent:`rgb(34, 181, 234)`,award:``,bg:`rgb(34, 181, 234)`,category:`Mobile app`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A smart parking platform that lets people reserve parking, book EV charging and rent out private spots in real time. 85% of usability test participants completed a booking within two minutes.`,fg:`rgb(17, 18, 20)`,id:`default-item-0`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[0],marquee:`Park iN`,meta:`Jan 12, 2026 · Mobile app`,n1Label:`Note 01`,n1Stat:``,n1Text:`Green is free, red is full, blue has an EV charger.`,n1Title:`Colour-coded slots`,n2Label:`Research`,n2Stat:`72%`,n2Text:`of respondents ranked real-time availability as their top need.`,n2Title:``,n3Label:`Note 02`,n3Stat:``,n3Text:`Slot, time, pay, done. Try it on the phone.`,n3Title:`Four-step booking`,prototype:`parkin`,short:`ParkIn`,tab:`ParkIn`,tags:`User research, Prototyping`,tape:`Work in progress ✦ Coming soon ✦`,title:`ParkIn`,tone:`rgb(90, 204, 243)`,year:`2026`},{accent:`rgb(222, 26, 79)`,award:``,bg:`rgb(222, 26, 79)`,category:`SaaS`,comingSoon:!1,cursor:`rgb(17, 18, 20)`,description:`Led the redesign of an enterprise platform during its rebranding, modernising the desktop and mobile experience while preserving familiar workflows.`,fg:`rgb(255, 255, 255)`,id:`default-item-1`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[1],marquee:`Enterprise`,meta:`Jun 1, 2025 · Web + mobile`,n1Label:`Note 01`,n1Stat:``,n1Text:`Navigation stays where long-time users expect it. Only the visual system changes.`,n1Title:`Familiar workflows kept`,n2Label:`Try it`,n2Stat:``,n2Text:`Legacy screen on the left, the redesign on the right.`,n2Title:`Drag the handle`,n3Label:`Note 02`,n3Stat:``,n3Text:`Both rebuilt together during the rebrand.`,n3Title:`Desktop and mobile`,prototype:`ent`,short:`Enterprise Platform`,tab:`Enterprise`,tags:`SaaS, Transformation`,tape:`Work in progress ✦ Coming soon ✦`,title:`Enterprise Platform`,tone:`rgb(199, 15, 65)`,year:`2025`},{accent:`rgb(233, 164, 37)`,award:`★ CPVS 2025–26`,bg:`rgb(233, 164, 37)`,category:`Wayfinding`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A clear, accessible and heritage-sensitive wayfinding system for Connaught Place. Selected under CPVS 2025–26 in the STP and FTP categories.`,fg:`rgb(17, 18, 20)`,id:`default-item-2`,imageRatio:`1.6`,line:`rgb(17, 18, 20)`,link:e[2],marquee:`CP Signage`,meta:`Jan 2, 2025 · Wayfinding`,n1Label:`Note 01`,n1Stat:``,n1Text:`English and Hindi side by side, as on the real panels.`,n1Title:`Bilingual signs`,n2Label:`Try it`,n2Stat:``,n2Text:`The sign re-points to it from Central Park.`,n2Title:`Tap any block`,n3Label:`Note 02`,n3Stat:``,n3Text:`Designed to sit inside CP's protected architecture.`,n3Title:`Heritage-sensitive`,prototype:`cp`,short:`CP Signage`,tab:`CP Signage`,tags:`Wayfinding, Signage design`,tape:`Work in progress ✦ Coming soon ✦`,title:`CP Signage System`,tone:`rgb(244, 191, 85)`,year:`2025`},{accent:`rgb(31, 168, 104)`,award:``,bg:`rgb(31, 168, 104)`,category:`Healthcare`,comingSoon:!1,cursor:`rgb(222, 26, 79)`,description:`A self-service healthcare kiosk that enables accessible remote consultations and streamlined patient care.`,fg:`rgb(255, 255, 255)`,id:`default-item-3`,imageRatio:`1.6`,line:`rgb(255, 255, 255)`,link:e[3],marquee:`Kiosk`,meta:`Apr 26, 2025 · Kiosk`,n1Label:`Note 01`,n1Stat:``,n1Text:`Patients start a consultation on their own, one guided step at a time.`,n1Title:`Self-service`,n2Label:`Note 02`,n2Stat:``,n2Text:`A doctor joins over video, right at the kiosk.`,n2Title:`Remote consultation`,n3Label:`Try it`,n3Stat:``,n3Text:`Tap through the flow, in English or हिन्दी.`,n3Title:`The screen is live`,prototype:`kiosk`,short:`Telemedical Kiosk`,tab:`Kiosk`,tags:`Healthcare UX, Kiosk design`,tape:`Work in progress ✦ Coming soon ✦`,title:`Telemedical Kiosk`,tone:`rgb(22, 148, 87)`,year:`2025`},{accent:`rgb(125, 227, 255)`,award:``,bg:`rgb(18, 19, 24)`,category:`In progress`,comingSoon:!0,cursor:`rgb(34, 181, 234)`,description:`An AI and AR powered app for inspecting vehicles. I'm designing it right now, and the case study lands soon.`,fg:`rgb(255, 255, 255)`,id:`default-item-4`,imageRatio:`1.6`,line:`rgb(125, 227, 255)`,marquee:`Coming soon`,meta:`2026 · In progress · AI · AR · Mobile app`,n1Label:`AI`,n1Stat:``,n1Text:`The camera feed is checked panel by panel, flagging what looks off.`,n1Title:`Reads the car part by part`,n2Label:`AR`,n2Stat:``,n2Text:`Findings sit on the real car, right where they are.`,n2Title:`Guidance on the vehicle`,n3Label:`Sneak peek`,n3Stat:``,n3Text:`The lens shows the inspection layer underneath.`,n3Title:`Move over the car`,prototype:`car`,short:`AI + AR Vehicle Inspection`,tab:`Car Inspection`,tags:``,tape:`Work in progress ✦ Coming soon ✦`,title:`AI + AR Vehicle Inspection`,tone:`rgb(30, 32, 41)`,year:`2026`}],showCount:!0,showIntro:!0,showOutro:!0,sidePadding:16,soonBadge:`soon`,soonRing:`COMING SOON · IN PROGRESS · `,stamps:!0,style:{width:`100%`},tilt:44,topOffset:32,topOffsetPhone:10,width:`100%`})})})})})})]}),/*#__PURE__*/ f(`div`,{id:`overlay`})]})})}),lr=[`.framer-82D1a.framer-1hghx4y, .framer-82D1a .framer-1hghx4y { display: block; }`,`.framer-82D1a.framer-s8d5gr { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,`.framer-82D1a .framer-e4j7mq-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,`.framer-82D1a .framer-bzok9y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-15n2sit { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-syyabg { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; max-width: 1800%; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-gjl2ae { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-o2c88a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 1px; }`,`.framer-82D1a .framer-1ao907p-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-82D1a .framer-17qxhf4-container { flex: none; height: 92%; position: relative; width: 100%; }`,`.framer-82D1a .framer-1u3kxkv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,`.framer-82D1a .framer-12ykyxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 168px 100px 168px 100px; position: relative; width: 100%; }`,`.framer-82D1a .framer-1hfxr5x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; max-width: 1400px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-1qxp9j6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 80%; }`,`.framer-82D1a .framer-372ism, .framer-82D1a .framer-31wgst, .framer-82D1a .framer-qyyr1q, .framer-82D1a .framer-eoyoj8, .framer-82D1a .framer-vyqlo8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-82D1a .framer-12cun56 { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; z-index: 1; }`,`.framer-82D1a .framer-11hf68e { bottom: -6px; flex: none; left: -6px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -6px; top: -6px; z-index: 1; }`,`.framer-82D1a .framer-lz4pc4 { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: 12px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 12px; }`,`.framer-82D1a .framer-5e70fl { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: 12px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 12px; }`,`.framer-82D1a .framer-1fib0fp { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); flex: none; height: 12px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; width: 12px; }`,`.framer-82D1a .framer-6r03wo { --border-bottom-width: 2px; --border-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); bottom: 0px; flex: none; height: 12px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; width: 12px; }`,`.framer-82D1a .framer-i77336 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,`.framer-82D1a .framer-ljnwxn { flex: none; height: 226px; left: -91px; overflow: visible; position: absolute; right: -91px; top: calc(50.00000000000002% - 226px / 2); z-index: 2; }`,`.framer-82D1a .framer-1usv7ks-container { cursor: grab; flex: none; height: 192px; left: calc(8.714043993231833% - 162px / 2); position: absolute; top: calc(55.75221238938055% - 192px / 2); width: 162px; }`,`.framer-82D1a .framer-1g6trdm-container { flex: none; height: 192px; left: calc(91.62436548223353% - 162px / 2); position: absolute; top: calc(55.75221238938055% - 192px / 2); width: 162px; }`,`.framer-82D1a .framer-1r6gymq-container { flex: none; height: auto; max-width: 850px; position: relative; width: 100%; z-index: 1; }`,`.framer-82D1a .framer-1btv9kp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px 8px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-82D1a .framer-54pl82 { align-content: center; align-items: center; background-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #fea125); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; }`,`.framer-82D1a .framer-ge2k9a { --border-bottom-width: 3px; --border-color: var(--token-35988afc-fafd-4260-9962-57ff14cb1fea, #522e29); --border-left-width: 3px; --border-right-width: 3px; --border-style: dashed; --border-top-width: 3px; aspect-ratio: 1 / 1; background-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; }`,`.framer-82D1a .framer-14tvjdo { -webkit-mask: url('/framer/images/J82ij2J3Zq8CIlUGg2EzwpKLoMY.png') alpha no-repeat center / cover add; aspect-ratio: 1 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); flex: none; height: auto; left: 50%; mask: url('/framer/images/J82ij2J3Zq8CIlUGg2EzwpKLoMY.png') alpha no-repeat center / cover add; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 57%; }`,`.framer-82D1a .framer-1yf7kob { align-content: center; align-items: center; background-color: var(--token-5572d352-4df4-4ec3-ad7e-a66a084483f0, #19c665); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; }`,`.framer-82D1a .framer-4njtx0 { aspect-ratio: 1 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; }`,`.framer-82D1a .framer-nkhlih { bottom: -16px; flex: none; left: -15px; overflow: visible; position: absolute; right: -16px; top: -15px; }`,`.framer-82D1a .framer-1rci139 { -webkit-mask: url('/framer/images/rvNWIXYuIQEc3VcHs4PRUy1ggps.png') alpha no-repeat center / cover add; aspect-ratio: 1 / 1; background-color: var(--token-5572d352-4df4-4ec3-ad7e-a66a084483f0, #2eb67d); flex: none; height: auto; left: 50%; mask: url('/framer/images/rvNWIXYuIQEc3VcHs4PRUy1ggps.png') alpha no-repeat center / cover add; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 146%; }`,`.framer-82D1a .framer-fl9u67 { aspect-ratio: 1 / 1; background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e6399b); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; transform: translate(-50%, -50%); width: 29%; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-zperoz { align-content: center; align-items: center; background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e6399b); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; }`,`.framer-82D1a .framer-gnsd3i { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; }`,`.framer-82D1a .framer-1mkjmyx { aspect-ratio: 1 / 1; background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); flex: none; height: auto; left: -1px; overflow: visible; position: absolute; right: 0px; top: -1px; }`,`.framer-82D1a .framer-189qpoq-container { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 99%; }`,`.framer-82D1a .framer-iw497p { -webkit-mask: url('/framer/images/BcAgpr77JfR7eaU0uqMSZ9rBzyw.png') alpha no-repeat center / cover add; aspect-ratio: 0.9980506822612085 / 1; background-color: var(--token-29f9695a-09e2-4c55-ace7-e9873233e207, #ecb22e); flex: none; height: auto; left: 50%; mask: url('/framer/images/BcAgpr77JfR7eaU0uqMSZ9rBzyw.png') alpha no-repeat center / cover add; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 33%; }`,`.framer-82D1a .framer-1qr8pew { align-content: center; align-items: center; background-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px 16px 8px 16px; position: relative; width: min-content; }`,`.framer-82D1a .framer-xoi2wh { aspect-ratio: 1 / 1; background-color: var(--token-1892785e-8581-4826-b411-015017430ad3, #36c5f0); flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; }`,`.framer-82D1a .framer-b1sd0p { aspect-ratio: 1 / 1; display: grid; flex: none; gap: 0px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(1px, 1fr)); grid-template-rows: repeat(2, min-content); height: auto; justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 52%; }`,`.framer-82D1a .framer-10nh4p1, .framer-82D1a .framer-mv0yts, .framer-82D1a .framer-15ym2yx, .framer-82D1a .framer-ahwnzz { align-self: start; aspect-ratio: 1 / 1; background-color: var(--token-4f4ed186-9023-4858-830a-5202d69249c1, #111212); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; flex: none; height: auto; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-1q80jof { background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 14px; left: calc(16.071428571428594% - 14px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(16.071428571428594% - 14px / 2); width: 14px; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-m8f5ce { background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 4px; left: calc(81.25000000000003% - 4px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(20.535714285714306% - 4px / 2); width: 4px; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-x7ek3a { background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 4px; left: calc(18.75000000000002% - 4px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(85.71428571428574% - 4px / 2); width: 4px; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-sjjzc6 { background-color: var(--token-e22e0fe6-83a6-4381-a625-c6f173619c49, #e01e5a); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 11px; left: calc(84.8214285714286% - 11px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(83.92857142857146% - 11px / 2); width: 11px; will-change: var(--framer-will-change-override, transform); }`,`.framer-82D1a .framer-19ielic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 100px 0px 100px; position: relative; width: 100%; }`,`.framer-82D1a .framer-1ycauci-container { flex: none; height: auto; position: relative; width: 112%; }`,...we,...kn,`.framer-82D1a[data-border="true"]::after, .framer-82D1a [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`@media (min-width: 810px) and (max-width: 1439.98px) { .framer-82D1a.framer-s8d5gr { width: 810px; } .framer-82D1a .framer-bzok9y, .framer-82D1a .framer-1hfxr5x { gap: 32px; } .framer-82D1a .framer-o2c88a { align-self: stretch; height: auto; } .framer-82D1a .framer-17qxhf4-container { height: 90%; } .framer-82D1a .framer-12ykyxy { padding: 168px 40px 168px 40px; } .framer-82D1a .framer-1qxp9j6 { order: 0; } .framer-82D1a .framer-12cun56 { order: 1; } .framer-82D1a .framer-ljnwxn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: unset; order: 3; padding: 0px; position: relative; right: unset; top: unset; width: 100%; } .framer-82D1a .framer-1usv7ks-container, .framer-82D1a .framer-1g6trdm-container { left: unset; position: relative; top: unset; } .framer-82D1a .framer-1r6gymq-container { order: 2; } .framer-82D1a .framer-1btv9kp { order: 4; } .framer-82D1a .framer-19ielic { padding: 0px 40px 0px 40px; } .framer-82D1a .framer-1ycauci-container { width: 100%; }}`,`@media (max-width: 809.98px) { .framer-82D1a.framer-s8d5gr { width: 390px; } .framer-82D1a .framer-bzok9y, .framer-82D1a .framer-1hfxr5x { gap: 32px; } .framer-82D1a .framer-15n2sit { height: min-content; } .framer-82D1a .framer-syyabg { flex: none; gap: 16px; height: 948px; } .framer-82D1a .framer-o2c88a { align-self: stretch; height: auto; } .framer-82D1a .framer-17qxhf4-container { height: 80%; } .framer-82D1a .framer-12ykyxy { padding: 96px 16px 96px 16px; } .framer-82D1a .framer-1qxp9j6 { order: 0; width: 100%; } .framer-82D1a .framer-12cun56 { order: 1; } .framer-82D1a .framer-ljnwxn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: unset; order: 3; padding: 0px; position: relative; right: unset; top: unset; width: 100%; } .framer-82D1a .framer-1usv7ks-container, .framer-82D1a .framer-1g6trdm-container { left: unset; position: relative; top: unset; } .framer-82D1a .framer-1r6gymq-container { order: 2; } .framer-82D1a .framer-1btv9kp { order: 4; } .framer-82D1a .framer-ge2k9a, .framer-82D1a .framer-4njtx0, .framer-82D1a .framer-gnsd3i, .framer-82D1a .framer-xoi2wh { width: 47px; } .framer-82D1a .framer-19ielic { padding: 0px 16px 0px 16px; } .framer-82D1a .framer-1ycauci-container { width: 100%; }}`],ur=k(cr,lr,`framer-82D1a`),ur.displayName=`Home`,ur.defaultProps={height:5825.5,width:1440},x(ur,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/framer/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/framer/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+1F00-1FFF`,url:`/framer/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0370-03FF`,url:`/framer/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/framer/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/framer/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,weight:`500`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/framer/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,weight:`500`},{cssFamilyName:`Fragment Mono`,source:`google`,style:`normal`,uiFamilyName:`Fragment Mono`,url:`https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,weight:`400`},{cssFamilyName:`Noto Serif`,source:`google`,style:`normal`,uiFamilyName:`Noto Serif`,url:`https://fonts.gstatic.com/s/notoserif/v33/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCjxc0Lhq_Szw.woff2`,weight:`400`}]},...Mn,...Nn,...Pn,...In,...Rn,...Vn,...qn,...w(Te),...w(On)],{supportsExplicitInterCodegen:!0}),ur.loader={load:(e,t)=>O([()=>E(Ce,{},t)],t)},dr={exports:{default:{type:`reactComponent`,name:`FramerIMzwiuEeL`,slots:[],annotations:{framerImmutableVariables:`true`,framerLayoutTemplateFlowEffect:`true`,framerIntrinsicWidth:`1440`,framerDisplayContentsDiv:`false`,framerResponsiveScreen:`true`,framerComponentViewportWidth:`true`,framerScrollSections:`{"Z2sRPWbsf":{"pattern":":Z2sRPWbsf","name":"ruler"},"uKdYzdIus":{"pattern":":uKdYzdIus","name":"about"}}`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jzi64tcGp":{"layout":["fixed","auto"]},"oYMw7dt8S":{"layout":["fixed","auto"]}}}`,framerIntrinsicHeight:`5825.5`,framerAcceptsLayoutTemplate:`true`,framerContractVersion:`1`,framerColorSyntax:`true`,framerAutoSizeImages:`true`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}fr();export{dr as __FramerMetadata__,ur as default,Yn as queryParamNames};
//# sourceMappingURL=opO-1wk_pjiplUR-RiG3gvPAdloyggIBYHGRj20r1FY.BJSusu1Q.mjs.map