import{s as K,f as W,n as j}from"../chunks/scheduler.D3hV8Tfu.js";import{S as L,i as R,e as p,s as y,t as I,c as _,a as z,d as u,f as E,b as V,o as h,p as S,g as A,h as f,j as Z,z as T,n as H,m as X,l as q,A as J,u as O,v as Q,w as U,x as $,q as ee}from"../chunks/index.D_u873zA.js";function Y(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function te(r){let t,i,s,c,m,l,e,w,a,o,n,g,M,x,D;return{c(){t=p("div"),i=p("div"),s=p("img"),m=y(),l=p("div"),e=p("p"),w=I(r[1]),a=y(),o=p("p"),n=I(r[2]),g=y(),M=p("div"),x=p("p"),D=I(r[3]),this.h()},l(v){t=_(v,"DIV",{class:!0});var d=z(t);i=_(d,"DIV",{style:!0});var B=z(i);s=_(B,"IMG",{class:!0,src:!0,alt:!0}),B.forEach(u),m=E(d),l=_(d,"DIV",{class:!0});var b=z(l);e=_(b,"P",{class:!0});var k=z(e);w=V(k,r[1]),k.forEach(u),a=E(b),o=_(b,"P",{class:!0});var F=z(o);n=V(F,r[2]),F.forEach(u),b.forEach(u),g=E(d),M=_(d,"DIV",{class:!0});var G=z(M);x=_(G,"P",{});var P=z(x);D=V(P,r[3]),P.forEach(u),G.forEach(u),d.forEach(u),this.h()},h(){h(s,"class","card_ristorante__img svelte-42s0s6"),W(s.src,c=r[0])||h(s,"src",c),h(s,"alt","Copertina del piatto"),S(i,"overflow-y","hidden"),h(e,"class","card_ristorante__prezzo svelte-42s0s6"),h(o,"class","card_ristorante__piatto svelte-42s0s6"),h(l,"class","card_ristorante__desc svelte-42s0s6"),h(M,"class","card_ristorante__footer svelte-42s0s6"),h(t,"class","card_ristorante svelte-42s0s6")},m(v,d){A(v,t,d),f(t,i),f(i,s),f(t,m),f(t,l),f(l,e),f(e,w),f(l,a),f(l,o),f(o,n),f(t,g),f(t,M),f(M,x),f(x,D)},p(v,[d]){d&1&&!W(s.src,c=v[0])&&h(s,"src",c),d&2&&Z(w,v[1]),d&4&&Z(n,v[2]),d&8&&Z(D,v[3])},i:j,o:j,d(v){v&&u(t)}}}function se(r,t,i){let{immagine:s}=t,{prezzo:c}=t,{piatto:m}=t,{ristorante:l}=t;return r.$$set=e=>{"immagine"in e&&i(0,s=e.immagine),"prezzo"in e&&i(1,c=e.prezzo),"piatto"in e&&i(2,m=e.piatto),"ristorante"in e&&i(3,l=e.ristorante)},[s,c,m,l]}class ae extends L{constructor(t){super(),R(this,t,se,te,K,{immagine:0,prezzo:1,piatto:2,ristorante:3})}}function C(r,t,i){const s=r.slice();return s[0]=t[i],s}function N(r){let t,i;return t=new ae({props:{immagine:r[0].immagine,prezzo:r[0].prezzo,piatto:r[0].piatto,ristorante:r[0].ristorante}}),{c(){O(t.$$.fragment)},l(s){Q(t.$$.fragment,s)},m(s,c){U(t,s,c),i=!0},p:j,i(s){i||(H(t.$$.fragment,s),i=!0)},o(s){q(t.$$.fragment,s),i=!1},d(s){$(t,s)}}}function re(r){let t,i,s,c,m,l=Y(r[0]),e=[];for(let a=0;a<l.length;a+=1)e[a]=N(C(r,l,a));const w=a=>q(e[a],1,1,()=>{e[a]=null});return{c(){t=p("link"),i=p("link"),s=y(),c=p("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){const o=T("svelte-k493d",document.head);t=_(o,"LINK",{rel:!0,href:!0}),i=_(o,"LINK",{href:!0,rel:!0}),o.forEach(u),s=E(a),c=_(a,"DIV",{style:!0});var n=z(c);for(let g=0;g<e.length;g+=1)e[g].l(n);n.forEach(u),this.h()},h(){h(t,"rel","stylesheet"),h(t,"href","https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css"),h(i,"href","https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"),h(i,"rel","stylesheet"),S(c,"display","flex")},m(a,o){f(document.head,t),f(document.head,i),A(a,s,o),A(a,c,o);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(c,null);m=!0},p(a,[o]){if(o&1){l=Y(a[0]);let n;for(n=0;n<l.length;n+=1){const g=C(a,l,n);e[n]?(e[n].p(g,o),H(e[n],1)):(e[n]=N(g),e[n].c(),H(e[n],1),e[n].m(c,null))}for(ee(),n=l.length;n<e.length;n+=1)w(n);X()}},i(a){if(!m){for(let o=0;o<l.length;o+=1)H(e[o]);m=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)q(e[o]);m=!1},d(a){a&&(u(s),u(c)),u(t),u(i),J(e,a)}}}function ne(r){return[[{immagine:"https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",prezzo:"12€",piatto:"sadasdasda",ristorante:"sasasd"},{immagine:"https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",prezzo:"15€",piatto:"asdasuajdadas",ristorante:"sfafasfas"},{immagine:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fHww",prezzo:"11€",piatto:"jdajncsascx",ristorante:"dasfafvc"}]]}class le extends L{constructor(t){super(),R(this,t,ne,re,K,{})}}export{le as component};
