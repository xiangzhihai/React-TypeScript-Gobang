(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),a=n.n(r),i=n(8),s=n.n(i),u=(n(18),n(3)),l=n(4);var j=function(e){return Object(c.jsx)("button",{className:"square",onClick:function(){return e.onClick()},children:e.value})},o=function(e){return Object(c.jsx)("div",{children:Object(u.a)(new Array(15).keys()).map((function(t){return n=15*t,Object(c.jsx)("div",{className:"board-row",children:Object(u.a)(new Array(15).keys()).map((function(t){return Object(c.jsx)(j,{value:e.squares[t+n],onClick:function(){return e.onClick(t+n)}},t+n)}))},n);var n}))})},b=n(9);n(22);var O=function(){var e=Object(r.useState)([new Array(225).fill(null)]),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!0),s=Object(l.a)(i,2),j=s[0],O=s[1],d=Object(r.useState)(null),f=Object(l.a)(d,2),h=f[0],v=f[1],m=Object(r.useState)(0),x=Object(l.a)(m,2),p=x[0],g=x[1],k=Object(r.useState)(null),y=Object(l.a)(k,2),C=y[0],w=y[1],S=n.map((function(e,t){var n=t?"Go to move #"+t:"Go to game start";return Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return function(e){g(e),O(e%2===0),e!==p&&h?(w({step:p,winner:h}),v(null)):C&&e===C.step&&v(C.winner)}(t)},children:n})},t)})),N=h?"Winner: "+h:"Next Player: "+(j?"O":"X");return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"Gobang"})]}),Object(c.jsx)("div",{className:"game-board",children:Object(c.jsx)(o,{squares:n[p],onClick:function(e){var t=n.slice(0,p+1),c=Object(u.a)(t[t.length-1]);if(!c[e]&&!h){c[e]=j?"X":"O",a([].concat(Object(u.a)(t),[c])),O(!j);var r=function(e,t){var n=t%15,c=Math.floor(t/15),r=e[t],a=function t(n,c,a,i){return n&&15!==n&&c&&15!==c&&e[15*c+n]===r?1+t(n+a,c+i,a,i):0};return a(n,c,1,0)+a(n,c,-1,0)>5||a(n,c,0,1)+a(n,c,0,-1)>5||a(n,c,1,1)+a(n,c,-1,-1)>5||a(n,c,-1,1)+a(n,c,1,-1)>5?r:null}(c,e);v(r),g(t.length),w(null)}}})}),Object(c.jsxs)("div",{className:"game-info",children:[Object(c.jsx)("div",{children:N}),Object(c.jsx)("div",{children:S})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),d()}},[[23,1,2]]]);
//# sourceMappingURL=main.ee7e7e55.chunk.js.map