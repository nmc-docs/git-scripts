"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[11],{9349:(s,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>e,default:()=>o,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var h=t(4848),i=t(8453);const a={sidebar_position:10},e="Git stash",c={id:"git-stash",title:"Git stash",description:"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra",source:"@site/docs/git-stash.md",sourceDirName:".",slug:"/git-stash",permalink:"/git-scripts/git-stash",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Git reset",permalink:"/git-scripts/git-reset"},next:{title:"Git log / Git reflog",permalink:"/git-scripts/git-log-reflog"}},l={},r=[{value:"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra",id:"v\u1ea5n-\u0111\u1ec1-\u0111\u1eb7t-ra",level:2},{value:"Hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3",id:"hi\u1ec3n-th\u1ecb-danh-s\xe1ch-c\xe1c-stash-hi\u1ec7n-c\xf3",level:2},{value:"L\u01b0u gi\u1eef m\u1ed9t stash",id:"l\u01b0u-gi\u1eef-m\u1ed9t-stash",level:2},{value:"Apply stash",id:"apply-stash",level:2},{value:"H\u1ee7y b\u1ecf apply stash",id:"h\u1ee7y-b\u1ecf-apply-stash",level:2},{value:"X\xf3a b\u1ecf stash",id:"x\xf3a-b\u1ecf-stash",level:2}];function d(s){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.h1,{id:"git-stash",children:"Git stash"}),"\n",(0,h.jsx)(n.h2,{id:"v\u1ea5n-\u0111\u1ec1-\u0111\u1eb7t-ra",children:"V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsxs)(n.li,{children:["\u0110\xf4i khi ta \u0111ang code m\xe0 ch\u1ee3t ra ta \u0111ang code \u1edf nh\u1ea7m nh\xe1nh. Gi\u1edd n\u1ebfu t\u1ea1o m\u1ed9t nh\xe1nh m\u1edbi, hay di chuy\u1ec3n sang nh\xe1nh kh\xe1c th\xec to\xe0n b\u1ed9 c\xe1c file code thay \u0111\u1ed5i \u1edf ",(0,h.jsx)(n.strong,{children:"Working directory"})," ch\u01b0a \u0111\u01b0\u1ee3c commit c\xf3 th\u1ec3 s\u1ebd b\u1ecb m\u1ea5t ho\xe0n to\xe0n. Gi\u1edd l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 l\u01b0u gi\u1eef t\u1ea1m c\xe1c file code n\xe0y? \u0110\xf3 l\xe0 l\xfac ta s\u1ebd s\u1eed d\u1ee5ng l\u1ec7nh ",(0,h.jsx)(n.code,{children:"git stash"})]}),"\n",(0,h.jsxs)(n.li,{children:["L\u1ec7nh ",(0,h.jsx)(n.code,{children:"git stash"})," trong Git \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea1m th\u1eddi l\u01b0u tr\u1eef (stash) c\xe1c thay \u0111\u1ed5i ch\u01b0a \u0111\u01b0\u1ee3c commit trong th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c hi\u1ec7n t\u1ea1i. Khi b\u1ea1n ch\u1ea1y ",(0,h.jsx)(n.code,{children:"git stash"}),", Git s\u1ebd t\u1ea1o m\u1ed9t stash m\u1edbi v\xe0 lo\u1ea1i b\u1ecf c\xe1c thay \u0111\u1ed5i ch\u01b0a \u0111\u01b0\u1ee3c commit kh\u1ecfi th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c. Stash s\u1ebd l\u01b0u tr\u1eef c\xe1c thay \u0111\u1ed5i n\xe0y \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 \xe1p d\u1ee5ng l\u1ea1i sau n\xe0y ho\u1eb7c chuy\u1ec3n \u0111\u1ed5i gi\u1eefa c\xe1c nh\xe1nh m\xe0 kh\xf4ng ph\u1ea3i commit nh\u1eefng thay \u0111\u1ed5i ch\u01b0a ho\xe0n th\xe0nh."]}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"hi\u1ec3n-th\u1ecb-danh-s\xe1ch-c\xe1c-stash-hi\u1ec7n-c\xf3",children:"Hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 hi\u1ec3n th\u1ecb danh s\xe1ch c\xe1c Stash hi\u1ec7n c\xf3, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash list\n"})}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{alt:"1696264850282",src:t(6684).A+"",width:"839",height:"95"})}),"\n",(0,h.jsx)(n.h2,{id:"l\u01b0u-gi\u1eef-m\u1ed9t-stash",children:"L\u01b0u gi\u1eef m\u1ed9t stash"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 t\u1ea1o m\u1ed9t stash cho vi\u1ec7c t\u1ea1m th\u1eddi l\u01b0u tr\u1eef c\xe1c thay \u0111\u1ed5i hi\u1ec7n t\u1ea1i ch\u01b0a \u0111\u01b0\u1ee3c commit, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash\n"})}),"\n",(0,h.jsx)(n.h2,{id:"apply-stash",children:"Apply stash"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 apply m\u1ed9t stash c\u1ee5 th\u1ec3 ch\u1ee9a c\xe1c thay \u0111\u1ed5i v\xe0o nh\xe1nh hi\u1ec7n t\u1ea1i, ta d\xf9ng l\u1ec7nh sau:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash apply stash@{0,1,2,...}\n"})}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 apply stash cu\u1ed1i c\xf9ng trong Stash list v\xe0 x\xf3a n\xf3 kh\u1ecfi Stash list sau khi apply xong, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash pop\n"})}),"\n",(0,h.jsx)(n.h2,{id:"h\u1ee7y-b\u1ecf-apply-stash",children:"H\u1ee7y b\u1ecf apply stash"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 h\u1ee7y b\u1ecf apply m\u1ed9t stash, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git checkout -f\n"})}),"\n",(0,h.jsx)(n.h2,{id:"x\xf3a-b\u1ecf-stash",children:"X\xf3a b\u1ecf stash"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 x\xf3a b\u1ecf m\u1ed9t stash c\u1ee5 th\u1ec3, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash drop stash@{0,1,2,3,...}\n"})}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u0110\u1ec3 x\xf3a b\u1ecf stash cu\u1ed1i c\xf9ng trong stash list, ta d\xf9ng l\u1ec7nh:"}),"\n"]}),"\n",(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:"language-bash",children:"git stash drop\n"})})]})}function o(s={}){const{wrapper:n}={...(0,i.R)(),...s.components};return n?(0,h.jsx)(n,{...s,children:(0,h.jsx)(d,{...s})}):d(s)}},6684:(s,n,t)=>{t.d(n,{A:()=>h});const h=t.p+"assets/images/1696264850282-9b67bc4d28de9174e1322a39d861e155.png"},8453:(s,n,t)=>{t.d(n,{R:()=>e,x:()=>c});var h=t(6540);const i={},a=h.createContext(i);function e(s){const n=h.useContext(a);return h.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function c(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:e(s.components),h.createElement(a.Provider,{value:n},s.children)}}}]);