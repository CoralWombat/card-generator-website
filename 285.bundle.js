(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[285],{285:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var i=a(540),r=a(151),l=a(848);const d=a(965);var n=e=>{let{className:t,template:a,templateParameters:i}=e;if(!a)return null;const r=d.render(a,i);return(0,l.jsx)("div",{className:[t,"card"].join(" "),dangerouslySetInnerHTML:{__html:r}})},s=a(308),o=e=>{let{template:t,templateParameters:a,onParametersChange:i}=e;const r=(e=>[...e.matchAll(/{{\s*&?([^}\s]+)\s*}}/g)].map((e=>e[1])))(t);return(0,l.jsx)("div",{id:"template-form",className:"flex flex-col gap-7 pt-3",children:r.map((e=>(0,l.jsxs)("span",{className:"p-float-label",children:[(0,l.jsx)(s.S,{className:"w-full",id:e,value:a[e]||"",onChange:t=>i({...a,[e]:t.target.value})}),(0,l.jsx)("label",{htmlFor:e,children:e})]},"template-form-"+e)))})},c=a(69),m=a(119),u=e=>{let{cards:t}=e;return(0,l.jsx)("div",{children:t.map(((e,t)=>(0,l.jsx)(n,{template:e.template,templateParameters:e.templateParameters},"card-"+t)))})},p=[{label:"Basic Template",name:"basic-template.html",defaultValues:{}},{label:"Basic Template 2",name:"basic-template-2.html",defaultValues:{}},{label:"D&D Spell Card",name:"dnd_spell_card_template.html",defaultValues:{Image_Source:"https://th.bing.com/th/id/OIG1.0LHNGA6aZmQso9rp9UVy?pid=ImgGn",Description_Scale:1,Title:"Mage Armor",Level:"1st",Casting_Time:"1 Action",Range:"Touch",Duration:"8 Hours",Components:"V, S, M*",School:"Abjuration",Save:"None",Description:"You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."}}],v=e=>{let{className:t}=e;const[d,s]=(0,i.useState)(null),[v,f]=(0,i.useState)(null),[h,g]=(0,i.useState)({}),[b,x]=(0,i.useState)([]);return(0,i.useEffect)((()=>{var e;d&&f((e=d,a(154)("./"+e).default))}),[d]),(0,i.useEffect)((()=>{d&&g(p.find((e=>e.name===d)).defaultValues)}),[v]),(0,l.jsxs)("div",{className:t+" flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsxs)("div",{className:"no-print flex flex-col gap-4 w-1/2",children:[(0,l.jsx)(r.m,{value:d,onChange:e=>s(e.value),options:p,optionLabel:"label",optionValue:"name",placeholder:"Select Template"}),v&&(0,l.jsx)(o,{template:v,templateParameters:h,onParametersChange:e=>g(e)}),(0,l.jsxs)("div",{className:"flex flex-row flex-wrap gap-2 justify-center",children:[(0,l.jsx)(m.$,{onClick:()=>x([]),children:"Clear Prints"}),(0,l.jsx)(m.$,{onClick:()=>x((e=>[...e,{template:v,templateParameters:h}])),disabled:!v,children:"Add To Print"}),(0,l.jsx)(m.$,{onClick:()=>window.print(),disabled:0===b.length,children:"Print"})]})]}),(0,l.jsx)(c.c,{className:"no-print",layout:"vertical"}),(0,l.jsx)(n,{className:"no-print w-1/2 self-center",template:v,templateParameters:h})]}),(0,l.jsx)(c.c,{className:"no-print"}),(0,l.jsx)(u,{cards:b})]})}},617:function(e,t,a){"use strict";a.r(t),t.default='<div style="background-color:#d84bb9;width:6.4cm;height:8.9cm;text-align:center;border-radius:3mm"> <div>{{Title}}</div> <div>{{Description}}</div> <div>{{Description_2}}</div> </div>'},370:function(e,t,a){"use strict";a.r(t),t.default='<div style="background-color:#b0e0e6;width:6.4cm;height:8.9cm;text-align:center;border-radius:3mm"> <div>{{Title}}</div> <div>{{Description}}</div> </div>'},176:function(e,t,a){"use strict";a.r(t),t.default='<div id="card"> <style>#card{width:6.4cm;height:8.9cm;font-size:12px;color:#fff;text-align:center;background-color:#000;background-image:url("{{&Image_Source}}");background-position-y:-1cm;background-position-x:center;background-size:6.4cm 6.4cm;background-repeat:no-repeat;border-style:solid;border-radius:3mm;border-width:1mm;border-color:#000;display:grid;grid-template-rows:[row1-start] 1.5em [row1-end] 3.8cm [third-line] auto [fourth-line] 0.5em [last-line]}#header{display:flex;flex-direction:row;justify-content:space-between;grid-row-start:1}#stat-block{width:100%;display:grid;grid-template-columns:50% 50%}#stat-block div{padding:.1em;background-color:#000;z-index:1;text-align:start}#stat-block div:nth-child(2n){padding:.1em;background-color:#000;z-index:1;text-align:end}#main-text{grid-row-start:3;overflow:hidden;display:flex;flex-direction:column;align-items:center}#description{width:100%;margin:auto;border-radius:1mm;background-color:gray;font-size:{};}.card-element{padding:.25em;background-color:#000;border-radius:1mm;z-index:1}</style> <div id="header"> <div class="card-element">{{Title}}</div> <div class="card-element">{{Level}}</div> </div> <div id="main-text"> <div id="stat-block"> <div>{{Casting_Time}}</div> <div>{{Range}}</div> <div>{{Duration}}</div> <div>{{Components}}</div> <div>{{School}}</div> <div>{{Save}}</div> </div> <div id="description">{{Description}}</div> </div> <div id="copyright"> ©2024 WiKisfiam </div> </div>'},154:function(e,t,a){var i={"./basic-template-2.html":617,"./basic-template.html":370,"./dnd_spell_card_template.html":176};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=l,e.exports=r,r.id=154}}]);