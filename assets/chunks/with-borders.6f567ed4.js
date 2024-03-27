import{h as c,k as u,r as p,o as f,c as g,b as r,a as e,w as l,F as V,d as a,g as O}from"../app.18624a7b.js";const $={class:"mb-2 flex items-center text-sm"},x=a("Option 1"),y=a("Option 2"),z={class:"my-2 flex items-center text-sm"},h=a("Option 1"),U=a("Option 2"),j={class:"my-4 flex items-center text-sm"},k=a("Option 1"),B=a("Option 2"),S={class:"mb-2 flex items-center text-sm"},w=a("Option 1"),A=a("Option 2"),N=c({__name:"basic-usage",setup(v){const _=u("1"),m=u("1"),d=u("1");return(i,t)=>{const o=p("el-radio"),n=p("el-radio-group");return f(),g(V,null,[r("div",$,[e(n,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=s=>_.value=s),class:"ml-4"},{default:l(()=>[e(o,{label:"1",size:"large"},{default:l(()=>[x]),_:1}),e(o,{label:"2",size:"large"},{default:l(()=>[y]),_:1})]),_:1},8,["modelValue"])]),r("div",z,[e(n,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=s=>m.value=s),class:"ml-4"},{default:l(()=>[e(o,{label:"1"},{default:l(()=>[h]),_:1}),e(o,{label:"2"},{default:l(()=>[U]),_:1})]),_:1},8,["modelValue"])]),r("div",j,[e(n,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=s=>d.value=s),class:"ml-4"},{default:l(()=>[e(o,{label:"1",size:"small"},{default:l(()=>[k]),_:1}),e(o,{label:"2",size:"small"},{default:l(()=>[B]),_:1})]),_:1},8,["modelValue"])]),r("div",S,[e(n,{modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=s=>d.value=s),disabled:"",class:"ml-4"},{default:l(()=>[e(o,{label:"1",size:"small"},{default:l(()=>[w]),_:1}),e(o,{label:"2",size:"small"},{default:l(()=>[A]),_:1})]),_:1},8,["modelValue"])])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const C={style:{"margin-top":"20px"}},T={style:{"margin-top":"20px"}},Y=c({__name:"button-style",setup(v){const _=u("New York"),m=u("New York"),d=u("New York");return(i,t)=>{const o=p("el-radio-button"),n=p("el-radio-group");return f(),g(V,null,[r("div",null,[e(n,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=s=>_.value=s),size:"large"},{default:l(()=>[e(o,{label:"New York"}),e(o,{label:"Washington"}),e(o,{label:"Los Angeles"}),e(o,{label:"Chicago"})]),_:1},8,["modelValue"])]),r("div",C,[e(n,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=s=>m.value=s)},{default:l(()=>[e(o,{label:"New York"}),e(o,{label:"Washington"}),e(o,{label:"Los Angeles"}),e(o,{label:"Chicago"})]),_:1},8,["modelValue"])]),r("div",T,[e(n,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=s=>d.value=s),size:"small"},{default:l(()=>[e(o,{label:"New York"}),e(o,{label:"Washington",disabled:""}),e(o,{label:"Los Angeles"}),e(o,{label:"Chicago"})]),_:1},8,["modelValue"])])],64)}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));const M=a("Option A"),P=a("Option B"),L=c({__name:"disabled",setup(v){const _=u("selected and disabled");return(m,d)=>{const i=p("el-radio");return f(),g(V,null,[e(i,{modelValue:_.value,"onUpdate:modelValue":d[0]||(d[0]=t=>_.value=t),disabled:"",label:"disabled"},{default:l(()=>[M]),_:1},8,["modelValue"]),e(i,{modelValue:_.value,"onUpdate:modelValue":d[1]||(d[1]=t=>_.value=t),disabled:"",label:"selected and disabled"},{default:l(()=>[P]),_:1},8,["modelValue"])],64)}}});var de=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const W=a("Option A"),F=a("Option B"),E=a("Option C"),q=c({__name:"radio-button-group",setup(v){const _=u(3);return(m,d)=>{const i=p("el-radio"),t=p("el-radio-group");return f(),O(t,{modelValue:_.value,"onUpdate:modelValue":d[0]||(d[0]=o=>_.value=o)},{default:l(()=>[e(i,{label:3},{default:l(()=>[W]),_:1}),e(i,{label:6},{default:l(()=>[F]),_:1}),e(i,{label:9},{default:l(()=>[E]),_:1})]),_:1},8,["modelValue"])}}});var se=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));const D=a("Option A"),G=a("Option B"),H={style:{"margin-top":"20px"}},I=a("Option A"),J=a("Option B"),K={style:{"margin-top":"20px"}},Q=a("Option A"),R=a("Option B"),X={style:{"margin-top":"20px"}},Z=a("Option A"),ee=a("Option B"),le=c({__name:"with-borders",setup(v){const _=u("1"),m=u("1"),d=u("1"),i=u("1");return(t,o)=>{const n=p("el-radio"),s=p("el-radio-group");return f(),g(V,null,[r("div",null,[e(s,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=b=>_.value=b)},{default:l(()=>[e(n,{label:"1",size:"large",border:""},{default:l(()=>[D]),_:1}),e(n,{label:"2",size:"large",border:""},{default:l(()=>[G]),_:1})]),_:1},8,["modelValue"])]),r("div",H,[e(s,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=b=>m.value=b)},{default:l(()=>[e(n,{label:"1",border:""},{default:l(()=>[I]),_:1}),e(n,{label:"2",border:""},{default:l(()=>[J]),_:1})]),_:1},8,["modelValue"])]),r("div",K,[e(s,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=b=>d.value=b),size:"small"},{default:l(()=>[e(n,{label:"1",border:""},{default:l(()=>[Q]),_:1}),e(n,{label:"2",border:"",disabled:""},{default:l(()=>[R]),_:1})]),_:1},8,["modelValue"])]),r("div",X,[e(s,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=b=>i.value=b),size:"small",disabled:""},{default:l(()=>[e(n,{label:"1",border:""},{default:l(()=>[Z]),_:1}),e(n,{label:"2",border:""},{default:l(()=>[ee]),_:1})]),_:1},8,["modelValue"])])],64)}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{te as _,ae as a,de as b,se as c,ne as d};
