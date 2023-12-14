"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),h=o,g=b["".concat(a,".").concat(h)]||b[h]||d[h]||u;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=h;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[b]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<u;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const u={sidebar_position:1,slug:"/"},i="Gi\u1edbi thi\u1ec7u chung",c={unversionedId:"overview",id:"overview",title:"Gi\u1edbi thi\u1ec7u chung",description:"- C\xe2u l\u1ec7nh git l\xe0 nh\u1eefng c\xe2u l\u1ec7nh \u0111\u1ec3 qu\u1ea3n l\xfd m\xe3 ngu\u1ed3n (source code)",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/git-scripts/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"C\u1ea5u h\xecnh user cho git",permalink:"/git-scripts/git-config-user"}},a={},l=[],s={toc:l},b="wrapper";function d(e){let{components:t,...u}=e;return(0,o.kt)(b,(0,n.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gi\u1edbi-thi\u1ec7u-chung"},"Gi\u1edbi thi\u1ec7u chung"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh git l\xe0 nh\u1eefng c\xe2u l\u1ec7nh \u0111\u1ec3 qu\u1ea3n l\xfd m\xe3 ngu\u1ed3n (source code)"),(0,o.kt)("li",{parentName:"ul"},"Tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng nh\u1eefng l\u1ec7nh git, \u0111\u1ea3m b\u1ea3o h\xe3y c\xe0i git b\u1eb1ng c\xe1ch g\xf5 l\u1ec7nh sau \u1edf cmd:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git -v\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1696262200980",src:r(2783).Z,width:"402",height:"78"})),(0,o.kt)("p",null,"=> N\u1ebfu hi\u1ec3n th\u1ecb nh\u01b0 tr\xean \u1ea3nh th\xec \u0111\xe3 c\xe0i git"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"B\u01b0\u1edbc \u0111\u1ea7u v\xe0o nh\u1eefng c\xe2u l\u1ec7nh Git c\u01a1 b\u1ea3n, ta c\u1ea7n ph\u1ea3i bi\u1ebft 2 thu\u1eadt ng\u1eef sau:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote repository")," : Kho qu\u1ea3n l\xfd source code t\u1eeb xa (nh\u01b0 github, gitlab,..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local repository")," : Kho qu\u1ea3n l\xfd source code \u1edf local (nh\u01b0 \u1edf vscode)")))))}d.isMDXComponent=!0},2783:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);