"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[426],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(n),g=i,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:11},a="Git log",c={unversionedId:"git-log",id:"git-log",title:"Git log",description:"- Ta s\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 xem t\u1ea5t c\u1ea3 c\xe1c commit cho \u0111\u1ebfn tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i m\xe0 con tr\u1ecf HEAD \u0111ang tr\u1ecf \u0111\u1ebfn, th\xf4ng tin m\u1ed7i commit s\u1ebd hi\u1ec3n th\u1ecb tr\xean m\u1ed9t d\xf2ng:",source:"@site/docs/git-log.md",sourceDirName:".",slug:"/git-log",permalink:"/git-scripts/git-log",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Git stash",permalink:"/git-scripts/git-stash"}},l={},s=[],p={toc:s},m="wrapper";function u(t){let{components:e,...o}=t;return(0,i.kt)(m,(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-log"},"Git log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ta s\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 xem t\u1ea5t c\u1ea3 c\xe1c commit cho \u0111\u1ebfn tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i m\xe0 con tr\u1ecf HEAD \u0111ang tr\u1ecf \u0111\u1ebfn, th\xf4ng tin m\u1ed7i commit s\u1ebd hi\u1ec3n th\u1ecb tr\xean m\u1ed9t d\xf2ng:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git log --oneline\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1700066732125",src:n(1658).Z,width:"512",height:"276"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N\u1ebfu mu\u1ed1n xem th\xf4ng tin chi ti\u1ebft c\u1ee7a commit, ta s\u1eed d\u1ee5ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git show <commit_hash>\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"L\u01b0u \xfd: s\u1eed d\u1ee5ng t\u1eeb 4 k\xfd t\u1ef1 tr\u1edf l\xean cho m\xe3 commit hash"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1700066780706",src:n(5709).Z,width:"543",height:"379"})))}u.isMDXComponent=!0},1658:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1700066732125-c39fd822fe29b6ec76cd9cf8820ff096.png"},5709:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1700066780706-4c95a7bae82b0f81071ab77d15eeb1c7.png"}}]);