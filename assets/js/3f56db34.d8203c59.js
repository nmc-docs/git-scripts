"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[839],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>u});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},g=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),p=s(n),h=i,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(u,l(l({ref:e},g),{},{components:n})):a.createElement(u,l({ref:e},g))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6054:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},l="Qu\u1ea3n l\xfd file v\xe0 \u0111\u1ea9y code l\xean remote trong git",o={unversionedId:"files-management-and-push-code",id:"files-management-and-push-code",title:"Qu\u1ea3n l\xfd file v\xe0 \u0111\u1ea9y code l\xean remote trong git",description:"Trong git c\xf3 3 n\u01a1i:",source:"@site/docs/files-management-and-push-code.md",sourceDirName:".",slug:"/files-management-and-push-code",permalink:"/git-scripts/files-management-and-push-code",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Li\xean k\u1ebft/H\u1ee7y li\xean k\u1ebft project v\u1edbi Remote repository",permalink:"/git-scripts/remote-repository-connection"},next:{title:"Git clone",permalink:"/git-scripts/git-clone"}},c={},s=[{value:"Ki\u1ec3m tra tr\u1ea1ng th\xe1i",id:"ki\u1ec3m-tra-tr\u1ea1ng-th\xe1i",level:2},{value:"\u0110\u01b0a file v\xe0o Staging area",id:"\u0111\u01b0a-file-v\xe0o-staging-area",level:2},{value:"Commit",id:"commit",level:2},{value:"Push",id:"push",level:2},{value:"Discard Changes",id:"discard-changes",level:2}],g={toc:s},p="wrapper";function m(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"qu\u1ea3n-l\xfd-file-v\xe0-\u0111\u1ea9y-code-l\xean-remote-trong-git"},"Qu\u1ea3n l\xfd file v\xe0 \u0111\u1ea9y code l\xean remote trong git"),(0,i.kt)("p",null,"Trong git c\xf3 3 n\u01a1i:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Working directory")," : \u0110\xe2y l\xe0 n\u01a1i m\xe0 b\u1ea1n \u0111ang code cho project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Staging area")," : Ch\xednh l\xe0 n\u01a1i l\u01b0u tr\u1eef c\xe1c thay \u0111\u1ed5i tr\u01b0\u1edbc khi commit. Khi b\u1ea1n g\xf5 ",(0,i.kt)("inlineCode",{parentName:"li"},"git add")," th\xec c\xe1c thay \u0111\u1ed5i s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u t\u1ea1i \u0111\xe2y."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repository")," : ch\xednh l\xe0 project khi \u0111\xe3 commit. Khi b\u1ea1n g\xf5 ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit")," th\xec c\xe1c thay \u0111\u1ed5i s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u t\u1ea1i \u0111\xe2y.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1696263725781",src:n(9461).Z,width:"850",height:"535"})),(0,i.kt)("h2",{id:"ki\u1ec3m-tra-tr\u1ea1ng-th\xe1i"},"Ki\u1ec3m tra tr\u1ea1ng th\xe1i"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,i.kt)("p",null,"L\u1ec7nh ",(0,i.kt)("inlineCode",{parentName:"p"},"git status")," trong Git \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 hi\u1ec3n th\u1ecb tr\u1ea1ng th\xe1i c\u1ee7a c\xe1c t\u1ec7p tin v\xe0 th\u01b0 m\u1ee5c trong th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c ( ",(0,i.kt)("strong",{parentName:"p"},"Working directory")," ) v\xe0 c\u1ea3 tr\u1ea1ng th\xe1i c\u1ee7a nh\u1eefng t\u1ec7p tin \u0111\xe3 \u0111\u01b0\u1ee3c theo d\xf5i (tracked) trong ",(0,i.kt)("strong",{parentName:"p"},"Staging area")," ."),(0,i.kt)("p",null,"Khi b\u1ea1n ch\u1ea1y ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),", Git s\u1ebd hi\u1ec3n th\u1ecb c\xe1c th\xf4ng tin nh\u01b0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nh\u1eefng t\u1ec7p tin \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ec9nh s\u1eeda v\xe0 ch\u01b0a \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o ",(0,i.kt)("strong",{parentName:"li"},"Staging area")," ."),(0,i.kt)("li",{parentName:"ul"},"Nh\u1eefng t\u1ec7p tin \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam v\xe0o ",(0,i.kt)("strong",{parentName:"li"},"Staging area")," s\u1ebd \u0111\u01b0\u1ee3c commit trong l\u1ea7n commit ti\u1ebfp theo."),(0,i.kt)("li",{parentName:"ul"},"Nh\u1eefng t\u1ec7p tin \u0111\xe3 b\u1ecb x\xf3a."),(0,i.kt)("li",{parentName:"ul"},"C\xe1c nh\xe1nh hi\u1ec7n t\u1ea1i v\xe0 tr\u1ea1ng th\xe1i c\u1ee7a vi\u1ec7c b\u1ea1n \u0111ang l\xe0m vi\u1ec7c trong nh\xe1nh n\xe0o.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1696263776526",src:n(6583).Z,title:"Tr\u1ea1ng th\xe1i c\xe1c file thay \u0111\u1ed5i",width:"1789",height:"627"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1696263788123",src:n(1576).Z,title:"Th\xf4ng b\xe1o tr\u1ea1ng th\xe1i hi\u1ec7n t\u1ea1i l\xe0 \u0111\xe3 commit nh\u01b0ng ch\u01b0a push l\xean remote",width:"768",height:"212"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C\xe2u l\u1ec7nh sau s\u1ebd li\u1ec7t k\xea c\xe1c cmit \u0111\xe3 \u0111\u01b0\u1ee3c t\u1ea1o nh\u01b0ng ch\u01b0a \u0111\u1ea9y l\xean remote repository:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git log origin/main..HEAD\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1698568677212",src:n(720).Z,width:"945",height:"188"})),(0,i.kt)("h2",{id:"\u0111\u01b0a-file-v\xe0o-staging-area"},"\u0110\u01b0a file v\xe0o Staging area"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 \u0111\u01b0a file \u0111\xe3 \u0111\u01b0\u1ee3c thay \u0111\u1ed5i v\xe0o ",(0,i.kt)("strong",{parentName:"li"},"Staging area")," , ta d\xf9ng l\u1ec7nh sau:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add <file_path> // \u0110\u01b0a file c\u1ee5 th\u1ec3 v\xe0o Staging area. V\xed d\u1ee5 nh\u01b0 "git add src/App.tsx"\ngit add . // \u0110\u01b0a t\u1ea5t c\u1ea3 c\xe1c file v\xe0o Staging area\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0110\u1ec3 \u0111\u01b0a file quay tr\u1edf l\u1ea1i ",(0,i.kt)("strong",{parentName:"li"},"Working directory")," :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git restore --staged <file_path> // \u0110\u01b0a file c\u1ee5 th\u1ec3 t\u1eeb Staging area quay tr\u1edf l\u1ea1i Working directory\ngit restore --staged . // \u0110\u01b0a t\u1ea5t c\u1ea3 c\xe1c file t\u1eeb Staging area quay tr\u1edf l\u1ea1i Working directory\n")),(0,i.kt)("h2",{id:"commit"},"Commit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ti\u1ebfp theo, ta t\u1ea1o commit v\u1edbi m\u1ed9t n\u1ed9i dung message n\xe0o \u0111\xf3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "Message"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"N\u1ebfu ta l\u1ee1 th\u1ef1c hi\u1ec7n t\u1ea1o commit v\xe0 gi\u1edd mu\u1ed1n h\u1ee7y. L\xfac n\xe0y t\u1ea5t c\u1ea3 c\xe1c file s\u1ebd \u0111\u01b0\u1ee3c \u0111\u01b0a tr\u1edf l\u1ea1i ",(0,i.kt)("strong",{parentName:"li"},"Working directory")," :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD~1\n")),(0,i.kt)("h2",{id:"push"},"Push"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sau khi \u0111\xe3 th\u1ef1c hi\u1ec7n add v\xe0 commit xong, ta c\xf3 th\u1ec3 \u0111\u1ea9y code l\xean ",(0,i.kt)("strong",{parentName:"li"},"Remote repository")," th\xf4ng qua c\xe2u l\u1ec7nh sau:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin <branch_name>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Trong \u0111\xf3:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"<branch_name>")," : t\xean nh\xe1nh \u1edf remote repository m\xe0 code s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ea9y l\xean. N\u1ebfu nh\xe1nh n\xe0y ch\u01b0a c\xf3 \u1edf remote repository th\xec n\xf3 s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng t\u1ea1o."))),(0,i.kt)("h2",{id:"discard-changes"},"Discard Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L\u1ec7nh sau s\u1ebd kh\xf4i ph\u1ee5c t\u1ec7p tin v\u1ec1 tr\u1ea1ng th\xe1i tr\u01b0\u1edbc khi b\u1ea1n th\u1ef1c hi\u1ec7n b\u1ea5t k\u1ef3 thay \u0111\u1ed5i n\xe0o tr\xean t\u1ec7p tin \u0111\xf3. T\u1ea5t c\u1ea3 nh\u1eefng thay \u0111\u1ed5i ch\u01b0a \u0111\u01b0\u1ee3c l\u01b0u (ch\u01b0a commit) tr\xean t\u1ec7p tin n\xe0y s\u1ebd b\u1ecb m\u1ea5t \u0111i.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -- <file-path> // Discard changes cho file c\u1ee5 th\u1ec3\ngit checkout -- . // Discard changes cho t\u1ea5t c\u1ea3 c\xe1c file\n")))}m.isMDXComponent=!0},9461:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1696263725781-35296a4797dd4a6e18f226710294d6ea.png"},6583:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1696263776526-34d0afe19d7aa17df44ae337c5382034.png"},1576:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1696263788123-f2626c2511ed9ac91002e78ed477ba78.png"},720:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1698568677212-abe44751342e957a91f8041f7a97fcbc.png"}}]);