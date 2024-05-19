"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[301],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>u});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),m=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},h=function(t){var e=m(t.components);return i.createElement(l.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,h=a(t,["components","mdxType","originalType","parentName"]),p=m(n),s=r,u=p["".concat(l,".").concat(s)]||p[s]||g[s]||o;return n?i.createElement(u,c(c({ref:e},h),{},{components:n})):i.createElement(u,c({ref:e},h))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=s;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[p]="string"==typeof t?t:r,c[1]=a;for(var m=2;m<o;m++)c[m]=n[m];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5927:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:11},c="Git log / Git reflog",a={unversionedId:"git-log-reflog",id:"git-log-reflog",title:"Git log / Git reflog",description:"Git log",source:"@site/docs/git-log-reflog.md",sourceDirName:".",slug:"/git-log-reflog",permalink:"/git-scripts/git-log-reflog",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Git stash",permalink:"/git-scripts/git-stash"}},l={},m=[{value:"Git log",id:"git-log",level:2},{value:"Xem th\xf4ng tin t\u1ea5t c\u1ea3 c\xe1c commit",id:"xem-th\xf4ng-tin-t\u1ea5t-c\u1ea3-c\xe1c-commit",level:3},{value:"So s\xe1nh l\u1ecbch s\u1eed commit \u1edf remote repository v\u1edbi con tr\u1ecf HEAD hi\u1ec7n t\u1ea1i \u1edf local repository",id:"so-s\xe1nh-l\u1ecbch-s\u1eed-commit-\u1edf-remote-repository-v\u1edbi-con-tr\u1ecf-head-hi\u1ec7n-t\u1ea1i-\u1edf-local-repository",level:3},{value:"Xem t\u1ea5t c\u1ea3 c\xe1c commit (k\u1ec3 c\u1ea3 commit \u0111\xe3 b\u1ecb x\xf3a) c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c nh\xe1nh",id:"xem-t\u1ea5t-c\u1ea3-c\xe1c-commit-k\u1ec3-c\u1ea3-commit-\u0111\xe3-b\u1ecb-x\xf3a-c\u1ee7a-t\u1ea5t-c\u1ea3-c\xe1c-nh\xe1nh",level:3},{value:"Git reflog",id:"git-reflog",level:2}],h={toc:m},p="wrapper";function g(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,i.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-log--git-reflog"},"Git log / Git reflog"),(0,r.kt)("h2",{id:"git-log"},"Git log"),(0,r.kt)("h3",{id:"xem-th\xf4ng-tin-t\u1ea5t-c\u1ea3-c\xe1c-commit"},"Xem th\xf4ng tin t\u1ea5t c\u1ea3 c\xe1c commit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ta s\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 xem t\u1ea5t c\u1ea3 c\xe1c commit cho \u0111\u1ebfn tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i m\xe0 con tr\u1ecf HEAD \u0111ang tr\u1ecf \u0111\u1ebfn c\u1ee7a nh\xe1nh hi\u1ec7n t\u1ea1i \u1edf local repository, th\xf4ng tin m\u1ed7i commit s\u1ebd hi\u1ec3n th\u1ecb tr\xean m\u1ed9t d\xf2ng:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git log --oneline\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1700066732125",src:n(2198).Z,width:"512",height:"276"})),(0,r.kt)("h3",{id:"so-s\xe1nh-l\u1ecbch-s\u1eed-commit-\u1edf-remote-repository-v\u1edbi-con-tr\u1ecf-head-hi\u1ec7n-t\u1ea1i-\u1edf-local-repository"},"So s\xe1nh l\u1ecbch s\u1eed commit \u1edf remote repository v\u1edbi con tr\u1ecf HEAD hi\u1ec7n t\u1ea1i \u1edf local repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git log origin/main..HEAD\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"L\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"p"},"git log origin/main..HEAD")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 xem l\u1ecbch s\u1eed c\xe1c commit tr\xean nh\xe1nh hi\u1ec7n t\u1ea1i t\u1eeb commit g\u1ed1c (origin/main) \u0111\u1ebfn commit m\u1edbi nh\u1ea5t (HEAD)."),(0,r.kt)("p",{parentName:"admonition"},"Gi\u1ea3i th\xedch chi ti\u1ebft:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git log")," l\xe0 l\u1ec7nh \u0111\u1ec3 xem l\u1ecbch s\u1eed c\xe1c commit tr\xean nh\xe1nh hi\u1ec7n t\u1ea1i."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin/main")," l\xe0 m\u1ed9t tham chi\u1ebfu \u0111\u1ebfn commit g\u1ed1c tr\xean nh\xe1nh ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," tr\xean remote repository (th\xf4ng th\u01b0\u1eddng l\xe0 origin). N\xf3 \u0111\u1ea1i di\u1ec7n cho commit m\u1edbi nh\u1ea5t tr\xean nh\xe1nh ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," tr\xean remote repository."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")," l\xe0 m\u1ed9t tham chi\u1ebfu \u0111\u1ebfn commit m\u1edbi nh\u1ea5t tr\xean nh\xe1nh hi\u1ec7n t\u1ea1i m\xe0 ta \u0111ang l\xe0m vi\u1ec7c.")),(0,r.kt)("p",{parentName:"admonition"},"Khi ch\u1ea1y l\u1ec7nh ",(0,r.kt)("inlineCode",{parentName:"p"},"git log origin/main..HEAD"),", Git s\u1ebd hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c commit \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\xean nh\xe1nh hi\u1ec7n t\u1ea1i t\u1eeb commit g\u1ed1c (origin/main) \u0111\u1ebfn commit m\u1edbi nh\u1ea5t (HEAD). \u0110i\u1ec1u n\xe0y gi\xfap ta xem c\xe1c thay \u0111\u1ed5i v\xe0 th\xf4ng tin v\u1ec1 c\xe1c commit \u0111\xe3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\xean nh\xe1nh c\u1ee7a b\u1ea1n so v\u1edbi commit g\u1ed1c tr\xean remote repository.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"T\xf9y thu\u1ed9c v\xe0o t\xean remote repository (",(0,r.kt)("strong",{parentName:"li"},"origin"),") v\xe0 nh\xe1nh tr\xean remote (",(0,r.kt)("strong",{parentName:"li"},"main"),") m\xe0 \u0111i\u1ec1u ch\u1ec9nh t\xean cho ph\xf9 h\u1ee3p."))),(0,r.kt)("h3",{id:"xem-t\u1ea5t-c\u1ea3-c\xe1c-commit-k\u1ec3-c\u1ea3-commit-\u0111\xe3-b\u1ecb-x\xf3a-c\u1ee7a-t\u1ea5t-c\u1ea3-c\xe1c-nh\xe1nh"},"Xem t\u1ea5t c\u1ea3 c\xe1c commit (k\u1ec3 c\u1ea3 commit \u0111\xe3 b\u1ecb x\xf3a) c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c nh\xe1nh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git log --reflog --oneline\n")),(0,r.kt)("h2",{id:"git-reflog"},"Git reflog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L\u1ec7nh ",(0,r.kt)("strong",{parentName:"li"},"git reflog")," d\xf9ng \u0111\u1ec3 xem th\xf4ng tin tham chi\u1ebfu hi\u1ec7n t\u1ea1i c\u1ee7a con tr\u1ecf HEAD, l\u1ecbch s\u1eed commit, checkout,..."),(0,r.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh xem l\u1ecbch s\u1eed tham chi\u1ebfu c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c nh\xe1nh:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git reflog\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh xem l\u1ecbch s\u1eed tham chi\u1ebfu c\u1ee7a m\u1ed9t nh\xe1nh c\u1ee5 th\u1ec3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git reflog show [branch_name]\n")))}g.isMDXComponent=!0},2198:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/1700066732125-c39fd822fe29b6ec76cd9cf8820ff096.png"}}]);