import{h as _,k as c,r as v,o as b,c as m,a as t,F as p,d as s,g as w,b0 as y,w as x,t as k,b as g}from"../app.18624a7b.js";const $=s(" show checkbox: "),S=_({__name:"basic",setup(h){const e=c(),r=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];return(d,o)=>{const l=v("el-tree-select"),u=v("el-divider");return b(),m(p,null,[t(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),data:r,"render-after-expand":!1},null,8,["modelValue"]),t(u),$,t(l,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value=a),data:r,"render-after-expand":!1,"show-checkbox":""},null,8,["modelValue"])],64)}}});var H=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const U=s(" show checkbox(only click checkbox to select): "),j=s(" show checkbox with `check-on-click-node`: "),z=_({__name:"check-strictly",setup(h){const e=c(),r=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];return(d,o)=>{const l=v("el-tree-select"),u=v("el-divider");return b(),m(p,null,[t(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),data:r,"check-strictly":"","render-after-expand":!1},null,8,["modelValue"]),t(u),U,t(l,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=a=>e.value=a),data:r,"check-strictly":"","render-after-expand":!1,"show-checkbox":""},null,8,["modelValue"]),t(u),j,t(l,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),data:r,"check-strictly":"","render-after-expand":!1,"show-checkbox":"","check-on-click-node":""},null,8,["modelValue"])],64)}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const O=_({__name:"disabled",setup(h){const e=c(),r=[{value:"1",label:"Level one 1",disabled:!0,children:[{value:"1-1",label:"Level two 1-1",disabled:!0,children:[{disabled:!0,value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];return(d,o)=>{const l=v("el-tree-select");return b(),w(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),data:r},null,8,["modelValue"])}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const T=s(" filter method: "),M=s(" filter node method: "),P=_({__name:"filterable",setup(h){const e=c(),r=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],d=c(r),o=u=>{d.value=[...r].filter(a=>a.label.includes(u))},l=(u,a)=>a.label.includes(u);return(u,a)=>{const n=v("el-tree-select"),L=v("el-divider");return b(),m(p,null,[t(n,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),data:d.value,filterable:""},null,8,["modelValue","data"]),t(L),T,t(n,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=i=>e.value=i),data:d.value,"filter-method":o,filterable:""},null,8,["modelValue","data"]),t(L),M,t(n,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=i=>e.value=i),data:d.value,"filter-node-method":l,filterable:""},null,8,["modelValue","data"])],64)}}});var K=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const B=s(" show lazy load label: "),C=_({__name:"lazy",setup(h){const e=c(),r=c(5),d=[{value:5,label:"lazy load node5"}],o={label:"label",children:"children",isLeaf:"isLeaf"};let l=0;const u=(a,n)=>{if(a.isLeaf)return n([]);setTimeout(()=>{n([{value:++l,label:`lazy load node${l}`},{value:++l,label:`lazy load node${l}`,isLeaf:!0}])},400)};return(a,n)=>{const L=v("el-tree-select"),i=v("el-divider"),V=y;return b(),m(p,null,[t(L,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=f=>e.value=f),lazy:"",load:u,props:o},null,8,["modelValue"]),t(i),t(V,{version:"2.2.26"}),B,t(L,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=f=>r.value=f),lazy:"",load:u,props:o,"cache-data":d},null,8,["modelValue"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const N=s(" show checkbox: "),D=s(" show checkbox with `check-strictly`: "),F=_({__name:"multiple",setup(h){const e=c(),r=c(),d=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];return(o,l)=>{const u=v("el-tree-select"),a=v("el-divider");return b(),m(p,null,[t(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),data:d,multiple:"","render-after-expand":!1},null,8,["modelValue"]),t(a),N,t(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value=n),data:d,multiple:"","render-after-expand":!1,"show-checkbox":""},null,8,["modelValue"]),t(a),D,t(u,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),data:d,multiple:"","render-after-expand":!1,"show-checkbox":"","check-strictly":"","check-on-click-node":""},null,8,["modelValue"])],64)}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const E=g("span",{style:{color:"gray"}},"(suffix)",-1),A=s(" use render content: "),q=_({__name:"slots",setup(h){const e=c(),r=(o,{data:l})=>o("span",{style:{color:"#626AEF"}},l.label),d=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}];return(o,l)=>{const u=v("el-tree-select"),a=v("el-divider");return b(),m(p,null,[t(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),data:d},{default:x(({data:{label:n}})=>[s(k(n),1),E]),_:1},8,["modelValue"]),t(a),A,t(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value=n),data:d,"render-content":r},null,8,["modelValue"])],64)}}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{H as _,I as a,J as b,K as c,Q as d,R as e,W as f};
