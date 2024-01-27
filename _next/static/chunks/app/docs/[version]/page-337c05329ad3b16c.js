(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{3516:function(e,n,s){Promise.resolve().then(s.t.bind(s,1844,23)),Promise.resolve().then(s.bind(s,7065)),Promise.resolve().then(s.bind(s,914)),Promise.resolve().then(s.bind(s,4063)),Promise.resolve().then(s.bind(s,4303)),Promise.resolve().then(s.bind(s,9698))},7065:function(e,n,s){"use strict";s.r(n),s.d(n,{DocSearch:function(){return t}});var r=s(984),l=s(208);function t(){let[e,n]=(0,l.useState)(null);return((0,l.useEffect)(()=>{var e,s;let r=document.createElement("script"),l=document.getElementsByTagName("script")[0];r.src="https://cdn.jsdelivr.net/npm/docsearch.js@2.5.2/dist/cdn/docsearch.min.js",r.addEventListener("load",()=>{window.docsearch?(window.docsearch({apiKey:"83f61f865ef4cb682e0432410c2f7809",indexName:"immutable_js",inputSelector:"#algolia-docsearch"}),n(!0)):n(!1)},!1),null==l||null===(e=l.parentNode)||void 0===e||e.insertBefore(r,l);let t=document.createElement("link"),i=document.getElementsByTagName("link")[0];t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/docsearch.js@2.5.2/dist/cdn/docsearch.min.css",null==i||null===(s=i.parentNode)||void 0===s||s.insertBefore(t,i)},[]),!1===e)?null:(0,r.jsx)("input",{id:"algolia-docsearch",className:"docSearch",type:"search",placeholder:"Search Immutable.js Documentation",disabled:!e})}},4303:function(e,n,s){"use strict";s.r(n),s.d(n,{MarkdownContent:function(){return i}});var r=s(984),l=s(208),t=s(6665);let i=(0,l.memo)(function(e){let{contents:n,className:s}=e,l=(0,t.useRouter)();return(0,r.jsx)("div",{className:"markdown "+(s||""),onClick:e=>{let n=e.target;"A"===n.tagName&&"_blank"!==n.target&&(e.preventDefault(),l.push(n.href))},dangerouslySetInnerHTML:{__html:n}})})},9698:function(e,n,s){"use strict";s.r(n),s.d(n,{SideBar:function(){return o}});var r=s(984),l=s(346),t=s(208),i=s(4237);let c=e=>{let{isActive:n}=e;return(0,r.jsx)("svg",{viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:"10",height:"10",className:"sideBar__Arrow ".concat(n?"sideBar__Arrow--active":""),children:(0,r.jsx)("g",{transform:"translate(904.92214,-879.1482)",children:(0,r.jsx)("path",{d:" m -673.67664,1221.6502 -231.2455,-231.24803 55.6165, -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894, 0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892, -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696, -174.68583 0.6895,0 26.281,25.03215 56.8701, 55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864 -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688, -104.0616 -231.873,-231.248 z ",fill:"currentColor"})})})};function a(e){let{links:n,focus:s,showInGroups:i,showInherited:a}=e,[o,u]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{u(!1)},[null==s?void 0:s.label]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Immutable.js"}),n.map(e=>{let n=(null==s?void 0:s.label)===e.label,h=n&&!o;return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)("div",{className:"sideBar__Link ".concat(h?"sideBar__Link--active":""),children:(0,r.jsxs)(l.default,{href:e.url,onClick:e=>{n&&(e.preventDefault(),u(!o))},children:[e.label,h&&((null==s?void 0:s.interface)||(null==s?void 0:s.functions))&&(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(c,{isActive:h})]})]})}),h&&(0,r.jsx)(d,{focus:s,showInherited:a,showInGroups:i})]},e.url)})]})}function d(e){let{focus:n,showInGroups:s,showInherited:t}=e;return n&&(n.interface||n.functions)?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"members",children:[n.call&&(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{className:"groupTitle",children:"Construction"}),(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{href:n.call.url,children:n.call.label})})]}),n.functions&&(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{className:"groupTitle",children:"Static Methods"}),Object.values(n.functions).map(e=>(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{href:e.url,children:e.label})},e.id))]}),(0,r.jsx)("section",{children:(0,i.i)(n.interface,s,t).flatMap(e=>{let[n,s]=e;return 0===s.length?null:[(0,r.jsx)("h4",{className:"groupTitle",children:n||"Members"},n||"Members"),s.map(e=>(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{href:e.url,children:e.label})},e.id))]})})]})}):null}function o(e){let{links:n,focus:s,toggleShowInherited:l,toggleShowInGroups:t,showInherited:i,showInGroups:c}=e;return(0,r.jsxs)("div",{className:"sideBar",children:[(0,r.jsx)("div",{className:"sideBar__background"}),(0,r.jsxs)("div",{className:"scrollContent",children:[l&&t&&(0,r.jsxs)("div",{className:"toolBar",children:[(0,r.jsxs)("div",{onClick:t,onKeyPress:t,children:[(0,r.jsx)("span",{className:c?"selected":void 0,children:"Grouped"})," • ",(0,r.jsx)("span",{className:c?void 0:"selected",children:"Alphabetized"})]}),(0,r.jsxs)("div",{onClick:l,onKeyPress:l,children:[(0,r.jsx)("span",{className:i?"selected":void 0,children:"Inherited"})," • ",(0,r.jsx)("span",{className:i?void 0:"selected",children:"Defined"})]})]}),(0,r.jsx)(a,{links:n,focus:s,showInGroups:c,showInherited:i})]})]})}},4237:function(e,n,s){"use strict";function r(e,n,s){let r={},l=(null==e?void 0:e.members)?Object.values(e.members):[];for(let e of(n||l.sort((e,n)=>e.id>n.id?1:-1),l)){let l=n&&e.group||"";(s||!e.inherited)&&(r[l]||(r[l]=[])).push(e)}return Object.entries(r)}s.d(n,{i:function(){return r}})}},function(e){e.O(0,[555,15,115,69,744],function(){return e(e.s=3516)}),_N_E=e.O()}]);