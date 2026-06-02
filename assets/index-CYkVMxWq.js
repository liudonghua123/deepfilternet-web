(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const je={},ui=[],ir=()=>{},hh=()=>!1,ns=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ss=e=>e.startsWith("onUpdate:"),ct=Object.assign,ko=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},aw=Object.prototype.hasOwnProperty,Pe=(e,t)=>aw.call(e,t),$e=Array.isArray,di=e=>sn(e)==="[object Map]",mh=e=>sn(e)==="[object Set]",ed=e=>sn(e)==="[object Date]",ke=e=>typeof e=="function",rt=e=>typeof e=="string",nr=e=>typeof e=="symbol",We=e=>e!==null&&typeof e=="object",gh=e=>(We(e)||ke(e))&&ke(e.then)&&ke(e.catch),bh=Object.prototype.toString,sn=e=>bh.call(e),ow=e=>sn(e).slice(8,-1),_h=e=>sn(e)==="[object Object]",To=e=>rt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wi=So(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),as=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},lw=/-\w/g,qt=as(e=>e.replace(lw,t=>t.slice(1).toUpperCase())),uw=/\B([A-Z])/g,ei=as(e=>e.replace(uw,"-$1").toLowerCase()),yh=as(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ns=as(e=>e?`on${yh(e)}`:""),tr=(e,t)=>!Object.is(e,t),Ds=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},wh=(e,t,r,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:r})},dw=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let td;const os=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ls(e){if($e(e)){const t={};for(let r=0;r<e.length;r++){const i=e[r],n=rt(i)?hw(i):ls(i);if(n)for(const s in n)t[s]=n[s]}return t}else if(rt(e)||We(e))return e}const cw=/;(?![^(]*\))/g,pw=/:([^]+)/,fw=/\/\*[^]*?\*\//g;function hw(e){const t={};return e.replace(fw,"").split(cw).forEach(r=>{if(r){const i=r.split(pw);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function mr(e){let t="";if(rt(e))t=e;else if($e(e))for(let r=0;r<e.length;r++){const i=mr(e[r]);i&&(t+=i+" ")}else if(We(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const mw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gw=So(mw);function vh(e){return!!e||e===""}function bw(e,t){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Eo(e[i],t[i]);return r}function Eo(e,t){if(e===t)return!0;let r=ed(e),i=ed(t);if(r||i)return r&&i?e.getTime()===t.getTime():!1;if(r=nr(e),i=nr(t),r||i)return e===t;if(r=$e(e),i=$e(t),r||i)return r&&i?bw(e,t):!1;if(r=We(e),i=We(t),r||i){if(!r||!i)return!1;const n=Object.keys(e).length,s=Object.keys(t).length;if(n!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Eo(e[a],t[a]))return!1}}return String(e)===String(t)}const $h=e=>!!(e&&e.__v_isRef===!0),Yt=e=>rt(e)?e:e==null?"":$e(e)||We(e)&&(e.toString===bh||!ke(e.toString))?$h(e)?Yt(e.value):JSON.stringify(e,xh,2):String(e),xh=(e,t)=>$h(t)?xh(e,t.value):di(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[i,n],s)=>(r[Ps(i,s)+" =>"]=n,r),{})}:mh(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Ps(r))}:nr(t)?Ps(t):We(t)&&!$e(t)&&!_h(t)?String(t):t,Ps=(e,t="")=>{var r;return nr(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class _w{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&dt&&(dt.active?(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=dt;try{return dt=this,t()}finally{dt=r}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){if(this._on>0&&--this._on===0){if(dt===this)dt=this.prevScope;else{let t=dt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,i;for(r=0,i=this.effects.length;r<i;r++)this.effects[r].stop();for(this.effects.length=0,r=0,i=this.cleanups.length;r<i;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,i=this.scopes.length;r<i;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function yw(){return dt}let Ge;const Us=new WeakSet;class Sh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&(dt.active?dt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Us.has(this)&&(Us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),Eh(this);const t=Ge,r=Wt;Ge=this,Wt=!0;try{return this.fn()}finally{Ih(this),Ge=t,Wt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zo(t);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let kh=0,Fi,Vi;function Th(e,t=!1){if(e.flags|=8,t){e.next=Vi,Vi=e;return}e.next=Fi,Fi=e}function Io(){kh++}function Co(){if(--kh>0)return;if(Vi){let t=Vi;for(Vi=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Fi;){let t=Fi;for(Fi=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=r}}if(e)throw e}function Eh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ih(e){let t,r=e.depsTail,i=r;for(;i;){const n=i.prevDep;i.version===-1?(i===r&&(r=n),zo(i),ww(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=n}e.deps=t,e.depsTail=r}function Ha(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ch(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ch(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qi)||(e.globalVersion=Qi,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ha(e))))return;e.flags|=2;const t=e.dep,r=Ge,i=Wt;Ge=e,Wt=!0;try{Eh(e);const n=e.fn(e._value);(t.version===0||tr(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{Ge=r,Wt=i,Ih(e),e.flags&=-3}}function zo(e,t=!1){const{dep:r,prevSub:i,nextSub:n}=e;if(i&&(i.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=i,e.nextSub=void 0),r.subs===e&&(r.subs=i,!i&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)zo(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function ww(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Wt=!0;const zh=[];function gr(){zh.push(Wt),Wt=!1}function br(){const e=zh.pop();Wt=e===void 0?!0:e}function rd(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Ge;Ge=void 0;try{t()}finally{Ge=r}}}let Qi=0;class vw{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ao{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ge||!Wt||Ge===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Ge)r=this.activeLink=new vw(Ge,this),Ge.deps?(r.prevDep=Ge.depsTail,Ge.depsTail.nextDep=r,Ge.depsTail=r):Ge.deps=Ge.depsTail=r,Ah(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const i=r.nextDep;i.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=i),r.prevDep=Ge.depsTail,r.nextDep=void 0,Ge.depsTail.nextDep=r,Ge.depsTail=r,Ge.deps===r&&(Ge.deps=i)}return r}trigger(t){this.version++,Qi++,this.notify(t)}notify(t){Io();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Co()}}}function Ah(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ah(i)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ga=new WeakMap,jr=Symbol(""),ja=Symbol(""),Yi=Symbol("");function ht(e,t,r){if(Wt&&Ge){let i=Ga.get(e);i||Ga.set(e,i=new Map);let n=i.get(r);n||(i.set(r,n=new Ao),n.map=i,n.key=r),n.track()}}function pr(e,t,r,i,n,s){const a=Ga.get(e);if(!a){Qi++;return}const o=l=>{l&&l.trigger()};if(Io(),t==="clear")a.forEach(o);else{const l=$e(e),d=l&&To(r);if(l&&r==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===Yi||!nr(h)&&h>=c)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(Yi)),t){case"add":l?d&&o(a.get("length")):(o(a.get(jr)),di(e)&&o(a.get(ja)));break;case"delete":l||(o(a.get(jr)),di(e)&&o(a.get(ja)));break;case"set":di(e)&&o(a.get(jr));break}}Co()}function ni(e){const t=De(e);return t===e?t:(ht(t,"iterate",Yi),Ot(e)?t:t.map(Vt))}function us(e){return ht(e=De(e),"iterate",Yi),e}function Jt(e,t){return _r(e)?hi(Kr(e)?Vt(t):t):Vt(t)}const $w={__proto__:null,[Symbol.iterator](){return Ls(this,Symbol.iterator,e=>Jt(this,e))},concat(...e){return ni(this).concat(...e.map(t=>$e(t)?ni(t):t))},entries(){return Ls(this,"entries",e=>(e[1]=Jt(this,e[1]),e))},every(e,t){return lr(this,"every",e,t,void 0,arguments)},filter(e,t){return lr(this,"filter",e,t,r=>r.map(i=>Jt(this,i)),arguments)},find(e,t){return lr(this,"find",e,t,r=>Jt(this,r),arguments)},findIndex(e,t){return lr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lr(this,"findLast",e,t,r=>Jt(this,r),arguments)},findLastIndex(e,t){return lr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lr(this,"forEach",e,t,void 0,arguments)},includes(...e){return qs(this,"includes",e)},indexOf(...e){return qs(this,"indexOf",e)},join(e){return ni(this).join(e)},lastIndexOf(...e){return qs(this,"lastIndexOf",e)},map(e,t){return lr(this,"map",e,t,void 0,arguments)},pop(){return xi(this,"pop")},push(...e){return xi(this,"push",e)},reduce(e,...t){return id(this,"reduce",e,t)},reduceRight(e,...t){return id(this,"reduceRight",e,t)},shift(){return xi(this,"shift")},some(e,t){return lr(this,"some",e,t,void 0,arguments)},splice(...e){return xi(this,"splice",e)},toReversed(){return ni(this).toReversed()},toSorted(e){return ni(this).toSorted(e)},toSpliced(...e){return ni(this).toSpliced(...e)},unshift(...e){return xi(this,"unshift",e)},values(){return Ls(this,"values",e=>Jt(this,e))}};function Ls(e,t,r){const i=us(e),n=i[t]();return i!==e&&!Ot(e)&&(n._next=n.next,n.next=()=>{const s=n._next();return s.done||(s.value=r(s.value)),s}),n}const xw=Array.prototype;function lr(e,t,r,i,n,s){const a=us(e),o=a!==e&&!Ot(e),l=a[t];if(l!==xw[t]){const f=l.apply(e,s);return o?Vt(f):f}let d=r;a!==e&&(o?d=function(f,h){return r.call(this,Jt(e,f),h,e)}:r.length>2&&(d=function(f,h){return r.call(this,f,h,e)}));const c=l.call(a,d,i);return o&&n?n(c):c}function id(e,t,r,i){const n=us(e),s=n!==e&&!Ot(e);let a=r,o=!1;n!==e&&(s?(o=i.length===0,a=function(d,c,f){return o&&(o=!1,d=Jt(e,d)),r.call(this,d,Jt(e,c),f,e)}):r.length>3&&(a=function(d,c,f){return r.call(this,d,c,f,e)}));const l=n[t](a,...i);return o?Jt(e,l):l}function qs(e,t,r){const i=De(e);ht(i,"iterate",Yi);const n=i[t](...r);return(n===-1||n===!1)&&Bo(r[0])?(r[0]=De(r[0]),i[t](...r)):n}function xi(e,t,r=[]){gr(),Io();const i=De(e)[t].apply(e,r);return Co(),br(),i}const Sw=So("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nr));function kw(e){nr(e)||(e=String(e));const t=De(this);return ht(t,"has",e),t.hasOwnProperty(e)}class Rh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,i){if(r==="__v_skip")return t.__v_skip;const n=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return s;if(r==="__v_raw")return i===(n?s?Bw:Dh:s?Nh:Bh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=$e(t);if(!n){let l;if(a&&(l=$w[r]))return l;if(r==="hasOwnProperty")return kw}const o=Reflect.get(t,r,gt(t)?t:i);if((nr(r)?Oh.has(r):Sw(r))||(n||ht(t,"get",r),s))return o;if(gt(o)){const l=a&&To(r)?o:o.value;return n&&We(l)?Xa(l):l}return We(o)?n?Xa(o):Ro(o):o}}class Mh extends Rh{constructor(t=!1){super(!1,t)}set(t,r,i,n){let s=t[r];const a=$e(t)&&To(r);if(!this._isShallow){const d=_r(s);if(!Ot(i)&&!_r(i)&&(s=De(s),i=De(i)),!a&&gt(s)&&!gt(i))return d||(s.value=i),!0}const o=a?Number(r)<t.length:Pe(t,r),l=Reflect.set(t,r,i,gt(t)?t:n);return t===De(n)&&(o?tr(i,s)&&pr(t,"set",r,i):pr(t,"add",r,i)),l}deleteProperty(t,r){const i=Pe(t,r);t[r];const n=Reflect.deleteProperty(t,r);return n&&i&&pr(t,"delete",r,void 0),n}has(t,r){const i=Reflect.has(t,r);return(!nr(r)||!Oh.has(r))&&ht(t,"has",r),i}ownKeys(t){return ht(t,"iterate",$e(t)?"length":jr),Reflect.ownKeys(t)}}class Tw extends Rh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Ew=new Mh,Iw=new Tw,Cw=new Mh(!0);const Ka=e=>e,$n=e=>Reflect.getPrototypeOf(e);function zw(e,t,r){return function(...i){const n=this.__v_raw,s=De(n),a=di(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=n[e](...i),c=r?Ka:t?hi:Vt;return!t&&ht(s,"iterate",l?ja:jr),ct(Object.create(d),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function xn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Aw(e,t){const r={get(n){const s=this.__v_raw,a=De(s),o=De(n);e||(tr(n,o)&&ht(a,"get",n),ht(a,"get",o));const{has:l}=$n(a),d=t?Ka:e?hi:Vt;if(l.call(a,n))return d(s.get(n));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(n)},get size(){const n=this.__v_raw;return!e&&ht(De(n),"iterate",jr),n.size},has(n){const s=this.__v_raw,a=De(s),o=De(n);return e||(tr(n,o)&&ht(a,"has",n),ht(a,"has",o)),n===o?s.has(n):s.has(n)||s.has(o)},forEach(n,s){const a=this,o=a.__v_raw,l=De(o),d=t?Ka:e?hi:Vt;return!e&&ht(l,"iterate",jr),o.forEach((c,f)=>n.call(s,d(c),d(f),a))}};return ct(r,e?{add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear")}:{add(n){const s=De(this),a=$n(s),o=De(n),l=!t&&!Ot(n)&&!_r(n)?o:n;return a.has.call(s,l)||tr(n,l)&&a.has.call(s,n)||tr(o,l)&&a.has.call(s,o)||(s.add(l),pr(s,"add",l,l)),this},set(n,s){!t&&!Ot(s)&&!_r(s)&&(s=De(s));const a=De(this),{has:o,get:l}=$n(a);let d=o.call(a,n);d||(n=De(n),d=o.call(a,n));const c=l.call(a,n);return a.set(n,s),d?tr(s,c)&&pr(a,"set",n,s):pr(a,"add",n,s),this},delete(n){const s=De(this),{has:a,get:o}=$n(s);let l=a.call(s,n);l||(n=De(n),l=a.call(s,n)),o&&o.call(s,n);const d=s.delete(n);return l&&pr(s,"delete",n,void 0),d},clear(){const n=De(this),s=n.size!==0,a=n.clear();return s&&pr(n,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=zw(n,e,t)}),r}function Oo(e,t){const r=Aw(e,t);return(i,n,s)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?i:Reflect.get(Pe(r,n)&&n in i?r:i,n,s)}const Ow={get:Oo(!1,!1)},Rw={get:Oo(!1,!0)},Mw={get:Oo(!0,!1)};const Bh=new WeakMap,Nh=new WeakMap,Dh=new WeakMap,Bw=new WeakMap;function Nw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ro(e){return _r(e)?e:Mo(e,!1,Ew,Ow,Bh)}function Dw(e){return Mo(e,!1,Cw,Rw,Nh)}function Xa(e){return Mo(e,!0,Iw,Mw,Dh)}function Mo(e,t,r,i,n){if(!We(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=n.get(e);if(s)return s;const a=Nw(ow(e));if(a===0)return e;const o=new Proxy(e,a===2?i:r);return n.set(e,o),o}function Kr(e){return _r(e)?Kr(e.__v_raw):!!(e&&e.__v_isReactive)}function _r(e){return!!(e&&e.__v_isReadonly)}function Ot(e){return!!(e&&e.__v_isShallow)}function Bo(e){return e?!!e.__v_raw:!1}function De(e){const t=e&&e.__v_raw;return t?De(t):e}function Pw(e){return!Pe(e,"__v_skip")&&Object.isExtensible(e)&&wh(e,"__v_skip",!0),e}const Vt=e=>We(e)?Ro(e):e,hi=e=>We(e)?Xa(e):e;function gt(e){return e?e.__v_isRef===!0:!1}function Ze(e){return Uw(e,!1)}function Uw(e,t){return gt(e)?e:new Lw(e,t)}class Lw{constructor(t,r){this.dep=new Ao,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:De(t),this._value=r?t:Vt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,i=this.__v_isShallow||Ot(t)||_r(t);t=i?t:De(t),tr(t,r)&&(this._rawValue=t,this._value=i?t:Vt(t),this.dep.trigger())}}function qw(e){return gt(e)?e.value:e}const Ww={get:(e,t,r)=>t==="__v_raw"?e:qw(Reflect.get(e,t,r)),set:(e,t,r,i)=>{const n=e[t];return gt(n)&&!gt(r)?(n.value=r,!0):Reflect.set(e,t,r,i)}};function Ph(e){return Kr(e)?e:new Proxy(e,Ww)}class Fw{constructor(t,r,i){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Ao(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return Th(this,!0),!0}get value(){const t=this.dep.track();return Ch(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vw(e,t,r=!1){let i,n;return ke(e)?i=e:(i=e.get,n=e.set),new Fw(i,n,r)}const Sn={},Fn=new WeakMap;let Fr;function Hw(e,t=!1,r=Fr){if(r){let i=Fn.get(r);i||Fn.set(r,i=[]),i.push(e)}}function Gw(e,t,r=je){const{immediate:i,deep:n,once:s,scheduler:a,augmentJob:o,call:l}=r,d=k=>n?k:Ot(k)||n===!1||n===0?Cr(k,1):Cr(k);let c,f,h,b,_=!1,y=!1;if(gt(e)?(f=()=>e.value,_=Ot(e)):Kr(e)?(f=()=>d(e),_=!0):$e(e)?(y=!0,_=e.some(k=>Kr(k)||Ot(k)),f=()=>e.map(k=>{if(gt(k))return k.value;if(Kr(k))return d(k);if(ke(k))return l?l(k,2):k()})):ke(e)?t?f=l?()=>l(e,2):e:f=()=>{if(h){gr();try{h()}finally{br()}}const k=Fr;Fr=c;try{return l?l(e,3,[b]):e(b)}finally{Fr=k}}:f=ir,t&&n){const k=f,I=n===!0?1/0:n;f=()=>Cr(k(),I)}const S=yw(),v=()=>{c.stop(),S&&S.active&&ko(S.effects,c)};if(s&&t){const k=t;t=(...I)=>{k(...I),v()}}let w=y?new Array(e.length).fill(Sn):Sn;const T=k=>{if(!(!(c.flags&1)||!c.dirty&&!k))if(t){const I=c.run();if(n||_||(y?I.some((O,A)=>tr(O,w[A])):tr(I,w))){h&&h();const O=Fr;Fr=c;try{const A=[I,w===Sn?void 0:y&&w[0]===Sn?[]:w,b];w=I,l?l(t,3,A):t(...A)}finally{Fr=O}}}else c.run()};return o&&o(T),c=new Sh(f),c.scheduler=a?()=>a(T,!1):T,b=k=>Hw(k,!1,c),h=c.onStop=()=>{const k=Fn.get(c);if(k){if(l)l(k,4);else for(const I of k)I();Fn.delete(c)}},t?i?T(!0):w=c.run():a?a(T.bind(null,!0),!0):c.run(),v.pause=c.pause.bind(c),v.resume=c.resume.bind(c),v.stop=v,v}function Cr(e,t=1/0,r){if(t<=0||!We(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,gt(e))Cr(e.value,t,r);else if($e(e))for(let i=0;i<e.length;i++)Cr(e[i],t,r);else if(mh(e)||di(e))e.forEach(i=>{Cr(i,t,r)});else if(_h(e)){for(const i in e)Cr(e[i],t,r);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Cr(e[i],t,r)}return e}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,r,i){try{return i?e(...i):e()}catch(n){ds(n,t,r)}}function Ht(e,t,r,i){if(ke(e)){const n=an(e,t,r,i);return n&&gh(n)&&n.catch(s=>{ds(s,t,r)}),n}if($e(e)){const n=[];for(let s=0;s<e.length;s++)n.push(Ht(e[s],t,r,i));return n}}function ds(e,t,r,i=!0){const n=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||je;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,l,d)===!1)return}o=o.parent}if(s){gr(),an(s,null,10,[e,l,d]),br();return}}jw(e,r,n,i,a)}function jw(e,t,r,i=!0,n=!1){if(n)throw e;console.error(e)}const yt=[];let Qt=-1;const ci=[];let Ir=null,ai=0;const Uh=Promise.resolve();let Vn=null;function Kw(e){const t=Vn||Uh;return e?t.then(this?e.bind(this):e):t}function Xw(e){let t=Qt+1,r=yt.length;for(;t<r;){const i=t+r>>>1,n=yt[i],s=Ji(n);s<e||s===e&&n.flags&2?t=i+1:r=i}return t}function No(e){if(!(e.flags&1)){const t=Ji(e),r=yt[yt.length-1];!r||!(e.flags&2)&&t>=Ji(r)?yt.push(e):yt.splice(Xw(t),0,e),e.flags|=1,Lh()}}function Lh(){Vn||(Vn=Uh.then(Wh))}function Zw(e){$e(e)?ci.push(...e):Ir&&e.id===-1?Ir.splice(ai+1,0,e):e.flags&1||(ci.push(e),e.flags|=1),Lh()}function nd(e,t,r=Qt+1){for(;r<yt.length;r++){const i=yt[r];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;yt.splice(r,1),r--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qh(e){if(ci.length){const t=[...new Set(ci)].sort((r,i)=>Ji(r)-Ji(i));if(ci.length=0,Ir){Ir.push(...t);return}for(Ir=t,ai=0;ai<Ir.length;ai++){const r=Ir[ai];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Ir=null,ai=0}}const Ji=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Wh(e){try{for(Qt=0;Qt<yt.length;Qt++){const t=yt[Qt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),an(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qt<yt.length;Qt++){const t=yt[Qt];t&&(t.flags&=-2)}Qt=-1,yt.length=0,qh(),Vn=null,(yt.length||ci.length)&&Wh()}}let rr=null,Fh=null;function Hn(e){const t=rr;return rr=e,Fh=e&&e.type.__scopeId||null,t}function Qw(e,t=rr,r){if(!t||e._n)return e;const i=(...n)=>{i._d&&md(-1);const s=Hn(t);let a;try{a=e(...n)}finally{Hn(s),i._d&&md(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(e,t,r,i){const n=e.dirs,s=t&&t.dirs;for(let a=0;a<n.length;a++){const o=n[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(gr(),Ht(l,r,8,[e.el,o,e,t]),br())}}function Yw(e,t){if(wt){let r=wt.provides;const i=wt.parent&&wt.parent.provides;i===r&&(r=wt.provides=Object.create(i)),r[e]=t}}function Pn(e,t,r=!1){const i=Zv();if(i||fi){let n=fi?fi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return r&&ke(t)?t.call(i&&i.proxy):t}}const Jw=Symbol.for("v-scx"),ev=()=>Pn(Jw);function pi(e,t,r){return Vh(e,t,r)}function Vh(e,t,r=je){const{immediate:i,deep:n,flush:s,once:a}=r,o=ct({},r),l=t&&i||!t&&s!=="post";let d;if(tn){if(s==="sync"){const b=ev();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=ir,b.resume=ir,b.pause=ir,b}}const c=wt;o.call=(b,_,y)=>Ht(b,c,_,y);let f=!1;s==="post"?o.scheduler=b=>{$t(b,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(b,_)=>{_?b():No(b)}),o.augmentJob=b=>{t&&(b.flags|=4),f&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const h=Gw(e,t,o);return tn&&(d?d.push(h):l&&h()),h}function tv(e,t,r){const i=this.proxy,n=rt(e)?e.includes(".")?Hh(i,e):()=>i[e]:e.bind(i,i);let s;ke(t)?s=t:(s=t.handler,r=t);const a=un(this),o=Vh(n,s.bind(i),r);return a(),o}function Hh(e,t){const r=t.split(".");return()=>{let i=e;for(let n=0;n<r.length&&i;n++)i=i[r[n]];return i}}const rv=Symbol("_vte"),iv=e=>e.__isTeleport,Ws=Symbol("_leaveCb");function Do(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Do(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function on(e,t){return ke(e)?ct({name:e.name},t,{setup:e}):e}function Gh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function sd(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const Gn=new WeakMap;function Hi(e,t,r,i,n=!1){if($e(e)){e.forEach((y,S)=>Hi(y,t&&($e(t)?t[S]:t),r,i,n));return}if(Gi(i)&&!n){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hi(e,t,r,i.component.subTree);return}const s=i.shapeFlag&4?qo(i.component):i.el,a=n?null:s,{i:o,r:l}=e,d=t&&t.r,c=o.refs===je?o.refs={}:o.refs,f=o.setupState,h=De(f),b=f===je?hh:y=>sd(c,y)?!1:Pe(h,y),_=(y,S)=>!(S&&sd(c,S));if(d!=null&&d!==l){if(ad(t),rt(d))c[d]=null,b(d)&&(f[d]=null);else if(gt(d)){const y=t;_(d,y.k)&&(d.value=null),y.k&&(c[y.k]=null)}}if(ke(l))an(l,o,12,[a,c]);else{const y=rt(l),S=gt(l);if(y||S){const v=()=>{if(e.f){const w=y?b(l)?f[l]:c[l]:_()||!e.k?l.value:c[e.k];if(n)$e(w)&&ko(w,s);else if($e(w))w.includes(s)||w.push(s);else if(y)c[l]=[s],b(l)&&(f[l]=c[l]);else{const T=[s];_(l,e.k)&&(l.value=T),e.k&&(c[e.k]=T)}}else y?(c[l]=a,b(l)&&(f[l]=a)):S&&(_(l,e.k)&&(l.value=a),e.k&&(c[e.k]=a))};if(a){const w=()=>{v(),Gn.delete(e)};w.id=-1,Gn.set(e,w),$t(w,r)}else ad(e),v()}}}function ad(e){const t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}os().requestIdleCallback;os().cancelIdleCallback;const Gi=e=>!!e.type.__asyncLoader,jh=e=>e.type.__isKeepAlive;function nv(e,t){Kh(e,"a",t)}function sv(e,t){Kh(e,"da",t)}function Kh(e,t,r=wt){const i=e.__wdc||(e.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(cs(t,i,r),r){let n=r.parent;for(;n&&n.parent;)jh(n.parent.vnode)&&av(i,t,r,n),n=n.parent}}function av(e,t,r,i){const n=cs(t,e,i,!0);ln(()=>{ko(i[t],n)},r)}function cs(e,t,r=wt,i=!1){if(r){const n=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{gr();const o=un(r),l=Ht(t,r,e,a);return o(),br(),l});return i?n.unshift(s):n.push(s),s}}const yr=e=>(t,r=wt)=>{(!tn||e==="sp")&&cs(e,(...i)=>t(...i),r)},ov=yr("bm"),ps=yr("m"),lv=yr("bu"),uv=yr("u"),dv=yr("bum"),ln=yr("um"),cv=yr("sp"),pv=yr("rtg"),fv=yr("rtc");function hv(e,t=wt){cs("ec",e,t)}const mv=Symbol.for("v-ndc");function Xh(e,t,r,i){let n;const s=r,a=$e(e);if(a||rt(e)){const o=a&&Kr(e);let l=!1,d=!1;o&&(l=!Ot(e),d=_r(e),e=us(e)),n=new Array(e.length);for(let c=0,f=e.length;c<f;c++)n[c]=t(l?d?hi(Vt(e[c])):Vt(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){n=new Array(e);for(let o=0;o<e;o++)n[o]=t(o+1,o,void 0,s)}else if(We(e))if(e[Symbol.iterator])n=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);n=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const c=o[l];n[l]=t(e[c],c,l,s)}}else n=[];return n}const Za=e=>e?gm(e)?qo(e):Za(e.parent):null,ji=ct(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Za(e.parent),$root:e=>Za(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Qh(e),$forceUpdate:e=>e.f||(e.f=()=>{No(e.update)}),$nextTick:e=>e.n||(e.n=Kw.bind(e.proxy)),$watch:e=>tv.bind(e)}),Fs=(e,t)=>e!==je&&!e.__isScriptSetup&&Pe(e,t),gv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:i,data:n,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return n[t];case 4:return r[t];case 3:return s[t]}else{if(Fs(i,t))return a[t]=1,i[t];if(n!==je&&Pe(n,t))return a[t]=2,n[t];if(Pe(s,t))return a[t]=3,s[t];if(r!==je&&Pe(r,t))return a[t]=4,r[t];Qa&&(a[t]=0)}}const d=ji[t];let c,f;if(d)return t==="$attrs"&&ht(e.attrs,"get",""),d(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(r!==je&&Pe(r,t))return a[t]=4,r[t];if(f=l.config.globalProperties,Pe(f,t))return f[t]},set({_:e},t,r){const{data:i,setupState:n,ctx:s}=e;return Fs(n,t)?(n[t]=r,!0):i!==je&&Pe(i,t)?(i[t]=r,!0):Pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:n,props:s,type:a}},o){let l;return!!(r[o]||e!==je&&o[0]!=="$"&&Pe(e,o)||Fs(t,o)||Pe(s,o)||Pe(i,o)||Pe(ji,o)||Pe(n.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Pe(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function od(e){return $e(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Qa=!0;function bv(e){const t=Qh(e),r=e.proxy,i=e.ctx;Qa=!1,t.beforeCreate&&ld(t.beforeCreate,e,"bc");const{data:n,computed:s,methods:a,watch:o,provide:l,inject:d,created:c,beforeMount:f,mounted:h,beforeUpdate:b,updated:_,activated:y,deactivated:S,beforeDestroy:v,beforeUnmount:w,destroyed:T,unmounted:k,render:I,renderTracked:O,renderTriggered:A,errorCaptured:$,serverPrefetch:q,expose:V,inheritAttrs:ue,components:ie,directives:K,filters:M}=t;if(d&&_v(d,i,null),a)for(const ee in a){const Q=a[ee];ke(Q)&&(i[ee]=Q.bind(r))}if(n){const ee=n.call(r,r);We(ee)&&(e.data=Ro(ee))}if(Qa=!0,s)for(const ee in s){const Q=s[ee],pe=ke(Q)?Q.bind(r,r):ke(Q.get)?Q.get.bind(r,r):ir,be=!ke(Q)&&ke(Q.set)?Q.set.bind(r):ir,L=Xn({get:pe,set:be});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>L.value,set:oe=>L.value=oe})}if(o)for(const ee in o)Zh(o[ee],i,r,ee);if(l){const ee=ke(l)?l.call(r):l;Reflect.ownKeys(ee).forEach(Q=>{Yw(Q,ee[Q])})}c&&ld(c,e,"c");function H(ee,Q){$e(Q)?Q.forEach(pe=>ee(pe.bind(r))):Q&&ee(Q.bind(r))}if(H(ov,f),H(ps,h),H(lv,b),H(uv,_),H(nv,y),H(sv,S),H(hv,$),H(fv,O),H(pv,A),H(dv,w),H(ln,k),H(cv,q),$e(V))if(V.length){const ee=e.exposed||(e.exposed={});V.forEach(Q=>{Object.defineProperty(ee,Q,{get:()=>r[Q],set:pe=>r[Q]=pe,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===ir&&(e.render=I),ue!=null&&(e.inheritAttrs=ue),ie&&(e.components=ie),K&&(e.directives=K),q&&Gh(e)}function _v(e,t,r=ir){$e(e)&&(e=Ya(e));for(const i in e){const n=e[i];let s;We(n)?"default"in n?s=Pn(n.from||i,n.default,!0):s=Pn(n.from||i):s=Pn(n),gt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function ld(e,t,r){Ht($e(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,r)}function Zh(e,t,r,i){let n=i.includes(".")?Hh(r,i):()=>r[i];if(rt(e)){const s=t[e];ke(s)&&pi(n,s)}else if(ke(e))pi(n,e.bind(r));else if(We(e))if($e(e))e.forEach(s=>Zh(s,t,r,i));else{const s=ke(e.handler)?e.handler.bind(r):t[e.handler];ke(s)&&pi(n,s,e)}}function Qh(e){const t=e.type,{mixins:r,extends:i}=t,{mixins:n,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!n.length&&!r&&!i?l=t:(l={},n.length&&n.forEach(d=>jn(l,d,a,!0)),jn(l,t,a)),We(t)&&s.set(t,l),l}function jn(e,t,r,i=!1){const{mixins:n,extends:s}=t;s&&jn(e,s,r,!0),n&&n.forEach(a=>jn(e,a,r,!0));for(const a in t)if(!(i&&a==="expose")){const o=yv[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const yv={data:ud,props:dd,emits:dd,methods:Bi,computed:Bi,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Bi,directives:Bi,watch:vv,provide:ud,inject:wv};function ud(e,t){return t?e?function(){return ct(ke(e)?e.call(this,this):e,ke(t)?t.call(this,this):t)}:t:e}function wv(e,t){return Bi(Ya(e),Ya(t))}function Ya(e){if($e(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function _t(e,t){return e?[...new Set([].concat(e,t))]:t}function Bi(e,t){return e?ct(Object.create(null),e,t):t}function dd(e,t){return e?$e(e)&&$e(t)?[...new Set([...e,...t])]:ct(Object.create(null),od(e),od(t??{})):t}function vv(e,t){if(!e)return t;if(!t)return e;const r=ct(Object.create(null),e);for(const i in t)r[i]=_t(e[i],t[i]);return r}function Yh(){return{app:null,config:{isNativeTag:hh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function xv(e,t){return function(i,n=null){ke(i)||(i=ct({},i)),n!=null&&!We(n)&&(n=null);const s=Yh(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:$v++,_component:i,_props:n,_container:null,_context:s,_instance:null,version:r$,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(d,...f)):ke(c)&&(a.add(c),c(d,...f))),d},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),d},component(c,f){return f?(s.components[c]=f,d):s.components[c]},directive(c,f){return f?(s.directives[c]=f,d):s.directives[c]},mount(c,f,h){if(!l){const b=d._ceVNode||mt(i,n);return b.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(b,c,h),l=!0,d._container=c,c.__vue_app__=d,qo(b.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Ht(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,f){return s.provides[c]=f,d},runWithContext(c){const f=fi;fi=d;try{return c()}finally{fi=f}}};return d}}let fi=null;const Sv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${qt(t)}Modifiers`]||e[`${ei(t)}Modifiers`];function kv(e,t,...r){if(e.isUnmounted)return;const i=e.vnode.props||je;let n=r;const s=t.startsWith("update:"),a=s&&Sv(i,t.slice(7));a&&(a.trim&&(n=r.map(c=>rt(c)?c.trim():c)),a.number&&(n=r.map(dw)));let o,l=i[o=Ns(t)]||i[o=Ns(qt(t))];!l&&s&&(l=i[o=Ns(ei(t))]),l&&Ht(l,e,6,n);const d=i[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ht(d,e,6,n)}}const Tv=new WeakMap;function Jh(e,t,r=!1){const i=r?Tv:t.emitsCache,n=i.get(e);if(n!==void 0)return n;const s=e.emits;let a={},o=!1;if(!ke(e)){const l=d=>{const c=Jh(d,t,!0);c&&(o=!0,ct(a,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(We(e)&&i.set(e,null),null):($e(s)?s.forEach(l=>a[l]=null):ct(a,s),We(e)&&i.set(e,a),a)}function fs(e,t){return!e||!ns(t)?!1:(t=t.slice(2).replace(/Once$/,""),Pe(e,t[0].toLowerCase()+t.slice(1))||Pe(e,ei(t))||Pe(e,t))}function cd(e){const{type:t,vnode:r,proxy:i,withProxy:n,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:c,props:f,data:h,setupState:b,ctx:_,inheritAttrs:y}=e,S=Hn(e);let v,w;try{if(r.shapeFlag&4){const k=n||i,I=k;v=er(d.call(I,k,c,f,b,h,_)),w=o}else{const k=t;v=er(k.length>1?k(f,{attrs:o,slots:a,emit:l}):k(f,null)),w=t.props?o:Ev(o)}}catch(k){Ki.length=0,ds(k,e,1),v=mt(Ar)}let T=v;if(w&&y!==!1){const k=Object.keys(w),{shapeFlag:I}=T;k.length&&I&7&&(s&&k.some(ss)&&(w=Iv(w,s)),T=mi(T,w,!1,!0))}return r.dirs&&(T=mi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(r.dirs):r.dirs),r.transition&&Do(T,r.transition),v=T,Hn(S),v}const Ev=e=>{let t;for(const r in e)(r==="class"||r==="style"||ns(r))&&((t||(t={}))[r]=e[r]);return t},Iv=(e,t)=>{const r={};for(const i in e)(!ss(i)||!(i.slice(9)in t))&&(r[i]=e[i]);return r};function Cv(e,t,r){const{props:i,children:n,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return i?pd(i,a,d):!!a;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(em(a,i,h)&&!fs(d,h))return!0}}}else return(n||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?pd(i,a,d):!0:!!a;return!1}function pd(e,t,r){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const s=i[n];if(em(t,e,s)&&!fs(r,s))return!0}return!1}function em(e,t,r){const i=e[r],n=t[r];return r==="style"&&We(i)&&We(n)?!Eo(i,n):i!==n}function zv({vnode:e,parent:t,suspense:r},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=i,e=n),n===e)(e=t.vnode).el=i,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=i)}const tm={},rm=()=>Object.create(tm),im=e=>Object.getPrototypeOf(e)===tm;function Av(e,t,r,i=!1){const n={},s=rm();e.propsDefaults=Object.create(null),nm(e,t,n,s);for(const a in e.propsOptions[0])a in n||(n[a]=void 0);r?e.props=i?n:Dw(n):e.type.props?e.props=n:e.props=s,e.attrs=s}function Ov(e,t,r,i){const{props:n,attrs:s,vnode:{patchFlag:a}}=e,o=De(n),[l]=e.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(fs(e.emitsOptions,h))continue;const b=t[h];if(l)if(Pe(s,h))b!==s[h]&&(s[h]=b,d=!0);else{const _=qt(h);n[_]=Ja(l,o,_,b,e,!1)}else b!==s[h]&&(s[h]=b,d=!0)}}}else{nm(e,t,n,s)&&(d=!0);let c;for(const f in o)(!t||!Pe(t,f)&&((c=ei(f))===f||!Pe(t,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(n[f]=Ja(l,o,f,void 0,e,!0)):delete n[f]);if(s!==o)for(const f in s)(!t||!Pe(t,f))&&(delete s[f],d=!0)}d&&pr(e.attrs,"set","")}function nm(e,t,r,i){const[n,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Wi(l))continue;const d=t[l];let c;n&&Pe(n,c=qt(l))?!s||!s.includes(c)?r[c]=d:(o||(o={}))[c]=d:fs(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,a=!0)}if(s){const l=De(r),d=o||je;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Ja(n,l,f,d[f],e,!Pe(d,f))}}return a}function Ja(e,t,r,i,n,s){const a=e[r];if(a!=null){const o=Pe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:d}=n;if(r in d)i=d[r];else{const c=un(n);i=d[r]=l.call(null,t),c()}}else i=l;n.ce&&n.ce._setProp(r,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ei(r))&&(i=!0))}return i}const Rv=new WeakMap;function sm(e,t,r=!1){const i=r?Rv:t.propsCache,n=i.get(e);if(n)return n;const s=e.props,a={},o=[];let l=!1;if(!ke(e)){const c=f=>{l=!0;const[h,b]=sm(f,t,!0);ct(a,h),b&&o.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return We(e)&&i.set(e,ui),ui;if($e(s))for(let c=0;c<s.length;c++){const f=qt(s[c]);fd(f)&&(a[f]=je)}else if(s)for(const c in s){const f=qt(c);if(fd(f)){const h=s[c],b=a[f]=$e(h)||ke(h)?{type:h}:ct({},h),_=b.type;let y=!1,S=!0;if($e(_))for(let v=0;v<_.length;++v){const w=_[v],T=ke(w)&&w.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(S=!1)}else y=ke(_)&&_.name==="Boolean";b[0]=y,b[1]=S,(y||Pe(b,"default"))&&o.push(f)}}const d=[a,o];return We(e)&&i.set(e,d),d}function fd(e){return e[0]!=="$"&&!Wi(e)}const Po=e=>e==="_"||e==="_ctx"||e==="$stable",Uo=e=>$e(e)?e.map(er):[er(e)],Mv=(e,t,r)=>{if(t._n)return t;const i=Qw((...n)=>Uo(t(...n)),r);return i._c=!1,i},am=(e,t,r)=>{const i=e._ctx;for(const n in e){if(Po(n))continue;const s=e[n];if(ke(s))t[n]=Mv(n,s,i);else if(s!=null){const a=Uo(s);t[n]=()=>a}}},om=(e,t)=>{const r=Uo(t);e.slots.default=()=>r},lm=(e,t,r)=>{for(const i in t)(r||!Po(i))&&(e[i]=t[i])},Bv=(e,t,r)=>{const i=e.slots=rm();if(e.vnode.shapeFlag&32){const n=t._;n?(lm(i,t,r),r&&wh(i,"_",n,!0)):am(t,i)}else t&&om(e,t)},Nv=(e,t,r)=>{const{vnode:i,slots:n}=e;let s=!0,a=je;if(i.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:lm(n,t,r):(s=!t.$stable,am(t,n)),a=t}else t&&(om(e,t),a={default:1});if(s)for(const o in n)!Po(o)&&a[o]==null&&delete n[o]},$t=qv;function Dv(e){return Pv(e)}function Pv(e,t){const r=os();r.__VUE__=!0;const{insert:i,remove:n,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:c,parentNode:f,nextSibling:h,setScopeId:b=ir,insertStaticContent:_}=e,y=(C,z,B,j=null,G=null,W=null,re=void 0,J=null,te=!!z.dynamicChildren)=>{if(C===z)return;C&&!Si(C,z)&&(j=ze(C),oe(C,G,W,!0),C=null),z.patchFlag===-2&&(te=!1,z.dynamicChildren=null);const{type:F,ref:ge,shapeFlag:se}=z;switch(F){case hs:S(C,z,B,j);break;case Ar:v(C,z,B,j);break;case Un:C==null&&w(z,B,j,re);break;case kt:ie(C,z,B,j,G,W,re,J,te);break;default:se&1?I(C,z,B,j,G,W,re,J,te):se&6?K(C,z,B,j,G,W,re,J,te):(se&64||se&128)&&F.process(C,z,B,j,G,W,re,J,te,Be)}ge!=null&&G?Hi(ge,C&&C.ref,W,z||C,!z):ge==null&&C&&C.ref!=null&&Hi(C.ref,null,W,C,!0)},S=(C,z,B,j)=>{if(C==null)i(z.el=o(z.children),B,j);else{const G=z.el=C.el;z.children!==C.children&&d(G,z.children)}},v=(C,z,B,j)=>{C==null?i(z.el=l(z.children||""),B,j):z.el=C.el},w=(C,z,B,j)=>{[C.el,C.anchor]=_(C.children,z,B,j,C.el,C.anchor)},T=({el:C,anchor:z},B,j)=>{let G;for(;C&&C!==z;)G=h(C),i(C,B,j),C=G;i(z,B,j)},k=({el:C,anchor:z})=>{let B;for(;C&&C!==z;)B=h(C),n(C),C=B;n(z)},I=(C,z,B,j,G,W,re,J,te)=>{if(z.type==="svg"?re="svg":z.type==="math"&&(re="mathml"),C==null)O(z,B,j,G,W,re,J,te);else{const F=C.el&&C.el._isVueCE?C.el:null;try{F&&F._beginPatch(),q(C,z,G,W,re,J,te)}finally{F&&F._endPatch()}}},O=(C,z,B,j,G,W,re,J)=>{let te,F;const{props:ge,shapeFlag:se,transition:he,dirs:_e}=C;if(te=C.el=a(C.type,W,ge&&ge.is,ge),se&8?c(te,C.children):se&16&&$(C.children,te,null,j,G,Vs(C,W),re,J),_e&&Nr(C,null,j,"created"),A(te,C,C.scopeId,re,j),ge){for(const Ue in ge)Ue!=="value"&&!Wi(Ue)&&s(te,Ue,null,ge[Ue],W,j);"value"in ge&&s(te,"value",null,ge.value,W),(F=ge.onVnodeBeforeMount)&&Xt(F,j,C)}_e&&Nr(C,null,j,"beforeMount");const xe=Uv(G,he);xe&&he.beforeEnter(te),i(te,z,B),((F=ge&&ge.onVnodeMounted)||xe||_e)&&$t(()=>{try{F&&Xt(F,j,C),xe&&he.enter(te),_e&&Nr(C,null,j,"mounted")}finally{}},G)},A=(C,z,B,j,G)=>{if(B&&b(C,B),j)for(let W=0;W<j.length;W++)b(C,j[W]);if(G){let W=G.subTree;if(z===W||pm(W.type)&&(W.ssContent===z||W.ssFallback===z)){const re=G.vnode;A(C,re,re.scopeId,re.slotScopeIds,G.parent)}}},$=(C,z,B,j,G,W,re,J,te=0)=>{for(let F=te;F<C.length;F++){const ge=C[F]=J?cr(C[F]):er(C[F]);y(null,ge,z,B,j,G,W,re,J)}},q=(C,z,B,j,G,W,re)=>{const J=z.el=C.el;let{patchFlag:te,dynamicChildren:F,dirs:ge}=z;te|=C.patchFlag&16;const se=C.props||je,he=z.props||je;let _e;if(B&&Dr(B,!1),(_e=he.onVnodeBeforeUpdate)&&Xt(_e,B,z,C),ge&&Nr(z,C,B,"beforeUpdate"),B&&Dr(B,!0),(se.innerHTML&&he.innerHTML==null||se.textContent&&he.textContent==null)&&c(J,""),F?V(C.dynamicChildren,F,J,B,j,Vs(z,G),W):re||Q(C,z,J,null,B,j,Vs(z,G),W,!1),te>0){if(te&16)ue(J,se,he,B,G);else if(te&2&&se.class!==he.class&&s(J,"class",null,he.class,G),te&4&&s(J,"style",se.style,he.style,G),te&8){const xe=z.dynamicProps;for(let Ue=0;Ue<xe.length;Ue++){const Re=xe[Ue],Xe=se[Re],nt=he[Re];(nt!==Xe||Re==="value")&&s(J,Re,Xe,nt,G,B)}}te&1&&C.children!==z.children&&c(J,z.children)}else!re&&F==null&&ue(J,se,he,B,G);((_e=he.onVnodeUpdated)||ge)&&$t(()=>{_e&&Xt(_e,B,z,C),ge&&Nr(z,C,B,"updated")},j)},V=(C,z,B,j,G,W,re)=>{for(let J=0;J<z.length;J++){const te=C[J],F=z[J],ge=te.el&&(te.type===kt||!Si(te,F)||te.shapeFlag&198)?f(te.el):B;y(te,F,ge,null,j,G,W,re,!0)}},ue=(C,z,B,j,G)=>{if(z!==B){if(z!==je)for(const W in z)!Wi(W)&&!(W in B)&&s(C,W,z[W],null,G,j);for(const W in B){if(Wi(W))continue;const re=B[W],J=z[W];re!==J&&W!=="value"&&s(C,W,J,re,G,j)}"value"in B&&s(C,"value",z.value,B.value,G)}},ie=(C,z,B,j,G,W,re,J,te)=>{const F=z.el=C?C.el:o(""),ge=z.anchor=C?C.anchor:o("");let{patchFlag:se,dynamicChildren:he,slotScopeIds:_e}=z;_e&&(J=J?J.concat(_e):_e),C==null?(i(F,B,j),i(ge,B,j),$(z.children||[],B,ge,G,W,re,J,te)):se>0&&se&64&&he&&C.dynamicChildren&&C.dynamicChildren.length===he.length?(V(C.dynamicChildren,he,B,G,W,re,J),(z.key!=null||G&&z===G.subTree)&&um(C,z,!0)):Q(C,z,B,ge,G,W,re,J,te)},K=(C,z,B,j,G,W,re,J,te)=>{z.slotScopeIds=J,C==null?z.shapeFlag&512?G.ctx.activate(z,B,j,re,te):M(z,B,j,G,W,re,te):D(C,z,te)},M=(C,z,B,j,G,W,re)=>{const J=C.component=Xv(C,j,G);if(jh(C)&&(J.ctx.renderer=Be),Qv(J,!1,re),J.asyncDep){if(G&&G.registerDep(J,H,re),!C.el){const te=J.subTree=mt(Ar);v(null,te,z,B),C.placeholder=te.el}}else H(J,C,z,B,G,W,re)},D=(C,z,B)=>{const j=z.component=C.component;if(Cv(C,z,B))if(j.asyncDep&&!j.asyncResolved){ee(j,z,B);return}else j.next=z,j.update();else z.el=C.el,j.vnode=z},H=(C,z,B,j,G,W,re)=>{const J=()=>{if(C.isMounted){let{next:se,bu:he,u:_e,parent:xe,vnode:Ue}=C;{const Ct=dm(C);if(Ct){se&&(se.el=Ue.el,ee(C,se,re)),Ct.asyncDep.then(()=>{$t(()=>{C.isUnmounted||F()},G)});return}}let Re=se,Xe;Dr(C,!1),se?(se.el=Ue.el,ee(C,se,re)):se=Ue,he&&Ds(he),(Xe=se.props&&se.props.onVnodeBeforeUpdate)&&Xt(Xe,xe,se,Ue),Dr(C,!0);const nt=cd(C),lt=C.subTree;C.subTree=nt,y(lt,nt,f(lt.el),ze(lt),C,G,W),se.el=nt.el,Re===null&&zv(C,nt.el),_e&&$t(_e,G),(Xe=se.props&&se.props.onVnodeUpdated)&&$t(()=>Xt(Xe,xe,se,Ue),G)}else{let se;const{el:he,props:_e}=z,{bm:xe,m:Ue,parent:Re,root:Xe,type:nt}=C,lt=Gi(z);Dr(C,!1),xe&&Ds(xe),!lt&&(se=_e&&_e.onVnodeBeforeMount)&&Xt(se,Re,z),Dr(C,!0);{Xe.ce&&Xe.ce._hasShadowRoot()&&Xe.ce._injectChildStyle(nt,C.parent?C.parent.type:void 0);const Ct=C.subTree=cd(C);y(null,Ct,B,j,C,G,W),z.el=Ct.el}if(Ue&&$t(Ue,G),!lt&&(se=_e&&_e.onVnodeMounted)){const Ct=z;$t(()=>Xt(se,Re,Ct),G)}(z.shapeFlag&256||Re&&Gi(Re.vnode)&&Re.vnode.shapeFlag&256)&&C.a&&$t(C.a,G),C.isMounted=!0,z=B=j=null}};C.scope.on();const te=C.effect=new Sh(J);C.scope.off();const F=C.update=te.run.bind(te),ge=C.job=te.runIfDirty.bind(te);ge.i=C,ge.id=C.uid,te.scheduler=()=>No(ge),Dr(C,!0),F()},ee=(C,z,B)=>{z.component=C;const j=C.vnode.props;C.vnode=z,C.next=null,Ov(C,z.props,j,B),Nv(C,z.children,B),gr(),nd(C),br()},Q=(C,z,B,j,G,W,re,J,te=!1)=>{const F=C&&C.children,ge=C?C.shapeFlag:0,se=z.children,{patchFlag:he,shapeFlag:_e}=z;if(he>0){if(he&128){be(F,se,B,j,G,W,re,J,te);return}else if(he&256){pe(F,se,B,j,G,W,re,J,te);return}}_e&8?(ge&16&&Fe(F,G,W),se!==F&&c(B,se)):ge&16?_e&16?be(F,se,B,j,G,W,re,J,te):Fe(F,G,W,!0):(ge&8&&c(B,""),_e&16&&$(se,B,j,G,W,re,J,te))},pe=(C,z,B,j,G,W,re,J,te)=>{C=C||ui,z=z||ui;const F=C.length,ge=z.length,se=Math.min(F,ge);let he;for(he=0;he<se;he++){const _e=z[he]=te?cr(z[he]):er(z[he]);y(C[he],_e,B,null,G,W,re,J,te)}F>ge?Fe(C,G,W,!0,!1,se):$(z,B,j,G,W,re,J,te,se)},be=(C,z,B,j,G,W,re,J,te)=>{let F=0;const ge=z.length;let se=C.length-1,he=ge-1;for(;F<=se&&F<=he;){const _e=C[F],xe=z[F]=te?cr(z[F]):er(z[F]);if(Si(_e,xe))y(_e,xe,B,null,G,W,re,J,te);else break;F++}for(;F<=se&&F<=he;){const _e=C[se],xe=z[he]=te?cr(z[he]):er(z[he]);if(Si(_e,xe))y(_e,xe,B,null,G,W,re,J,te);else break;se--,he--}if(F>se){if(F<=he){const _e=he+1,xe=_e<ge?z[_e].el:j;for(;F<=he;)y(null,z[F]=te?cr(z[F]):er(z[F]),B,xe,G,W,re,J,te),F++}}else if(F>he)for(;F<=se;)oe(C[F],G,W,!0),F++;else{const _e=F,xe=F,Ue=new Map;for(F=xe;F<=he;F++){const ut=z[F]=te?cr(z[F]):er(z[F]);ut.key!=null&&Ue.set(ut.key,F)}let Re,Xe=0;const nt=he-xe+1;let lt=!1,Ct=0;const vr=new Array(nt);for(F=0;F<nt;F++)vr[F]=0;for(F=_e;F<=se;F++){const ut=C[F];if(Xe>=nt){oe(ut,G,W,!0);continue}let vt;if(ut.key!=null)vt=Ue.get(ut.key);else for(Re=xe;Re<=he;Re++)if(vr[Re-xe]===0&&Si(ut,z[Re])){vt=Re;break}vt===void 0?oe(ut,G,W,!0):(vr[vt-xe]=F+1,vt>=Ct?Ct=vt:lt=!0,y(ut,z[vt],B,null,G,W,re,J,te),Xe++)}const yi=lt?Lv(vr):ui;for(Re=yi.length-1,F=nt-1;F>=0;F--){const ut=xe+F,vt=z[ut],dn=z[ut+1],cn=ut+1<ge?dn.el||cm(dn):j;vr[F]===0?y(null,vt,B,cn,G,W,re,J,te):lt&&(Re<0||F!==yi[Re]?L(vt,B,cn,2):Re--)}}},L=(C,z,B,j,G=null)=>{const{el:W,type:re,transition:J,children:te,shapeFlag:F}=C;if(F&6){L(C.component.subTree,z,B,j);return}if(F&128){C.suspense.move(z,B,j);return}if(F&64){re.move(C,z,B,Be);return}if(re===kt){i(W,z,B);for(let se=0;se<te.length;se++)L(te[se],z,B,j);i(C.anchor,z,B);return}if(re===Un){T(C,z,B);return}if(j!==2&&F&1&&J)if(j===0)J.persisted&&!W[Ws]?i(W,z,B):(J.beforeEnter(W),i(W,z,B),$t(()=>J.enter(W),G));else{const{leave:se,delayLeave:he,afterLeave:_e}=J,xe=()=>{C.ctx.isUnmounted?n(W):i(W,z,B)},Ue=()=>{const Re=W._isLeaving||!!W[Ws];W._isLeaving&&W[Ws](!0),J.persisted&&!Re?xe():se(W,()=>{xe(),_e&&_e()})};he?he(W,xe,Ue):Ue()}else i(W,z,B)},oe=(C,z,B,j=!1,G=!1)=>{const{type:W,props:re,ref:J,children:te,dynamicChildren:F,shapeFlag:ge,patchFlag:se,dirs:he,cacheIndex:_e,memo:xe}=C;if(se===-2&&(G=!1),J!=null&&(gr(),Hi(J,null,B,C,!0),br()),_e!=null&&(z.renderCache[_e]=void 0),ge&256){z.ctx.deactivate(C);return}const Ue=ge&1&&he,Re=!Gi(C);let Xe;if(Re&&(Xe=re&&re.onVnodeBeforeUnmount)&&Xt(Xe,z,C),ge&6)Ke(C.component,B,j);else{if(ge&128){C.suspense.unmount(B,j);return}Ue&&Nr(C,null,z,"beforeUnmount"),ge&64?C.type.remove(C,z,B,Be,j):F&&!F.hasOnce&&(W!==kt||se>0&&se&64)?Fe(F,z,B,!1,!0):(W===kt&&se&384||!G&&ge&16)&&Fe(te,z,B),j&&le(C)}const nt=xe!=null&&_e==null;(Re&&(Xe=re&&re.onVnodeUnmounted)||Ue||nt)&&$t(()=>{Xe&&Xt(Xe,z,C),Ue&&Nr(C,null,z,"unmounted"),nt&&(C.el=null)},B)},le=C=>{const{type:z,el:B,anchor:j,transition:G}=C;if(z===kt){Z(B,j);return}if(z===Un){k(C);return}const W=()=>{n(B),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(C.shapeFlag&1&&G&&!G.persisted){const{leave:re,delayLeave:J}=G,te=()=>re(B,W);J?J(C.el,W,te):te()}else W()},Z=(C,z)=>{let B;for(;C!==z;)B=h(C),n(C),C=B;n(z)},Ke=(C,z,B)=>{const{bum:j,scope:G,job:W,subTree:re,um:J,m:te,a:F}=C;hd(te),hd(F),j&&Ds(j),G.stop(),W&&(W.flags|=8,oe(re,C,z,B)),J&&$t(J,z),$t(()=>{C.isUnmounted=!0},z)},Fe=(C,z,B,j=!1,G=!1,W=0)=>{for(let re=W;re<C.length;re++)oe(C[re],z,B,j,G)},ze=C=>{if(C.shapeFlag&6)return ze(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const z=h(C.anchor||C.el),B=z&&z[rv];return B?h(B):z};let Ye=!1;const Ae=(C,z,B)=>{let j;C==null?z._vnode&&(oe(z._vnode,null,null,!0),j=z._vnode.component):y(z._vnode||null,C,z,null,null,null,B),z._vnode=C,Ye||(Ye=!0,nd(j),qh(),Ye=!1)},Be={p:y,um:oe,m:L,r:le,mt:M,mc:$,pc:Q,pbc:V,n:ze,o:e};return{render:Ae,hydrate:void 0,createApp:xv(Ae)}}function Vs({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Dr({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function um(e,t,r=!1){const i=e.children,n=t.children;if($e(i)&&$e(n))for(let s=0;s<i.length;s++){const a=i[s];let o=n[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=n[s]=cr(n[s]),o.el=a.el),!r&&o.patchFlag!==-2&&um(a,o)),o.type===hs&&(o.patchFlag===-1&&(o=n[s]=cr(o)),o.el=a.el),o.type===Ar&&!o.el&&(o.el=a.el)}}function Lv(e){const t=e.slice(),r=[0];let i,n,s,a,o;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(n=r[r.length-1],e[n]<d){t[i]=n,r.push(i);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[i]=r[s-1]),r[s]=i)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function dm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dm(t)}function hd(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function cm(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?cm(t.subTree):null}const pm=e=>e.__isSuspense;function qv(e,t){t&&t.pendingBranch?$e(e)?t.effects.push(...e):t.effects.push(e):Zw(e)}const kt=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),Un=Symbol.for("v-stc"),Ki=[];let Et=null;function Je(e=!1){Ki.push(Et=e?null:[])}function Wv(){Ki.pop(),Et=Ki[Ki.length-1]||null}let en=1;function md(e,t=!1){en+=e,e<0&&Et&&t&&(Et.hasOnce=!0)}function fm(e){return e.dynamicChildren=en>0?Et||ui:null,Wv(),en>0&&Et&&Et.push(e),e}function tt(e,t,r,i,n,s){return fm(ae(e,t,r,i,n,s,!0))}function Fv(e,t,r,i,n){return fm(mt(e,t,r,i,n,!0))}function hm(e){return e?e.__v_isVNode===!0:!1}function Si(e,t){return e.type===t.type&&e.key===t.key}const mm=({key:e})=>e??null,Ln=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?rt(e)||gt(e)||ke(e)?{i:rr,r:e,k:t,f:!!r}:e:null);function ae(e,t=null,r=null,i=0,n=null,s=e===kt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mm(t),ref:t&&Ln(t),scopeId:Fh,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:rr};return o?(Lo(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=rt(r)?8:16),en>0&&!a&&Et&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Et.push(l),l}const mt=Vv;function Vv(e,t=null,r=null,i=0,n=null,s=!1){if((!e||e===mv)&&(e=Ar),hm(e)){const o=mi(e,t,!0);return r&&Lo(o,r),en>0&&!s&&Et&&(o.shapeFlag&6?Et[Et.indexOf(e)]=o:Et.push(o)),o.patchFlag=-2,o}if(t$(e)&&(e=e.__vccOpts),t){t=Hv(t);let{class:o,style:l}=t;o&&!rt(o)&&(t.class=mr(o)),We(l)&&(Bo(l)&&!$e(l)&&(l=ct({},l)),t.style=ls(l))}const a=rt(e)?1:pm(e)?128:iv(e)?64:We(e)?4:ke(e)?2:0;return ae(e,t,r,i,n,a,s,!0)}function Hv(e){return e?Bo(e)||im(e)?ct({},e):e:null}function mi(e,t,r=!1,i=!1){const{props:n,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?Gv(n||{},t):n,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&mm(d),ref:t&&t.ref?r&&s?$e(s)?s.concat(Ln(t)):[s,Ln(t)]:Ln(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==kt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mi(e.ssContent),ssFallback:e.ssFallback&&mi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Do(c,l.clone(c)),c}function Ni(e=" ",t=0){return mt(hs,null,e,t)}function Hs(e,t){const r=mt(Un,null,e);return r.staticCount=t,r}function zr(e="",t=!1){return t?(Je(),Fv(Ar,null,e)):mt(Ar,null,e)}function er(e){return e==null||typeof e=="boolean"?mt(Ar):$e(e)?mt(kt,null,e.slice()):hm(e)?cr(e):mt(hs,null,String(e))}function cr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mi(e)}function Lo(e,t){let r=0;const{shapeFlag:i}=e;if(t==null)t=null;else if($e(t))r=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),Lo(e,n()),n._c&&(n._d=!0));return}else{r=32;const n=t._;!n&&!im(t)?t._ctx=rr:n===3&&rr&&(rr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ke(t)?(t={default:t,_ctx:rr},r=32):(t=String(t),i&64?(r=16,t=[Ni(t)]):r=8);e.children=t,e.shapeFlag|=r}function Gv(...e){const t={};for(let r=0;r<e.length;r++){const i=e[r];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=mr([t.class,i.class]));else if(n==="style")t.style=ls([t.style,i.style]);else if(ns(n)){const s=t[n],a=i[n];a&&s!==a&&!($e(s)&&s.includes(a))?t[n]=s?[].concat(s,a):a:a==null&&s==null&&!ss(n)&&(t[n]=a)}else n!==""&&(t[n]=i[n])}return t}function Xt(e,t,r,i=null){Ht(e,t,7,[r,i])}const jv=Yh();let Kv=0;function Xv(e,t,r){const i=e.type,n=(t?t.appContext:e.appContext)||jv,s={uid:Kv++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _w(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(i,n),emitsOptions:Jh(i,n),emit:null,emitted:null,propsDefaults:je,inheritAttrs:i.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=kv.bind(null,s),e.ce&&e.ce(s),s}let wt=null;const Zv=()=>wt||rr;let Kn,eo;{const e=os(),t=(r,i)=>{let n;return(n=e[r])||(n=e[r]=[]),n.push(i),s=>{n.length>1?n.forEach(a=>a(s)):n[0](s)}};Kn=t("__VUE_INSTANCE_SETTERS__",r=>wt=r),eo=t("__VUE_SSR_SETTERS__",r=>tn=r)}const un=e=>{const t=wt;return Kn(e),e.scope.on(),()=>{e.scope.off(),Kn(t)}},gd=()=>{wt&&wt.scope.off(),Kn(null)};function gm(e){return e.vnode.shapeFlag&4}let tn=!1;function Qv(e,t=!1,r=!1){t&&eo(t);const{props:i,children:n}=e.vnode,s=gm(e);Av(e,i,s,t),Bv(e,n,r||t);const a=s?Yv(e,t):void 0;return t&&eo(!1),a}function Yv(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gv);const{setup:i}=r;if(i){gr();const n=e.setupContext=i.length>1?e$(e):null,s=un(e),a=an(i,e,0,[e.props,n]),o=gh(a);if(br(),s(),(o||e.sp)&&!Gi(e)&&Gh(e),o){if(a.then(gd,gd),t)return a.then(l=>{bd(e,l)}).catch(l=>{ds(l,e,0)});e.asyncDep=a}else bd(e,a)}else bm(e)}function bd(e,t,r){ke(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:We(t)&&(e.setupState=Ph(t)),bm(e)}function bm(e,t,r){const i=e.type;e.render||(e.render=i.render||ir);{const n=un(e);gr();try{bv(e)}finally{br(),n()}}}const Jv={get(e,t){return ht(e,"get",""),e[t]}};function e$(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Jv),slots:e.slots,emit:e.emit,expose:t}}function qo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ph(Pw(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ji)return ji[r](e)},has(t,r){return r in t||r in ji}})):e.proxy}function t$(e){return ke(e)&&"__vccOpts"in e}const Xn=(e,t)=>Vw(e,t,tn),r$="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let to;const _d=typeof window<"u"&&window.trustedTypes;if(_d)try{to=_d.createPolicy("vue",{createHTML:e=>e})}catch{}const _m=to?e=>to.createHTML(e):e=>e,i$="http://www.w3.org/2000/svg",n$="http://www.w3.org/1998/Math/MathML",dr=typeof document<"u"?document:null,yd=dr&&dr.createElement("template"),s$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,i)=>{const n=t==="svg"?dr.createElementNS(i$,e):t==="mathml"?dr.createElementNS(n$,e):r?dr.createElement(e,{is:r}):dr.createElement(e);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>dr.createTextNode(e),createComment:e=>dr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,i,n,s){const a=r?r.previousSibling:t.lastChild;if(n&&(n===s||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),r),!(n===s||!(n=n.nextSibling)););else{yd.innerHTML=_m(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const o=yd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},a$=Symbol("_vtc");function o$(e,t,r){const i=e[a$];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const wd=Symbol("_vod"),l$=Symbol("_vsh"),u$=Symbol(""),d$=/(?:^|;)\s*display\s*:/;function c$(e,t,r){const i=e.style,n=rt(r);let s=!1;if(r&&!n){if(t)if(rt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Di(i,o,"")}else for(const a in t)r[a]==null&&Di(i,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?f$(e,a,!rt(t)&&t?t[a]:void 0,o)||Di(i,a,o):Di(i,a,"")}}else if(n){if(t!==r){const a=i[u$];a&&(r+=";"+a),i.cssText=r,s=d$.test(r)}}else t&&e.removeAttribute("style");wd in e&&(e[wd]=s?i.display:"",e[l$]&&(i.display="none"))}const vd=/\s*!important$/;function Di(e,t,r){if($e(r))r.forEach(i=>Di(e,t,i));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const i=p$(e,t);vd.test(r)?e.setProperty(ei(i),r.replace(vd,""),"important"):e[i]=r}}const $d=["Webkit","Moz","ms"],Gs={};function p$(e,t){const r=Gs[t];if(r)return r;let i=qt(t);if(i!=="filter"&&i in e)return Gs[t]=i;i=yh(i);for(let n=0;n<$d.length;n++){const s=$d[n]+i;if(s in e)return Gs[t]=s}return t}function f$(e,t,r,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&rt(i)&&r===i}const xd="http://www.w3.org/1999/xlink";function Sd(e,t,r,i,n,s=gw(t)){i&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(xd,t.slice(6,t.length)):e.setAttributeNS(xd,t,r):r==null||s&&!vh(r)?e.removeAttribute(t):e.setAttribute(t,s?"":nr(r)?String(r):r)}function kd(e,t,r,i,n){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?_m(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=vh(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(n||t)}function h$(e,t,r,i){e.addEventListener(t,r,i)}function m$(e,t,r,i){e.removeEventListener(t,r,i)}const Td=Symbol("_vei");function g$(e,t,r,i,n=null){const s=e[Td]||(e[Td]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=b$(t);if(i){const d=s[t]=w$(i,n);h$(e,o,d,l)}else a&&(m$(e,o,a,l),s[t]=void 0)}}const Ed=/(?:Once|Passive|Capture)$/;function b$(e){let t;if(Ed.test(e)){t={};let i;for(;i=e.match(Ed);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ei(e.slice(2)),t]}let js=0;const _$=Promise.resolve(),y$=()=>js||(_$.then(()=>js=0),js=Date.now());function w$(e,t){const r=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=r.attached)return;const n=r.value;if($e(n)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=n.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const d=a[l];d&&Ht(d,t,5,o)}}else Ht(n,t,5,[i])};return r.value=e,r.attached=y$(),r}const Id=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,v$=(e,t,r,i,n,s)=>{const a=n==="svg";t==="class"?o$(e,i,a):t==="style"?c$(e,r,i):ns(t)?ss(t)||g$(e,t,r,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$$(e,t,i,a))?(kd(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Sd(e,t,i,a,s,t!=="value")):e._isVueCE&&(x$(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!rt(i)))?kd(e,qt(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Sd(e,t,i,a))};function $$(e,t,r,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Id(t)&&ke(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Id(t)&&rt(r)?!1:t in e}function x$(e,t){const r=e._def.props;if(!r)return!1;const i=qt(t);return Array.isArray(r)?r.some(n=>qt(n)===i):Object.keys(r).some(n=>qt(n)===i)}const S$=ct({patchProp:v$},s$);let Cd;function k$(){return Cd||(Cd=Dv(S$))}const T$=(...e)=>{const t=k$().createApp(...e),{mount:r}=t;return t.mount=i=>{const n=I$(i);if(!n)return;const s=t._component;!ke(s)&&!s.render&&!s.template&&(s.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const a=r(n,!1,E$(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),a},t};function E$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function I$(e){return rt(e)?document.querySelector(e):e}const C$={class:"flex flex-col items-center gap-5"},z$={class:"flex flex-wrap justify-center gap-2"},A$={key:0,class:"absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-2xl flex items-center justify-center"},O$=on({__name:"DropZone",emits:["file-selected"],setup(e,{emit:t}){const r=t,i=Ze(!1),n=Ze(null),s=["audio/mpeg","audio/wav","audio/ogg","audio/flac","audio/mp4","audio/x-m4a"],a=[".mp3",".wav",".ogg",".flac",".m4a"];function o(_){_.preventDefault(),i.value=!0}function l(){i.value=!1}function d(_){_.preventDefault(),i.value=!1;const y=_.dataTransfer?.files[0];y&&h(y)&&r("file-selected",y)}function c(){n.value?.click()}function f(_){const S=_.target.files?.[0];S&&h(S)&&r("file-selected",S)}function h(_){const y=s.some(v=>_.type.includes(v.split("/")[1])||_.type===v),S=a.some(v=>_.name.toLowerCase().endsWith(v));return y||S}function b(_){const y=_.clipboardData?.items;if(y)for(const S of y){if(S.kind==="file"&&S.type.startsWith("audio/")){const v=S.getAsFile();if(v&&h(v)){r("file-selected",v);return}}if(S.kind==="file"){const v=S.getAsFile();if(v){const w="."+v.name.split(".").pop()?.toLowerCase();if(a.includes(w)){r("file-selected",v);return}}}}}return ps(()=>{document.addEventListener("paste",b)}),ln(()=>{document.removeEventListener("paste",b)}),(_,y)=>(Je(),tt("div",{class:mr(["relative border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20",{"border-blue-500 bg-blue-50/70 dark:bg-blue-900/40 scale-[1.02]":i.value}]),onDragover:o,onDragleave:l,onDrop:d,onClick:c},[ae("input",{ref_key:"fileInput",ref:n,type:"file",accept:"audio/*,.mp3,.wav,.ogg,.flac,.m4a",class:"hidden",onChange:f},null,544),ae("div",C$,[ae("div",{class:mr(["w-20 h-20 rounded-2xl flex items-center justify-center transition-colors",i.value?"bg-blue-500 text-white":"bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"])},[...y[0]||(y[0]=[ae("svg",{class:"w-10 h-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})],-1)])],2),y[1]||(y[1]=ae("div",null,[ae("p",{class:"text-lg font-semibold text-slate-700 dark:text-slate-100"}," 拖拽音频文件到此处 "),ae("p",{class:"text-sm text-slate-500 dark:text-slate-400 mt-1"}," 或点击选择文件 · 支持 Ctrl+V 粘贴 ")],-1)),ae("div",z$,[(Je(),tt(kt,null,Xh(["MP3","WAV","OGG","FLAC","M4A"],S=>ae("span",{key:S,class:"px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"},Yt(S),1)),64))])]),i.value?(Je(),tt("div",A$,[...y[2]||(y[2]=[ae("div",{class:"text-blue-600 dark:text-blue-300 font-semibold text-lg"}," 释放以上传文件 ",-1)])])):zr("",!0)],34))}}),zd=on({__name:"WaveformCanvas",props:{peaks:{},color:{},progress:{},currentTime:{},duration:{}},emits:["seek"],setup(e,{emit:t}){const r=e,i=t,n=Ze(null),s=Ze(null),a=Ze(!1),o=Ze(0);function l(){const h=n.value,b=s.value;if(!h||!b)return;const _=window.devicePixelRatio||1,y=b.getBoundingClientRect();h.width=y.width*_,h.height=y.height*_,h.style.width=`${y.width}px`,h.style.height=`${y.height}px`;const S=h.getContext("2d");if(!S||(S.scale(_,_),S.clearRect(0,0,y.width,y.height),!r.peaks))return;const v=r.peaks,w=y.width/v.length,T=y.height*.8,k=y.height/2,I=r.color||"#64748b",O="#22c55e";let A=v.length;r.progress!==void 0&&r.progress>=0?A=Math.floor(r.progress*v.length):r.currentTime!==void 0&&r.duration&&r.duration>0&&(A=Math.floor(r.currentTime/r.duration*v.length));for(let $=0;$<v.length;$++){const q=$*w,V=v[$]*T;S.fillStyle=$<A?O:I,S.fillRect(q,k-V/2,Math.max(w-1,1),V)}if(a.value&&s.value){const $=s.value.getBoundingClientRect();S.strokeStyle="rgba(148, 163, 184, 0.5)",S.lineWidth=1,S.beginPath(),S.moveTo(o.value,0),S.lineTo(o.value,$.height),S.stroke()}}function d(h){if(!s.value)return;const b=s.value.getBoundingClientRect();o.value=h.clientX-b.left,a.value=!0,l()}function c(){a.value=!1,l()}function f(h){if(!s.value||!r.duration)return;const b=s.value.getBoundingClientRect(),S=(h.clientX-b.left)/b.width*r.duration;i("seek",S)}return ps(()=>{l(),window.addEventListener("resize",l)}),ln(()=>{window.removeEventListener("resize",l)}),pi(()=>[r.peaks,r.progress,r.currentTime],l,{deep:!0}),(h,b)=>(Je(),tt("div",{ref_key:"containerRef",ref:s,class:"bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden cursor-pointer h-24",onMousemove:d,onMouseleave:c,onClick:f},[ae("canvas",{ref_key:"canvasRef",ref:n,class:"w-full h-full"},null,512)],544))}}),R$=["disabled"],M$={key:0,class:"flex items-center gap-2"},B$={key:1,class:"flex items-center gap-2"},N$={key:2,class:"flex items-center gap-2"},D$={key:3,class:"flex items-center gap-2"},P$=on({__name:"ProcessButton",props:{status:{},disabled:{type:Boolean}},emits:["process"],setup(e){return(t,r)=>(Je(),tt("button",{class:"px-8 py-3.5 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-medium text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25",disabled:e.disabled||e.status==="processing",onClick:r[0]||(r[0]=i=>t.$emit("process"))},[e.status==="idle"?(Je(),tt("span",M$,[...r[1]||(r[1]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})],-1),Ni(" 开始降噪 ",-1)])])):e.status==="processing"?(Je(),tt("span",B$,[...r[2]||(r[2]=[ae("svg",{class:"animate-spin w-5 h-5",fill:"none",viewBox:"0 0 24 24"},[ae("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),ae("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})],-1),Ni(" 处理中... ",-1)])])):e.status==="done"?(Je(),tt("span",N$,[...r[3]||(r[3]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),Ni(" 处理完成 ",-1)])])):e.status==="error"?(Je(),tt("span",D$,[...r[4]||(r[4]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),Ni(" 处理失败，点击重试 ",-1)])])):zr("",!0)],8,R$))}}),U$={key:0,class:"bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5"},L$={class:"flex items-center justify-between mb-4"},q$={class:"text-sm font-medium text-slate-700 dark:text-slate-300"},W$={class:"text-xs text-slate-400 dark:text-slate-500"},F$={class:"flex items-center gap-3"},V$={key:0,class:"w-7 h-7 text-slate-700 dark:text-slate-200 ml-1",fill:"currentColor",viewBox:"0 0 24 24"},H$={key:1,class:"w-7 h-7 text-slate-700 dark:text-slate-200",fill:"currentColor",viewBox:"0 0 24 24"},G$={class:"relative"},j$={class:"text-sm font-medium"},K$={key:0,class:"absolute bottom-full left-0 mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 py-1 z-10 min-w-[140px]"},X$=["onClick"],Z$={class:"text-sm font-medium"},Q$={class:"text-xs text-slate-400 dark:text-slate-500"},Ad=on({__name:"AudioPlayer",props:{buffer:{},label:{}},setup(e,{expose:t}){const r=e,i=new AudioContext,n=Ze(null),s=Ze(!1),a=Ze(0),o=Ze(0),l=Ze(!1),d=Ze(!1),c=Ze("wav"),f=Xn(()=>r.buffer?a.value/r.buffer.duration*100:0);let h=null,b=0,_=0;function y(K){if(!r.buffer)return;s.value&&S(),n.value=i.createBufferSource(),n.value.buffer=r.buffer,n.value.connect(i.destination),n.value.onended=()=>{s.value&&(s.value=!1,a.value=0,_=0,h&&cancelAnimationFrame(h))};const M=K!==void 0?K:_;b=i.currentTime,_=M,a.value=M,o.value=r.buffer.duration,n.value.start(0,M),s.value=!0,w()}function S(){if(n.value){n.value.onended=null;try{n.value.stop()}catch{}n.value.disconnect(),n.value=null}s.value=!1,_=a.value,h&&cancelAnimationFrame(h)}function v(){s.value?S():y()}function w(){if(s.value&&i.state==="running"){const K=i.currentTime-b;a.value=Math.min(_+K,r.buffer?.duration||0),h=requestAnimationFrame(w)}}function T(K){if(!r.buffer)return;const D=K.currentTarget.getBoundingClientRect(),H=K.clientX-D.left,Q=Math.max(0,Math.min(1,H/D.width))*r.buffer.duration;a.value=Q,_=Q,s.value&&(S(),y(Q))}function k(K){l.value=!0,T(K);const M=H=>{l.value&&T(H)},D=()=>{l.value=!1,document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",D)}const I=[{id:"wav",name:"WAV",desc:"无损",ext:"wav"},{id:"mp3",name:"MP3",desc:"高压缩",ext:"mp3"},{id:"ogg",name:"OGG",desc:"开源格式",ext:"ogg"}];function O(K){c.value=K,d.value=!1}async function A(){if(!r.buffer)return;let K,M;switch(c.value){case"mp3":K=await q(r.buffer),M="processed_audio.mp3";break;case"ogg":K=await V(r.buffer),M="processed_audio.ogg";break;default:K=$(r.buffer),M="processed_audio.wav"}ue(K,M)}function $(K){const M=K.sampleRate,D=K.getChannelData(0),H=1,ee=16,Q=ee/8,pe=H*Q,be=M*pe,L=D.length*Q,oe=44+L,le=new ArrayBuffer(oe),Z=new DataView(le);ie(Z,0,"RIFF"),Z.setUint32(4,oe-8,!0),ie(Z,8,"WAVE"),ie(Z,12,"fmt "),Z.setUint32(16,16,!0),Z.setUint16(20,1,!0),Z.setUint16(22,H,!0),Z.setUint32(24,M,!0),Z.setUint32(28,be,!0),Z.setUint16(32,pe,!0),Z.setUint16(34,ee,!0),ie(Z,36,"data"),Z.setUint32(40,L,!0);let Ke=44;for(let Fe=0;Fe<D.length;Fe++){const ze=Math.max(-1,Math.min(1,D[Fe])),Ye=ze<0?ze*32768:ze*32767;Z.setInt16(Ke,Ye,!0),Ke+=2}return new Blob([le],{type:"audio/wav"})}async function q(K){return $(K)}async function V(K){return $(K)}function ue(K,M){const D=URL.createObjectURL(K),H=document.createElement("a");H.href=D,H.download=M,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(D)}function ie(K,M,D){for(let H=0;H<D.length;H++)K.setUint8(M+H,D.charCodeAt(H))}return pi(()=>r.buffer,()=>{a.value=0,s.value=!1,_=0,S()}),ln(()=>{S(),i.close()}),t({currentTime:a,progress:f,isPlaying:s}),(K,M)=>e.buffer?(Je(),tt("div",U$,[ae("div",L$,[ae("h3",q$,Yt(e.label),1),ae("span",W$,Yt(a.value.toFixed(1))+"s / "+Yt(e.buffer.duration.toFixed(1))+"s ",1)]),ae("div",{class:"h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full cursor-pointer mb-5 group relative",onMousedown:k},[ae("div",{class:"h-full bg-blue-500 rounded-full transition-all",style:ls({width:`${f.value}%`})},null,4),M[1]||(M[1]=ae("div",{class:"absolute inset-0 group-hover:bg-white/10 rounded-full"},null,-1))],32),ae("div",F$,[ae("button",{class:"flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",onClick:v},[s.value?(Je(),tt("svg",H$,[...M[3]||(M[3]=[ae("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])])):(Je(),tt("svg",V$,[...M[2]||(M[2]=[ae("path",{d:"M8 5v14l11-7z"},null,-1)])]))]),ae("div",G$,[ae("button",{class:"flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-700 dark:text-slate-200",onClick:M[0]||(M[0]=D=>d.value=!d.value)},[M[4]||(M[4]=ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1)),ae("span",j$,"下载 "+Yt(I.find(D=>D.id===c.value)?.name),1),M[5]||(M[5]=ae("svg",{class:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),d.value?(Je(),tt("div",K$,[(Je(),tt(kt,null,Xh(I,D=>ae("button",{key:D.id,class:mr(["w-full px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-600 flex items-center justify-between text-slate-700 dark:text-slate-200",{"bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400":c.value===D.id}]),onClick:H=>{O(D.id),A()}},[ae("span",Z$,Yt(D.name),1),ae("span",Q$,Yt(D.desc),1)],10,X$)),64))])):zr("",!0)])])])):zr("",!0)}}),Y$="modulepreload",J$=function(e){return"/deepfilternet-web/"+e},Od={},e1=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");n=Promise.allSettled(r.map(l=>{if(l=J$(l),l in Od)return;Od[l]=!0;const d=l.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Y$,d||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),d)return new Promise((h,b)=>{f.addEventListener("load",h),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};function t1(){return typeof AudioWorkletNode<"u"}let Ks=null;function ym(){return Ks||(Ks=new AudioContext),Ks}async function r1(e){const t=ym(),r=await e.arrayBuffer();return t.decodeAudioData(r)}function i1(e){const t=e.getChannelData(0),r=e.length,i=new Float32Array(r);if(e.numberOfChannels===1)i.set(t);else{const n=[];for(let s=0;s<e.numberOfChannels;s++)n.push(e.getChannelData(s));for(let s=0;s<r;s++){let a=0;for(let o=0;o<e.numberOfChannels;o++)a+=n[o][s];i[s]=a/e.numberOfChannels}}return i}function n1(e,t,r=1){const i=ym(),n=e.length/r,s=i.createBuffer(r,n,t);if(r===1){const a=new Float32Array(e);s.copyToChannel(a,0)}else{const a=e.length/r;for(let o=0;o<r;o++){const l=new Float32Array(a);for(let d=0;d<a;d++)l[d]=e[d*r+o];s.copyToChannel(l,o)}}return s}async function s1(e,t){const{runInference:r}=await e1(async()=>{const{runInference:s}=await Promise.resolve().then(()=>Ax);return{runInference:s}},[]),i=i1(e);t?.(.1);const n=await r(i,e.sampleRate,s=>{t?.(.1+s*.8)});return t?.(.9),n1(n,e.sampleRate,1)}async function a1(e,t){if(!t1())return console.warn("AudioWorklet not supported, falling back to synchronous processing"),s1(e,t);const r=e.sampleRate,i=new Worker("/workers/onnx-worker.js"),n=new OfflineAudioContext(1,e.length,r);await n.audioWorklet.addModule("/worklets/df-processor.js");const s=new AudioWorkletNode(n,"df-processor",{processorOptions:{worker:i}});await new Promise((l,d)=>{const c=setTimeout(()=>d(new Error("Worker initialization timeout")),3e4);s.port.onmessage=f=>{f.data.type==="WORKER_READY"&&(clearTimeout(c),l())},s.port.postMessage({type:"INIT"})}),t?.(.1);const a=n.createBufferSource();a.buffer=e,a.connect(s),s.connect(n.destination);const o=await n.startRendering();return i.terminate(),t?.(1),o}function Rd(e,t=200){const r=e.getChannelData(0),i=Math.floor(r.length/t),n=new Float32Array(t);for(let s=0;s<t;s++){const a=s*i,o=Math.min(a+i,r.length);let l=0;for(let d=a;d<o;d++){const c=Math.abs(r[d]);c>l&&(l=c)}n[s]=l}return n}/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Wo=Object.defineProperty,o1=Object.getOwnPropertyDescriptor,l1=Object.getOwnPropertyNames,u1=Object.prototype.hasOwnProperty,d1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),_i=(e,t)=>{for(var r in t)Wo(e,r,{get:t[r],enumerable:!0})},c1=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of l1(t))!u1.call(e,n)&&n!==r&&Wo(e,n,{get:()=>t[n],enumerable:!(i=o1(t,n))||i.enumerable});return e},rn=e=>c1(Wo({},"__esModule",{value:!0}),e),ki,kr,oi,Md,wm,vm=X(()=>{ki=new Map,kr=[],oi=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ki.get(e);if(i===void 0)ki.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=kr.indexOf(e);n!==-1&&kr.splice(n,1);for(let s=0;s<kr.length;s++)if(ki.get(kr[s]).priority<=r){kr.splice(s,0,e);return}kr.push(e)}return}throw new TypeError("not a valid backend")},Md=async e=>{let t=ki.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},wm=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?kr:r,n,s=[],a=new Set;for(let l of i){let d=await Md(l);typeof d=="string"?s.push({name:l,err:d}):(n||(n=d),n===d&&a.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),p1=X(()=>{vm()}),$m,f1=X(()=>{$m="1.26.0"}),Xs,at,xm=X(()=>{f1(),Xs="warning",at={wasm:{},webgl:{},webgpu:{},versions:{common:$m},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Xs=e}},get logLevel(){return Xs}},Object.defineProperty(at,"logLevel",{enumerable:!0})}),He,h1=X(()=>{xm(),He=at}),Sm,km,m1=X(()=>{Sm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*n,f=0,h=c,b=c*2,_=-1;a==="RGBA"?(f=0,h=c,b=c*2,_=c*3):a==="RGB"?(f=0,h=c,b=c*2):a==="RBG"&&(f=0,b=c,h=c*2);for(let y=0;y<s;y++)for(let S=0;S<n;S++){let v=(e.data[f++]-d[0])*l[0],w=(e.data[h++]-d[1])*l[1],T=(e.data[b++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+T+","+k+")",i.fillRect(S,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},km=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,b=0,_=1,y=2,S=3,v=0,w=f,T=f*2,k=-1;o==="RGBA"?(v=0,w=f,T=f*2,k=f*3):o==="RGB"?(v=0,w=f,T=f*2):o==="RBG"&&(v=0,T=f,w=f*2),i=r.createImageData(n,s);for(let I=0;I<s*n;b+=h,_+=h,y+=h,S+=h,I++)i.data[b]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[w++]-c[1])*d[1],i.data[y]=(e.data[T++]-c[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),kn,Tm,Em,Im,Cm,zm,g1=X(()=>{Fo(),kn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,b=1,_=2,y=3,S=0,v=d,w=d*2,T=-1;o==="RGB"&&(f=3,h=0,b=1,_=2,y=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,S=d*2);for(let k=0;k<d;k++,h+=f,_+=f,b+=f,y+=f)c[S++]=(e[h]+a[0])/s[0],c[v++]=(e[b]+a[1])/s[1],c[w++]=(e[_]+a[2])/s[2],T!==-1&&y!==-1&&(c[T++]=(e[y]+a[3])/s[3]);return l==="RGBA"?new Tt("float32",c,[1,4,r,i]):new Tt("float32",c,[1,3,r,i])},Tm=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=b}else o.tensorFormat="RGBA",o.height=h,o.width=b;f.drawImage(e,0,0),a=f.getImageData(0,0,b,h).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let b=d(h);if(b!=null)b.putImageData(e,0,0),a=b.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,b=e.width;return f.drawImage(e,0,0,b,h),a=f.getImageData(0,0,b,h).data,o.height=h,o.width=b,kn(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let h=l(),b=d(h);if(!e||!b)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,b.drawImage(_,0,0,h.width,h.height);let y=b.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(kn(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return kn(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Em=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new Tt({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},Im=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new Tt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},Cm=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new Tt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:s})},zm=(e,t,r)=>new Tt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Vr,Pi,Zs,Am,b1=X(()=>{Vr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Pi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zs=!1,Am=()=>{if(!Zs){Zs=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Vr.set("int64",BigInt64Array),Pi.set(BigInt64Array,"int64")),t&&(Vr.set("uint64",BigUint64Array),Pi.set(BigUint64Array,"uint64")),i?(Vr.set("float16",r),Pi.set(r,"float16")):Vr.set("float16",Uint16Array)}}}),Om,Rm,_1=X(()=>{Fo(),Om=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Rm=(e,t)=>{switch(e.location){case"cpu":return new Tt(e.type,e.data,t);case"cpu-pinned":return new Tt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Tt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Tt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Tt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Tt,Fo=X(()=>{m1(),g1(),b1(),_1(),Tt=class{constructor(e,t,r){Am();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=Vr.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Vr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",a=e;else if(l==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let l=Pi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=a,this.dataLocation="cpu"}let s=Om(n);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return Tm(e,t)}static fromTexture(e,t){return Em(e,t)}static fromGpuBuffer(e,t){return Im(e,t)}static fromMLTensor(e,t){return Cm(e,t)}static fromPinnedBuffer(e,t,r){return zm(e,t,r)}toDataURL(e){return Sm(this,e)}toImageData(e){return km(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Rm(this,e)}}}),xt,Mm=X(()=>{Fo(),xt=Tt}),Zn,Qs,sr,Ft,Xr,Zr,Bm=X(()=>{xm(),Zn=(e,t)=>{(typeof at.trace>"u"?!at.wasm.trace:!at.trace)||console.timeStamp(`${e}::ORT::${t}`)},Qs=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Zn("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},sr=e=>{(typeof at.trace>"u"?!at.wasm.trace:!at.trace)||Qs("BEGIN",e)},Ft=e=>{(typeof at.trace>"u"?!at.wasm.trace:!at.trace)||Qs("END",e)},Xr=e=>{(typeof at.trace>"u"?!at.wasm.trace:!at.trace)||console.time(`ORT::${e}`)},Zr=e=>{(typeof at.trace>"u"?!at.wasm.trace:!at.trace)||console.timeEnd(`ORT::${e}`)}}),Nm,y1=X(()=>{vm(),Mm(),Bm(),Nm=class Dm{constructor(t){this.handler=t}async run(t,r,i){sr(),Xr("InferenceSession.run");let n={},s={};if(typeof t!="object"||t===null||t instanceof xt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof xt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof xt)&&(d=!0,a=!1,n[f]=h)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof xt?l[d]=c:l[d]=new xt(c.type,c.data,c.dims)}return Zr("InferenceSession.run"),Ft(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){sr(),Xr("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await wm(a),d=await o.createInferenceSessionHandler(s,l);return Zr("InferenceSession.create"),Ft(),new Dm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Xi,w1=X(()=>{y1(),Xi=Nm}),v1=X(()=>{}),$1=X(()=>{}),x1=X(()=>{}),S1=X(()=>{}),k1={};_i(k1,{InferenceSession:()=>Xi,TRACE:()=>Zn,TRACE_EVENT_BEGIN:()=>Xr,TRACE_EVENT_END:()=>Zr,TRACE_FUNC_BEGIN:()=>sr,TRACE_FUNC_END:()=>Ft,Tensor:()=>xt,env:()=>He,registerBackend:()=>oi});var Rt=X(()=>{p1(),h1(),w1(),Mm(),v1(),$1(),Bm(),x1(),S1()}),Vo=X(()=>{}),Pm={};_i(Pm,{default:()=>Um});var Ys,Js,Um,T1=X(()=>{Vb(),ti(),Ho(),Ys="ort-wasm-proxy-worker",Js=globalThis.self?.name===Ys,Js&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Go(r.wasm).then(()=>{ul(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;dl(n,i).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:i}=r,n=is(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;cl(i,n).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":pl(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:s,outputIndices:a,options:o}=r;fl(i,n,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},ml([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":hl(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Um=Js?null:e=>new Worker(e??St,{type:"module",name:Ys})}),Lm={};_i(Lm,{default:()=>qm});async function Bd(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=u=>async(...p)=>{try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:p[0],errors:[]},m=await u(...p);if(t.Yc!==g)throw Error("Session mismatch");t.dd?.flush();let x=g.errors;if(0<x.length){let E=await Promise.all(x);if(E=E.filter(R=>R),0<E.length)throw Error(E.join(`
`))}return m}finally{t.Yc=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let g=t.dd;t.jsepRegisterBuffer=(m,x,E,R)=>g.registerBuffer(m,x,E,R),t.jsepGetBuffer=m=>g.getBuffer(m),t.jsepCreateDownloader=(m,x,E)=>g.createDownloader(m,x,E),t.jsepOnCreateSession=m=>{g.onCreateSession(m)},t.jsepOnReleaseSession=m=>{g.onReleaseSession(m)},t.jsepOnRunStart=m=>g.onRunStart(m),t.Id=(m,x)=>{g.upload(m,x)}}else if(u==="webnn"){let g=p[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>g.onRunStart(m),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=m=>{g.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,x)=>g.createMLTensorDownloader(m,x),t.webnnRegisterMLTensor=(m,x,E,R)=>g.registerMLTensor(m,x,E,R),t.webnnCreateMLContext=m=>g.createMLContext(m),t.webnnRegisterMLConstant=(m,x,E,R,P,Y)=>g.registerMLConstant(m,x,E,R,P,t.Xc,Y),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let a=()=>{let u=p=>(...g)=>{let m=jt;return g=p(...g),jt!=m?new Promise((x,E)=>{xs={resolve:x,reject:E}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(u,p)=>{throw p},c=import.meta.url,f="";if(r||i){try{f=new URL(".",c).href}catch{}i&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(A(u))return new Promise((g,m)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):m(x.status)},x.onerror=m,x.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var h,b,_,y,S,v,w=console.log.bind(console),T=console.error.bind(console),k=w,I=T,O=!1,A=u=>u.startsWith("file://");function $(){xe.buffer!=V.buffer&&oe()}if(n){let u=function(p){try{var g=p.data,m=g.Sc;if(m==="load"){let x=[];self.onmessage=E=>x.push(E),v=()=>{postMessage({Sc:"loaded"});for(let E of x)u(E);self.onmessage=u};for(let E of g.xd)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Sc:"callHandler",wd:E,args:R})},E=="print"&&(k=t[E]),E=="printErr"&&(I=t[E]));xe=g.Od,oe(),b=g.Pd,Fe(),vn()}else if(m==="run"){(function(x){var E=($(),D)[x+52>>>2>>>0];x=($(),D)[x+56>>>2>>>0],du(E,E-x),Se(E)})(g.Rc),Is(g.Rc,0,0,1,0,0),se(),ws(g.Rc),q||(nu(),q=!0);try{Ue(g.Md,g.bd)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&(m==="checkMailbox"?q&&hn():m&&(I(`worker: received unknown command ${m}`),I(g)))}catch(x){throw su(),x}};var q=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var V,ue,ie,K,M,D,H,ee,Q,pe,be,L=!1;function oe(){var u=xe.buffer;t.HEAP8=V=new Int8Array(u),ie=new Int16Array(u),t.HEAPU8=ue=new Uint8Array(u),K=new Uint16Array(u),t.HEAP32=M=new Int32Array(u),t.HEAPU32=D=new Uint32Array(u),H=new Float32Array(u),ee=new Float64Array(u),Q=new BigInt64Array(u),pe=new BigUint64Array(u)}function le(){L=!0,n?v():or.sb()}function Z(u){throw I(u="Aborted("+u+")"),O=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S?.(u),u}function Ke(){return{a:{ma:vy,gb:wy,g:nt,J:Ct,f:dn,o:cn,h:i_,ha:n_,b:s_,T:a_,Ha:bl,n:o_,$:vl,Xa:$l,Da:xl,Fa:Sl,Ya:kl,Va:Tl,Oa:El,Ua:Il,ka:Cl,Ea:zl,Ba:Al,Wa:Ol,Ca:Rl,bb:l_,ea:u_,wa:d_,ua:p_,da:h_,O:m_,H:g_,va:b_,_:S_,xa:k_,Ra:T_,za:I_,Ia:C_,sa:z_,fa:A_,Qa:ws,_a:O_,R:N_,r:q_,c:_s,hb:W_,y:F_,M:V_,D:H_,l:G_,s:ql,ib:j_,I:K_,S:X_,j:Z_,u:Q_,q:Y_,k:J_,La:ey,Ma:ty,Na:ry,Ja:Hl,Ka:Gl,ta:jl,db:ny,ab:ay,v:oy,aa:ly,ga:uy,$a:sy,W:dy,Za:cy,Aa:py,F:iy,U:fy,la:yn,ya:my,fb:hy,eb:gy,Sa:Ql,Ta:Yl,Ga:W,V:Jl,ja:eu,Pa:tu,ia:ru,kb:iw,na:Yy,lb:rw,oa:Qy,G:Wy,d:ky,t:xy,w:$y,A:By,mb:Ky,K:Uy,x:Iy,pa:Xy,Y:Jy,ba:jy,nb:Gy,ob:Hy,P:Ny,qa:Vy,pb:Fy,N:Ly,Z:Zy,e:Sy,B:Ey,m:Ty,jb:nw,p:zy,z:Ay,C:Cy,E:Oy,L:Dy,qb:qy,Q:ew,ca:Py,X:tw,rb:My,ra:Ry,i:_y,a:xe,cb:j}}}async function Fe(){function u(m,x){var E=or=m.exports;m={};for(let[R,P]of Object.entries(E))typeof P=="function"?(E=R_(P),m[R]=E):m[R]=P;return or=m,or=function(){var R=or,P=ne=>ve=>ne(ve)>>>0,Y=ne=>()=>ne()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=Y(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=Y(R.mc),R.qc=P(R.qc),R}(),te.push(or._b),iu=(m=or).tb,nu=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,wn=m.Xb,Kt=t._free=m.Yb,vi=t._malloc=m.Zb,Is=m.ac,su=m.bc,au=m.cc,ou=m.dc,Cs=m.ec,lu=m.fc,uu=m.gc,Ee=m.hc,$i=m.ic,du=m.jc,Se=m.kc,zs=m.lc,Te=m.mc,cu=m.nc,As=m.oc,pu=m.pc,fu=m.qc,hu=m.rc,Os=m.sc,mu=m.tc,gu=m.uc,bu=m.vc,_u=m.wc,yu=m.xc,wu=m.yc,vu=m.zc,$u=m.Ac,xu=m.Bc,Su=m.Cc,ku=m.Dc,Tu=m.Ec,Eu=m.Fc,Iu=m.Gc,Cu=m.Hc,zu=m.Ic,Au=m.Jc,Ou=m.Kc,Ru=m.Lc,Mu=m.Mc,Bu=m.Nc,Nu=m.Pc,Du=m.Qc,Pu=m.$c,Uu=m.ad,Lu=m.fd,qu=m.jd,Wu=m.kd,Fu=m.ld,Vu=m.md,Hu=m.nd,Gu=m.od,ju=m.pd,Ku=m.qd,Xu=m.vd,Zu=m.Sd,Qu=m.Td,Yu=m.Ud,Ju=m.Vd,b=x,or}var p,g=Ke();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(g,(x,E)=>{m(u(x,E))})}):n?u(new WebAssembly.Instance(b,Ke()),b):(be??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/deepfilternet-web/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href,p=await async function(m){var x=be;if(!h&&!A(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,m)}catch(R){I(`wasm streaming compile failed: ${R}`),I("falling back to ArrayBuffer instantiation")}return async function(R,P){try{var Y=await async function(ne){if(!h)try{var ve=await o(ne);return new Uint8Array(ve)}catch{}if(ne==be&&h)ne=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";ne=l(ne)}return ne}(R);return await WebAssembly.instantiate(Y,P)}catch(ne){I(`failed to asynchronously prepare wasm: ${ne}`),Z(ne)}}(x,m)}(g),u(p.instance,p.module))}class ze{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Ye=u=>{u.terminate(),u.onmessage=()=>{}},Ae=[],Be=0,pt=null,C=u=>{re.length==0&&(_e(),he(re[0]));var p=re.pop();if(!p)return 6;J.push(p),F[u.Rc]=p,p.Rc=u.Rc;var g={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return p.postMessage(g,u.rd),0},z=0,B=(u,p,...g)=>{var m,x=16*g.length,E=Te(),R=zs(x),P=R>>>3;for(m of g)typeof m=="bigint"?(($(),Q)[P++>>>0]=1n,($(),Q)[P++>>>0]=m):(($(),Q)[P++>>>0]=0n,($(),ee)[P++>>>0]=m);return u=au(u,0,x,R,p),Se(E),u};function j(u){if(n)return B(0,1,u);if(_=u,!(0<z)){for(var p of J)Ye(p);for(p of re)Ye(p);re=[],J=[],F={},O=!0}d(0,new ze(u))}function G(u){if(n)return B(1,0,u);W(u)}var W=u=>{if(_=u,n)throw G(u),"unwind";j(u)},re=[],J=[],te=[],F={},ge=u=>{var p=u.Rc;delete F[p],re.push(u),J.splice(J.indexOf(u),1),u.Rc=0,ou(p)};function se(){te.forEach(u=>u())}var he=u=>new Promise(p=>{u.onmessage=x=>{var E=x.data;if(x=E.Sc,E.Zc&&E.Zc!=wn()){var R=F[E.Zc];R?R.postMessage(E,E.rd):I(`Internal error! Worker sent a message "${x}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?hn():x==="spawnThread"?C(E):x==="cleanupThread"?fn(()=>{ge(F[E.Nd])}):x==="loaded"?(u.loaded=!0,p(u)):E.target==="setimmediate"?u.postMessage(E):x==="uncaughtException"?u.onerror(E.error):x==="callHandler"?t[E.wd](...E.args):x&&I(`worker sent an unknown command ${x}`)},u.onerror=x=>{throw I(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,m=[];for(g of[])t.propertyIsEnumerable(g)&&m.push(g);u.postMessage({Sc:"load",xd:m,Od:xe,Pd:b})});function _e(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});re.push(u)}var xe,Ue=(u,p)=>{z=0,u=Os(u,p),0<z?_=u:Cs(u)},Re=[],Xe=0;function nt(u){var p=new ut(u>>>=0);return($(),V)[p.Tc+12>>>0]==0&&(vr(p,!0),Xe--),yi(p,!1),Re.push(p),fu(u)}var lt=0,Ct=()=>{Ee(0,0);var u=Re.pop();cu(u.cd),lt=0};function vr(u,p){p=p?1:0,($(),V)[u.Tc+12>>>0]=p}function yi(u,p){p=p?1:0,($(),V)[u.Tc+13>>>0]=p}class ut{constructor(p){this.cd=p,this.Tc=p-24}}var vt=u=>{var p=lt;if(!p)return $i(0),0;var g=new ut(p);($(),D)[g.Tc+16>>>2>>>0]=p;var m=($(),D)[g.Tc+4>>>2>>>0];if(!m)return $i(0),p;for(var x of u){if(x===0||x===m)break;if(pu(x,m,g.Tc+16))return $i(x),p}return $i(m),p};function dn(){return vt([])}function cn(u){return vt([u>>>0])}function i_(u,p,g,m){return vt([u>>>0,p>>>0,g>>>0,m>>>0])}var n_=()=>{var u=Re.pop();u||Z("no exception to throw");var p=u.cd;throw($(),V)[u.Tc+13>>>0]==0&&(Re.push(u),yi(u,!0),vr(u,!1),Xe++),As(p),lt=p};function s_(u,p,g){var m=new ut(u>>>=0);throw p>>>=0,g>>>=0,($(),D)[m.Tc+16>>>2>>>0]=0,($(),D)[m.Tc+4>>>2>>>0]=p,($(),D)[m.Tc+8>>>2>>>0]=g,As(u),Xe++,lt=u}var a_=()=>Xe;function gl(u,p,g,m){return n?B(2,1,u,p,g,m):bl(u,p,g,m)}function bl(u,p,g,m){if(u>>>=0,p>>>=0,g>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?gl(u,p,g,m):(u={Ld:g,Rc:u,bd:m,rd:x},n?(u.Sc="spawnThread",postMessage(u,x),0):C(u))}function o_(u){throw lt||=u>>>0,lt}var _l=globalThis.TextDecoder&&new TextDecoder,yl=(u,p,g,m)=>{if(g=p+g,m)return g;for(;u[p]&&!(p>=g);)++p;return p},wl=(u,p=0,g,m)=>{if(16<(g=yl(u,p>>>=0,g,m))-p&&u.buffer&&_l)return _l.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,g):u.slice(p,g));for(m="";p<g;){var x=u[p++];if(128&x){var E=63&u[p++];if((224&x)==192)m+=String.fromCharCode((31&x)<<6|E);else{var R=63&u[p++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|R:(7&x)<<18|E<<12|R<<6|63&u[p++])?m+=String.fromCharCode(x):(x-=65536,m+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else m+=String.fromCharCode(x)}return m},it=(u,p,g)=>(u>>>=0)?wl(($(),ue),u,p,g):"";function vl(u,p,g){return n?B(3,1,u,p,g):0}function $l(u,p){if(n)return B(4,1,u,p)}function xl(u,p){if(n)return B(5,1,u,p)}function Sl(u,p,g){if(n)return B(6,1,u,p,g)}function kl(u,p,g){return n?B(7,1,u,p,g):0}function Tl(u,p){if(n)return B(8,1,u,p)}function El(u,p,g){if(n)return B(9,1,u,p,g)}function Il(u,p,g,m){if(n)return B(10,1,u,p,g,m)}function Cl(u,p,g,m){if(n)return B(11,1,u,p,g,m)}function zl(u,p,g,m){if(n)return B(12,1,u,p,g,m)}function Al(u){if(n)return B(13,1,u)}function Ol(u,p){if(n)return B(14,1,u,p)}function Rl(u,p,g){if(n)return B(15,1,u,p,g)}var l_=()=>Z(""),Gt=u=>{u>>>=0;for(var p="";;){var g=($(),ue)[u++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},gs={},bs={},ii=class extends Error{constructor(u){super(u),this.name="BindingError"}};function ar(u,p,g={}){return function(m,x,E={}){var R=x.name;if(!m)throw new ii(`type "${R}" must have a positive integer typeid pointer`);if(bs.hasOwnProperty(m)){if(E.yd)return;throw new ii(`Cannot register type '${R}' twice`)}bs[m]=x,gs.hasOwnProperty(m)&&(x=gs[m],delete gs[m],x.forEach(P=>P()))}(u,p,g)}var Ml=(u,p,g)=>{switch(p){case 1:return g?m=>($(),V)[m>>>0]:m=>($(),ue)[m>>>0];case 2:return g?m=>($(),ie)[m>>>1>>>0]:m=>($(),K)[m>>>1>>>0];case 4:return g?m=>($(),M)[m>>>2>>>0]:m=>($(),D)[m>>>2>>>0];case 8:return g?m=>($(),Q)[m>>>3>>>0]:m=>($(),pe)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function u_(u,p,g,m,x){u>>>=0,g>>>=0,p=Gt(p>>>0);let E=R=>R;if(m=m===0n){let R=8*g;E=P=>BigInt.asUintN(R,P),x=E(x)}ar(u,{name:p,Oc:E,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:Ml(p,g,!m),Wc:null})}function d_(u,p,g,m){ar(u>>>=0,{name:p=Gt(p>>>0),Oc:function(x){return!!x},Vc:function(x,E){return E?g:m},Uc:function(x){return this.Oc(($(),ue)[x>>>0])},Wc:null})}var Bl=[],Mr=[0,1,,1,null,1,!0,1,!1,1];function _s(u){9<(u>>>=0)&&--Mr[u+1]==0&&(Mr[u]=void 0,Bl.push(u))}var zt=u=>{if(!u)throw new ii(`Cannot use deleted val. handle = ${u}`);return Mr[u]},Mt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Bl.pop()||Mr.length;return Mr[p]=u,Mr[p+1]=1,p}};function ys(u){return this.Oc(($(),D)[u>>>2>>>0])}var c_={name:"emscripten::val",Oc:u=>{var p=zt(u);return _s(u),p},Vc:(u,p)=>Mt(p),Uc:ys,Wc:null};function p_(u){return ar(u>>>0,c_)}var f_=(u,p)=>{switch(p){case 4:return function(g){return this.Oc(($(),H)[g>>>2>>>0])};case 8:return function(g){return this.Oc(($(),ee)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function h_(u,p,g){g>>>=0,ar(u>>>=0,{name:p=Gt(p>>>0),Oc:m=>m,Vc:(m,x)=>x,Uc:f_(p,g),Wc:null})}function m_(u,p,g,m,x){u>>>=0,g>>>=0,p=Gt(p>>>0);let E=P=>P;if(m===0){var R=32-8*g;E=P=>P<<R>>>R,x=E(x)}ar(u,{name:p,Oc:E,Vc:(P,Y)=>Y,Uc:Ml(p,g,m!==0),Wc:null})}function g_(u,p,g){function m(E){var R=($(),D)[E>>>2>>>0];return E=($(),D)[E+4>>>2>>>0],new x(($(),V).buffer,E,R)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ar(u>>>=0,{name:g=Gt(g>>>0),Oc:m,Uc:m},{yd:!0})}var $r=(u,p,g)=>{var m=($(),ue);if(p>>>=0,0<g){var x=p;g=p+g-1;for(var E=0;E<u.length;++E){var R=u.codePointAt(E);if(127>=R){if(p>=g)break;m[p++>>>0]=R}else if(2047>=R){if(p+1>=g)break;m[p++>>>0]=192|R>>6,m[p++>>>0]=128|63&R}else if(65535>=R){if(p+2>=g)break;m[p++>>>0]=224|R>>12,m[p++>>>0]=128|R>>6&63,m[p++>>>0]=128|63&R}else{if(p+3>=g)break;m[p++>>>0]=240|R>>18,m[p++>>>0]=128|R>>12&63,m[p++>>>0]=128|R>>6&63,m[p++>>>0]=128|63&R,E++}}m[p>>>0]=0,u=p-x}else u=0;return u},pn=u=>{for(var p=0,g=0;g<u.length;++g){var m=u.charCodeAt(g);127>=m?p++:2047>=m?p+=2:55296<=m&&57343>=m?(p+=4,++g):p+=3}return p};function b_(u,p){ar(u>>>=0,{name:p=Gt(p>>>0),Oc(g){var m=($(),D)[g>>>2>>>0];return m=it(g+4,m,!0),Kt(g),m},Vc(g,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var x=typeof m=="string";if(!(x||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new ii("Cannot pass non-string to std::string");var E=x?pn(m):m.length,R=vi(4+E+1),P=R+4;return($(),D)[R>>>2>>>0]=E,x?$r(m,P,E+1):($(),ue).set(m,P>>>0),g!==null&&g.push(Kt,R),R},Uc:ys,Wc(g){Kt(g)}})}var Nl=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,__=(u,p,g)=>{if(u>>>=1,16<(p=yl(($(),K),u,p/2,g))-u&&Nl)return Nl.decode(($(),K).slice(u,p));for(g="";u<p;++u){var m=($(),K)[u>>>0];g+=String.fromCharCode(m)}return g},y_=(u,p,g)=>{if(g??=2147483647,2>g)return 0;var m=p;g=(g-=2)<2*u.length?g/2:u.length;for(var x=0;x<g;++x){var E=u.charCodeAt(x);($(),ie)[p>>>1>>>0]=E,p+=2}return($(),ie)[p>>>1>>>0]=0,p-m},w_=u=>2*u.length,v_=(u,p,g)=>{var m="";u>>>=2;for(var x=0;!(x>=p/4);x++){var E=($(),D)[u+x>>>0];if(!E&&!g)break;m+=String.fromCodePoint(E)}return m},$_=(u,p,g)=>{if(p>>>=0,g??=2147483647,4>g)return 0;var m=p;g=m+g-4;for(var x=0;x<u.length;++x){var E=u.codePointAt(x);if(65535<E&&x++,($(),M)[p>>>2>>>0]=E,(p+=4)+4>g)break}return($(),M)[p>>>2>>>0]=0,p-m},x_=u=>{for(var p=0,g=0;g<u.length;++g)65535<u.codePointAt(g)&&g++,p+=4;return p};function S_(u,p,g){if(u>>>=0,p>>>=0,g=Gt(g>>>=0),p===2)var m=__,x=y_,E=w_;else m=v_,x=$_,E=x_;ar(u,{name:g,Oc:R=>{var P=($(),D)[R>>>2>>>0];return P=m(R+4,P*p,!0),Kt(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new ii(`Cannot pass non-string to C++ string type ${g}`);var Y=E(P),ne=vi(4+Y+p);return($(),D)[ne>>>2>>>0]=Y/p,x(P,ne+4,Y+p),R!==null&&R.push(Kt,ne),ne},Uc:ys,Wc(R){Kt(R)}})}function k_(u,p){ar(u>>>=0,{zd:!0,name:p=Gt(p>>>0),Oc:()=>{},Vc:()=>{}})}function T_(u){Is(u>>>0,!i,1,!r,131072,!1),se()}var fn=u=>{if(!O)try{if(u(),!(0<z))try{n?wn()&&Cs(_):W(_)}catch(p){p instanceof ze||p=="unwind"||d(0,p)}}catch(p){p instanceof ze||p=="unwind"||d(0,p)}},E_=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ws(u){u>>>=0,E_||(Atomics.waitAsync(($(),M),u>>>2,u).value.then(hn),u+=128,Atomics.store(($(),M),u>>>2,1))}var hn=()=>fn(()=>{var u=wn();u&&(ws(u),uu())});function I_(u,p){(u>>>=0)==p>>>0?setTimeout(hn):n?postMessage({Zc:u,Sc:"checkMailbox"}):(u=F[u])&&u.postMessage({Sc:"checkMailbox"})}var vs=[];function C_(u,p,g,m,x){for(p>>>=0,x>>>=0,vs.length=0,g=x>>>3,m=x+m>>>3;g<m;){var E;E=($(),Q)[g++>>>0]?($(),Q)[g++>>>0]:($(),ee)[g++>>>0],vs.push(E)}return(p?Rs[p]:yy[u])(...vs)}var z_=()=>{z=0};function A_(u){u>>>=0,n?postMessage({Sc:"cleanupThread",Nd:u}):ge(F[u])}function O_(u){}var mn=u=>{try{u()}catch(p){Z(p)}};function R_(u){var p=(...g)=>{gn.push(u);try{return u(...g)}finally{O||(gn.pop(),jt&&xr===1&&gn.length===0&&(xr=0,z+=1,mn(Qu),typeof Fibers<"u"&&Fibers.Zd()))}};return Ul.set(u,p),p}var xr=0,jt=null,Dl=0,gn=[],$s=new Map,Pl=new Map,Ul=new Map,M_=0,xs=null,B_=[],Ll=u=>function(p){if(!O){if(xr===0){var g=!1,m=!1;p((x=0)=>{if(!O&&(Dl=x,g=!0,m)){xr=2,mn(()=>Yu(jt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var E=function(){var Y=($(),M)[jt+8>>>2>>>0];return Y=Pl.get(Y),Y=Ul.get(Y),--z,Y()}()}catch(Y){E=Y,x=!0}var R=!1;if(!jt){var P=xs;P&&(xs=null,(x?P.reject:P.resolve)(E),R=!0)}if(x&&!R)throw E}}),m=!0,g||(xr=1,jt=function(){var x=vi(65548),E=x+12;if(($(),D)[x>>>2>>>0]=E,($(),D)[x+4>>>2>>>0]=E+65536,E=gn[0],!$s.has(E)){var R=M_++;$s.set(E,R),Pl.set(R,E)}return E=$s.get(E),($(),M)[x+8>>>2>>>0]=E,x}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),mn(()=>Zu(jt)))}else xr===2?(xr=0,mn(Ju),Kt(jt),jt=null,B_.forEach(fn)):Z(`invalid state: ${xr}`);return Dl}}(p=>{u().then(p)});function N_(u){return u>>>=0,Ll(async()=>{var p=await zt(u);return Mt(p)})}var Ss=[],D_=u=>{var p=Ss.length;return Ss.push(u),p},P_=(u,p)=>{for(var g=Array(u),m=0;m<u;++m){var x=m,E=($(),D)[p+4*m>>>2>>>0],R=bs[E];if(R===void 0)throw u=`parameter ${m}`,E=iu(E),p=Gt(E),Kt(E),new ii(`${u} has unknown type ${p}`);g[x]=R}return g},U_=(u,p,g)=>{var m=[];return u=u(m,g),m.length&&(($(),D)[p>>>2>>>0]=Mt(m)),u},L_={},bn=u=>{var p=L_[u];return p===void 0?Gt(u):p};function q_(u,p,g){var[m,...x]=P_(u,p>>>0);p=m.Vc.bind(m);var E=x.map(Y=>Y.Uc.bind(Y));u--;var R={toValue:zt};switch(u=E.map((Y,ne)=>{var ve=`argFromPtr${ne}`;return R[ve]=Y,`${ve}(args${ne?"+"+8*ne:""})`}),g){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=bn,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${u})`,m.zd||(R.toReturnWire=p,R.emval_returnValue=U_,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,g=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${x.map(Y=>Y.name)}) => ${m.name}>`,D_(Object.defineProperty(g,"name",{value:P}))}function W_(u,p){return p>>>=0,(u=zt(u>>>0))==zt(p)}function F_(u){return(u>>>=0)?(u=bn(u),Mt(globalThis[u])):Mt(globalThis)}function V_(u){return u=bn(u>>>0),Mt(t[u])}function H_(u,p){return p>>>=0,u=zt(u>>>0),p=zt(p),Mt(u[p])}function G_(u){9<(u>>>=0)&&(Mr[u+1]+=1)}function ql(u,p,g,m,x){return Ss[u>>>0](p>>>0,g>>>0,m>>>0,x>>>0)}function j_(u,p,g,m,x){return ql(u>>>0,p>>>0,g>>>0,m>>>0,x>>>0)}function K_(){return Mt([])}function X_(u){u=zt(u>>>0);for(var p=Array(u.length),g=0;g<u.length;g++)p[g]=u[g];return Mt(p)}function Z_(u){return Mt(bn(u>>>0))}function Q_(){return Mt({})}function Y_(u){for(var p=zt(u>>>=0);p.length;){var g=p.pop();p.pop()(g)}_s(u)}function J_(u,p,g){p>>>=0,g>>>=0,u=zt(u>>>0),p=zt(p),g=zt(g),u[p]=g}function ey(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),M)[p>>>2>>>0]=u.getUTCSeconds(),($(),M)[p+4>>>2>>>0]=u.getUTCMinutes(),($(),M)[p+8>>>2>>>0]=u.getUTCHours(),($(),M)[p+12>>>2>>>0]=u.getUTCDate(),($(),M)[p+16>>>2>>>0]=u.getUTCMonth(),($(),M)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,($(),M)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),M)[p+28>>>2>>>0]=u}var Wl=u=>u%4==0&&(u%100!=0||u%400==0),Fl=[0,31,60,91,121,152,182,213,244,274,305,335],Vl=[0,31,59,90,120,151,181,212,243,273,304,334];function ty(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),M)[p>>>2>>>0]=u.getSeconds(),($(),M)[p+4>>>2>>>0]=u.getMinutes(),($(),M)[p+8>>>2>>>0]=u.getHours(),($(),M)[p+12>>>2>>>0]=u.getDate(),($(),M)[p+16>>>2>>>0]=u.getMonth(),($(),M)[p+20>>>2>>>0]=u.getFullYear()-1900,($(),M)[p+24>>>2>>>0]=u.getDay();var g=(Wl(u.getFullYear())?Fl:Vl)[u.getMonth()]+u.getDate()-1|0;($(),M)[p+28>>>2>>>0]=g,($(),M)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(g!=m&&u.getTimezoneOffset()==Math.min(m,g)),($(),M)[p+32>>>2>>>0]=u}function ry(u){u>>>=0;var p=new Date(($(),M)[u+20>>>2>>>0]+1900,($(),M)[u+16>>>2>>>0],($(),M)[u+12>>>2>>>0],($(),M)[u+8>>>2>>>0],($(),M)[u+4>>>2>>>0],($(),M)[u>>>2>>>0],0),g=($(),M)[u+32>>>2>>>0],m=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,x);return 0>g?($(),M)[u+32>>>2>>>0]=+(x!=E&&R==m):0<g!=(R==m)&&(x=Math.max(E,x),p.setTime(p.getTime()+6e4*((0<g?R:x)-m))),($(),M)[u+24>>>2>>>0]=p.getDay(),g=(Wl(p.getFullYear())?Fl:Vl)[p.getMonth()]+p.getDate()-1|0,($(),M)[u+28>>>2>>>0]=g,($(),M)[u>>>2>>>0]=p.getSeconds(),($(),M)[u+4>>>2>>>0]=p.getMinutes(),($(),M)[u+8>>>2>>>0]=p.getHours(),($(),M)[u+12>>>2>>>0]=p.getDate(),($(),M)[u+16>>>2>>>0]=p.getMonth(),($(),M)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Hl(u,p,g,m,x,E,R){return n?B(16,1,u,p,g,m,x,E,R):-52}function Gl(u,p,g,m,x,E){if(n)return B(17,1,u,p,g,m,x,E)}var wi={},iy=()=>performance.timeOrigin+performance.now();function jl(u,p){if(n)return B(18,1,u,p);if(wi[u]&&(clearTimeout(wi[u].id),delete wi[u]),!p)return 0;var g=setTimeout(()=>{delete wi[u],fn(()=>lu(u,performance.timeOrigin+performance.now()))},p);return wi[u]={id:g,Yd:p},0}function ny(u,p,g,m){u>>>=0,p>>>=0,g>>>=0,m>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var R=Math.max(E,x);($(),D)[u>>>2>>>0]=60*R,($(),M)[p>>>2>>>0]=+(E!=x),u=(p=P=>{var Y=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(Y/60)).padStart(2,"0")}${String(Y%60).padStart(2,"0")}`})(E),p=p(x),x<E?($r(u,g,17),$r(p,m,17)):($r(u,m,17),$r(p,g,17))}var sy=()=>Date.now();function ay(u,p,g){return g>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),($(),Q)[g>>>3>>>0]=BigInt(u),0):28}var ks=[],Kl=(u,p)=>{ks.length=0;for(var g;g=($(),ue)[u++>>>0];){var m=g!=105;p+=(m&=g!=112)&&p%8?4:0,ks.push(g==112?($(),D)[p>>>2>>>0]:g==106?($(),Q)[p>>>3>>>0]:g==105?($(),M)[p>>>2>>>0]:($(),ee)[p>>>3>>>0]),p+=m?8:4}return ks};function oy(u,p,g){return u>>>=0,p=Kl(p>>>0,g>>>0),Rs[u](...p)}function ly(u,p,g){return u>>>=0,p=Kl(p>>>0,g>>>0),Rs[u](...p)}var uy=()=>{};function dy(u,p){return I(it(u>>>0,p>>>0))}var cy=()=>{throw z+=1,"unwind"};function py(){return 4294901760}var fy=()=>navigator.hardwareConcurrency,Br={},_n=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},Xl=u=>{for(var p of u)(u=_n(p))&&(Br[u]=p)};function hy(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Xl(u),Br.gd=_n(u[3]),Br.Jd=u,Br.gd}function yn(u){if(!(u=Br[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}Kt(yn.hd??0),p=pn(u)+1;var g=vi(p);return g&&$r(u,g,p),yn.hd=g,yn.hd}function my(u){u>>>=0;var p=($(),ue).length;if(u<=p||4294901760<u)return!1;for(var g=1;4>=g;g*=2){var m=p*(1+.2/g);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-xe.buffer.byteLength+65535)/65536|0;try{xe.grow(m),oe();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function gy(u,p,g){if(u>>>=0,p>>>=0,Br.gd==u)var m=Br.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Xl(m);for(var x=3;m[x]&&_n(m[x])!=u;)++x;for(u=0;u<g&&m[u+x];++u)($(),M)[p+4*u>>>2>>>0]=_n(m[u+x]);return u}var Ts,Es={},Zl=()=>{if(!Ts){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Es)Es[u]===void 0?delete p[u]:p[u]=Es[u];var g=[];for(u in p)g.push(`${u}=${p[u]}`);Ts=g}return Ts};function Ql(u,p){if(n)return B(19,1,u,p);u>>>=0,p>>>=0;var g,m=0,x=0;for(g of Zl()){var E=p+m;($(),D)[u+x>>>2>>>0]=E,m+=$r(g,E,1/0)+1,x+=4}return 0}function Yl(u,p){if(n)return B(20,1,u,p);u>>>=0,p>>>=0;var g=Zl();for(var m of(($(),D)[u>>>2>>>0]=g.length,u=0,g))u+=pn(m)+1;return($(),D)[p>>>2>>>0]=u,0}function Jl(u){return n?B(21,1,u):52}function eu(u,p,g,m){return n?B(22,1,u,p,g,m):52}function tu(u,p,g,m){return n?B(23,1,u,p,g,m):70}var by=[null,[],[]];function ru(u,p,g,m){if(n)return B(24,1,u,p,g,m);p>>>=0,g>>>=0,m>>>=0;for(var x=0,E=0;E<g;E++){var R=($(),D)[p>>>2>>>0],P=($(),D)[p+4>>>2>>>0];p+=8;for(var Y=0;Y<P;Y++){var ne=u,ve=($(),ue)[R+Y>>>0],Ce=by[ne];ve===0||ve===10?((ne===1?k:I)(wl(Ce)),Ce.length=0):Ce.push(ve)}x+=P}return($(),D)[m>>>2>>>0]=x,0}function _y(u){return u>>>0}n||function(){for(var u=t.numThreads-1;u--;)_e();Ae.push(async()=>{var p=async function(){if(!n)return Promise.all(re.map(he))}();Be++,await p,--Be==0&&pt&&(p=pt,pt=null,p())})}(),n||(xe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),oe()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=u=>Se(u),t.stackAlloc=u=>zs(u),t.setValue=function(u,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":($(),V)[u>>>0]=p;break;case"i16":($(),ie)[u>>>1>>>0]=p;break;case"i32":($(),M)[u>>>2>>>0]=p;break;case"i64":($(),Q)[u>>>3>>>0]=BigInt(p);break;case"float":($(),H)[u>>>2>>>0]=p;break;case"double":($(),ee)[u>>>3>>>0]=p;break;case"*":($(),D)[u>>>2>>>0]=p;break;default:Z(`invalid type for setValue: ${g}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),V)[u>>>0];case"i16":return($(),ie)[u>>>1>>>0];case"i32":return($(),M)[u>>>2>>>0];case"i64":return($(),Q)[u>>>3>>>0];case"float":return($(),H)[u>>>2>>>0];case"double":return($(),ee)[u>>>3>>>0];case"*":return($(),D)[u>>>2>>>0];default:Z(`invalid type for getValue: ${p}`)}},t.UTF8ToString=it,t.stringToUTF8=$r,t.lengthBytesUTF8=pn;var iu,nu,wn,Kt,vi,Is,su,au,ou,Cs,lu,uu,Ee,$i,du,Se,zs,Te,cu,As,pu,fu,hu,Os,mu,gu,bu,_u,yu,wu,vu,$u,xu,Su,ku,Tu,Eu,Iu,Cu,zu,Au,Ou,Ru,Mu,Bu,Nu,Du,Pu,Uu,Lu,qu,Wu,Fu,Vu,Hu,Gu,ju,Ku,Xu,Zu,Qu,Yu,Ju,or,yy=[j,G,gl,vl,$l,xl,Sl,kl,Tl,El,Il,Cl,zl,Al,Ol,Rl,Hl,Gl,jl,Ql,Yl,Jl,eu,tu,ru],Rs={973212:(u,p,g,m,x)=>{if(t===void 0||!t.Xc)return 1;if((u=it(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),m=Number(m>>>0),p+g>u.byteLength)return 3;try{let E=u.subarray(p,p+g);switch(x){case 0:($(),ue).set(E,m>>>0);break;case 1:t.Qd?t.Qd(m,E):t.Id(m,E);break;default:return 4}return 0}catch{return 4}},974036:(u,p,g)=>{t.td(u,($(),ue).subarray(p>>>0,p+g>>>0))},974100:()=>t.Wd(),974142:u=>{t.sd(u)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:u=>t.Ad(u),974297:u=>t.Ed(u),974329:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g),!0)},974392:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g))},974449:()=>typeof wasmOffsetConverter<"u",974506:u=>{t.$b("Abs",u,void 0)},974557:u=>{t.$b("Neg",u,void 0)},974608:u=>{t.$b("Floor",u,void 0)},974661:u=>{t.$b("Ceil",u,void 0)},974713:u=>{t.$b("Reciprocal",u,void 0)},974771:u=>{t.$b("Sqrt",u,void 0)},974823:u=>{t.$b("Exp",u,void 0)},974874:u=>{t.$b("Erf",u,void 0)},974925:u=>{t.$b("Sigmoid",u,void 0)},974980:(u,p,g)=>{t.$b("HardSigmoid",u,{alpha:p,beta:g})},975059:u=>{t.$b("Log",u,void 0)},975110:u=>{t.$b("Sin",u,void 0)},975161:u=>{t.$b("Cos",u,void 0)},975212:u=>{t.$b("Tan",u,void 0)},975263:u=>{t.$b("Asin",u,void 0)},975315:u=>{t.$b("Acos",u,void 0)},975367:u=>{t.$b("Atan",u,void 0)},975419:u=>{t.$b("Sinh",u,void 0)},975471:u=>{t.$b("Cosh",u,void 0)},975523:u=>{t.$b("Asinh",u,void 0)},975576:u=>{t.$b("Acosh",u,void 0)},975629:u=>{t.$b("Atanh",u,void 0)},975682:u=>{t.$b("Tanh",u,void 0)},975734:u=>{t.$b("Not",u,void 0)},975785:(u,p,g)=>{t.$b("Clip",u,{min:p,max:g})},975854:u=>{t.$b("Clip",u,void 0)},975906:(u,p)=>{t.$b("Elu",u,{alpha:p})},975964:u=>{t.$b("Gelu",u,void 0)},976016:u=>{t.$b("Relu",u,void 0)},976068:(u,p)=>{t.$b("LeakyRelu",u,{alpha:p})},976132:(u,p)=>{t.$b("ThresholdedRelu",u,{alpha:p})},976202:(u,p)=>{t.$b("Cast",u,{to:p})},976260:u=>{t.$b("Add",u,void 0)},976311:u=>{t.$b("Sub",u,void 0)},976362:u=>{t.$b("Mul",u,void 0)},976413:u=>{t.$b("Div",u,void 0)},976464:u=>{t.$b("Pow",u,void 0)},976515:u=>{t.$b("Equal",u,void 0)},976568:u=>{t.$b("Greater",u,void 0)},976623:u=>{t.$b("GreaterOrEqual",u,void 0)},976685:u=>{t.$b("Less",u,void 0)},976737:u=>{t.$b("LessOrEqual",u,void 0)},976796:(u,p,g,m,x)=>{t.$b("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},976971:(u,p,g,m,x)=>{t.$b("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977145:(u,p,g,m,x)=>{t.$b("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977319:(u,p,g,m,x)=>{t.$b("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977494:(u,p,g,m,x)=>{t.$b("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977668:(u,p,g,m,x)=>{t.$b("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977841:(u,p,g,m,x)=>{t.$b("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978014:(u,p,g,m,x)=>{t.$b("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978191:(u,p,g,m,x)=>{t.$b("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978371:(u,p,g,m,x)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978551:u=>{t.$b("Where",u,void 0)},978604:(u,p,g)=>{t.$b("Transpose",u,{perm:p?Array.from(($(),M).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},978728:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:it(g),format:m?"NHWC":"NCHW"})},978861:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:it(g),format:m?"NHWC":"NCHW"})},978994:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve,Sr)=>{t.$b("ConvTranspose",u,{format:Y?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[E,R],strides:[P],wIsConst:()=>!!($(),V)[ne>>>0],outputPadding:ve?Array.from(($(),M).subarray(Number(ve)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from(($(),M).subarray(Number(Le)>>>0,Number(Ve)>>>0)):[],activation:it(Sr)})},979427:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),M).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),M).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),M).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(($(),M).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!($(),V)[Y>>>0],outputPadding:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],outputShape:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:it(Ve)})},980088:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve,Sr)=>{t.$b("ConvTranspose",u,{format:Y?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[E,R],strides:[P],wIsConst:()=>!!($(),V)[ne>>>0],outputPadding:ve?Array.from(($(),M).subarray(Number(ve)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from(($(),M).subarray(Number(Le)>>>0,Number(Ve)>>>0)):[],activation:it(Sr)})},980521:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),M).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),M).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),M).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(($(),M).subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!($(),V)[Y>>>0],outputPadding:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],outputShape:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:it(Ve)})},981182:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981273:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("AveragePool",u,{format:Ve?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from(($(),M).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},981752:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981843:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("AveragePool",u,{format:Ve?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from(($(),M).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},982322:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982409:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("MaxPool",u,{format:Ve?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from(($(),M).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},982884:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982971:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve)=>{t.$b("MaxPool",u,{format:Ve?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from(($(),M).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from(($(),M).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},983446:(u,p,g,m,x)=>{t.$b("Gemm",u,{alpha:p,beta:g,transA:m,transB:x})},983550:u=>{t.$b("MatMul",u,void 0)},983604:(u,p,g,m)=>{t.$b("ArgMax",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},983712:(u,p,g,m)=>{t.$b("ArgMin",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},983820:(u,p)=>{t.$b("Softmax",u,{axis:p})},983883:(u,p)=>{t.$b("Concat",u,{axis:p})},983943:(u,p,g,m,x)=>{t.$b("Split",u,{axis:p,numOutputs:g,splitSizes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},984099:u=>{t.$b("Expand",u,void 0)},984153:(u,p)=>{t.$b("Gather",u,{axis:Number(p)})},984224:(u,p)=>{t.$b("GatherElements",u,{axis:Number(p)})},984303:(u,p)=>{t.$b("GatherND",u,{batch_dims:Number(p)})},984382:(u,p,g,m,x,E,R,P,Y,ne,ve)=>{t.$b("Resize",u,{antialias:p,axes:g?Array.from(($(),M).subarray(Number(g)>>>0,Number(m)>>>0)):[],coordinateTransformMode:it(x),cubicCoeffA:E,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:it(Y),mode:it(ne),nearestMode:it(ve)})},984744:(u,p,g,m,x,E,R)=>{t.$b("Slice",u,{starts:p?Array.from(($(),M).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[],axes:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},985008:u=>{t.$b("Tile",u,void 0)},985060:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},985174:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},985288:u=>{t.$b("Range",u,void 0)},985341:(u,p)=>{t.$b("Einsum",u,{equation:it(p)})},985422:(u,p,g,m,x)=>{t.$b("Pad",u,{mode:p,value:g,pads:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},985565:(u,p,g,m,x,E)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:E?"NHWC":"NCHW"})},985734:(u,p,g,m,x,E)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:E?"NHWC":"NCHW"})},985903:(u,p,g)=>{t.$b("CumSum",u,{exclusive:Number(p),reverse:Number(g)})},986e3:(u,p,g)=>{t.$b("DequantizeLinear",u,{axis:p,blockSize:g})},986090:(u,p,g,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:it(g),padding_mode:it(m),format:x?"NHWC":"NCHW"})},986260:(u,p,g,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:it(g),padding_mode:it(m),format:x?"NHWC":"NCHW"})},986430:(u,p)=>{t.$b("ScatterND",u,{reduction:it(p)})},986515:(u,p,g,m,x,E,R,P,Y)=>{t.$b("Attention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:E,qkvHiddenSizes:R?Array.from(($(),M).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!Y})},986787:u=>{t.$b("BiasAdd",u,void 0)},986842:u=>{t.$b("BiasSplitGelu",u,void 0)},986903:u=>{t.$b("FastGelu",u,void 0)},986959:(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve,Sr,Ms)=>{t.$b("Conv",u,{format:Ce?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from(($(),M).subarray(Number(g)>>>0,Number(m)>>>0)):[],group:x,kernel_shape:E?Array.from(($(),M).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:P?Array.from(($(),M).subarray(Number(P)>>>0,Number(Y)>>>0)):[],strides:ne?Array.from(($(),M).subarray(Number(ne)>>>0,Number(ve)>>>0)):[],w_is_const:()=>!!($(),V)[Number(Le)>>>0],activation:it(Ve),activation_params:Sr?Array.from(($(),H).subarray(Number(Sr)>>>0,Number(Ms)>>>0)):[]})},987543:u=>{t.$b("Gelu",u,void 0)},987595:(u,p,g,m,x,E,R,P,Y)=>{t.$b("GroupQueryAttention",u,{numHeads:p,kvNumHeads:g,scale:m,softcap:x,doRotary:E,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:Y})},987812:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},987923:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},988034:(u,p,g,m,x,E)=>{t.$b("MatMulNBits",u,{k:p,n:g,accuracyLevel:m,bits:x,blockSize:E})},988161:(u,p,g,m,x,E)=>{t.$b("MultiHeadAttention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:E})},988320:(u,p)=>{t.$b("QuickGelu",u,{alpha:p})},988384:(u,p,g,m,x)=>{t.$b("RotaryEmbedding",u,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:m,scale:x})},988523:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},988625:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},988727:(u,p,g,m)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:g,blockSize:m})},988848:u=>{t.Fd(u)},988882:(u,p)=>t.Hd(Number(u),Number(p),t.Yc.Kd,t.Yc.errors)};function wy(u,p,g){return Ll(async()=>{await t.Dd(Number(u),Number(p),Number(g))})}function vy(){return typeof wasmOffsetConverter<"u"}function $y(u,p,g,m){var x=Te();try{return $u(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function xy(u,p,g){var m=Te();try{return _u(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;Ee(1,0)}}function Sy(u){var p=Te();try{mu(u)}catch(g){if(Se(p),g!==g+0)throw g;Ee(1,0)}}function ky(u,p){var g=Te();try{return Os(u,p)}catch(m){if(Se(g),m!==m+0)throw m;Ee(1,0)}}function Ty(u,p,g){var m=Te();try{hu(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;Ee(1,0)}}function Ey(u,p){var g=Te();try{xu(u,p)}catch(m){if(Se(g),m!==m+0)throw m;Ee(1,0)}}function Iy(u,p,g,m,x,E,R){var P=Te();try{return wu(u,p,g,m,x,E,R)}catch(Y){if(Se(P),Y!==Y+0)throw Y;Ee(1,0)}}function Cy(u,p,g,m,x,E){var R=Te();try{gu(u,p,g,m,x,E)}catch(P){if(Se(R),P!==P+0)throw P;Ee(1,0)}}function zy(u,p,g,m){var x=Te();try{vu(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function Ay(u,p,g,m,x){var E=Te();try{bu(u,p,g,m,x)}catch(R){if(Se(E),R!==R+0)throw R;Ee(1,0)}}function Oy(u,p,g,m,x,E,R){var P=Te();try{ku(u,p,g,m,x,E,R)}catch(Y){if(Se(P),Y!==Y+0)throw Y;Ee(1,0)}}function Ry(u,p,g,m,x,E,R){var P=Te();try{Tu(u,p,g,m,x,E,R)}catch(Y){if(Se(P),Y!==Y+0)throw Y;Ee(1,0)}}function My(u,p,g,m,x,E,R,P){var Y=Te();try{zu(u,p,g,m,x,E,R,P)}catch(ne){if(Se(Y),ne!==ne+0)throw ne;Ee(1,0)}}function By(u,p,g,m,x){var E=Te();try{return Su(u,p,g,m,x)}catch(R){if(Se(E),R!==R+0)throw R;Ee(1,0)}}function Ny(u,p,g){var m=Te();try{return Au(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;Ee(1,0)}}function Dy(u,p,g,m,x,E,R,P){var Y=Te();try{Ou(u,p,g,m,x,E,R,P)}catch(ne){if(Se(Y),ne!==ne+0)throw ne;Ee(1,0)}}function Py(u,p,g,m,x,E,R,P,Y,ne,ve,Ce){var Le=Te();try{Eu(u,p,g,m,x,E,R,P,Y,ne,ve,Ce)}catch(Ve){if(Se(Le),Ve!==Ve+0)throw Ve;Ee(1,0)}}function Uy(u,p,g,m,x,E){var R=Te();try{return Iu(u,p,g,m,x,E)}catch(P){if(Se(R),P!==P+0)throw P;Ee(1,0)}}function Ly(u,p,g){var m=Te();try{return Ru(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;return Ee(1,0),0n}}function qy(u,p,g,m,x,E,R,P,Y){var ne=Te();try{yu(u,p,g,m,x,E,R,P,Y)}catch(ve){if(Se(ne),ve!==ve+0)throw ve;Ee(1,0)}}function Wy(u){var p=Te();try{return Mu(u)}catch(g){if(Se(p),g!==g+0)throw g;Ee(1,0)}}function Fy(u,p){var g=Te();try{return Xu(u,p)}catch(m){if(Se(g),m!==m+0)throw m;return Ee(1,0),0n}}function Vy(u){var p=Te();try{return Bu(u)}catch(g){if(Se(p),g!==g+0)throw g;return Ee(1,0),0n}}function Hy(u,p,g,m){var x=Te();try{return qu(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function Gy(u,p,g,m,x){var E=Te();try{return Wu(u,p,g,m,x)}catch(R){if(Se(E),R!==R+0)throw R;Ee(1,0)}}function jy(u,p,g,m,x,E){var R=Te();try{return Fu(u,p,g,m,x,E)}catch(P){if(Se(R),P!==P+0)throw P;Ee(1,0)}}function Ky(u,p,g,m,x,E){var R=Te();try{return Vu(u,p,g,m,x,E)}catch(P){if(Se(R),P!==P+0)throw P;Ee(1,0)}}function Xy(u,p,g,m,x,E,R,P){var Y=Te();try{return Cu(u,p,g,m,x,E,R,P)}catch(ne){if(Se(Y),ne!==ne+0)throw ne;Ee(1,0)}}function Zy(u,p,g,m,x){var E=Te();try{return Hu(u,p,g,m,x)}catch(R){if(Se(E),R!==R+0)throw R;return Ee(1,0),0n}}function Qy(u,p,g,m){var x=Te();try{return Gu(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function Yy(u,p,g,m){var x=Te();try{return ju(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function Jy(u,p,g,m,x,E,R,P,Y,ne,ve,Ce){var Le=Te();try{return Ku(u,p,g,m,x,E,R,P,Y,ne,ve,Ce)}catch(Ve){if(Se(Le),Ve!==Ve+0)throw Ve;Ee(1,0)}}function ew(u,p,g,m,x,E,R,P,Y,ne,ve){var Ce=Te();try{Uu(u,p,g,m,x,E,R,P,Y,ne,ve)}catch(Le){if(Se(Ce),Le!==Le+0)throw Le;Ee(1,0)}}function tw(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve,Sr,Ms){var sw=Te();try{Lu(u,p,g,m,x,E,R,P,Y,ne,ve,Ce,Le,Ve,Sr,Ms)}catch(Bs){if(Se(sw),Bs!==Bs+0)throw Bs;Ee(1,0)}}function rw(u,p,g){var m=Te();try{return Nu(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;Ee(1,0)}}function iw(u,p,g){var m=Te();try{return Du(u,p,g)}catch(x){if(Se(m),x!==x+0)throw x;Ee(1,0)}}function nw(u,p,g,m){var x=Te();try{Pu(u,p,g,m)}catch(E){if(Se(x),E!==E+0)throw E;Ee(1,0)}}function vn(){if(0<Be)pt=vn;else if(n)y?.(t),le();else{for(var u=Ae;0<u.length;)u.shift()(t);0<Be?pt=vn:(t.calledRun=!0,O||(le(),y?.(t)))}}return n||(or=await Fe(),vn()),t.PTR_SIZE=4,L?t:new Promise((u,p)=>{y=u,S=p})}var qm,Nd,E1=X(()=>{qm=Bd,Nd=globalThis.self?.name?.startsWith("em-pthread"),Nd&&Bd()}),ea,ro,Dd,St,Wm,Tn,Pd,Ud,ta,Ld,ra,Fm,ia,Vm,Ho=X(()=>{Vo(),ea=typeof location>"u"?void 0:location.origin,ro=import.meta.url>"file:"&&import.meta.url<"file;",Dd=()=>{{if(ro){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ea).href}return import.meta.url}},St=Dd(),Wm=()=>{if(St&&!St.startsWith("blob:"))return St.substring(0,St.lastIndexOf("/")+1)},Tn=(e,t)=>{try{let r=t??St;return(r?new URL(e,r):new URL(e)).origin===ea}catch{return!1}},Pd=(e,t)=>{let r=t??St;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ud=(e,t)=>`${t??"./"}${e}`,ta=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ld=async e=>(await import(e)).default,ra=(T1(),rn(Pm)).default,Fm=async()=>{if(!St)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Tn(St))return[void 0,ra()];let e=await ta(St);return[e,ra(e)]},ia=(E1(),rn(Lm)).default,Vm=async(e,t,r,i)=>{let n=ia&&!(e||t);if(n)if(St)n=Tn(St)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,ia];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Pd(s,t),o=r&&a&&!Tn(a,t),l=o?await ta(a):a??Ud(s,t);return[o?l:void 0,await Ld(l)]}}}),na,En,Ti,sa,qd,Wd,Fd,Go,qe,ti=X(()=>{Ho(),En=!1,Ti=!1,sa=!1,qd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Wd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Go=async e=>{if(En)return Promise.resolve();if(Ti)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(sa)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ti=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Fd())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Wd())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=qd();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n?.mjs,o=a?.href??a,l=n?.wasm,d=l?.href??l,c=e.wasmBinary,[f,h]=await Vm(o,s,r>1,!!c||!!d),b=!1,_=[];if(t>0&&_.push(new Promise(y=>{setTimeout(()=>{b=!0,y()},t)})),_.push(new Promise((y,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(d||s)v.locateFile=w=>d??s+w;else if(o&&o.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,o).href;else if(f){let w=Wm();w&&(v.locateFile=T=>w+T)}h(v).then(w=>{Ti=!1,En=!0,na=w,y(),f&&URL.revokeObjectURL(f)},w=>{Ti=!1,sa=!0,S(w)})})),await Promise.race(_),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},qe=()=>{if(En&&na)return na;throw new Error("WebAssembly is not initialized yet.")}}),Lt,Qn,Ne,jo=X(()=>{ti(),Lt=(e,t)=>{let r=qe(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Qn=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")Qn(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Ne=e=>{let t=qe(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let s=Number(t.getValue(n,i===4?"i32":"i64")),a=t.getValue(n+i,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Hm,I1=X(()=>{ti(),jo(),Hm=e=>{let t=qe(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Lt(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&Ne("Can't create run options."),e?.extra!==void 0&&Qn(e.extra,"",new WeakSet,(a,o)=>{let l=Lt(a,i),d=Lt(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Ne(`Can't set a run config entry: ${a} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),Vd,Hd,Gd,Pr,jd,Gm,C1=X(()=>{ti(),jo(),Vd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Hd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Gd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Pr=(e,t,r,i)=>{let n=Lt(t,i),s=Lt(r,i);qe()._OrtAddSessionConfigEntry(e,n,s)!==0&&Ne(`Can't set a session config entry: ${t} - ${r}.`)},jd=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let s=typeof n=="string"?n:n.name,a=[];switch(s){case"webnn":if(s="WEBNN",Pr(e,"session.disable_quant_qdq","1",r),Pr(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let f=n?.deviceType;f&&Pr(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof n!="string"){let f=n;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Pr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Lt(s,r),l=a.length,d=0,c=0;if(l>0){d=qe()._malloc(l*qe().PTR_SIZE),r.push(d),c=qe()._malloc(l*qe().PTR_SIZE),r.push(c);for(let f=0;f<l;f++)qe().setValue(d+f*qe().PTR_SIZE,a[f][0],"*"),qe().setValue(c+f*qe().PTR_SIZE,a[f][1],"*")}await qe()._OrtAppendExecutionProvider(e,o,d,c,l)!==0&&Ne(`Can't append execution provider: ${s}.`)}},Gm=async e=>{let t=qe(),r=0,i=[],n=e||{};Gd(n);try{let s=Vd(n.graphOptimizationLevel??"all"),a=Hd(n.executionMode??"sequential"),o=typeof n.logId=="string"?Lt(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Lt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,o,l,d,c),r===0&&Ne("Can't create session options."),n.executionProviders&&await jd(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Pr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let b=Lt(f,i);t._OrtAddFreeDimensionOverride(r,b,h)!==0&&Ne(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&Qn(n.extra,"",new WeakSet,(f,h)=>{Pr(r,f,h,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Ne("Can't release session options."),i.forEach(a=>t._free(a)),s}}}),Hr,fr,Gr,ms,Yn,Ko,Xo,io,me=X(()=>{Hr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Gr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,s)=>n*s,1);return r>0?Math.ceil(i*r):void 0},ms=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Yn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ko=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",io=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Zo,jm=X(()=>{Vo(),Zo=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Kd,Xd,Zd,Qd,Qo,Yd,Ie,wr=X(()=>{me(),Kd=["V","I","W","E","F"],Xd=(e,t)=>{console.log(`[${Kd[e]},${new Date().toISOString()}]${t}`)},Qo=(e,t)=>{Zd=e,Qd=t},Yd=(e,t)=>{let r=Yn(e),i=Yn(Zd);r>=i&&Xd(r,typeof t=="function"?t():t)},Ie=(...e)=>{Qd&&Yd(...e)}}),Jd,gi,N,Jn,Km,Xm,Zm,ye=X(()=>{Jd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},gi=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let o=Jd.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},N=class qn{static size(t){return qn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return qn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return qn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[s])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Jn=class Ui{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Ui.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],i[l],n[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Ui.computeShapeHelper(t,r,l,i,n,s,a,o),l}static computeConvOutputShape(t,r,i,n,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Ui.computeShapeHelper(!1,t,l,i,n,s,a,o),l}static computeShapeHelper(t,r,i,n,s,a,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Ui.adjustPadAndReturnShape(r[d+2],n[d],s[d],a[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,s,a,o,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},Km=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(n&&!gi.isValidBroadcast(n,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Xm=-34028234663852886e22,Zm=34028234663852886e22}),Yo,Qm=X(()=>{me(),Yo=(e,t)=>new(ms(t))(e)}),aa,no,oa,ec,la,tc,ua,da,ca,rc,Ym,z1=X(()=>{me(),wr(),aa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),no=(e,t)=>{if(t==="int32")return e;let r=aa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,s=new(ms(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let a=new Int32Array(n);for(let o=0;o<n;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},oa=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ec=1,la=()=>ec++,tc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ua=(e,t)=>{let r=aa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},da=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ua(this.dataType,this.tensorShape)}destroy(){Ie("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=oa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},ca=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=tc.get(t),!a||s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);Ie("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ua(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=no(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ie("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?oa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},rc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=la();return this.tensorTrackersById.set(e,new ca(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){Ie("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ie("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),s=la(),a=new da({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new ca(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,i,n,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){Ie("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}Ie("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:i,writable:n,readable:s});return new da({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ym=(...e)=>new rc(...e)}),Ei,ic,Jm,A1=X(()=>{me(),ti(),Qm(),z1(),wr(),Ei=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ic=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,s)=>n===i[s]&&e[n]===t[n])},Jm=class{constructor(e){this.tensorManager=Ym(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ie("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ie("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ie("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>ic(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ie("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let s=Ei.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,n)}async createTemporaryTensor(e,t,r){Ie("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Ei.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!qe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ie("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Yo(r,t)}}registerMLTensor(e,t,r,i){let n=Ei.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,n,i);return Ie("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,n,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let f=no(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return Ie("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Ei.get(Hr(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),Jo=X(()=>{}),pa,In,Cn,nc,sc,fa,so,ac,eg,O1=X(()=>{wr(),Jo(),pa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),In=[],Cn=e=>Math.ceil(Number(e)/16)*16,nc=e=>{for(let t=0;t<In.length;t++){let r=In[t];if(e<=r)return r}return Math.ceil(e/16)*16},sc=1,fa=()=>sc++,so=async(e,t,r,i)=>{let n=Cn(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},ac=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of pa)In.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=Cn(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),Ie("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Cn(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=fa();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ie("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=nc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:fa(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ie("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ie("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await so(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=pa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ie("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},eg=(...e)=>new ac(...e)}),oc,Me,et=X(()=>{oc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Me=e=>new oc(e)}),bi,zn,st,ft,fe,Qe,ao,li,Or,ce,Ii,U,de,tg,el,lc,rg,we=X(()=>{me(),ye(),bi=64,zn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},st=(e,t=1)=>{let r=zn(e,t);return typeof r=="string"?r:r[0]},ft=(e,t=1)=>{let r=zn(e,t);return typeof r=="string"?r:r[1]},fe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:N.computeStrides(r)})}),t},Qe=e=>e%4===0?4:e%2===0?2:1,ao=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,li=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Or=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ce=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ii=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=zn(t,n),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},b=L=>typeof L=="string"?L:`${L}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",S=`${y}${e}_shape`,v=`${y}${e}_strides`,w="";for(let L=0;L<a-1;L++)w+=`
    let dim${L} = current / ${ce(v,L,a)};
    let rest${L} = current % ${ce(v,L,a)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;w+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=L=>(_.offsetToIndices=!0,a<2?L:`o2i_${e}(${L})`),I=[];if(a>=2)for(let L=a-1;L>=0;L--)I.push(`${ce(v,L,a)} * (indices[${L}])`);let O=a<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${I.join("+")};
  }`,A=L=>(_.indicesToOffset=!0,a<2?L:`i2o_${e}(${L})`),$=(...L)=>a===0?"0u":`${h.indices}(${L.map(b).join(",")})`,q=(L,oe)=>a<2?`${L}`:`${ce(L,oe,a)}`,V=(L,oe,le)=>a<2?`${L}=${le};`:`${ce(L,oe,a)}=${le};`,ue={},ie=(L,oe)=>{_.broadcastedIndicesToOffset=!0;let le=`${oe.name}broadcastedIndicesTo${e}Offset`;if(le in ue)return`${le}(${L})`;let Z=[];for(let Ke=a-1;Ke>=0;Ke--){let Fe=oe.indicesGet("outputIndices",Ke+oe.rank-a);Z.push(`${q(v,Ke)} * (${Fe} % ${q(S,Ke)})`)}return ue[le]=`fn ${le}(outputIndices: ${oe.type.indices}) -> u32 {
             return ${Z.length>0?Z.join("+"):"0u"};
           }`,`${le}(${L})`},K=(L,oe)=>(()=>{if(h.storage===h.value)return`${e}[${L}]=${oe};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${oe}), select(0u, 0xFFFFFFFFu, ${oe} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${oe}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${oe}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),M=L=>(()=>{if(h.storage===h.value)return`${e}[${L}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${L}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${L}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),D=a<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${M(`i2o_${e}(indices)`)};
  }`,H=a<2?"":(()=>{let L=o.map(le=>`d${le}: u32`).join(", "),oe=o.map(le=>`d${le}`).join(", ");return`
  fn get_${e}(${L}) -> ${c} {
    return get_${e}ByIndices(${$(oe)});
  }`})(),ee=(...L)=>{if(L.length!==a)throw new Error(`indices length must be ${a}`);let oe=L.map(b).join(",");return a===0?M("0u"):a===1?M(oe[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${oe})`)},Q=L=>a<2?M(L):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${L})`),pe=a<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,be=a<2?"":(()=>{let L=o.map(le=>`d${le}: u32`).join(", "),oe=o.map(le=>`d${le}`).join(", ");return`
  fn set_${e}(${L}, value: ${c}) {
    set_${e}ByIndices(${$(oe)}, value);
  }`})();return{impl:()=>{let L=[],oe=!1;return _.offsetToIndices&&(L.push(T),oe=!0),_.indicesToOffset&&(L.push(O),oe=!0),_.broadcastedIndicesToOffset&&(Object.values(ue).forEach(le=>L.push(le)),oe=!0),_.set&&(L.push(be),oe=!0),_.setByIndices&&(L.push(pe),oe=!0),_.get&&(L.push(H),oe=!0),_.getByIndices&&(L.push(D),oe=!0),!s&&oe&&L.unshift(`const ${S} = ${h.indices}(${r.join(",")});`,`const ${v} = ${h.indices}(${N.computeStrides(r).join(",")});`),L.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:A,broadcastedIndicesToOffset:ie,indices:$,indicesGet:q,indicesSet:V,set:(...L)=>{if(L.length!==a+1)throw new Error(`indices length must be ${a}`);let oe=L[a];if(typeof oe!="string")throw new Error("value must be string");let le=L.slice(0,a).map(b).join(",");return a===0?K("0u",oe):a===1?K(le[0],oe):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${le}, ${oe})`)},setByOffset:K,setByIndices:(L,oe)=>a<2?K(L,oe):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${oe});`),get:ee,getByOffset:M,getByIndices:Q,usage:i,name:e,strides:v,shape:S,rank:a}},U=(e,t,r,i=1)=>Ii(e,t,r,"input",i),de=(e,t,r,i=1)=>Ii(e,t,r,"output",i),tg=(e,t,r)=>Ii(e,t,r,"atomicOutput",1),el=(e,t,r,i=1)=>Ii(e,t,r,"internal",i),lc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=bi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},rg=(e,t)=>new lc(e,t)}),uc,ha,dc,cc,pc,fc,It,ig,ng,Rr=X(()=>{me(),ye(),et(),we(),uc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ha=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),dc=(e,t)=>N.sortBasedOnPerm(e,ha(e.length,t)),cc=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)n+=`a[${e[s]}]=i[${s}];`;return n+="return a;}"},pc=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},fc=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},It=(e,t)=>{let r=e.dataType,i=e.dims.length,n=ha(i,t),s=dc(e.dims,n),a=e.dims,o=s,l=i<2||fc(n,e.dims),d;if(l)return d=_=>{let y=U("input",r,a,4),S=de("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=N.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=pc(e.dims,n),h=N.areEqual(f,[2,3,1]),b=N.areEqual(f,[3,1,2]);if(c.length===2||h||b){a=h?[c[0],c[1]*c[2]]:b?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let _=16;return d=y=>{let S=U("a",r,a.length),v=de("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=N.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:y},...fe(a,o)]}},getShaderSource:d}}return d=_=>{let y=U("a",r,a.length),S=de("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,S)}

  ${cc(n,i,y,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=N.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...fe(a,o)]}},getShaderSource:d}},ig=(e,t)=>{uc(e.inputs,t.perm),e.compute(It(e.inputs[0],t.perm))},ng=e=>Me({perm:e.perm})}),hc,mc,gc,bc,_c,yc,wc,vc,$c,xc,Bt,sg,ag,og,lg,ug,dg,cg,pg,fg,hg,R1=X(()=>{me(),ye(),we(),tl(),Rr(),hc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},mc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},gc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},bc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},_c=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},yc=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},wc=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},vc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$c=(e,t)=>{let r=[];if(!vc(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},xc=(e,t,r,i,n,s,a)=>{let o=r[0].dims,l=N.size(s),d=N.size(a),c=U("_A",r[0].dataType,o),f=de("output",n,s),h=64;l===1&&(h=256);let b=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${gc[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${hc[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${mc[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${bc[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Bt=(e,t,r,i)=>{let n=e.inputs.length===1?r:oo(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,_)=>_));let a=N.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=$c(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(It(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=_c(o.length,l.dims.length));let[c,f]=yc(l.dims,o),h=c;n.keepDims&&(h=wc(c,a)),e.compute(xc(t,n.cacheKey,[l],i,e.inputs[0].dataType,h,f),{inputs:[l]})},sg=(e,t)=>{Bt(e,"ReduceMeanShared",t,"mean")},ag=(e,t)=>{Bt(e,"ReduceL1Shared",t,"l1")},og=(e,t)=>{Bt(e,"ReduceL2Shared",t,"l2")},lg=(e,t)=>{Bt(e,"ReduceLogSumExpShared",t,"logSumExp")},ug=(e,t)=>{Bt(e,"ReduceMaxShared",t,"max")},dg=(e,t)=>{Bt(e,"ReduceMinShared",t,"min")},cg=(e,t)=>{Bt(e,"ReduceProdShared",t,"prod")},pg=(e,t)=>{Bt(e,"ReduceSumShared",t,"sum")},fg=(e,t)=>{Bt(e,"ReduceSumSquareShared",t,"sumSquare")},hg=(e,t)=>{Bt(e,"ReduceLogSumShared",t,"logSum")}}),Nt,Sc,es,oo,Dt,kc,Tc,Ec,Ic,Cc,zc,Ac,Oc,Rc,Mc,Pt,mg,gg,bg,_g,yg,wg,vg,$g,xg,Sg,tl=X(()=>{me(),ye(),et(),we(),R1(),Nt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Sc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],es=(e,t,r,i,n,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,f=N.normalizeAxes(n,c),h=!o&&f.length===0;d.forEach((y,S)=>{h||f.indexOf(S)>=0?a&&l.push(1):l.push(y)});let b=l.length,_=N.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let S=[],v=U("_A",r[0].dataType,c),w=de("output",s,b),T=i(v,w,f),k=T[2];for(let I=0,O=0;I<c;I++)h||f.indexOf(I)>=0?(a&&O++,k=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",I,w.indicesGet("output_indices",O))};`),O++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,w)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...fe(d,l)]})}},oo=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Dt=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:oo(n,r);e.compute(es(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?Sc:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},kc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Tc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ec=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ic=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Cc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},zc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Ac=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Oc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Rc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Mc=(e,t)=>{Nt(e.inputs),Dt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Pt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},mg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zc(e,t):sg(e,t)},gg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tc(e,t):ag(e,t)},bg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ec(e,t):og(e,t)},_g=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ic(e,t):lg(e,t)},yg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cc(e,t):ug(e,t)},wg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ac(e,t):dg(e,t)},vg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):cg(e,t)},$g=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rc(e,t):pg(e,t)},xg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mc(e,t):fg(e,t)},Sg=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kc(e,t):hg(e,t)}}),ma,kg,Tg,lo,M1=X(()=>{me(),et(),tl(),ma=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},kg=(e,t)=>{ma(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(es("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Tg=(e,t)=>{ma(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(es("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},lo=e=>Me(e)}),Bc,An,Nc,Dc,Pc,nn,Uc,Eg,rl=X(()=>{me(),ye(),Jo(),we(),Bc=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,b=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let _=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(h!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let S=_+y,v=-1,w=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:b,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},An=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Nc=(e,t,r,i,n,s,a,o)=>{let l=Qe(a?1:s),d=64,c=s/l;c<d&&(d=32);let f=Math.ceil(s/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:f}],b=st(e.dataType,l),_=ft(1,l),y=["type"];a&&y.push("type"),o&&y.push("type");let S=v=>{let w=de("x",e.dataType,e.dims,l),T=[w],k=a?U("seq_lens",a.dataType,a.dims):void 0;k&&T.push(k);let I=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let O=ft(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(A).declareVariables(...T)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${An(k,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${O}(1.0) / ${O}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${O}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${l}`,inputDependencies:y},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:h})}},Dc=(e,t,r,i,n,s,a,o,l)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&i,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=f?[s.batchSize,h,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=Qe(s.headSize),v=s.headSize/S,w=12,T={x:Math.ceil(d/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},k=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],I=f&&i&&N.size(i.dims)>0,O=["type","type"];I&&O.push("type"),n&&O.push("type"),o&&O.push("type"),l&&O.push("type");let A=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&A.push({dims:b,dataType:t.dataType,gpuDataType:0});let $=q=>{let V=U("q",t.dataType,t.dims,S),ue=U("key",r.dataType,r.dims,S),ie=[V,ue];if(I){let pe=U("past_key",i.dataType,i.dims,S);ie.push(pe)}n&&ie.push(U("attention_bias",n.dataType,n.dims));let K=o?U("seq_lens",o.dataType,o.dims):void 0;K&&ie.push(K);let M=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;M&&ie.push(M);let D=de("output",t.dataType,c),H=[D];f&&H.push(de("present_key",t.dataType,b,S));let ee=ft(1,S),Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${V.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${V.type.storage}, ${w*w}>;
  ${q.registerUniforms(Q).declareVariables(...ie,...H)}
  ${q.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${An(K,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${D.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:A,dispatchGroup:T,programUniforms:k}),getShaderSource:$}},Pc=(e,t,r,i,n,s,a=void 0,o=void 0)=>{let l=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,f=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,b=f?[n.batchSize,h,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],y=12,S={x:Math.ceil(n.vHeadSize/y),y:Math.ceil(n.sequenceLength/y),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&i&&N.size(i.dims)>0,T=["type","type"];w&&T.push("type"),a&&T.push("type"),o&&T.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:b,dataType:t.dataType,gpuDataType:0});let I=O=>{let A=U("probs",t.dataType,t.dims),$=U("v",r.dataType,r.dims),q=[A,$];w&&q.push(U("past_value",i.dataType,i.dims));let V=a?U("seq_lens",a.dataType,a.dims):void 0;a&&q.push(V);let ue=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;o&&q.push(ue);let ie=[de("output",t.dataType,_)];f&&ie.push(de("present_value",t.dataType,b));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${A.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${A.type.value}, ${y*y}>;
  ${O.registerUniforms(K).declareVariables(...q,...ie)}
  ${O.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${An(V,ue,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:I}},nn=(e,t,r,i,n,s,a,o,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),b=h>1?a:void 0,_=h>1?o:void 0,y=h>1?d.pastSequenceLength:0,S=y+d.kvSequenceLength,v=l&&N.size(l.dims)>0?l:void 0,w=[t,r];b&&N.size(b.dims)>0&&w.push(b),v&&w.push(v),c&&w.push(c),f&&w.push(f);let T=e.compute(Dc(h,t,r,b,v,d,y,c,f),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Nc(T,d.batchSize,d.numHeads,y,d.sequenceLength,S,c,f),{inputs:c&&f?[T,c,f]:[T],outputs:[]});let k=[T,i];_&&N.size(_.dims)>0&&k.push(_),c&&k.push(c),f&&k.push(f),e.compute(Pc(h,T,i,_,d,y,c,f),{inputs:k,outputs:h>1?[0,2]:[0]})},Uc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=de("output_q",l[0].dataType,r),b=de("output_k",l[0].dataType,r),_=de("output_v",l[0].dataType,r),y=U("input",l[0].dataType,l[0].dims),S=U("weight",l[1].dataType,l[1].dims),v=U("bias",l[2].dataType,l[2].dims),w=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${w}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${w}, ${a*a}>;
  var<workgroup> tileWeightK: array<${w}, ${a*a}>;
  var<workgroup> tileWeightV: array<${w}, ${a*a}>;
  ${f.registerUniforms(T).declareVariables(y,S,v,h,b,_)}
  ${f.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Eg=(e,t)=>{let r=Bc(e.inputs,t),[i,n,s]=Uc(e,r);return nn(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Lc,qc,Wc,Ig,B1=X(()=>{Rt(),me(),ye(),et(),we(),Lc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},qc=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?Qe(s[s.length-1]):1,o=n==="NHWC"&&s.length>1?a:1,l=N.size(s)/a,d=i,c=d?s.length:s,f=U("x",e[0].dataType,e[0].dims,a),h=U("scale",e[1].dataType,e[1].dims,o),b=U("bias",e[2].dataType,e[2].dims,o),_=U("inputMean",e[3].dataType,e[3].dims,o),y=U("inputVar",e[4].dataType,e[4].dims,o),S=de("y",e[0].dataType,c,a),v=()=>{let T="";if(i)T=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let k=1;k<h.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(f,h,b,_,y,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...fe(s)]:[{type:12,data:l}]})}},Wc=e=>Me(e),Ig=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Wc({...t,outputCount:i});if(He.webgpu.validateInputContent&&Lc(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(qc(r,n))}}),Fc,Vc,Cg,N1=X(()=>{ye(),we(),Fc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Vc=e=>{let t=e[0].dims,r=e[0].dims[2],i=N.size(t)/4,n=e[0].dataType,s=U("input",n,t,4),a=U("bias",n,[r],4),o=U("residual",n,t,4),l=de("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Cg=e=>{Fc(e.inputs),e.compute(Vc(e.inputs))}}),Hc,Oe,zg,Ag,Og,Rg,Mg,Bg,Ng,Dg,Pg,Gc,Ug,Lg,qg,Wg,Li,Fg,Wn,Vg,Hg,Gg,jg,Kg,Xg,Zg,Qg,Yg,Jg,e0,t0,r0,i0,n0,s0,ga,a0,uo,co,o0,l0,u0,jc,Kc,d0,il=X(()=>{me(),ye(),et(),we(),Hc=(e,t,r,i,n,s,a)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=U("inputData",r,[o],4),c=de("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return a&&f.push(...a),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},Oe=(e,t,r,i,n,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(N.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Hc(d,N.size(e.dims),e.dataType,s,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(N.size(d[0].dims)/64/4)},programUniforms:l})}},zg=e=>{e.compute(Oe(e.inputs[0],"Abs","abs"))},Ag=e=>{e.compute(Oe(e.inputs[0],"Acos","acos"))},Og=e=>{e.compute(Oe(e.inputs[0],"Acosh","acosh"))},Rg=e=>{e.compute(Oe(e.inputs[0],"Asin","asin"))},Mg=e=>{e.compute(Oe(e.inputs[0],"Asinh","asinh"))},Bg=e=>{e.compute(Oe(e.inputs[0],"Atan","atan"))},Ng=e=>{e.compute(Oe(e.inputs[0],"Atanh","atanh"))},Dg=e=>Me(e),Pg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Oe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Gc=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Me({min:t,max:r})},Ug=(e,t)=>{let r=t||Gc(e.inputs),i=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Lg=e=>{e.compute(Oe(e.inputs[0],"Ceil","ceil"))},qg=e=>{e.compute(Oe(e.inputs[0],"Cos","cos"))},Wg=e=>{e.compute(Oe(e.inputs[0],"Cosh","cosh"))},Li=e=>Me(e),Fg=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Wn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vg=e=>{let t=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Wn(t)))},Hg=e=>{e.compute(Oe(e.inputs[0],"Exp","exp"))},Gg=e=>{e.compute(Oe(e.inputs[0],"Floor","floor"))},jg=e=>{let t=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Wn(t)))},Kg=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Xg=e=>{e.compute(Oe(e.inputs[0],"Not",t=>`!${t}`))},Zg=e=>{e.compute(Oe(e.inputs[0],"Neg",t=>`-${t}`))},Qg=e=>{e.compute(Oe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Yg=e=>{let t=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Jg=e=>{e.compute(Oe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},e0=e=>Me(e),t0=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},r0=e=>{e.compute(Oe(e.inputs[0],"Sin","sin"))},i0=e=>{e.compute(Oe(e.inputs[0],"Sinh","sinh"))},n0=e=>{e.compute(Oe(e.inputs[0],"Sqrt","sqrt"))},s0=e=>{e.compute(Oe(e.inputs[0],"Tan","tan"))},ga=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,a0=e=>{e.compute(Oe(e.inputs[0],"Tanh",ga))},uo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ga("v")};
}
`,co=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,o0=e=>{let t=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"FastGelu",co,uo(t),void 0,e.inputs[0].dataType))},l0=(e,t)=>{let r=ft(e.inputs[0].dataType);return e.compute(Oe(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},u0=e=>{e.compute(Oe(e.inputs[0],"Log","log"))},jc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Kc=e=>`quick_gelu_impl(${e})`,d0=(e,t)=>{let r=ft(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"QuickGelu",Kc,jc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Xc,Zc,c0,D1=X(()=>{ye(),we(),il(),Xc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),i=U("bias",e[0].dataType,[e[0].dims[2]],4),n=de("output",e[0].dataType,t,4),s=N.size(t)/4,a=st(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Wn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},c0=e=>{Xc(e.inputs),e.compute(Zc(e.inputs))}}),Qc,Yc,Ut,p0,f0,h0,m0,g0,b0,_0,y0,w0,v0,P1=X(()=>{me(),ye(),we(),Qc=(e,t,r,i,n,s,a,o,l,d,c,f)=>{let h,b;typeof o=="string"?h=b=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?h=b=o:(h=o.scalar,b=o.vector);let _=de("outputData",c,i.length,4),y=U("aData",l,t.length,4),S=U("bData",d,r.length,4),v;if(n)if(s){let w=N.size(t)===1,T=N.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||T?v=_.setByOffset("global_idx",b(w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",b(a||k?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",b(y.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,k,I="")=>{let O=`aData[indexA${k}][componentA${k}]`,A=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${y.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${I}(${h(O,A)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,S,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Yc=(e,t,r,i,n,s,a=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!N.areEqual(o,l),c=o,f=N.size(o),h=!1,b=!1,_=[d];if(d){let y=gi.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=N.size(c);let S=N.size(o)===1,v=N.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(v),_.push(w),_.push(T);let k=1;for(let I=1;I<c.length;I++){let O=o[o.length-I],A=l[l.length-I];if(O===A)k*=O;else break}k%4===0?(b=!0,h=!0):(S||v||w||T)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Qc(y,o,l,c,h,d,b,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(N.size(c)/4)},...fe(o,l,c)]})}},Ut=(e,t,r,i,n,s)=>{e.compute(Yc(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},p0=e=>{Ut(e,"Add",(t,r)=>`${t}+${r}`)},f0=e=>{Ut(e,"Div",(t,r)=>`${t}/${r}`)},h0=e=>{Ut(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},m0=e=>{Ut(e,"Mul",(t,r)=>`${t}*${r}`)},g0=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ut(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},b0=e=>{Ut(e,"Sub",(t,r)=>`${t}-${r}`)},_0=e=>{Ut(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},y0=e=>{Ut(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},w0=e=>{Ut(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},v0=e=>{Ut(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Jc,ep,tp,rp,$0,x0,U1=X(()=>{me(),ye(),et(),we(),Jc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},ep=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,tp=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},rp=(e,t,r,i)=>{let n=N.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:n}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],s[y]=o,d.push(e[y].dims.length),a[y]=U(`input${y}`,i,d[y]),l.push("rank"),c.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)c.push(...fe(e[y].dims));c.push(...fe(r));let f=de("output",i,r.length),h=f.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)y.registerUniform(`sizeInConcatAxis${S}`,"u32");return y.declareVariables(...a,f)})()}

  ${ep(s.length,b)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${tp(a,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},$0=(e,t)=>{let r=e.inputs,i=r[0].dims,n=N.normalizeAxis(t.axis,i.length);Jc(r,n);let s=i.slice();s[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let a=r.filter(o=>N.size(o.dims)>0);e.compute(rp(a,n,s,r[0].dataType),{inputs:a})},x0=e=>Me({axis:e.axis})}),Qr,Yr,Jr,nl,ri=X(()=>{me(),ye(),Qr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Yr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Jr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},nl=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Xm,Zm];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ot,S0,sl=X(()=>{ot=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},S0=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),k0,L1=X(()=>{k0=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Zi,al,ol=X(()=>{me(),ye(),we(),ri(),Zi=(e,t,r,i,n)=>{let s=i-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${ce(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ce(n,o+s,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},al=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],c=a[a.length-1],f=Qe(d),h=Qe(c),b=Qe(l),_=N.size(r)/f/b,y=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[N.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Yr(t,w),w.push(...fe(S,a,o)),y&&w.push(...fe(e[2].dims)),w.push(...fe(v));let T=k=>{let I=el("batch_dims",e[0].dataType,S.length),O=U("a",e[0].dataType,a.length,h),A=U("b",e[1].dataType,o.length,f),$=de("output",e[0].dataType,v.length,f),q=st($.type.tensor),V=Qr(t,$.type.value,q),ue=[O,A],ie="";if(y){let D=n?f:1;ue.push(U("bias",e[2].dataType,e[2].dims.length,D)),ie=`${n?`value += bias[col / ${D}];`:`value += ${$.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Jr(t,K);let M=()=>{let D=`var a_data: ${O.type.value};`;for(let H=0;H<h;H++)D+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${f}];`;for(let H=0;H<b;H++){D+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${h}];`;for(let ee=0;ee<h;ee++)D+=`
            values[${H}] = fma(${A.type.value}(a_data${h===1?"":`[${ee}]`}), b_data${ee}, values[${H}]);
`}return D};return`
  ${k.registerUniforms(K).registerInternalVariables(I).declareVariables(...ue,$)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${O.type.indices};
    ${Zi("a_indices",O,O.rank-2,I.rank,"batch_indices")}
    ${O.indicesSet("a_indices",O.rank-2,0)}
    ${O.indicesSet("a_indices",O.rank-1,0)}
    let a_offset = ${O.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${Zi("b_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${M()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${ie}
      ${V}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${b};${n}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),ip,np,po,ba,sp,fo,ap,ts,ll=X(()=>{me(),ye(),we(),ri(),ol(),sl(),ip=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,np=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,po=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:s,f=n?s:l,h=c/t[0],b=s/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ip(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${np(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ba=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,sp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",fo=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=n?d:s,h=n?s:d;if(!(h%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=h/t[1],_=f/t[0],y=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${ba(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ba(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${sp(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},ap=(e,t,r,i,n=!1)=>{let[s,a,o,l]=i,d=st(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ot(e,d)} {
      var value = ${ot(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Zi("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ot(e,d)} {
      var value = ${ot(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Zi("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ot(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ot(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ts=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=N.size(c),h=a[a.length-2],b=a[a.length-1],_=o[o.length-1],y=b%4===0&&_%4===0,S=h<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/S[0]),Math.ceil(h/v[1]/S[1]),Math.ceil(f/v[2]/S[2])],T=y?4:1,k=[...l,h,b/T],I=k.length,O=[...d,b,_/T],A=O.length,$=[f,h,_/T],q=[{type:6,data:h},{type:6,data:_},{type:6,data:b}];Yr(t,q),q.push(...fe(c,k,O));let V=["rank","rank"],ue=e.length>2;ue&&(q.push(...fe(e[2].dims)),V.push("rank")),q.push(...fe($));let ie=K=>{let M=c.length,D=el("batchDims",e[0].dataType,M,1),H=st(e[0].dataType),ee=U("a",e[0].dataType,I,T),Q=U("b",e[1].dataType,A,T),pe=de("result",e[0].dataType,$.length,T),be=[ee,Q];if(ue){let Ke=n?T:1;be.push(U("bias",e[2].dataType,e[2].dims.length,Ke))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Jr(t,L);let oe=st(pe.type.tensor),le=Qr(t,pe.type.value,oe),Z=ap(T,ue,le,[D,ee,Q,pe],n);return`
  ${K.registerUniforms(L).registerInternalVariables(D).declareVariables(...be,pe)}
  ${Z}
  ${y?po(S,v,H,D):fo(S,v,H,D)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${y};${n}`,inputDependencies:V},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:q}),getShaderSource:ie}}}),op,T0,q1=X(()=>{me(),wr(),we(),ri(),sl(),L1(),ll(),op=(e,t,r,i,n=!1,s,a=4,o=4,l=4,d="f32")=>{let c=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},f=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${ot(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${ot(a,d)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${ot(a,d)}(0.0);`,k=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${ot(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${ot(o,d)}(0.0);`,I=ot(l,d),O=ot(e?a:o,d),A=ot(e?o:a,d),$=Qr(s,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${S0(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},T0=(e,t,r,i,n,s,a,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],b=d?r[1]:r[2],_=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:h*b,v=d?h*b:_,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/w[0]/T[0]),Math.ceil(v/w[1]/T[1]),Math.ceil(f/w[2]/T[2])];Ie("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let I=y?d&&c%4!==0?3:4:1,O=w[1]*T[1],A=w[0]*T[0],$=Math.max(w[0]*I,w[1]),q=i%O===0,V=n%A===0,ue=s%$===0,ie=y?[I,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Yr(t,K),K.push(...fe(e[0].dims,e[1].dims));let M=["rank","rank"];a&&(K.push(...fe(e[2].dims)),M.push("rank")),K.push(...fe(r));let D=H=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Jr(t,ee);let Q=y?4:1,pe=st(e[0].dataType),be=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${pe}>`:pe}) {
        result[flatIndex] = ${y?`vec4<${pe}>`:pe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${pe}>`:pe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,L=U("x",e[0].dataType,e[0].dims.length,I===3?1:I),oe=U("w",e[1].dataType,e[1].dims.length,Q),le=[L,oe],Z=de("result",e[0].dataType,r.length,Q);if(a){let Ke=U("bias",e[2].dataType,e[2].dims.length,Q);le.push(Ke),be+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${pe}>`:pe} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${k0("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(ee).declareVariables(...le,Z)}
        ${be}
        ${op(d,q,V,ue,a,t,ie[0],ie[1],ie[2],pe)}
        ${y?po(T,w,pe,void 0,!d,$):fo(T,w,pe,void 0,!d,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${q};${V};${ue};${O};${A};${$}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:D}}}),lp,_a,Ci,up,ya,dp,E0,I0,W1=X(()=>{me(),wr(),ye(),we(),ri(),sl(),lp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},_a=e=>typeof e=="number"?[e,e,e]:e,Ci=(e,t)=>t<=1?e:e+(e-1)*(t-1),up=(e,t,r,i=1)=>{let n=Ci(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},ya=(e,t,r,i,n)=>{n==null&&(n=up(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},dp=(e,t,r,i,n,s,a,o,l,d)=>{let c,f,h,b;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=ya([t,r,i,1],[o,l,d],1,[n,s,a],e);f=_[0],h=_[1],b=_[2]}else if(Array.isArray(e)){if(!e.every((y,S,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=ya([t,r,i,1],[o,l,d],1,[n,s,a],e[0]);f=_[0],h=_[1],b=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/s),b=Math.ceil(i/a);let _=(f-1)*n+o-t,y=(h-1)*s+l-r,S=(b-1)*a+d-i,v=Math.floor(_/2),w=_-v,T=Math.floor(y/2),k=y-T,I=Math.floor(S/2),O=S-I;c={top:T,bottom:k,left:I,right:O,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:b}},E0=(e,t,r,i,n,s=!1,a="channelsLast")=>{let o,l,d,c,f;if(a==="channelsLast")[o,l,d,c,f]=e;else if(a==="channelsFirst")[o,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[h,,b,_,y]=t,[S,v,w]=_a(r),[T,k,I]=_a(i),O=Ci(b,T),A=Ci(_,k),$=Ci(y,I),{padInfo:q,outDepth:V,outHeight:ue,outWidth:ie}=dp(n,l,d,c,S,v,w,O,A,$),K=s?h*f:h,M=[0,0,0,0,0];return a==="channelsFirst"?M=[o,K,V,ue,ie]:a==="channelsLast"&&(M=[o,V,ue,ie,K]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:V,outHeight:ue,outWidth:ie,outChannels:K,padInfo:q,strideDepth:S,strideHeight:v,strideWidth:w,filterDepth:b,filterHeight:_,filterWidth:y,effectiveFilterDepth:O,effectiveFilterHeight:A,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:k,dilationWidth:I,inShape:e,outShape:M,filterShape:t}},I0=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(lp(l.x.map(S=>r[S]))/o[0]),1,1];Ie("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=N.size(r),h=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Yr(t,h),h.push(...fe(e[0].dims,e[1].dims));let b=["rank","rank"],_=e.length===3;_&&(h.push(...fe(e[2].dims)),b.push("rank")),h.push(...fe(r));let y=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Jr(t,v);let w=1,T=st(e[0].dataType),k=U("x",e[0].dataType,e[0].dims.length,c),I=U("W",e[1].dataType,e[1].dims.length,w),O=[k,I],A=de("result",e[0].dataType,r.length,w),$="";if(_){let ue=U("bias",e[2].dataType,e[2].dims.length,w);O.push(ue),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?ce("coords",4,5):ce("coords",1,5)}];
        }`}let q=ot(c,T),V=Qr(t,q,T);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...O,A)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${ce("coords",0,k.rank)};
              let d2 = ${a?ce("coords",k.rank-1,k.rank):ce("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${a?ce("coords",1,k.rank):ce("coords",2,k.rank)},
              ${a?ce("coords",2,k.rank):ce("coords",3,k.rank)},
              ${a?ce("coords",3,k.rank):ce("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?ce("uniforms.x_shape",1,k.rank):ce("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${a?ce("uniforms.x_shape",2,k.rank):ce("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${a?ce("uniforms.x_shape",3,k.rank):ce("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${a?ce("uniforms.x_shape",4,k.rank):ce("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${V}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:y}}}),C0,z0,F1=X(()=>{me(),ye(),we(),ri(),C0=(e,t,r,i)=>{let n=e.length>2,s=n?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?Qe(d):1,h=N.size(r)/f,b=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Yr(t,b),b.push(...fe(a,[o[0],o[1],o[2],o[3]/f]));let _=n?["rank","rank","rank"]:["rank","rank"];b.push(...fe([r[0],r[1],r[2],r[3]/f]));let y=S=>{let v=de("output",e[0].dataType,r.length,f),w=st(v.type.tensor),T=Qr(t,v.type.value,w),k=U("x",e[0].dataType,a.length),I=U("w",e[1].dataType,o.length,f),O=[k,I];n&&O.push(U("b",e[2].dataType,e[2].dims,f));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Jr(t,A);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...O,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${s}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b}),getShaderSource:y}},z0=(e,t,r,i)=>{let n=e.length>2,s=Qe(r[3]),a=Qe(r[2]),o=N.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Yr(t,f),f.push(...fe(l,d,c));let h=(a-1)*t.strides[1]+d[1],b=_=>{let y=de("output",e[0].dataType,c.length,s),S=st(y.type.tensor),v=Qr(t,y.type.value,S),w=U("x",e[0].dataType,l.length,s),T=U("w",e[1].dataType,d.length,s),k=[w,T];n&&k.push(U("b",e[2].dataType,e[2].dims,s));let I=n?"value += b[output_channel];":"",O=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Jr(t,O),`
  ${_.registerUniforms(O).declareVariables(...k,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:b}}}),cp,On,pp,Rn,ho,wa,fp,hp,mo,V1=X(()=>{ye(),q1(),W1(),ll(),F1(),ri(),ol(),Rr(),cp=(e,t,r,i,n,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],c=t.slice(2).map((h,b)=>h+(h-1)*(r[b]-1)),f=o.map((h,b)=>h+i[b]+i[b+l]).map((h,b)=>Math.floor((h-c[b]+n[b])/n[b]));return f.splice(0,0,a),f.splice(s?3:1,0,d),f},On=[2,3,1,0],pp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Rn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Jn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},ho=e=>{let t=nl(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},wa=(e,t,r,i)=>{let n=r.format==="NHWC",s=cp(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let O=[t[0]];if(n){let A=e.kernelCustomData.wT??e.compute(It(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),O.push(A)}else O.push(t[1]);t.length===3&&O.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(z0(O,r,s,i),{inputs:O}):e.compute(C0(O,r,s,i),{inputs:O});return}let a=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],f=t[1].dims[3],h=s[n?1:2],b=s[n?2:3],_=s[n?3:1],y=n&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let O=s[0],A,$,q,V=[];if(n){let K=e.kernelCustomData.wT??e.compute(It(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),y){let M=o*l*d;A=t[0].reshape([1,O,M]),$=K.reshape([1,M,_]),q=[1,O,_]}else A=t[0].reshape([O,o*l,d]),$=K.reshape([1,d,_]),q=[O,h*b,_];V.push(A),V.push($)}else A=t[0].reshape([O,d,o*l]),$=t[1].reshape([1,_,d]),q=[O,_,h*b],V.push($),V.push(A);a&&V.push(t[2]);let ue=q[2],ie=V[0].dims[V[0].dims.length-1];ue<8&&ie<8?e.compute(al(V,r,s,q,n,i),{inputs:V}):e.compute(ts(V,r,s,q,n,i),{inputs:V});return}let S=!0,v=e.kernelCustomData.wT??e.compute(It(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];a&&w.push(t[2]);let T=n?h*b:_,k=n?_:h*b,I=c*f*d;e.compute(T0(w,r,s,T,k,I,a,S,i),{inputs:w})},fp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Rn({...t,pads:n,strides:s,dilations:a,kernelShape:o},i);wa(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},hp=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Rn(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=E0(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(I0(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},mo=(e,t)=>{if(pp(e.inputs,t),e.inputs[0].dims.length===3)fp(e,t);else if(e.inputs[0].dims.length===5)hp(e,e.inputs,t);else{let r=Rn(t,e.inputs);wa(e,e.inputs,r)}}}),A0,H1=X(()=>{me(),wr(),ye(),we(),A0=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],c=s?Qe(l):1,f=s&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/c)*c,b=l-h,_=s?Qe(d):1,y=s?d===1?c:_:1,S=N.size(n)/_,v=[Math.ceil(S/64),1,1];Ie("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],k=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],I=[t.dilations[0],t.dilations[1]],O=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],A=[O[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),O[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:12,data:I},{type:12,data:O},{type:6,data:A},{type:12,data:h},{type:12,data:l},{type:12,data:d},...fe(e[0].dims,e[1].dims)];i&&($.push(...fe(e[2].dims)),w.push("rank")),$.push(...fe(n));let q=V=>{let ue=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:O.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ie=st(e[0].dataType),K=s?1:2,M=s?2:3,D=s?3:1,H=U("W",e[1].dataType,e[1].dims.length,y),ee=U("Dy",e[0].dataType,e[0].dims.length,c),Q=[ee,H];i&&Q.push(U("bias",e[2].dataType,[n[D]].length,_));let pe=de("result",e[0].dataType,n.length,_),be=()=>{let le="";if(f)c===4?le+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?le+=`
          dotProd = dotProd + dot(vec4<${ie}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${ie}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(le+=`
          dotProd = dotProd + dot(vec4<${ie}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${ie}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(le+=`
                  let xValue = ${s?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,c===1)le+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Z=0;Z<c;Z++)le+=`
            let wValue${Z} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Z}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${Z}] * wValue${Z};`;return le},L=()=>{if(b===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let le="";if(c===1){le+="dotProd = dotProd";for(let Z=0;Z<b;Z++)le+=`
            + ${ee.getByOffset(`x_offset + ${Z}`)} * ${H.getByOffset(`w_offset + ${Z}`)}`;le+=";"}else if(c===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);le+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return le},oe=`
            let outputIndices = ${pe.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${pe.indicesGet("outputIndices",0)};
            let d1 = ${pe.indicesGet("outputIndices",D)};
            let r = ${pe.indicesGet("outputIndices",K)};
            let c = ${pe.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${pe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ie}(dyRCorner) + ${ie}(wR)) / ${ie}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ie}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ie}(dyCCorner) + ${ie}(wC)) / ${ie}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ie}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${be()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${L()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${pe.setByOffset("global_idx","value")};
          `;return`
    ${V.registerUniforms(ue).declareVariables(...Q,pe)}
      ${V.mainStart()}
      ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${oe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${_}${f}${b}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:q}}}),mp,gp,bp,va,O0,_p,$a,yp,R0,G1=X(()=>{H1(),ri(),Rr(),mp=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,gp=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},bp=(e,t,r,i,n,s,a,o,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],b=t[o?3:1]*n;for(let _=0,y=e.length-c-(o?1:0);_<c;++_,++y){let S=e[y],v=f?S*a[_]:d[_],w=mp(S,a[_],s[_],t[y],r[_],v);gp(w,i,s,_,_+c),f&&d.push(a[_]*(S-1)+l[_]+(t[y]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,h),d.splice(o?3:1,0,b)},va=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}bp(o,r,l,e.autoPad,e.group,n,d,i,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:l,strides:d}),c},O0=e=>{let t=nl(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},_p=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},$a=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(It(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let s=[t[0],n];t.length===3&&s.push(t[2]),e.compute(A0(s,r,i),{inputs:s})},yp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=va({...t,pads:o,strides:a,dilations:s,kernelShape:n,outputPadding:l},i);$a(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},R0=(e,t)=>{if(_p(e.inputs,t),e.inputs[0].dims.length===3)yp(e,t);else{let r=va(t,e.inputs);$a(e,e.inputs,r)}}}),wp,M0,B0,j1=X(()=>{me(),ye(),et(),we(),wp=(e,t,r,i)=>{let n=N.size(t),s=t.length,a=U("input",e,s),o=de("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=N.normalizeAxis(l,s),c=f=>{let h=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,b=ce("uniforms.input_shape","uniforms.axis",s),_=i.reverse?h+(i.exclusive?" + 1":""):"0",y=i.reverse?b:h+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...fe(t,t)]}),getShaderSource:c}},M0=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(wp(i,r,n,t),{inputs:[0]})},B0=e=>{let t=e.exclusive===1,r=e.reverse===1;return Me({exclusive:t,reverse:r})}}),vp,$p,xp,N0,D0,K1=X(()=>{me(),ye(),et(),we(),vp=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$p=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},xp=(e,t)=>{let r,i,n,s,a,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,n,s]=e.dims,a=c?[r,i,n,d,d,s/d**2]:[r,i,n,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,d,d,s/d**2,i,n]:[r,s/d**2,d,d,i,n],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(a),h=f.dims.length,b=e.dataType,_=U("a",b,h),y=de("output",b,h),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,y)}

  ${$p(o,h,_,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,n*d,s/d**2]:[r,s/d**2,i*d,n*d],T=N.size(w),k=f.dims,I=N.sortBasedOnPerm(k,o);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...fe(k,I)]}},getShaderSource:S}},N0=(e,t)=>{vp(e.inputs),e.compute(xp(e.inputs[0],t))},D0=e=>Me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Mn,zi,xa,Sp,kp,Tp,Ep,Sa,Ip,P0,U0,X1=X(()=>{me(),ye(),et(),we(),Mn="[a-zA-Z]|\\.\\.\\.",zi="("+Mn+")+",xa="^"+zi+"$",Sp="("+zi+",)*"+zi,kp="^"+Sp+"$",Tp=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Ep=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(kp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let a=e[s].dims.slice();if(!n.match(RegExp(xa)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,a,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(zi)))throw new Error("Invalid RHS");i.match(RegExp(Mn,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(xa))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Mn,"g")),d=new Tp(i);return l?.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let h=n-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<a.length;b++){let _=String.fromCharCode(48+b);d.addSymbol(_,f+b),this.addSymbol(_,r[o++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],i)}),d}},Sa=e=>e+"_max",Ip=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>U(`input${c}`,t,d)),s=N.size(i),a=de("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",b="sum += prod;",_=[],y=[],S=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,I)=>{if(r.rhs.symbolToIndices.has(I)){let O=r.rhs.symbolToIndices.get(I)?.[0];O!==void 0&&r.lhs.forEach((A,$)=>{if(k.inputIndices.includes($)){let q=A.symbolToIndices.get(I);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(V=>{c.push(`${n[$].indicesSet(`input${$}Indices`,V,a.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,A)=>{if(k.inputIndices.includes(A)){let $=O.symbolToIndices.get(I);if($===void 0)throw new Error("Invalid symbol error");$.forEach(q=>{_.push(`${n[A].indicesSet(`input${A}Indices`,q,`${I}`)}`)}),v.push(`prod *= ${n[A].getByIndices(`input${A}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Sa(I)}; ${I}++) {`),S.push("}")});let T=w?[...c,`let sum = ${n.map((k,I)=>k.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,h,...y,..._,f,...v,b,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${Sa(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((k,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:s});let c=e.map((f,h)=>[...fe(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...fe(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},P0=(e,t)=>{let r=new Ep(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(Ip(n,e.inputs[0].dataType,r,i))},U0=e=>{let t=e.equation.replace(/\s+/g,"");return Me({equation:t})}}),Cp,ka,zp,Ap,L0,Z1=X(()=>{me(),ye(),we(),Cp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ka=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},zp=(e,t)=>e.length>t.length?ka(e,t):ka(t,e),Ap=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=zp(t,r),n=e[0].dataType,s=n===9||N.size(t)===1,a=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(N.size(i)/o),d=f=>{let h=U("input",n,t.length,a),b=de("output",n,i.length,o),_;if(n===9){let y=(S,v,w="")=>`
          let outputIndices${v} = ${b.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${h.broadcastedIndicesToOffset(`outputIndices${v}`,b)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${w}(${h.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${h.getByOffset(`inputOffset / ${a}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,b)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...fe(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},L0=e=>{Cp(e.inputs),e.compute(Ap(e.inputs),{inputs:[0]})}}),Op,q0,Q1=X(()=>{me(),ye(),we(),il(),Op=e=>{let t=e[0].dataType,r=N.size(e[0].dims),i=N.size(e[1].dims),n=i%4===0,s=a=>{let o=U("x",t,[1],4),l=U("bias",t,[1],4),d=de("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,h=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,l,d)}

    ${uo(ft(t))}

    ${a.mainStart(bi)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",co("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/bi/4)}})}},q0=e=>{e.inputs.length<2||N.size(e.inputs[1].dims)===0?o0(e):e.compute(Op(e.inputs))}}),Rp,Mp,W0,F0,Y1=X(()=>{me(),ye(),et(),we(),Rp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Mp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=N.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(N.size(a)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...fe(e[0].dims,e[1].dims,a)],f=h=>{let b=U("data",e[0].dataType,e[0].dims.length,l),_=U("inputIndices",e[1].dataType,e[1].dims.length),y=de("output",e[0].dataType,a.length,l),S=w=>{let T=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let I=0;I<T;I++)k+=`${T>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${a.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${b.type.indices};
        `;for(let I=0,O=0;I<n;I++)I===s?(k+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,O+=T):(k+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${a.length>1?`outputIndices${w}[${O}]`:`outputIndices${w}`};`,O++);return k},v;if(e[0].dataType===9){let w=(T,k,I="")=>`
          let outputIndices${k} = ${y.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${b.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${I}(${b.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${b.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,_,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},W0=e=>Me({axis:e.axis}),F0=(e,t)=>{let r=e.inputs;Rp(r),e.compute(Mp(e.inputs,t))}}),Bp,V0,H0,J1=X(()=>{me(),ye(),we(),Bp=(e,t,r,i,n,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],c=[s];d.push(...fe(t.dims,c));let f=h=>{let b=U("indices_data",t.dataType,t.dims.length),_=de("input_slice_offsets_data",12,1,1),y=[b,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(S).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},V0=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=N.sizeToDimension(s,s.length-1),l=N.sizeFromDimension(i,t.batchDims+a),d=N.sizeToDimension(i,t.batchDims),c=N.sizeFromDimension(i,t.batchDims),f=o/d,h=new Array(a),b=l;for(let k=0;k<a;++k)h[a-1-k]=b,b*=i[t.batchDims+a-1-k];let _=Bp(e,r[1],h,t.batchDims,i,o,f,c,a),y=t.batchDims+a;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(i.slice(y)),v=N.size(S),w=[{type:12,data:v},{type:12,data:l},...fe(r[0].dims,_.dims,S)],T=k=>{let I=U("data",r[0].dataType,r[0].dims.length),O=U("slice_offsets",12,_.dims.length),A=de("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,O,A)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},H0=e=>({batchDims:e.batch_dims,cacheKey:""})}),Np,Dp,G0,j0,ex=X(()=>{me(),ye(),et(),we(),Np=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=N.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Dp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=N.normalizeAxis(t.gatherAxis,n),a=N.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(s,1,...i);let l=N.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...fe(...e.map((b,_)=>b.dims),o)],h=b=>{let _=U("data",e[0].dataType,e[0].dims.length),y=U("inputIndices",e[1].dataType,e[1].dims.length),S=U("scales",e[2].dataType,e[2].dims.length),v=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=de("output",d,o.length),T=[_,y,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(k).declareVariables(...T,w)}
        ${b.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ft(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,_)=>_!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},G0=(e,t)=>{let r=e.inputs;Np(r,t),e.compute(Dp(e.inputs,t))},j0=e=>Me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Pp,Up,K0,X0,tx=X(()=>{me(),ye(),et(),we(),Pp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Up=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,o=N.normalizeAxis(t.axis,n),l=r[o],d=s.slice(0),c=N.size(d),f=U("input",i,n),h=U("indicesInput",a,s.length),b=de("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...fe(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,b)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},K0=e=>Me({axis:e.axis}),X0=(e,t)=>{let r=e.inputs;Pp(r),e.compute(Up(e.inputs,t))}}),Lp,qp,Z0,Q0,rx=X(()=>{me(),ye(),we(),Lp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},qp=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=Km.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(n/l),f=!0,h=N.size(o),b=[{type:12,data:f?d:h},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(b.push(...fe(e[2].dims)),_.push("rank")),b.push(...fe(o));let y=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=U("a",e[0].dataType,e[0].dims),I=U("b",e[1].dataType,e[1].dims),O=k.type.value,A=null,$=[k,I];e.length===3&&(A=U("c",e[2].dataType,e[2].dims.length),$.push(A));let q=de("output",e[0].dataType,o.length);$.push(q);let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(V).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${O}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${O}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let w=U("a",e[0].dataType,e[0].dims),T=U("b",e[1].dataType,e[1].dims),k=null,I=[w,T];e.length===3&&(k=U("c",e[2].dataType,e[2].dims.length),I.push(k));let O=de("output",e[0].dataType,o.length);I.push(O);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",q="";t.transA&&t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let V=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(A).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${O.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${q}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${V}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${O.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:b}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b}),getShaderSource:y}},Z0=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Q0=(e,t)=>{Lp(e.inputs),e.compute(qp(e.inputs,t))}}),Zt,ur,Ur,Lr,Wp,Fp,Vp,Hp,Gp,jp,Kp,Xp,Y0,J0,ix=X(()=>{me(),ye(),et(),we(),[Zt,ur,Ur,Lr]=[0,1,2,3],Wp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Fp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Vp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Hp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Gp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,jp=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Zt}] = batch;
     indices[${ur}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ur}] = u32(r);
            indices[${Lr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ur}] = u32(clamp(r, 0, H - 1));
          indices[${Lr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ur}] = gs_reflect(r, border[1], border[3]);
          indices[${Lr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Kp=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Zt}], indices[${ur}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Zt}], indices[${ur}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Zt}], indices[${ur}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Zt}], indices[${ur}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Zt}], indices[${ur}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Zt}], indices[${ur}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Xp=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=U("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Zt,ur,Ur,Lr]=[0,3,1,2]);let a=de("output",e[0].dataType,s.length),o=r.type.value,l=N.size(s),d=[{type:12,data:l},...fe(e[0].dims,i,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,a)}
  ${Fp}
  ${Vp(o)}
  ${Hp(t)}
  ${Gp(t)}
  ${jp(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ur}]);
      let W_in = i32(uniforms.x_shape[${Lr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Zt}], indices[${Ur}], indices[${Lr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Kp(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=N.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},Y0=(e,t)=>{Wp(e.inputs),e.compute(Xp(e.inputs,t))},J0=e=>Me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),bt,Zp,eb,Ta,Qp,qi,tb,rb=X(()=>{me(),ye(),et(),Jo(),rl(),we(),Rr(),bt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Zp=(e,t)=>{let r=e[0],i=bt(e,1),n=bt(e,2),s=bt(e,3),a=bt(e,4),o=bt(e,5),l=bt(e,6),d=bt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=f,_=0,y=0,S=Math.floor(h/t.numHeads);if(l&&d&&N.size(l.dims)&&N.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&N.size(l.dims)||d&&N.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&N.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,b=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,b=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,b=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&N.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+b,T=0;if(a&&N.size(a.dims)>0){T=8;let A=a.dims;throw A.length===1?A[0]===c?T=1:A[0]===3*c+2&&(T=3):A.length===2&&A[0]===c&&A[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,I=h;if(n&&N.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(b!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(b!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],k=!0}}let O=!1;if(a&&N.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&N.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:b,totalSequenceLength:w,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:O,passPastInKv:k,qkvFormat:v}},eb=e=>Me({...e}),Ta=Me({perm:[0,2,1,3]}),Qp=(e,t,r,i,n,s,a)=>{let o=[i,n,s],l=N.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=f=>{let h=de("qkv_with_bias",t.dataType,o),b=U("qkv",t.dataType,o),_=U("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(b,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},qi=(e,t,r,i,n,s,a,o)=>{let l=s;if(a&&N.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Qp(e,s,a,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(It(l,Ta.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,n])),r===1||i===1?l:e.compute(It(l,Ta.perm),{inputs:[l],outputs:[-1]})[0]},tb=(e,t)=>{let r=Zp(e.inputs,t),i=e.inputs[0],n=bt(e.inputs,1),s=bt(e.inputs,2),a=bt(e.inputs,3),o=bt(e.inputs,4),l=bt(e.inputs,5),d=bt(e.inputs,6),c=bt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let f=n&&s&&n.dims.length===4&&s.dims.length===4,h=qi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(f)return nn(e,h,n,s,o,void 0,d,c,l,r);if(!n||!s)throw new Error("key and value must be provided");let b=qi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),_=qi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);nn(e,h,b,_,o,void 0,d,c,l,r)}}),Yp,Jp,ef,tf,go,ib,nb,sb=X(()=>{me(),ye(),et(),we(),Yp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jp=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Me({numOutputs:i,axis:t.axis,splitSizes:r})},ef=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ce("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,tf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},go=(e,t)=>{let r=e[0].dims,i=N.size(r),n=e[0].dataType,s=N.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=U("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let y=r.slice();y[s]=t.splitSizes[_],c.push(y),a[_]=de(`output${_}`,n,y.length),d.push({dims:c[_],dataType:e[0].dataType})}h.push({type:12,data:l},...fe(r,...c));let b=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${ef(l.length)}
  ${tf(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ce("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},ib=(e,t)=>{Yp(e.inputs);let r=e.inputs.length===1?t:Jp(e.inputs,t);e.compute(go(e.inputs,r),{inputs:[0]})},nb=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return Me({axis:t,numOutputs:i,splitSizes:r})}}),rf,rs,ab,ob=X(()=>{me(),ye(),et(),we(),rf=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!N.areEqual(i.dims,[])&&!N.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!N.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],f=N.sizeFromDimension(r.dims,1)/d,h=o===0?n.dims[1]*2:f/a;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},rs=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],o=N.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],f=n===0?c*2:d/i,h=new Array(a,l,d/f,f-c),b=N.computeStrides(h),_=[{type:1,data:s},{type:12,data:h},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=S=>{let v=U("input",e[0].dataType,e[0].dims.length),w=U("position_ids",e[1].dataType,e[1].dims.length),T=U("cos_cache",e[2].dataType,e[2].dims.length),k=U("sin_cache",e[3].dataType,e[3].dims.length),I=de("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${S.declareVariables(v,w,T,k,I)}

        ${S.mainStart(bi)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",de("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(h)/bi)},programUniforms:_})}},ab=(e,t)=>{rf(e.inputs,t),e.compute(rs(e.inputs,t))}}),nf,sf,Ea,af,lb,nx=X(()=>{et(),me(),rl(),rb(),sb(),Rr(),ob(),we(),nf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,b=!i||i.dims.length===0,_=Math.floor(b?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);b&&(c=_*t.numHeads);let y=s&&s.dims.length!==0,S=a&&a.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=s.dims[2]}else if(y||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,T=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let O=I.dims.reduce((A,$)=>A*$,1);if(O!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${O}.`);for(let A=0;A<I.dims.length;A++)if(I.dims[A]!==1&&I.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${I.dims[A]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},sf=Me({perm:[0,2,1,3]}),Ea=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(It(i,sf.perm),{inputs:[i],outputs:[-1]})[0]),i},af=(e,t,r,i)=>{let n=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let f=U("seq_lens",r.dataType,r.dims),h=U("total_seq_lens",i.dataType,i.dims),b=de("pos_ids",n,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,h,b)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${b.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},lb=(e,t)=>{let r=nf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,b,_]=!n&&!s?e.compute(go([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,s],y,S;if(t.doRotary){let k=e.compute(af(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],O=e.inputs[8],A=Me({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),$=[h,k,I,O],q=[-1];y=e.compute(rs($,A),{inputs:$,outputs:q})[0],$.splice(0,1,b);let V=Me({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(rs($,V),{inputs:$,outputs:q})[0]}let v=qi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:h,void 0,0),w=Ea(e,t.doRotary?S:b,r),T=Ea(e,_,r);nn(e,v,w,T,void 0,void 0,a,o,void 0,r,l,d)}}),Ia,of,lf,ub,sx=X(()=>{me(),ye(),Rr(),we(),Ia=(e,t,r,i,n,s,a,o)=>{let l=Qe(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=n*a,h=64;f===1&&(h=256);let b=[n,a,s/l],_=[n,a,2],y=["rank","type","type"],S=[];S.push(...fe(b,_));let v=w=>{let T=U("x",t.dataType,3,l),k=U("scale",r.dataType,r.dims),I=U("bias",i.dataType,i.dims),O=de("output",1,3,2),A=[T,k,I,O];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...A)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Or("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Or("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},of=(e,t,r)=>{let i=t[0].dims,n=i,s=2,a=i[0],o=i[1],l=N.sizeFromDimension(i,s),d=Qe(l),c=N.size(n)/d,f=Ia(e,t[0],t[1],t[2],a,l,o,r.epsilon),h=[a,o,l/d],b=[a,o],_=["type","none"],y=S=>{let v=U("x",t[0].dataType,h.length,d),w=U("scale_shift",1,b.length,2),T=de("output",t[0].dataType,h.length,d),k=[v,w,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...fe(h,b,h)]}),getShaderSource:y},{inputs:[t[0],f]})},lf=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],o=N.sizeFromDimension(i,1)/a,l=Qe(a),d=N.size(n)/l,c=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],f=["type","type"],h=!1,b=[0,i.length-1];for(let v=0;v<i.length-2;v++)h=h||i[v+1]!==1,b.push(v+1);h=h&&i[i.length-1]!==1;let _=h?e.compute(It(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[b[w]])),y=Ia(e,_,t[1],t[2],s,o,a,r.epsilon),S=v=>{let w=st(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,k=A=>{let $=A===0?"x":"y",q=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${q}(scale.${$}))`;case 2:return`vec2<${w}>(${q}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${q}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=U("input",t[0].dataType,t[0].dims,l),O=de("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${O.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],y]})},ub=(e,t)=>{t.format==="NHWC"?lf(e,e.inputs,t):of(e,e.inputs,t)}}),uf,df,db,ax=X(()=>{me(),ye(),we(),uf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},df=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],o=n,l=N.normalizeAxis(t.axis,n.length),d=N.sizeToDimension(n,l),c=N.sizeFromDimension(n,l),f=N.size(s.dims),h=a?N.size(a.dims):0;if(f!==c||a&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let b=[];for(let I=0;I<n.length;++I)I<l?b.push(n[I]):b.push(1);let _=Qe(c),y=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];a&&y.push("type");let v=r>1,w=r>2,T=I=>{let O=st(e[0].dataType),A=[U("x",e[0].dataType,e[0].dims,_),U("scale",s.dataType,s.dims,_)];a&&A.push(U("bias",a.dataType,a.dims,_)),A.push(de("output",e[0].dataType,o,_)),v&&A.push(de("mean_data_output",1,b)),w&&A.push(de("inv_std_output",1,b));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms($).declareVariables(...A)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ao("f32",_)};
    var mean_square_vector = ${ao("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${li(O,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Or("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Or("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${li(O,_,"x[j + offset]")};
      let f32scale = ${li(O,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${li(O,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return v&&k.push({dims:b,dataType:1}),w&&k.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},db=(e,t)=>{uf(e.inputs),e.compute(df(e.inputs,t,e.outputCount))}}),cf,cb,ox=X(()=>{ye(),ol(),ll(),cf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},cb=e=>{cf(e.inputs);let t=gi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(al(e.inputs,{activation:""},t));else{let n=t[t.length-2],s=N.size(e.inputs[0].dims.slice(0,-2)),a=N.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&n===1&&a===1){let o=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,s,r],c=[o,l];e.compute(ts(c,{activation:""},t,d),{inputs:c})}else e.compute(ts(e.inputs,{activation:""},t))}}}),pf,ff,hf,pb,fb,lx=X(()=>{me(),ye(),et(),we(),pf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!N.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(N.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(N.size(l)!==d)throw new Error("zeroPoints input size error.")}},ff=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),l=N.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=Qe(t.k),h=Qe(d),b=Qe(a),_=o.concat([n,a]),y=n>1&&a/b%2===0?2:1,S=N.size(_)/b/y,v=64,w=[],T=[l,n,s/f],k=N.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),w.push(...fe(T)),w.push(...fe(k)),w.push(...fe(e[2].dims)),e.length===4&&w.push(...fe(N.convertShape(e[3].dims)));let I=[l,n,a/b];w.push(...fe(I));let O=A=>{let $=T.length,q=U("a",e[0].dataType,$,f),V=U("b",12,k.length,h),ue=U("scales",e[2].dataType,e[2].dims.length),ie=[q,V,ue],K=e.length===4?U("zero_points",12,e[3].dims.length):void 0;K&&ie.push(K);let M=I.length,D=de("output",e[0].dataType,M,b),H=st(e[0].dataType),ee=(()=>{switch(f){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${f}-component is not supported.`)}})(),Q=Math.floor(32/t.bits),pe=Math.floor(Q/8),be=()=>{let le="";for(let Z=0;Z<pe;Z++){let Ke=Z*t.bits*4,Fe=Ke+t.bits;le+=`
          // reuse a data (pass ${Z})
            var input_offset${Z>0?Z:""} = ${Z===0?q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Z>0?Z:""}: ${ee};
            for (var j${Z>0?Z:""}: u32 = 0; j${Z>0?Z:""} < ${8/f}; j${Z>0?Z:""}++) {
              a_data${Z>0?Z:""}[j${Z>0?Z:""}] = ${q.getByOffset(`input_offset${Z>0?Z:""}`)};
              input_offset${Z>0?Z:""}++;
            }
          `;for(let ze=0;ze<b*y;ze++)le+=`
            b_value = ${h===1?`b${ze}_data`:`b${ze}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${Z*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ke}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Fe}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(Ye,Ae)=>`${H}(b_value_lower[${Ae}]), ${H}(b_value_upper[${Ae}])`).join(", ")});
            b_dequantized_values = ${f===1?`${ee}(${Array.from({length:8},(Ye,Ae)=>`(b_quantized_values[${Ae}] - ${K?`zero_point${ze}`:"zero_point"}) * scale${ze}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${K?`zero_point${ze}`:"zero_point"}`).join(",")})) * scale${ze};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ze/b)}]${b>1?`[${ze%b}]`:""} += ${Array.from({length:8/f},(Ye,Ae)=>`${f===1?`a_data${Z>0?Z:""}[${Ae}] * b_dequantized_values[${Ae}]`:`dot(a_data${Z>0?Z:""}[${Ae}], b_dequantized_values[${Ae}])`}`).join(" + ")};
          `}return le},L=()=>{let le=`
            var col_index = col * ${b};
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let Z=0;Z<b*y;Z++)le+=`
            let scale${Z} = ${ue.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return le},oe=()=>{let le=`col_index = col * ${b};`;for(let Z=0;Z<b*y;Z++)le+=`
            let b${Z}_data = ${V.getByIndices(`${V.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return le+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,le};return`
        var<workgroup> workgroup_shared: array<${D.type.value}, ${y*v}>;
        ${A.declareVariables(...ie,D)}
        ${A.mainStart([v,1,1])}
          let output_indices = ${D.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${L()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${oe()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${be()}
                word_offset += ${Q/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${D.setByIndices(`${D.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${b};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:O}},hf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),l=N.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=Qe(t.k),h=Qe(d),b=o.concat([n,a]),_=128,y=a%8===0?8:a%4===0?4:1,S=_/y,v=Math.floor(32/t.bits),w=S*h*v,T=w/f,k=w/t.blockSize,I=N.size(b)/y,O=[],A=[l,n,s/f],$=N.convertShape(e[1].dims).slice();$.splice(-1,1,d/h),O.push(...fe(A)),O.push(...fe($)),O.push(...fe(e[2].dims)),e.length===4&&O.push(...fe(N.convertShape(e[3].dims)));let q=[l,n,a];O.push(...fe(q));let V=ue=>{let ie=A.length,K=U("a",e[0].dataType,ie,f),M=U("b",12,$.length,h),D=U("scales",e[2].dataType,e[2].dims.length),H=[K,M,D],ee=e.length===4?U("zero_points",12,e[3].dims.length):void 0;ee&&H.push(ee);let Q=q.length,pe=de("output",e[0].dataType,Q),be=st(e[0].dataType),L=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${be}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${be}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${be}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${be}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${S}>, ${y}>;
        ${ue.declareVariables(...H,pe)}
        ${ue.mainStart([S,y,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${be}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${be}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${D.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${M.getByIndices(`${M.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let oe=Math.floor(v/8),le="";for(let Z=0;Z<oe;Z++){let Ke=Z*t.bits*4,Fe=Ke+t.bits;le+=`
              ${L()}
              {${t.bits===2?`
                let half_word = b_value >> ${Z*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Ke}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Fe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${be}>(${Array.from({length:4},(ze,Ye)=>`${be}(b_value_lower[${Ye}]), ${be}(b_value_upper[${Ye}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${be}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ze,Ye)=>`${`dot(a_data${Ye}, b_dequantized_values[${Ye}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return le})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${S};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x:I},programUniforms:O}),getShaderSource:V}},pb=(e,t)=>{pf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(hf(e.inputs,t)):e.compute(ff(e.inputs,t))},fb=e=>Me(e)}),mf,gf,bf,_f,yf,wf,vf,$f,hb,ux=X(()=>{me(),ye(),we(),mf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},gf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${ce("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ce("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${ce("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},bf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ce("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ce("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ce("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ce("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},_f=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ce("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ce("uniforms.x_shape",n,t)})) {
                  k = i32(${ce("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${ce("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},yf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${ce("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${ce("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${ce("uniforms.x_shape",n,t)})) {
                  k -= i32(${ce("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${ce("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},wf=(e,t,r)=>{switch(r.mode){case 0:return gf(e,t,r.pads.length);case 1:return bf(e,t,r.pads.length);case 2:return _f(e,t,r.pads.length);case 3:return yf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},vf=(e,t)=>{let r=N.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=N.size(r),s=[{type:12,data:n},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...fe(e[0].dims,r));let o=["rank"],l=d=>{let c=de("output",e[0].dataType,r.length),f=U("x",e[0].dataType,i.length),h=f.type.value,b=wf(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?h:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(r)/64)},programUniforms:s}),getShaderSource:l}},$f=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:i,pads:a}}else return t},hb=(e,t)=>{mf(e.inputs);let r=$f(e.inputs,t);e.compute(vf(e.inputs,r),{inputs:[0]})}}),Ai,Ca,za,Aa,Oa,xf,Sf,Ra,Ma,mb,gb,Ba,bb,_b,Na,yb,wb,vb,$b,dx=X(()=>{Rt(),me(),ye(),we(),Ai=e=>{if(He.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ca=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Jn.adjustPoolAttributes(r,n,a,o,l,d);let c=Jn.computePoolOutputShape(r,n,o,l,a,d,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,i?h:c]},za=(e,t)=>{let r=t.format==="NHWC",i=N.size(e),n=N.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];h=!!(y+S),s.push({type:12,data:b},{type:12,data:_},{type:12,data:y},{type:12,data:S}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=N.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,a,!!l,!1,!1]}},Aa=(e,t,r,i,n,s,a,o,l,d,c,f)=>{let h=n.format==="NHWC",b=t.type.value,_=de("output",t.type.tensor,i);if(n.kernelShape.length<=2){let y="",S="",v="",w=r-(h?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,n.kernelShape.length===2){let T=r-(h?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${b}(${o});
              var pad = 0;
              ${S}
              ${y}
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=n.kernelShape.length,S=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${b}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ce("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ce("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ce("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${ce("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},Oa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,xf=e=>`${Oa(e)};${e.countIncludePad}`,Sf=e=>`${Oa(e)};${e.storageOrder};${e.dilations}`,Ra=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ma=(e,t,r,i)=>{let[n,s]=Ca(t,i,r),a=U("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,b,_]=za(s,n);c.push(...fe(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${b};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(s)/64)},programUniforms:c}),getShaderSource:S=>Aa(S,a,t.dims.length,s.length,n,l,d,0,f,h,b,_)}},mb=e=>{let t=e.count_include_pad!==0,r=Ra(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:xf(i)}},gb=(e,t)=>{Ai(e.inputs),e.compute(Ma("AveragePool",e.inputs[0],!1,t))},Ba={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},bb=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},_b=(e,t)=>{Ai(e.inputs),e.compute(Ma("GlobalAveragePool",e.inputs[0],!0,t))},Na=(e,t,r,i)=>{let[n,s]=Ca(t,i,r),a=`
      value = max(x_val, value);
    `,o="",l=U("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,b,_]=za(s,n);return c.push(...fe(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${b};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(s)/64)},programUniforms:c}),getShaderSource:y=>Aa(y,l,t.dims.length,s.length,n,a,o,t.dataType===10?-65504:-1e5,f,h,b,_)}},yb=(e,t)=>{Ai(e.inputs),e.compute(Na("MaxPool",e.inputs[0],!1,t))},wb=e=>{let t=e.storage_order,r=e.dilations,i=Ra(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Sf(n)}},vb=e=>{let t=e.format;return{format:t,...Ba,cacheKey:t}},$b=(e,t)=>{Ai(e.inputs),e.compute(Na("GlobalMaxPool",e.inputs[0],!0,t))}}),kf,Tf,xb,Sb,cx=X(()=>{me(),ye(),et(),we(),kf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,s)=>s===t.axis||n===e[0].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Tf=(e,t)=>{let r=N.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,s=e[0].dims,a=e[1].dataType,o=N.size(s),l=i===3||i===2,d=l?[Math.ceil(N.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(N.size(f.dims)/4)]:f.dims:void 0,b=c.length===0||c.length===1&&c[0]===1,_=b===!1&&c.length===1,y=Qe(o),S=b&&(!l||y===4),v=S?y:1,w=S&&!l?y:1,T=U("input",l?12:i,d.length,w),k=U("scale",a,c.length),I=f?U("zero_point",l?12:i,h.length):void 0,O=de("output",a,s.length,v),A=[T,k];I&&A.push(I);let $=[d,c];f&&$.push(h);let q=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...fe(...$,s)],V=ue=>{let ie=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ue.registerUniforms(ie).declareVariables(...A,O)}
      ${ue.mainStart()}
          ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${O.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${O.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?b?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?l?`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${O.setByOffset("global_idx",`${O.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:V,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:q})}},xb=(e,t)=>{kf(e.inputs,t),e.compute(Tf(e.inputs,t))},Sb=e=>Me({axis:e.axis,blockSize:e.blockSize})}),Ef,If,kb,px=X(()=>{Rt(),me(),we(),Ef=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},If=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,o=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...fe(s)],l=d=>{let c=de("output",i,s.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},kb=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),He.webgpu.validateInputContent&&Ef(t,r,i),e.compute(If(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Cf,zf,Tb,Eb,fx=X(()=>{me(),ye(),et(),we(),Cf=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zf=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,s=1,a=Math.ceil(N.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],l=N.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...fe(e[1].dims,e[2].dims,n)],c=f=>{let h=U("indices",e[1].dataType,e[1].dims.length),b=U("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?tg("output",e[0].dataType,n.length):de("output",e[0].dataType,n.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,b,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Cf(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},Tb=e=>Me({reduction:e.reduction}),Eb=(e,t)=>{e.compute(zf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Af,Of,Rf,Da,Mf,Bf,Nf,Df,Pf,Uf,Lf,qf,Pa,Wf,Ff,Vf,Hf,Gf,Ib,Cb,hx=X(()=>{me(),ye(),et(),we(),Af=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Of=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},Rf=(e,t,r,i,n,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Af(i,t),t.axes.length>0&&Of(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Da=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Mf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Da("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Da("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Bf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Nf=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},Df=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},Pf=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},Uf=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ce("uniforms.scales","i",i)};
        var roi_low = ${ce("uniforms.roi","i",n)};
        var roi_hi = ${ce("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ce("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Lf=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ce("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ce("uniforms.roi","i",s)};
          var roi_hi = ${ce("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${ce("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,qf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ce("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Pa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Wf=(e,t,r,i,n)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Pa(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ff=(e,t,r,i,n,s,a,o,l,d)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],b=e.type.value,_=y=>{let S=y===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${b} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${b} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[y]},
        ${i[y]}, ${r[y]}, ${s[y]}, ${s[y]} + ${r.length});
        var fractOriginalIdx: ${b} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${b} = originalIdx + ${b}(i);
          if (${S} < 0 || ${S} >= ${r[y]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${S})`)};
          data[i + 1] = ${y===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(h)};
  fn getCubicInterpolationCoefs(s: ${b}) -> array<${b}, 4> {
    var absS = abs(s);
    var coeffs: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${b} = 1.0 - absS;
    var twoMinusAbsS: ${b} = 2.0 - absS;
    var onePlusAbsS: ${b} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${b}, 4>, coefs: array<${b}, 4>) -> ${b} {
    var coefsSum: ${b} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Vf=(e,t,r,i,n)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Pa(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Hf=(e,t,r,i,n,s)=>{let a=e.dims,o=Nf(s,t.axes,a.length),l=Df(a,i,n,t.axes),d=i.slice();i.length===0&&(d=a.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Pf(a,d,t)));let c=de("output",e.dataType,l.length),f=U("input",e.dataType,a.length),h=N.size(l),b=a.length===l.length&&a.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,S=f.type.value,v=w=>`
      ${b?"":`
      ${Mf(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${qf(f,a)};
              ${Bf(t.nearestMode,r,S)};
              ${Lf(f,c,a,l,d.length,o.length,_)};
              `;case"linear":return`
              ${Uf(c,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Wf(f,c,a,_,y)}`;if(a.length===3||a.length===5)return`${Vf(f,c,a,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Ff(f,c,a,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${b}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...fe(a,l)]})}},Gf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ib=(e,t)=>{let r=[],i=[],n=[],s=Gf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Rf(e.inputs,t,s,r,i,n),e.compute(Hf(e.inputs[0],t,s,r,i,n),{inputs:[0]})},Cb=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Me({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),jf,Kf,zb,mx=X(()=>{me(),ye(),we(),jf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Kf=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=N.size(s),o=s,l=a,d=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,b=i&&r>1,_=i&&r>2,y=r>3,S=64,v=Qe(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],T=I=>{let O=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[U("x",e[0].dataType,e[0].dims,v),U("skip",e[1].dataType,e[1].dims,v),U("gamma",e[2].dataType,e[2].dims,v)];f&&A.push(U("beta",e[3].dataType,e[3].dims,v)),h&&A.push(U("bias",e[4].dataType,e[4].dims,v)),A.push(de("output",e[0].dataType,o,v)),b&&A.push(de("mean_output",1,c)),_&&A.push(de("inv_std_output",1,c)),y&&A.push(de("input_skip_bias_sum",e[0].dataType,o,v));let $=st(e[0].dataType),q=st(1,v);return`

      ${I.registerUniforms(O).declareVariables(...A)}
      var<workgroup> sum_shared : array<${q}, ${S}>;
      var<workgroup> sum_squared_shared : array<${q}, ${S}>;

      ${I.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${li($,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Or("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Or("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${b};${_};${y}`,inputDependencies:e.map((I,O)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},zb=(e,t)=>{jf(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Kf(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Xf,Oi,Zf,Ua,Qf,Yf,Ab,Ob,gx=X(()=>{me(),ye(),et(),we(),Xf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Oi=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Zf=(e,t)=>{if(e.length>1){let r=Oi(e,1),i=Oi(e,2),n=Oi(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Me({starts:r,ends:i,axes:n})}else return t},Ua=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Qf=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ce("uniforms.input_shape","i",r.length)};
            let steps_i = ${ce("uniforms.steps","i",r.length)};
            let signs_i = ${ce("uniforms.signs","i",r.length)};
            let starts_i = ${ce("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Yf=(e,t)=>{let r=e[0].dims,i=N.size(r),n=t.axes.length>0?N.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Oi(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((v,w)=>Ua(v,w,r,n,s)),o=t.ends.map((v,w)=>Ua(v,w,r,n,s));if(n.length!==a.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(a.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,w,T)=>{if(v<0){let k=(o[w]-a[w])/v,I=a[w],O=I+k*s[w];a[w]=O,o[w]=I,T[w]=-v}});let d=r.slice(0);n.forEach((v,w)=>{d[v]=Math.ceil((o[v]-a[v])/s[v])});let c={dims:d,dataType:e[0].dataType},f=de("output",e[0].dataType,d.length),h=U("input",e[0].dataType,e[0].dims.length),b=N.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:b},{type:12,data:a},{type:6,data:l},{type:12,data:s},...fe(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(_).declareVariables(h,f)}
        ${Qf(h,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Ab=(e,t)=>{Xf(e.inputs,t);let r=Zf(e.inputs,t);e.compute(Yf(e.inputs,r),{inputs:[0]})},Ob=e=>{let t=e.starts,r=e.ends,i=e.axes;return Me({starts:t,ends:r,axes:i})}}),Jf,eh,Rb,Mb,bx=X(()=>{me(),ye(),et(),Rr(),we(),Jf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},eh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=N.size(i),s=i.length,a=N.normalizeAxis(t.axis,s),o=a<i.length-1,l,d=[];o?(d=Array.from({length:s},(A,$)=>$),d[a]=s-1,d[s-1]=a,l=e.compute(It(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[s-1],h=n/f,b=Qe(f),_=f/b,y=64;h===1&&(y=256);let S=(A,$)=>$===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:$===2?`max(${A}.x, ${A}.y)`:$===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,v=U("x",l.dataType,l.dims,b),w=de("result",l.dataType,l.dims,b),T=v.type.value,k=st(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=A=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${A.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${Or("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,O=e.compute({name:"Softmax",shaderCache:{hint:`${b};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(It(O,d),{inputs:[O]})},Rb=(e,t)=>{Jf(e.inputs),eh(e,t)},Mb=e=>Me({axis:e.axis})}),La,th,rh,ih,Bb,_x=X(()=>{me(),ye(),we(),La=e=>Array.from(e.getBigInt64Array(),Number),th=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(La(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ih=(e,t)=>{let r=e[0].dims,i=t??La(e[1]),n=rh(r,i),s=N.size(n),a=e[0].dataType,o=U("input",a,r.length),l=de("output",a,n.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...fe(e[0].dims,n)]}),getShaderSource:d}},Bb=e=>{th(e.inputs),e.compute(ih(e.inputs),{inputs:[0]})}}),nh,sh,Nb,yx=X(()=>{me(),ye(),we(),nh=(e,t,r,i,n)=>{let s=de("output_data",n,r.length,4),a=U("a_data",t[1].dataType,t[1].dims.length,4),o=U("b_data",t[2].dataType,t[2].dims.length,4),l=U("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,b)=>`select(${h}, ${f}, ${b})`;if(!i)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,b,_="")=>{let y=`a_data[index_a${b}][component_a${b}]`,S=`b_data[index_b${b}][component_b${b}]`,v=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${s.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${a.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_b${b} = ${o.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_c${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${h}[${b}] = ${_}(${c(y,S,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},sh=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(N.areEqual(t,r)&&N.areEqual(r,i)),a=t,o=N.size(t);if(s){let d=gi.calcShape(gi.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=N.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>nh(d,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...fe(i,t,r,a)]})}},Nb=e=>{e.compute(sh(e.inputs))}}),Db,wx=X(()=>{M1(),rl(),B1(),N1(),D1(),P1(),U1(),V1(),G1(),j1(),K1(),X1(),Z1(),Q1(),Y1(),J1(),ex(),tx(),rx(),ix(),nx(),sx(),ax(),ox(),lx(),rb(),ux(),dx(),cx(),px(),fx(),tl(),hx(),ob(),mx(),gx(),bx(),sb(),_x(),Rr(),il(),yx(),Db=new Map([["Abs",[zg]],["Acos",[Ag]],["Acosh",[Og]],["Add",[p0]],["ArgMax",[Tg,lo]],["ArgMin",[kg,lo]],["Asin",[Rg]],["Asinh",[Mg]],["Atan",[Bg]],["Atanh",[Ng]],["Attention",[Eg]],["AveragePool",[gb,mb]],["BatchNormalization",[Ig]],["BiasAdd",[Cg]],["BiasSplitGelu",[c0]],["Cast",[Pg,Dg]],["Ceil",[Lg]],["Clip",[Ug]],["Concat",[$0,x0]],["Conv",[mo,ho]],["ConvTranspose",[R0,O0]],["Cos",[qg]],["Cosh",[Wg]],["CumSum",[M0,B0]],["DepthToSpace",[N0,D0]],["DequantizeLinear",[xb,Sb]],["Div",[f0]],["Einsum",[P0,U0]],["Elu",[Fg,Li]],["Equal",[h0]],["Erf",[Vg]],["Exp",[Hg]],["Expand",[L0]],["FastGelu",[q0]],["Floor",[Gg]],["FusedConv",[mo,ho]],["Gather",[F0,W0]],["GatherElements",[X0,K0]],["GatherBlockQuantized",[G0,j0]],["GatherND",[V0,H0]],["Gelu",[jg]],["Gemm",[Q0,Z0]],["GlobalAveragePool",[_b,bb]],["GlobalMaxPool",[$b,vb]],["Greater",[_0]],["GreaterOrEqual",[w0]],["GridSample",[Y0,J0]],["GroupQueryAttention",[lb]],["HardSigmoid",[t0,e0]],["InstanceNormalization",[ub]],["LayerNormalization",[db]],["LeakyRelu",[Kg,Li]],["Less",[y0]],["LessOrEqual",[v0]],["Log",[u0]],["MatMul",[cb]],["MatMulNBits",[pb,fb]],["MaxPool",[yb,wb]],["Mul",[m0]],["MultiHeadAttention",[tb,eb]],["Neg",[Zg]],["Not",[Xg]],["Pad",[hb]],["Pow",[g0]],["QuickGelu",[d0,Li]],["Range",[kb]],["Reciprocal",[Qg]],["ReduceMin",[wg]],["ReduceMean",[mg]],["ReduceMax",[yg]],["ReduceSum",[$g]],["ReduceProd",[vg]],["ReduceL1",[gg]],["ReduceL2",[bg]],["ReduceLogSum",[Sg]],["ReduceLogSumExp",[_g]],["ReduceSumSquare",[xg]],["Relu",[Yg]],["Resize",[Ib,Cb]],["RotaryEmbedding",[ab]],["ScatterND",[Eb,Tb]],["Sigmoid",[Jg]],["Sin",[r0]],["Sinh",[i0]],["Slice",[Ab,Ob]],["SkipLayerNormalization",[zb]],["Split",[ib,nb]],["Sqrt",[n0]],["Softmax",[Rb,Mb]],["Sub",[b0]],["Tan",[s0]],["Tanh",[a0]],["ThresholdedRelu",[l0,Li]],["Tile",[Bb]],["Transpose",[ig,ng]],["Where",[Nb]]])}),Pb,vx=X(()=>{Rt(),wr(),we(),Pb=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){sr(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ft(e.programInfo.name)}dispose(){}build(e,t){sr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=rg(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});Ie("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ft(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Ub={};_i(Ub,{WebGpuBackend:()=>Lb});var ah,oh,lh,Lb,$x=X(()=>{Rt(),me(),wr(),Qm(),O1(),wx(),vx(),ah=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},oh=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${ah(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},lh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Lb=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=s=>t.features.has(s)&&r.push(s)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new lh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=eg(this),this.programManager=new Pb(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qo(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;sr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],s=n.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=n.programName,c=n.inputTensorViews,f=n.outputTensorViews,h=t[i*2],b=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let _=Number(h-this.queryTimeBase),y=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(S=>({dims:S.dims,dataType:fr(S.dataType)})),outputsMetadata:f.map(S=>({dims:S.dims,dataType:fr(S.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:_,endTime:y});else{let S="";c.forEach((w,T)=>{S+=`input[${T}]: [${w.dims}] | ${fr(w.dataType)}, `});let v="";f.forEach((w,T)=>{v+=`output[${T}]: [${w.dims}] | ${fr(w.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${S}${v}start time: ${_} ns, execution time: ${y-_} ns`)}Zn("GPU",`${d}::${h}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Ft()}run(e,t,r,i,n,s){sr(e.name);let a=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);a.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((w,T)=>T):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=s)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let T=c[w]===-1,k=c[w]===-2,I=T||k?n(o[w].dataType,o[w].dims):i(c[w],o[w].dataType,o[w].dims);if(f.push(I),I.data===0)continue;let O=this.gpuDataManager.get(I.data);if(!O)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(O),k){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(O)}h.push(O)}if(a.length!==t.length||h.length!==f.length){if(h.length===0)return Ft(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let w=0,T=[];d.forEach(A=>{let $=typeof A.data=="number"?[A.data]:A.data;if($.length===0)return;let q=A.type===10?2:4,V,ue;A.type===10?(ue=$.length>4?16:$.length>2?8:$.length*q,V=$.length>4?16:q*$.length):(ue=$.length<=2?$.length*q:16,V=16),w=Math.ceil(w/ue)*ue,T.push(w);let ie=A.type===10?8:4;w+=$.length>4?Math.ceil($.length/ie)*V:$.length*q});let k=16;w=Math.ceil(w/k)*k;let I=new ArrayBuffer(w);d.forEach((A,$)=>{let q=T[$],V=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(I,q,V.length).set(V);else if(A.type===12)new Uint32Array(I,q,V.length).set(V);else if(A.type===10)new Uint16Array(I,q,V.length).set(V);else if(A.type===1)new Float32Array(I,q,V.length).set(V);else throw new Error(`Unsupported uniform type: ${fr(A.type)}`)});let O=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(O.buffer,0,I,0,w),this.gpuDataManager.release(O.id),b={offset:0,size:w,buffer:O.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,S=oh(e,t,y),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),Ie("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let T=d[w],k=T.type,I=typeof T.data=="number"?1:T.data.length,[O,A]=v.uniformVariablesInfo[w];if(k!==O||I!==A)throw new Error(`Uniform variable ${w} mismatch: expect type ${O} with size ${A}, got type ${k} with size ${I} in program "${v.programInfo.name}".`)}}if(Ie("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,a,h,_,b),Ft(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Db.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ie("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await so(this,e,t);return Yo(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ie("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ie("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ie("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),qb={};_i(qb,{init:()=>Wb});var Bn,uh,Wb,xx=X(()=>{me(),wr(),ye(),A1(),Bn=class Fb{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(N.size(t)!==N.size(this.dims))throw new Error("Invalid new shape");return new Fb(this.module,this.dataType,this.data,t)}},uh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,s));let a=Number(e.getValue(i*n++,s));this.outputCount=Number(e.getValue(i*n++,s)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(i*n++,s)),c=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,s)),h=[];for(let b=0;b<f;b++)h.push(Number(e.getValue(i*n++,s)));o.push(new Bn(e,d,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,i=t?.outputs??[],n=(a,o,l)=>new Bn(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Gr(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Bn(this.module,a,d,o)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,n);for(let a=0;a<t.length;a++)this.module.setValue(s+i*(a+1),t[a],n);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Wb=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=($x(),rn(Ub)).WebGpuBackend,a=new s;await a.initialize(r,i),n("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,c=!1)=>{if(c)Ie("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{Ie("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),f)}},async(o,l,d)=>{Ie("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,c)=>{Ie("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new uh(t,a,Number(l));return a.computeKernel(Number(o),f,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Jm(r);n("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,c)=>s.ensureTensor(a,o,l,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),dh,ul,dl,Tr,ch,qa,is,cl,pl,Wa,fl,hl,ml,Vb=X(()=>{Rt(),I1(),C1(),me(),ti(),jo(),jm(),dh=(e,t)=>{qe()._OrtInit(e,t)!==0&&Ne("Can't initialize onnxruntime.")},ul=async e=>{dh(e.wasm.numThreads,Yn(e.logLevel))},dl=async(e,t)=>{qe().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(xx(),rn(qb)).init;t==="webgpu"&&await i("webgpu",qe(),e,r),t==="webnn"&&await i("webnn",qe(),e)}},Tr=new Map,ch=e=>{let t=qe(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Ne("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(n,s)),Number(t.getValue(n+i,s))]}finally{t.stackRestore(r)}},qa=(e,t)=>{let r=qe(),i=r.stackSave(),n=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&Ne("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));n=Number(r.getValue(a+s,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(n+8+f*s,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(n+8+(f+d)*s,"*")))}return[o,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},is=e=>{let t=qe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},cl=async(e,t)=>{let r,i,n=qe();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=is(e);let s=0,a=0,o=0,l=[],d=[],c=[];try{if([a,l]=await Gm(t),t?.externalData&&n.mountExternalData){let k=[];for(let I of t.externalData){let O=typeof I=="string"?I:I.path;k.push(Zo(typeof I=="string"?I:I.data).then(A=>{n.mountExternalData(O,A)}))}await Promise.all(k)}for(let k of t?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof k!="string"){let I=k,O=I?.context,A=I?.gpuDevice,$=I?.deviceType,q=I?.powerPreference;O?n.currentContext=O:A?n.currentContext=await n.webnnCreateMLContext(A):n.currentContext=await n.webnnCreateMLContext({deviceType:$,powerPreference:q})}else n.currentContext=await n.webnnCreateMLContext();break}s=await n._OrtCreateSession(r,i,a),n.webgpuOnCreateSession?.(s),s===0&&Ne("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[f,h]=ch(s),b=!!t?.enableGraphCapture,_=[],y=[],S=[],v=[],w=[];for(let k=0;k<f;k++){let[I,O,A]=qa(s,k);I===0&&Ne("Can't get an input name."),d.push(I);let $=n.UTF8ToString(I);_.push($),S.push(O===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:fr(O),shape:A})}for(let k=0;k<h;k++){let[I,O,A]=qa(s,k+f);I===0&&Ne("Can't get an output name."),c.push(I);let $=n.UTF8ToString(I);y.push($),v.push(O===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:fr(O),shape:A});{if(b&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let q=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[$]??"cpu",V=n.webnnIsGraphOutput;if(q==="cpu"&&V&&V(s,$)){w.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(b&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(q)}}let T=null;return w.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(s),o===0&&Ne("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>io(k))}),Tr.set(s,[s,d,c,T,b,!1]),[s,_,y,S,v]}catch(f){throw d.forEach(h=>n._OrtFree(h)),c.forEach(h=>n._OrtFree(h)),o!==0&&n._OrtReleaseBinding(o)!==0&&Ne("Can't release IO binding."),s!==0&&n._OrtReleaseSession(s)!==0&&Ne("Can't release session."),f}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a)!==0&&Ne("Can't release session options."),l.forEach(f=>n._free(f)),n.unmountExternalData?.()}},pl=e=>{let t=qe(),r=Tr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&Ne("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Ne("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&Ne("Can't release session."),Tr.delete(e)},Wa=async(e,t,r,i,n,s,a=!1)=>{if(!e){t.push(0);return}let o=qe(),l=o.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,b,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=Gr(Hr(d),c);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=w(i,s,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=Gr(Hr(d),c);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=w(i,v,Hr(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,b=o._malloc(_),r.push(b);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(b+w*l,Lt(v[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&w&&T){let k=o.UTF8ToString(n);if(w(i,k)||T(i,k)){let I=Hr(d);_=Gr(I,c),h="ml-tensor";let O=o.webnnCreateTemporaryTensor,A=o.webnnUploadTensor;if(!O||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await O(i,I,c);A($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),b=$}else _=v.byteLength,b=o._malloc(_),r.push(b),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),b)}else _=v.byteLength,b=o._malloc(_),r.push(b),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),b)}}let y=o.stackSave(),S=o.stackAlloc(4*c.length);try{c.forEach((w,T)=>o.setValue(S+T*l,w,l===4?"i32":"i64"));let v=o._OrtCreateTensor(Hr(d),b,_,S,c.length,io(h));v===0&&Ne(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{o.stackRestore(y)}},fl=async(e,t,r,i,n,s)=>{let a=qe(),o=a.PTR_SIZE,l=Tr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],b=l[4],_=l[5],y=t.length,S=i.length,v=0,w=[],T=[],k=[],I=[],O=[],A=a.stackSave(),$=a.stackAlloc(y*o),q=a.stackAlloc(y*o),V=a.stackAlloc(S*o),ue=a.stackAlloc(S*o);try{[v,w]=Hm(s),Xr("wasm prepareInputOutputTensor");for(let D=0;D<y;D++)await Wa(r[D],T,I,e,c[t[D]],t[D],b);for(let D=0;D<S;D++)await Wa(n[D],k,I,e,f[i[D]],y+i[D],b);Zr("wasm prepareInputOutputTensor");for(let D=0;D<y;D++)a.setValue($+D*o,T[D],"*"),a.setValue(q+D*o,c[t[D]],"*");for(let D=0;D<S;D++)a.setValue(V+D*o,k[D],"*"),a.setValue(ue+D*o,f[i[D]],"*");if(h&&!_){let{handle:D,outputPreferredLocations:H,outputPreferredLocationsEncoded:ee}=h;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);Xr("wasm bindInputsOutputs");for(let Q=0;Q<y;Q++){let pe=t[Q];await a._OrtBindInput(D,c[pe],T[Q])!==0&&Ne(`Can't bind input[${Q}] for session=${e}.`)}for(let Q=0;Q<S;Q++){let pe=i[Q];n[Q]?.[3]?(O.push(k[Q]),a._OrtBindOutput(D,f[pe],k[Q],0)!==0&&Ne(`Can't bind pre-allocated output[${Q}] for session=${e}.`)):a._OrtBindOutput(D,f[pe],0,ee[pe])!==0&&Ne(`Can't bind output[${Q}] to ${H[Q]} for session=${e}.`)}Zr("wasm bindInputsOutputs"),Tr.set(e,[d,c,f,h,b,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let ie;h?ie=await a._OrtRunWithBinding(d,h.handle,S,V,v):ie=await a._OrtRun(d,q,$,y,ue,S,V,v),ie!==0&&Ne("failed to call OrtRun().");let K=[],M=[];Xr("wasm ProcessOutputTensor");for(let D=0;D<S;D++){let H=Number(a.getValue(V+D*o,"*"));if(H===k[D]||O.includes(k[D])){K.push(n[D]),H!==k[D]&&a._OrtReleaseTensor(H)!==0&&Ne("Can't release tensor.");continue}let ee=a.stackSave(),Q=a.stackAlloc(4*o),pe=!1,be,L=0;try{a._OrtGetTensorData(H,Q,Q+o,Q+2*o,Q+3*o)!==0&&Ne(`Can't access output tensor data on index ${D}.`);let oe=o===4?"i32":"i64",le=Number(a.getValue(Q,oe));L=a.getValue(Q+o,"*");let Z=a.getValue(Q+o*2,"*"),Ke=Number(a.getValue(Q+o*3,oe)),Fe=[];for(let Ae=0;Ae<Ke;Ae++)Fe.push(Number(a.getValue(Z+Ae*o,oe)));a._OrtFree(Z)!==0&&Ne("Can't free memory for tensor dims.");let ze=Fe.reduce((Ae,Be)=>Ae*Be,1);be=fr(le);let Ye=h?.outputPreferredLocations[i[D]];if(be==="string"){if(Ye==="gpu-buffer"||Ye==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ae=[];for(let Be=0;Be<ze;Be++){let pt=a.getValue(L+Be*o,"*"),C=a.getValue(L+(Be+1)*o,"*"),z=Be===ze-1?void 0:C-pt;Ae.push(a.UTF8ToString(pt,z))}K.push([be,Fe,Ae,"cpu"])}else if(Ye==="gpu-buffer"&&ze>0){let Ae=a.jsepGetBuffer;if(!Ae)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Be=Ae(L),pt=Gr(le,ze);if(pt===void 0||!Ko(be))throw new Error(`Unsupported data type: ${be}`);pe=!0,K.push([be,Fe,{gpuBuffer:Be,download:a.jsepCreateDownloader(Be,pt,be),dispose:()=>{a._OrtReleaseTensor(H)!==0&&Ne("Can't release tensor.")}},"gpu-buffer"])}else if(Ye==="ml-tensor"&&ze>0){let Ae=a.webnnEnsureTensor,Be=a.webnnIsGraphInputOutputTypeSupported;if(!Ae||!Be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Gr(le,ze)===void 0||!Xo(be))throw new Error(`Unsupported data type: ${be}`);if(!Be(e,be,!1))throw new Error(`preferredLocation "ml-tensor" for ${be} output is not supported by current WebNN Context.`);let pt=await Ae(e,L,le,Fe,!1);pe=!0,K.push([be,Fe,{mlTensor:pt,download:a.webnnCreateMLTensorDownloader(L,be),dispose:()=>{a.webnnReleaseTensorId(L),a._OrtReleaseTensor(H)}},"ml-tensor"])}else if(Ye==="ml-tensor-cpu-output"&&ze>0){let Ae=a.webnnCreateMLTensorDownloader(L,be)(),Be=K.length;pe=!0,M.push((async()=>{let pt=[Be,await Ae];return a.webnnReleaseTensorId(L),a._OrtReleaseTensor(H),pt})()),K.push([be,Fe,[],"cpu"])}else{let Ae=ms(be),Be=new Ae(ze);new Uint8Array(Be.buffer,Be.byteOffset,Be.byteLength).set(a.HEAPU8.subarray(L,L+Be.byteLength)),K.push([be,Fe,Be,"cpu"])}}finally{a.stackRestore(ee),be==="string"&&L&&a._free(L),pe||a._OrtReleaseTensor(H)}}h&&!b&&(a._OrtClearBoundOutputs(h.handle)!==0&&Ne("Can't clear bound outputs."),Tr.set(e,[d,c,f,h,b,!1]));for(let[D,H]of await Promise.all(M))K[D][2]=H;return Zr("wasm ProcessOutputTensor"),K}finally{a.webnnOnRunEnd?.(d),a.stackRestore(A),T.forEach(ie=>a._OrtReleaseTensor(ie)),k.forEach(ie=>a._OrtReleaseTensor(ie)),I.forEach(ie=>a._free(ie)),v!==0&&a._OrtReleaseRunOptions(v),w.forEach(ie=>a._free(ie))}},hl=e=>{let t=qe(),r=Tr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Ne("Can't get an profile file name."),t._OrtFree(n)},ml=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Er,At,si,Ri,Mi,Nn,Fa,Dn,qr,Wr,ph,Hb,Gb,jb,Kb,Xb,Zb,Qb,Yb=X(()=>{Rt(),Vb(),ti(),Ho(),Er=()=>!!He.wasm.proxy&&typeof document<"u",si=!1,Ri=!1,Mi=!1,Dn=new Map,qr=(e,t)=>{let r=Dn.get(e);r?r.push(t):Dn.set(e,[t])},Wr=()=>{if(si||!Ri||Mi||!At)throw new Error("worker not ready")},ph=e=>{switch(e.data.type){case"init-wasm":si=!1,e.data.err?(Mi=!0,Fa[1](e.data.err)):(Ri=!0,Fa[0]()),Nn&&(URL.revokeObjectURL(Nn),Nn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Dn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Hb=async()=>{if(!Ri){if(si)throw new Error("multiple calls to 'initWasm()' detected.");if(Mi)throw new Error("previous call to 'initWasm()' failed.");if(si=!0,Er())return new Promise((e,t)=>{At?.terminate(),Fm().then(([r,i])=>{try{At=i,At.onerror=s=>t(s),At.onmessage=ph,Fa=[e,t];let n={type:"init-wasm",in:He};!n.in.wasm.wasmPaths&&(r||ro)&&(n.in.wasm.wasmPaths={wasm:new URL("/deepfilternet-web/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href}),At.postMessage(n),Nn=r}catch(n){t(n)}},t)});try{await Go(He.wasm),await ul(He),Ri=!0}catch(e){throw Mi=!0,e}finally{si=!1}}},Gb=async e=>{if(Er())return Wr(),new Promise((t,r)=>{qr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:He}};At.postMessage(i)});await dl(He,e)},jb=async e=>Er()?(Wr(),new Promise((t,r)=>{qr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};At.postMessage(i,[e.buffer])})):is(e),Kb=async(e,t)=>{if(Er()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Wr(),new Promise((r,i)=>{qr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),At.postMessage(n,s)})}else return cl(e,t)},Xb=async e=>{if(Er())return Wr(),new Promise((t,r)=>{qr("release",[t,r]);let i={type:"release",in:e};At.postMessage(i)});pl(e)},Zb=async(e,t,r,i,n,s)=>{if(Er()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Wr(),new Promise((a,o)=>{qr("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};At.postMessage(d,ml(l))})}else return fl(e,t,r,i,n,s)},Qb=async e=>{if(Er())return Wr(),new Promise((t,r)=>{qr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};At.postMessage(i)});hl(e)}}),Va,fh,Jb,Sx=X(()=>{Rt(),Yb(),me(),Vo(),jm(),Va=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fh=e=>{switch(e[3]){case"cpu":return new xt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ko(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return xt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Xo(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return xt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Jb=class{async fetchModelAndCopyToWasmMemory(e){return jb(await Zo(e))}async loadModel(e,t){sr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Kb(r,t),Ft()}async dispose(){return Xb(this.sessionId)}async run(e,t,r){sr();let i=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],b=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);i.push(b),n.push(_)});let s=[],a=[];Object.entries(t).forEach(f=>{let h=f[0],b=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);s.push(b),a.push(_)});let o=i.map((f,h)=>Va(f,()=>`input "${this.inputNames[n[h]]}"`)),l=s.map((f,h)=>f?Va(f,()=>`output "${this.outputNames[a[h]]}"`):null),d=await Zb(this.sessionId,n,o,a,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[a[f]]]=s[f]??fh(d[f]);return Ft(),c}startProfiling(){}endProfiling(){Qb(this.sessionId)}}}),e_={};_i(e_,{OnnxruntimeWebAssemblyBackend:()=>_o,initializeFlags:()=>bo,wasmBackend:()=>t_});var bo,_o,t_,kx=X(()=>{Rt(),Yb(),Sx(),bo=()=>{(typeof He.wasm.initTimeout!="number"||He.wasm.initTimeout<0)&&(He.wasm.initTimeout=0);let e=He.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),He.wasm.simd=!1),typeof He.wasm.proxy!="boolean"&&(He.wasm.proxy=!1),typeof He.wasm.trace!="boolean"&&(He.wasm.trace=!1),typeof He.wasm.numThreads!="number"||!Number.isInteger(He.wasm.numThreads)||He.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)He.wasm.numThreads=1;else{let t=typeof navigator>"u"?d1("node:os").cpus().length:navigator.hardwareConcurrency;He.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},_o=class{async init(e){bo(),await Hb(),await Gb(e)}async createInferenceSessionHandler(e,t){let r=new Jb;return await r.loadModel(e,t),r}},t_=new _o});Rt();Rt();Rt();var Tx="1.26.0";{let e=(kx(),rn(e_)).wasmBackend;oi("webgpu",e,5),oi("webnn",e,5),oi("cpu",e,10),oi("wasm",e,10)}Object.defineProperty(He.versions,"web",{value:Tx,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let yo=null,wo=null,vo=null;const hr={sr:48e3,fftSize:960,hopSize:480,nbErb:32};let $o=null,xo=null;async function r_(){He.wasm.numThreads=navigator.hardwareConcurrency||4;try{yo=await Xi.create("/standard-model/enc.onnx",{executionProviders:["wasm"]}),wo=await Xi.create("/standard-model/df_dec.onnx",{executionProviders:["wasm"]}),vo=await Xi.create("/standard-model/erb_dec.onnx",{executionProviders:["wasm"]}),$o=new xt("float32",new Float32Array(1*64*4*20),[1,64,4,20]),xo=new xt("float32",new Float32Array(2*1*128),[2,1,128]),console.log("DeepFilterNet3 models loaded successfully")}catch(e){throw console.error("Failed to load models:",e),e}}async function Ex(e,t,r){if(!yo||!wo||!vo)throw new Error("Models not loaded");let i=e;t!==hr.sr&&(i=zx(e,t,hr.sr)),r?.(.05);const n=[],s=hr.hopSize*4,a=hr.hopSize;for(let o=0;o<i.length;o+=a){const l=i.slice(o,Math.min(o+s,i.length)),d=new Float32Array(s);d.set(l.slice(0,Math.min(l.length,s)));const{feat_erb:c,feat_spec:f}=Ix(d),h=await yo.run({feat_erb:c,feat_spec:f,states_in:$o});h.states_out&&($o=h.states_out);const b=await vo.run({emb:h.emb,states_in:xo});b.states_out&&(xo=b.states_out);const _=await wo.run({emb:h.emb,erb_gains:b.erb_gains}),y=Cx(_.spec_out,d);for(let S=0;S<y.length;S++)n.length<o+S+1?n.push(y[S]):n[o+S]+=y[S]*.5;r?.(.05+o/i.length*.9)}return r?.(.95),new Float32Array(n.slice(0,e.length))}function Ix(e){const t=hr.fftSize,r=hr.hopSize,i=hr.nbErb,n=t/2+1,s=new Float32Array(t);for(let d=0;d<t;d++)s[d]=.5*(1-Math.cos(2*Math.PI*d/(t-1)));const a=Math.floor((e.length-t)/r)+1,o=new Float32Array(n*a*2);for(let d=0;d<a;d++){const c=d*r,f=new Float32Array(t);for(let h=0;h<t;h++)c+h<e.length&&(f[h]=e[c+h]*s[h]);for(let h=0;h<n;h++){let b=0,_=0;for(let S=0;S<t;S++){const v=-2*Math.PI*h*S/t;b+=f[S]*Math.cos(v),_+=f[S]*Math.sin(v)}const y=(d*n+h)*2;o[y]=b,o[y+1]=_}}const l=new Float32Array(i*a);for(let d=0;d<a;d++)for(let c=0;c<i;c++){let f=0;const h=Math.floor(c/i*n),b=Math.floor((c+1)/i*n);for(let _=h;_<b;_++){const y=(d*n+_)*2;f+=Math.sqrt(o[y]*o[y]+o[y+1]*o[y+1])}l[d*i+c]=f/(b-h)}return{feat_erb:new xt("float32",l,[1,1,a,i]),feat_spec:new xt("float32",o,[1,1,a,n*2])}}function Cx(e,t){const r=hr.fftSize,i=hr.hopSize,n=r/2+1,s=1,a=e.data,o=new Float32Array(t.length);for(let l=0;l<s;l++){const d=new Float32Array(r);for(let h=0;h<n;h++){const b=(l*n+h)*2,_=a[b]||0,y=a[b+1]||0;for(let S=0;S<r;S++){const v=2*Math.PI*h*S/r;d[S]+=_*Math.cos(v)-y*Math.sin(v)}}const c=new Float32Array(r);for(let h=0;h<r;h++)c[h]=.5*(1-Math.cos(2*Math.PI*h/(r-1)));const f=l*i;for(let h=0;h<r&&f+h<o.length;h++)o[f+h]+=d[h]/r*c[h]}return o}function zx(e,t,r){const i=r/t,n=Math.floor(e.length*i),s=new Float32Array(n);for(let a=0;a<n;a++){const o=a/i,l=Math.floor(o),d=Math.min(l+1,e.length-1),c=o-l;s[a]=e[l]*(1-c)+e[d]*c}return s}const Ax=Object.freeze(Object.defineProperty({__proto__:null,loadModel:r_,runInference:Ex},Symbol.toStringTag,{value:"Module"})),Ox={class:"min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-200"},Rx={class:"bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10"},Mx={class:"max-w-4xl mx-auto px-4 py-3"},Bx={class:"flex items-center justify-between"},Nx={class:"flex items-center gap-3"},Dx={class:"flex bg-slate-100 dark:bg-slate-700/50 rounded-lg p-1"},Px=["title"],Ux={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},Lx={key:1,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},qx={class:"max-w-4xl mx-auto px-4 py-6"},Wx={key:0,class:"space-y-6"},Fx={key:0,class:"p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800"},Vx={class:"flex items-center gap-2"},Hx={class:"font-medium"},Gx={class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"},jx={class:"flex items-center justify-between mb-4"},Kx={class:"flex items-center gap-2"},Xx={class:"text-xs text-slate-400 dark:text-slate-500"},Zx={class:"flex justify-center pt-2"},Qx={class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"},Yx={key:1,class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8"},Jx=on({__name:"App",setup(e){const t=Ze(null),r=Ze(null),i=Ze(null),n=Ze("unloaded"),s=Ze("idle"),a=Ze(0),o=Ze(null),l=Ze("home"),d=Ze(!1),c=Ze(null),f=Ze(null),h=Xn(()=>r.value?Rd(r.value,200):null),b=Xn(()=>i.value?Rd(i.value,200):null);pi(d,w=>{w?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode",String(w))},{immediate:!0}),localStorage.getItem("darkMode")==="true"&&(d.value=!0);function _(){d.value=!d.value}async function y(w){o.value=null,t.value=w,i.value=null;try{r.value=await r1(w)}catch{o.value="无法解码音频文件",t.value=null,r.value=null}}async function S(){if(!(!r.value||n.value!=="ready")){o.value=null,s.value="processing",a.value=0;try{i.value=await a1(r.value,w=>{a.value=w}),s.value="done"}catch{s.value="error",o.value="处理失败，请重试"}}}async function v(){try{n.value="downloading",await r_(),n.value="ready"}catch{n.value="error",o.value="模型加载失败"}}return ps(()=>{v()}),(w,T)=>(Je(),tt("div",Ox,[ae("header",Rx,[ae("div",Mx,[ae("div",Bx,[T[4]||(T[4]=Hs('<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path></svg></div><div><h1 class="text-xl font-bold text-slate-900 dark:text-white">DeepFilterNet Web</h1><p class="text-xs text-slate-500 dark:text-slate-400">浏览器端音频降噪</p></div></div>',1)),ae("div",Nx,[ae("nav",Dx,[ae("button",{class:mr(["px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150",l.value==="home"?"bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"]),onClick:T[0]||(T[0]=k=>l.value="home")}," 首页 ",2),ae("button",{class:mr(["px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150",l.value==="about"?"bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"]),onClick:T[1]||(T[1]=k=>l.value="about")}," 关于 ",2)]),ae("button",{class:mr(["p-2.5 rounded-lg transition-colors",d.value?"bg-amber-100 dark:bg-amber-900/50 text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-900":"bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600"]),onClick:_,title:d.value?"切换到亮色模式":"切换到深色模式"},[d.value?(Je(),tt("svg",Ux,[...T[2]||(T[2]=[ae("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])):(Je(),tt("svg",Lx,[...T[3]||(T[3]=[ae("path",{d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])]))],10,Px)])])])]),ae("main",qx,[l.value==="home"?(Je(),tt("div",Wx,[T[9]||(T[9]=ae("div",{class:"text-center py-2"},[ae("p",{class:"text-slate-500 dark:text-slate-400 text-sm"}," 纯浏览器端处理，保护隐私，无需上传服务器 ")],-1)),o.value?(Je(),tt("div",Fx,[ae("div",Vx,[T[5]||(T[5]=ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1)),ae("span",Hx,Yt(o.value),1)])])):zr("",!0),mt(O$,{onFileSelected:y}),r.value?(Je(),tt(kt,{key:1},[ae("div",Gx,[ae("div",jx,[ae("div",Kx,[T[7]||(T[7]=ae("div",{class:"w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center"},[ae("span",{class:"text-sm"},"📄")],-1)),ae("div",null,[T[6]||(T[6]=ae("h3",{class:"text-sm font-semibold text-slate-700 dark:text-slate-200"},"原始音频",-1)),ae("p",Xx,Yt(t.value?.name),1)])])]),mt(zd,{peaks:h.value,color:"#94a3b8","current-time":c.value?.currentTime,duration:r.value.duration,onSeek:()=>{}},null,8,["peaks","current-time","duration"])]),mt(Ad,{ref_key:"originalPlayerRef",ref:c,buffer:r.value,label:"原始音频"},null,8,["buffer"])],64)):zr("",!0),ae("div",Zx,[mt(P$,{status:s.value,disabled:!r.value||n.value!=="ready",onProcess:S},null,8,["status","disabled"])]),i.value?(Je(),tt(kt,{key:2},[ae("div",Qx,[T[8]||(T[8]=Hs('<div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center"><span class="text-sm">✨</span></div><div><h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">降噪后音频</h3><p class="text-xs text-slate-400 dark:text-slate-500">处理完成</p></div></div></div>',1)),mt(zd,{peaks:b.value,color:"#22c55e","current-time":f.value?.currentTime,duration:i.value.duration,progress:1,onSeek:()=>{}},null,8,["peaks","current-time","duration"])]),mt(Ad,{ref_key:"processedPlayerRef",ref:f,buffer:i.value,label:"降噪后"},null,8,["buffer"])],64)):zr("",!0)])):l.value==="about"?(Je(),tt("div",Yx,[...T[10]||(T[10]=[Hs('<div class="space-y-8"><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">项目简介</h2><p class="text-slate-600 dark:text-slate-300 leading-relaxed"> DeepFilterNet Web 是一个纯前端音频降噪工具，可以在浏览器中直接对音频进行降噪处理， 无需上传到服务器。所有处理都在本地完成，保护用户隐私。 </p></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">技术架构</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">⚡</div><div class="font-medium text-slate-900 dark:text-white">构建工具</div><div class="text-sm text-slate-500 dark:text-slate-400">Vite 5</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">💚</div><div class="font-medium text-slate-900 dark:text-white">前端框架</div><div class="text-sm text-slate-500 dark:text-slate-400">Vue 3.4</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">🎨</div><div class="font-medium text-slate-900 dark:text-white">样式框架</div><div class="text-sm text-slate-500 dark:text-slate-400">TailwindCSS</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">🧠</div><div class="font-medium text-slate-900 dark:text-white">模型运行时</div><div class="text-sm text-slate-500 dark:text-slate-400">ONNX Runtime</div></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">处理流程</h2><div class="flex items-center justify-between gap-2"><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">1</span></div><p class="text-sm text-slate-600 dark:text-slate-300">上传音频</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">2</span></div><p class="text-sm text-slate-600 dark:text-slate-300">解码音频</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">3</span></div><p class="text-sm text-slate-600 dark:text-slate-300">模型推理</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-green-300 dark:from-blue-700 dark:to-green-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-green-600 dark:text-green-300 font-bold">4</span></div><p class="text-sm text-slate-600 dark:text-slate-300">下载结果</p></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">核心优势</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">🔒</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">隐私安全</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">音频不离开设备，无上传风险</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">📴</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">离线可用</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">模型缓存后无需网络</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">📂</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">开源透明</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">基于 DeepFilterNet 开源模型</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">✨</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">现代体验</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">拖拽上传、实时波形、在线播放</p></div></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">内置模型</h2><div class="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50/50 dark:bg-blue-900/20"><div class="flex items-center gap-2 mb-2"><span class="text-xl">🎯</span><h3 class="font-bold text-slate-900 dark:text-white">DeepFilterNet3 标准模型</h3></div><p class="text-sm text-slate-600 dark:text-slate-400">基于 DeepFilterNet3 优化的 ONNX 模型，适合通用音频降噪</p><p class="text-xs text-slate-400 dark:text-slate-500 mt-2">模型文件: enc.onnx + df_dec.onnx + erb_dec.onnx</p></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">致谢</h2><div class="flex flex-wrap gap-3"><a href="https://github.com/Rikorose/DeepFilterNet" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> DeepFilterNet </a><a href="https://onnxruntime.ai/" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> ONNX Runtime </a><a href="https://hf-mirror.com" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> HuggingFace Mirror </a></div></section></div>',1)])])):zr("",!0)]),T[11]||(T[11]=ae("footer",{class:"text-center py-6 text-sm text-slate-400 dark:text-slate-500"},[ae("p",null,"Powered by DeepFilterNet + ONNX Runtime Web")],-1))]))}});T$(Jx).mount("#app");
