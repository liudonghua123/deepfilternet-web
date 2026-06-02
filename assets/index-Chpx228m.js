(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Ze={},pn=[],ar=()=>{},hh=()=>!1,ds=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cs=e=>e.startsWith("onUpdate:"),ft=Object.assign,ko=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},uv=Object.prototype.hasOwnProperty,Fe=(e,t)=>uv.call(e,t),xe=Array.isArray,fn=e=>ui(e)==="[object Map]",mh=e=>ui(e)==="[object Set]",ed=e=>ui(e)==="[object Date]",Te=e=>typeof e=="function",nt=e=>typeof e=="string",or=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",gh=e=>(He(e)||Te(e))&&Te(e.then)&&Te(e.catch),_h=Object.prototype.toString,ui=e=>_h.call(e),dv=e=>ui(e).slice(8,-1),bh=e=>ui(e)==="[object Object]",To=e=>nt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=So(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},cv=/-\w/g,Ht=ps(e=>e.replace(cv,t=>t.slice(1).toUpperCase())),pv=/\B([A-Z])/g,rn=ps(e=>e.replace(pv,"-$1").toLowerCase()),yh=ps(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fs=ps(e=>e?`on${yh(e)}`:""),ir=(e,t)=>!Object.is(e,t),qs=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},vh=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},fv=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let td;const fs=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(e){if(xe(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=nt(n)?_v(n):di(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(nt(e)||He(e))return e}const hv=/;(?![^(]*\))/g,mv=/:([^]+)/,gv=/\/\*[^]*?\*\//g;function _v(e){const t={};return e.replace(gv,"").split(hv).forEach(r=>{if(r){const n=r.split(mv);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function yr(e){let t="";if(nt(e))t=e;else if(xe(e))for(let r=0;r<e.length;r++){const n=yr(e[r]);n&&(t+=n+" ")}else if(He(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yv=So(bv);function wh(e){return!!e||e===""}function vv(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Eo(e[n],t[n]);return r}function Eo(e,t){if(e===t)return!0;let r=ed(e),n=ed(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=or(e),n=or(t),r||n)return e===t;if(r=xe(e),n=xe(t),r||n)return r&&n?vv(e,t):!1;if(r=He(e),n=He(t),r||n){if(!r||!n)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Eo(e[a],t[a]))return!1}}return String(e)===String(t)}const $h=e=>!!(e&&e.__v_isRef===!0),Wt=e=>nt(e)?e:e==null?"":xe(e)||He(e)&&(e.toString===_h||!Te(e.toString))?$h(e)?Wt(e.value):JSON.stringify(e,xh,2):String(e),xh=(e,t)=>$h(t)?xh(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[Ws(n,s)+" =>"]=i,r),{})}:mh(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Ws(r))}:or(t)?Ws(t):He(t)&&!xe(t)&&!bh(t)?String(t):t,Ws=(e,t="")=>{var r;return or(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class wv{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&pt&&(pt.active?(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=pt;try{return pt=this,t()}finally{pt=r}}}on(){++this._on===1&&(this.prevScope=pt,pt=this)}off(){if(this._on>0&&--this._on===0){if(pt===this)pt=this.prevScope;else{let t=pt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function $v(){return pt}let Xe;const Vs=new WeakSet;class Sh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&(pt.active?pt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vs.has(this)&&(Vs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),Eh(this);const t=Xe,r=Gt;Xe=this,Gt=!0;try{return this.fn()}finally{Ih(this),Xe=t,Gt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zo(t);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Za(this)&&this.run()}get dirty(){return Za(this)}}let kh=0,Hn,Gn;function Th(e,t=!1){if(e.flags|=8,t){e.next=Gn,Gn=e;return}e.next=Hn,Hn=e}function Io(){kh++}function Co(){if(--kh>0)return;if(Gn){let t=Gn;for(Gn=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Hn;){let t=Hn;for(Hn=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Eh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ih(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),zo(n),xv(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Za(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ch(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ch(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ri)||(e.globalVersion=ri,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Za(e))))return;e.flags|=2;const t=e.dep,r=Xe,n=Gt;Xe=e,Gt=!0;try{Eh(e);const i=e.fn(e._value);(t.version===0||ir(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Xe=r,Gt=n,Ih(e),e.flags&=-3}}function zo(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)zo(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function xv(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let Gt=!0;const zh=[];function vr(){zh.push(Gt),Gt=!1}function wr(){const e=zh.pop();Gt=e===void 0?!0:e}function rd(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Xe;Xe=void 0;try{t()}finally{Xe=r}}}let ri=0;class Sv{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ao{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Xe||!Gt||Xe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Xe)r=this.activeLink=new Sv(Xe,this),Xe.deps?(r.prevDep=Xe.depsTail,Xe.depsTail.nextDep=r,Xe.depsTail=r):Xe.deps=Xe.depsTail=r,Ah(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Xe.depsTail,r.nextDep=void 0,Xe.depsTail.nextDep=r,Xe.depsTail=r,Xe.deps===r&&(Xe.deps=n)}return r}trigger(t){this.version++,ri++,this.notify(t)}notify(t){Io();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Co()}}}function Ah(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Ah(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Qa=new WeakMap,Xr=Symbol(""),Ya=Symbol(""),ni=Symbol("");function mt(e,t,r){if(Gt&&Xe){let n=Qa.get(e);n||Qa.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Ao),i.map=n,i.key=r),i.track()}}function gr(e,t,r,n,i,s){const a=Qa.get(e);if(!a){ri++;return}const o=l=>{l&&l.trigger()};if(Io(),t==="clear")a.forEach(o);else{const l=xe(e),d=l&&To(r);if(l&&r==="length"){const c=Number(n);a.forEach((f,h)=>{(h==="length"||h===ni||!or(h)&&h>=c)&&o(f)})}else switch((r!==void 0||a.has(void 0))&&o(a.get(r)),d&&o(a.get(ni)),t){case"add":l?d&&o(a.get("length")):(o(a.get(Xr)),fn(e)&&o(a.get(Ya)));break;case"delete":l||(o(a.get(Xr)),fn(e)&&o(a.get(Ya)));break;case"set":fn(e)&&o(a.get(Xr));break}}Co()}function on(e){const t=Le(e);return t===e?t:(mt(t,"iterate",ni),Mt(e)?t:t.map(Kt))}function hs(e){return mt(e=Le(e),"iterate",ni),e}function rr(e,t){return $r(e)?_n(Zr(e)?Kt(t):t):Kt(t)}const kv={__proto__:null,[Symbol.iterator](){return Hs(this,Symbol.iterator,e=>rr(this,e))},concat(...e){return on(this).concat(...e.map(t=>xe(t)?on(t):t))},entries(){return Hs(this,"entries",e=>(e[1]=rr(this,e[1]),e))},every(e,t){return pr(this,"every",e,t,void 0,arguments)},filter(e,t){return pr(this,"filter",e,t,r=>r.map(n=>rr(this,n)),arguments)},find(e,t){return pr(this,"find",e,t,r=>rr(this,r),arguments)},findIndex(e,t){return pr(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pr(this,"findLast",e,t,r=>rr(this,r),arguments)},findLastIndex(e,t){return pr(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pr(this,"forEach",e,t,void 0,arguments)},includes(...e){return Gs(this,"includes",e)},indexOf(...e){return Gs(this,"indexOf",e)},join(e){return on(this).join(e)},lastIndexOf(...e){return Gs(this,"lastIndexOf",e)},map(e,t){return pr(this,"map",e,t,void 0,arguments)},pop(){return Tn(this,"pop")},push(...e){return Tn(this,"push",e)},reduce(e,...t){return nd(this,"reduce",e,t)},reduceRight(e,...t){return nd(this,"reduceRight",e,t)},shift(){return Tn(this,"shift")},some(e,t){return pr(this,"some",e,t,void 0,arguments)},splice(...e){return Tn(this,"splice",e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return Tn(this,"unshift",e)},values(){return Hs(this,"values",e=>rr(this,e))}};function Hs(e,t,r){const n=hs(e),i=n[t]();return n!==e&&!Mt(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=r(s.value)),s}),i}const Tv=Array.prototype;function pr(e,t,r,n,i,s){const a=hs(e),o=a!==e&&!Mt(e),l=a[t];if(l!==Tv[t]){const f=l.apply(e,s);return o?Kt(f):f}let d=r;a!==e&&(o?d=function(f,h){return r.call(this,rr(e,f),h,e)}:r.length>2&&(d=function(f,h){return r.call(this,f,h,e)}));const c=l.call(a,d,n);return o&&i?i(c):c}function nd(e,t,r,n){const i=hs(e),s=i!==e&&!Mt(e);let a=r,o=!1;i!==e&&(s?(o=n.length===0,a=function(d,c,f){return o&&(o=!1,d=rr(e,d)),r.call(this,d,rr(e,c),f,e)}):r.length>3&&(a=function(d,c,f){return r.call(this,d,c,f,e)}));const l=i[t](a,...n);return o?rr(e,l):l}function Gs(e,t,r){const n=Le(e);mt(n,"iterate",ni);const i=n[t](...r);return(i===-1||i===!1)&&Bo(r[0])?(r[0]=Le(r[0]),n[t](...r)):i}function Tn(e,t,r=[]){vr(),Io();const n=Le(e)[t].apply(e,r);return Co(),wr(),n}const Ev=So("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(or));function Iv(e){or(e)||(e=String(e));const t=Le(this);return mt(t,"has",e),t.hasOwnProperty(e)}class Rh{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?Pv:Dh:s?Nh:Bh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=xe(t);if(!i){let l;if(a&&(l=kv[r]))return l;if(r==="hasOwnProperty")return Iv}const o=Reflect.get(t,r,_t(t)?t:n);if((or(r)?Oh.has(r):Ev(r))||(i||mt(t,"get",r),s))return o;if(_t(o)){const l=a&&To(r)?o:o.value;return i&&He(l)?eo(l):l}return He(o)?i?eo(o):Ro(o):o}}class Mh extends Rh{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const a=xe(t)&&To(r);if(!this._isShallow){const d=$r(s);if(!Mt(n)&&!$r(n)&&(s=Le(s),n=Le(n)),!a&&_t(s)&&!_t(n))return d||(s.value=n),!0}const o=a?Number(r)<t.length:Fe(t,r),l=Reflect.set(t,r,n,_t(t)?t:i);return t===Le(i)&&(o?ir(n,s)&&gr(t,"set",r,n):gr(t,"add",r,n)),l}deleteProperty(t,r){const n=Fe(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&gr(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!or(r)||!Oh.has(r))&&mt(t,"has",r),n}ownKeys(t){return mt(t,"iterate",xe(t)?"length":Xr),Reflect.ownKeys(t)}}class Cv extends Rh{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const zv=new Mh,Av=new Cv,Ov=new Mh(!0);const Ja=e=>e,Ei=e=>Reflect.getPrototypeOf(e);function Rv(e,t,r){return function(...n){const i=this.__v_raw,s=Le(i),a=fn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,d=i[e](...n),c=r?Ja:t?_n:Kt;return!t&&mt(s,"iterate",l?Ya:Xr),ft(Object.create(d),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Ii(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Mv(e,t){const r={get(i){const s=this.__v_raw,a=Le(s),o=Le(i);e||(ir(i,o)&&mt(a,"get",i),mt(a,"get",o));const{has:l}=Ei(a),d=t?Ja:e?_n:Kt;if(l.call(a,i))return d(s.get(i));if(l.call(a,o))return d(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&mt(Le(i),"iterate",Xr),i.size},has(i){const s=this.__v_raw,a=Le(s),o=Le(i);return e||(ir(i,o)&&mt(a,"has",i),mt(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=Le(o),d=t?Ja:e?_n:Kt;return!e&&mt(l,"iterate",Xr),o.forEach((c,f)=>i.call(s,d(c),d(f),a))}};return ft(r,e?{add:Ii("add"),set:Ii("set"),delete:Ii("delete"),clear:Ii("clear")}:{add(i){const s=Le(this),a=Ei(s),o=Le(i),l=!t&&!Mt(i)&&!$r(i)?o:i;return a.has.call(s,l)||ir(i,l)&&a.has.call(s,i)||ir(o,l)&&a.has.call(s,o)||(s.add(l),gr(s,"add",l,l)),this},set(i,s){!t&&!Mt(s)&&!$r(s)&&(s=Le(s));const a=Le(this),{has:o,get:l}=Ei(a);let d=o.call(a,i);d||(i=Le(i),d=o.call(a,i));const c=l.call(a,i);return a.set(i,s),d?ir(s,c)&&gr(a,"set",i,s):gr(a,"add",i,s),this},delete(i){const s=Le(this),{has:a,get:o}=Ei(s);let l=a.call(s,i);l||(i=Le(i),l=a.call(s,i)),o&&o.call(s,i);const d=s.delete(i);return l&&gr(s,"delete",i,void 0),d},clear(){const i=Le(this),s=i.size!==0,a=i.clear();return s&&gr(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=Rv(i,e,t)}),r}function Oo(e,t){const r=Mv(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(Fe(r,i)&&i in n?r:n,i,s)}const Bv={get:Oo(!1,!1)},Nv={get:Oo(!1,!0)},Dv={get:Oo(!0,!1)};const Bh=new WeakMap,Nh=new WeakMap,Dh=new WeakMap,Pv=new WeakMap;function Uv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ro(e){return $r(e)?e:Mo(e,!1,zv,Bv,Bh)}function Lv(e){return Mo(e,!1,Ov,Nv,Nh)}function eo(e){return Mo(e,!0,Av,Dv,Dh)}function Mo(e,t,r,n,i){if(!He(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=i.get(e);if(s)return s;const a=Uv(dv(e));if(a===0)return e;const o=new Proxy(e,a===2?n:r);return i.set(e,o),o}function Zr(e){return $r(e)?Zr(e.__v_raw):!!(e&&e.__v_isReactive)}function $r(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function Bo(e){return e?!!e.__v_raw:!1}function Le(e){const t=e&&e.__v_raw;return t?Le(t):e}function Fv(e){return!Fe(e,"__v_skip")&&Object.isExtensible(e)&&vh(e,"__v_skip",!0),e}const Kt=e=>He(e)?Ro(e):e,_n=e=>He(e)?eo(e):e;function _t(e){return e?e.__v_isRef===!0:!1}function et(e){return Ph(e,!1)}function qv(e){return Ph(e,!0)}function Ph(e,t){return _t(e)?e:new Wv(e,t)}class Wv{constructor(t,r){this.dep=new Ao,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:Le(t),this._value=r?t:Kt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Mt(t)||$r(t);t=n?t:Le(t),ir(t,r)&&(this._rawValue=t,this._value=n?t:Kt(t),this.dep.trigger())}}function Vv(e){return _t(e)?e.value:e}const Hv={get:(e,t,r)=>t==="__v_raw"?e:Vv(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return _t(i)&&!_t(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function Uh(e){return Zr(e)?e:new Proxy(e,Hv)}class Gv{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Ao(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return Th(this,!0),!0}get value(){const t=this.dep.track();return Ch(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jv(e,t,r=!1){let n,i;return Te(e)?n=e:(n=e.get,i=e.set),new Gv(n,i,r)}const Ci={},Xi=new WeakMap;let Hr;function Kv(e,t=!1,r=Hr){if(r){let n=Xi.get(r);n||Xi.set(r,n=[]),n.push(e)}}function Xv(e,t,r=Ze){const{immediate:n,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=r,d=k=>i?k:Mt(k)||i===!1||i===0?Or(k,1):Or(k);let c,f,h,g,b=!1,y=!1;if(_t(e)?(f=()=>e.value,b=Mt(e)):Zr(e)?(f=()=>d(e),b=!0):xe(e)?(y=!0,b=e.some(k=>Zr(k)||Mt(k)),f=()=>e.map(k=>{if(_t(k))return k.value;if(Zr(k))return d(k);if(Te(k))return l?l(k,2):k()})):Te(e)?t?f=l?()=>l(e,2):e:f=()=>{if(h){vr();try{h()}finally{wr()}}const k=Hr;Hr=c;try{return l?l(e,3,[g]):e(g)}finally{Hr=k}}:f=ar,t&&i){const k=f,E=i===!0?1/0:i;f=()=>Or(k(),E)}const S=$v(),w=()=>{c.stop(),S&&S.active&&ko(S.effects,c)};if(s&&t){const k=t;t=(...E)=>{k(...E),w()}}let v=y?new Array(e.length).fill(Ci):Ci;const T=k=>{if(!(!(c.flags&1)||!c.dirty&&!k))if(t){const E=c.run();if(i||b||(y?E.some((O,z)=>ir(O,v[z])):ir(E,v))){h&&h();const O=Hr;Hr=c;try{const z=[E,v===Ci?void 0:y&&v[0]===Ci?[]:v,g];v=E,l?l(t,3,z):t(...z)}finally{Hr=O}}}else c.run()};return o&&o(T),c=new Sh(f),c.scheduler=a?()=>a(T,!1):T,g=k=>Kv(k,!1,c),h=c.onStop=()=>{const k=Xi.get(c);if(k){if(l)l(k,4);else for(const E of k)E();Xi.delete(c)}},t?n?T(!0):v=c.run():a?a(T.bind(null,!0),!0):c.run(),w.pause=c.pause.bind(c),w.resume=c.resume.bind(c),w.stop=w,w}function Or(e,t=1/0,r){if(t<=0||!He(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,_t(e))Or(e.value,t,r);else if(xe(e))for(let n=0;n<e.length;n++)Or(e[n],t,r);else if(mh(e)||fn(e))e.forEach(n=>{Or(n,t,r)});else if(bh(e)){for(const n in e)Or(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Or(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(e,t,r,n){try{return n?e(...n):e()}catch(i){ms(i,t,r)}}function Xt(e,t,r,n){if(Te(e)){const i=ci(e,t,r,n);return i&&gh(i)&&i.catch(s=>{ms(s,t,r)}),i}if(xe(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Xt(e[s],t,r,n));return i}}function ms(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ze;if(t){let o=t.parent;const l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,l,d)===!1)return}o=o.parent}if(s){vr(),ci(s,null,10,[e,l,d]),wr();return}}Zv(e,r,i,n,a)}function Zv(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const wt=[];let tr=-1;const hn=[];let Ar=null,un=0;const Lh=Promise.resolve();let Zi=null;function Fh(e){const t=Zi||Lh;return e?t.then(this?e.bind(this):e):t}function Qv(e){let t=tr+1,r=wt.length;for(;t<r;){const n=t+r>>>1,i=wt[n],s=ii(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function No(e){if(!(e.flags&1)){const t=ii(e),r=wt[wt.length-1];!r||!(e.flags&2)&&t>=ii(r)?wt.push(e):wt.splice(Qv(t),0,e),e.flags|=1,qh()}}function qh(){Zi||(Zi=Lh.then(Vh))}function Yv(e){xe(e)?hn.push(...e):Ar&&e.id===-1?Ar.splice(un+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),qh()}function id(e,t,r=tr+1){for(;r<wt.length;r++){const n=wt[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;wt.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Wh(e){if(hn.length){const t=[...new Set(hn)].sort((r,n)=>ii(r)-ii(n));if(hn.length=0,Ar){Ar.push(...t);return}for(Ar=t,un=0;un<Ar.length;un++){const r=Ar[un];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Ar=null,un=0}}const ii=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Vh(e){try{for(tr=0;tr<wt.length;tr++){const t=wt[tr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ci(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tr<wt.length;tr++){const t=wt[tr];t&&(t.flags&=-2)}tr=-1,wt.length=0,Wh(),Zi=null,(wt.length||hn.length)&&Vh()}}let sr=null,Hh=null;function Qi(e){const t=sr;return sr=e,Hh=e&&e.type.__scopeId||null,t}function Jv(e,t=sr,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&md(-1);const s=Qi(t);let a;try{a=e(...i)}finally{Qi(s),n._d&&md(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Pr(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(vr(),Xt(l,r,8,[e.el,o,e,t]),wr())}}function ew(e,t){if($t){let r=$t.provides;const n=$t.parent&&$t.parent.provides;n===r&&(r=$t.provides=Object.create(n)),r[e]=t}}function Wi(e,t,r=!1){const n=Yw();if(n||gn){let i=gn?gn._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&Te(t)?t.call(n&&n.proxy):t}}const tw=Symbol.for("v-scx"),rw=()=>Wi(tw);function mn(e,t,r){return Gh(e,t,r)}function Gh(e,t,r=Ze){const{immediate:n,deep:i,flush:s,once:a}=r,o=ft({},r),l=t&&n||!t&&s!=="post";let d;if(ai){if(s==="sync"){const g=rw();d=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=ar,g.resume=ar,g.pause=ar,g}}const c=$t;o.call=(g,b,y)=>Xt(g,c,b,y);let f=!1;s==="post"?o.scheduler=g=>{St(g,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(g,b)=>{b?g():No(g)}),o.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const h=Xv(e,t,o);return ai&&(d?d.push(h):l&&h()),h}function nw(e,t,r){const n=this.proxy,i=nt(e)?e.includes(".")?jh(n,e):()=>n[e]:e.bind(n,n);let s;Te(t)?s=t:(s=t.handler,r=t);const a=hi(this),o=Gh(i,s.bind(n),r);return a(),o}function jh(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const iw=Symbol("_vte"),sw=e=>e.__isTeleport,js=Symbol("_leaveCb");function Do(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Do(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pi(e,t){return Te(e)?ft({name:e.name},t,{setup:e}):e}function Kh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function sd(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const Yi=new WeakMap;function jn(e,t,r,n,i=!1){if(xe(e)){e.forEach((y,S)=>jn(y,t&&(xe(t)?t[S]:t),r,n,i));return}if(Kn(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&jn(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?Fo(n.component):n.el,a=i?null:s,{i:o,r:l}=e,d=t&&t.r,c=o.refs===Ze?o.refs={}:o.refs,f=o.setupState,h=Le(f),g=f===Ze?hh:y=>sd(c,y)?!1:Fe(h,y),b=(y,S)=>!(S&&sd(c,S));if(d!=null&&d!==l){if(ad(t),nt(d))c[d]=null,g(d)&&(f[d]=null);else if(_t(d)){const y=t;b(d,y.k)&&(d.value=null),y.k&&(c[y.k]=null)}}if(Te(l))ci(l,o,12,[a,c]);else{const y=nt(l),S=_t(l);if(y||S){const w=()=>{if(e.f){const v=y?g(l)?f[l]:c[l]:b()||!e.k?l.value:c[e.k];if(i)xe(v)&&ko(v,s);else if(xe(v))v.includes(s)||v.push(s);else if(y)c[l]=[s],g(l)&&(f[l]=c[l]);else{const T=[s];b(l,e.k)&&(l.value=T),e.k&&(c[e.k]=T)}}else y?(c[l]=a,g(l)&&(f[l]=a)):S&&(b(l,e.k)&&(l.value=a),e.k&&(c[e.k]=a))};if(a){const v=()=>{w(),Yi.delete(e)};v.id=-1,Yi.set(e,v),St(v,r)}else ad(e),w()}}}function ad(e){const t=Yi.get(e);t&&(t.flags|=8,Yi.delete(e))}fs().requestIdleCallback;fs().cancelIdleCallback;const Kn=e=>!!e.type.__asyncLoader,Xh=e=>e.type.__isKeepAlive;function aw(e,t){Zh(e,"a",t)}function ow(e,t){Zh(e,"da",t)}function Zh(e,t,r=$t){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(gs(t,n,r),r){let i=r.parent;for(;i&&i.parent;)Xh(i.parent.vnode)&&lw(n,t,r,i),i=i.parent}}function lw(e,t,r,n){const i=gs(t,e,n,!0);fi(()=>{ko(n[t],i)},r)}function gs(e,t,r=$t,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...a)=>{vr();const o=hi(r),l=Xt(t,r,e,a);return o(),wr(),l});return n?i.unshift(s):i.push(s),s}}const xr=e=>(t,r=$t)=>{(!ai||e==="sp")&&gs(e,(...n)=>t(...n),r)},uw=xr("bm"),_s=xr("m"),dw=xr("bu"),cw=xr("u"),pw=xr("bum"),fi=xr("um"),fw=xr("sp"),hw=xr("rtg"),mw=xr("rtc");function gw(e,t=$t){gs("ec",e,t)}const _w=Symbol.for("v-ndc");function Qh(e,t,r,n){let i;const s=r,a=xe(e);if(a||nt(e)){const o=a&&Zr(e);let l=!1,d=!1;o&&(l=!Mt(e),d=$r(e),e=hs(e)),i=new Array(e.length);for(let c=0,f=e.length;c<f;c++)i[c]=t(l?d?_n(Kt(e[c])):Kt(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(He(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,d=o.length;l<d;l++){const c=o[l];i[l]=t(e[c],c,l,s)}}else i=[];return i}const to=e=>e?bm(e)?Fo(e):to(e.parent):null,Xn=ft(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>to(e.parent),$root:e=>to(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Jh(e),$forceUpdate:e=>e.f||(e.f=()=>{No(e.update)}),$nextTick:e=>e.n||(e.n=Fh.bind(e.proxy)),$watch:e=>nw.bind(e)}),Ks=(e,t)=>e!==Ze&&!e.__isScriptSetup&&Fe(e,t),bw={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(Ks(n,t))return a[t]=1,n[t];if(i!==Ze&&Fe(i,t))return a[t]=2,i[t];if(Fe(s,t))return a[t]=3,s[t];if(r!==Ze&&Fe(r,t))return a[t]=4,r[t];ro&&(a[t]=0)}}const d=Xn[t];let c,f;if(d)return t==="$attrs"&&mt(e.attrs,"get",""),d(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(r!==Ze&&Fe(r,t))return a[t]=4,r[t];if(f=l.config.globalProperties,Fe(f,t))return f[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return Ks(i,t)?(i[t]=r,!0):n!==Ze&&Fe(n,t)?(n[t]=r,!0):Fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:a}},o){let l;return!!(r[o]||e!==Ze&&o[0]!=="$"&&Fe(e,o)||Ks(t,o)||Fe(s,o)||Fe(n,o)||Fe(Xn,o)||Fe(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Fe(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function od(e){return xe(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let ro=!0;function yw(e){const t=Jh(e),r=e.proxy,n=e.ctx;ro=!1,t.beforeCreate&&ld(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:d,created:c,beforeMount:f,mounted:h,beforeUpdate:g,updated:b,activated:y,deactivated:S,beforeDestroy:w,beforeUnmount:v,destroyed:T,unmounted:k,render:E,renderTracked:O,renderTriggered:z,errorCaptured:$,serverPrefetch:L,expose:q,inheritAttrs:ie,components:te,directives:V,filters:R}=t;if(d&&vw(d,n,null),a)for(const Y in a){const Q=a[Y];Te(Q)&&(n[Y]=Q.bind(r))}if(i){const Y=i.call(r,r);He(Y)&&(e.data=Ro(Y))}if(ro=!0,s)for(const Y in s){const Q=s[Y],de=Te(Q)?Q.bind(r,r):Te(Q.get)?Q.get.bind(r,r):ar,he=!Te(Q)&&Te(Q.set)?Q.set.bind(r):ar,F=yn({get:de,set:he});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>F.value,set:se=>F.value=se})}if(o)for(const Y in o)Yh(o[Y],n,r,Y);if(l){const Y=Te(l)?l.call(r):l;Reflect.ownKeys(Y).forEach(Q=>{ew(Q,Y[Q])})}c&&ld(c,e,"c");function W(Y,Q){xe(Q)?Q.forEach(de=>Y(de.bind(r))):Q&&Y(Q.bind(r))}if(W(uw,f),W(_s,h),W(dw,g),W(cw,b),W(aw,y),W(ow,S),W(gw,$),W(mw,O),W(hw,z),W(pw,v),W(fi,k),W(fw,L),xe(q))if(q.length){const Y=e.exposed||(e.exposed={});q.forEach(Q=>{Object.defineProperty(Y,Q,{get:()=>r[Q],set:de=>r[Q]=de,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===ar&&(e.render=E),ie!=null&&(e.inheritAttrs=ie),te&&(e.components=te),V&&(e.directives=V),L&&Kh(e)}function vw(e,t,r=ar){xe(e)&&(e=no(e));for(const n in e){const i=e[n];let s;He(i)?"default"in i?s=Wi(i.from||n,i.default,!0):s=Wi(i.from||n):s=Wi(i),_t(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[n]=s}}function ld(e,t,r){Xt(xe(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Yh(e,t,r,n){let i=n.includes(".")?jh(r,n):()=>r[n];if(nt(e)){const s=t[e];Te(s)&&mn(i,s)}else if(Te(e))mn(i,e.bind(r));else if(He(e))if(xe(e))e.forEach(s=>Yh(s,t,r,n));else{const s=Te(e.handler)?e.handler.bind(r):t[e.handler];Te(s)&&mn(i,s,e)}}function Jh(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(d=>Ji(l,d,a,!0)),Ji(l,t,a)),He(t)&&s.set(t,l),l}function Ji(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Ji(e,s,r,!0),i&&i.forEach(a=>Ji(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const o=ww[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const ww={data:ud,props:dd,emits:dd,methods:Pn,computed:Pn,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Pn,directives:Pn,watch:xw,provide:ud,inject:$w};function ud(e,t){return t?e?function(){return ft(Te(e)?e.call(this,this):e,Te(t)?t.call(this,this):t)}:t:e}function $w(e,t){return Pn(no(e),no(t))}function no(e){if(xe(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function vt(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?ft(Object.create(null),e,t):t}function dd(e,t){return e?xe(e)&&xe(t)?[...new Set([...e,...t])]:ft(Object.create(null),od(e),od(t??{})):t}function xw(e,t){if(!e)return t;if(!t)return e;const r=ft(Object.create(null),e);for(const n in t)r[n]=vt(e[n],t[n]);return r}function em(){return{app:null,config:{isNativeTag:hh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sw=0;function kw(e,t){return function(n,i=null){Te(n)||(n=ft({},n)),i!=null&&!He(i)&&(i=null);const s=em(),a=new WeakSet,o=[];let l=!1;const d=s.app={_uid:Sw++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:i$,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Te(c.install)?(a.add(c),c.install(d,...f)):Te(c)&&(a.add(c),c(d,...f))),d},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),d},component(c,f){return f?(s.components[c]=f,d):s.components[c]},directive(c,f){return f?(s.directives[c]=f,d):s.directives[c]},mount(c,f,h){if(!l){const g=d._ceVNode||gt(n,i);return g.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(g,c,h),l=!0,d._container=c,c.__vue_app__=d,Fo(g.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Xt(o,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,f){return s.provides[c]=f,d},runWithContext(c){const f=gn;gn=d;try{return c()}finally{gn=f}}};return d}}let gn=null;const Tw=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ht(t)}Modifiers`]||e[`${rn(t)}Modifiers`];function Ew(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||Ze;let i=r;const s=t.startsWith("update:"),a=s&&Tw(n,t.slice(7));a&&(a.trim&&(i=r.map(c=>nt(c)?c.trim():c)),a.number&&(i=r.map(fv)));let o,l=n[o=Fs(t)]||n[o=Fs(Ht(t))];!l&&s&&(l=n[o=Fs(rn(t))]),l&&Xt(l,e,6,i);const d=n[o+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Xt(d,e,6,i)}}const Iw=new WeakMap;function tm(e,t,r=!1){const n=r?Iw:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Te(e)){const l=d=>{const c=tm(d,t,!0);c&&(o=!0,ft(a,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(He(e)&&n.set(e,null),null):(xe(s)?s.forEach(l=>a[l]=null):ft(a,s),He(e)&&n.set(e,a),a)}function bs(e,t){return!e||!ds(t)?!1:(t=t.slice(2).replace(/Once$/,""),Fe(e,t[0].toLowerCase()+t.slice(1))||Fe(e,rn(t))||Fe(e,t))}function cd(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:d,renderCache:c,props:f,data:h,setupState:g,ctx:b,inheritAttrs:y}=e,S=Qi(e);let w,v;try{if(r.shapeFlag&4){const k=i||n,E=k;w=nr(d.call(E,k,c,f,g,h,b)),v=o}else{const k=t;w=nr(k.length>1?k(f,{attrs:o,slots:a,emit:l}):k(f,null)),v=t.props?o:Cw(o)}}catch(k){Zn.length=0,ms(k,e,1),w=gt(Rr)}let T=w;if(v&&y!==!1){const k=Object.keys(v),{shapeFlag:E}=T;k.length&&E&7&&(s&&k.some(cs)&&(v=zw(v,s)),T=bn(T,v,!1,!0))}return r.dirs&&(T=bn(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(r.dirs):r.dirs),r.transition&&Do(T,r.transition),w=T,Qi(S),w}const Cw=e=>{let t;for(const r in e)(r==="class"||r==="style"||ds(r))&&((t||(t={}))[r]=e[r]);return t},zw=(e,t)=>{const r={};for(const n in e)(!cs(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Aw(e,t,r){const{props:n,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?pd(n,a,d):!!a;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(rm(a,n,h)&&!bs(d,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?pd(n,a,d):!0:!!a;return!1}function pd(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(rm(t,e,s)&&!bs(r,s))return!0}return!1}function rm(e,t,r){const n=e[r],i=t[r];return r==="style"&&He(n)&&He(i)?!Eo(n,i):n!==i}function Ow({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const nm={},im=()=>Object.create(nm),sm=e=>Object.getPrototypeOf(e)===nm;function Rw(e,t,r,n=!1){const i={},s=im();e.propsDefaults=Object.create(null),am(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);r?e.props=n?i:Lv(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Mw(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Le(i),[l]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(bs(e.emitsOptions,h))continue;const g=t[h];if(l)if(Fe(s,h))g!==s[h]&&(s[h]=g,d=!0);else{const b=Ht(h);i[b]=io(l,o,b,g,e,!1)}else g!==s[h]&&(s[h]=g,d=!0)}}}else{am(e,t,i,s)&&(d=!0);let c;for(const f in o)(!t||!Fe(t,f)&&((c=rn(f))===f||!Fe(t,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(i[f]=io(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Fe(t,f))&&(delete s[f],d=!0)}d&&gr(e.attrs,"set","")}function am(e,t,r,n){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Vn(l))continue;const d=t[l];let c;i&&Fe(i,c=Ht(l))?!s||!s.includes(c)?r[c]=d:(o||(o={}))[c]=d:bs(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,a=!0)}if(s){const l=Le(r),d=o||Ze;for(let c=0;c<s.length;c++){const f=s[c];r[f]=io(i,l,f,d[f],e,!Fe(d,f))}}return a}function io(e,t,r,n,i,s){const a=e[r];if(a!=null){const o=Fe(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Te(l)){const{propsDefaults:d}=i;if(r in d)n=d[r];else{const c=hi(i);n=d[r]=l.call(null,t),c()}}else n=l;i.ce&&i.ce._setProp(r,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===rn(r))&&(n=!0))}return n}const Bw=new WeakMap;function om(e,t,r=!1){const n=r?Bw:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!Te(e)){const c=f=>{l=!0;const[h,g]=om(f,t,!0);ft(a,h),g&&o.push(...g)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return He(e)&&n.set(e,pn),pn;if(xe(s))for(let c=0;c<s.length;c++){const f=Ht(s[c]);fd(f)&&(a[f]=Ze)}else if(s)for(const c in s){const f=Ht(c);if(fd(f)){const h=s[c],g=a[f]=xe(h)||Te(h)?{type:h}:ft({},h),b=g.type;let y=!1,S=!0;if(xe(b))for(let w=0;w<b.length;++w){const v=b[w],T=Te(v)&&v.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(S=!1)}else y=Te(b)&&b.name==="Boolean";g[0]=y,g[1]=S,(y||Fe(g,"default"))&&o.push(f)}}const d=[a,o];return He(e)&&n.set(e,d),d}function fd(e){return e[0]!=="$"&&!Vn(e)}const Po=e=>e==="_"||e==="_ctx"||e==="$stable",Uo=e=>xe(e)?e.map(nr):[nr(e)],Nw=(e,t,r)=>{if(t._n)return t;const n=Jv((...i)=>Uo(t(...i)),r);return n._c=!1,n},lm=(e,t,r)=>{const n=e._ctx;for(const i in e){if(Po(i))continue;const s=e[i];if(Te(s))t[i]=Nw(i,s,n);else if(s!=null){const a=Uo(s);t[i]=()=>a}}},um=(e,t)=>{const r=Uo(t);e.slots.default=()=>r},dm=(e,t,r)=>{for(const n in t)(r||!Po(n))&&(e[n]=t[n])},Dw=(e,t,r)=>{const n=e.slots=im();if(e.vnode.shapeFlag&32){const i=t._;i?(dm(n,t,r),r&&vh(n,"_",i,!0)):lm(t,n)}else t&&um(e,t)},Pw=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,a=Ze;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:dm(i,t,r):(s=!t.$stable,lm(t,i)),a=t}else t&&(um(e,t),a={default:1});if(s)for(const o in i)!Po(o)&&a[o]==null&&delete i[o]},St=Ww;function Uw(e){return Lw(e)}function Lw(e,t){const r=fs();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:d,setElementText:c,parentNode:f,nextSibling:h,setScopeId:g=ar,insertStaticContent:b}=e,y=(C,A,B,K=null,j=null,H=null,re=void 0,J=null,ee=!!A.dynamicChildren)=>{if(C===A)return;C&&!En(C,A)&&(K=Se(C),se(C,j,H,!0),C=null),A.patchFlag===-2&&(ee=!1,A.dynamicChildren=null);const{type:G,ref:ge,shapeFlag:le}=A;switch(G){case ys:S(C,A,B,K);break;case Rr:w(C,A,B,K);break;case Vi:C==null&&v(A,B,K,re);break;case Et:te(C,A,B,K,j,H,re,J,ee);break;default:le&1?E(C,A,B,K,j,H,re,J,ee):le&6?V(C,A,B,K,j,H,re,J,ee):(le&64||le&128)&&G.process(C,A,B,K,j,H,re,J,ee,Ce)}ge!=null&&j?jn(ge,C&&C.ref,H,A||C,!A):ge==null&&C&&C.ref!=null&&jn(C.ref,null,H,C,!0)},S=(C,A,B,K)=>{if(C==null)n(A.el=o(A.children),B,K);else{const j=A.el=C.el;A.children!==C.children&&d(j,A.children)}},w=(C,A,B,K)=>{C==null?n(A.el=l(A.children||""),B,K):A.el=C.el},v=(C,A,B,K)=>{[C.el,C.anchor]=b(C.children,A,B,K,C.el,C.anchor)},T=({el:C,anchor:A},B,K)=>{let j;for(;C&&C!==A;)j=h(C),n(C,B,K),C=j;n(A,B,K)},k=({el:C,anchor:A})=>{let B;for(;C&&C!==A;)B=h(C),i(C),C=B;i(A)},E=(C,A,B,K,j,H,re,J,ee)=>{if(A.type==="svg"?re="svg":A.type==="math"&&(re="mathml"),C==null)O(A,B,K,j,H,re,J,ee);else{const G=C.el&&C.el._isVueCE?C.el:null;try{G&&G._beginPatch(),L(C,A,j,H,re,J,ee)}finally{G&&G._endPatch()}}},O=(C,A,B,K,j,H,re,J)=>{let ee,G;const{props:ge,shapeFlag:le,transition:me,dirs:be}=C;if(ee=C.el=a(C.type,H,ge&&ge.is,ge),le&8?c(ee,C.children):le&16&&$(C.children,ee,null,K,j,Xs(C,H),re,J),be&&Pr(C,null,K,"created"),z(ee,C,C.scopeId,re,K),ge){for(const Ue in ge)Ue!=="value"&&!Vn(Ue)&&s(ee,Ue,null,ge[Ue],H,K);"value"in ge&&s(ee,"value",null,ge.value,H),(G=ge.onVnodeBeforeMount)&&Jt(G,K,C)}be&&Pr(C,null,K,"beforeMount");const we=Fw(j,me);we&&me.beforeEnter(ee),n(ee,A,B),((G=ge&&ge.onVnodeMounted)||we||be)&&St(()=>{try{G&&Jt(G,K,C),we&&me.enter(ee),be&&Pr(C,null,K,"mounted")}finally{}},j)},z=(C,A,B,K,j)=>{if(B&&g(C,B),K)for(let H=0;H<K.length;H++)g(C,K[H]);if(j){let H=j.subTree;if(A===H||hm(H.type)&&(H.ssContent===A||H.ssFallback===A)){const re=j.vnode;z(C,re,re.scopeId,re.slotScopeIds,j.parent)}}},$=(C,A,B,K,j,H,re,J,ee=0)=>{for(let G=ee;G<C.length;G++){const ge=C[G]=J?mr(C[G]):nr(C[G]);y(null,ge,A,B,K,j,H,re,J)}},L=(C,A,B,K,j,H,re)=>{const J=A.el=C.el;let{patchFlag:ee,dynamicChildren:G,dirs:ge}=A;ee|=C.patchFlag&16;const le=C.props||Ze,me=A.props||Ze;let be;if(B&&Ur(B,!1),(be=me.onVnodeBeforeUpdate)&&Jt(be,B,A,C),ge&&Pr(A,C,B,"beforeUpdate"),B&&Ur(B,!0),(le.innerHTML&&me.innerHTML==null||le.textContent&&me.textContent==null)&&c(J,""),G?q(C.dynamicChildren,G,J,B,K,Xs(A,j),H):re||Q(C,A,J,null,B,K,Xs(A,j),H,!1),ee>0){if(ee&16)ie(J,le,me,B,j);else if(ee&2&&le.class!==me.class&&s(J,"class",null,me.class,j),ee&4&&s(J,"style",le.style,me.style,j),ee&8){const we=A.dynamicProps;for(let Ue=0;Ue<we.length;Ue++){const Oe=we[Ue],Ge=le[Oe],it=me[Oe];(it!==Ge||Oe==="value")&&s(J,Oe,Ge,it,j,B)}}ee&1&&C.children!==A.children&&c(J,A.children)}else!re&&G==null&&ie(J,le,me,B,j);((be=me.onVnodeUpdated)||ge)&&St(()=>{be&&Jt(be,B,A,C),ge&&Pr(A,C,B,"updated")},K)},q=(C,A,B,K,j,H,re)=>{for(let J=0;J<A.length;J++){const ee=C[J],G=A[J],ge=ee.el&&(ee.type===Et||!En(ee,G)||ee.shapeFlag&198)?f(ee.el):B;y(ee,G,ge,null,K,j,H,re,!0)}},ie=(C,A,B,K,j)=>{if(A!==B){if(A!==Ze)for(const H in A)!Vn(H)&&!(H in B)&&s(C,H,A[H],null,j,K);for(const H in B){if(Vn(H))continue;const re=B[H],J=A[H];re!==J&&H!=="value"&&s(C,H,J,re,j,K)}"value"in B&&s(C,"value",A.value,B.value,j)}},te=(C,A,B,K,j,H,re,J,ee)=>{const G=A.el=C?C.el:o(""),ge=A.anchor=C?C.anchor:o("");let{patchFlag:le,dynamicChildren:me,slotScopeIds:be}=A;be&&(J=J?J.concat(be):be),C==null?(n(G,B,K),n(ge,B,K),$(A.children||[],B,ge,j,H,re,J,ee)):le>0&&le&64&&me&&C.dynamicChildren&&C.dynamicChildren.length===me.length?(q(C.dynamicChildren,me,B,j,H,re,J),(A.key!=null||j&&A===j.subTree)&&cm(C,A,!0)):Q(C,A,B,ge,j,H,re,J,ee)},V=(C,A,B,K,j,H,re,J,ee)=>{A.slotScopeIds=J,C==null?A.shapeFlag&512?j.ctx.activate(A,B,K,re,ee):R(A,B,K,j,H,re,ee):N(C,A,ee)},R=(C,A,B,K,j,H,re)=>{const J=C.component=Qw(C,K,j);if(Xh(C)&&(J.ctx.renderer=Ce),Jw(J,!1,re),J.asyncDep){if(j&&j.registerDep(J,W,re),!C.el){const ee=J.subTree=gt(Rr);w(null,ee,A,B),C.placeholder=ee.el}}else W(J,C,A,B,j,H,re)},N=(C,A,B)=>{const K=A.component=C.component;if(Aw(C,A,B))if(K.asyncDep&&!K.asyncResolved){Y(K,A,B);return}else K.next=A,K.update();else A.el=C.el,K.vnode=A},W=(C,A,B,K,j,H,re)=>{const J=()=>{if(C.isMounted){let{next:le,bu:me,u:be,parent:we,vnode:Ue}=C;{const bt=pm(C);if(bt){le&&(le.el=Ue.el,Y(C,le,re)),bt.asyncDep.then(()=>{St(()=>{C.isUnmounted||G()},j)});return}}let Oe=le,Ge;Ur(C,!1),le?(le.el=Ue.el,Y(C,le,re)):le=Ue,me&&qs(me),(Ge=le.props&&le.props.onVnodeBeforeUpdate)&&Jt(Ge,we,le,Ue),Ur(C,!0);const it=cd(C),ot=C.subTree;C.subTree=it,y(ot,it,f(ot.el),Se(ot),C,j,H),le.el=it.el,Oe===null&&Ow(C,it.el),be&&St(be,j),(Ge=le.props&&le.props.onVnodeUpdated)&&St(()=>Jt(Ge,we,le,Ue),j)}else{let le;const{el:me,props:be}=A,{bm:we,m:Ue,parent:Oe,root:Ge,type:it}=C,ot=Kn(A);Ur(C,!1),we&&qs(we),!ot&&(le=be&&be.onVnodeBeforeMount)&&Jt(le,Oe,A),Ur(C,!0);{Ge.ce&&Ge.ce._hasShadowRoot()&&Ge.ce._injectChildStyle(it,C.parent?C.parent.type:void 0);const bt=C.subTree=cd(C);y(null,bt,B,K,C,j,H),A.el=bt.el}if(Ue&&St(Ue,j),!ot&&(le=be&&be.onVnodeMounted)){const bt=A;St(()=>Jt(le,Oe,bt),j)}(A.shapeFlag&256||Oe&&Kn(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&C.a&&St(C.a,j),C.isMounted=!0,A=B=K=null}};C.scope.on();const ee=C.effect=new Sh(J);C.scope.off();const G=C.update=ee.run.bind(ee),ge=C.job=ee.runIfDirty.bind(ee);ge.i=C,ge.id=C.uid,ee.scheduler=()=>No(ge),Ur(C,!0),G()},Y=(C,A,B)=>{A.component=C;const K=C.vnode.props;C.vnode=A,C.next=null,Mw(C,A.props,K,B),Pw(C,A.children,B),vr(),id(C),wr()},Q=(C,A,B,K,j,H,re,J,ee=!1)=>{const G=C&&C.children,ge=C?C.shapeFlag:0,le=A.children,{patchFlag:me,shapeFlag:be}=A;if(me>0){if(me&128){he(G,le,B,K,j,H,re,J,ee);return}else if(me&256){de(G,le,B,K,j,H,re,J,ee);return}}be&8?(ge&16&&Me(G,j,H),le!==G&&c(B,le)):ge&16?be&16?he(G,le,B,K,j,H,re,J,ee):Me(G,j,H,!0):(ge&8&&c(B,""),be&16&&$(le,B,K,j,H,re,J,ee))},de=(C,A,B,K,j,H,re,J,ee)=>{C=C||pn,A=A||pn;const G=C.length,ge=A.length,le=Math.min(G,ge);let me;for(me=0;me<le;me++){const be=A[me]=ee?mr(A[me]):nr(A[me]);y(C[me],be,B,null,j,H,re,J,ee)}G>ge?Me(C,j,H,!0,!1,le):$(A,B,K,j,H,re,J,ee,le)},he=(C,A,B,K,j,H,re,J,ee)=>{let G=0;const ge=A.length;let le=C.length-1,me=ge-1;for(;G<=le&&G<=me;){const be=C[G],we=A[G]=ee?mr(A[G]):nr(A[G]);if(En(be,we))y(be,we,B,null,j,H,re,J,ee);else break;G++}for(;G<=le&&G<=me;){const be=C[le],we=A[me]=ee?mr(A[me]):nr(A[me]);if(En(be,we))y(be,we,B,null,j,H,re,J,ee);else break;le--,me--}if(G>le){if(G<=me){const be=me+1,we=be<ge?A[be].el:K;for(;G<=me;)y(null,A[G]=ee?mr(A[G]):nr(A[G]),B,we,j,H,re,J,ee),G++}}else if(G>me)for(;G<=le;)se(C[G],j,H,!0),G++;else{const be=G,we=G,Ue=new Map;for(G=we;G<=me;G++){const ct=A[G]=ee?mr(A[G]):nr(A[G]);ct.key!=null&&Ue.set(ct.key,G)}let Oe,Ge=0;const it=me-we+1;let ot=!1,bt=0;const Nt=new Array(it);for(G=0;G<it;G++)Nt[G]=0;for(G=be;G<=le;G++){const ct=C[G];if(Ge>=it){se(ct,j,H,!0);continue}let xt;if(ct.key!=null)xt=Ue.get(ct.key);else for(Oe=we;Oe<=me;Oe++)if(Nt[Oe-we]===0&&En(ct,A[Oe])){xt=Oe;break}xt===void 0?se(ct,j,H,!0):(Nt[xt-we]=G+1,xt>=bt?bt=xt:ot=!0,y(ct,A[xt],B,null,j,H,re,J,ee),Ge++)}const ur=ot?qw(Nt):pn;for(Oe=ur.length-1,G=it-1;G>=0;G--){const ct=we+G,xt=A[ct],mi=A[ct+1],gi=ct+1<ge?mi.el||fm(mi):K;Nt[G]===0?y(null,xt,B,gi,j,H,re,J,ee):ot&&(Oe<0||G!==ur[Oe]?F(xt,B,gi,2):Oe--)}}},F=(C,A,B,K,j=null)=>{const{el:H,type:re,transition:J,children:ee,shapeFlag:G}=C;if(G&6){F(C.component.subTree,A,B,K);return}if(G&128){C.suspense.move(A,B,K);return}if(G&64){re.move(C,A,B,Ce);return}if(re===Et){n(H,A,B);for(let le=0;le<ee.length;le++)F(ee[le],A,B,K);n(C.anchor,A,B);return}if(re===Vi){T(C,A,B);return}if(K!==2&&G&1&&J)if(K===0)J.persisted&&!H[js]?n(H,A,B):(J.beforeEnter(H),n(H,A,B),St(()=>J.enter(H),j));else{const{leave:le,delayLeave:me,afterLeave:be}=J,we=()=>{C.ctx.isUnmounted?i(H):n(H,A,B)},Ue=()=>{const Oe=H._isLeaving||!!H[js];H._isLeaving&&H[js](!0),J.persisted&&!Oe?we():le(H,()=>{we(),be&&be()})};me?me(H,we,Ue):Ue()}else n(H,A,B)},se=(C,A,B,K=!1,j=!1)=>{const{type:H,props:re,ref:J,children:ee,dynamicChildren:G,shapeFlag:ge,patchFlag:le,dirs:me,cacheIndex:be,memo:we}=C;if(le===-2&&(j=!1),J!=null&&(vr(),jn(J,null,B,C,!0),wr()),be!=null&&(A.renderCache[be]=void 0),ge&256){A.ctx.deactivate(C);return}const Ue=ge&1&&me,Oe=!Kn(C);let Ge;if(Oe&&(Ge=re&&re.onVnodeBeforeUnmount)&&Jt(Ge,A,C),ge&6)Pe(C.component,B,K);else{if(ge&128){C.suspense.unmount(B,K);return}Ue&&Pr(C,null,A,"beforeUnmount"),ge&64?C.type.remove(C,A,B,Ce,K):G&&!G.hasOnce&&(H!==Et||le>0&&le&64)?Me(G,A,B,!1,!0):(H===Et&&le&384||!j&&ge&16)&&Me(ee,A,B),K&&oe(C)}const it=we!=null&&be==null;(Oe&&(Ge=re&&re.onVnodeUnmounted)||Ue||it)&&St(()=>{Ge&&Jt(Ge,A,C),Ue&&Pr(C,null,A,"unmounted"),it&&(C.el=null)},B)},oe=C=>{const{type:A,el:B,anchor:K,transition:j}=C;if(A===Et){Z(B,K);return}if(A===Vi){k(C);return}const H=()=>{i(B),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:re,delayLeave:J}=j,ee=()=>re(B,H);J?J(C.el,H,ee):ee()}else H()},Z=(C,A)=>{let B;for(;C!==A;)B=h(C),i(C),C=B;i(A)},Pe=(C,A,B)=>{const{bum:K,scope:j,job:H,subTree:re,um:J,m:ee,a:G}=C;hd(ee),hd(G),K&&qs(K),j.stop(),H&&(H.flags|=8,se(re,C,A,B)),J&&St(J,A),St(()=>{C.isUnmounted=!0},A)},Me=(C,A,B,K=!1,j=!1,H=0)=>{for(let re=H;re<C.length;re++)se(C[re],A,B,K,j)},Se=C=>{if(C.shapeFlag&6)return Se(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const A=h(C.anchor||C.el),B=A&&A[iw];return B?h(B):A};let qe=!1;const Ee=(C,A,B)=>{let K;C==null?A._vnode&&(se(A._vnode,null,null,!0),K=A._vnode.component):y(A._vnode||null,C,A,null,null,null,B),A._vnode=C,qe||(qe=!0,id(K),Wh(),qe=!1)},Ce={p:y,um:se,m:F,r:oe,mt:R,mc:$,pc:Q,pbc:q,n:Se,o:e};return{render:Ee,hydrate:void 0,createApp:kw(Ee)}}function Xs({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Ur({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fw(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function cm(e,t,r=!1){const n=e.children,i=t.children;if(xe(n)&&xe(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=mr(i[s]),o.el=a.el),!r&&o.patchFlag!==-2&&cm(a,o)),o.type===ys&&(o.patchFlag===-1&&(o=i[s]=mr(o)),o.el=a.el),o.type===Rr&&!o.el&&(o.el=a.el)}}function qw(e){const t=e.slice(),r=[0];let n,i,s,a,o;const l=e.length;for(n=0;n<l;n++){const d=e[n];if(d!==0){if(i=r[r.length-1],e[i]<d){t[n]=i,r.push(n);continue}for(s=0,a=r.length-1;s<a;)o=s+a>>1,e[r[o]]<d?s=o+1:a=o;d<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,a=r[s-1];s-- >0;)r[s]=a,a=t[a];return r}function pm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pm(t)}function hd(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function fm(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?fm(t.subTree):null}const hm=e=>e.__isSuspense;function Ww(e,t){t&&t.pendingBranch?xe(e)?t.effects.push(...e):t.effects.push(e):Yv(e)}const Et=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Vi=Symbol.for("v-stc"),Zn=[];let Ct=null;function Qe(e=!1){Zn.push(Ct=e?null:[])}function Vw(){Zn.pop(),Ct=Zn[Zn.length-1]||null}let si=1;function md(e,t=!1){si+=e,e<0&&Ct&&t&&(Ct.hasOnce=!0)}function mm(e){return e.dynamicChildren=si>0?Ct||pn:null,Vw(),si>0&&Ct&&Ct.push(e),e}function tt(e,t,r,n,i,s){return mm(ae(e,t,r,n,i,s,!0))}function Hw(e,t,r,n,i){return mm(gt(e,t,r,n,i,!0))}function gm(e){return e?e.__v_isVNode===!0:!1}function En(e,t){return e.type===t.type&&e.key===t.key}const _m=({key:e})=>e??null,Hi=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?nt(e)||_t(e)||Te(e)?{i:sr,r:e,k:t,f:!!r}:e:null);function ae(e,t=null,r=null,n=0,i=null,s=e===Et?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_m(t),ref:t&&Hi(t),scopeId:Hh,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:sr};return o?(Lo(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=nt(r)?8:16),si>0&&!a&&Ct&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ct.push(l),l}const gt=Gw;function Gw(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===_w)&&(e=Rr),gm(e)){const o=bn(e,t,!0);return r&&Lo(o,r),si>0&&!s&&Ct&&(o.shapeFlag&6?Ct[Ct.indexOf(e)]=o:Ct.push(o)),o.patchFlag=-2,o}if(n$(e)&&(e=e.__vccOpts),t){t=jw(t);let{class:o,style:l}=t;o&&!nt(o)&&(t.class=yr(o)),He(l)&&(Bo(l)&&!xe(l)&&(l=ft({},l)),t.style=di(l))}const a=nt(e)?1:hm(e)?128:sw(e)?64:He(e)?4:Te(e)?2:0;return ae(e,t,r,n,i,a,s,!0)}function jw(e){return e?Bo(e)||sm(e)?ft({},e):e:null}function bn(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,d=t?Kw(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&_m(d),ref:t&&t.ref?r&&s?xe(s)?s.concat(Hi(t)):[s,Hi(t)]:Hi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Et?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Do(c,l.clone(c)),c}function Gi(e=" ",t=0){return gt(ys,null,e,t)}function Zs(e,t){const r=gt(Vi,null,e);return r.staticCount=t,r}function br(e="",t=!1){return t?(Qe(),Hw(Rr,null,e)):gt(Rr,null,e)}function nr(e){return e==null||typeof e=="boolean"?gt(Rr):xe(e)?gt(Et,null,e.slice()):gm(e)?mr(e):gt(ys,null,String(e))}function mr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bn(e)}function Lo(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(xe(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Lo(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!sm(t)?t._ctx=sr:i===3&&sr&&(sr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Te(t)?(t={default:t,_ctx:sr},r=32):(t=String(t),n&64?(r=16,t=[Gi(t)]):r=8);e.children=t,e.shapeFlag|=r}function Kw(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=yr([t.class,n.class]));else if(i==="style")t.style=di([t.style,n.style]);else if(ds(i)){const s=t[i],a=n[i];a&&s!==a&&!(xe(s)&&s.includes(a))?t[i]=s?[].concat(s,a):a:a==null&&s==null&&!cs(i)&&(t[i]=a)}else i!==""&&(t[i]=n[i])}return t}function Jt(e,t,r,n=null){Xt(e,t,7,[r,n])}const Xw=em();let Zw=0;function Qw(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||Xw,s={uid:Zw++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:om(n,i),emitsOptions:tm(n,i),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:n.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ew.bind(null,s),e.ce&&e.ce(s),s}let $t=null;const Yw=()=>$t||sr;let es,so;{const e=fs(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};es=t("__VUE_INSTANCE_SETTERS__",r=>$t=r),so=t("__VUE_SSR_SETTERS__",r=>ai=r)}const hi=e=>{const t=$t;return es(e),e.scope.on(),()=>{e.scope.off(),es(t)}},gd=()=>{$t&&$t.scope.off(),es(null)};function bm(e){return e.vnode.shapeFlag&4}let ai=!1;function Jw(e,t=!1,r=!1){t&&so(t);const{props:n,children:i}=e.vnode,s=bm(e);Rw(e,n,s,t),Dw(e,i,r||t);const a=s?e$(e,t):void 0;return t&&so(!1),a}function e$(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bw);const{setup:n}=r;if(n){vr();const i=e.setupContext=n.length>1?r$(e):null,s=hi(e),a=ci(n,e,0,[e.props,i]),o=gh(a);if(wr(),s(),(o||e.sp)&&!Kn(e)&&Kh(e),o){if(a.then(gd,gd),t)return a.then(l=>{_d(e,l)}).catch(l=>{ms(l,e,0)});e.asyncDep=a}else _d(e,a)}else ym(e)}function _d(e,t,r){Te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:He(t)&&(e.setupState=Uh(t)),ym(e)}function ym(e,t,r){const n=e.type;e.render||(e.render=n.render||ar);{const i=hi(e);vr();try{yw(e)}finally{wr(),i()}}}const t$={get(e,t){return mt(e,"get",""),e[t]}};function r$(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,t$),slots:e.slots,emit:e.emit,expose:t}}function Fo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Uh(Fv(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Xn)return Xn[r](e)},has(t,r){return r in t||r in Xn}})):e.proxy}function n$(e){return Te(e)&&"__vccOpts"in e}const yn=(e,t)=>jv(e,t,ai),i$="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ao;const bd=typeof window<"u"&&window.trustedTypes;if(bd)try{ao=bd.createPolicy("vue",{createHTML:e=>e})}catch{}const vm=ao?e=>ao.createHTML(e):e=>e,s$="http://www.w3.org/2000/svg",a$="http://www.w3.org/1998/Math/MathML",hr=typeof document<"u"?document:null,yd=hr&&hr.createElement("template"),o$={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?hr.createElementNS(s$,e):t==="mathml"?hr.createElementNS(a$,e):r?hr.createElement(e,{is:r}):hr.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>hr.createTextNode(e),createComment:e=>hr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const a=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{yd.innerHTML=vm(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=yd.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},l$=Symbol("_vtc");function u$(e,t,r){const n=e[l$];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const vd=Symbol("_vod"),d$=Symbol("_vsh"),c$=Symbol(""),p$=/(?:^|;)\s*display\s*:/;function f$(e,t,r){const n=e.style,i=nt(r);let s=!1;if(r&&!i){if(t)if(nt(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();r[o]==null&&Un(n,o,"")}else for(const a in t)r[a]==null&&Un(n,a,"");for(const a in r){a==="display"&&(s=!0);const o=r[a];o!=null?m$(e,a,!nt(t)&&t?t[a]:void 0,o)||Un(n,a,o):Un(n,a,"")}}else if(i){if(t!==r){const a=n[c$];a&&(r+=";"+a),n.cssText=r,s=p$.test(r)}}else t&&e.removeAttribute("style");vd in e&&(e[vd]=s?n.display:"",e[d$]&&(n.display="none"))}const wd=/\s*!important$/;function Un(e,t,r){if(xe(r))r.forEach(n=>Un(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=h$(e,t);wd.test(r)?e.setProperty(rn(n),r.replace(wd,""),"important"):e[n]=r}}const $d=["Webkit","Moz","ms"],Qs={};function h$(e,t){const r=Qs[t];if(r)return r;let n=Ht(t);if(n!=="filter"&&n in e)return Qs[t]=n;n=yh(n);for(let i=0;i<$d.length;i++){const s=$d[i]+n;if(s in e)return Qs[t]=s}return t}function m$(e,t,r,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&nt(n)&&r===n}const xd="http://www.w3.org/1999/xlink";function Sd(e,t,r,n,i,s=yv(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(xd,t.slice(6,t.length)):e.setAttributeNS(xd,t,r):r==null||s&&!wh(r)?e.removeAttribute(t):e.setAttribute(t,s?"":or(r)?String(r):r)}function kd(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?vm(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(o!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=wh(r):r==null&&o==="string"?(r="",a=!0):o==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(i||t)}function g$(e,t,r,n){e.addEventListener(t,r,n)}function _$(e,t,r,n){e.removeEventListener(t,r,n)}const Td=Symbol("_vei");function b$(e,t,r,n,i=null){const s=e[Td]||(e[Td]={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=y$(t);if(n){const d=s[t]=$$(n,i);g$(e,o,d,l)}else a&&(_$(e,o,a,l),s[t]=void 0)}}const Ed=/(?:Once|Passive|Capture)$/;function y$(e){let t;if(Ed.test(e)){t={};let n;for(;n=e.match(Ed);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rn(e.slice(2)),t]}let Ys=0;const v$=Promise.resolve(),w$=()=>Ys||(v$.then(()=>Ys=0),Ys=Date.now());function $$(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;const i=r.value;if(xe(i)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const a=i.slice(),o=[n];for(let l=0;l<a.length&&!n._stopped;l++){const d=a[l];d&&Xt(d,t,5,o)}}else Xt(i,t,5,[n])};return r.value=e,r.attached=w$(),r}const Id=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,x$=(e,t,r,n,i,s)=>{const a=i==="svg";t==="class"?u$(e,n,a):t==="style"?f$(e,r,n):ds(t)?cs(t)||b$(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):S$(e,t,n,a))?(kd(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Sd(e,t,n,a,s,t!=="value")):e._isVueCE&&(k$(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!nt(n)))?kd(e,Ht(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Sd(e,t,n,a))};function S$(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Id(t)&&Te(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Id(t)&&nt(r)?!1:t in e}function k$(e,t){const r=e._def.props;if(!r)return!1;const n=Ht(t);return Array.isArray(r)?r.some(i=>Ht(i)===n):Object.keys(r).some(i=>Ht(i)===n)}const T$=ft({patchProp:x$},o$);let Cd;function E$(){return Cd||(Cd=Uw(T$))}const I$=(...e)=>{const t=E$().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=z$(n);if(!i)return;const s=t._component;!Te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=r(i,!1,C$(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function C$(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function z$(e){return nt(e)?document.querySelector(e):e}const A$={class:"flex flex-col items-center gap-5"},O$={class:"flex flex-wrap justify-center gap-2"},R$={key:0,class:"absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-2xl flex items-center justify-center"},M$=pi({__name:"DropZone",emits:["file-selected"],setup(e,{emit:t}){const r=t,n=et(!1),i=et(null),s=["audio/mpeg","audio/wav","audio/ogg","audio/flac","audio/mp4","audio/x-m4a"],a=[".mp3",".wav",".ogg",".flac",".m4a"];function o(b){b.preventDefault(),n.value=!0}function l(){n.value=!1}function d(b){b.preventDefault(),n.value=!1;const y=b.dataTransfer?.files[0];y&&h(y)&&r("file-selected",y)}function c(){i.value?.click()}function f(b){const S=b.target.files?.[0];S&&h(S)&&r("file-selected",S)}function h(b){const y=s.some(w=>b.type.includes(w.split("/")[1])||b.type===w),S=a.some(w=>b.name.toLowerCase().endsWith(w));return y||S}function g(b){const y=b.clipboardData?.items;if(y)for(const S of y){if(S.kind==="file"&&S.type.startsWith("audio/")){const w=S.getAsFile();if(w&&h(w)){r("file-selected",w);return}}if(S.kind==="file"){const w=S.getAsFile();if(w){const v="."+w.name.split(".").pop()?.toLowerCase();if(a.includes(v)){r("file-selected",w);return}}}}}return _s(()=>{document.addEventListener("paste",g)}),fi(()=>{document.removeEventListener("paste",g)}),(b,y)=>(Qe(),tt("div",{class:yr(["relative border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20",{"border-blue-500 bg-blue-50/70 dark:bg-blue-900/40 scale-[1.02]":n.value}]),onDragover:o,onDragleave:l,onDrop:d,onClick:c},[ae("input",{ref_key:"fileInput",ref:i,type:"file",accept:"audio/*,.mp3,.wav,.ogg,.flac,.m4a",class:"hidden",onChange:f},null,544),ae("div",A$,[ae("div",{class:yr(["w-20 h-20 rounded-2xl flex items-center justify-center transition-colors",n.value?"bg-blue-500 text-white":"bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"])},[...y[0]||(y[0]=[ae("svg",{class:"w-10 h-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})],-1)])],2),y[1]||(y[1]=ae("div",null,[ae("p",{class:"text-lg font-semibold text-slate-700 dark:text-slate-100"}," 拖拽音频文件到此处 "),ae("p",{class:"text-sm text-slate-500 dark:text-slate-400 mt-1"}," 或点击选择文件 · 支持 Ctrl+V 粘贴 ")],-1)),ae("div",O$,[(Qe(),tt(Et,null,Qh(["MP3","WAV","OGG","FLAC","M4A"],S=>ae("span",{key:S,class:"px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"},Wt(S),1)),64))])]),n.value?(Qe(),tt("div",R$,[...y[2]||(y[2]=[ae("div",{class:"text-blue-600 dark:text-blue-300 font-semibold text-lg"}," 释放以上传文件 ",-1)])])):br("",!0)],34))}}),zd=pi({__name:"WaveformCanvas",props:{peaks:{},color:{},progress:{},currentTime:{},duration:{}},emits:["seek"],setup(e,{emit:t}){const r=e,n=t,i=et(null),s=et(null),a=et(!1),o=et(0);function l(){const h=i.value,g=s.value;if(!h||!g)return;const b=window.devicePixelRatio||1,y=g.getBoundingClientRect();h.width=y.width*b,h.height=y.height*b,h.style.width=`${y.width}px`,h.style.height=`${y.height}px`;const S=h.getContext("2d");if(!S||(S.scale(b,b),S.clearRect(0,0,y.width,y.height),!r.peaks))return;const w=r.peaks,v=y.width/w.length,T=y.height*.8,k=y.height/2,E=r.color||"#64748b",O="#22c55e";let z=w.length;r.progress!==void 0&&r.progress>=0?z=Math.floor(r.progress*w.length):r.currentTime!==void 0&&r.duration&&r.duration>0&&(z=Math.floor(r.currentTime/r.duration*w.length));for(let $=0;$<w.length;$++){const L=$*v,q=w[$]*T;S.fillStyle=$<z?O:E,S.fillRect(L,k-q/2,Math.max(v-1,1),q)}if(a.value&&s.value){const $=s.value.getBoundingClientRect();S.strokeStyle="rgba(148, 163, 184, 0.5)",S.lineWidth=1,S.beginPath(),S.moveTo(o.value,0),S.lineTo(o.value,$.height),S.stroke()}}function d(h){if(!s.value)return;const g=s.value.getBoundingClientRect();o.value=h.clientX-g.left,a.value=!0,l()}function c(){a.value=!1,l()}function f(h){if(!s.value||!r.duration)return;const g=s.value.getBoundingClientRect(),S=(h.clientX-g.left)/g.width*r.duration;n("seek",S)}return _s(()=>{l(),window.addEventListener("resize",l)}),fi(()=>{window.removeEventListener("resize",l)}),mn(()=>[r.peaks,r.progress,r.currentTime],l,{deep:!0}),(h,g)=>(Qe(),tt("div",{ref_key:"containerRef",ref:s,class:"bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden cursor-pointer h-24",onMousemove:d,onMouseleave:c,onClick:f},[ae("canvas",{ref_key:"canvasRef",ref:i,class:"w-full h-full"},null,512)],544))}}),B$={class:"text-center"},N$=["disabled"],D$={key:0,class:"flex items-center gap-2"},P$={key:1,class:"flex items-center gap-2"},U$={class:"pl-4"},L$={key:2,class:"flex items-center gap-2"},F$={key:3,class:"flex items-center gap-2"},q$={key:0,class:"mt-3"},W$={class:"w-64 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden"},V$=pi({__name:"ProcessButton",props:{status:{},disabled:{type:Boolean},progress:{}},emits:["process"],setup(e){const t=e,r=yn(()=>t.progress===void 0?"...":(t.progress*100).toFixed(2)+"%"),n=yn(()=>t.progress===void 0?"0%":t.progress*100+"%");return(i,s)=>(Qe(),tt("div",B$,[ae("button",{class:"px-8 py-3.5 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-medium text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25",disabled:t.disabled,onClick:s[0]||(s[0]=a=>i.$emit("process"))},[e.status==="idle"?(Qe(),tt("span",D$,[...s[1]||(s[1]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})],-1),Gi(" 开始降噪 ",-1)])])):e.status==="processing"?(Qe(),tt("span",P$,[s[2]||(s[2]=ae("svg",{class:"animate-spin w-5 h-5",fill:"none",viewBox:"0 0 24 24"},[ae("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),ae("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})],-1)),ae("span",U$,Wt(r.value),1)])):e.status==="done"?(Qe(),tt("span",L$,[...s[3]||(s[3]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),Gi(" 处理完成 ",-1)])])):e.status==="error"?(Qe(),tt("span",F$,[...s[4]||(s[4]=[ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),Gi(" 处理失败，点击重试 ",-1)])])):br("",!0)],8,N$),e.status==="processing"?(Qe(),tt("div",q$,[ae("div",W$,[ae("div",{class:"h-full bg-blue-500 rounded-full transition-all duration-300",style:di({width:n.value})},null,4)])])):br("",!0)]))}}),H$={key:0,class:"bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5"},G$={class:"flex items-center justify-between mb-4"},j$={class:"text-sm font-medium text-slate-700 dark:text-slate-300"},K$={class:"text-xs text-slate-400 dark:text-slate-500"},X$={class:"flex items-center gap-3"},Z$={key:0,class:"w-7 h-7 text-slate-700 dark:text-slate-200 ml-1",fill:"currentColor",viewBox:"0 0 24 24"},Q$={key:1,class:"w-7 h-7 text-slate-700 dark:text-slate-200",fill:"currentColor",viewBox:"0 0 24 24"},Y$={class:"relative"},J$={class:"text-sm font-medium"},e1={key:0,class:"absolute bottom-full left-0 mb-2 bg-white dark:bg-slate-700 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 py-1 z-10 min-w-[140px]"},t1=["onClick"],r1={class:"text-sm font-medium"},n1={class:"text-xs text-slate-400 dark:text-slate-500"},Ad=pi({__name:"AudioPlayer",props:{buffer:{},label:{}},setup(e,{expose:t}){const r=e,n=new AudioContext,i=et(null),s=et(!1),a=et(0),o=et(0),l=et(!1),d=et(!1),c=et("wav"),f=yn(()=>r.buffer?a.value/r.buffer.duration*100:0);let h=null,g=0,b=0;function y(V){if(!r.buffer)return;s.value&&S(),i.value=n.createBufferSource(),i.value.buffer=r.buffer,i.value.connect(n.destination),i.value.onended=()=>{s.value&&(s.value=!1,a.value=0,b=0,h&&cancelAnimationFrame(h))};const R=V!==void 0?V:b;g=n.currentTime,b=R,a.value=R,o.value=r.buffer.duration,i.value.start(0,R),s.value=!0,v()}function S(){if(i.value){i.value.onended=null;try{i.value.stop()}catch{}i.value.disconnect(),i.value=null}s.value=!1,b=a.value,h&&cancelAnimationFrame(h)}function w(){s.value?S():y()}function v(){if(s.value&&n.state==="running"){const V=n.currentTime-g;a.value=Math.min(b+V,r.buffer?.duration||0),h=requestAnimationFrame(v)}}function T(V){if(!r.buffer)return;const N=V.currentTarget.getBoundingClientRect(),W=V.clientX-N.left,Q=Math.max(0,Math.min(1,W/N.width))*r.buffer.duration;a.value=Q,b=Q,s.value&&(S(),y(Q))}function k(V){l.value=!0,T(V);const R=W=>{l.value&&T(W)},N=()=>{l.value=!1,document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",N)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",N)}const E=[{id:"wav",name:"WAV",desc:"无损",ext:"wav"},{id:"mp3",name:"MP3",desc:"高压缩",ext:"mp3"},{id:"ogg",name:"OGG",desc:"开源格式",ext:"ogg"}];function O(V){c.value=V,d.value=!1}async function z(){if(!r.buffer)return;let V,R;switch(c.value){case"mp3":V=await L(r.buffer),R="processed_audio.mp3";break;case"ogg":V=await q(r.buffer),R="processed_audio.ogg";break;default:V=$(r.buffer),R="processed_audio.wav"}ie(V,R)}function $(V){const R=V.sampleRate,N=V.getChannelData(0),W=1,Y=16,Q=Y/8,de=W*Q,he=R*de,F=N.length*Q,se=44+F,oe=new ArrayBuffer(se),Z=new DataView(oe);te(Z,0,"RIFF"),Z.setUint32(4,se-8,!0),te(Z,8,"WAVE"),te(Z,12,"fmt "),Z.setUint32(16,16,!0),Z.setUint16(20,1,!0),Z.setUint16(22,W,!0),Z.setUint32(24,R,!0),Z.setUint32(28,he,!0),Z.setUint16(32,de,!0),Z.setUint16(34,Y,!0),te(Z,36,"data"),Z.setUint32(40,F,!0);let Pe=44;for(let Me=0;Me<N.length;Me++){const Se=Math.max(-1,Math.min(1,N[Me])),qe=Se<0?Se*32768:Se*32767;Z.setInt16(Pe,qe,!0),Pe+=2}return new Blob([oe],{type:"audio/wav"})}async function L(V){return $(V)}async function q(V){return $(V)}function ie(V,R){const N=URL.createObjectURL(V),W=document.createElement("a");W.href=N,W.download=R,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(N)}function te(V,R,N){for(let W=0;W<N.length;W++)V.setUint8(R+W,N.charCodeAt(W))}return mn(()=>r.buffer,()=>{a.value=0,s.value=!1,b=0,S()}),fi(()=>{S(),n.close()}),t({currentTime:a,progress:f,isPlaying:s}),(V,R)=>e.buffer?(Qe(),tt("div",H$,[ae("div",G$,[ae("h3",j$,Wt(e.label),1),ae("span",K$,Wt(a.value.toFixed(1))+"s / "+Wt(e.buffer.duration.toFixed(1))+"s ",1)]),ae("div",{class:"h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full cursor-pointer mb-5 group relative",onMousedown:k},[ae("div",{class:"h-full bg-blue-500 rounded-full transition-all",style:di({width:`${f.value}%`})},null,4),R[1]||(R[1]=ae("div",{class:"absolute inset-0 group-hover:bg-white/10 rounded-full"},null,-1))],32),ae("div",X$,[ae("button",{class:"flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",onClick:w},[s.value?(Qe(),tt("svg",Q$,[...R[3]||(R[3]=[ae("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},null,-1)])])):(Qe(),tt("svg",Z$,[...R[2]||(R[2]=[ae("path",{d:"M8 5v14l11-7z"},null,-1)])]))]),ae("div",Y$,[ae("button",{class:"flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-700 dark:text-slate-200",onClick:R[0]||(R[0]=N=>d.value=!d.value)},[R[4]||(R[4]=ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1)),ae("span",J$,"下载 "+Wt(E.find(N=>N.id===c.value)?.name),1),R[5]||(R[5]=ae("svg",{class:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),d.value?(Qe(),tt("div",e1,[(Qe(),tt(Et,null,Qh(E,N=>ae("button",{key:N.id,class:yr(["w-full px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-600 flex items-center justify-between text-slate-700 dark:text-slate-200",{"bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400":c.value===N.id}]),onClick:W=>{O(N.id),z()}},[ae("span",r1,Wt(N.name),1),ae("span",n1,Wt(N.desc),1)],10,t1)),64))])):br("",!0)])])])):br("",!0)}}),i1="modulepreload",s1=function(e){return"/deepfilternet-web/"+e},Od={},a1=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(r.map(l=>{if(l=s1(l),l in Od)return;Od[l]=!0;const d=l.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":i1,d||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),d)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};let Js=null;function wm(){return Js||(Js=new AudioContext),Js}async function o1(e){const t=wm(),r=await e.arrayBuffer();return t.decodeAudioData(r)}function l1(e){const t=e.getChannelData(0),r=e.length,n=new Float32Array(r);if(e.numberOfChannels===1)n.set(t);else{const i=[];for(let s=0;s<e.numberOfChannels;s++)i.push(e.getChannelData(s));for(let s=0;s<r;s++){let a=0;for(let o=0;o<e.numberOfChannels;o++)a+=i[o][s];n[s]=a/e.numberOfChannels}}return n}function u1(e,t,r=1){const n=wm(),i=e.length/r,s=n.createBuffer(r,i,t);if(r===1){const a=new Float32Array(e);s.copyToChannel(a,0)}else{const a=e.length/r;for(let o=0;o<r;o++){const l=new Float32Array(a);for(let d=0;d<a;d++)l[d]=e[d*r+o];s.copyToChannel(l,o)}}return s}async function d1(e,t){const{runInference:r}=await a1(async()=>{const{runInference:s}=await Promise.resolve().then(()=>L2);return{runInference:s}},[]),n=l1(e);console.log("Starting audio processing, total samples:",n.length);const i=await r(n,e.sampleRate,t);return console.log("Audio processing completed"),u1(i,e.sampleRate,1)}function Rd(e,t=200){const r=e.getChannelData(0),n=Math.floor(r.length/t),i=new Float32Array(t);for(let s=0;s<t;s++){const a=s*n,o=Math.min(a+n,r.length);let l=0;for(let d=a;d<o;d++){const c=Math.abs(r[d]);c>l&&(l=c)}i[s]=l}return i}/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qo=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,p1=Object.getOwnPropertyNames,f1=Object.prototype.hasOwnProperty,h1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),$n=(e,t)=>{for(var r in t)qo(e,r,{get:t[r],enumerable:!0})},m1=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of p1(t))!f1.call(e,i)&&i!==r&&qo(e,i,{get:()=>t[i],enumerable:!(n=c1(t,i))||n.enumerable});return e},oi=e=>m1(qo({},"__esModule",{value:!0}),e),In,Ir,dn,Md,$m,xm=X(()=>{In=new Map,Ir=[],dn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=In.get(e);if(n===void 0)In.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Ir.indexOf(e);i!==-1&&Ir.splice(i,1);for(let s=0;s<Ir.length;s++)if(In.get(Ir[s]).priority<=r){Ir.splice(s,0,e);return}Ir.push(e)}return}throw new TypeError("not a valid backend")},Md=async e=>{let t=In.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$m=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Ir:r,i,s=[],a=new Set;for(let l of n){let d=await Md(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),g1=X(()=>{xm()}),Sm,_1=X(()=>{Sm="1.26.0"}),ea,ut,km=X(()=>{_1(),ea="warning",ut={wasm:{},webgl:{},webgpu:{},versions:{common:Sm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ea=e}},get logLevel(){return ea}},Object.defineProperty(ut,"logLevel",{enumerable:!0})}),Ke,b1=X(()=>{km(),Ke=ut}),Tm,Em,y1=X(()=>{Tm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*i,f=0,h=c,g=c*2,b=-1;a==="RGBA"?(f=0,h=c,g=c*2,b=c*3):a==="RGB"?(f=0,h=c,g=c*2):a==="RBG"&&(f=0,g=c,h=c*2);for(let y=0;y<s;y++)for(let S=0;S<i;S++){let w=(e.data[f++]-d[0])*l[0],v=(e.data[h++]-d[1])*l[1],T=(e.data[g++]-d[2])*l[2],k=b===-1?255:(e.data[b++]-d[3])*l[3];n.fillStyle="rgba("+w+","+v+","+T+","+k+")",n.fillRect(S,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Em=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,b=1,y=2,S=3,w=0,v=f,T=f*2,k=-1;o==="RGBA"?(w=0,v=f,T=f*2,k=f*3):o==="RGB"?(w=0,v=f,T=f*2):o==="RBG"&&(w=0,T=f,v=f*2),n=r.createImageData(i,s);for(let E=0;E<s*i;g+=h,b+=h,y+=h,S+=h,E++)n.data[g]=(e.data[w++]-c[0])*d[0],n.data[b]=(e.data[v++]-c[1])*d[1],n.data[y]=(e.data[T++]-c[2])*d[2],n.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return n}}),zi,Im,Cm,zm,Am,Om,v1=X(()=>{Wo(),zi=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,g=1,b=2,y=3,S=0,w=d,v=d*2,T=-1;o==="RGB"&&(f=3,h=0,g=1,b=2,y=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,v=d,w=d*2):l==="BGR"&&(v=0,w=d,S=d*2);for(let k=0;k<d;k++,h+=f,b+=f,g+=f,y+=f)c[S++]=(e[h]+a[0])/s[0],c[w++]=(e[g]+a[1])/s[1],c[v++]=(e[b]+a[2])/s[2],T!==-1&&y!==-1&&(c[T++]=(e[y]+a[3])/s[3]);return l==="RGBA"?new It("float32",c,[1,4,r,n]):new It("float32",c,[1,3,r,n])},Im=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=g}else o.tensorFormat="RGBA",o.height=h,o.width=g;f.drawImage(e,0,0),a=f.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(n){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let g=d(h);if(g!=null)g.putImageData(e,0,0),a=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,g=e.width;return f.drawImage(e,0,0,g,h),a=f.getImageData(0,0,g,h).data,o.height=h,o.width=g,zi(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let h=l(),g=d(h);if(!e||!g)return f();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{h.width=b.width,h.height=b.height,g.drawImage(b,0,0,h.width,h.height);let y=g.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(zi(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return zi(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Cm=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new It({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},zm=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new It({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},Am=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new It({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},Om=(e,t,r)=>new It({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Gr,Ln,ta,Rm,w1=X(()=>{Gr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ln=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ta=!1,Rm=()=>{if(!ta){ta=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Gr.set("int64",BigInt64Array),Ln.set(BigInt64Array,"int64")),t&&(Gr.set("uint64",BigUint64Array),Ln.set(BigUint64Array,"uint64")),n?(Gr.set("float16",r),Ln.set(r,"float16")):Gr.set("float16",Uint16Array)}}}),Mm,Bm,$1=X(()=>{Wo(),Mm=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Bm=(e,t)=>{switch(e.location){case"cpu":return new It(e.type,e.data,t);case"cpu-pinned":return new It({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new It({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new It({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new It({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),It,Wo=X(()=>{y1(),v1(),w1(),$1(),It=class{constructor(e,t,r){Rm();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Gr.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Gr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Ln.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=Mm(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return Im(e,t)}static fromTexture(e,t){return Cm(e,t)}static fromGpuBuffer(e,t){return zm(e,t)}static fromMLTensor(e,t){return Am(e,t)}static fromPinnedBuffer(e,t,r){return Om(e,t,r)}toDataURL(e){return Tm(this,e)}toImageData(e){return Em(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Bm(this,e)}}}),Rt,Nm=X(()=>{Wo(),Rt=It}),ts,ra,lr,jt,Qr,Yr,Dm=X(()=>{km(),ts=(e,t)=>{(typeof ut.trace>"u"?!ut.wasm.trace:!ut.trace)||console.timeStamp(`${e}::ORT::${t}`)},ra=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ts("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},lr=e=>{(typeof ut.trace>"u"?!ut.wasm.trace:!ut.trace)||ra("BEGIN",e)},jt=e=>{(typeof ut.trace>"u"?!ut.wasm.trace:!ut.trace)||ra("END",e)},Qr=e=>{(typeof ut.trace>"u"?!ut.wasm.trace:!ut.trace)||console.time(`ORT::${e}`)},Yr=e=>{(typeof ut.trace>"u"?!ut.wasm.trace:!ut.trace)||console.timeEnd(`ORT::${e}`)}}),Pm,x1=X(()=>{xm(),Nm(),Dm(),Pm=class Um{constructor(t){this.handler=t}async run(t,r,n){lr(),Qr("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Rt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Rt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Rt)&&(d=!0,a=!1,i[f]=h)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof Rt?l[d]=c:l[d]=new Rt(c.type,c.data,c.dims)}return Yr("InferenceSession.run"),jt(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){lr(),Qr("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await $m(a),d=await o.createInferenceSessionHandler(s,l);return Yr("InferenceSession.create"),jt(),new Um(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Qn,S1=X(()=>{x1(),Qn=Pm}),k1=X(()=>{}),T1=X(()=>{}),E1=X(()=>{}),I1=X(()=>{}),C1={};$n(C1,{InferenceSession:()=>Qn,TRACE:()=>ts,TRACE_EVENT_BEGIN:()=>Qr,TRACE_EVENT_END:()=>Yr,TRACE_FUNC_BEGIN:()=>lr,TRACE_FUNC_END:()=>jt,Tensor:()=>Rt,env:()=>Ke,registerBackend:()=>dn});var Bt=X(()=>{g1(),b1(),S1(),Nm(),k1(),T1(),Dm(),E1(),I1()}),Vo=X(()=>{}),Lm={};$n(Lm,{default:()=>Fm});var na,ia,Fm,z1=X(()=>{G_(),nn(),Ho(),na="ort-wasm-proxy-worker",ia=globalThis.self?.name===na,ia&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Go(r.wasm).then(()=>{ul(r).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})})},n=>{postMessage({type:t,err:n})});break;case"init-ep":{let{epName:n,env:i}=r;dl(i,n).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:n}=r,i=ls(n);postMessage({type:t,out:i});break}case"create":{let{model:n,options:i}=r;cl(n,i).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":pl(r),postMessage({type:t});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:a,options:o}=r;fl(n,i,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},ml([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":hl(r),postMessage({type:t});break;default:}}catch(n){postMessage({type:t,err:n})}}),Fm=ia?null:e=>new Worker(e??Tt,{type:"module",name:na})}),qm={};$n(qm,{default:()=>Wm});async function Bd(e={}){var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&self.name?.startsWith("em-pthread");t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=u=>async(...p)=>{try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:p[0],errors:[]},m=await u(...p);if(t.Yc!==_)throw Error("Session mismatch");t.dd?.flush();let x=_.errors;if(0<x.length){let I=await Promise.all(x);if(I=I.filter(M=>M),0<I.length)throw Error(I.join(`
`))}return m}finally{t.Yc=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let _=t.dd;t.jsepRegisterBuffer=(m,x,I,M)=>_.registerBuffer(m,x,I,M),t.jsepGetBuffer=m=>_.getBuffer(m),t.jsepCreateDownloader=(m,x,I)=>_.createDownloader(m,x,I),t.jsepOnCreateSession=m=>{_.onCreateSession(m)},t.jsepOnReleaseSession=m=>{_.onReleaseSession(m)},t.jsepOnRunStart=m=>_.onRunStart(m),t.Id=(m,x)=>{_.upload(m,x)}}else if(u==="webnn"){let _=p[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>_.onRunStart(m),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=m=>{_.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,x)=>_.createMLTensorDownloader(m,x),t.webnnRegisterMLTensor=(m,x,I,M)=>_.registerMLTensor(m,x,I,M),t.webnnCreateMLContext=m=>_.createMLContext(m),t.webnnRegisterMLConstant=(m,x,I,M,P,ne)=>_.registerMLConstant(m,x,I,M,P,t.Xc,ne),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let u=p=>(..._)=>{let m=Qt;return _=p(..._),Qt!=m?new Promise((x,I)=>{Is={resolve:x,reject:I}}):_};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,l,d=(u,p)=>{throw p},c=import.meta.url,f="";if(r||n){try{f=new URL(".",c).href}catch{}n&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(z(u))return new Promise((_,m)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?_(x.response):m(x.status)},x.onerror=m,x.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var h,g,b,y,S,w,v=console.log.bind(console),T=console.error.bind(console),k=v,E=T,O=!1,z=u=>u.startsWith("file://");function $(){we.buffer!=q.buffer&&se()}if(i){let u=function(p){try{var _=p.data,m=_.Sc;if(m==="load"){let x=[];self.onmessage=I=>x.push(I),w=()=>{postMessage({Sc:"loaded"});for(let I of x)u(I);self.onmessage=u};for(let I of _.xd)t[I]&&!t[I].proxy||(t[I]=(...M)=>{postMessage({Sc:"callHandler",wd:I,args:M})},I=="print"&&(k=t[I]),I=="printErr"&&(E=t[I]));we=_.Od,se(),g=_.Pd,Me(),Ti()}else if(m==="run"){(function(x){var I=($(),N)[x+52>>>2>>>0];x=($(),N)[x+56>>>2>>>0],du(I,I-x),ke(I)})(_.Rc),Rs(_.Rc,0,0,1,0,0),le(),ks(_.Rc),L||(iu(),L=!0);try{Ue(_.Md,_.bd)}catch(x){if(x!="unwind")throw x}}else _.target!=="setimmediate"&&(m==="checkMailbox"?L&&yi():m&&(E(`worker: received unknown command ${m}`),E(_)))}catch(x){throw su(),x}};var L=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var q,ie,te,V,R,N,W,Y,Q,de,he,F=!1;function se(){var u=we.buffer;t.HEAP8=q=new Int8Array(u),te=new Int16Array(u),t.HEAPU8=ie=new Uint8Array(u),V=new Uint16Array(u),t.HEAP32=R=new Int32Array(u),t.HEAPU32=N=new Uint32Array(u),W=new Float32Array(u),Y=new Float64Array(u),Q=new BigInt64Array(u),de=new BigUint64Array(u)}function oe(){F=!0,i?w():cr.sb()}function Z(u){throw E(u="Aborted("+u+")"),O=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S?.(u),u}function Pe(){return{a:{ma:Sy,gb:xy,g:it,J:bt,f:mi,o:gi,h:ab,ha:ob,b:lb,T:ub,Ha:_l,n:db,$:wl,Xa:$l,Da:xl,Fa:Sl,Ya:kl,Va:Tl,Oa:El,Ua:Il,ka:Cl,Ea:zl,Ba:Al,Wa:Ol,Ca:Rl,bb:cb,ea:pb,wa:fb,ua:mb,da:_b,O:bb,H:yb,va:vb,_:Eb,xa:Ib,Ra:Cb,za:Ab,Ia:Ob,sa:Rb,fa:Mb,Qa:ks,_a:Bb,R:Ub,r:Vb,c:xs,hb:Hb,y:Gb,M:jb,D:Kb,l:Xb,s:Fl,ib:Zb,I:Qb,S:Yb,j:Jb,u:ey,q:ty,k:ry,La:ny,Ma:iy,Na:sy,Ja:Hl,Ka:Gl,ta:jl,db:oy,ab:uy,v:dy,aa:cy,ga:py,$a:ly,W:fy,Za:hy,Aa:my,F:ay,U:gy,la:Si,ya:by,fb:_y,eb:yy,Sa:Ql,Ta:Yl,Ga:H,V:Jl,ja:eu,Pa:tu,ia:ru,kb:av,na:tv,lb:sv,oa:ev,G:Hy,d:Iy,t:Ty,w:ky,A:Py,mb:Qy,K:qy,x:Ay,pa:Yy,Y:rv,ba:Zy,nb:Xy,ob:Ky,P:Uy,qa:jy,pb:Gy,N:Wy,Z:Jy,e:Ey,B:zy,m:Cy,jb:ov,p:Ry,z:My,C:Oy,E:By,L:Ly,qb:Vy,Q:nv,ca:Fy,X:iv,rb:Dy,ra:Ny,i:wy,a:we,cb:K}}}async function Me(){function u(m,x){var I=cr=m.exports;m={};for(let[M,P]of Object.entries(I))typeof P=="function"?(I=Nb(P),m[M]=I):m[M]=P;return cr=m,cr=function(){var M=cr,P=ue=>$e=>ue($e)>>>0,ne=ue=>()=>ue()>>>0;return(M=Object.assign({},M)).tb=P(M.tb),M.Xb=ne(M.Xb),M.Zb=P(M.Zb),M.lc=P(M.lc),M.mc=ne(M.mc),M.qc=P(M.qc),M}(),ee.push(cr._b),nu=(m=cr).tb,iu=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,ki=m.Xb,Yt=t._free=m.Yb,Sn=t._malloc=m.Zb,Rs=m.ac,su=m.bc,au=m.cc,ou=m.dc,Ms=m.ec,lu=m.fc,uu=m.gc,ze=m.hc,kn=m.ic,du=m.jc,ke=m.kc,Bs=m.lc,Ie=m.mc,cu=m.nc,Ns=m.oc,pu=m.pc,fu=m.qc,hu=m.rc,Ds=m.sc,mu=m.tc,gu=m.uc,_u=m.vc,bu=m.wc,yu=m.xc,vu=m.yc,wu=m.zc,$u=m.Ac,xu=m.Bc,Su=m.Cc,ku=m.Dc,Tu=m.Ec,Eu=m.Fc,Iu=m.Gc,Cu=m.Hc,zu=m.Ic,Au=m.Jc,Ou=m.Kc,Ru=m.Lc,Mu=m.Mc,Bu=m.Nc,Nu=m.Pc,Du=m.Qc,Pu=m.$c,Uu=m.ad,Lu=m.fd,Fu=m.jd,qu=m.kd,Wu=m.ld,Vu=m.md,Hu=m.nd,Gu=m.od,ju=m.pd,Ku=m.qd,Xu=m.vd,Zu=m.Sd,Qu=m.Td,Yu=m.Ud,Ju=m.Vd,g=x,cr}var p,_=Pe();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(_,(x,I)=>{m(u(x,I))})}):i?u(new WebAssembly.Instance(g,Pe()),g):(he??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/deepfilternet-web/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href,p=await async function(m){var x=he;if(!h&&!z(x))try{var I=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,m)}catch(M){E(`wasm streaming compile failed: ${M}`),E("falling back to ArrayBuffer instantiation")}return async function(M,P){try{var ne=await async function(ue){if(!h)try{var $e=await o(ue);return new Uint8Array($e)}catch{}if(ue==he&&h)ue=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";ue=l(ue)}return ue}(M);return await WebAssembly.instantiate(ne,P)}catch(ue){E(`failed to asynchronously prepare wasm: ${ue}`),Z(ue)}}(x,m)}(_),u(p.instance,p.module))}class Se{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var qe=u=>{u.terminate(),u.onmessage=()=>{}},Ee=[],Ce=0,Je=null,C=u=>{re.length==0&&(be(),me(re[0]));var p=re.pop();if(!p)return 6;J.push(p),G[u.Rc]=p,p.Rc=u.Rc;var _={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return p.postMessage(_,u.rd),0},A=0,B=(u,p,..._)=>{var m,x=16*_.length,I=Ie(),M=Bs(x),P=M>>>3;for(m of _)typeof m=="bigint"?(($(),Q)[P++>>>0]=1n,($(),Q)[P++>>>0]=m):(($(),Q)[P++>>>0]=0n,($(),Y)[P++>>>0]=m);return u=au(u,0,x,M,p),ke(I),u};function K(u){if(i)return B(0,1,u);if(b=u,!(0<A)){for(var p of J)qe(p);for(p of re)qe(p);re=[],J=[],G={},O=!0}d(0,new Se(u))}function j(u){if(i)return B(1,0,u);H(u)}var H=u=>{if(b=u,i)throw j(u),"unwind";K(u)},re=[],J=[],ee=[],G={},ge=u=>{var p=u.Rc;delete G[p],re.push(u),J.splice(J.indexOf(u),1),u.Rc=0,ou(p)};function le(){ee.forEach(u=>u())}var me=u=>new Promise(p=>{u.onmessage=x=>{var I=x.data;if(x=I.Sc,I.Zc&&I.Zc!=ki()){var M=G[I.Zc];M?M.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?yi():x==="spawnThread"?C(I):x==="cleanupThread"?bi(()=>{ge(G[I.Nd])}):x==="loaded"?(u.loaded=!0,p(u)):I.target==="setimmediate"?u.postMessage(I):x==="uncaughtException"?u.onerror(I.error):x==="callHandler"?t[I.wd](...I.args):x&&E(`worker sent an unknown command ${x}`)},u.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var _,m=[];for(_ of[])t.propertyIsEnumerable(_)&&m.push(_);u.postMessage({Sc:"load",xd:m,Od:we,Pd:g})});function be(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});re.push(u)}var we,Ue=(u,p)=>{A=0,u=Ds(u,p),0<A?b=u:Ms(u)},Oe=[],Ge=0;function it(u){var p=new ct(u>>>=0);return($(),q)[p.Tc+12>>>0]==0&&(Nt(p,!0),Ge--),ur(p,!1),Oe.push(p),fu(u)}var ot=0,bt=()=>{ze(0,0);var u=Oe.pop();cu(u.cd),ot=0};function Nt(u,p){p=p?1:0,($(),q)[u.Tc+12>>>0]=p}function ur(u,p){p=p?1:0,($(),q)[u.Tc+13>>>0]=p}class ct{constructor(p){this.cd=p,this.Tc=p-24}}var xt=u=>{var p=ot;if(!p)return kn(0),0;var _=new ct(p);($(),N)[_.Tc+16>>>2>>>0]=p;var m=($(),N)[_.Tc+4>>>2>>>0];if(!m)return kn(0),p;for(var x of u){if(x===0||x===m)break;if(pu(x,m,_.Tc+16))return kn(x),p}return kn(m),p};function mi(){return xt([])}function gi(u){return xt([u>>>0])}function ab(u,p,_,m){return xt([u>>>0,p>>>0,_>>>0,m>>>0])}var ob=()=>{var u=Oe.pop();u||Z("no exception to throw");var p=u.cd;throw($(),q)[u.Tc+13>>>0]==0&&(Oe.push(u),ur(u,!0),Nt(u,!1),Ge++),Ns(p),ot=p};function lb(u,p,_){var m=new ct(u>>>=0);throw p>>>=0,_>>>=0,($(),N)[m.Tc+16>>>2>>>0]=0,($(),N)[m.Tc+4>>>2>>>0]=p,($(),N)[m.Tc+8>>>2>>>0]=_,Ns(u),Ge++,ot=u}var ub=()=>Ge;function gl(u,p,_,m){return i?B(2,1,u,p,_,m):_l(u,p,_,m)}function _l(u,p,_,m){if(u>>>=0,p>>>=0,_>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return i&&x.length===0?gl(u,p,_,m):(u={Ld:_,Rc:u,bd:m,rd:x},i?(u.Sc="spawnThread",postMessage(u,x),0):C(u))}function db(u){throw ot||=u>>>0,ot}var bl=globalThis.TextDecoder&&new TextDecoder,yl=(u,p,_,m)=>{if(_=p+_,m)return _;for(;u[p]&&!(p>=_);)++p;return p},vl=(u,p=0,_,m)=>{if(16<(_=yl(u,p>>>=0,_,m))-p&&u.buffer&&bl)return bl.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,_):u.slice(p,_));for(m="";p<_;){var x=u[p++];if(128&x){var I=63&u[p++];if((224&x)==192)m+=String.fromCharCode((31&x)<<6|I);else{var M=63&u[p++];65536>(x=(240&x)==224?(15&x)<<12|I<<6|M:(7&x)<<18|I<<12|M<<6|63&u[p++])?m+=String.fromCharCode(x):(x-=65536,m+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else m+=String.fromCharCode(x)}return m},st=(u,p,_)=>(u>>>=0)?vl(($(),ie),u,p,_):"";function wl(u,p,_){return i?B(3,1,u,p,_):0}function $l(u,p){if(i)return B(4,1,u,p)}function xl(u,p){if(i)return B(5,1,u,p)}function Sl(u,p,_){if(i)return B(6,1,u,p,_)}function kl(u,p,_){return i?B(7,1,u,p,_):0}function Tl(u,p){if(i)return B(8,1,u,p)}function El(u,p,_){if(i)return B(9,1,u,p,_)}function Il(u,p,_,m){if(i)return B(10,1,u,p,_,m)}function Cl(u,p,_,m){if(i)return B(11,1,u,p,_,m)}function zl(u,p,_,m){if(i)return B(12,1,u,p,_,m)}function Al(u){if(i)return B(13,1,u)}function Ol(u,p){if(i)return B(14,1,u,p)}function Rl(u,p,_){if(i)return B(15,1,u,p,_)}var cb=()=>Z(""),Zt=u=>{u>>>=0;for(var p="";;){var _=($(),ie)[u++>>>0];if(!_)return p;p+=String.fromCharCode(_)}},ws={},$s={},an=class extends Error{constructor(u){super(u),this.name="BindingError"}};function dr(u,p,_={}){return function(m,x,I={}){var M=x.name;if(!m)throw new an(`type "${M}" must have a positive integer typeid pointer`);if($s.hasOwnProperty(m)){if(I.yd)return;throw new an(`Cannot register type '${M}' twice`)}$s[m]=x,ws.hasOwnProperty(m)&&(x=ws[m],delete ws[m],x.forEach(P=>P()))}(u,p,_)}var Ml=(u,p,_)=>{switch(p){case 1:return _?m=>($(),q)[m>>>0]:m=>($(),ie)[m>>>0];case 2:return _?m=>($(),te)[m>>>1>>>0]:m=>($(),V)[m>>>1>>>0];case 4:return _?m=>($(),R)[m>>>2>>>0]:m=>($(),N)[m>>>2>>>0];case 8:return _?m=>($(),Q)[m>>>3>>>0]:m=>($(),de)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function pb(u,p,_,m,x){u>>>=0,_>>>=0,p=Zt(p>>>0);let I=M=>M;if(m=m===0n){let M=8*_;I=P=>BigInt.asUintN(M,P),x=I(x)}dr(u,{name:p,Oc:I,Vc:(M,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:Ml(p,_,!m),Wc:null})}function fb(u,p,_,m){dr(u>>>=0,{name:p=Zt(p>>>0),Oc:function(x){return!!x},Vc:function(x,I){return I?_:m},Uc:function(x){return this.Oc(($(),ie)[x>>>0])},Wc:null})}var Bl=[],Nr=[0,1,,1,null,1,!0,1,!1,1];function xs(u){9<(u>>>=0)&&--Nr[u+1]==0&&(Nr[u]=void 0,Bl.push(u))}var At=u=>{if(!u)throw new an(`Cannot use deleted val. handle = ${u}`);return Nr[u]},Dt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Bl.pop()||Nr.length;return Nr[p]=u,Nr[p+1]=1,p}};function Ss(u){return this.Oc(($(),N)[u>>>2>>>0])}var hb={name:"emscripten::val",Oc:u=>{var p=At(u);return xs(u),p},Vc:(u,p)=>Dt(p),Uc:Ss,Wc:null};function mb(u){return dr(u>>>0,hb)}var gb=(u,p)=>{switch(p){case 4:return function(_){return this.Oc(($(),W)[_>>>2>>>0])};case 8:return function(_){return this.Oc(($(),Y)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function _b(u,p,_){_>>>=0,dr(u>>>=0,{name:p=Zt(p>>>0),Oc:m=>m,Vc:(m,x)=>x,Uc:gb(p,_),Wc:null})}function bb(u,p,_,m,x){u>>>=0,_>>>=0,p=Zt(p>>>0);let I=P=>P;if(m===0){var M=32-8*_;I=P=>P<<M>>>M,x=I(x)}dr(u,{name:p,Oc:I,Vc:(P,ne)=>ne,Uc:Ml(p,_,m!==0),Wc:null})}function yb(u,p,_){function m(I){var M=($(),N)[I>>>2>>>0];return I=($(),N)[I+4>>>2>>>0],new x(($(),q).buffer,I,M)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];dr(u>>>=0,{name:_=Zt(_>>>0),Oc:m,Uc:m},{yd:!0})}var kr=(u,p,_)=>{var m=($(),ie);if(p>>>=0,0<_){var x=p;_=p+_-1;for(var I=0;I<u.length;++I){var M=u.codePointAt(I);if(127>=M){if(p>=_)break;m[p++>>>0]=M}else if(2047>=M){if(p+1>=_)break;m[p++>>>0]=192|M>>6,m[p++>>>0]=128|63&M}else if(65535>=M){if(p+2>=_)break;m[p++>>>0]=224|M>>12,m[p++>>>0]=128|M>>6&63,m[p++>>>0]=128|63&M}else{if(p+3>=_)break;m[p++>>>0]=240|M>>18,m[p++>>>0]=128|M>>12&63,m[p++>>>0]=128|M>>6&63,m[p++>>>0]=128|63&M,I++}}m[p>>>0]=0,u=p-x}else u=0;return u},_i=u=>{for(var p=0,_=0;_<u.length;++_){var m=u.charCodeAt(_);127>=m?p++:2047>=m?p+=2:55296<=m&&57343>=m?(p+=4,++_):p+=3}return p};function vb(u,p){dr(u>>>=0,{name:p=Zt(p>>>0),Oc(_){var m=($(),N)[_>>>2>>>0];return m=st(_+4,m,!0),Yt(_),m},Vc(_,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var x=typeof m=="string";if(!(x||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new an("Cannot pass non-string to std::string");var I=x?_i(m):m.length,M=Sn(4+I+1),P=M+4;return($(),N)[M>>>2>>>0]=I,x?kr(m,P,I+1):($(),ie).set(m,P>>>0),_!==null&&_.push(Yt,M),M},Uc:Ss,Wc(_){Yt(_)}})}var Nl=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,wb=(u,p,_)=>{if(u>>>=1,16<(p=yl(($(),V),u,p/2,_))-u&&Nl)return Nl.decode(($(),V).slice(u,p));for(_="";u<p;++u){var m=($(),V)[u>>>0];_+=String.fromCharCode(m)}return _},$b=(u,p,_)=>{if(_??=2147483647,2>_)return 0;var m=p;_=(_-=2)<2*u.length?_/2:u.length;for(var x=0;x<_;++x){var I=u.charCodeAt(x);($(),te)[p>>>1>>>0]=I,p+=2}return($(),te)[p>>>1>>>0]=0,p-m},xb=u=>2*u.length,Sb=(u,p,_)=>{var m="";u>>>=2;for(var x=0;!(x>=p/4);x++){var I=($(),N)[u+x>>>0];if(!I&&!_)break;m+=String.fromCodePoint(I)}return m},kb=(u,p,_)=>{if(p>>>=0,_??=2147483647,4>_)return 0;var m=p;_=m+_-4;for(var x=0;x<u.length;++x){var I=u.codePointAt(x);if(65535<I&&x++,($(),R)[p>>>2>>>0]=I,(p+=4)+4>_)break}return($(),R)[p>>>2>>>0]=0,p-m},Tb=u=>{for(var p=0,_=0;_<u.length;++_)65535<u.codePointAt(_)&&_++,p+=4;return p};function Eb(u,p,_){if(u>>>=0,p>>>=0,_=Zt(_>>>=0),p===2)var m=wb,x=$b,I=xb;else m=Sb,x=kb,I=Tb;dr(u,{name:_,Oc:M=>{var P=($(),N)[M>>>2>>>0];return P=m(M+4,P*p,!0),Yt(M),P},Vc:(M,P)=>{if(typeof P!="string")throw new an(`Cannot pass non-string to C++ string type ${_}`);var ne=I(P),ue=Sn(4+ne+p);return($(),N)[ue>>>2>>>0]=ne/p,x(P,ue+4,ne+p),M!==null&&M.push(Yt,ue),ue},Uc:Ss,Wc(M){Yt(M)}})}function Ib(u,p){dr(u>>>=0,{zd:!0,name:p=Zt(p>>>0),Oc:()=>{},Vc:()=>{}})}function Cb(u){Rs(u>>>0,!n,1,!r,131072,!1),le()}var bi=u=>{if(!O)try{if(u(),!(0<A))try{i?ki()&&Ms(b):H(b)}catch(p){p instanceof Se||p=="unwind"||d(0,p)}}catch(p){p instanceof Se||p=="unwind"||d(0,p)}},zb=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ks(u){u>>>=0,zb||(Atomics.waitAsync(($(),R),u>>>2,u).value.then(yi),u+=128,Atomics.store(($(),R),u>>>2,1))}var yi=()=>bi(()=>{var u=ki();u&&(ks(u),uu())});function Ab(u,p){(u>>>=0)==p>>>0?setTimeout(yi):i?postMessage({Zc:u,Sc:"checkMailbox"}):(u=G[u])&&u.postMessage({Sc:"checkMailbox"})}var Ts=[];function Ob(u,p,_,m,x){for(p>>>=0,x>>>=0,Ts.length=0,_=x>>>3,m=x+m>>>3;_<m;){var I;I=($(),Q)[_++>>>0]?($(),Q)[_++>>>0]:($(),Y)[_++>>>0],Ts.push(I)}return(p?Ps[p]:$y[u])(...Ts)}var Rb=()=>{A=0};function Mb(u){u>>>=0,i?postMessage({Sc:"cleanupThread",Nd:u}):ge(G[u])}function Bb(u){}var vi=u=>{try{u()}catch(p){Z(p)}};function Nb(u){var p=(..._)=>{wi.push(u);try{return u(..._)}finally{O||(wi.pop(),Qt&&Tr===1&&wi.length===0&&(Tr=0,A+=1,vi(Qu),typeof Fibers<"u"&&Fibers.Zd()))}};return Ul.set(u,p),p}var Tr=0,Qt=null,Dl=0,wi=[],Es=new Map,Pl=new Map,Ul=new Map,Db=0,Is=null,Pb=[],Ll=u=>function(p){if(!O){if(Tr===0){var _=!1,m=!1;p((x=0)=>{if(!O&&(Dl=x,_=!0,m)){Tr=2,vi(()=>Yu(Qt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var I=function(){var ne=($(),R)[Qt+8>>>2>>>0];return ne=Pl.get(ne),ne=Ul.get(ne),--A,ne()}()}catch(ne){I=ne,x=!0}var M=!1;if(!Qt){var P=Is;P&&(Is=null,(x?P.reject:P.resolve)(I),M=!0)}if(x&&!M)throw I}}),m=!0,_||(Tr=1,Qt=function(){var x=Sn(65548),I=x+12;if(($(),N)[x>>>2>>>0]=I,($(),N)[x+4>>>2>>>0]=I+65536,I=wi[0],!Es.has(I)){var M=Db++;Es.set(I,M),Pl.set(M,I)}return I=Es.get(I),($(),R)[x+8>>>2>>>0]=I,x}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),vi(()=>Zu(Qt)))}else Tr===2?(Tr=0,vi(Ju),Yt(Qt),Qt=null,Pb.forEach(bi)):Z(`invalid state: ${Tr}`);return Dl}}(p=>{u().then(p)});function Ub(u){return u>>>=0,Ll(async()=>{var p=await At(u);return Dt(p)})}var Cs=[],Lb=u=>{var p=Cs.length;return Cs.push(u),p},Fb=(u,p)=>{for(var _=Array(u),m=0;m<u;++m){var x=m,I=($(),N)[p+4*m>>>2>>>0],M=$s[I];if(M===void 0)throw u=`parameter ${m}`,I=nu(I),p=Zt(I),Yt(I),new an(`${u} has unknown type ${p}`);_[x]=M}return _},qb=(u,p,_)=>{var m=[];return u=u(m,_),m.length&&(($(),N)[p>>>2>>>0]=Dt(m)),u},Wb={},$i=u=>{var p=Wb[u];return p===void 0?Zt(u):p};function Vb(u,p,_){var[m,...x]=Fb(u,p>>>0);p=m.Vc.bind(m);var I=x.map(ne=>ne.Uc.bind(ne));u--;var M={toValue:At};switch(u=I.map((ne,ue)=>{var $e=`argFromPtr${ue}`;return M[$e]=ne,`${$e}(args${ue?"+"+8*ue:""})`}),_){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:M.getStringOrSymbol=$i,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${u})`,m.zd||(M.toReturnWire=p,M.emval_returnValue=qb,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,_=new Function(Object.keys(M),P)(...Object.values(M)),P=`methodCaller<(${x.map(ne=>ne.name)}) => ${m.name}>`,Lb(Object.defineProperty(_,"name",{value:P}))}function Hb(u,p){return p>>>=0,(u=At(u>>>0))==At(p)}function Gb(u){return(u>>>=0)?(u=$i(u),Dt(globalThis[u])):Dt(globalThis)}function jb(u){return u=$i(u>>>0),Dt(t[u])}function Kb(u,p){return p>>>=0,u=At(u>>>0),p=At(p),Dt(u[p])}function Xb(u){9<(u>>>=0)&&(Nr[u+1]+=1)}function Fl(u,p,_,m,x){return Cs[u>>>0](p>>>0,_>>>0,m>>>0,x>>>0)}function Zb(u,p,_,m,x){return Fl(u>>>0,p>>>0,_>>>0,m>>>0,x>>>0)}function Qb(){return Dt([])}function Yb(u){u=At(u>>>0);for(var p=Array(u.length),_=0;_<u.length;_++)p[_]=u[_];return Dt(p)}function Jb(u){return Dt($i(u>>>0))}function ey(){return Dt({})}function ty(u){for(var p=At(u>>>=0);p.length;){var _=p.pop();p.pop()(_)}xs(u)}function ry(u,p,_){p>>>=0,_>>>=0,u=At(u>>>0),p=At(p),_=At(_),u[p]=_}function ny(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),R)[p>>>2>>>0]=u.getUTCSeconds(),($(),R)[p+4>>>2>>>0]=u.getUTCMinutes(),($(),R)[p+8>>>2>>>0]=u.getUTCHours(),($(),R)[p+12>>>2>>>0]=u.getUTCDate(),($(),R)[p+16>>>2>>>0]=u.getUTCMonth(),($(),R)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,($(),R)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),R)[p+28>>>2>>>0]=u}var ql=u=>u%4==0&&(u%100!=0||u%400==0),Wl=[0,31,60,91,121,152,182,213,244,274,305,335],Vl=[0,31,59,90,120,151,181,212,243,273,304,334];function iy(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),R)[p>>>2>>>0]=u.getSeconds(),($(),R)[p+4>>>2>>>0]=u.getMinutes(),($(),R)[p+8>>>2>>>0]=u.getHours(),($(),R)[p+12>>>2>>>0]=u.getDate(),($(),R)[p+16>>>2>>>0]=u.getMonth(),($(),R)[p+20>>>2>>>0]=u.getFullYear()-1900,($(),R)[p+24>>>2>>>0]=u.getDay();var _=(ql(u.getFullYear())?Wl:Vl)[u.getMonth()]+u.getDate()-1|0;($(),R)[p+28>>>2>>>0]=_,($(),R)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),_=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(_!=m&&u.getTimezoneOffset()==Math.min(m,_)),($(),R)[p+32>>>2>>>0]=u}function sy(u){u>>>=0;var p=new Date(($(),R)[u+20>>>2>>>0]+1900,($(),R)[u+16>>>2>>>0],($(),R)[u+12>>>2>>>0],($(),R)[u+8>>>2>>>0],($(),R)[u+4>>>2>>>0],($(),R)[u>>>2>>>0],0),_=($(),R)[u+32>>>2>>>0],m=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),M=Math.min(I,x);return 0>_?($(),R)[u+32>>>2>>>0]=+(x!=I&&M==m):0<_!=(M==m)&&(x=Math.max(I,x),p.setTime(p.getTime()+6e4*((0<_?M:x)-m))),($(),R)[u+24>>>2>>>0]=p.getDay(),_=(ql(p.getFullYear())?Wl:Vl)[p.getMonth()]+p.getDate()-1|0,($(),R)[u+28>>>2>>>0]=_,($(),R)[u>>>2>>>0]=p.getSeconds(),($(),R)[u+4>>>2>>>0]=p.getMinutes(),($(),R)[u+8>>>2>>>0]=p.getHours(),($(),R)[u+12>>>2>>>0]=p.getDate(),($(),R)[u+16>>>2>>>0]=p.getMonth(),($(),R)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Hl(u,p,_,m,x,I,M){return i?B(16,1,u,p,_,m,x,I,M):-52}function Gl(u,p,_,m,x,I){if(i)return B(17,1,u,p,_,m,x,I)}var xn={},ay=()=>performance.timeOrigin+performance.now();function jl(u,p){if(i)return B(18,1,u,p);if(xn[u]&&(clearTimeout(xn[u].id),delete xn[u]),!p)return 0;var _=setTimeout(()=>{delete xn[u],bi(()=>lu(u,performance.timeOrigin+performance.now()))},p);return xn[u]={id:_,Yd:p},0}function oy(u,p,_,m){u>>>=0,p>>>=0,_>>>=0,m>>>=0;var x=new Date().getFullYear(),I=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var M=Math.max(I,x);($(),N)[u>>>2>>>0]=60*M,($(),R)[p>>>2>>>0]=+(I!=x),u=(p=P=>{var ne=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(ne/60)).padStart(2,"0")}${String(ne%60).padStart(2,"0")}`})(I),p=p(x),x<I?(kr(u,_,17),kr(p,m,17)):(kr(u,m,17),kr(p,_,17))}var ly=()=>Date.now();function uy(u,p,_){return _>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),($(),Q)[_>>>3>>>0]=BigInt(u),0):28}var zs=[],Kl=(u,p)=>{zs.length=0;for(var _;_=($(),ie)[u++>>>0];){var m=_!=105;p+=(m&=_!=112)&&p%8?4:0,zs.push(_==112?($(),N)[p>>>2>>>0]:_==106?($(),Q)[p>>>3>>>0]:_==105?($(),R)[p>>>2>>>0]:($(),Y)[p>>>3>>>0]),p+=m?8:4}return zs};function dy(u,p,_){return u>>>=0,p=Kl(p>>>0,_>>>0),Ps[u](...p)}function cy(u,p,_){return u>>>=0,p=Kl(p>>>0,_>>>0),Ps[u](...p)}var py=()=>{};function fy(u,p){return E(st(u>>>0,p>>>0))}var hy=()=>{throw A+=1,"unwind"};function my(){return 4294901760}var gy=()=>navigator.hardwareConcurrency,Dr={},xi=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},Xl=u=>{for(var p of u)(u=xi(p))&&(Dr[u]=p)};function _y(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Xl(u),Dr.gd=xi(u[3]),Dr.Jd=u,Dr.gd}function Si(u){if(!(u=Dr[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}Yt(Si.hd??0),p=_i(u)+1;var _=Sn(p);return _&&kr(u,_,p),Si.hd=_,Si.hd}function by(u){u>>>=0;var p=($(),ie).length;if(u<=p||4294901760<u)return!1;for(var _=1;4>=_;_*=2){var m=p*(1+.2/_);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-we.buffer.byteLength+65535)/65536|0;try{we.grow(m),se();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function yy(u,p,_){if(u>>>=0,p>>>=0,Dr.gd==u)var m=Dr.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Xl(m);for(var x=3;m[x]&&xi(m[x])!=u;)++x;for(u=0;u<_&&m[u+x];++u)($(),R)[p+4*u>>>2>>>0]=xi(m[u+x]);return u}var As,Os={},Zl=()=>{if(!As){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Os)Os[u]===void 0?delete p[u]:p[u]=Os[u];var _=[];for(u in p)_.push(`${u}=${p[u]}`);As=_}return As};function Ql(u,p){if(i)return B(19,1,u,p);u>>>=0,p>>>=0;var _,m=0,x=0;for(_ of Zl()){var I=p+m;($(),N)[u+x>>>2>>>0]=I,m+=kr(_,I,1/0)+1,x+=4}return 0}function Yl(u,p){if(i)return B(20,1,u,p);u>>>=0,p>>>=0;var _=Zl();for(var m of(($(),N)[u>>>2>>>0]=_.length,u=0,_))u+=_i(m)+1;return($(),N)[p>>>2>>>0]=u,0}function Jl(u){return i?B(21,1,u):52}function eu(u,p,_,m){return i?B(22,1,u,p,_,m):52}function tu(u,p,_,m){return i?B(23,1,u,p,_,m):70}var vy=[null,[],[]];function ru(u,p,_,m){if(i)return B(24,1,u,p,_,m);p>>>=0,_>>>=0,m>>>=0;for(var x=0,I=0;I<_;I++){var M=($(),N)[p>>>2>>>0],P=($(),N)[p+4>>>2>>>0];p+=8;for(var ne=0;ne<P;ne++){var ue=u,$e=($(),ie)[M+ne>>>0],Re=vy[ue];$e===0||$e===10?((ue===1?k:E)(vl(Re)),Re.length=0):Re.push($e)}x+=P}return($(),N)[m>>>2>>>0]=x,0}function wy(u){return u>>>0}i||function(){for(var u=t.numThreads-1;u--;)be();Ee.push(async()=>{var p=async function(){if(!i)return Promise.all(re.map(me))}();Ce++,await p,--Ce==0&&Je&&(p=Je,Je=null,p())})}(),i||(we=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),se()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Ie(),t.stackRestore=u=>ke(u),t.stackAlloc=u=>Bs(u),t.setValue=function(u,p,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":($(),q)[u>>>0]=p;break;case"i16":($(),te)[u>>>1>>>0]=p;break;case"i32":($(),R)[u>>>2>>>0]=p;break;case"i64":($(),Q)[u>>>3>>>0]=BigInt(p);break;case"float":($(),W)[u>>>2>>>0]=p;break;case"double":($(),Y)[u>>>3>>>0]=p;break;case"*":($(),N)[u>>>2>>>0]=p;break;default:Z(`invalid type for setValue: ${_}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),q)[u>>>0];case"i16":return($(),te)[u>>>1>>>0];case"i32":return($(),R)[u>>>2>>>0];case"i64":return($(),Q)[u>>>3>>>0];case"float":return($(),W)[u>>>2>>>0];case"double":return($(),Y)[u>>>3>>>0];case"*":return($(),N)[u>>>2>>>0];default:Z(`invalid type for getValue: ${p}`)}},t.UTF8ToString=st,t.stringToUTF8=kr,t.lengthBytesUTF8=_i;var nu,iu,ki,Yt,Sn,Rs,su,au,ou,Ms,lu,uu,ze,kn,du,ke,Bs,Ie,cu,Ns,pu,fu,hu,Ds,mu,gu,_u,bu,yu,vu,wu,$u,xu,Su,ku,Tu,Eu,Iu,Cu,zu,Au,Ou,Ru,Mu,Bu,Nu,Du,Pu,Uu,Lu,Fu,qu,Wu,Vu,Hu,Gu,ju,Ku,Xu,Zu,Qu,Yu,Ju,cr,$y=[K,j,gl,wl,$l,xl,Sl,kl,Tl,El,Il,Cl,zl,Al,Ol,Rl,Hl,Gl,jl,Ql,Yl,Jl,eu,tu,ru],Ps={973212:(u,p,_,m,x)=>{if(t===void 0||!t.Xc)return 1;if((u=st(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(p=Number(p>>>0),_=Number(_>>>0),m=Number(m>>>0),p+_>u.byteLength)return 3;try{let I=u.subarray(p,p+_);switch(x){case 0:($(),ie).set(I,m>>>0);break;case 1:t.Qd?t.Qd(m,I):t.Id(m,I);break;default:return 4}return 0}catch{return 4}},974036:(u,p,_)=>{t.td(u,($(),ie).subarray(p>>>0,p+_>>>0))},974100:()=>t.Wd(),974142:u=>{t.sd(u)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:u=>t.Ad(u),974297:u=>t.Ed(u),974329:(u,p,_)=>{t.ed(Number(u),Number(p),Number(_),!0)},974392:(u,p,_)=>{t.ed(Number(u),Number(p),Number(_))},974449:()=>typeof wasmOffsetConverter<"u",974506:u=>{t.$b("Abs",u,void 0)},974557:u=>{t.$b("Neg",u,void 0)},974608:u=>{t.$b("Floor",u,void 0)},974661:u=>{t.$b("Ceil",u,void 0)},974713:u=>{t.$b("Reciprocal",u,void 0)},974771:u=>{t.$b("Sqrt",u,void 0)},974823:u=>{t.$b("Exp",u,void 0)},974874:u=>{t.$b("Erf",u,void 0)},974925:u=>{t.$b("Sigmoid",u,void 0)},974980:(u,p,_)=>{t.$b("HardSigmoid",u,{alpha:p,beta:_})},975059:u=>{t.$b("Log",u,void 0)},975110:u=>{t.$b("Sin",u,void 0)},975161:u=>{t.$b("Cos",u,void 0)},975212:u=>{t.$b("Tan",u,void 0)},975263:u=>{t.$b("Asin",u,void 0)},975315:u=>{t.$b("Acos",u,void 0)},975367:u=>{t.$b("Atan",u,void 0)},975419:u=>{t.$b("Sinh",u,void 0)},975471:u=>{t.$b("Cosh",u,void 0)},975523:u=>{t.$b("Asinh",u,void 0)},975576:u=>{t.$b("Acosh",u,void 0)},975629:u=>{t.$b("Atanh",u,void 0)},975682:u=>{t.$b("Tanh",u,void 0)},975734:u=>{t.$b("Not",u,void 0)},975785:(u,p,_)=>{t.$b("Clip",u,{min:p,max:_})},975854:u=>{t.$b("Clip",u,void 0)},975906:(u,p)=>{t.$b("Elu",u,{alpha:p})},975964:u=>{t.$b("Gelu",u,void 0)},976016:u=>{t.$b("Relu",u,void 0)},976068:(u,p)=>{t.$b("LeakyRelu",u,{alpha:p})},976132:(u,p)=>{t.$b("ThresholdedRelu",u,{alpha:p})},976202:(u,p)=>{t.$b("Cast",u,{to:p})},976260:u=>{t.$b("Add",u,void 0)},976311:u=>{t.$b("Sub",u,void 0)},976362:u=>{t.$b("Mul",u,void 0)},976413:u=>{t.$b("Div",u,void 0)},976464:u=>{t.$b("Pow",u,void 0)},976515:u=>{t.$b("Equal",u,void 0)},976568:u=>{t.$b("Greater",u,void 0)},976623:u=>{t.$b("GreaterOrEqual",u,void 0)},976685:u=>{t.$b("Less",u,void 0)},976737:u=>{t.$b("LessOrEqual",u,void 0)},976796:(u,p,_,m,x)=>{t.$b("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},976971:(u,p,_,m,x)=>{t.$b("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977145:(u,p,_,m,x)=>{t.$b("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977319:(u,p,_,m,x)=>{t.$b("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977494:(u,p,_,m,x)=>{t.$b("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977668:(u,p,_,m,x)=>{t.$b("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},977841:(u,p,_,m,x)=>{t.$b("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978014:(u,p,_,m,x)=>{t.$b("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978191:(u,p,_,m,x)=>{t.$b("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978371:(u,p,_,m,x)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!_,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},978551:u=>{t.$b("Where",u,void 0)},978604:(u,p,_)=>{t.$b("Transpose",u,{perm:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(_)>>>0)):[]})},978728:(u,p,_,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:st(_),format:m?"NHWC":"NCHW"})},978861:(u,p,_,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:st(_),format:m?"NHWC":"NCHW"})},978994:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je,Er)=>{t.$b("ConvTranspose",u,{format:ne?"NHWC":"NCHW",autoPad:p,dilations:[_],group:m,kernelShape:[x],pads:[I,M],strides:[P],wIsConst:()=>!!($(),q)[ue>>>0],outputPadding:$e?Array.from(($(),R).subarray(Number($e)>>>0,Number(Re)>>>0)):[],outputShape:We?Array.from(($(),R).subarray(Number(We)>>>0,Number(je)>>>0)):[],activation:st(Er)})},979427:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),R).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(($(),R).subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),wIsConst:()=>!!($(),q)[ne>>>0],outputPadding:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],outputShape:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[],activation:st(je)})},980088:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je,Er)=>{t.$b("ConvTranspose",u,{format:ne?"NHWC":"NCHW",autoPad:p,dilations:[_],group:m,kernelShape:[x],pads:[I,M],strides:[P],wIsConst:()=>!!($(),q)[ue>>>0],outputPadding:$e?Array.from(($(),R).subarray(Number($e)>>>0,Number(Re)>>>0)):[],outputShape:We?Array.from(($(),R).subarray(Number(We)>>>0,Number(je)>>>0)):[],activation:st(Er)})},980521:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("ConvTranspose",u,{format:P?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),R).subarray(Number(I)>>>0,4+(Number(I)>>>0)>>>0)),strides:Array.from(($(),R).subarray(Number(M)>>>0,2+(Number(M)>>>0)>>>0)),wIsConst:()=>!!($(),q)[ne>>>0],outputPadding:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],outputShape:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[],activation:st(je)})},981182:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981273:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("AveragePool",u,{format:je?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:m,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:P?Array.from(($(),R).subarray(Number(P)>>>0,Number(ne)>>>0)):[],pads:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],strides:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[]})},981752:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},981843:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("AveragePool",u,{format:je?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:m,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:P?Array.from(($(),R).subarray(Number(P)>>>0,Number(ne)>>>0)):[],pads:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],strides:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[]})},982322:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982409:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("MaxPool",u,{format:je?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:m,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:P?Array.from(($(),R).subarray(Number(P)>>>0,Number(ne)>>>0)):[],pads:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],strides:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[]})},982884:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},982971:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je)=>{t.$b("MaxPool",u,{format:je?"NHWC":"NCHW",auto_pad:p,ceil_mode:_,count_include_pad:m,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[],kernel_shape:P?Array.from(($(),R).subarray(Number(P)>>>0,Number(ne)>>>0)):[],pads:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],strides:Re?Array.from(($(),R).subarray(Number(Re)>>>0,Number(We)>>>0)):[]})},983446:(u,p,_,m,x)=>{t.$b("Gemm",u,{alpha:p,beta:_,transA:m,transB:x})},983550:u=>{t.$b("MatMul",u,void 0)},983604:(u,p,_,m)=>{t.$b("ArgMax",u,{keepDims:!!p,selectLastIndex:!!_,axis:m})},983712:(u,p,_,m)=>{t.$b("ArgMin",u,{keepDims:!!p,selectLastIndex:!!_,axis:m})},983820:(u,p)=>{t.$b("Softmax",u,{axis:p})},983883:(u,p)=>{t.$b("Concat",u,{axis:p})},983943:(u,p,_,m,x)=>{t.$b("Split",u,{axis:p,numOutputs:_,splitSizes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},984099:u=>{t.$b("Expand",u,void 0)},984153:(u,p)=>{t.$b("Gather",u,{axis:Number(p)})},984224:(u,p)=>{t.$b("GatherElements",u,{axis:Number(p)})},984303:(u,p)=>{t.$b("GatherND",u,{batch_dims:Number(p)})},984382:(u,p,_,m,x,I,M,P,ne,ue,$e)=>{t.$b("Resize",u,{antialias:p,axes:_?Array.from(($(),R).subarray(Number(_)>>>0,Number(m)>>>0)):[],coordinateTransformMode:st(x),cubicCoeffA:I,excludeOutside:M,extrapolationValue:P,keepAspectRatioPolicy:st(ne),mode:st(ue),nearestMode:st($e)})},984744:(u,p,_,m,x,I,M)=>{t.$b("Slice",u,{starts:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(_)>>>0)):[],ends:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[],axes:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[]})},985008:u=>{t.$b("Tile",u,void 0)},985060:(u,p,_)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:_?"NHWC":"NCHW"})},985174:(u,p,_)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:_?"NHWC":"NCHW"})},985288:u=>{t.$b("Range",u,void 0)},985341:(u,p)=>{t.$b("Einsum",u,{equation:st(p)})},985422:(u,p,_,m,x)=>{t.$b("Pad",u,{mode:p,value:_,pads:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},985565:(u,p,_,m,x,I)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:_,spatial:!!x,trainingMode:!!m,format:I?"NHWC":"NCHW"})},985734:(u,p,_,m,x,I)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:_,spatial:!!x,trainingMode:!!m,format:I?"NHWC":"NCHW"})},985903:(u,p,_)=>{t.$b("CumSum",u,{exclusive:Number(p),reverse:Number(_)})},986e3:(u,p,_)=>{t.$b("DequantizeLinear",u,{axis:p,blockSize:_})},986090:(u,p,_,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:st(_),padding_mode:st(m),format:x?"NHWC":"NCHW"})},986260:(u,p,_,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:st(_),padding_mode:st(m),format:x?"NHWC":"NCHW"})},986430:(u,p)=>{t.$b("ScatterND",u,{reduction:st(p)})},986515:(u,p,_,m,x,I,M,P,ne)=>{t.$b("Attention",u,{numHeads:p,isUnidirectional:_,maskFilterValue:m,scale:x,doRotary:I,qkvHiddenSizes:M?Array.from(($(),R).subarray(Number(P)>>>0,Number(P)+M>>>0)):[],pastPresentShareBuffer:!!ne})},986787:u=>{t.$b("BiasAdd",u,void 0)},986842:u=>{t.$b("BiasSplitGelu",u,void 0)},986903:u=>{t.$b("FastGelu",u,void 0)},986959:(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je,Er,Us)=>{t.$b("Conv",u,{format:Re?"NHWC":"NCHW",auto_pad:p,dilations:_?Array.from(($(),R).subarray(Number(_)>>>0,Number(m)>>>0)):[],group:x,kernel_shape:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(M)>>>0)):[],pads:P?Array.from(($(),R).subarray(Number(P)>>>0,Number(ne)>>>0)):[],strides:ue?Array.from(($(),R).subarray(Number(ue)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!($(),q)[Number(We)>>>0],activation:st(je),activation_params:Er?Array.from(($(),W).subarray(Number(Er)>>>0,Number(Us)>>>0)):[]})},987543:u=>{t.$b("Gelu",u,void 0)},987595:(u,p,_,m,x,I,M,P,ne)=>{t.$b("GroupQueryAttention",u,{numHeads:p,kvNumHeads:_,scale:m,softcap:x,doRotary:I,rotaryInterleaved:M,smoothSoftmax:P,localWindowSize:ne})},987812:(u,p,_,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:_,simplified:!!m})},987923:(u,p,_,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:_,simplified:!!m})},988034:(u,p,_,m,x,I)=>{t.$b("MatMulNBits",u,{k:p,n:_,accuracyLevel:m,bits:x,blockSize:I})},988161:(u,p,_,m,x,I)=>{t.$b("MultiHeadAttention",u,{numHeads:p,isUnidirectional:_,maskFilterValue:m,scale:x,doRotary:I})},988320:(u,p)=>{t.$b("QuickGelu",u,{alpha:p})},988384:(u,p,_,m,x)=>{t.$b("RotaryEmbedding",u,{interleaved:!!p,numHeads:_,rotaryEmbeddingDim:m,scale:x})},988523:(u,p,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!_})},988625:(u,p,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!_})},988727:(u,p,_,m)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:_,blockSize:m})},988848:u=>{t.Fd(u)},988882:(u,p)=>t.Hd(Number(u),Number(p),t.Yc.Kd,t.Yc.errors)};function xy(u,p,_){return Ll(async()=>{await t.Dd(Number(u),Number(p),Number(_))})}function Sy(){return typeof wasmOffsetConverter<"u"}function ky(u,p,_,m){var x=Ie();try{return $u(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function Ty(u,p,_){var m=Ie();try{return bu(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;ze(1,0)}}function Ey(u){var p=Ie();try{mu(u)}catch(_){if(ke(p),_!==_+0)throw _;ze(1,0)}}function Iy(u,p){var _=Ie();try{return Ds(u,p)}catch(m){if(ke(_),m!==m+0)throw m;ze(1,0)}}function Cy(u,p,_){var m=Ie();try{hu(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;ze(1,0)}}function zy(u,p){var _=Ie();try{xu(u,p)}catch(m){if(ke(_),m!==m+0)throw m;ze(1,0)}}function Ay(u,p,_,m,x,I,M){var P=Ie();try{return vu(u,p,_,m,x,I,M)}catch(ne){if(ke(P),ne!==ne+0)throw ne;ze(1,0)}}function Oy(u,p,_,m,x,I){var M=Ie();try{gu(u,p,_,m,x,I)}catch(P){if(ke(M),P!==P+0)throw P;ze(1,0)}}function Ry(u,p,_,m){var x=Ie();try{wu(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function My(u,p,_,m,x){var I=Ie();try{_u(u,p,_,m,x)}catch(M){if(ke(I),M!==M+0)throw M;ze(1,0)}}function By(u,p,_,m,x,I,M){var P=Ie();try{ku(u,p,_,m,x,I,M)}catch(ne){if(ke(P),ne!==ne+0)throw ne;ze(1,0)}}function Ny(u,p,_,m,x,I,M){var P=Ie();try{Tu(u,p,_,m,x,I,M)}catch(ne){if(ke(P),ne!==ne+0)throw ne;ze(1,0)}}function Dy(u,p,_,m,x,I,M,P){var ne=Ie();try{zu(u,p,_,m,x,I,M,P)}catch(ue){if(ke(ne),ue!==ue+0)throw ue;ze(1,0)}}function Py(u,p,_,m,x){var I=Ie();try{return Su(u,p,_,m,x)}catch(M){if(ke(I),M!==M+0)throw M;ze(1,0)}}function Uy(u,p,_){var m=Ie();try{return Au(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;ze(1,0)}}function Ly(u,p,_,m,x,I,M,P){var ne=Ie();try{Ou(u,p,_,m,x,I,M,P)}catch(ue){if(ke(ne),ue!==ue+0)throw ue;ze(1,0)}}function Fy(u,p,_,m,x,I,M,P,ne,ue,$e,Re){var We=Ie();try{Eu(u,p,_,m,x,I,M,P,ne,ue,$e,Re)}catch(je){if(ke(We),je!==je+0)throw je;ze(1,0)}}function qy(u,p,_,m,x,I){var M=Ie();try{return Iu(u,p,_,m,x,I)}catch(P){if(ke(M),P!==P+0)throw P;ze(1,0)}}function Wy(u,p,_){var m=Ie();try{return Ru(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;return ze(1,0),0n}}function Vy(u,p,_,m,x,I,M,P,ne){var ue=Ie();try{yu(u,p,_,m,x,I,M,P,ne)}catch($e){if(ke(ue),$e!==$e+0)throw $e;ze(1,0)}}function Hy(u){var p=Ie();try{return Mu(u)}catch(_){if(ke(p),_!==_+0)throw _;ze(1,0)}}function Gy(u,p){var _=Ie();try{return Xu(u,p)}catch(m){if(ke(_),m!==m+0)throw m;return ze(1,0),0n}}function jy(u){var p=Ie();try{return Bu(u)}catch(_){if(ke(p),_!==_+0)throw _;return ze(1,0),0n}}function Ky(u,p,_,m){var x=Ie();try{return Fu(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function Xy(u,p,_,m,x){var I=Ie();try{return qu(u,p,_,m,x)}catch(M){if(ke(I),M!==M+0)throw M;ze(1,0)}}function Zy(u,p,_,m,x,I){var M=Ie();try{return Wu(u,p,_,m,x,I)}catch(P){if(ke(M),P!==P+0)throw P;ze(1,0)}}function Qy(u,p,_,m,x,I){var M=Ie();try{return Vu(u,p,_,m,x,I)}catch(P){if(ke(M),P!==P+0)throw P;ze(1,0)}}function Yy(u,p,_,m,x,I,M,P){var ne=Ie();try{return Cu(u,p,_,m,x,I,M,P)}catch(ue){if(ke(ne),ue!==ue+0)throw ue;ze(1,0)}}function Jy(u,p,_,m,x){var I=Ie();try{return Hu(u,p,_,m,x)}catch(M){if(ke(I),M!==M+0)throw M;return ze(1,0),0n}}function ev(u,p,_,m){var x=Ie();try{return Gu(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function tv(u,p,_,m){var x=Ie();try{return ju(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function rv(u,p,_,m,x,I,M,P,ne,ue,$e,Re){var We=Ie();try{return Ku(u,p,_,m,x,I,M,P,ne,ue,$e,Re)}catch(je){if(ke(We),je!==je+0)throw je;ze(1,0)}}function nv(u,p,_,m,x,I,M,P,ne,ue,$e){var Re=Ie();try{Uu(u,p,_,m,x,I,M,P,ne,ue,$e)}catch(We){if(ke(Re),We!==We+0)throw We;ze(1,0)}}function iv(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je,Er,Us){var lv=Ie();try{Lu(u,p,_,m,x,I,M,P,ne,ue,$e,Re,We,je,Er,Us)}catch(Ls){if(ke(lv),Ls!==Ls+0)throw Ls;ze(1,0)}}function sv(u,p,_){var m=Ie();try{return Nu(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;ze(1,0)}}function av(u,p,_){var m=Ie();try{return Du(u,p,_)}catch(x){if(ke(m),x!==x+0)throw x;ze(1,0)}}function ov(u,p,_,m){var x=Ie();try{Pu(u,p,_,m)}catch(I){if(ke(x),I!==I+0)throw I;ze(1,0)}}function Ti(){if(0<Ce)Je=Ti;else if(i)y?.(t),oe();else{for(var u=Ee;0<u.length;)u.shift()(t);0<Ce?Je=Ti:(t.calledRun=!0,O||(oe(),y?.(t)))}}return i||(cr=await Me(),Ti()),t.PTR_SIZE=4,F?t:new Promise((u,p)=>{y=u,S=p})}var Wm,Nd,A1=X(()=>{Wm=Bd,Nd=globalThis.self?.name?.startsWith("em-pthread"),Nd&&Bd()}),sa,oo,Dd,Tt,Vm,Ai,Pd,Ud,aa,Ld,oa,Hm,la,Gm,Ho=X(()=>{Vo(),sa=typeof location>"u"?void 0:location.origin,oo=import.meta.url>"file:"&&import.meta.url<"file;",Dd=()=>{{if(oo){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,sa).href}return import.meta.url}},Tt=Dd(),Vm=()=>{if(Tt&&!Tt.startsWith("blob:"))return Tt.substring(0,Tt.lastIndexOf("/")+1)},Ai=(e,t)=>{try{let r=t??Tt;return(r?new URL(e,r):new URL(e)).origin===sa}catch{return!1}},Pd=(e,t)=>{let r=t??Tt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ud=(e,t)=>`${t??"./"}${e}`,aa=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ld=async e=>(await import(e)).default,oa=(z1(),oi(Lm)).default,Hm=async()=>{if(!Tt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ai(Tt))return[void 0,oa()];let e=await aa(Tt);return[e,oa(e)]},la=(A1(),oi(qm)).default,Gm=async(e,t,r,n)=>{let i=la&&!(e||t);if(i)if(Tt)i=Ai(Tt)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,la];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Pd(s,t),o=r&&a&&!Ai(a,t),l=o?await aa(a):a??Ud(s,t);return[o?l:void 0,await Ld(l)]}}}),ua,Oi,Cn,da,Fd,qd,Wd,Go,Ve,nn=X(()=>{Ho(),Oi=!1,Cn=!1,da=!1,Fd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Wd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Go=async e=>{if(Oi)return Promise.resolve();if(Cn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(da)throw new Error("previous call to 'initializeWebAssembly()' failed.");Cn=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Wd())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qd())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Fd();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i?.mjs,o=a?.href??a,l=i?.wasm,d=l?.href??l,c=e.wasmBinary,[f,h]=await Gm(o,s,r>1,!!c||!!d),g=!1,b=[];if(t>0&&b.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),b.push(new Promise((y,S)=>{let w={numThreads:r};if(c)w.wasmBinary=c,w.locateFile=v=>v;else if(d||s)w.locateFile=v=>d??s+v;else if(o&&o.indexOf("blob:")!==0)w.locateFile=v=>new URL(v,o).href;else if(f){let v=Vm();v&&(w.locateFile=T=>v+T)}h(w).then(v=>{Cn=!1,Oi=!0,ua=v,y(),f&&URL.revokeObjectURL(f)},v=>{Cn=!1,da=!0,S(v)})})),await Promise.race(b),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ve=()=>{if(Oi&&ua)return ua;throw new Error("WebAssembly is not initialized yet.")}}),Vt,rs,De,jo=X(()=>{nn(),Vt=(e,t)=>{let r=Ve(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},rs=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")rs(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},De=e=>{let t=Ve(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),jm,O1=X(()=>{nn(),jo(),jm=e=>{let t=Ve(),r=0,n=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let s=0;return e?.tag!==void 0&&(s=Vt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&De("Can't create run options."),e?.extra!==void 0&&rs(e.extra,"",new WeakSet,(a,o)=>{let l=Vt(a,n),d=Vt(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&De(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),Vd,Hd,Gd,Lr,jd,Km,R1=X(()=>{nn(),jo(),Vd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Hd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Gd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Lr=(e,t,r,n)=>{let i=Vt(t,n),s=Vt(r,n);Ve()._OrtAddSessionConfigEntry(e,i,s)!==0&&De(`Can't set a session config entry: ${t} - ${r}.`)},jd=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Lr(e,"session.disable_quant_qdq","1",r),Lr(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let f=i?.deviceType;f&&Lr(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let f=i;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Lr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Vt(s,r),l=a.length,d=0,c=0;if(l>0){d=Ve()._malloc(l*Ve().PTR_SIZE),r.push(d),c=Ve()._malloc(l*Ve().PTR_SIZE),r.push(c);for(let f=0;f<l;f++)Ve().setValue(d+f*Ve().PTR_SIZE,a[f][0],"*"),Ve().setValue(c+f*Ve().PTR_SIZE,a[f][1],"*")}await Ve()._OrtAppendExecutionProvider(e,o,d,c,l)!==0&&De(`Can't append execution provider: ${s}.`)}},Km=async e=>{let t=Ve(),r=0,n=[],i=e||{};Gd(i);try{let s=Vd(i.graphOptimizationLevel??"all"),a=Hd(i.executionMode??"sequential"),o=typeof i.logId=="string"?Vt(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Vt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,c),r===0&&De("Can't create session options."),i.executionProviders&&await jd(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Lr(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[f,h]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=Vt(f,n);t._OrtAddFreeDimensionOverride(r,g,h)!==0&&De(`Can't set a free dimension override: ${f} - ${h}.`)}return i.extra!==void 0&&rs(i.extra,"",new WeakSet,(f,h)=>{Lr(r,f,h,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&De("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),jr,_r,Kr,vs,ns,Ko,Xo,lo,_e=X(()=>{jr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},_r=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Kr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},vs=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ns=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ko=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",lo=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Zo,Xm=X(()=>{Vo(),Zo=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Kd,Xd,Zd,Qd,Qo,Yd,Ae,Sr=X(()=>{_e(),Kd=["V","I","W","E","F"],Xd=(e,t)=>{console.log(`[${Kd[e]},${new Date().toISOString()}]${t}`)},Qo=(e,t)=>{Zd=e,Qd=t},Yd=(e,t)=>{let r=ns(e),n=ns(Zd);r>=n&&Xd(r,typeof t=="function"?t():t)},Ae=(...e)=>{Qd&&Yd(...e)}}),Jd,vn,D,is,Zm,Qm,Ym,ye=X(()=>{Jd=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},vn=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=Jd.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},D=class ji{static size(t){return ji.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ji.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ji.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},is=class Fn{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Fn.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Fn.computeShapeHelper(t,r,l,n,i,s,a,o),l}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Fn.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Fn.adjustPadAndReturnShape(r[d+2],i[d],s[d],a[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},Zm=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!vn.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Qm=-34028234663852886e22,Ym=34028234663852886e22}),Yo,Jm=X(()=>{_e(),Yo=(e,t)=>new(vs(t))(e)}),ca,uo,pa,ec,fa,tc,ha,ma,ga,rc,eg,M1=X(()=>{_e(),Sr(),ca=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),uo=(e,t)=>{if(t==="int32")return e;let r=ca.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(vs(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},pa=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ec=1,fa=()=>ec++,tc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ha=(e,t)=>{let r=ca.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},ma=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ha(this.dataType,this.tensorShape)}destroy(){Ae("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=pa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},ga=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!s?.input.dataTypes.includes(t)){if(a=tc.get(t),!a||s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${t}`);Ae("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==ha(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=uo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ae("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?pa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},rc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=fa();return this.tensorTrackersById.set(e,new ga(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){Ae("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ae("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=fa(),a=new ma({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new ga(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){Ae("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}Ae("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new ma({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},eg=(...e)=>new rc(...e)}),zn,nc,tg,B1=X(()=>{_e(),nn(),Jm(),M1(),Sr(),zn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),nc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},tg=class{constructor(e){this.tensorManager=eg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ae("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ae("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ae("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>nc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ae("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=zn.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){Ae("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=zn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ve().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ae("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Yo(r,t)}}registerMLTensor(e,t,r,n){let i=zn.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return Ae("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,n,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let f=uo(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),i.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ae("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=zn.get(jr(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!i?.input.dataTypes.includes(n):!!i?.output.dataTypes.includes(n)}flush(){}}}),Jo=X(()=>{}),_a,Ri,Mi,ic,sc,ba,co,ac,rg,N1=X(()=>{Sr(),Jo(),_a=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ri=[],Mi=e=>Math.ceil(Number(e)/16)*16,ic=e=>{for(let t=0;t<Ri.length;t++){let r=Ri[t];if(e<=r)return r}return Math.ceil(e/16)*16},sc=1,ba=()=>sc++,co=async(e,t,r,n)=>{let i=Mi(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},ac=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of _a)Ri.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=Mi(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),Ae("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Mi(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return Ae("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=ba();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),Ae("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ae("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ic(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:ba(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ae("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ae("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await co(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=_a.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ae("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},rg=(...e)=>new ac(...e)}),oc,Ne,rt=X(()=>{oc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new oc(e)}),wn,Bi,lt,ht,fe,Ye,po,cn,Mr,pe,An,U,ce,ng,el,lc,ig,ve=X(()=>{_e(),ye(),wn=64,Bi=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},lt=(e,t=1)=>{let r=Bi(e,t);return typeof r=="string"?r:r[0]},ht=(e,t=1)=>{let r=Bi(e,t);return typeof r=="string"?r:r[1]},fe=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),t},Ye=e=>e%4===0?4:e%2===0?2:1,po=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,cn=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Mr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,An=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Bi(t,i),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},g=F=>typeof F=="string"?F:`${F}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",S=`${y}${e}_shape`,w=`${y}${e}_strides`,v="";for(let F=0;F<a-1;F++)v+=`
    let dim${F} = current / ${pe(w,F,a)};
    let rest${F} = current % ${pe(w,F,a)};
    indices[${F}] = dim${F};
    current = rest${F};
    `;v+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${v}
    return indices;
  }`,k=F=>(b.offsetToIndices=!0,a<2?F:`o2i_${e}(${F})`),E=[];if(a>=2)for(let F=a-1;F>=0;F--)E.push(`${pe(w,F,a)} * (indices[${F}])`);let O=a<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,z=F=>(b.indicesToOffset=!0,a<2?F:`i2o_${e}(${F})`),$=(...F)=>a===0?"0u":`${h.indices}(${F.map(g).join(",")})`,L=(F,se)=>a<2?`${F}`:`${pe(F,se,a)}`,q=(F,se,oe)=>a<2?`${F}=${oe};`:`${pe(F,se,a)}=${oe};`,ie={},te=(F,se)=>{b.broadcastedIndicesToOffset=!0;let oe=`${se.name}broadcastedIndicesTo${e}Offset`;if(oe in ie)return`${oe}(${F})`;let Z=[];for(let Pe=a-1;Pe>=0;Pe--){let Me=se.indicesGet("outputIndices",Pe+se.rank-a);Z.push(`${L(w,Pe)} * (${Me} % ${L(S,Pe)})`)}return ie[oe]=`fn ${oe}(outputIndices: ${se.type.indices}) -> u32 {
             return ${Z.length>0?Z.join("+"):"0u"};
           }`,`${oe}(${F})`},V=(F,se)=>(()=>{if(h.storage===h.value)return`${e}[${F}]=${se};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${F}]=vec2<u32>(u32(${se}), select(0u, 0xFFFFFFFFu, ${se} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${F}]=vec2<u32>(u32(${se}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${F}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${se}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),R=F=>(()=>{if(h.storage===h.value)return`${e}[${F}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${F}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${F}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${F}] & 0xFFu), bool(${e}[${F}] & 0xFF00u), bool(${e}[${F}] & 0xFF0000u), bool(${e}[${F}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),N=a<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,W=a<2?"":(()=>{let F=o.map(oe=>`d${oe}: u32`).join(", "),se=o.map(oe=>`d${oe}`).join(", ");return`
  fn get_${e}(${F}) -> ${c} {
    return get_${e}ByIndices(${$(se)});
  }`})(),Y=(...F)=>{if(F.length!==a)throw new Error(`indices length must be ${a}`);let se=F.map(g).join(",");return a===0?R("0u"):a===1?R(se[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${se})`)},Q=F=>a<2?R(F):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${F})`),de=a<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,he=a<2?"":(()=>{let F=o.map(oe=>`d${oe}: u32`).join(", "),se=o.map(oe=>`d${oe}`).join(", ");return`
  fn set_${e}(${F}, value: ${c}) {
    set_${e}ByIndices(${$(se)}, value);
  }`})();return{impl:()=>{let F=[],se=!1;return b.offsetToIndices&&(F.push(T),se=!0),b.indicesToOffset&&(F.push(O),se=!0),b.broadcastedIndicesToOffset&&(Object.values(ie).forEach(oe=>F.push(oe)),se=!0),b.set&&(F.push(he),se=!0),b.setByIndices&&(F.push(de),se=!0),b.get&&(F.push(W),se=!0),b.getByIndices&&(F.push(N),se=!0),!s&&se&&F.unshift(`const ${S} = ${h.indices}(${r.join(",")});`,`const ${w} = ${h.indices}(${D.computeStrides(r).join(",")});`),F.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:te,indices:$,indicesGet:L,indicesSet:q,set:(...F)=>{if(F.length!==a+1)throw new Error(`indices length must be ${a}`);let se=F[a];if(typeof se!="string")throw new Error("value must be string");let oe=F.slice(0,a).map(g).join(",");return a===0?V("0u",se):a===1?V(oe[0],se):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${oe}, ${se})`)},setByOffset:V,setByIndices:(F,se)=>a<2?V(F,se):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${F}, ${se});`),get:Y,getByOffset:R,getByIndices:Q,usage:n,name:e,strides:w,shape:S,rank:a}},U=(e,t,r,n=1)=>An(e,t,r,"input",n),ce=(e,t,r,n=1)=>An(e,t,r,"output",n),ng=(e,t,r)=>An(e,t,r,"atomicOutput",1),el=(e,t,r,n=1)=>An(e,t,r,"internal",n),lc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=wn){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},ig=(e,t)=>new lc(e,t)}),uc,ya,dc,cc,pc,fc,zt,sg,ag,Br=X(()=>{_e(),ye(),rt(),ve(),uc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ya=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),dc=(e,t)=>D.sortBasedOnPerm(e,ya(e.length,t)),cc=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},pc=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},fc=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},zt=(e,t)=>{let r=e.dataType,n=e.dims.length,i=ya(n,t),s=dc(e.dims,i),a=e.dims,o=s,l=n<2||fc(i,e.dims),d;if(l)return d=b=>{let y=U("input",r,a,4),S=ce("output",r,o,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(y,S)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=pc(e.dims,i),h=D.areEqual(f,[2,3,1]),g=D.areEqual(f,[3,1,2]);if(c.length===2||h||g){a=h?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let b=16;return d=y=>{let S=U("a",r,a.length),w=ce("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(S,w)}
  var<workgroup> tile : array<array<${w.type.value}, ${b+1}>, ${b}>;
  ${y.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${w.setByIndices(`${w.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/b),y:Math.ceil(o[0]/b)},programUniforms:[{type:12,data:y},...fe(a,o)]}},getShaderSource:d}}return d=b=>{let y=U("a",r,a.length),S=ce("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(y,S)}

  ${cc(i,n,y,S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...fe(a,o)]}},getShaderSource:d}},sg=(e,t)=>{uc(e.inputs,t.perm),e.compute(zt(e.inputs[0],t.perm))},ag=e=>Ne({perm:e.perm})}),hc,mc,gc,_c,bc,yc,vc,wc,$c,xc,Pt,og,lg,ug,dg,cg,pg,fg,hg,mg,gg,D1=X(()=>{_e(),ye(),ve(),tl(),Br(),hc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},mc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},gc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},_c={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},bc=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},yc=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},vc=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},wc=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$c=(e,t)=>{let r=[];if(!wc(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},xc=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=D.size(s),d=D.size(a),c=U("_A",r[0].dataType,o),f=ce("output",i,s),h=64;l===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,b=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${gc[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${hc[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${mc[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${n==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${_c[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Pt=(e,t,r,n)=>{let i=e.inputs.length===1?r:fo(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((g,b)=>b));let a=D.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=$c(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(zt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=bc(o.length,l.dims.length));let[c,f]=yc(l.dims,o),h=c;i.keepDims&&(h=vc(c,a)),e.compute(xc(t,i.cacheKey,[l],n,e.inputs[0].dataType,h,f),{inputs:[l]})},og=(e,t)=>{Pt(e,"ReduceMeanShared",t,"mean")},lg=(e,t)=>{Pt(e,"ReduceL1Shared",t,"l1")},ug=(e,t)=>{Pt(e,"ReduceL2Shared",t,"l2")},dg=(e,t)=>{Pt(e,"ReduceLogSumExpShared",t,"logSumExp")},cg=(e,t)=>{Pt(e,"ReduceMaxShared",t,"max")},pg=(e,t)=>{Pt(e,"ReduceMinShared",t,"min")},fg=(e,t)=>{Pt(e,"ReduceProdShared",t,"prod")},hg=(e,t)=>{Pt(e,"ReduceSumShared",t,"sum")},mg=(e,t)=>{Pt(e,"ReduceSumSquareShared",t,"sumSquare")},gg=(e,t)=>{Pt(e,"ReduceLogSumShared",t,"logSum")}}),Ut,Sc,ss,fo,Lt,kc,Tc,Ec,Ic,Cc,zc,Ac,Oc,Rc,Mc,Ft,_g,bg,yg,vg,wg,$g,xg,Sg,kg,Tg,tl=X(()=>{_e(),ye(),rt(),ve(),D1(),Ut=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Sc=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ss=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,f=D.normalizeAxes(i,c),h=!o&&f.length===0;d.forEach((y,S)=>{h||f.indexOf(S)>=0?a&&l.push(1):l.push(y)});let g=l.length,b=D.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let S=[],w=U("_A",r[0].dataType,c),v=ce("output",s,g),T=n(w,v,f),k=T[2];for(let E=0,O=0;E<c;E++)h||f.indexOf(E)>=0?(a&&O++,k=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${w.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(S.push(`${w.indicesSet("input_indices",E,v.indicesGet("output_indices",O))};`),O++);return`

        ${y.registerUniform("output_size","u32").declareVariables(w,v)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${w.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?v.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...fe(d,l)]})}},fo=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),Ne({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Lt=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:fo(i,r);e.compute(ss(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Sc:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},kc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Tc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ec=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ic=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Cc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},zc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},Ac=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Oc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Rc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Mc=(e,t)=>{Ut(e.inputs),Lt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ft=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},_g=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zc(e,t):og(e,t)},bg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tc(e,t):lg(e,t)},yg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ec(e,t):ug(e,t)},vg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ic(e,t):dg(e,t)},wg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cc(e,t):cg(e,t)},$g=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ac(e,t):pg(e,t)},xg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):fg(e,t)},Sg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rc(e,t):hg(e,t)},kg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mc(e,t):mg(e,t)},Tg=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kc(e,t):gg(e,t)}}),va,Eg,Ig,ho,P1=X(()=>{_e(),rt(),tl(),va=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Eg=(e,t)=>{va(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ss("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ig=(e,t)=>{va(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ss("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ho=e=>Ne(e)}),Bc,Ni,Nc,Dc,Pc,li,Uc,Cg,rl=X(()=>{_e(),ye(),Jo(),ve(),Bc=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,h=f,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let b=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let S=b+y,w=-1,v=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:S,maxSequenceLength:w,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ni=(e,t,r)=>t&&e?`
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
    `,Nc=(e,t,r,n,i,s,a,o)=>{let l=Ye(a?1:s),d=64,c=s/l;c<d&&(d=32);let f=Math.ceil(s/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:c},{type:12,data:f}],g=lt(e.dataType,l),b=ht(1,l),y=["type"];a&&y.push("type"),o&&y.push("type");let S=w=>{let v=ce("x",e.dataType,e.dims,l),T=[v],k=a?U("seq_lens",a.dataType,a.dims):void 0;k&&T.push(k);let E=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let O=ht(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${w.registerUniforms(z).declareVariables(...T)}
  ${w.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ni(k,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${O}(1.0) / ${O}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${O}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:y},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},Dc=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&n,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,g=f?[s.batchSize,h,d,s.headSize]:void 0,b=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=Ye(s.headSize),w=s.headSize/S,v=12,T={x:Math.ceil(d/v),y:Math.ceil(s.sequenceLength/v),z:s.batchSize*s.numHeads},k=[{type:12,data:s.sequenceLength},{type:12,data:w},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:b}],E=f&&n&&D.size(n.dims)>0,O=["type","type"];E&&O.push("type"),i&&O.push("type"),o&&O.push("type"),l&&O.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:g,dataType:t.dataType,gpuDataType:0});let $=L=>{let q=U("q",t.dataType,t.dims,S),ie=U("key",r.dataType,r.dims,S),te=[q,ie];if(E){let de=U("past_key",n.dataType,n.dims,S);te.push(de)}i&&te.push(U("attention_bias",i.dataType,i.dims));let V=o?U("seq_lens",o.dataType,o.dims):void 0;V&&te.push(V);let R=l?U("total_sequence_length_input",l.dataType,l.dims):void 0;R&&te.push(R);let N=ce("output",t.dataType,c),W=[N];f&&W.push(ce("present_key",t.dataType,g,S));let Y=ht(1,S),Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${q.type.storage}, ${v*v}>;
  ${L.registerUniforms(Q).declareVariables(...te,...W)}
  ${L.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ni(V,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
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
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${i!==void 0};${n!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:$}},Pc=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,f=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=f?[i.batchSize,h,l,i.headSize]:void 0,b=[i.batchSize,i.sequenceLength,c],y=12,S={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},w=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],v=f&&n&&D.size(n.dims)>0,T=["type","type"];v&&T.push("type"),a&&T.push("type"),o&&T.push("type");let k=[{dims:b,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=O=>{let z=U("probs",t.dataType,t.dims),$=U("v",r.dataType,r.dims),L=[z,$];v&&L.push(U("past_value",n.dataType,n.dims));let q=a?U("seq_lens",a.dataType,a.dims):void 0;a&&L.push(q);let ie=o?U("total_sequence_length_input",o.dataType,o.dims):void 0;o&&L.push(ie);let te=[ce("output",t.dataType,b)];f&&te.push(ce("present_value",t.dataType,g));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${z.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${z.type.value}, ${y*y}>;
  ${O.registerUniforms(V).declareVariables(...L,...te)}
  ${O.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ni(q,ie,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:w}),getShaderSource:E}},li=(e,t,r,n,i,s,a,o,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),g=h>1?a:void 0,b=h>1?o:void 0,y=h>1?d.pastSequenceLength:0,S=y+d.kvSequenceLength,w=l&&D.size(l.dims)>0?l:void 0,v=[t,r];g&&D.size(g.dims)>0&&v.push(g),w&&v.push(w),c&&v.push(c),f&&v.push(f);let T=e.compute(Dc(h,t,r,g,w,d,y,c,f),{inputs:v,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Nc(T,d.batchSize,d.numHeads,y,d.sequenceLength,S,c,f),{inputs:c&&f?[T,c,f]:[T],outputs:[]});let k=[T,n];b&&D.size(b.dims)>0&&k.push(b),c&&k.push(c),f&&k.push(f),e.compute(Pc(h,T,n,b,d,y,c,f),{inputs:k,outputs:h>1?[0,2]:[0]})},Uc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=ce("output_q",l[0].dataType,r),g=ce("output_k",l[0].dataType,r),b=ce("output_v",l[0].dataType,r),y=U("input",l[0].dataType,l[0].dims),S=U("weight",l[1].dataType,l[1].dims),w=U("bias",l[2].dataType,l[2].dims),v=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${v}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${v}, ${a*a}>;
  var<workgroup> tileWeightK: array<${v}, ${a*a}>;
  var<workgroup> tileWeightV: array<${v}, ${a*a}>;
  ${f.registerUniforms(T).declareVariables(y,S,w,h,g,b)}
  ${f.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Cg=(e,t)=>{let r=Bc(e.inputs,t),[n,i,s]=Uc(e,r);return li(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Lc,Fc,qc,zg,U1=X(()=>{Bt(),_e(),ye(),rt(),ve(),Lc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Fc=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?Ye(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=D.size(s)/a,d=n,c=d?s.length:s,f=U("x",e[0].dataType,e[0].dims,a),h=U("scale",e[1].dataType,e[1].dims,o),g=U("bias",e[2].dataType,e[2].dims,o),b=U("inputMean",e[3].dataType,e[3].dims,o),y=U("inputVar",e[4].dataType,e[4].dims,o),S=ce("y",e[0].dataType,c,a),w=()=>{let T="";if(n)T=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let k=1;k<h.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},v=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(f,h,g,b,y,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${a}`)};
    ${w()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...fe(s)]:[{type:12,data:l}]})}},qc=e=>Ne(e),zg=(e,t)=>{let{inputs:r,outputCount:n}=e,i=qc({...t,outputCount:n});if(Ke.webgpu.validateInputContent&&Lc(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Fc(r,i))}}),Wc,Vc,Ag,L1=X(()=>{ye(),ve(),Wc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Vc=e=>{let t=e[0].dims,r=e[0].dims[2],n=D.size(t)/4,i=e[0].dataType,s=U("input",i,t,4),a=U("bias",i,[r],4),o=U("residual",i,t,4),l=ce("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Ag=e=>{Wc(e.inputs),e.compute(Vc(e.inputs))}}),Hc,Be,Og,Rg,Mg,Bg,Ng,Dg,Pg,Ug,Lg,Gc,Fg,qg,Wg,Vg,qn,Hg,Ki,Gg,jg,Kg,Xg,Zg,Qg,Yg,Jg,e0,t0,r0,n0,i0,s0,a0,o0,wa,l0,mo,go,u0,d0,c0,jc,Kc,p0,nl=X(()=>{_e(),ye(),rt(),ve(),Hc=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=U("inputData",r,[o],4),c=ce("outputData",n,[o],4),f=[{name:"vec_size",type:"u32"}];return a&&f.push(...a),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},Be=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Hc(d,D.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:l})}},Og=e=>{e.compute(Be(e.inputs[0],"Abs","abs"))},Rg=e=>{e.compute(Be(e.inputs[0],"Acos","acos"))},Mg=e=>{e.compute(Be(e.inputs[0],"Acosh","acosh"))},Bg=e=>{e.compute(Be(e.inputs[0],"Asin","asin"))},Ng=e=>{e.compute(Be(e.inputs[0],"Asinh","asinh"))},Dg=e=>{e.compute(Be(e.inputs[0],"Atan","atan"))},Pg=e=>{e.compute(Be(e.inputs[0],"Atanh","atanh"))},Ug=e=>Ne(e),Lg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Be(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Gc=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:r})},Fg=(e,t)=>{let r=t||Gc(e.inputs),n=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},qg=e=>{e.compute(Be(e.inputs[0],"Ceil","ceil"))},Wg=e=>{e.compute(Be(e.inputs[0],"Cos","cos"))},Vg=e=>{e.compute(Be(e.inputs[0],"Cosh","cosh"))},qn=e=>Ne(e),Hg=(e,t)=>{let r=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ki=(e="f32")=>`
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
}`,Gg=e=>{let t=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ki(t)))},jg=e=>{e.compute(Be(e.inputs[0],"Exp","exp"))},Kg=e=>{e.compute(Be(e.inputs[0],"Floor","floor"))},Xg=e=>{let t=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ki(t)))},Zg=(e,t)=>{let r=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Qg=e=>{e.compute(Be(e.inputs[0],"Not",t=>`!${t}`))},Yg=e=>{e.compute(Be(e.inputs[0],"Neg",t=>`-${t}`))},Jg=e=>{e.compute(Be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},e0=e=>{let t=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},t0=e=>{e.compute(Be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},r0=e=>Ne(e),n0=(e,t)=>{let r=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},i0=e=>{e.compute(Be(e.inputs[0],"Sin","sin"))},s0=e=>{e.compute(Be(e.inputs[0],"Sinh","sinh"))},a0=e=>{e.compute(Be(e.inputs[0],"Sqrt","sqrt"))},o0=e=>{e.compute(Be(e.inputs[0],"Tan","tan"))},wa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,l0=e=>{e.compute(Be(e.inputs[0],"Tanh",wa))},mo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${wa("v")};
}
`,go=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,u0=e=>{let t=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"FastGelu",go,mo(t),void 0,e.inputs[0].dataType))},d0=(e,t)=>{let r=ht(e.inputs[0].dataType);return e.compute(Be(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},c0=e=>{e.compute(Be(e.inputs[0],"Log","log"))},jc=(e,t)=>`
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
`,Kc=e=>`quick_gelu_impl(${e})`,p0=(e,t)=>{let r=ht(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"QuickGelu",Kc,jc(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Xc,Zc,f0,F1=X(()=>{ye(),ve(),nl(),Xc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=U("input",e[0].dataType,e[0].dims,4),n=U("bias",e[0].dataType,[e[0].dims[2]],4),i=ce("output",e[0].dataType,t,4),s=D.size(t)/4,a=lt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Ki(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},f0=e=>{Xc(e.inputs),e.compute(Zc(e.inputs))}}),Qc,Yc,qt,h0,m0,g0,_0,b0,y0,v0,w0,$0,x0,q1=X(()=>{_e(),ye(),ve(),Qc=(e,t,r,n,i,s,a,o,l,d,c,f)=>{let h,g;typeof o=="string"?h=g=(v,T)=>`${o}((${v}),(${T}))`:typeof o=="function"?h=g=o:(h=o.scalar,g=o.vector);let b=ce("outputData",c,n.length,4),y=U("aData",l,t.length,4),S=U("bData",d,r.length,4),w;if(i)if(s){let v=D.size(t)===1,T=D.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;v||T?w=b.setByOffset("global_idx",g(v?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):w=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",g(a||k?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else w=b.setByOffset("global_idx",g(y.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(T,k,E="")=>{let O=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${b.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${y.broadcastedIndicesToOffset(`outputIndices${k}`,b)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,b)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${E}(${h(O,z)});
          `};c===9?w=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:w=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,S,b)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${w}
      }`},Yc=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!D.areEqual(o,l),c=o,f=D.size(o),h=!1,g=!1,b=[d];if(d){let y=vn.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=D.size(c);let S=D.size(o)===1,w=D.size(l)===1,v=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;b.push(S),b.push(w),b.push(v),b.push(T);let k=1;for(let E=1;E<c.length;E++){let O=o[o.length-E],z=l[l.length-E];if(O===z)k*=O;else break}k%4===0?(g=!0,h=!0):(S||w||v||T)&&(h=!0)}else h=!0;return b.push(h),{name:e,shaderCache:{hint:t+b.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Qc(y,o,l,c,h,d,g,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(c)/4)},...fe(o,l,c)]})}},qt=(e,t,r,n,i,s)=>{e.compute(Yc(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},h0=e=>{qt(e,"Add",(t,r)=>`${t}+${r}`)},m0=e=>{qt(e,"Div",(t,r)=>`${t}/${r}`)},g0=e=>{qt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_0=e=>{qt(e,"Mul",(t,r)=>`${t}*${r}`)},b0=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;qt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},y0=e=>{qt(e,"Sub",(t,r)=>`${t}-${r}`)},v0=e=>{qt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},w0=e=>{qt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},$0=e=>{qt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},x0=e=>{qt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Jc,ep,tp,rp,S0,k0,W1=X(()=>{_e(),ye(),rt(),ve(),Jc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},ep=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,tp=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},rp=(e,t,r,n)=>{let i=D.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],s[y]=o,d.push(e[y].dims.length),a[y]=U(`input${y}`,n,d[y]),l.push("rank"),c.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)c.push(...fe(e[y].dims));c.push(...fe(r));let f=ce("output",n,r.length),h=f.indicesGet("indices",t),g=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),b=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)y.registerUniform(`sizeInConcatAxis${S}`,"u32");return y.declareVariables(...a,f)})()}

  ${ep(s.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${tp(a,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:b}},S0=(e,t)=>{let r=e.inputs,n=r[0].dims,i=D.normalizeAxis(t.axis,n.length);Jc(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>D.size(o.dims)>0);e.compute(rp(a,i,s,r[0].dataType),{inputs:a})},k0=e=>Ne({axis:e.axis})}),Jr,en,tn,il,sn=X(()=>{_e(),ye(),Jr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},en=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},tn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},il=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,n]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=e?.activation_params||[Qm,Ym];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),dt,T0,sl=X(()=>{dt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},T0=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),E0,V1=X(()=>{E0=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Yn,al,ol=X(()=>{_e(),ye(),ve(),sn(),Yn=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${pe(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,pe(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},al=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],c=a[a.length-1],f=Ye(d),h=Ye(c),g=Ye(l),b=D.size(r)/f/g,y=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),w=[D.size(S),l,d],v=[{type:12,data:b},{type:12,data:l},{type:12,data:d},{type:12,data:c}];en(t,v),v.push(...fe(S,a,o)),y&&v.push(...fe(e[2].dims)),v.push(...fe(w));let T=k=>{let E=el("batch_dims",e[0].dataType,S.length),O=U("a",e[0].dataType,a.length,h),z=U("b",e[1].dataType,o.length,f),$=ce("output",e[0].dataType,w.length,f),L=lt($.type.tensor),q=Jr(t,$.type.value,L),ie=[O,z],te="";if(y){let N=i?f:1;ie.push(U("bias",e[2].dataType,e[2].dims.length,N)),te=`${i?`value += bias[col / ${N}];`:`value += ${$.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];tn(t,V);let R=()=>{let N=`var a_data: ${O.type.value};`;for(let W=0;W<h;W++)N+=`
              let b_data${W} = b[(b_offset + (k + ${W}) * uniforms.N + col) / ${f}];`;for(let W=0;W<g;W++){N+=`a_data = a[(a_offset + (row + ${W}) * uniforms.K + k) / ${h}];`;for(let Y=0;Y<h;Y++)N+=`
            values[${W}] = fma(${z.type.value}(a_data${h===1?"":`[${Y}]`}), b_data${Y}, values[${W}]);
`}return N};return`
  ${k.registerUniforms(V).registerInternalVariables(E).declareVariables(...ie,$)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${O.type.indices};
    ${Yn("a_indices",O,O.rank-2,E.rank,"batch_indices")}
    ${O.indicesSet("a_indices",O.rank-2,0)}
    ${O.indicesSet("a_indices",O.rank-1,0)}
    let a_offset = ${O.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Yn("b_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${R()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${te}
      ${q}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${g};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:v}),getShaderSource:T}}}),np,ip,_o,$a,sp,bo,ap,as,ll=X(()=>{_e(),ye(),ve(),sn(),ol(),sl(),np=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ip=(e,t)=>e?`
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
        }`,_o=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=i?l:s,f=i?s:l,h=c/t[0],g=s/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
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
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${np(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${ip(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},$a=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,sp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",bo=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=i?d:s,h=i?s:d;if(!(h%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],b=f/t[0],y=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${$a(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
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
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${$a(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
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
      ${sp(i)}
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
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},ap=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=lt(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${dt(e,d)} {
      var value = ${dt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Yn("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${dt(e,d)} {
      var value = ${dt(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Yn("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${dt(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${dt(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},as=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),c=n?n.slice(0,-2):r.slice(0,-2),f=D.size(c),h=a[a.length-2],g=a[a.length-1],b=o[o.length-1],y=g%4===0&&b%4===0,S=h<=8?[4,1,1]:[4,4,1],w=[8,8,1],v=[Math.ceil(b/w[0]/S[0]),Math.ceil(h/w[1]/S[1]),Math.ceil(f/w[2]/S[2])],T=y?4:1,k=[...l,h,g/T],E=k.length,O=[...d,g,b/T],z=O.length,$=[f,h,b/T],L=[{type:6,data:h},{type:6,data:b},{type:6,data:g}];en(t,L),L.push(...fe(c,k,O));let q=["rank","rank"],ie=e.length>2;ie&&(L.push(...fe(e[2].dims)),q.push("rank")),L.push(...fe($));let te=V=>{let R=c.length,N=el("batchDims",e[0].dataType,R,1),W=lt(e[0].dataType),Y=U("a",e[0].dataType,E,T),Q=U("b",e[1].dataType,z,T),de=ce("result",e[0].dataType,$.length,T),he=[Y,Q];if(ie){let Pe=i?T:1;he.push(U("bias",e[2].dataType,e[2].dims.length,Pe))}let F=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];tn(t,F);let se=lt(de.type.tensor),oe=Jr(t,de.type.value,se),Z=ap(T,ie,oe,[N,Y,Q,de],i);return`
  ${V.registerUniforms(F).registerInternalVariables(N).declareVariables(...he,de)}
  ${Z}
  ${y?_o(S,w,W,N):bo(S,w,W,N)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${y};${i}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:L}),getShaderSource:te}}}),op,I0,H1=X(()=>{_e(),Sr(),ve(),sn(),sl(),V1(),ll(),op=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let c=L=>{switch(L){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${L} is not supported.`)}},f=L=>{switch(L){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${L} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
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
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",w=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${w} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${w} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${w} % inChannels;
    var resData = ${dt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,T=e?t&&n?`
    let col = colIn * ${a};
    ${v}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${dt(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${v}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${dt(a,d)}(0.0);`,k=e?n&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${dt(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${dt(o,d)}(0.0);`,E=dt(l,d),O=dt(e?a:o,d),z=dt(e?o:a,d),$=Jr(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${T0(i)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},I0=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],g=d?r[1]:r[2],b=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&b%4===0,S=d?b:h*g,w=d?h*g:b,v=[8,8,1],T=n<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/v[0]/T[0]),Math.ceil(w/v[1]/T[1]),Math.ceil(f/v[2]/T[2])];Ae("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=y?d&&c%4!==0?3:4:1,O=v[1]*T[1],z=v[0]*T[0],$=Math.max(v[0]*E,v[1]),L=n%O===0,q=i%z===0,ie=s%$===0,te=y?[E,4,4]:[1,1,1],V=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];en(t,V),V.push(...fe(e[0].dims,e[1].dims));let R=["rank","rank"];a&&(V.push(...fe(e[2].dims)),R.push("rank")),V.push(...fe(r));let N=W=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];tn(t,Y);let Q=y?4:1,de=lt(e[0].dataType),he=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${de}>`:de}) {
        result[flatIndex] = ${y?`vec4<${de}>`:de}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${de}>`:de}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,F=U("x",e[0].dataType,e[0].dims.length,E===3?1:E),se=U("w",e[1].dataType,e[1].dims.length,Q),oe=[F,se],Z=ce("result",e[0].dataType,r.length,Q);if(a){let Pe=U("bias",e[2].dataType,e[2].dims.length,Q);oe.push(Pe),he+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${de}>`:de} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${E0("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${W.registerUniforms(Y).declareVariables(...oe,Z)}
        ${he}
        ${op(d,L,q,ie,a,t,te[0],te[1],te[2],de)}
        ${y?_o(T,v,de,void 0,!d,$):bo(T,v,de,void 0,!d,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${L};${q};${ie};${O};${z};${$}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:V}),getShaderSource:N}}}),lp,xa,On,up,Sa,dp,C0,z0,G1=X(()=>{_e(),Sr(),ye(),ve(),sn(),sl(),lp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},xa=e=>typeof e=="number"?[e,e,e]:e,On=(e,t)=>t<=1?e:e+(e-1)*(t-1),up=(e,t,r,n=1)=>{let i=On(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Sa=(e,t,r,n,i)=>{i==null&&(i=up(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},dp=(e,t,r,n,i,s,a,o,l,d)=>{let c,f,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Sa([t,r,n,1],[o,l,d],1,[i,s,a],e);f=b[0],h=b[1],g=b[2]}else if(Array.isArray(e)){if(!e.every((y,S,w)=>y===w[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Sa([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);f=b[0],h=b[1],g=b[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),h=Math.ceil(r/s),g=Math.ceil(n/a);let b=(f-1)*i+o-t,y=(h-1)*s+l-r,S=(g-1)*a+d-n,w=Math.floor(b/2),v=b-w,T=Math.floor(y/2),k=y-T,E=Math.floor(S/2),O=S-E;c={top:T,bottom:k,left:E,right:O,front:w,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:g}},C0=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,c,f;if(a==="channelsLast")[o,l,d,c,f]=e;else if(a==="channelsFirst")[o,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[h,,g,b,y]=t,[S,w,v]=xa(r),[T,k,E]=xa(n),O=On(g,T),z=On(b,k),$=On(y,E),{padInfo:L,outDepth:q,outHeight:ie,outWidth:te}=dp(i,l,d,c,S,w,v,O,z,$),V=s?h*f:h,R=[0,0,0,0,0];return a==="channelsFirst"?R=[o,V,q,ie,te]:a==="channelsLast"&&(R=[o,q,ie,te,V]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:q,outHeight:ie,outWidth:te,outChannels:V,padInfo:L,strideDepth:S,strideHeight:w,strideWidth:v,filterDepth:g,filterHeight:b,filterWidth:y,effectiveFilterDepth:O,effectiveFilterHeight:z,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:k,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},z0=(e,t,r,n,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((S,w)=>w)},d=[Math.ceil(lp(l.x.map(S=>r[S]))/o[0]),1,1];Ae("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=D.size(r),h=[{type:12,data:f},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];en(t,h),h.push(...fe(e[0].dims,e[1].dims));let g=["rank","rank"],b=e.length===3;b&&(h.push(...fe(e[2].dims)),g.push("rank")),h.push(...fe(r));let y=S=>{let w=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];tn(t,w);let v=1,T=lt(e[0].dataType),k=U("x",e[0].dataType,e[0].dims.length,c),E=U("W",e[1].dataType,e[1].dims.length,v),O=[k,E],z=ce("result",e[0].dataType,r.length,v),$="";if(b){let ie=U("bias",e[2].dataType,e[2].dims.length,v);O.push(ie),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?pe("coords",4,5):pe("coords",1,5)}];
        }`}let L=dt(c,T),q=Jr(t,L,T);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(w).declareVariables(...O,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,k.rank)};
              let d2 = ${a?pe("coords",k.rank-1,k.rank):pe("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${a?pe("coords",1,k.rank):pe("coords",2,k.rank)},
              ${a?pe("coords",2,k.rank):pe("coords",3,k.rank)},
              ${a?pe("coords",3,k.rank):pe("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?pe("uniforms.x_shape",1,k.rank):pe("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${a?pe("uniforms.x_shape",2,k.rank):pe("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${a?pe("uniforms.x_shape",3,k.rank):pe("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${a?pe("uniforms.x_shape",4,k.rank):pe("uniforms.x_shape",1,k.rank)};
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
              ${b?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${b}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:y}}}),A0,O0,j1=X(()=>{_e(),ye(),ve(),sn(),A0=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?Ye(d):1,h=D.size(r)/f,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];en(t,g),g.push(...fe(a,[o[0],o[1],o[2],o[3]/f]));let b=i?["rank","rank","rank"]:["rank","rank"];g.push(...fe([r[0],r[1],r[2],r[3]/f]));let y=S=>{let w=ce("output",e[0].dataType,r.length,f),v=lt(w.type.tensor),T=Jr(t,w.type.value,v),k=U("x",e[0].dataType,a.length),E=U("w",e[1].dataType,o.length,f),O=[k,E];i&&O.push(U("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];tn(t,z);let $=l?`
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
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...O,w)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${w.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${w.type.value} = ${w.type.value}(0);
    ${$}
    ${s}
    ${T}
    ${w.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},O0=(e,t,r,n)=>{let i=e.length>2,s=Ye(r[3]),a=Ye(r[2]),o=D.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];en(t,f),f.push(...fe(l,d,c));let h=(a-1)*t.strides[1]+d[1],g=b=>{let y=ce("output",e[0].dataType,c.length,s),S=lt(y.type.tensor),w=Jr(t,y.type.value,S),v=U("x",e[0].dataType,l.length,s),T=U("w",e[1].dataType,d.length,s),k=[v,T];i&&k.push(U("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",O=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return tn(t,O),`
  ${b.registerUniforms(O).declareVariables(...k,y)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${h}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
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
      ${E}
      ${w}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:g}}}),cp,Di,pp,Pi,yo,ka,fp,hp,vo,K1=X(()=>{ye(),H1(),G1(),ll(),j1(),sn(),ol(),Br(),cp=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],c=t.slice(2).map((h,g)=>h+(h-1)*(r[g]-1)),f=o.map((h,g)=>h+n[g]+n[g+l]).map((h,g)=>Math.floor((h-c[g]+i[g])/i[g]));return f.splice(0,0,a),f.splice(s?3:1,0,d),f},Di=[2,3,1,0],pp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pi=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();is.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},yo=e=>{let t=il(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ka=(e,t,r,n)=>{let i=r.format==="NHWC",s=cp(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let O=[t[0]];if(i){let z=e.kernelCustomData.wT??e.compute(zt(t[1],Di),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),O.push(z)}else O.push(t[1]);t.length===3&&O.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(O0(O,r,s,n),{inputs:O}):e.compute(A0(O,r,s,n),{inputs:O});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],h=s[i?1:2],g=s[i?2:3],b=s[i?3:1],y=i&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let O=s[0],z,$,L,q=[];if(i){let V=e.kernelCustomData.wT??e.compute(zt(t[1],Di),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let R=o*l*d;z=t[0].reshape([1,O,R]),$=V.reshape([1,R,b]),L=[1,O,b]}else z=t[0].reshape([O,o*l,d]),$=V.reshape([1,d,b]),L=[O,h*g,b];q.push(z),q.push($)}else z=t[0].reshape([O,d,o*l]),$=t[1].reshape([1,b,d]),L=[O,b,h*g],q.push($),q.push(z);a&&q.push(t[2]);let ie=L[2],te=q[0].dims[q[0].dims.length-1];ie<8&&te<8?e.compute(al(q,r,s,L,i,n),{inputs:q}):e.compute(as(q,r,s,L,i,n),{inputs:q});return}let S=!0,w=e.kernelCustomData.wT??e.compute(zt(t[1],Di),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=w);let v=[t[0],w];a&&v.push(t[2]);let T=i?h*g:b,k=i?b:h*g,E=c*f*d;e.compute(I0(v,r,s,T,k,E,a,S,n),{inputs:v})},fp=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Pi({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);ka(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},hp=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Pi(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=C0(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(z0(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},vo=(e,t)=>{if(pp(e.inputs,t),e.inputs[0].dims.length===3)fp(e,t);else if(e.inputs[0].dims.length===5)hp(e,e.inputs,t);else{let r=Pi(t,e.inputs);ka(e,e.inputs,r)}}}),R0,X1=X(()=>{_e(),Sr(),ye(),ve(),R0=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],c=s?Ye(l):1,f=s&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-h,b=s?Ye(d):1,y=s?d===1?c:b:1,S=D.size(i)/b,w=[Math.ceil(S/64),1,1];Ae("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let v=["rank","rank"],T=[t.strides[0],t.strides[1]],k=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],O=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],z=[O[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),O[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:12,data:E},{type:12,data:O},{type:6,data:z},{type:12,data:h},{type:12,data:l},{type:12,data:d},...fe(e[0].dims,e[1].dims)];n&&($.push(...fe(e[2].dims)),v.push("rank")),$.push(...fe(i));let L=q=>{let ie=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:O.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],te=lt(e[0].dataType),V=s?1:2,R=s?2:3,N=s?3:1,W=U("W",e[1].dataType,e[1].dims.length,y),Y=U("Dy",e[0].dataType,e[0].dims.length,c),Q=[Y,W];n&&Q.push(U("bias",e[2].dataType,[i[N]].length,b));let de=ce("result",e[0].dataType,i.length,b),he=()=>{let oe="";if(f)c===4?oe+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${W.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?oe+=`
          dotProd = dotProd + dot(vec4<${te}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${te}>(${W.getByOffset("w_offset")}, ${W.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(oe+=`
          dotProd = dotProd + dot(vec4<${te}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${te}>(${W.getByOffset("w_offset")}, ${W.getByOffset("w_offset + 1u")}, ${W.getByOffset("w_offset + 2u")}, ${W.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(oe+=`
                  let xValue = ${s?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,c===1)oe+=`
          let w_offset = ${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${W.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Z=0;Z<c;Z++)oe+=`
            let wValue${Z} = ${W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Z}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${Z}] * wValue${Z};`;return oe},F=()=>{if(g===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let oe="";if(c===1){oe+="dotProd = dotProd";for(let Z=0;Z<g;Z++)oe+=`
            + ${Y.getByOffset(`x_offset + ${Z}`)} * ${W.getByOffset(`w_offset + ${Z}`)}`;oe+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);oe+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${W.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return oe},se=`
            let outputIndices = ${de.offsetToIndices(`global_idx * ${b}`)};
            let batch = ${de.indicesGet("outputIndices",0)};
            let d1 = ${de.indicesGet("outputIndices",N)};
            let r = ${de.indicesGet("outputIndices",V)};
            let c = ${de.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${de.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${te}(dyRCorner) + ${te}(wR)) / ${te}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${te}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${te}(dyCCorner) + ${te}(wC)) / ${te}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${te}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${W.indicesToOffset(`${W.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${he()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${F()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${b}]`:""};
            ${de.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(ie).declareVariables(...Q,de)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${se}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${b}${f}${g}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:L}}}),mp,gp,_p,Ta,M0,bp,Ea,yp,B0,Z1=X(()=>{X1(),sn(),Br(),mp=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,gp=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},_p=(e,t,r,n,i,s,a,o,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],g=t[o?3:1]*i;for(let b=0,y=e.length-c-(o?1:0);b<c;++b,++y){let S=e[y],w=f?S*a[b]:d[b],v=mp(S,a[b],s[b],t[y],r[b],w);gp(v,n,s,b,b+c),f&&d.push(a[b]*(S-1)+l[b]+(t[y]-1)*r[b]+1-s[b]-s[b+c])}d.splice(0,0,h),d.splice(o?3:1,0,g)},Ta=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}_p(o,r,l,e.autoPad,e.group,i,d,n,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),c},M0=e=>{let t=il(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},bp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ea=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(zt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(R0(s,r,n),{inputs:s})},yp=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Ta({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);Ea(e,n,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},B0=(e,t)=>{if(bp(e.inputs,t),e.inputs[0].dims.length===3)yp(e,t);else{let r=Ta(t,e.inputs);Ea(e,e.inputs,r)}}}),vp,N0,D0,Q1=X(()=>{_e(),ye(),rt(),ve(),vp=(e,t,r,n)=>{let i=D.size(t),s=t.length,a=U("input",e,s),o=ce("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=D.normalizeAxis(l,s),c=f=>{let h=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,g=pe("uniforms.input_shape","uniforms.axis",s),b=n.reverse?h+(n.exclusive?" + 1":""):"0",y=n.reverse?g:h+(n.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...fe(t,t)]}),getShaderSource:c}},N0=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(vp(n,r,i,t),{inputs:[0]})},D0=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ne({exclusive:t,reverse:r})}}),wp,$p,xp,P0,U0,Y1=X(()=>{_e(),ye(),rt(),ve(),wp=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$p=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},xp=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=c?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(a),h=f.dims.length,g=e.dataType,b=U("a",g,h),y=ce("output",g,h),S=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(b,y)}

  ${$p(o,h,b,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:w=>{let v=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],T=D.size(v),k=f.dims,E=D.sortBasedOnPerm(k,o);return{outputs:[{dims:v,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...fe(k,E)]}},getShaderSource:S}},P0=(e,t)=>{wp(e.inputs),e.compute(xp(e.inputs[0],t))},U0=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ui,Rn,Ia,Sp,kp,Tp,Ep,Ca,Ip,L0,F0,J1=X(()=>{_e(),ye(),rt(),ve(),Ui="[a-zA-Z]|\\.\\.\\.",Rn="("+Ui+")+",Ia="^"+Rn+"$",Sp="("+Rn+",)*"+Rn,kp="^"+Sp+"$",Tp=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Ep=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(kp)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let a=e[s].dims.slice();if(!i.match(RegExp(Ia)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,a,s);this.lhs.push(o)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Rn)))throw new Error("Invalid RHS");n.match(RegExp(Ui,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(Ia))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ui,"g")),d=new Tp(n);return l?.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<a.length;g++){let b=String.fromCharCode(48+g);d.addSymbol(b,f+g),this.addSymbol(b,r[o++],n)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],n)}),d}},Ca=e=>e+"_max",Ip=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,c)=>U(`input${c}`,t,d)),s=D.size(n),a=ce("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",b=[],y=[],S=[],w=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{if(r.rhs.symbolToIndices.has(E)){let O=r.rhs.symbolToIndices.get(E)?.[0];O!==void 0&&r.lhs.forEach((z,$)=>{if(k.inputIndices.includes($)){let L=z.symbolToIndices.get(E);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(q=>{c.push(`${i[$].indicesSet(`input${$}Indices`,q,a.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,z)=>{if(k.inputIndices.includes(z)){let $=O.symbolToIndices.get(E);if($===void 0)throw new Error("Invalid symbol error");$.forEach(L=>{b.push(`${i[z].indicesSet(`input${z}Indices`,L,`${E}`)}`)}),w.push(`prod *= ${i[z].getByIndices(`input${z}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ca(E)}; ${E}++) {`),S.push("}")});let T=v?[...c,`let sum = ${i.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...y,...b,f,...w,g,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${Ca(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((k,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:s});let c=e.map((f,h)=>[...fe(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...fe(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},L0=(e,t)=>{let r=new Ep(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Ip(i,e.inputs[0].dataType,r,n))},F0=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),Cp,za,zp,Ap,q0,e2=X(()=>{_e(),ye(),ve(),Cp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},za=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},zp=(e,t)=>e.length>t.length?za(e,t):za(t,e),Ap=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=zp(t,r),i=e[0].dataType,s=i===9||D.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(D.size(n)/o),d=f=>{let h=U("input",i,t.length,a),g=ce("output",i,n.length,o),b;if(i===9){let y=(S,w,v="")=>`
          let outputIndices${w} = ${g.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${h.broadcastedIndicesToOffset(`outputIndices${w}`,g)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${S}[${w}] = ${v}(${h.getByOffset(`index${w}`)}[component${w}]);
        `;b=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${a}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},c=[{type:12,data:l},...fe(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},q0=e=>{Cp(e.inputs),e.compute(Ap(e.inputs),{inputs:[0]})}}),Op,W0,t2=X(()=>{_e(),ye(),ve(),nl(),Op=e=>{let t=e[0].dataType,r=D.size(e[0].dims),n=D.size(e[1].dims),i=n%4===0,s=a=>{let o=U("x",t,[1],4),l=U("bias",t,[1],4),d=ce("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,l,d)}

    ${mo(ht(t))}

    ${a.mainStart(wn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",go("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/wn/4)}})}},W0=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?u0(e):e.compute(Op(e.inputs))}}),Rp,Mp,V0,H0,r2=X(()=>{_e(),ye(),rt(),ve(),Rp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Mp=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=D.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(D.size(a)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...fe(e[0].dims,e[1].dims,a)],f=h=>{let g=U("data",e[0].dataType,e[0].dims.length,l),b=U("inputIndices",e[1].dataType,e[1].dims.length),y=ce("output",e[0].dataType,a.length,l),S=v=>{let T=n.length,k=`var indicesIndices${v}  = ${b.type.indices}(0);`;for(let E=0;E<T;E++)k+=`${T>1?`indicesIndices${v}[${E}]`:`indicesIndices${v}`} = ${a.length>1?`outputIndices${v}[uniforms.axis + ${E}]`:`outputIndices${v}`};`;k+=`
          var idx${v} = ${b.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${g.type.indices};
        `;for(let E=0,O=0;E<i;E++)E===s?(k+=`${i>1?`dataIndices${v}[${E}]`:`dataIndices${v}`} = u32(idx${v});`,O+=T):(k+=`${i>1?`dataIndices${v}[${E}]`:`dataIndices${v}`} = ${a.length>1?`outputIndices${v}[${O}]`:`outputIndices${v}`};`,O++);return k},w;if(e[0].dataType===9){let v=(T,k,E="")=>`
          let outputIndices${k} = ${y.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${E}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else w=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,b,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${w}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},V0=e=>Ne({axis:e.axis}),H0=(e,t)=>{let r=e.inputs;Rp(r),e.compute(Mp(e.inputs,t))}}),Bp,G0,j0,n2=X(()=>{_e(),ye(),ve(),Bp=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],c=[s];d.push(...fe(t.dims,c));let f=h=>{let g=U("indices_data",t.dataType,t.dims.length),b=ce("input_slice_offsets_data",12,1,1),y=[g,b],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},G0=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=D.sizeToDimension(s,s.length-1),l=D.sizeFromDimension(n,t.batchDims+a),d=D.sizeToDimension(n,t.batchDims),c=D.sizeFromDimension(n,t.batchDims),f=o/d,h=new Array(a),g=l;for(let k=0;k<a;++k)h[a-1-k]=g,g*=n[t.batchDims+a-1-k];let b=Bp(e,r[1],h,t.batchDims,n,o,f,c,a),y=t.batchDims+a;if(y>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(n.slice(y)),w=D.size(S),v=[{type:12,data:w},{type:12,data:l},...fe(r[0].dims,b.dims,S)],T=k=>{let E=U("data",r[0].dataType,r[0].dims.length),O=U("slice_offsets",12,b.dims.length),z=ce("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,O,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:v}),getShaderSource:T},{inputs:[r[0],b]})},j0=e=>({batchDims:e.batch_dims,cacheKey:""})}),Np,Dp,K0,X0,i2=X(()=>{_e(),ye(),rt(),ve(),Np=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Dp=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=D.normalizeAxis(t.gatherAxis,i),a=D.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=D.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...fe(...e.map((g,b)=>g.dims),o)],h=g=>{let b=U("data",e[0].dataType,e[0].dims.length),y=U("inputIndices",e[1].dataType,e[1].dims.length),S=U("scales",e[2].dataType,e[2].dims.length),w=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=ce("output",d,o.length),T=[b,y,S];w&&T.push(w);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...T,v)}
        ${g.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${w?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${w.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${w.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ht(d)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,b)=>b!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,b)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},K0=(e,t)=>{let r=e.inputs;Np(r,t),e.compute(Dp(e.inputs,t))},X0=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Pp,Up,Z0,Q0,s2=X(()=>{_e(),ye(),rt(),ve(),Pp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Up=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=D.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),c=D.size(d),f=U("input",n,i),h=U("indicesInput",a,s.length),g=ce("output",n,d.length),b=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return b.push(...fe(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:b}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Z0=e=>Ne({axis:e.axis}),Q0=(e,t)=>{let r=e.inputs;Pp(r),e.compute(Up(e.inputs,t))}}),Lp,Fp,Y0,J0,a2=X(()=>{_e(),ye(),ve(),Lp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Fp=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=Zm.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(i/l),f=!0,h=D.size(o),g=[{type:12,data:f?d:h},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(g.push(...fe(e[2].dims)),b.push("rank")),g.push(...fe(o));let y=w=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=U("a",e[0].dataType,e[0].dims),E=U("b",e[1].dataType,e[1].dims),O=k.type.value,z=null,$=[k,E];e.length===3&&(z=U("c",e[2].dataType,e[2].dims.length),$.push(z));let L=ce("output",e[0].dataType,o.length);$.push(L);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${w.registerUniforms(q).declareVariables(...$)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${O}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",L)}; value += ${O}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=w=>{let v=U("a",e[0].dataType,e[0].dims),T=U("b",e[1].dataType,e[1].dims),k=null,E=[v,T];e.length===3&&(k=U("c",e[2].dataType,e[2].dims.length),E.push(k));let O=ce("output",e[0].dataType,o.length);E.push(O);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",L="";t.transA&&t.transB?(L=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(L=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(L=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(L=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${w.registerUniforms(z).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${w.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${O.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${L}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${O.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},Y0=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},J0=(e,t)=>{Lp(e.inputs),e.compute(Fp(e.inputs,t))}}),er,fr,Fr,qr,qp,Wp,Vp,Hp,Gp,jp,Kp,Xp,e_,t_,o2=X(()=>{_e(),ye(),rt(),ve(),[er,fr,Fr,qr]=[0,1,2,3],qp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Wp=`
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
     indices[${er}] = batch;
     indices[${fr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Fr}] = u32(r);
            indices[${qr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Fr}] = u32(clamp(r, 0, H - 1));
          indices[${qr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Fr}] = gs_reflect(r, border[1], border[3]);
          indices[${qr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Kp=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${er}], indices[${fr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${er}], indices[${fr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${er}], indices[${fr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${er}], indices[${fr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${er}], indices[${fr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${er}], indices[${fr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Xp=(e,t)=>{let r=U("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=U("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[er,fr,Fr,qr]=[0,3,1,2]);let a=ce("output",e[0].dataType,s.length),o=r.type.value,l=D.size(s),d=[{type:12,data:l},...fe(e[0].dims,n,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${Wp}
  ${Vp(o)}
  ${Hp(t)}
  ${Gp(t)}
  ${jp(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Fr}]);
      let W_in = i32(uniforms.x_shape[${qr}]);

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
      var grid_indices = vec3<u32>(indices[${er}], indices[${Fr}], indices[${qr}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Kp(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=D.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},e_=(e,t)=>{qp(e.inputs),e.compute(Xp(e.inputs,t))},t_=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),yt,Zp,r_,Aa,Qp,Wn,n_,i_=X(()=>{_e(),ye(),rt(),Jo(),rl(),ve(),Br(),yt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Zp=(e,t)=>{let r=e[0],n=yt(e,1),i=yt(e,2),s=yt(e,3),a=yt(e,4),o=yt(e,5),l=yt(e,6),d=yt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,b=0,y=0,S=Math.floor(h/t.numHeads);if(l&&d&&D.size(l.dims)&&D.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=l.dims[2],y=l.dims[2]}else if(l&&D.size(l.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w;if(n&&D.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');w=2,g=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');w=5,g=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=0,g=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}if(s&&D.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=b+g,T=0;if(a&&D.size(a.dims)>0){T=8;let z=a.dims;throw z.length===1?z[0]===c?T=1:z[0]===3*c+2&&(T=3):z.length===2&&z[0]===c&&z[1]===v&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=h;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],k=!0}}let O=!1;if(a&&D.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:b,kvSequenceLength:g,totalSequenceLength:v,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:O,passPastInKv:k,qkvFormat:w}},r_=e=>Ne({...e}),Aa=Ne({perm:[0,2,1,3]}),Qp=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=D.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=f=>{let h=ce("qkv_with_bias",t.dataType,o),g=U("qkv",t.dataType,o),b=U("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(g,b,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Wn=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&D.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Qp(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(zt(l,Aa.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(zt(l,Aa.perm),{inputs:[l],outputs:[-1]})[0]},n_=(e,t)=>{let r=Zp(e.inputs,t),n=e.inputs[0],i=yt(e.inputs,1),s=yt(e.inputs,2),a=yt(e.inputs,3),o=yt(e.inputs,4),l=yt(e.inputs,5),d=yt(e.inputs,6),c=yt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,h=Wn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(f)return li(e,h,i,s,o,void 0,d,c,l,r);if(!i||!s)throw new Error("key and value must be provided");let g=Wn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),b=Wn(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);li(e,h,g,b,o,void 0,d,c,l,r)}}),Yp,Jp,ef,tf,wo,s_,a_,o_=X(()=>{_e(),ye(),rt(),ve(),Yp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jp=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),Ne({numOutputs:n,axis:t.axis,splitSizes:r})},ef=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,tf=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},wo=(e,t)=>{let r=e[0].dims,n=D.size(r),i=e[0].dataType,s=D.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=U("input",i,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:n}];for(let b=0;b<t.numOutputs;b++){f+=t.splitSizes[b],l[b]=f;let y=r.slice();y[s]=t.splitSizes[b],c.push(y),a[b]=ce(`output${b}`,i,y.length),d.push({dims:c[b],dataType:e[0].dataType})}h.push({type:12,data:l},...fe(r,...c));let g=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${ef(l.length)}
  ${tf(a)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},s_=(e,t)=>{Yp(e.inputs);let r=e.inputs.length===1?t:Jp(e.inputs,t);e.compute(wo(e.inputs,r),{inputs:[0]})},a_=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return Ne({axis:t,numOutputs:n,splitSizes:r})}}),rf,os,l_,u_=X(()=>{_e(),ye(),rt(),ve(),rf=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(n.dims,[])&&!D.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!D.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=i.dims[0],f=D.sizeFromDimension(r.dims,1)/d,h=o===0?i.dims[1]*2:f/a;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},os=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],f=i===0?c*2:d/n,h=new Array(a,l,d/f,f-c),g=D.computeStrides(h),b=[{type:1,data:s},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=S=>{let w=U("input",e[0].dataType,e[0].dims.length),v=U("position_ids",e[1].dataType,e[1].dims.length),T=U("cos_cache",e[2].dataType,e[2].dims.length),k=U("sin_cache",e[3].dataType,e[3].dims.length),E=ce("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${S.declareVariables(w,v,T,k,E)}

        ${S.mainStart(wn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",ce("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${w.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${w.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${w.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${w.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",w.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(h)/wn)},programUniforms:b})}},l_=(e,t)=>{rf(e.inputs,t),e.compute(os(e.inputs,t))}}),nf,sf,Oa,af,d_,l2=X(()=>{rt(),_e(),rl(),i_(),o_(),Br(),u_(),ve(),nf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,g=!n||n.dims.length===0,b=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=b*t.numHeads);let y=s&&s.dims.length!==0,S=a&&a.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=s.dims[2]}else if(y||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}let v=0,T=!1,k=t.kvNumHeads?b*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let O=E.dims.reduce((z,$)=>z*$,1);if(O!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${O}.`);for(let z=0;z<E.dims.length;z++)if(E.dims[z]!==1&&E.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${E.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:w}},sf=Ne({perm:[0,2,1,3]}),Oa=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(zt(n,sf.perm),{inputs:[n],outputs:[-1]})[0]),n},af=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let f=U("seq_lens",r.dataType,r.dims),h=U("total_seq_lens",n.dataType,n.dims),g=ce("pos_ids",i,a),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(b).declareVariables(f,h,g)}
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
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},d_=(e,t)=>{let r=nf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Ne({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,g,b]=!i&&!s?e.compute(wo([n],f),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],y,S;if(t.doRotary){let k=e.compute(af(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],E=e.inputs[7],O=e.inputs[8],z=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),$=[h,k,E,O],L=[-1];y=e.compute(os($,z),{inputs:$,outputs:L})[0],$.splice(0,1,g);let q=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(os($,q),{inputs:$,outputs:L})[0]}let w=Wn(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:h,void 0,0),v=Oa(e,t.doRotary?S:g,r),T=Oa(e,b,r);li(e,w,v,T,void 0,void 0,a,o,void 0,r,l,d)}}),Ra,of,lf,c_,u2=X(()=>{_e(),ye(),Br(),ve(),Ra=(e,t,r,n,i,s,a,o)=>{let l=Ye(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*a,h=64;f===1&&(h=256);let g=[i,a,s/l],b=[i,a,2],y=["rank","type","type"],S=[];S.push(...fe(g,b));let w=v=>{let T=U("x",t.dataType,3,l),k=U("scale",r.dataType,r.dims),E=U("bias",n.dataType,n.dims),O=ce("output",1,3,2),z=[T,k,E,O];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${v.declareVariables(...z)}
  ${v.mainStart(h)}
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
      let sum_final = ${Mr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Mr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:w},{inputs:[t,r,n],outputs:[-1]})[0]},of=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=D.sizeFromDimension(n,s),d=Ye(l),c=D.size(i)/d,f=Ra(e,t[0],t[1],t[2],a,l,o,r.epsilon),h=[a,o,l/d],g=[a,o],b=["type","none"],y=S=>{let w=U("x",t[0].dataType,h.length,d),v=U("scale_shift",1,g.length,2),T=ce("output",t[0].dataType,h.length,d),k=[w,v,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${w.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...fe(h,g,h)]}),getShaderSource:y},{inputs:[t[0],f]})},lf=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=D.sizeFromDimension(n,1)/a,l=Ye(a),d=D.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],f=["type","type"],h=!1,g=[0,n.length-1];for(let w=0;w<n.length-2;w++)h=h||n[w+1]!==1,g.push(w+1);h=h&&n[n.length-1]!==1;let b=h?e.compute(zt(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(w,v)=>n[g[v]])),y=Ra(e,b,t[1],t[2],s,o,a,r.epsilon),S=w=>{let v=lt(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,k=z=>{let $=z===0?"x":"y",L=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${v}(${L}(scale.${$}))`;case 2:return`vec2<${v}>(${L}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${v}>(${L}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=U("input",t[0].dataType,t[0].dims,l),O=ce("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${O.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${w.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],y]})},c_=(e,t)=>{t.format==="NHWC"?lf(e,e.inputs,t):of(e,e.inputs,t)}}),uf,df,p_,d2=X(()=>{_e(),ye(),ve(),uf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},df=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=D.normalizeAxis(t.axis,i.length),d=D.sizeToDimension(i,l),c=D.sizeFromDimension(i,l),f=D.size(s.dims),h=a?D.size(a.dims):0;if(f!==c||a&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let g=[];for(let E=0;E<i.length;++E)E<l?g.push(i[E]):g.push(1);let b=Ye(c),y=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/b)},{type:1,data:t.epsilon}];a&&y.push("type");let w=r>1,v=r>2,T=E=>{let O=lt(e[0].dataType),z=[U("x",e[0].dataType,e[0].dims,b),U("scale",s.dataType,s.dims,b)];a&&z.push(U("bias",a.dataType,a.dims,b)),z.push(ce("output",e[0].dataType,o,b)),w&&z.push(ce("mean_data_output",1,g)),v&&z.push(ce("inv_std_output",1,g));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...z)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${po("f32",b)};
    var mean_square_vector = ${po("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${cn(O,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Mr("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Mr("mean_square_vector",b)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${cn(O,b,"x[j + offset]")};
      let f32scale = ${cn(O,b,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${cn(O,b,"bias[j]")}`:""}
      );
    }

    ${w?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return w&&k.push({dims:g,dataType:1}),v&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${n}`,inputDependencies:y},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},p_=(e,t)=>{uf(e.inputs),e.compute(df(e.inputs,t,e.outputCount))}}),cf,f_,c2=X(()=>{ye(),ol(),ll(),cf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},f_=e=>{cf(e.inputs);let t=vn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(al(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=D.size(e.inputs[0].dims.slice(0,-2)),a=D.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],c=[o,l];e.compute(as(c,{activation:""},t,d),{inputs:c})}else e.compute(as(e.inputs,{activation:""},t))}}}),pf,ff,hf,h_,m_,p2=X(()=>{_e(),ye(),rt(),ve(),pf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!D.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(l)!==d)throw new Error("zeroPoints input size error.")}},ff=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=Ye(t.k),h=Ye(d),g=Ye(a),b=o.concat([i,a]),y=i>1&&a/g%2===0?2:1,S=D.size(b)/g/y,w=64,v=[],T=[l,i,s/f],k=D.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),v.push(...fe(T)),v.push(...fe(k)),v.push(...fe(e[2].dims)),e.length===4&&v.push(...fe(D.convertShape(e[3].dims)));let E=[l,i,a/g];v.push(...fe(E));let O=z=>{let $=T.length,L=U("a",e[0].dataType,$,f),q=U("b",12,k.length,h),ie=U("scales",e[2].dataType,e[2].dims.length),te=[L,q,ie],V=e.length===4?U("zero_points",12,e[3].dims.length):void 0;V&&te.push(V);let R=E.length,N=ce("output",e[0].dataType,R,g),W=lt(e[0].dataType),Y=(()=>{switch(f){case 1:return`array<${W}, 8>`;case 2:return`mat4x2<${W}>`;case 4:return`mat2x4<${W}>`;default:throw new Error(`${f}-component is not supported.`)}})(),Q=Math.floor(32/t.bits),de=Math.floor(Q/8),he=()=>{let oe="";for(let Z=0;Z<de;Z++){let Pe=Z*t.bits*4,Me=Pe+t.bits;oe+=`
          // reuse a data (pass ${Z})
            var input_offset${Z>0?Z:""} = ${Z===0?L.indicesToOffset(`${L.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Z>0?Z:""}: ${Y};
            for (var j${Z>0?Z:""}: u32 = 0; j${Z>0?Z:""} < ${8/f}; j${Z>0?Z:""}++) {
              a_data${Z>0?Z:""}[j${Z>0?Z:""}] = ${L.getByOffset(`input_offset${Z>0?Z:""}`)};
              input_offset${Z>0?Z:""}++;
            }
          `;for(let Se=0;Se<g*y;Se++)oe+=`
            b_value = ${h===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${Z*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Pe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Me}u) & b_mask);`}
            b_quantized_values = ${Y}(${Array.from({length:4},(qe,Ee)=>`${W}(b_value_lower[${Ee}]), ${W}(b_value_upper[${Ee}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Y}(${Array.from({length:8},(qe,Ee)=>`(b_quantized_values[${Ee}] - ${V?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${V?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(Se/g)}]${g>1?`[${Se%g}]`:""} += ${Array.from({length:8/f},(qe,Ee)=>`${f===1?`a_data${Z>0?Z:""}[${Ee}] * b_dequantized_values[${Ee}]`:`dot(a_data${Z>0?Z:""}[${Ee}], b_dequantized_values[${Ee}])`}`).join(" + ")};
          `}return oe},F=()=>{let oe=`
            var col_index = col * ${g};
            ${V?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${W}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let Z=0;Z<g*y;Z++)oe+=`
            let scale${Z} = ${ie.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${W}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return oe},se=()=>{let oe=`col_index = col * ${g};`;for(let Z=0;Z<g*y;Z++)oe+=`
            let b${Z}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return oe+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,oe};return`
        var<workgroup> workgroup_shared: array<${N.type.value}, ${y*w}>;
        ${z.declareVariables(...te,N)}
        ${z.mainStart([w,1,1])}
          let output_indices = ${N.offsetToIndices(`(global_idx / ${w}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${w}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${se()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${he()}
                word_offset += ${Q/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${w}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${N.setByIndices(`${N.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${g};${y};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x:S},programUniforms:v}),getShaderSource:O}},hf=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=Ye(t.k),h=Ye(d),g=o.concat([i,a]),b=128,y=a%8===0?8:a%4===0?4:1,S=b/y,w=Math.floor(32/t.bits),v=S*h*w,T=v/f,k=v/t.blockSize,E=D.size(g)/y,O=[],z=[l,i,s/f],$=D.convertShape(e[1].dims).slice();$.splice(-1,1,d/h),O.push(...fe(z)),O.push(...fe($)),O.push(...fe(e[2].dims)),e.length===4&&O.push(...fe(D.convertShape(e[3].dims)));let L=[l,i,a];O.push(...fe(L));let q=ie=>{let te=z.length,V=U("a",e[0].dataType,te,f),R=U("b",12,$.length,h),N=U("scales",e[2].dataType,e[2].dims.length),W=[V,R,N],Y=e.length===4?U("zero_points",12,e[3].dims.length):void 0;Y&&W.push(Y);let Q=L.length,de=ce("output",e[0].dataType,Q),he=lt(e[0].dataType),F=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${he}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${he}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${he}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${he}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${de.type.value}, ${S}>, ${y}>;
        ${ie.declareVariables(...W,de)}
        ${ie.mainStart([S,y,1])}
          let output_indices = ${de.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${Y?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${he}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${he}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${N.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let se=Math.floor(w/8),oe="";for(let Z=0;Z<se;Z++){let Pe=Z*t.bits*4,Me=Pe+t.bits;oe+=`
              ${F()}
              {${t.bits===2?`
                let half_word = b_value >> ${Z*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Pe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Me}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${he}>(${Array.from({length:4},(Se,qe)=>`${he}(b_value_lower[${qe}]), ${he}(b_value_upper[${qe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${he}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,qe)=>`${`dot(a_data${qe}, b_dequantized_values[${qe}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return oe})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${de.setByIndices(`${de.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${S};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:E},programUniforms:O}),getShaderSource:q}},h_=(e,t)=>{pf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(hf(e.inputs,t)):e.compute(ff(e.inputs,t))},m_=e=>Ne(e)}),mf,gf,_f,bf,yf,vf,wf,$f,g_,f2=X(()=>{_e(),ye(),ve(),mf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},gf=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${pe("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},_f=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${pe("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${pe("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},bf=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
                  k = i32(${pe("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},yf=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${pe("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
                  k -= i32(${pe("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},vf=(e,t,r)=>{switch(r.mode){case 0:return gf(e,t,r.pads.length);case 1:return _f(e,t,r.pads.length);case 2:return bf(e,t,r.pads.length);case 3:return yf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},wf=(e,t)=>{let r=D.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=D.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...fe(e[0].dims,r));let o=["rank"],l=d=>{let c=ce("output",e[0].dataType,r.length),f=U("x",e[0].dataType,n.length),h=f.type.value,g=vf(c,n.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:a?h:"f32"}),`
            ${d.registerUniforms(b).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:s}),getShaderSource:l}},$f=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},g_=(e,t)=>{mf(e.inputs);let r=$f(e.inputs,t);e.compute(wf(e.inputs,r),{inputs:[0]})}}),Mn,Ma,Ba,Na,Da,xf,Sf,Pa,Ua,__,b_,La,y_,v_,Fa,w_,$_,x_,S_,h2=X(()=>{Bt(),_e(),ye(),ve(),Mn=e=>{if(Ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ma=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();is.adjustPoolAttributes(r,i,a,o,l,d);let c=is.computePoolOutputShape(r,i,o,l,a,d,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,n?h:c]},Ba=(e,t)=>{let r=t.format==="NHWC",n=D.size(e),i=D.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];h=!!(y+S),s.push({type:12,data:g},{type:12,data:b},{type:12,data:y},{type:12,data:S}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,a,!!l,!1,!1]}},Na=(e,t,r,n,i,s,a,o,l,d,c,f)=>{let h=i.format==="NHWC",g=t.type.value,b=ce("output",t.type.tensor,n);if(i.kernelShape.length<=2){let y="",S="",w="",v=r-(h?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let T=r-(h?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,w=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${g}(${o});
              var pad = 0;
              ${S}
              ${y}
              ${w}
              ${a}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,S=i.pads.length,w="";return d?w=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:w=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${pe("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${pe("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${pe("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${pe("uniforms.pads","j - 2u",S)};
                  ${w}
              }
              ${a}

              output[global_idx] = value;
            }`}},Da=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,xf=e=>`${Da(e)};${e.countIncludePad}`,Sf=e=>`${Da(e)};${e.storageOrder};${e.dilations}`,Pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ua=(e,t,r,n)=>{let[i,s]=Ma(t,n,r),a=U("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,g,b]=Ba(s,i);c.push(...fe(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${g};${b}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:S=>Na(S,a,t.dims.length,s.length,i,l,d,0,f,h,g,b)}},__=e=>{let t=e.count_include_pad!==0,r=Pa(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:xf(n)}},b_=(e,t)=>{Mn(e.inputs),e.compute(Ua("AveragePool",e.inputs[0],!1,t))},La={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},y_=e=>{let t=e.format;return{format:t,...La,cacheKey:t}},v_=(e,t)=>{Mn(e.inputs),e.compute(Ua("GlobalAveragePool",e.inputs[0],!0,t))},Fa=(e,t,r,n)=>{let[i,s]=Ma(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=U("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,g,b]=Ba(s,i);return c.push(...fe(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${g};${b}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:y=>Na(y,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,f,h,g,b)}},w_=(e,t)=>{Mn(e.inputs),e.compute(Fa("MaxPool",e.inputs[0],!1,t))},$_=e=>{let t=e.storage_order,r=e.dilations,n=Pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:Sf(i)}},x_=e=>{let t=e.format;return{format:t,...La,cacheKey:t}},S_=(e,t)=>{Mn(e.inputs),e.compute(Fa("GlobalMaxPool",e.inputs[0],!0,t))}}),kf,Tf,k_,T_,m2=X(()=>{_e(),ye(),rt(),ve(),kf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Tf=(e,t)=>{let r=D.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=D.size(s),l=n===3||n===2,d=l?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(D.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,b=g===!1&&c.length===1,y=Ye(o),S=g&&(!l||y===4),w=S?y:1,v=S&&!l?y:1,T=U("input",l?12:n,d.length,v),k=U("scale",a,c.length),E=f?U("zero_point",l?12:n,h.length):void 0,O=ce("output",a,s.length,w),z=[T,k];E&&z.push(E);let $=[d,c];f&&$.push(h);let L=[{type:12,data:o/w},{type:12,data:r},{type:12,data:t.blockSize},...fe(...$,s)],q=ie=>{let te=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ie.registerUniforms(te).declareVariables(...z,O)}
      ${ie.mainStart()}
          ${ie.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${O.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${w===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:b?`
            let scale_index = ${O.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:b?l?`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${O.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${O.setByOffset("global_idx",`${O.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/w/64),y:1,z:1},programUniforms:L})}},k_=(e,t)=>{kf(e.inputs,t),e.compute(Tf(e.inputs,t))},T_=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),Ef,If,E_,g2=X(()=>{Bt(),_e(),ve(),Ef=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},If=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...fe(s)],l=d=>{let c=ce("output",n,s.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},E_=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Ke.webgpu.validateInputContent&&Ef(t,r,n),e.compute(If(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),Cf,zf,I_,C_,_2=X(()=>{_e(),ye(),rt(),ve(),Cf=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${s}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zf=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(D.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=D.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...fe(e[1].dims,e[2].dims,i)],c=f=>{let h=U("indices",e[1].dataType,e[1].dims.length),g=U("updates",e[2].dataType,e[2].dims.length,s),b=t.reduction!=="none"&&t.reduction!==""?ng("output",e[0].dataType,i.length):ce("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,b)}
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
    ${Cf(t.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},I_=e=>Ne({reduction:e.reduction}),C_=(e,t)=>{e.compute(zf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Af,Of,Rf,qa,Mf,Bf,Nf,Df,Pf,Uf,Lf,Ff,Wa,qf,Wf,Vf,Hf,Gf,z_,A_,b2=X(()=>{_e(),ye(),rt(),ve(),Af=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Of=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},Rf=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>n.push(c)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Af(n,t),t.axes.length>0&&Of(n,t.axes,d).forEach((c,f)=>n[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},qa=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Mf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${qa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${qa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Bf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Nf=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},Df=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Pf=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Uf=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${pe("uniforms.scales","i",n)};
        var roi_low = ${pe("uniforms.roi","i",i)};
        var roi_hi = ${pe("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${pe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Lf=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",s)};
          var roi_hi = ${pe("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${pe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",n.length)};
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
    }`,Ff=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Wa=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",qf=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Wa(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
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
    }`},Wf=(e,t,r,n,i,s,a,o,l,d)=>{let c=r.length===2,[f,h]=c?[0,1]:[2,3],g=e.type.value,b=y=>{let S=y===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${n[y]}, ${r[y]}, ${s[y]}, ${s[y]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${g} = originalIdx + ${g}(i);
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
    ${b(f)};
    ${b(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Vf=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Wa(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
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
    }`},Hf=(e,t,r,n,i,s)=>{let a=e.dims,o=Nf(s,t.axes,a.length),l=Df(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((v,T)=>v===0?1:l[T]/v),t.keepAspectRatioPolicy!=="stretch"&&(l=Pf(a,d,t)));let c=ce("output",e.dataType,l.length),f=U("input",e.dataType,a.length),h=D.size(l),g=a.length===l.length&&a.every((v,T)=>v===l[T]),b=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,S=f.type.value,w=v=>`
      ${g?"":`
      ${Mf(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ff(f,a)};
              ${Bf(t.nearestMode,r,S)};
              ${Lf(f,c,a,l,d.length,o.length,b)};
              `;case"linear":return`
              ${Uf(c,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${qf(f,c,a,b,y)}`;if(a.length===3||a.length===5)return`${Vf(f,c,a,b,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Wf(f,c,a,l,d,o,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${g}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...fe(a,l)]})}},Gf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},z_=(e,t)=>{let r=[],n=[],i=[],s=Gf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Rf(e.inputs,t,s,r,n,i),e.compute(Hf(e.inputs[0],t,s,r,n,i),{inputs:[0]})},A_=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),jf,Kf,O_,y2=X(()=>{_e(),ye(),ve(),jf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Kf=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=D.size(s),o=s,l=a,d=s.slice(-1)[0],c=n?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,h=e.length>4,g=n&&r>1,b=n&&r>2,y=r>3,S=64,w=Ye(d),v=[{type:12,data:l},{type:12,data:w},{type:12,data:d},{type:1,data:t.epsilon}],T=E=>{let O=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[U("x",e[0].dataType,e[0].dims,w),U("skip",e[1].dataType,e[1].dims,w),U("gamma",e[2].dataType,e[2].dims,w)];f&&z.push(U("beta",e[3].dataType,e[3].dims,w)),h&&z.push(U("bias",e[4].dataType,e[4].dims,w)),z.push(ce("output",e[0].dataType,o,w)),g&&z.push(ce("mean_output",1,c)),b&&z.push(ce("inv_std_output",1,c)),y&&z.push(ce("input_skip_bias_sum",e[0].dataType,o,w));let $=lt(e[0].dataType),L=lt(1,w);return`

      ${E.registerUniforms(O).declareVariables(...z)}
      var<workgroup> sum_shared : array<${L}, ${S}>;
      var<workgroup> sum_squared_shared : array<${L}, ${S}>;

      ${E.mainStart([S,1,1])}
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
          let f32_value = ${cn($,w,"value")};
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
        let mean = ${Mr("sum",w)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Mr("square_sum",w)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${w};${g};${b};${y}`,inputDependencies:e.map((E,O)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:v})}},O_=(e,t)=>{jf(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Kf(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Xf,Bn,Zf,Va,Qf,Yf,R_,M_,v2=X(()=>{_e(),ye(),rt(),ve(),Xf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Bn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Zf=(e,t)=>{if(e.length>1){let r=Bn(e,1),n=Bn(e,2),i=Bn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ne({starts:r,ends:n,axes:i})}else return t},Va=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Qf=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${pe("uniforms.input_shape","i",r.length)};
            let steps_i = ${pe("uniforms.steps","i",r.length)};
            let signs_i = ${pe("uniforms.signs","i",r.length)};
            let starts_i = ${pe("uniforms.starts","i",r.length)};
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
      }`,Yf=(e,t)=>{let r=e[0].dims,n=D.size(r),i=t.axes.length>0?D.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Bn(e,4);s.forEach(w=>w!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((w,v)=>Va(w,v,r,i,s)),o=t.ends.map((w,v)=>Va(w,v,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let w=0;w<r.length;++w)i.includes(w)||(a.splice(w,0,0),o.splice(w,0,r[w]),s.splice(w,0,1));let l=s.map(w=>Math.sign(w));s.forEach((w,v,T)=>{if(w<0){let k=(o[v]-a[v])/w,E=a[v],O=E+k*s[v];a[v]=O,o[v]=E,T[v]=-w}});let d=r.slice(0);i.forEach((w,v)=>{d[w]=Math.ceil((o[w]-a[w])/s[w])});let c={dims:d,dataType:e[0].dataType},f=ce("output",e[0].dataType,d.length),h=U("input",e[0].dataType,e[0].dims.length),g=D.size(d),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:g},{type:12,data:a},{type:6,data:l},{type:12,data:s},...fe(e[0].dims,d)],S=w=>`
      ${w.registerUniforms(b).declareVariables(h,f)}
        ${Qf(h,f,r)}
        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:y})}},R_=(e,t)=>{Xf(e.inputs,t);let r=Zf(e.inputs,t);e.compute(Yf(e.inputs,r),{inputs:[0]})},M_=e=>{let t=e.starts,r=e.ends,n=e.axes;return Ne({starts:t,ends:r,axes:n})}}),Jf,eh,B_,N_,w2=X(()=>{_e(),ye(),rt(),Br(),ve(),Jf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},eh=(e,t)=>{let r=e.inputs[0],n=r.dims,i=D.size(n),s=n.length,a=D.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(z,$)=>$),d[a]=s-1,d[s-1]=a,l=e.compute(zt(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[s-1],h=i/f,g=Ye(f),b=f/g,y=64;h===1&&(y=256);let S=(z,$)=>$===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:$===2?`max(${z}.x, ${z}.y)`:$===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,w=U("x",l.dataType,l.dims,g),v=ce("result",l.dataType,l.dims,g),T=w.type.value,k=lt(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=z=>`
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
      ${z.registerUniform("packedCols","i32").declareVariables(w,v)}
      ${z.mainStart(y)}
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
          rowMaxShared = ${T}(${S("threadShared[0]",g)});
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
          rowSumShared = ${T}(${Mr("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,O=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:b}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(zt(O,d),{inputs:[O]})},B_=(e,t)=>{Jf(e.inputs),eh(e,t)},N_=e=>Ne({axis:e.axis})}),Ha,th,rh,nh,D_,$2=X(()=>{_e(),ye(),ve(),Ha=e=>Array.from(e.getBigInt64Array(),Number),th=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ha(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rh=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},nh=(e,t)=>{let r=e[0].dims,n=t??Ha(e[1]),i=rh(r,n),s=D.size(i),a=e[0].dataType,o=U("input",a,r.length),l=ce("output",a,i.length),d=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...fe(e[0].dims,i)]}),getShaderSource:d}},D_=e=>{th(e.inputs),e.compute(nh(e.inputs),{inputs:[0]})}}),ih,sh,P_,x2=X(()=>{_e(),ye(),ve(),ih=(e,t,r,n,i)=>{let s=ce("output_data",i,r.length,4),a=U("a_data",t[1].dataType,t[1].dims.length,4),o=U("b_data",t[2].dataType,t[2].dims.length,4),l=U("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,g)=>`select(${h}, ${f}, ${g})`;if(!n)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,g,b="")=>{let y=`a_data[index_a${g}][component_a${g}]`,S=`b_data[index_b${g}][component_b${g}]`,w=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${s.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${a.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_b${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${b}(${c(y,S,w)});
          `};i===9?d=`
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
      }`},sh=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(D.areEqual(t,r)&&D.areEqual(r,n)),a=t,o=D.size(t);if(s){let d=vn.calcShape(vn.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=D.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ih(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...fe(n,t,r,a)]})}},P_=e=>{e.compute(sh(e.inputs))}}),U_,S2=X(()=>{P1(),rl(),U1(),L1(),F1(),q1(),W1(),K1(),Z1(),Q1(),Y1(),J1(),e2(),t2(),r2(),n2(),i2(),s2(),a2(),o2(),l2(),u2(),d2(),c2(),p2(),i_(),f2(),h2(),m2(),g2(),_2(),tl(),b2(),u_(),y2(),v2(),w2(),o_(),$2(),Br(),nl(),x2(),U_=new Map([["Abs",[Og]],["Acos",[Rg]],["Acosh",[Mg]],["Add",[h0]],["ArgMax",[Ig,ho]],["ArgMin",[Eg,ho]],["Asin",[Bg]],["Asinh",[Ng]],["Atan",[Dg]],["Atanh",[Pg]],["Attention",[Cg]],["AveragePool",[b_,__]],["BatchNormalization",[zg]],["BiasAdd",[Ag]],["BiasSplitGelu",[f0]],["Cast",[Lg,Ug]],["Ceil",[qg]],["Clip",[Fg]],["Concat",[S0,k0]],["Conv",[vo,yo]],["ConvTranspose",[B0,M0]],["Cos",[Wg]],["Cosh",[Vg]],["CumSum",[N0,D0]],["DepthToSpace",[P0,U0]],["DequantizeLinear",[k_,T_]],["Div",[m0]],["Einsum",[L0,F0]],["Elu",[Hg,qn]],["Equal",[g0]],["Erf",[Gg]],["Exp",[jg]],["Expand",[q0]],["FastGelu",[W0]],["Floor",[Kg]],["FusedConv",[vo,yo]],["Gather",[H0,V0]],["GatherElements",[Q0,Z0]],["GatherBlockQuantized",[K0,X0]],["GatherND",[G0,j0]],["Gelu",[Xg]],["Gemm",[J0,Y0]],["GlobalAveragePool",[v_,y_]],["GlobalMaxPool",[S_,x_]],["Greater",[v0]],["GreaterOrEqual",[$0]],["GridSample",[e_,t_]],["GroupQueryAttention",[d_]],["HardSigmoid",[n0,r0]],["InstanceNormalization",[c_]],["LayerNormalization",[p_]],["LeakyRelu",[Zg,qn]],["Less",[w0]],["LessOrEqual",[x0]],["Log",[c0]],["MatMul",[f_]],["MatMulNBits",[h_,m_]],["MaxPool",[w_,$_]],["Mul",[_0]],["MultiHeadAttention",[n_,r_]],["Neg",[Yg]],["Not",[Qg]],["Pad",[g_]],["Pow",[b0]],["QuickGelu",[p0,qn]],["Range",[E_]],["Reciprocal",[Jg]],["ReduceMin",[$g]],["ReduceMean",[_g]],["ReduceMax",[wg]],["ReduceSum",[Sg]],["ReduceProd",[xg]],["ReduceL1",[bg]],["ReduceL2",[yg]],["ReduceLogSum",[Tg]],["ReduceLogSumExp",[vg]],["ReduceSumSquare",[kg]],["Relu",[e0]],["Resize",[z_,A_]],["RotaryEmbedding",[l_]],["ScatterND",[C_,I_]],["Sigmoid",[t0]],["Sin",[i0]],["Sinh",[s0]],["Slice",[R_,M_]],["SkipLayerNormalization",[O_]],["Split",[s_,a_]],["Sqrt",[a0]],["Softmax",[B_,N_]],["Sub",[y0]],["Tan",[o0]],["Tanh",[l0]],["ThresholdedRelu",[d0,qn]],["Tile",[D_]],["Transpose",[sg,ag]],["Where",[P_]]])}),L_,k2=X(()=>{Bt(),Sr(),ve(),L_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){lr(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),jt(e.programInfo.name)}dispose(){}build(e,t){lr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=ig(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});Ae("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return jt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),F_={};$n(F_,{WebGpuBackend:()=>q_});var ah,oh,lh,q_,T2=X(()=>{Bt(),_e(),Sr(),Jm(),N1(),S2(),k2(),ah=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},oh=(e,t,r)=>{let n=e.name;return e.shaderCache?.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${ah(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,n},lh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},q_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=s=>t.features.has(s)&&r.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new lh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=rg(this),this.programManager=new L_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qo(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,d=i.programName,c=i.inputTensorViews,f=i.outputTensorViews,h=t[n*2],g=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let b=Number(h-this.queryTimeBase),y=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(S=>({dims:S.dims,dataType:_r(S.dataType)})),outputsMetadata:f.map(S=>({dims:S.dims,dataType:_r(S.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:d,startTime:b,endTime:y});else{let S="";c.forEach((v,T)=>{S+=`input[${T}]: [${v.dims}] | ${_r(v.dataType)}, `});let w="";f.forEach((v,T)=>{w+=`output[${T}]: [${v.dims}] | ${_r(v.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${d}" ${S}${w}start time: ${b} ns, execution time: ${y-b} ns`)}ts("GPU",`${d}::${h}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),jt()}run(e,t,r,n,i,s){lr(e.name);let a=[];for(let v=0;v<t.length;++v){let T=t[v].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);a.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((v,T)=>T):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],h=[];for(let v=0;v<o.length;++v){if(!Number.isInteger(c[v])||c[v]<-3||c[v]>=s)throw new Error(`Invalid output index: ${c[v]}`);if(c[v]===-3)continue;let T=c[v]===-1,k=c[v]===-2,E=T||k?i(o[v].dataType,o[v].dims):n(c[v],o[v].dataType,o[v].dims);if(f.push(E),E.data===0)continue;let O=this.gpuDataManager.get(E.data);if(!O)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(O),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(O)}h.push(O)}if(a.length!==t.length||h.length!==f.length){if(h.length===0)return jt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let v=0,T=[];d.forEach(z=>{let $=typeof z.data=="number"?[z.data]:z.data;if($.length===0)return;let L=z.type===10?2:4,q,ie;z.type===10?(ie=$.length>4?16:$.length>2?8:$.length*L,q=$.length>4?16:L*$.length):(ie=$.length<=2?$.length*L:16,q=16),v=Math.ceil(v/ie)*ie,T.push(v);let te=z.type===10?8:4;v+=$.length>4?Math.ceil($.length/te)*q:$.length*L});let k=16;v=Math.ceil(v/k)*k;let E=new ArrayBuffer(v);d.forEach((z,$)=>{let L=T[$],q=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(E,L,q.length).set(q);else if(z.type===12)new Uint32Array(E,L,q.length).set(q);else if(z.type===10)new Uint16Array(E,L,q.length).set(q);else if(z.type===1)new Float32Array(E,L,q.length).set(q);else throw new Error(`Unsupported uniform type: ${_r(z.type)}`)});let O=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(O.buffer,0,E,0,v),this.gpuDataManager.release(O.id),g={offset:0,size:v,buffer:O.buffer}}let b=this.programManager.normalizeDispatchGroupSize(l),y=b[1]===1&&b[2]===1,S=oh(e,t,y),w=this.programManager.getArtifact(S);if(w||(w=this.programManager.build(e,b),this.programManager.setArtifact(S,w),Ae("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&w.uniformVariablesInfo){if(d.length!==w.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${w.uniformVariablesInfo.length}, got ${d.length} in program "${w.programInfo.name}".`);for(let v=0;v<d.length;v++){let T=d[v],k=T.type,E=typeof T.data=="number"?1:T.data.length,[O,z]=w.uniformVariablesInfo[v];if(k!==O||E!==z)throw new Error(`Uniform variable ${v} mismatch: expect type ${O} with size ${z}, got type ${k} with size ${E} in program "${w.programInfo.name}".`)}}if(Ae("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:w.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run(w,a,h,b,g),jt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=U_.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ae("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await co(this,e,t);return Yo(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ae("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ae("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ae("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),W_={};$n(W_,{init:()=>V_});var Li,uh,V_,E2=X(()=>{_e(),Sr(),ye(),B1(),Li=class H_{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new H_(this.module,this.dataType,this.data,t)}},uh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),c=Number(e.getValue(n*i++,"*")),f=Number(e.getValue(n*i++,s)),h=[];for(let g=0;g<f;g++)h.push(Number(e.getValue(n*i++,s)));o.push(new Li(e,d,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,n=t?.outputs??[],i=(a,o,l)=>new Li(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=Kr(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Li(this.module,a,d,o)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},V_=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(T2(),oi(F_)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,c=!1)=>{if(c)Ae("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{Ae("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),f)}},async(o,l,d)=>{Ae("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,c)=>{Ae("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new uh(t,a,Number(l));return a.computeKernel(Number(o),f,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new tg(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,c)=>s.ensureTensor(a,o,l,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),dh,ul,dl,Cr,ch,Ga,ls,cl,pl,ja,fl,hl,ml,G_=X(()=>{Bt(),O1(),R1(),_e(),nn(),jo(),Xm(),dh=(e,t)=>{Ve()._OrtInit(e,t)!==0&&De("Can't initialize onnxruntime.")},ul=async e=>{dh(e.wasm.numThreads,ns(e.logLevel))},dl=async(e,t)=>{Ve().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(E2(),oi(W_)).init;t==="webgpu"&&await n("webgpu",Ve(),e,r),t==="webnn"&&await n("webnn",Ve(),e)}},Cr=new Map,ch=e=>{let t=Ve(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&De("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Ga=(e,t)=>{let r=Ve(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&De("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(i+8+f*s,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(f+d)*s,"*")))}return[o,l,c]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},ls=e=>{let t=Ve(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},cl=async(e,t)=>{let r,n,i=Ve();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=ls(e);let s=0,a=0,o=0,l=[],d=[],c=[];try{if([a,l]=await Km(t),t?.externalData&&i.mountExternalData){let k=[];for(let E of t.externalData){let O=typeof E=="string"?E:E.path;k.push(Zo(typeof E=="string"?E:E.data).then(z=>{i.mountExternalData(O,z)}))}await Promise.all(k)}for(let k of t?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof k!="string"){let E=k,O=E?.context,z=E?.gpuDevice,$=E?.deviceType,L=E?.powerPreference;O?i.currentContext=O:z?i.currentContext=await i.webnnCreateMLContext(z):i.currentContext=await i.webnnCreateMLContext({deviceType:$,powerPreference:L})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),i.webgpuOnCreateSession?.(s),s===0&&De("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,h]=ch(s),g=!!t?.enableGraphCapture,b=[],y=[],S=[],w=[],v=[];for(let k=0;k<f;k++){let[E,O,z]=Ga(s,k);E===0&&De("Can't get an input name."),d.push(E);let $=i.UTF8ToString(E);b.push($),S.push(O===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:_r(O),shape:z})}for(let k=0;k<h;k++){let[E,O,z]=Ga(s,k+f);E===0&&De("Can't get an output name."),c.push(E);let $=i.UTF8ToString(E);y.push($),w.push(O===0?{name:$,isTensor:!1}:{name:$,isTensor:!0,type:_r(O),shape:z});{if(g&&t?.preferredOutputLocation===void 0){v.push("gpu-buffer");continue}let L=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[$]??"cpu",q=i.webnnIsGraphOutput;if(L==="cpu"&&q&&q(s,$)){v.push("ml-tensor-cpu-output");continue}if(L!=="cpu"&&L!=="cpu-pinned"&&L!=="gpu-buffer"&&L!=="ml-tensor")throw new Error(`Not supported preferred output location: ${L}.`);if(g&&L!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${L}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);v.push(L)}}let T=null;return v.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&De("Can't create IO binding."),T={handle:o,outputPreferredLocations:v,outputPreferredLocationsEncoded:v.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>lo(k))}),Cr.set(s,[s,d,c,T,g,!1]),[s,b,y,S,w]}catch(f){throw d.forEach(h=>i._OrtFree(h)),c.forEach(h=>i._OrtFree(h)),o!==0&&i._OrtReleaseBinding(o)!==0&&De("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&De("Can't release session."),f}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&De("Can't release session options."),l.forEach(f=>i._free(f)),i.unmountExternalData?.()}},pl=e=>{let t=Ve(),r=Cr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&De("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&De("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(n)!==0&&De("Can't release session."),Cr.delete(e)},ja=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Ve(),l=o.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,g,b;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let w=e[2].gpuBuffer;b=Kr(jr(d),c);{let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=v(n,s,w,b)}}else if(f==="ml-tensor"){let w=e[2].mlTensor;b=Kr(jr(d),c);let v=o.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=v(n,w,jr(d),c)}else{let w=e[2];if(Array.isArray(w)){b=l*w.length,g=o._malloc(b),r.push(g);for(let v=0;v<w.length;v++){if(typeof w[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(g+v*l,Vt(w[v],r),"*")}}else{let v=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&v&&T){let k=o.UTF8ToString(i);if(v(n,k)||T(n,k)){let E=jr(d);b=Kr(E,c),h="ml-tensor";let O=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!O||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await O(n,E,c);z($,new Uint8Array(w.buffer,w.byteOffset,w.byteLength)),g=$}else b=w.byteLength,g=o._malloc(b),r.push(g),o.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,b),g)}else b=w.byteLength,g=o._malloc(b),r.push(g),o.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,b),g)}}let y=o.stackSave(),S=o.stackAlloc(4*c.length);try{c.forEach((v,T)=>o.setValue(S+T*l,v,l===4?"i32":"i64"));let w=o._OrtCreateTensor(jr(d),g,b,S,c.length,lo(h));w===0&&De(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(w)}finally{o.stackRestore(y)}},fl=async(e,t,r,n,i,s)=>{let a=Ve(),o=a.PTR_SIZE,l=Cr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],g=l[4],b=l[5],y=t.length,S=n.length,w=0,v=[],T=[],k=[],E=[],O=[],z=a.stackSave(),$=a.stackAlloc(y*o),L=a.stackAlloc(y*o),q=a.stackAlloc(S*o),ie=a.stackAlloc(S*o);try{[w,v]=jm(s),Qr("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)await ja(r[N],T,E,e,c[t[N]],t[N],g);for(let N=0;N<S;N++)await ja(i[N],k,E,e,f[n[N]],y+n[N],g);Yr("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)a.setValue($+N*o,T[N],"*"),a.setValue(L+N*o,c[t[N]],"*");for(let N=0;N<S;N++)a.setValue(q+N*o,k[N],"*"),a.setValue(ie+N*o,f[n[N]],"*");if(h&&!b){let{handle:N,outputPreferredLocations:W,outputPreferredLocationsEncoded:Y}=h;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);Qr("wasm bindInputsOutputs");for(let Q=0;Q<y;Q++){let de=t[Q];await a._OrtBindInput(N,c[de],T[Q])!==0&&De(`Can't bind input[${Q}] for session=${e}.`)}for(let Q=0;Q<S;Q++){let de=n[Q];i[Q]?.[3]?(O.push(k[Q]),a._OrtBindOutput(N,f[de],k[Q],0)!==0&&De(`Can't bind pre-allocated output[${Q}] for session=${e}.`)):a._OrtBindOutput(N,f[de],0,Y[de])!==0&&De(`Can't bind output[${Q}] to ${W[Q]} for session=${e}.`)}Yr("wasm bindInputsOutputs"),Cr.set(e,[d,c,f,h,g,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let te;h?te=await a._OrtRunWithBinding(d,h.handle,S,q,w):te=await a._OrtRun(d,L,$,y,ie,S,q,w),te!==0&&De("failed to call OrtRun().");let V=[],R=[];Qr("wasm ProcessOutputTensor");for(let N=0;N<S;N++){let W=Number(a.getValue(q+N*o,"*"));if(W===k[N]||O.includes(k[N])){V.push(i[N]),W!==k[N]&&a._OrtReleaseTensor(W)!==0&&De("Can't release tensor.");continue}let Y=a.stackSave(),Q=a.stackAlloc(4*o),de=!1,he,F=0;try{a._OrtGetTensorData(W,Q,Q+o,Q+2*o,Q+3*o)!==0&&De(`Can't access output tensor data on index ${N}.`);let se=o===4?"i32":"i64",oe=Number(a.getValue(Q,se));F=a.getValue(Q+o,"*");let Z=a.getValue(Q+o*2,"*"),Pe=Number(a.getValue(Q+o*3,se)),Me=[];for(let Ee=0;Ee<Pe;Ee++)Me.push(Number(a.getValue(Z+Ee*o,se)));a._OrtFree(Z)!==0&&De("Can't free memory for tensor dims.");let Se=Me.reduce((Ee,Ce)=>Ee*Ce,1);he=_r(oe);let qe=h?.outputPreferredLocations[n[N]];if(he==="string"){if(qe==="gpu-buffer"||qe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ee=[];for(let Ce=0;Ce<Se;Ce++){let Je=a.getValue(F+Ce*o,"*"),C=a.getValue(F+(Ce+1)*o,"*"),A=Ce===Se-1?void 0:C-Je;Ee.push(a.UTF8ToString(Je,A))}V.push([he,Me,Ee,"cpu"])}else if(qe==="gpu-buffer"&&Se>0){let Ee=a.jsepGetBuffer;if(!Ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ce=Ee(F),Je=Kr(oe,Se);if(Je===void 0||!Ko(he))throw new Error(`Unsupported data type: ${he}`);de=!0,V.push([he,Me,{gpuBuffer:Ce,download:a.jsepCreateDownloader(Ce,Je,he),dispose:()=>{a._OrtReleaseTensor(W)!==0&&De("Can't release tensor.")}},"gpu-buffer"])}else if(qe==="ml-tensor"&&Se>0){let Ee=a.webnnEnsureTensor,Ce=a.webnnIsGraphInputOutputTypeSupported;if(!Ee||!Ce)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Kr(oe,Se)===void 0||!Xo(he))throw new Error(`Unsupported data type: ${he}`);if(!Ce(e,he,!1))throw new Error(`preferredLocation "ml-tensor" for ${he} output is not supported by current WebNN Context.`);let Je=await Ee(e,F,oe,Me,!1);de=!0,V.push([he,Me,{mlTensor:Je,download:a.webnnCreateMLTensorDownloader(F,he),dispose:()=>{a.webnnReleaseTensorId(F),a._OrtReleaseTensor(W)}},"ml-tensor"])}else if(qe==="ml-tensor-cpu-output"&&Se>0){let Ee=a.webnnCreateMLTensorDownloader(F,he)(),Ce=V.length;de=!0,R.push((async()=>{let Je=[Ce,await Ee];return a.webnnReleaseTensorId(F),a._OrtReleaseTensor(W),Je})()),V.push([he,Me,[],"cpu"])}else{let Ee=vs(he),Ce=new Ee(Se);new Uint8Array(Ce.buffer,Ce.byteOffset,Ce.byteLength).set(a.HEAPU8.subarray(F,F+Ce.byteLength)),V.push([he,Me,Ce,"cpu"])}}finally{a.stackRestore(Y),he==="string"&&F&&a._free(F),de||a._OrtReleaseTensor(W)}}h&&!g&&(a._OrtClearBoundOutputs(h.handle)!==0&&De("Can't clear bound outputs."),Cr.set(e,[d,c,f,h,g,!1]));for(let[N,W]of await Promise.all(R))V[N][2]=W;return Yr("wasm ProcessOutputTensor"),V}finally{a.webnnOnRunEnd?.(d),a.stackRestore(z),T.forEach(te=>a._OrtReleaseTensor(te)),k.forEach(te=>a._OrtReleaseTensor(te)),E.forEach(te=>a._free(te)),w!==0&&a._OrtReleaseRunOptions(w),v.forEach(te=>a._free(te))}},hl=e=>{let t=Ve(),r=Cr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&De("Can't get an profile file name."),t._OrtFree(i)},ml=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),zr,Ot,ln,Nn,Dn,Fi,Ka,qi,Wr,Vr,ph,j_,K_,X_,Z_,Q_,Y_,J_,eb=X(()=>{Bt(),G_(),nn(),Ho(),zr=()=>!!Ke.wasm.proxy&&typeof document<"u",ln=!1,Nn=!1,Dn=!1,qi=new Map,Wr=(e,t)=>{let r=qi.get(e);r?r.push(t):qi.set(e,[t])},Vr=()=>{if(ln||!Nn||Dn||!Ot)throw new Error("worker not ready")},ph=e=>{switch(e.data.type){case"init-wasm":ln=!1,e.data.err?(Dn=!0,Ka[1](e.data.err)):(Nn=!0,Ka[0]()),Fi&&(URL.revokeObjectURL(Fi),Fi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},j_=async()=>{if(!Nn){if(ln)throw new Error("multiple calls to 'initWasm()' detected.");if(Dn)throw new Error("previous call to 'initWasm()' failed.");if(ln=!0,zr())return new Promise((e,t)=>{Ot?.terminate(),Hm().then(([r,n])=>{try{Ot=n,Ot.onerror=s=>t(s),Ot.onmessage=ph,Ka=[e,t];let i={type:"init-wasm",in:Ke};!i.in.wasm.wasmPaths&&(r||oo)&&(i.in.wasm.wasmPaths={wasm:new URL("/deepfilternet-web/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href}),Ot.postMessage(i),Fi=r}catch(i){t(i)}},t)});try{await Go(Ke.wasm),await ul(Ke),Nn=!0}catch(e){throw Dn=!0,e}finally{ln=!1}}},K_=async e=>{if(zr())return Vr(),new Promise((t,r)=>{Wr("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Ke}};Ot.postMessage(n)});await dl(Ke,e)},X_=async e=>zr()?(Vr(),new Promise((t,r)=>{Wr("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Ot.postMessage(n,[e.buffer])})):ls(e),Z_=async(e,t)=>{if(zr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Vr(),new Promise((r,n)=>{Wr("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ot.postMessage(i,s)})}else return cl(e,t)},Q_=async e=>{if(zr())return Vr(),new Promise((t,r)=>{Wr("release",[t,r]);let n={type:"release",in:e};Ot.postMessage(n)});pl(e)},Y_=async(e,t,r,n,i,s)=>{if(zr()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Vr(),new Promise((a,o)=>{Wr("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Ot.postMessage(d,ml(l))})}else return fl(e,t,r,n,i,s)},J_=async e=>{if(zr())return Vr(),new Promise((t,r)=>{Wr("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Ot.postMessage(n)});hl(e)}}),Xa,fh,tb,I2=X(()=>{Bt(),eb(),_e(),Vo(),Xm(),Xa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fh=e=>{switch(e[3]){case"cpu":return new Rt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ko(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Rt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Xo(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Rt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},tb=class{async fetchModelAndCopyToWasmMemory(e){return X_(await Zo(e))}async loadModel(e,t){lr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Z_(r,t),jt()}async dispose(){return Q_(this.sessionId)}async run(e,t,r){lr();let n=[],i=[];Object.entries(e).forEach(f=>{let h=f[0],g=f[1],b=this.inputNames.indexOf(h);if(b===-1)throw new Error(`invalid input '${h}'`);n.push(g),i.push(b)});let s=[],a=[];Object.entries(t).forEach(f=>{let h=f[0],g=f[1],b=this.outputNames.indexOf(h);if(b===-1)throw new Error(`invalid output '${h}'`);s.push(g),a.push(b)});let o=n.map((f,h)=>Xa(f,()=>`input "${this.inputNames[i[h]]}"`)),l=s.map((f,h)=>f?Xa(f,()=>`output "${this.outputNames[a[h]]}"`):null),d=await Y_(this.sessionId,i,o,a,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[a[f]]]=s[f]??fh(d[f]);return jt(),c}startProfiling(){}endProfiling(){J_(this.sessionId)}}}),rb={};$n(rb,{OnnxruntimeWebAssemblyBackend:()=>xo,initializeFlags:()=>$o,wasmBackend:()=>nb});var $o,xo,nb,C2=X(()=>{Bt(),eb(),I2(),$o=()=>{(typeof Ke.wasm.initTimeout!="number"||Ke.wasm.initTimeout<0)&&(Ke.wasm.initTimeout=0);let e=Ke.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ke.wasm.simd=!1),typeof Ke.wasm.proxy!="boolean"&&(Ke.wasm.proxy=!1),typeof Ke.wasm.trace!="boolean"&&(Ke.wasm.trace=!1),typeof Ke.wasm.numThreads!="number"||!Number.isInteger(Ke.wasm.numThreads)||Ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ke.wasm.numThreads=1;else{let t=typeof navigator>"u"?h1("node:os").cpus().length:navigator.hardwareConcurrency;Ke.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},xo=class{async init(e){$o(),await j_(),await K_(e)}async createInferenceSessionHandler(e,t){let r=new tb;return await r.loadModel(e,t),r}},nb=new xo});Bt();Bt();Bt();var z2="1.26.0";{let e=(C2(),oi(rb)).wasmBackend;dn("webgpu",e,5),dn("webnn",e,5),dn("cpu",e,10),dn("wasm",e,10)}Object.defineProperty(Ke.versions,"web",{value:z2,enumerable:!0});/**
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
 */function A2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kt(e){if(this.size=e|0,this.size<=1||this.size&this.size-1)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=e<<1;for(var t=new Array(this.size*2),r=0;r<t.length;r+=2){const l=Math.PI*r/this.size;t[r]=Math.cos(l),t[r+1]=-Math.sin(l)}this.table=t;for(var n=0,i=1;this.size>i;i<<=1)n++;this._width=n%2===0?n-1:n,this._bitrev=new Array(1<<this._width);for(var s=0;s<this._bitrev.length;s++){this._bitrev[s]=0;for(var a=0;a<this._width;a+=2){var o=this._width-a-2;this._bitrev[s]|=(s>>>a&3)<<o}}this._out=null,this._data=null,this._inv=0}var O2=kt;kt.prototype.fromComplexArray=function(t,r){for(var n=r||new Array(t.length>>>1),i=0;i<t.length;i+=2)n[i>>>1]=t[i];return n};kt.prototype.createComplexArray=function(){const t=new Array(this._csize);for(var r=0;r<t.length;r++)t[r]=0;return t};kt.prototype.toComplexArray=function(t,r){for(var n=r||this.createComplexArray(),i=0;i<n.length;i+=2)n[i]=t[i>>>1],n[i+1]=0;return n};kt.prototype.completeSpectrum=function(t){for(var r=this._csize,n=r>>>1,i=2;i<n;i+=2)t[r-i]=t[i],t[r-i+1]=-t[i+1]};kt.prototype.transform=function(t,r){if(t===r)throw new Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=0,this._transform4(),this._out=null,this._data=null};kt.prototype.realTransform=function(t,r){if(t===r)throw new Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=0,this._realTransform4(),this._out=null,this._data=null};kt.prototype.inverseTransform=function(t,r){if(t===r)throw new Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=1,this._transform4();for(var n=0;n<t.length;n++)t[n]/=this.size;this._out=null,this._data=null};kt.prototype._transform4=function(){var t=this._out,r=this._csize,n=this._width,i=1<<n,s=r/i<<1,a,o,l=this._bitrev;if(s===4)for(a=0,o=0;a<r;a+=s,o++){const y=l[o];this._singleTransform2(a,y,i)}else for(a=0,o=0;a<r;a+=s,o++){const y=l[o];this._singleTransform4(a,y,i)}var d=this._inv?-1:1,c=this.table;for(i>>=2;i>=2;i>>=2){s=r/i<<1;var f=s>>>2;for(a=0;a<r;a+=s)for(var h=a+f,g=a,b=0;g<h;g+=2,b+=i){const y=g,S=y+f,w=S+f,v=w+f,T=t[y],k=t[y+1],E=t[S],O=t[S+1],z=t[w],$=t[w+1],L=t[v],q=t[v+1],ie=T,te=k,V=c[b],R=d*c[b+1],N=E*V-O*R,W=E*R+O*V,Y=c[2*b],Q=d*c[2*b+1],de=z*Y-$*Q,he=z*Q+$*Y,F=c[3*b],se=d*c[3*b+1],oe=L*F-q*se,Z=L*se+q*F,Pe=ie+de,Me=te+he,Se=ie-de,qe=te-he,Ee=N+oe,Ce=W+Z,Je=d*(N-oe),C=d*(W-Z),A=Pe+Ee,B=Me+Ce,K=Pe-Ee,j=Me-Ce,H=Se+C,re=qe-Je,J=Se-C,ee=qe+Je;t[y]=A,t[y+1]=B,t[S]=H,t[S+1]=re,t[w]=K,t[w+1]=j,t[v]=J,t[v+1]=ee}}};kt.prototype._singleTransform2=function(t,r,n){const i=this._out,s=this._data,a=s[r],o=s[r+1],l=s[r+n],d=s[r+n+1],c=a+l,f=o+d,h=a-l,g=o-d;i[t]=c,i[t+1]=f,i[t+2]=h,i[t+3]=g};kt.prototype._singleTransform4=function(t,r,n){const i=this._out,s=this._data,a=this._inv?-1:1,o=n*2,l=n*3,d=s[r],c=s[r+1],f=s[r+n],h=s[r+n+1],g=s[r+o],b=s[r+o+1],y=s[r+l],S=s[r+l+1],w=d+g,v=c+b,T=d-g,k=c-b,E=f+y,O=h+S,z=a*(f-y),$=a*(h-S),L=w+E,q=v+O,ie=T+$,te=k-z,V=w-E,R=v-O,N=T-$,W=k+z;i[t]=L,i[t+1]=q,i[t+2]=ie,i[t+3]=te,i[t+4]=V,i[t+5]=R,i[t+6]=N,i[t+7]=W};kt.prototype._realTransform4=function(){var t=this._out,r=this._csize,n=this._width,i=1<<n,s=r/i<<1,a,o,l=this._bitrev;if(s===4)for(a=0,o=0;a<r;a+=s,o++){const ur=l[o];this._singleRealTransform2(a,ur>>>1,i>>>1)}else for(a=0,o=0;a<r;a+=s,o++){const ur=l[o];this._singleRealTransform4(a,ur>>>1,i>>>1)}var d=this._inv?-1:1,c=this.table;for(i>>=2;i>=2;i>>=2){s=r/i<<1;var f=s>>>1,h=f>>>1,g=h>>>1;for(a=0;a<r;a+=s)for(var b=0,y=0;b<=g;b+=2,y+=i){var S=a+b,w=S+h,v=w+h,T=v+h,k=t[S],E=t[S+1],O=t[w],z=t[w+1],$=t[v],L=t[v+1],q=t[T],ie=t[T+1],te=k,V=E,R=c[y],N=d*c[y+1],W=O*R-z*N,Y=O*N+z*R,Q=c[2*y],de=d*c[2*y+1],he=$*Q-L*de,F=$*de+L*Q,se=c[3*y],oe=d*c[3*y+1],Z=q*se-ie*oe,Pe=q*oe+ie*se,Me=te+he,Se=V+F,qe=te-he,Ee=V-F,Ce=W+Z,Je=Y+Pe,C=d*(W-Z),A=d*(Y-Pe),B=Me+Ce,K=Se+Je,j=qe+A,H=Ee-C;if(t[S]=B,t[S+1]=K,t[w]=j,t[w+1]=H,b===0){var re=Me-Ce,J=Se-Je;t[v]=re,t[v+1]=J;continue}if(b!==g){var ee=qe,G=-Ee,ge=Me,le=-Se,me=-d*A,be=-d*C,we=-d*Je,Ue=-d*Ce,Oe=ee+me,Ge=G+be,it=ge+Ue,ot=le-we,bt=a+h-b,Nt=a+f-b;t[bt]=Oe,t[bt+1]=Ge,t[Nt]=it,t[Nt+1]=ot}}}};kt.prototype._singleRealTransform2=function(t,r,n){const i=this._out,s=this._data,a=s[r],o=s[r+n],l=a+o,d=a-o;i[t]=l,i[t+1]=0,i[t+2]=d,i[t+3]=0};kt.prototype._singleRealTransform4=function(t,r,n){const i=this._out,s=this._data,a=this._inv?-1:1,o=n*2,l=n*3,d=s[r],c=s[r+n],f=s[r+o],h=s[r+l],g=d+f,b=d-f,y=c+h,S=a*(c-h),w=g+y,v=b,T=-S,k=g-y,E=b,O=S;i[t]=w,i[t+1]=0,i[t+2]=v,i[t+3]=T,i[t+4]=k,i[t+5]=0,i[t+6]=E,i[t+7]=O};const R2=A2(O2);let Jn=null,ei=null,ti=null,us=null;const at={sr:48e3,fftSize:1024,frameSize:960,hopSize:480,nbErb:32,nbDf:96},ib=new Float32Array(at.fftSize);for(let e=0;e<at.fftSize;e++)ib[e]=.5*(1-Math.cos(2*Math.PI*e/(at.fftSize-1)));function M2(){us||(us=new R2(at.fftSize))}function B2(e){const t=new Float32Array(at.fftSize);for(let r=0;r<at.fftSize;r++)t[r]=(r<e.length?e[r]:0)*ib[r];return t}async function sb(){Ke.wasm.numThreads=navigator.hardwareConcurrency||4;const e="/deepfilternet-web";try{Jn=await Qn.create(`${e}standard-model/enc.onnx`,{executionProviders:["wasm"]}),console.log("ENC inputs:",Jn.inputNames.join(", ")),console.log("ENC outputs:",Jn.outputNames.join(", ")),ei=await Qn.create(`${e}standard-model/df_dec.onnx`,{executionProviders:["wasm"]}),console.log("DF inputs:",ei.inputNames.join(", ")),console.log("DF outputs:",ei.outputNames.join(", ")),ti=await Qn.create(`${e}standard-model/erb_dec.onnx`,{executionProviders:["wasm"]}),console.log("ERB inputs:",ti.inputNames.join(", ")),console.log("ERB outputs:",ti.outputNames.join(", ")),console.log("DeepFilterNet3 models loaded successfully")}catch(t){throw console.error("Failed to load models:",t),t}}async function N2(e,t,r){if(!Jn||!ei||!ti)throw new Error("Models not loaded");let n=e;t!==at.sr&&(n=U2(e,t,at.sr)),r?.(.05);const i=[],s=at.frameSize,a=at.hopSize,o=Math.ceil((n.length-s)/a)+1;let l=0,d=-1;for(let g=0;g<=n.length-s;g+=a){l++;const b=n.slice(g,g+s),{feat_erb:y,feat_spec:S}=D2(b),w=await Jn.run({feat_erb:y,feat_spec:S}),v=w.emb,T=w.c0,k=w.e0,E=w.e1,O=w.e2,z=w.e3,$=await ti.run({emb:v,e3:z,e2:O,e1:E,e0:k}),L=$.m,q=await ei.run({emb:v,c0:T}),ie=q.coefs||L,te=P2(ie,$,q,b);for(let R=0;R<te.length;R++){const N=g+R;if(N>=n.length)break;for(;i.length<=N;)i.push(0);i[N]+=te[R]}const V=.05+l/o*.9;Math.abs(V-d)>=.005&&(d=V,console.log("Processing progress:",(V*100).toFixed(2)+"%"),r?.(V),await new Promise(R=>setTimeout(R,0)))}let c=0;for(let g=0;g<i.length;g++){const b=Math.abs(i[g]);b>c&&(c=b)}let f=1;c>0&&(f=.95/c);const h=new Float32Array(n.length);for(let g=0;g<n.length;g++)h[g]=(i[g]||0)*f;return r?.(.95),new Float32Array(h.slice(0,e.length))}function D2(e){M2();const t=B2(e),r=us.createComplexArray();us.realTransform(r,t);const n=at.fftSize/2+1,i=at.nbDf,s=new Float32Array(1*2*1*i);for(let o=0;o<i;o++){const l=Math.floor(o/i*n);s[o*2]=r[l*2],s[o*2+1]=r[l*2+1]}const a=new Float32Array(1*1*1*at.nbErb);for(let o=0;o<at.nbErb;o++){const l=Math.floor(o/at.nbErb*n),d=Math.floor((o+1)/at.nbErb*n);let c=0;for(let f=l;f<d;f++){const h=r[f*2],g=r[f*2+1];c+=Math.sqrt(h*h+g*g)}a[o]=c/Math.max(1,d-l)}return{feat_erb:new Rt("float32",a,[1,1,1,at.nbErb]),feat_spec:new Rt("float32",s,[1,2,1,at.nbDf])}}function P2(e,t,r,n){const i=t?.m?.data,s=new Float32Array(at.frameSize);if(i&&i.length>0){let a=0;for(let d=0;d<i.length;d++)a+=i[d];const o=a/i.length,l=Math.max(.1,Math.min(2,o));for(let d=0;d<at.frameSize;d++)s[d]=(n[d]||0)*l*.5}else for(let a=0;a<at.frameSize;a++)s[a]=(n[a]||0)*.5;return s}function U2(e,t,r){const n=r/t,i=Math.floor(e.length*n),s=new Float32Array(i);for(let a=0;a<i;a++){const o=a/n,l=Math.floor(o),d=Math.min(l+1,e.length-1),c=o-l;s[a]=e[l]*(1-c)+e[d]*c}return s}const L2=Object.freeze(Object.defineProperty({__proto__:null,loadModel:sb,runInference:N2},Symbol.toStringTag,{value:"Module"})),F2={class:"min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-200"},q2={class:"bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10"},W2={class:"max-w-4xl mx-auto px-4 py-3"},V2={class:"flex items-center justify-between"},H2={class:"flex items-center gap-3"},G2={class:"flex bg-slate-100 dark:bg-slate-700/50 rounded-lg p-1"},j2=["title"],K2={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},X2={key:1,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},Z2={class:"max-w-4xl mx-auto px-4 py-6"},Q2={key:0,class:"space-y-6"},Y2={key:0,class:"p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800"},J2={class:"flex items-center gap-2"},ex={class:"font-medium"},tx={class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"},rx={class:"flex items-center justify-between mb-4"},nx={class:"flex items-center gap-2"},ix={class:"text-xs text-slate-400 dark:text-slate-500"},sx={class:"flex justify-center pt-2"},ax={class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"},ox={key:1,class:"bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8"},lx=pi({__name:"App",setup(e){const t=et(null),r=et(null),n=qv(null),i=et("unloaded"),s=et("idle"),a=et(0),o=et(null),l=et("home"),d=et(!1),c=et(null),f=et(null),h=yn(()=>r.value?Rd(r.value,200):null),g=yn(()=>n.value?Rd(n.value,200):null);mn(d,v=>{v?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode",String(v))},{immediate:!0}),localStorage.getItem("darkMode")==="true"&&(d.value=!0);function b(){d.value=!d.value}async function y(v){o.value=null,t.value=v,n.value=null;try{r.value=await o1(v)}catch{o.value="无法解码音频文件",t.value=null,r.value=null}}async function S(){if(r.value){o.value=null,s.value="processing",a.value=0,await Fh();try{n.value=await d1(r.value,v=>{a.value=v}),s.value="done"}catch(v){console.error("Processing error:",v),s.value="error",o.value="处理失败，请重试"}}}async function w(){try{i.value="downloading",await sb(),i.value="ready"}catch{i.value="error",o.value="模型加载失败"}}return _s(()=>{w()}),(v,T)=>(Qe(),tt("div",F2,[ae("header",q2,[ae("div",W2,[ae("div",V2,[T[4]||(T[4]=Zs('<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path></svg></div><div><h1 class="text-xl font-bold text-slate-900 dark:text-white">DeepFilterNet Web</h1><p class="text-xs text-slate-500 dark:text-slate-400">浏览器端音频降噪</p></div></div>',1)),ae("div",H2,[ae("nav",G2,[ae("button",{class:yr(["px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150",l.value==="home"?"bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"]),onClick:T[0]||(T[0]=k=>l.value="home")}," 首页 ",2),ae("button",{class:yr(["px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-150",l.value==="about"?"bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm":"text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"]),onClick:T[1]||(T[1]=k=>l.value="about")}," 关于 ",2)]),ae("button",{class:yr(["p-2.5 rounded-lg transition-colors",d.value?"bg-amber-100 dark:bg-amber-900/50 text-amber-600 hover:bg-amber-200 dark:hover:bg-amber-900":"bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600"]),onClick:b,title:d.value?"切换到亮色模式":"切换到深色模式"},[d.value?(Qe(),tt("svg",K2,[...T[2]||(T[2]=[ae("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])):(Qe(),tt("svg",X2,[...T[3]||(T[3]=[ae("path",{d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])]))],10,j2)])])])]),ae("main",Z2,[l.value==="home"?(Qe(),tt("div",Q2,[T[9]||(T[9]=ae("div",{class:"text-center py-2"},[ae("p",{class:"text-slate-500 dark:text-slate-400 text-sm"}," 纯浏览器端处理，保护隐私，无需上传服务器 ")],-1)),o.value?(Qe(),tt("div",Y2,[ae("div",J2,[T[5]||(T[5]=ae("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1)),ae("span",ex,Wt(o.value),1)])])):br("",!0),gt(M$,{onFileSelected:y}),r.value?(Qe(),tt(Et,{key:1},[ae("div",tx,[ae("div",rx,[ae("div",nx,[T[7]||(T[7]=ae("div",{class:"w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center"},[ae("span",{class:"text-sm"},"📄")],-1)),ae("div",null,[T[6]||(T[6]=ae("h3",{class:"text-sm font-semibold text-slate-700 dark:text-slate-200"},"原始音频",-1)),ae("p",ix,Wt(t.value?.name),1)])])]),gt(zd,{peaks:h.value,color:"#94a3b8","current-time":c.value?.currentTime,duration:r.value.duration,onSeek:()=>{}},null,8,["peaks","current-time","duration"])]),gt(Ad,{ref_key:"originalPlayerRef",ref:c,buffer:r.value,label:"原始音频"},null,8,["buffer"])],64)):br("",!0),ae("div",sx,[gt(V$,{status:s.value,disabled:!r.value||s.value==="processing",progress:a.value,onProcess:S},null,8,["status","disabled","progress"])]),n.value?(Qe(),tt(Et,{key:2},[ae("div",ax,[T[8]||(T[8]=Zs('<div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center"><span class="text-sm">✨</span></div><div><h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">降噪后音频</h3><p class="text-xs text-slate-400 dark:text-slate-500">处理完成</p></div></div></div>',1)),gt(zd,{peaks:g.value,color:"#22c55e","current-time":f.value?.currentTime,duration:n.value.duration,progress:1,onSeek:()=>{}},null,8,["peaks","current-time","duration"])]),gt(Ad,{ref_key:"processedPlayerRef",ref:f,buffer:n.value,label:"降噪后"},null,8,["buffer"])],64)):br("",!0)])):l.value==="about"?(Qe(),tt("div",ox,[...T[10]||(T[10]=[Zs('<div class="space-y-8"><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">项目简介</h2><p class="text-slate-600 dark:text-slate-300 leading-relaxed"> DeepFilterNet Web 是一个纯前端音频降噪工具，可以在浏览器中直接对音频进行降噪处理， 无需上传到服务器。所有处理都在本地完成，保护用户隐私。 </p></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">技术架构</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">⚡</div><div class="font-medium text-slate-900 dark:text-white">构建工具</div><div class="text-sm text-slate-500 dark:text-slate-400">Vite 5</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">💚</div><div class="font-medium text-slate-900 dark:text-white">前端框架</div><div class="text-sm text-slate-500 dark:text-slate-400">Vue 3.4</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">🎨</div><div class="font-medium text-slate-900 dark:text-white">样式框架</div><div class="text-sm text-slate-500 dark:text-slate-400">TailwindCSS</div></div><div class="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="text-3xl mb-2">🧠</div><div class="font-medium text-slate-900 dark:text-white">模型运行时</div><div class="text-sm text-slate-500 dark:text-slate-400">ONNX Runtime</div></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">处理流程</h2><div class="flex items-center justify-between gap-2"><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">1</span></div><p class="text-sm text-slate-600 dark:text-slate-300">上传音频</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">2</span></div><p class="text-sm text-slate-600 dark:text-slate-300">解码音频</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-blue-600 dark:text-blue-300 font-bold">3</span></div><p class="text-sm text-slate-600 dark:text-slate-300">模型推理</p></div><div class="flex-1 h-1.5 bg-gradient-to-r from-blue-200 to-green-300 dark:from-blue-700 dark:to-green-600 rounded-full"></div><div class="text-center flex-1"><div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2"><span class="text-green-600 dark:text-green-300 font-bold">4</span></div><p class="text-sm text-slate-600 dark:text-slate-300">下载结果</p></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">核心优势</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">🔒</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">隐私安全</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">音频不离开设备，无上传风险</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">📴</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">离线可用</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">模型缓存后无需网络</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">📂</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">开源透明</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">基于 DeepFilterNet 开源模型</p></div></div><div class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"><div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0"><span class="text-2xl">✨</span></div><div><h3 class="font-semibold text-slate-900 dark:text-white">现代体验</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">拖拽上传、实时波形、在线播放</p></div></div></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">内置模型</h2><div class="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-xl bg-blue-50/50 dark:bg-blue-900/20"><div class="flex items-center gap-2 mb-2"><span class="text-xl">🎯</span><h3 class="font-bold text-slate-900 dark:text-white">DeepFilterNet3 标准模型</h3></div><p class="text-sm text-slate-600 dark:text-slate-400">基于 DeepFilterNet3 优化的 ONNX 模型，适合通用音频降噪</p><p class="text-xs text-slate-400 dark:text-slate-500 mt-2">模型文件: enc.onnx + df_dec.onnx + erb_dec.onnx</p></div></section><section><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">致谢</h2><div class="flex flex-wrap gap-3"><a href="https://github.com/Rikorose/DeepFilterNet" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> DeepFilterNet </a><a href="https://onnxruntime.ai/" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> ONNX Runtime </a><a href="https://hf-mirror.com" target="_blank" class="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white text-sm"> HuggingFace Mirror </a></div></section></div>',1)])])):br("",!0)]),T[11]||(T[11]=ae("footer",{class:"text-center py-6 text-sm text-slate-400 dark:text-slate-500"},[ae("p",null,"Powered by DeepFilterNet + ONNX Runtime Web")],-1))]))}});I$(lx).mount("#app");
