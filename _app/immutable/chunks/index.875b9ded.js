function b(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function bt(t,e,n,i,r){t.__svelte_meta={loc:{file:e,line:n,column:i,char:r}}}function L(t){return t()}function P(){return Object.create(null)}function $(t){t.forEach(L)}function N(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function vt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function X(t){return Object.keys(t).length===0}function $t(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function Z(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function xt(t,e,n,i){if(t){const r=I(t,e,n,i);return t[0](r)}}function I(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],o=Math.max(e.dirty.length,r.length);for(let c=0;c<o;c+=1)a[c]=e.dirty[c]|r[c];return a}return e.dirty|r}return e.dirty}function St(t,e,n,i,r,a){if(r){const o=I(e,n,i,a);t.p(o,r)}}function Dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ot(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function At(t){return t&&N(t.destroy)?t.destroy:b}const R=typeof window<"u";let jt=R?()=>window.performance.now():()=>Date.now(),z=R?t=>requestAnimationFrame(t):b;const p=new Set;function B(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&z(B)}function Nt(t){let e;return p.size===0&&z(B),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}let S=!1;function tt(){S=!0}function et(){S=!1}function nt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:nt(1,r,w=>e[n[w]].claim_order,u))-1;i[s]=n[f]+1;const l=f+1;n[l]=s,r=Math.max(l,r)}const a=[],o=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(a.push(e[s-1]);c>=s;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);a.reverse(),o.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<o.length;s++){for(;u<a.length&&o[s].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(o[s],f)}}function H(t,e){if(S){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function rt(t,e,n){S&&!n?H(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function Ct(){return M(" ")}function Tt(){return M("")}function ct(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Pt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e){for(const n in e)W(t,n,e[n])}function Lt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function at(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,i,r=!1){ut(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function G(t,e,n,i){return Y(t,r=>r.nodeName===e,r=>{const a=[];for(let o=0;o<r.attributes.length;o++){const c=r.attributes[o];n[c.name]||a.push(c.name)}a.forEach(o=>r.removeAttribute(o))},()=>i(e))}function It(t,e,n){return G(t,e,n,ot)}function Rt(t,e,n){return G(t,e,n,st)}function lt(t,e){return Y(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function zt(t){return lt(t," ")}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ht(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ft(t){const e=t.querySelector(":checked");return e&&e.__value}function Wt(t,e,n){t.classList[n?"add":"remove"](e)}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const a=r.textContent.trim();a===`HEAD_${t}_END`?(i-=1,n.push(r)):a===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let v;function g(t){v=t}function D(){if(!v)throw new Error("Function called outside component initialization");return v}function Gt(t){D().$$.on_mount.push(t)}function Jt(t){D().$$.after_update.push(t)}function Kt(){const t=D();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=J(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,a)}),!a.defaultPrevented}return!0}}function Qt(t,e){return D().$$.context.set(t,e),e}const m=[],q=[];let y=[];const k=[],K=Promise.resolve();let A=!1;function Q(){A||(A=!0,K.then(U))}function Ut(){return Q(),K}function j(t){y.push(t)}function Vt(t){k.push(t)}const O=new Set;let h=0;function U(){if(h!==0)return;const t=v;do{try{for(;h<m.length;){const e=m[h];h++,g(e),ft(e.$$)}}catch(e){throw m.length=0,h=0,e}for(g(null),m.length=0,h=0;q.length;)q.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];O.has(n)||(O.add(n),n())}y.length=0}while(m.length);for(;k.length;)k.pop()();A=!1,O.clear(),g(t)}function ft(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function dt(t){const e=[],n=[];y.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),y=e}const E=new Set;let _;function Xt(){_={r:0,c:[],p:_}}function Zt(){_.r||$(_.c),_=_.p}function _t(t,e){t&&t.i&&(E.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ne(t,e){const n={},i={},r={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const s in o)s in c||(i[s]=1);for(const s in c)r[s]||(n[s]=c[s],r[s]=1);t[a]=c}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ie(t){return typeof t=="object"&&t!==null?t:{}}function re(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function oe(t){t&&t.c()}function se(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||j(()=>{const o=t.$$.on_mount.map(L).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...o):$(o),t.$$.on_mount=[]}),a.forEach(j)}function mt(t,e){const n=t.$$;n.fragment!==null&&(dt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(m.push(t),Q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,i,r,a,o,c=[-1]){const s=v;g(t);const u=t.$$={fragment:null,ctx:[],props:a,update:b,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:P(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(l,w,...C)=>{const T=C.length?C[0]:w;return u.ctx&&r(u.ctx[l],u.ctx[l]=T)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](T),f&&pt(t,l)),w}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){tt();const l=at(e.target);u.fragment&&u.fragment.l(l),l.forEach(F)}else u.fragment&&u.fragment.c();e.intro&&_t(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),et(),U()}g(s)}class yt{$destroy(){mt(this,1),this.$destroy=b}$on(e,n){if(!N(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function d(t,e){document.dispatchEvent(J(t,Object.assign({version:"3.58.0"},e),{bubbles:!0}))}function ae(t,e){d("SvelteDOMInsert",{target:t,node:e}),H(t,e)}function ue(t,e,n){d("SvelteDOMInsert",{target:t,node:e,anchor:n}),rt(t,e,n)}function le(t){d("SvelteDOMRemove",{node:t}),F(t)}function fe(t,e,n,i,r,a,o){const c=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&c.push("preventDefault"),a&&c.push("stopPropagation"),o&&c.push("stopImmediatePropagation"),d("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:c});const s=ct(t,e,n,i);return()=>{d("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:c}),s()}}function de(t,e,n){W(t,e,n),n==null?d("SvelteDOMRemoveAttribute",{node:t,attribute:e}):d("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function _e(t,e){e=""+e,t.data!==e&&(d("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function he(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function me(t,e,n){for(const i of Object.keys(e))~n.indexOf(i)||console.warn(`<${t}> received an unexpected slot "${i}".`)}function pe(t,e){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new t(e);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class ye extends yt{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}export{Mt as $,_e as A,Xt as B,oe as C,se as D,ht as E,mt as F,xt as G,St as H,Dt as I,Et as J,$t as K,wt as L,ae as M,b as N,st as O,Rt as P,V as Q,kt as R,ye as S,Ot as T,qt as U,Wt as V,ne as W,ee as X,ie as Y,he as Z,re as _,Jt as a,Vt as a0,Kt as a1,fe as a2,At as a3,N as a4,$ as a5,jt as a6,Nt as a7,Pt as a8,Z as a9,Lt as aa,Yt as ab,vt as ac,j as ad,Ht as ae,Ft as af,Qt as b,Ct as c,d,Tt as e,zt as f,ue as g,te as h,ce as i,Zt as j,_t as k,le as l,q as m,pe as n,Gt as o,ot as p,It as q,at as r,gt as s,Ut as t,de as u,me as v,Bt as w,bt as x,M as y,lt as z};
