(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[803],{466:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var n=r(1601),a=r.n(n),l=r(6314),s=r.n(l)()(a());s.push([t.id,".card{display:inline-block;break-inside:avoid}",""]);const i=s},2930:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var n=r(1601),a=r.n(n),l=r(6314),s=r.n(l)()(a());s.push([t.id,"",""]);const i=s},652:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n='<div style="background-color:rgb(216, 75, 185);width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\r\n    <div>{{Title}}</div>\r\n    <div>{{Description}}</div>\r\n    <div>{{Description_2}}</div>\r\n</div>'},1627:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n='<div style="background-color:powderblue;width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\r\n    <div>{{Title}}</div>\r\n    <div>{{Description}}</div>\r\n</div>'},2825:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n='<div id="card">\r\n\t<style>\r\n\t\t#card {\r\n\t\t\twidth: 6.4cm;\r\n\t\t\theight: 8.9cm;\r\n\t\t\t\r\n\t\t\tcolor: white;\r\n\t\t\ttext-align: center;\r\n\t\t\t\r\n\t\t\tbackground-color: black;\r\n\t\t\tbackground-image: url("{{&Image_Source}}");\r\n\t\t\tbackground-position-y: -15%;\r\n\t\t\tbackground-position-x: center;\r\n\t\t\tbackground-size: 6.4cm 6.4cm;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\r\n\t\t\tborder-style: solid;\r\n\t\t\tborder-radius: 3mm;\r\n\t\t\tborder-width: 1mm;\r\n\t\t\tborder-color: black;\r\n\t\t\t\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-rows: [row1-start] 1.5rem [row1-end] 4cm [third-line] auto [last-line]\r\n\t\t}\r\n\t\t#header {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t\r\n\t\t\tgrid-row-start: 1;\r\n\t\t}\r\n\t\t.card-element {\r\n\t\t\tpadding: 0.25rem;\r\n\t\t\tbackground-color: black;\r\n\t\t\tborder-radius: 1mm;\r\n\t\t\tz-index: 1;\r\n\t\t}\r\n\t\t.description {\r\n\t\t\tgrid-row-start: 3;\r\n\t\t\toverflow: hidden;\r\n\t\t\tbackground-color: dimgray;\r\n\t\t\tfont-size: {{Description_Scale}}rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t</style>\r\n\t<div id="header">\r\n\t\t<div class="card-element">{{Title}}</div>\r\n\t\t<div class="card-element">{{Level}}</div>\r\n\t</div>\r\n    <div class="card-element description">\r\n\t\t<div>{{Description}}</div>\r\n\t</div>\r\n</div>'},2803:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>C});var n=r(4848),a=r(5072),l=r.n(a),s=r(7825),i=r.n(s),d=r(7659),c=r.n(d),o=r(5056),m=r.n(o),u=r(540),p=r.n(u),v=r(1113),h=r.n(v),b=r(2930),f={};f.styleTagTransform=h(),f.setAttributes=m(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),l()(b.A,f),b.A&&b.A.locals&&b.A.locals;var g=r(6540),x=r(5151),w=r(466),j={};j.styleTagTransform=h(),j.setAttributes=m(),j.insert=c().bind(null,"head"),j.domAPI=i(),j.insertStyleElement=p(),l()(w.A,j),w.A&&w.A.locals&&w.A.locals;const k=r(7965),y=({className:t,template:e,templateParameters:r})=>{if(!e)return null;const a=k.render(e,r);return(0,n.jsx)("div",{className:[t,"card"].join(" "),dangerouslySetInnerHTML:{__html:a}})};var A=r(7308);const N=({template:t,onParametersChange:e})=>{const r=(t=>[...t.matchAll(/{{\s*&?([^}\s]+)\s*}}/g)].map((t=>t[1])))(t),[a,l]=(0,g.useState)({});return(0,g.useEffect)((()=>{e(a)}),[a]),(0,n.jsx)("div",{id:"template-form",className:"flex flex-col gap-7 pt-3",children:r.map((t=>(0,n.jsxs)("span",{className:"p-float-label",children:[(0,n.jsx)(A.S,{className:"w-full",id:t,value:a[t]||"",onChange:e=>l((r=>({...r,[t]:e.target.value})))}),(0,n.jsx)("label",{htmlFor:t,children:t})]},"template-form-"+t)))})};var T=r(3069),_=r(9119);const P=({cards:t})=>(0,n.jsx)("div",{children:t.map(((t,e)=>(0,n.jsx)(y,{template:t.template,templateParameters:t.templateParameters},"card-"+e)))}),S=[{label:"Basic Template",name:"basic-template.html"},{label:"Basic Template 2",name:"basic-template-2.html"},{label:"D&D",name:"dnd_template.html"}],C=({className:t})=>{const[e,a]=(0,g.useState)(null),[l,s]=(0,g.useState)(null),[i,d]=(0,g.useState)({}),[c,o]=(0,g.useState)([]);return(0,g.useEffect)((()=>{var t;e&&s((t=e,r(3154)("./"+t).default))}),[e]),(0,n.jsxs)("div",{className:t+" flex flex-col w-full",children:[(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsxs)("div",{className:"no-print flex flex-col gap-4 w-1/2",children:[(0,n.jsx)(x.m,{value:e,onChange:t=>a(t.value),options:S,optionLabel:"label",optionValue:"name",placeholder:"Select Template"}),l&&(0,n.jsx)(N,{template:l,onParametersChange:t=>d(t)}),(0,n.jsxs)("div",{className:"flex flex-row flex-wrap gap-2 justify-center",children:[(0,n.jsx)(_.$,{onClick:()=>o([]),children:"Clear Prints"}),(0,n.jsx)(_.$,{onClick:()=>o((t=>[...t,{template:l,templateParameters:i}])),disabled:!l,children:"Add To Print"}),(0,n.jsx)(_.$,{onClick:()=>window.print(),disabled:0===c.length,children:"Print"})]})]}),(0,n.jsx)(T.c,{className:"no-print",layout:"vertical"}),(0,n.jsx)(y,{className:"no-print w-1/2 self-center",template:l,templateParameters:i})]}),(0,n.jsx)(T.c,{className:"no-print"}),(0,n.jsx)(P,{cards:c})]})}},3154:(t,e,r)=>{var n={"./basic-template-2.html":652,"./basic-template.html":1627,"./dnd_template.html":2825};function a(t){var e=l(t);return r(e)}function l(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=l,t.exports=a,a.id=3154}}]);