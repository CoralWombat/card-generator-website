(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[741],{652:function(t,e,n){"use strict";n.r(e),e.default='<div style="background-color:rgb(216, 75, 185);width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\n    <div>{{Title}}</div>\n    <div>{{Description}}</div>\n    <div>{{Description_2}}</div>\n</div>'},627:function(t,e,n){"use strict";n.r(e),e.default='<div style="background-color:powderblue;width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\n    <div>{{Title}}</div>\n    <div>{{Description}}</div>\n</div>'},825:function(t,e,n){"use strict";n.r(e),e.default='<div id="card">\n\t<style>\n\t\t#card {\n\t\t\twidth: 6.4cm;\n\t\t\theight: 8.9cm;\n\t\t\t\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\t\n\t\t\tbackground-color: black;\n\t\t\tbackground-image: url("{{&Image_Source}}");\n\t\t\tbackground-position-y: -15%;\n\t\t\tbackground-position-x: center;\n\t\t\tbackground-size: 6.4cm 6.4cm;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\t\n\t\t\tborder-style: solid;\n\t\t\tborder-radius: 3mm;\n\t\t\tborder-width: 1mm;\n\t\t\tborder-color: black;\n\t\t\t\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: [row1-start] 1.5rem [row1-end] 4cm [third-line] auto [last-line]\n\t\t}\n\t\t#header {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-between;\n\t\t\t\n\t\t\tgrid-row-start: 1;\n\t\t}\n\t\t.card-element {\n\t\t\tpadding: 0.25rem;\n\t\t\tbackground-color: black;\n\t\t\tborder-radius: 1mm;\n\t\t\tz-index: 1;\n\t\t}\n\t\t.description {\n\t\t\tgrid-row-start: 3;\n\t\t\toverflow: hidden;\n\t\t\tbackground-color: dimgray;\n\t\t\tfont-size: {{Description_Scale}}rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t</style>\n\t<div id="header">\n\t\t<div class="card-element">{{Title}}</div>\n\t\t<div class="card-element">{{Level}}</div>\n\t</div>\n    <div class="card-element description">\n\t\t<div>{{Description}}</div>\n\t</div>\n</div>'},122:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var a=n(848),r=n(540),l=n(151);const i=n(965);var s=({className:t,template:e,templateParameters:n})=>{if(!e)return null;const r=i.render(e,n);return(0,a.jsx)("div",{className:[t,"card"].join(" "),dangerouslySetInnerHTML:{__html:r}})},c=n(308),d=({template:t,onParametersChange:e})=>{const n=(t=>[...t.matchAll(/{{\s*&?([^}\s]+)\s*}}/g)].map((t=>t[1])))(t),[l,i]=(0,r.useState)({});return(0,r.useEffect)((()=>{e(l)}),[l]),(0,a.jsx)("div",{id:"template-form",className:"flex flex-col gap-7 pt-3",children:n.map((t=>(0,a.jsxs)("span",{className:"p-float-label",children:[(0,a.jsx)(c.S,{className:"w-full",id:t,value:l[t]||"",onChange:e=>i((n=>({...n,[t]:e.target.value})))}),(0,a.jsx)("label",{htmlFor:t,children:t})]},"template-form-"+t)))})},o=n(69),m=n(119),u=({cards:t})=>(0,a.jsx)("div",{children:t.map(((t,e)=>(0,a.jsx)(s,{template:t.template,templateParameters:t.templateParameters},"card-"+e)))});const p=[{label:"Basic Template",name:"basic-template.html"},{label:"Basic Template 2",name:"basic-template-2.html"},{label:"D&D",name:"dnd_template.html"}];var f=({className:t})=>{const[e,i]=(0,r.useState)(null),[c,f]=(0,r.useState)(null),[v,h]=(0,r.useState)({}),[b,x]=(0,r.useState)([]);return(0,r.useEffect)((()=>{var t;e&&f((t=e,n(154)("./"+t).default))}),[e]),(0,a.jsxs)("div",{className:t+" flex flex-col w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsxs)("div",{className:"no-print flex flex-col gap-4 w-1/2",children:[(0,a.jsx)(l.m,{value:e,onChange:t=>i(t.value),options:p,optionLabel:"label",optionValue:"name",placeholder:"Select Template"}),c&&(0,a.jsx)(d,{template:c,onParametersChange:t=>h(t)}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap gap-2 justify-center",children:[(0,a.jsx)(m.$,{onClick:()=>x([]),children:"Clear Prints"}),(0,a.jsx)(m.$,{onClick:()=>x((t=>[...t,{template:c,templateParameters:v}])),disabled:!c,children:"Add To Print"}),(0,a.jsx)(m.$,{onClick:()=>window.print(),disabled:0===b.length,children:"Print"})]})]}),(0,a.jsx)(o.c,{className:"no-print",layout:"vertical"}),(0,a.jsx)(s,{className:"no-print w-1/2 self-center",template:c,templateParameters:v})]}),(0,a.jsx)(o.c,{className:"no-print"}),(0,a.jsx)(u,{cards:b})]})}},154:function(t,e,n){var a={"./basic-template-2.html":652,"./basic-template.html":627,"./dnd_template.html":825};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=l,t.exports=r,r.id=154}}]);