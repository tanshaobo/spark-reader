import{d as r,r as u,t as i,e as _,q as l,u as m,c as f,y as p}from"./index-2657bddd.js";import{s as d}from"./axios-80dcc7f2.js";const g=t=>d.get(`/source/${t.bookName}/${t.catalogueName}`),k=r({name:"BookContent"}),b=Object.assign(k,{setup(t){const e=u({content:""}),o=p(),{query:s}=o,c=()=>{g(s).then(n=>{e.content=n})};(()=>{c()})();const{content:a}=i(e);return(n,v)=>(f(),_("div",null,l(m(a)),1))}});export{b as default};
