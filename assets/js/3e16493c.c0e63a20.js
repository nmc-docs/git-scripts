"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[837],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>p});var r=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=r.createContext({}),g=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},u=function(t){var n=g(t.components);return r.createElement(c.Provider,{value:n},t.children)},h="mdxType",s={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),h=g(e),m=i,p=h["".concat(c,".").concat(m)]||h[m]||s[m]||a;return e?r.createElement(p,l(l({ref:n},u),{},{components:e})):r.createElement(p,l({ref:n},u))}));function p(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var a=e.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=t,o[h]="string"==typeof t?t:i,l[1]=o;for(var g=2;g<a;g++)l[g]=e[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},5162:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var r=e(7462),i=(e(7294),e(3905));const a={sidebar_position:2},l="C\u1ea5u h\xecnh user cho git",o={unversionedId:"git-config-user",id:"git-config-user",title:"C\u1ea5u h\xecnh user cho git",description:"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?",source:"@site/docs/git-config-user.md",sourceDirName:".",slug:"/git-config-user",permalink:"/git-scripts/git-config-user",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u chung",permalink:"/git-scripts/"},next:{title:"Kh\u1edfi t\u1ea1o git cho project",permalink:"/git-scripts/git-initialization"}},c={},g=[{value:"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?",id:"c\u1ea5u-h\xecnh-user-trong-git-\u0111\u1ec3-l\xe0m-g\xec",level:2},{value:"Xem th\xf4ng tin user trong git",id:"xem-th\xf4ng-tin-user-trong-git",level:2},{value:"C\xe1ch \u0111\u1ec3 c\u1ea5u h\xecnh user trong git",id:"c\xe1ch-\u0111\u1ec3-c\u1ea5u-h\xecnh-user-trong-git",level:2}],u={toc:g},h="wrapper";function s(t){let{components:n,...e}=t;return(0,i.kt)(h,(0,r.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"c\u1ea5u-h\xecnh-user-cho-git"},"C\u1ea5u h\xecnh user cho git"),(0,i.kt)("h2",{id:"c\u1ea5u-h\xecnh-user-trong-git-\u0111\u1ec3-l\xe0m-g\xec"},"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C\u1ea5u h\xecnh ng\u01b0\u1eddi d\xf9ng trong Git l\xe0 qu\xe1 tr\xecnh thi\u1ebft l\u1eadp th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a ng\u01b0\u1eddi s\u1eed d\u1ee5ng, gi\xfap x\xe1c \u0111\u1ecbnh ai \u0111\xe3 th\u1ef1c hi\u1ec7n m\u1ed9t s\u1ed1 thay \u0111\u1ed5i trong d\u1ef1 \xe1n. Th\xf4ng tin n\xe0y bao g\u1ed3m t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email c\u1ee7a ng\u01b0\u1eddi d\xf9ng. C\xe1c t\xe1c d\u1ee5ng ch\xednh c\u1ee7a vi\u1ec7c c\u1ea5u h\xecnh ng\u01b0\u1eddi d\xf9ng trong Git bao g\u1ed3m:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"X\xe1c \u0111\u1ecbnh ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n thay \u0111\u1ed5i:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Khi b\u1ea1n commit m\u1ed9t thay \u0111\u1ed5i v\xe0o m\u1ed9t repository Git, th\xf4ng tin v\u1ec1 ng\u01b0\u1eddi commit (t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email) s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef. \u0110i\u1ec1u n\xe0y gi\xfap x\xe1c \u0111\u1ecbnh ai \u0111\xe3 th\u1ef1c hi\u1ec7n m\u1ed9t s\u1ed1 thay \u0111\u1ed5i c\u1ee5 th\u1ec3 trong l\u1ecbch s\u1eed c\u1ee7a d\u1ef1 \xe1n."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Li\xean k\u1ebft v\u1edbi t\xe0i kho\u1ea3n Git:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Khi b\u1ea1n c\u1ea5u h\xecnh t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email trong Git, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng th\xf4ng tin n\xe0y t\u01b0\u01a1ng th\xedch v\u1edbi t\xe0i kho\u1ea3n Git c\u1ee7a b\u1ea1n. \u0110i\u1ec1u n\xe0y quan tr\u1ecdng khi b\u1ea1n l\xe0m vi\u1ec7c v\u1edbi c\xe1c d\u1ef1 \xe1n c\xf3 nhi\u1ec1u ng\u01b0\u1eddi \u0111\xf3ng g\xf3p, v\xe0 n\xf3 gi\xfap \u0111\u1ea3m b\u1ea3o t\xednh minh b\u1ea1ch trong qu\xe1 tr\xecnh theo d\xf5i ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n thay \u0111\u1ed5i."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Truy\u1ec1n th\xf4ng th\xf4ng tin li\xean quan \u0111\u1ebfn d\u1ef1 \xe1n:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Th\xf4ng tin v\u1ec1 ng\u01b0\u1eddi commit th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd m\xe3 ngu\u1ed3n v\xe0 c\xe1c d\u1ecbch v\u1ee5 li\xean quan \u0111\u1ec3 theo d\xf5i v\xe0 hi\u1ec3n th\u1ecb l\u1ecbch s\u1eed thay \u0111\u1ed5i. \u0110i\u1ec1u n\xe0y gi\xfap qu\u1ea3n tr\u1ecb d\u1ef1 \xe1n v\xe0 nh\xf3m ph\xe1t tri\u1ec3n theo d\xf5i ai \u0111\xe3 l\xe0m g\xec v\xe0 khi n\xe0o.")))),(0,i.kt)("h2",{id:"xem-th\xf4ng-tin-user-trong-git"},"Xem th\xf4ng tin user trong git"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 xem th\xf4ng tin user \u1edf ",(0,i.kt)("strong",{parentName:"li"},"global")," (\xe1p d\u1ee5ng cho to\xe0n b\u1ed9 c\xe1c th\u01b0 m\u1ee5c d\u1ef1 \xe1n tr\xean m\xe1y), ta g\xf5 l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config -l --global\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Th\xf4ng tin user m\xe0 \u0111\xe3 \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t ",(0,i.kt)("strong",{parentName:"p"},"global")," s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u \u1edf trong file ",(0,i.kt)("inlineCode",{parentName:"p"},".gitconfig")," \u1edf \u0111\u01b0\u1eddng d\u1eabn g\u1ed1c (v\xed d\u1ee5 nh\u01b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\MINH CHI\\.gitconfig"),")")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 xem th\xf4ng tin user \u1edf ",(0,i.kt)("strong",{parentName:"li"},"local")," (t\u1ee9c l\xe0 trong 1 project c\u1ee5 th\u1ec3), ta v\xe0o th\u01b0 m\u1ee5c d\u1ef1 \xe1n v\xe0 d\xf9ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config user.email && git config user.name\n")),(0,i.kt)("h2",{id:"c\xe1ch-\u0111\u1ec3-c\u1ea5u-h\xecnh-user-trong-git"},"C\xe1ch \u0111\u1ec3 c\u1ea5u h\xecnh user trong git"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 thi\u1ebft l\u1eadp th\xf4ng tin user \u1edf ",(0,i.kt)("strong",{parentName:"li"},"global"),", ta d\xf9ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.email "your_global_email@abc.example"\ngit config --global user.name "Your global username"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 thi\u1ebft l\u1eadp th\xf4ng tin user \u1edf ",(0,i.kt)("strong",{parentName:"li"},"local"),", ta v\xe0o th\u01b0 m\u1ee5c d\u1ef1 \xe1n v\xe0 d\xf9ng l\u1ec7nh:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git config user.email "your_local_email@abc.example"\ngit config user.name "Your local username"\n')))}s.isMDXComponent=!0}}]);