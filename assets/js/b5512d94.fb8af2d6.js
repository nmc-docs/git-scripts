"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[178],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var h=n.createContext({}),c=function(t){var e=n.useContext(h),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=c(t.components);return n.createElement(h.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,h=t.parentName,o=l(t,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(h,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var h in e)hasOwnProperty.call(e,h)&&(l[h]=e[h]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2259:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:9},i="Git stash",l={unversionedId:"git-stash",id:"git-stash",title:"Git stash",description:"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra",source:"@site/docs/git-stash.md",sourceDirName:".",slug:"/git-stash",permalink:"/git-scripts/git-stash",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Di chuy\u1ec3n tr\u1ea1ng th\xe1i commit",permalink:"/git-scripts/commit-status-movement"}},h={},c=[{value:"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra",id:"v\u1ea5n-\u0111\u1ec1-\u0111\u1eb7t-ra",level:2},{value:"Hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3",id:"hi\u1ec3n-th\u1ecb-danh-s\xe1ch-c\xe1c-stash-hi\u1ec7n-c\xf3",level:2},{value:"L\u01b0u gi\u1eef m\u1ed9t stash",id:"l\u01b0u-gi\u1eef-m\u1ed9t-stash",level:2},{value:"Apply stash",id:"apply-stash",level:2},{value:"H\u1ee7y b\u1ecf apply stash",id:"h\u1ee7y-b\u1ecf-apply-stash",level:2},{value:"X\xf3a b\u1ecf stash",id:"x\xf3a-b\u1ecf-stash",level:2}],o={toc:c},p="wrapper";function u(t){let{components:e,...s}=t;return(0,r.kt)(p,(0,n.Z)({},o,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-stash"},"Git stash"),(0,r.kt)("h2",{id:"v\u1ea5n-\u0111\u1ec1-\u0111\u1eb7t-ra"},"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\xf4i khi ta \u0111ang code m\xe0 ch\u1ee3t ra ta \u0111ang code \u1edf nh\u1ea7m nh\xe1nh. Gi\u1edd n\u1ebfu t\u1ea1o m\u1ed9t nh\xe1nh m\u1edbi, hay di chuy\u1ec3n sang nh\xe1nh kh\xe1c th\xec to\xe0n b\u1ed9 c\xe1c file code thay \u0111\u1ed5i \u1edf ",(0,r.kt)("strong",{parentName:"li"},"Working directory")," ch\u01b0a \u0111\u01b0\u1ee3c commit c\xf3 th\u1ec3 s\u1ebd b\u1ecb m\u1ea5t ho\xe0n to\xe0n. Gi\u1edd l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 l\u01b0u gi\u1eef t\u1ea1m c\xe1c file code n\xe0y? \u0110\xf3 l\xe0 l\xfac ta s\u1ebd s\u1eed d\u1ee5ng l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"li"},"git stash")),(0,r.kt)("li",{parentName:"ul"},"L\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"li"},"git stash")," trong Git \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1m th\u1eddi l\u01b0u tr\u1eef (stash) c\xe1c thay \u0111\u1ed5i ch\u01b0a \u0111\u01b0\u1ee3c commit trong th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c hi\u1ec7n t\u1ea1i. Khi b\u1ea1n ch\u1ea1y ",(0,r.kt)("inlineCode",{parentName:"li"},"git stash"),", Git s\u1ebd t\u1ea1o m\u1ed9t stash m\u1edbi v\xe0 lo\u1ea1i b\u1ecf c\xe1c thay \u0111\u1ed5i ch\u01b0a \u0111\u01b0\u1ee3c commit kh\u1ecfi th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c. Stash s\u1ebd l\u01b0u tr\u1eef c\xe1c thay \u0111\u1ed5i n\xe0y \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 \xe1p d\u1ee5ng l\u1ea1i sau n\xe0y ho\u1eb7c chuy\u1ec3n \u0111\u1ed5i gi\u1eefa c\xe1c nh\xe1nh m\xe0 kh\xf4ng ph\u1ea3i commit nh\u1eefng thay \u0111\u1ed5i ch\u01b0a ho\xe0n th\xe0nh.")),(0,r.kt)("h2",{id:"hi\u1ec3n-th\u1ecb-danh-s\xe1ch-c\xe1c-stash-hi\u1ec7n-c\xf3"},"Hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash list\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1696264850282",src:a(3850).Z,width:"839",height:"95"})),(0,r.kt)("h2",{id:"l\u01b0u-gi\u1eef-m\u1ed9t-stash"},"L\u01b0u gi\u1eef m\u1ed9t stash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 t\u1ea1o m\u1ed9t stash cho vi\u1ec7c t\u1ea1m th\u1eddi l\u01b0u tr\u1eef c\xe1c thay \u0111\u1ed5i hi\u1ec7n t\u1ea1i ch\u01b0a \u0111\u01b0\u1ee3c commit, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash\n")),(0,r.kt)("h2",{id:"apply-stash"},"Apply stash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 apply m\u1ed9t stash c\u1ee5 th\u1ec3 ch\u1ee9a c\xe1c thay \u0111\u1ed5i v\xe0o nh\xe1nh hi\u1ec7n t\u1ea1i, ta d\xf9ng l\u1ec7nh sau:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash apply stash@{0,1,2,...}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 apply stash cu\u1ed1i c\xf9ng trong Stash list v\xe0 x\xf3a n\xf3 kh\u1ecfi Stash list sau khi apply xong, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash pop\n")),(0,r.kt)("h2",{id:"h\u1ee7y-b\u1ecf-apply-stash"},"H\u1ee7y b\u1ecf apply stash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 h\u1ee7y b\u1ecf apply m\u1ed9t stash, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -f\n")),(0,r.kt)("h2",{id:"x\xf3a-b\u1ecf-stash"},"X\xf3a b\u1ecf stash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 x\xf3a b\u1ecf m\u1ed9t stash c\u1ee5 th\u1ec3, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash drop stash@{0,1,2,3,...}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 x\xf3a b\u1ecf stash cu\u1ed1i c\xf9ng trong stash list, ta d\xf9ng l\u1ec7nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git stash drop\n")))}u.isMDXComponent=!0},3850:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1696264850282-9b67bc4d28de9174e1322a39d861e155.png"}}]);