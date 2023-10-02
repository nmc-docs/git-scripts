"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[427],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>g});var i=e(7294);function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,i,c=function(t,n){if(null==t)return{};var e,i,c={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}var a=i.createContext({}),h=function(t){var n=i.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):m(m({},n),t)),e},l=function(t){var n=h(t.components);return i.createElement(a.Provider,{value:n},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(t,n){var e=t.components,c=t.mdxType,r=t.originalType,a=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),u=h(e),p=c,g=u["".concat(a,".").concat(p)]||u[p]||s[p]||r;return e?i.createElement(g,m(m({ref:n},l),{},{components:e})):i.createElement(g,m({ref:n},l))}));function g(t,n){var e=arguments,c=n&&n.mdxType;if("string"==typeof t||c){var r=e.length,m=new Array(r);m[0]=p;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=t,o[u]="string"==typeof t?t:c,m[1]=o;for(var h=2;h<r;h++)m[h]=e[h];return i.createElement.apply(null,m)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},4398:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>m,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=e(7462),c=(e(7294),e(3905));const r={sidebar_position:8},m="Di chuy\u1ec3n tr\u1ea1ng th\xe1i commit",o={unversionedId:"commit-status-movement",id:"commit-status-movement",title:"Di chuy\u1ec3n tr\u1ea1ng th\xe1i commit",description:"Khi \u0111\u1ea9y code l\xean remote repository th\xec m\u1ed7i commit s\u1ebd c\xf3 m\u1ed9t m\xe3 hash ri\xeang t\u01b0\u01a1ng \u1ee9ng. Ta c\xf3 th\u1ec3 d\u1ef1a v\xe0o m\xe3 n\xe0y \u0111\u1ec3 c\xf3 th\u1ec3 di chuy\u1ec3n tr\u1ea1ng th\xe1i code hi\u1ec7n t\u1ea1i \u0111\u1ebfn tr\u1ea1ng th\xe1i code v\u1edbi m\xe3 commit \u0111\xf3.",source:"@site/docs/commit-status-movement.md",sourceDirName:".",slug:"/commit-status-movement",permalink:"/git-scripts/commit-status-movement",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"H\u1ee3p nh\u1ea5t nh\xe1nh",permalink:"/git-scripts/merge"},next:{title:"Git stash",permalink:"/git-scripts/git-stash"}},a={},h=[{value:"Con tr\u1ecf HEAD",id:"con-tr\u1ecf-head",level:2},{value:"Di chuy\u1ec3n t\u1edbi c\xe1c commit v\xe0 l\xe0m vi\u1ec7c t\u1ea1i c\xe1c commit \u0111\xf3",id:"di-chuy\u1ec3n-t\u1edbi-c\xe1c-commit-v\xe0-l\xe0m-vi\u1ec7c-t\u1ea1i-c\xe1c-commit-\u0111\xf3",level:2},{value:"C\xe1ch 1:",id:"c\xe1ch-1",level:4},{value:"C\xe1ch 2:",id:"c\xe1ch-2",level:4}],l={toc:h},u="wrapper";function s(t){let{components:n,...e}=t;return(0,c.kt)(u,(0,i.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"di-chuy\u1ec3n-tr\u1ea1ng-th\xe1i-commit"},"Di chuy\u1ec3n tr\u1ea1ng th\xe1i commit"),(0,c.kt)("admonition",{type:"note"},(0,c.kt)("p",{parentName:"admonition"},"Khi \u0111\u1ea9y code l\xean remote repository th\xec m\u1ed7i commit s\u1ebd c\xf3 m\u1ed9t m\xe3 hash ri\xeang t\u01b0\u01a1ng \u1ee9ng. Ta c\xf3 th\u1ec3 d\u1ef1a v\xe0o m\xe3 n\xe0y \u0111\u1ec3 c\xf3 th\u1ec3 di chuy\u1ec3n tr\u1ea1ng th\xe1i code hi\u1ec7n t\u1ea1i \u0111\u1ebfn tr\u1ea1ng th\xe1i code v\u1edbi m\xe3 commit \u0111\xf3.")),(0,c.kt)("h2",{id:"con-tr\u1ecf-head"},"Con tr\u1ecf HEAD"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Trong Git, ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," l\xe0 m\u1ed9t con tr\u1ecf \u0111\u1eb7c bi\u1ec7t tr\u1ecf \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i trong branch \u0111ang l\xe0m vi\u1ec7c. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ea1i di\u1ec7n cho commit cu\u1ed1i c\xf9ng trong branch hi\u1ec7n t\u1ea1i."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"HEAD")," c\xf3 th\u1ec3 tr\u1ecf \u0111\u1ebfn c\xe1c commit tr\u1ef1c ti\u1ebfp, ho\u1eb7c tr\u1ecf \u0111\u1ebfn t\xean branch hi\u1ec7n t\u1ea1i (v\xed d\u1ee5: ",(0,c.kt)("inlineCode",{parentName:"li"},"master"),", ",(0,c.kt)("inlineCode",{parentName:"li"},"develop"),",...). Khi ta th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c commit, checkout, ho\u1eb7c chuy\u1ec3n branch, ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn commit m\u1edbi nh\u1ea5t."),(0,c.kt)("li",{parentName:"ul"},"V\u1edbi ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," , ta c\xf3 th\u1ec3 tham chi\u1ebfu \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i \u0111\u1ec3 xem th\xf4ng tin v\u1ec1 commit \u0111\xf3, di chuy\u1ec3n ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i gi\u1eefa c\xe1c commit ho\u1eb7c branch, ho\u1eb7c s\u1eed d\u1ee5ng n\xf3 \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c kh\xe1c li\xean quan \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i."),(0,c.kt)("li",{parentName:"ul"},"Khi ta s\u1eed d\u1ee5ng ",(0,c.kt)("inlineCode",{parentName:"li"},"git commit")," th\xec git s\u1ebd t\u1ea1o m\u1ed9t commit m\u1edbi c\xf3 m\xe3 <commit_hash> ri\xeang v\xe0 con tr\u1ecf ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," ngay l\u1eadp t\u1ee9c tr\u1ecf \u0111\u1ebfn commit n\xe0y.")),(0,c.kt)("h2",{id:"di-chuy\u1ec3n-t\u1edbi-c\xe1c-commit-v\xe0-l\xe0m-vi\u1ec7c-t\u1ea1i-c\xe1c-commit-\u0111\xf3"},"Di chuy\u1ec3n t\u1edbi c\xe1c commit v\xe0 l\xe0m vi\u1ec7c t\u1ea1i c\xe1c commit \u0111\xf3"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u0110\xf4i khi, ta l\u1ea1i mu\u1ed1n l\xe0m vi\u1ec7c t\u1eeb c\xe1c commit tr\u01b0\u1edbc \u0111\xf3 m\xe0 kh\xf4ng ph\u1ea3i commit hi\u1ec7n t\u1ea1i v\xec m\u1ed9t s\u1ed1 l\xfd do, ch\u1eb3ng h\u1ea1n nh\u01b0 commit hi\u1ec7n t\u1ea1i code qu\xe1 r\u1ed1i,... \u0110\u1ec3 l\xe0m \u0111i\u1ec1u n\xe0y, ta c\xf3 2 c\xe1ch sau \u0111\xe2y:")),(0,c.kt)("h4",{id:"c\xe1ch-1"},"C\xe1ch 1:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <commit_hash>\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Sau khi th\u1ef1c hi\u1ec7n l\u1ec7nh tr\xean, ",(0,c.kt)("strong",{parentName:"li"},"HEAD"),' tr\u1ecf t\u1edbi m\u1ed9t commit c\xf3 m\xe3 <commit_hash> t\u01b0\u01a1ng \u1ee9ng, n\xf3 s\u1ebd \u1edf trong tr\u1ea1ng th\xe1i "detached HEAD". Trong tr\u1ea1ng th\xe1i n\xe0y, ta kh\xf4ng th\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c commit tr\u1ef1c ti\u1ebfp. M\u1ecdi thay \u0111\u1ed5i m\u1edbi s\u1ebd kh\xf4ng thu\u1ed9c b\u1ea5t k\u1ef3 branch n\xe0o v\xe0 c\xf3 th\u1ec3 b\u1ecb m\u1ea5t khi ta chuy\u1ec3n \u0111\u1ed5i branch ho\u1eb7c th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c kh\xe1c.'),(0,c.kt)("li",{parentName:"ul"},"\u0110\u1ec3 quay l\u1ea1i tr\u1ea1ng th\xe1i b\xecnh th\u01b0\u1eddng v\xe0 ti\u1ebfp t\u1ee5c l\xe0m vi\u1ec7c tr\xean m\u1ed9t branch, ta n\xean t\u1ea1o m\u1ed9t branch m\u1edbi t\u1eeb commit \u0111\xf3.")),(0,c.kt)("h4",{id:"c\xe1ch-2"},"C\xe1ch 2:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --hard <commit-hash>\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Sau khi th\u1ef1c hi\u1ec7n l\u1ec7nh tr\xean, ",(0,c.kt)("strong",{parentName:"li"},"HEAD")," tr\u1ecf t\u1edbi m\u1ed9t commit c\xf3 m\xe3 <commit_hash> t\u01b0\u01a1ng \u1ee9ng. Ta c\xf3 th\u1ec3 l\xe0m vi\u1ec7c tr\u1ef1c ti\u1ebfp tr\xean commit n\xe0y. Sau khi l\xe0m vi\u1ec7c xong, ta c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,c.kt)("inlineCode",{parentName:"li"},"git add ."),", ",(0,c.kt)("inlineCode",{parentName:"li"},"git commit -m"),". Sau \u0111\xf3, ta s\u1eed d\u1ee5ng ",(0,c.kt)("inlineCode",{parentName:"li"},"git push -f")," \u0111\u1ec3 \u0111\u1ea9y m\u1ed9t commit m\u1edbi l\xean tr\xean remote.")),(0,c.kt)("admonition",{type:"danger"},(0,c.kt)("p",{parentName:"admonition"},"L\u01b0u \xfd r\u1eb1ng khi \u0111\u1ea9y m\u1edbi commit n\xe0y l\xean tr\xean remote th\xec t\u1ea5t c\u1ea3 c\xe1c commit \u0111\u1ee9ng sau commit n\xe0y s\u1ebd b\u1ecb x\xf3a.")))}s.isMDXComponent=!0}}]);