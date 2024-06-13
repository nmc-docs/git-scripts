"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[337],{6478:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>h,metadata:()=>s,toc:()=>g});var e=t(4848),c=t(8453);const h={sidebar_position:2},r="C\u1ea5u h\xecnh user cho git",s={id:"git-config-user",title:"C\u1ea5u h\xecnh user cho git",description:"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?",source:"@site/docs/git-config-user.md",sourceDirName:".",slug:"/git-config-user",permalink:"/git-scripts/git-config-user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u chung",permalink:"/git-scripts/"},next:{title:"Kh\u1edfi t\u1ea1o git cho project",permalink:"/git-scripts/git-initialization"}},l={},g=[{value:"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?",id:"c\u1ea5u-h\xecnh-user-trong-git-\u0111\u1ec3-l\xe0m-g\xec",level:2},{value:"Xem th\xf4ng tin user trong git",id:"xem-th\xf4ng-tin-user-trong-git",level:2},{value:"C\xe1ch \u0111\u1ec3 c\u1ea5u h\xecnh user trong git",id:"c\xe1ch-\u0111\u1ec3-c\u1ea5u-h\xecnh-user-trong-git",level:2}];function o(n){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"c\u1ea5u-h\xecnh-user-cho-git",children:"C\u1ea5u h\xecnh user cho git"}),"\n",(0,e.jsx)(i.h2,{id:"c\u1ea5u-h\xecnh-user-trong-git-\u0111\u1ec3-l\xe0m-g\xec",children:"C\u1ea5u h\xecnh user trong git \u0111\u1ec3 l\xe0m g\xec?"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"C\u1ea5u h\xecnh ng\u01b0\u1eddi d\xf9ng trong Git l\xe0 qu\xe1 tr\xecnh thi\u1ebft l\u1eadp th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a ng\u01b0\u1eddi s\u1eed d\u1ee5ng, gi\xfap x\xe1c \u0111\u1ecbnh ai \u0111\xe3 th\u1ef1c hi\u1ec7n m\u1ed9t s\u1ed1 thay \u0111\u1ed5i trong d\u1ef1 \xe1n. Th\xf4ng tin n\xe0y bao g\u1ed3m t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email c\u1ee7a ng\u01b0\u1eddi d\xf9ng. C\xe1c t\xe1c d\u1ee5ng ch\xednh c\u1ee7a vi\u1ec7c c\u1ea5u h\xecnh ng\u01b0\u1eddi d\xf9ng trong Git bao g\u1ed3m:"}),"\n"]}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"X\xe1c \u0111\u1ecbnh ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n thay \u0111\u1ed5i:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Khi b\u1ea1n commit m\u1ed9t thay \u0111\u1ed5i v\xe0o m\u1ed9t repository Git, th\xf4ng tin v\u1ec1 ng\u01b0\u1eddi commit (t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email) s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef. \u0110i\u1ec1u n\xe0y gi\xfap x\xe1c \u0111\u1ecbnh ai \u0111\xe3 th\u1ef1c hi\u1ec7n m\u1ed9t s\u1ed1 thay \u0111\u1ed5i c\u1ee5 th\u1ec3 trong l\u1ecbch s\u1eed c\u1ee7a d\u1ef1 \xe1n."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Li\xean k\u1ebft v\u1edbi t\xe0i kho\u1ea3n Git:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Khi b\u1ea1n c\u1ea5u h\xecnh t\xean v\xe0 \u0111\u1ecba ch\u1ec9 email trong Git, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng th\xf4ng tin n\xe0y t\u01b0\u01a1ng th\xedch v\u1edbi t\xe0i kho\u1ea3n Git c\u1ee7a b\u1ea1n. \u0110i\u1ec1u n\xe0y quan tr\u1ecdng khi b\u1ea1n l\xe0m vi\u1ec7c v\u1edbi c\xe1c d\u1ef1 \xe1n c\xf3 nhi\u1ec1u ng\u01b0\u1eddi \u0111\xf3ng g\xf3p, v\xe0 n\xf3 gi\xfap \u0111\u1ea3m b\u1ea3o t\xednh minh b\u1ea1ch trong qu\xe1 tr\xecnh theo d\xf5i ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n thay \u0111\u1ed5i."}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Truy\u1ec1n th\xf4ng th\xf4ng tin li\xean quan \u0111\u1ebfn d\u1ef1 \xe1n:"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Th\xf4ng tin v\u1ec1 ng\u01b0\u1eddi commit th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong c\xe1c h\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd m\xe3 ngu\u1ed3n v\xe0 c\xe1c d\u1ecbch v\u1ee5 li\xean quan \u0111\u1ec3 theo d\xf5i v\xe0 hi\u1ec3n th\u1ecb l\u1ecbch s\u1eed thay \u0111\u1ed5i. \u0110i\u1ec1u n\xe0y gi\xfap qu\u1ea3n tr\u1ecb d\u1ef1 \xe1n v\xe0 nh\xf3m ph\xe1t tri\u1ec3n theo d\xf5i ai \u0111\xe3 l\xe0m g\xec v\xe0 khi n\xe0o."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"xem-th\xf4ng-tin-user-trong-git",children:"Xem th\xf4ng tin user trong git"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u0110\u1ec3 xem th\xf4ng tin user \u1edf ",(0,e.jsx)(i.strong,{children:"global"})," (\xe1p d\u1ee5ng cho to\xe0n b\u1ed9 c\xe1c th\u01b0 m\u1ee5c d\u1ef1 \xe1n tr\xean m\xe1y), ta g\xf5 l\u1ec7nh:"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-bash",children:"git config -l --global\n"})}),"\n",(0,e.jsx)(i.admonition,{type:"note",children:(0,e.jsxs)(i.p,{children:["Th\xf4ng tin user m\xe0 \u0111\xe3 \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t ",(0,e.jsx)(i.strong,{children:"global"})," s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u \u1edf trong file ",(0,e.jsx)(i.code,{children:".gitconfig"})," \u1edf \u0111\u01b0\u1eddng d\u1eabn g\u1ed1c (v\xed d\u1ee5 nh\u01b0 ",(0,e.jsx)(i.code,{children:"C:\\Users\\MINH CHI\\.gitconfig"}),")"]})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u0110\u1ec3 xem th\xf4ng tin user \u1edf ",(0,e.jsx)(i.strong,{children:"local"})," (t\u1ee9c l\xe0 trong 1 project c\u1ee5 th\u1ec3), ta v\xe0o th\u01b0 m\u1ee5c d\u1ef1 \xe1n v\xe0 d\xf9ng l\u1ec7nh:"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-bash",children:"git config user.email && git config user.name\n"})}),"\n",(0,e.jsx)(i.h2,{id:"c\xe1ch-\u0111\u1ec3-c\u1ea5u-h\xecnh-user-trong-git",children:"C\xe1ch \u0111\u1ec3 c\u1ea5u h\xecnh user trong git"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u0110\u1ec3 thi\u1ebft l\u1eadp th\xf4ng tin user \u1edf ",(0,e.jsx)(i.strong,{children:"global"}),", ta d\xf9ng l\u1ec7nh:"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-bash",children:'git config --global user.email "your_global_email@abc.example"\ngit config --global user.name "Your global username"\n'})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u0110\u1ec3 thi\u1ebft l\u1eadp th\xf4ng tin user \u1edf ",(0,e.jsx)(i.strong,{children:"local"}),", ta v\xe0o th\u01b0 m\u1ee5c d\u1ef1 \xe1n v\xe0 d\xf9ng l\u1ec7nh:"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-bash",children:'git config user.email "your_local_email@abc.example"\ngit config user.name "Your local username"\n'})})]})}function a(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}},8453:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var e=t(6540);const c={},h=e.createContext(c);function r(n){const i=e.useContext(h);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),e.createElement(h.Provider,{value:i},n.children)}}}]);