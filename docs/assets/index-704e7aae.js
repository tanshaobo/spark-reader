import{d as L,_ as j,r as x,a as H,w as I,o as N,b as T,t as u,c as o,e as l,u as r,F as v,f as w,g as h,n as D,h as $,i as g,j as m,k as R,l as b,m as z,p as k,q as O,s as E,v as V}from"./index-055df69d.js";const F=(s,a)=>{let e=new Array(Math.ceil(s.length/a));e.fill(null,0,e.length);for(let t=0;t<s.length;t++)Array.isArray(e[Math.floor(t/a)])?e[Math.floor(t/a)].push(s[t]):e[Math.floor(t/a)]=[s[t]];return e},G=(s,a,e)=>{let t=a-s.length%a;return t==a&&(t=0),s.length+=t,s.fill(e,s.length-t,s.length),F(s,a)};const J={key:0,class:"card-box"},q={key:1,class:"card-box"},U=L({name:"Grid"}),W=Object.assign(U,{props:{showType:{type:String,default:"card"},dataList:{type:Array,default:()=>[]},hasHeader:{type:Boolean,default:!1}},setup(s){const a=s,e=x({column:0,dataList:[],showList:[]}),t=H(),c=()=>{e.column=Math.floor(t.value.clientWidth/260),e.showList=G(e.dataList,e.column,{remain:!0})};I(()=>a.dataList,n=>{e.dataList=JSON.parse(JSON.stringify(n)),n&&D(()=>{c()})},{deep:!0,immediate:!0}),window.addEventListener("resize",c),N(()=>{c()}),T(()=>{window.removeEventListener("resize",c)});const{showType:d}=u(a),{column:_,dataList:f,showList:y}=u(e);return(n,i)=>{const S=$("el-card"),B=$("el-row");return o(),l("section",{class:"container",ref_key:"box",ref:t},[r(d)==="card"?(o(),l("div",J,[(o(!0),l(v,null,w(r(y),(C,M)=>(o(),g(B,{key:M},{default:m(()=>[(o(!0),l(v,null,w(C,(p,A)=>(o(),l("div",{class:"column-item",key:A},[p.remain?h("",!0):(o(),g(S,{key:0},R({default:m(()=>[b(n.$slots,"default",{item:p},void 0,!0)]),_:2},[s.hasHeader?{name:"header",fn:m(()=>[b(n.$slots,"headers",{item:p},void 0,!0)]),key:"0"}:void 0]),1024)),b(n.$slots,"main",{item:p},void 0,!0)]))),128))]),_:2},1024))),128))])):h("",!0),r(d)==="table"?(o(),l("div",q)):h("",!0)],512)}}}),K=j(W,[["__scopeId","data-v-c039b21b"]]);const Q={class:"title"},X={class:"content"},Y=L({name:"Row"}),Z=Object.assign(Y,{props:{label:{type:Object,default:()=>{}},values:{type:Object,default:()=>{}},type:{type:String,default:"between"}},setup(s){const a=s,e=x({classObject:{}}),{label:t,values:c,type:d}=u(a);e.classObject={between:d.value=="between",left:d.value=="start"};const{classObject:_}=u(e);return(f,y)=>(o(!0),l(v,null,w(r(c),(n,i)=>(o(),l("div",{key:n.id},[r(t)[i]?(o(),l("div",{key:0,class:z(["row",{column:r(t)[i].length+n.length>20,...r(_)}])},[k("span",Q,O(r(t)[i]),1),k("span",X,O(n),1)],2)):h("",!0)]))),128))}}),P=j(Z,[["__scopeId","data-v-9b741635"]]),ee={id:"编号",name:"书名"},te=[{id:1,name:"巫师：从骑士呼吸法开始肝经验"}],se=["onClick"],ae=L({name:"BookList"}),oe=Object.assign(ae,{setup(s){const a=V(),e=x({dataList:[],dataHeader:{}}),t=()=>{e.dataList=te,e.dataHeader=ee},c=f=>{a.push({name:"BookDetail",params:{bookId:f.id}})};t();const{dataList:d,dataHeader:_}=u(e);return(f,y)=>(o(),g(K,{"data-list":r(d),class:"grid"},{default:m(n=>[k("div",{onClick:i=>c(n.item)},[E(P,{type:"between",label:r(_),values:n.item},null,8,["label","values"])],8,se)]),_:1},8,["data-list"]))}});export{oe as default};