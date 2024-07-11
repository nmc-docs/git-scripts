"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[990],{9807:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>o});var e=i(4848),c=i(8453);const s={sidebar_position:9},r="Git reset",h={id:"git-reset",title:"Git reset",description:"Con tr\u1ecf HEAD",source:"@site/docs/git-reset.md",sourceDirName:".",slug:"/git-reset",permalink:"/git-scripts/git-reset",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Git pull / Git merge / Git rebase",permalink:"/git-scripts/pull-merge-rebase"},next:{title:"Git stash",permalink:"/git-scripts/git-stash"}},l={},o=[{value:"Con tr\u1ecf HEAD",id:"con-tr\u1ecf-head",level:2},{value:"Xem l\u1ecbch s\u1eed tham chi\u1ebfu c\u1ee7a HEAD",id:"xem-l\u1ecbch-s\u1eed-tham-chi\u1ebfu-c\u1ee7a-head",level:2},{value:"Git reset",id:"git-reset-1",level:2}];function a(t){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"git-reset",children:"Git reset"}),"\n",(0,e.jsx)(n.h2,{id:"con-tr\u1ecf-head",children:"Con tr\u1ecf HEAD"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["Trong Git, ",(0,e.jsx)(n.strong,{children:"HEAD"})," l\xe0 m\u1ed9t con tr\u1ecf \u0111\u1eb7c bi\u1ec7t tr\u1ecf \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i trong branch \u0111ang l\xe0m vi\u1ec7c. N\xf3 th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ea1i di\u1ec7n cho commit cu\u1ed1i c\xf9ng trong branch hi\u1ec7n t\u1ea1i."]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"HEAD"})," c\xf3 th\u1ec3 tr\u1ecf \u0111\u1ebfn c\xe1c commit tr\u1ef1c ti\u1ebfp, ho\u1eb7c tr\u1ecf \u0111\u1ebfn t\xean branch hi\u1ec7n t\u1ea1i (v\xed d\u1ee5: ",(0,e.jsx)(n.code,{children:"master"}),", ",(0,e.jsx)(n.code,{children:"develop"}),",...). Khi ta th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c commit, checkout, ho\u1eb7c chuy\u1ec3n branch, ",(0,e.jsx)(n.strong,{children:"HEAD"})," s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt \u0111\u1ec3 tham chi\u1ebfu \u0111\u1ebfn commit m\u1edbi nh\u1ea5t."]}),"\n",(0,e.jsxs)(n.li,{children:["V\u1edbi ",(0,e.jsx)(n.strong,{children:"HEAD"})," , ta c\xf3 th\u1ec3 tham chi\u1ebfu \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i \u0111\u1ec3 xem th\xf4ng tin v\u1ec1 commit \u0111\xf3, di chuy\u1ec3n ",(0,e.jsx)(n.strong,{children:"HEAD"})," \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i gi\u1eefa c\xe1c commit ho\u1eb7c branch, ho\u1eb7c s\u1eed d\u1ee5ng n\xf3 \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\xe1c thao t\xe1c kh\xe1c li\xean quan \u0111\u1ebfn commit hi\u1ec7n t\u1ea1i."]}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"xem-l\u1ecbch-s\u1eed-tham-chi\u1ebfu-c\u1ee7a-head",children:"Xem l\u1ecbch s\u1eed tham chi\u1ebfu c\u1ee7a HEAD"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Ta s\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 log ra c\xe1c l\u1ecbch s\u1eed tham chi\u1ebfu c\u1ee7a HEAD:"}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"git reflog\n"})}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"1700064410001",src:i(4997).A+"",width:"857",height:"654"})}),"\n",(0,e.jsx)(n.h2,{id:"git-reset-1",children:"Git reset"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["Git reset \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3:","\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Quay tr\u1edf l\u1ea1i commit tr\u01b0\u1edbc \u0111\xf3 trong l\u1ecbch s\u1eed commit c\u1ee7a repository"}),"\n",(0,e.jsx)(n.li,{children:"Quay tr\u1edf l\u1ea1i tr\u1ea1ng th\xe1i tham chi\u1ebfu c\u1ee7a con tr\u1ecf HEAD."}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.li,{children:"C\xfa ph\xe1p"}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"git reset <commit_hash>\ngit reset --soft <commit_hash>\ngit reset --hard <commit_hash>\n"})}),"\n",(0,e.jsxs)(n.admonition,{type:"info",children:[(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["Ngo\xe0i ra, thay v\xec ch\u1ec9 \u0111\u1ecbnh commit hash, ta c\xf3 th\u1ec3 d\xf9ng ",(0,e.jsx)(n.strong,{children:"HEAD~n"}),' \u0111\u1ec3 quay tr\u1edf l\u1ea1i "n" commit tr\u01b0\u1edbc so v\u1edbi commit hi\u1ec7n t\u1ea1i, v\xed d\u1ee5, l\u1ec7nh sau s\u1ebd quay tr\u1edf l\u1ea1i 3 commit tr\u01b0\u1edbc \u0111\xf3:']}),"\n"]}),(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"git reset HEAD~3\n"})})]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"git reset HEAD@{n}\ngit reset --soft HEAD@{n}\ngit reset --hard HEAD@{n}\n"})}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"S\u1ef1 kh\xe1c bi\u1ec7t:"}),"\n"]}),"\n",(0,e.jsxs)(n.table,{children:[(0,e.jsx)(n.thead,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsx)(n.th,{children:"git reset"}),(0,e.jsx)(n.th,{children:"git reset --soft"}),(0,e.jsx)(n.th,{children:"git reset --hard"})]})}),(0,e.jsx)(n.tbody,{children:(0,e.jsxs)(n.tr,{children:[(0,e.jsxs)(n.td,{children:["Di chuy\u1ec3n \u0111\u1ebfn commit ho\u1eb7c tham chi\u1ebfu HEAD c\u1ee5 th\u1ec3. T\u1ea5t c\u1ea3 c\xe1c file thay \u0111\u1ed5i sau commit n\xe0y v\u1eabn s\u1ebd \u0111\u01b0\u1ee3c gi\u1eef nguy\xean trong",(0,e.jsx)(n.strong,{children:"Working Directory"})]}),(0,e.jsxs)(n.td,{children:["Di chuy\u1ec3n \u0111\u1ebfn commit ho\u1eb7c tham chi\u1ebfu HEAD c\u1ee5 th\u1ec3. T\u1ea5t c\u1ea3 c\xe1c file thay \u0111\u1ed5i sau commit n\xe0y v\u1eabn s\u1ebd \u0111\u01b0\u1ee3c gi\u1eef nguy\xean trong",(0,e.jsx)(n.strong,{children:"Staging Area"})]}),(0,e.jsxs)(n.td,{children:["Di chuy\u1ec3n \u0111\u1ebfn commit ho\u1eb7c tham chi\u1ebfu HEAD c\u1ee5 th\u1ec3. T\u1ea5t c\u1ea3 c\xe1c file thay \u0111\u1ed5i sau commit n\xe0y s\u1ebd b\u1ecb",(0,e.jsx)(n.strong,{children:"X\xd3A S\u1ea0CH"}),", \u0111\u1ed3ng ngh\u0129a v\u1edbi vi\u1ec7c \u0111\u01b0a th\u01b0 m\u1ee5c l\xe0m vi\u1ec7c quay tr\u1edf l\u1ea1i tr\u1ea1ng th\xe1i y h\u1ec7t nh\u01b0 commit \u0111\xf3"]})]})})]}),"\n",(0,e.jsxs)(n.admonition,{type:"note",children:[(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Sau khi reset v\u1ec1 commit tr\u01b0\u1edbc \u0111\xf3, ta ch\u1ec9nh s\u1eeda v\xe0 sau \u0111\xf3 t\u1ea1o commit m\u1edbi v\xe0 mu\u1ed1n push l\xean remote, h\xe3y d\xf9ng l\u1ec7nh:"}),"\n"]}),(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"git push --force\n"})}),(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"L\u01b0u \xfd r\u1eb1ng t\u1ea5t c\u1ea3 c\xe1c commit sau \u0111\xf3 s\u1ebd b\u1ecb ghi \u0111\xe8 b\u1edfi commit ta v\u1eeba m\u1edbi push l\xean remote."}),"\n"]}),(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"1710054526478",src:i(9319).A+"",width:"1038",height:"391"})}),(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["L\xfac n\xe0y, l\u1ecbch s\u1eed commit tr\xean remote repository s\u1ebd gi\u1ed1ng v\u1edbi l\u1ecbch s\u1eed commit khi ta d\xf9ng l\u1ec7nh ",(0,e.jsx)(n.strong,{children:"git log --oneline"})]}),"\n"]})]})]})}function d(t={}){const{wrapper:n}={...(0,c.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(a,{...t})}):a(t)}},4997:(t,n,i)=>{i.d(n,{A:()=>e});const e=i.p+"assets/images/1700064410001-84b7fc5447d22f68c920fd2ea8eac407.png"},9319:(t,n,i)=>{i.d(n,{A:()=>e});const e=i.p+"assets/images/1710054526478-80ef40bc02bdabaf29b01bd48b06f21e.png"},8453:(t,n,i)=>{i.d(n,{R:()=>r,x:()=>h});var e=i(6540);const c={},s=e.createContext(c);function r(t){const n=e.useContext(s);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function h(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),e.createElement(s.Provider,{value:n},t.children)}}}]);