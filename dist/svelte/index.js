function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function h(t){m=t}const p=[],$=[],g=[],y=[],_=Promise.resolve();let b=!1;function x(t){g.push(t)}let v=!1;const C=new Set;function k(){if(!v){v=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];h(n),E(n.$$)}for(h(null),p.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];C.has(n)||(C.add(n),n())}g.length=0}while(p.length);for(;y.length;)y.pop()();b=!1,v=!1,C.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const N=new Set;function w(t,n){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,_.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(a,c,u,s,f,l,d=[-1]){const p=m;h(a);const $=c.props||{},g=a.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let y=!1;if(g.ctx=u?u(a,$,((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&w(a,t)),n})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();c.intro&&((_=a.$$.fragment)&&_.i&&(N.delete(_),_.i(b))),function(t,e,a){const{fragment:c,on_mount:u,on_destroy:i,after_update:s}=t.$$;c&&c.m(e,a),x((()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(x)}(a,c.target,c.anchor),k()}var _,b;h(p)}function T(n){let e,o,r,a,m,h,p,$,g,y,_,b,x,v,C,k;return{c(){e=s("h1"),e.textContent="Svelte",o=f("\nCurrent name is\n"),r=s("code"),a=f(n[0]),m=l(),h=s("label"),p=f("Type to change name "),$=s("input"),g=l(),y=s("p"),_=f("Changed internally "),b=s("code"),x=f(n[1]),v=f(" times"),$.value=n[0]},m(t,i){var s,f,l,d;u(t,e,i),u(t,o,i),u(t,r,i),c(r,a),u(t,m,i),u(t,h,i),c(h,p),c(h,$),u(t,g,i),u(t,y,i),c(y,_),c(y,b),c(b,x),c(y,v),C||(s=$,f="input",l=n[2],s.addEventListener(f,l,d),k=()=>s.removeEventListener(f,l,d),C=!0)},p(t,[n]){1&n&&d(a,t[0]),1&n&&$.value!==t[0]&&($.value=t[0]),2&n&&d(x,t[1])},i:t,o:t,d(t){t&&i(e),t&&i(o),t&&i(r),t&&i(m),t&&i(h),t&&i(g),t&&i(y),C=!1,k()}}}function j(t,n,e){let{name:o}=n,{onNameChange:r}=n,a=0;return t.$$set=t=>{"name"in t&&e(0,o=t.name),"onNameChange"in t&&e(3,r=t.onNameChange)},[o,a,function(t){const n=t.currentTarget;e(1,a++,a),r(n.value)},r]}class O extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,j,T,a,{name:0,onNameChange:3})}}const L=document.createElement("div");let q;const A=({state:t,setState:n})=>{q||(q=new O({target:L})),q.$set({name:t.name,onNameChange:t=>n({name:t})})};export{A as render,L as root};
//# sourceMappingURL=index.js.map