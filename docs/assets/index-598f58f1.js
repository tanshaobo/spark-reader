import{d,r as m,t as p,e as n,F as c,f,u as k,p as C,c as o,g as h,h as v,x as B,q as x,v as y,y as L,l as b}from"./index-2657bddd.js";import{s as N}from"./axios-80dcc7f2.js";const j=C("div",null,"书籍目录页",-1),q=d({name:"BookCatalogue"}),D=Object.assign(q,{setup(I){const r=y(),u=L(),{query:s}=u,a=m({catalogueList:[]}),l=e=>{r.push({name:"BookContent",query:{...s,catalogueId:e.id,catalogueName:e.name}})},i=()=>{N.get(`/src/config/json/${s.bookName}.json`).then(e=>{a.catalogueList=e})};(()=>{i()})();const{catalogueList:_}=p(a);return(e,F)=>{const g=b("el-button");return o(),n(c,null,[j,(o(!0),n(c,null,f(k(_),t=>(o(),h(g,{key:t.id,onClick:V=>l(t)},{default:v(()=>[B(x(t.name),1)]),_:2},1032,["onClick"]))),128))],64)}}});export{D as default};
