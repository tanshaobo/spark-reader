import{d,r as p,t as m,e as n,F as c,f,u as C,p as k,c as o,g as h,h as B,x as L,q as v,v as x,y,l as b}from"./index-6c9ace1d.js";import{g as q}from"./common-8ab319cc.js";const I=k("div",null,"书籍目录页",-1),N=d({name:"BookCatalogue"}),E=Object.assign(N,{setup(R){const u=x(),r=y(),{query:a}=r,s=p({catalogueList:[]}),l=t=>{u.push({name:"BookContent",query:{...a,catalogueId:t.id,catalogueName:t.name}})},i=()=>{q(a).then(t=>{s.catalogueList=t})};(()=>{i()})();const{catalogueList:_}=m(s);return(t,V)=>{const g=b("el-button");return o(),n(c,null,[I,(o(!0),n(c,null,f(C(_),e=>(o(),h(g,{key:e.id,onClick:j=>l(e)},{default:B(()=>[L(v(e.name),1)]),_:2},1032,["onClick"]))),128))],64)}}});export{E as default};
