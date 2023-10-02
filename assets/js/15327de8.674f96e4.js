"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[707],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,a(a({ref:e},s),{},{components:n})):r.createElement(h,a({ref:e},s))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Git clone",c={unversionedId:"git-clone",id:"git-clone",title:"Git clone",description:"C\xfa ph\xe1p",source:"@site/docs/git-clone.md",sourceDirName:".",slug:"/git-clone",permalink:"/git-scripts/git-clone",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Qu\u1ea3n l\xfd file v\xe0 \u0111\u1ea9y code l\xean remote trong git",permalink:"/git-scripts/files-management-and-push-code"},next:{title:"L\xe0m vi\u1ec7c v\u1edbi nh\xe1nh (branch)",permalink:"/git-scripts/branch"}},l={},p=[{value:"C\xfa ph\xe1p",id:"c\xfa-ph\xe1p",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}],s={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-clone"},"Git clone"),(0,o.kt)("h2",{id:"c\xfa-ph\xe1p"},"C\xfa ph\xe1p"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <URL_kho_luu_tru>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"L\u1ec7nh ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 sao ch\xe9p m\u1ed9t kho l\u01b0u tr\u1eef Git t\u1eeb m\u1ed9t kho l\u01b0u tr\u1eef t\u1eeb xa (remote repository) v\xe0o m\xe1y t\xednh c\xe1 nh\xe2n (local repository). Th\u01b0\u1eddng th\xec b\u1ea1n s\u1ebd s\u1eed d\u1ee5ng l\u1ec7nh n\xe0y \u0111\u1ec3 b\u1eaft \u0111\u1ea7u l\xe0m vi\u1ec7c tr\xean m\u1ed9t d\u1ef1 \xe1n ho\u1eb7c \u0111\u1ec3 l\xe0m vi\u1ec7c v\u1edbi m\u1ed9t kho l\u01b0u tr\u1eef \u0111\xe3 t\u1ed3n t\u1ea1i tr\xean m\xe1y t\xednh c\u1ee7a b\u1ea1n.")),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/minhchi1509/git-tutorial.git\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"L\u1ec7nh n\xe0y s\u1ebd sao ch\xe9p kho l\u01b0u tr\u1eef t\u1eeb xa t\u1eeb GitHub v\xe0o th\u01b0 m\u1ee5c ",(0,o.kt)("inlineCode",{parentName:"p"},"git-tutorial")," tr\xean m\xe1y t\xednh c\u1ee7a b\u1ea1n."),(0,o.kt)("p",{parentName:"admonition"},"Khi b\u1ea1n s\u1eed d\u1ee5ng ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone"),", b\u1ea1n s\u1ebd c\xf3 m\u1ed9t b\u1ea3n sao \u0111\u1ecba ph\u01b0\u01a1ng c\u1ee7a kho l\u01b0u tr\u1eef t\u1eeb xa, v\xe0 b\u1ea1n c\xf3 th\u1ec3 l\xe0m vi\u1ec7c tr\xean d\u1ef1 \xe1n \u0111\xf3 v\xe0 th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c Git nh\u01b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"git push"),", v\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit")," tr\xean d\u1ef1 \xe1n \u0111\xf3.")))}m.isMDXComponent=!0}}]);