(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[102],{102:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(540),l=n(223),s=n(69),i=n(749),r=n(848);const o=n(965);var c=e=>{let{className:t,template:n,templateParameters:l}=e;if(!n)return(0,r.jsx)("div",{className:[t,"card"].join(" ")});const s=o.render(n,l),i=(0,a.useRef)(null);return(0,a.useEffect)((()=>{i.current.querySelectorAll(".text-autosized-container").forEach((e=>{const t=e.querySelector(".text-autosized"),n=window.getComputedStyle(t).fontSize;((e,t,n)=>{let a=1,l=!1;for(;!l&&a<=n;)e.style.fontSize=`${a}px`,s=t.clientHeight,l=t.scrollHeight>s,l||a++;var s;e.style.fontSize=a-1+"px"})(t,e,Number(n.substring(0,n.length-2)))}))}),[n,l]),(0,r.jsx)("div",{ref:i,className:[t,"card"].join(" "),dangerouslySetInnerHTML:{__html:s}})},d=n(413),m=e=>{let{template:t,templateParameters:n,onParametersChange:a}=e;const l=(e=>[...e.matchAll(/{{\s*&?([^}\s]+)\s*}}/g)].map((e=>e[1])))(t);return(0,r.jsx)("div",{id:"template-form",className:"flex flex-col gap-7 pt-3",children:l.map((e=>(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(d.S,{className:"w-full",id:e,value:n[e]||"",onChange:t=>a({...n,[e]:t.target.value})}),(0,r.jsx)("label",{htmlFor:e,children:e})]},"template-form-"+e)))})},u=e=>{let{cards:t}=e;return(0,r.jsx)("div",{className:"flex flex-wrap",children:t.map(((e,t)=>(0,r.jsx)(c,{template:e.template,templateParameters:e.templateParameters},"card-"+t)))})};const p={label:"Custom Template",name:"custom_template",defaultValues:{}};var f=[{label:"Basic Template",name:"basic-template.html",defaultValues:{}},{label:"Basic Template 2",name:"basic-template-2.html",defaultValues:{}},{label:"D&D Spell Card",name:"dnd_spell_card_template.html",defaultValues:{Image_Source:"https://th.bing.com/th/id/OIG1.0LHNGA6aZmQso9rp9UVy?pid=ImgGn",Title:"Mage Armor",Level:"1st",Casting_Time:"1 Action",Range:"Touch",Duration:"8 Hours",Components:"V, S, M*",School:"Abjuration",Save:"None",Description:"You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."}}],g=n(119),x=n(554),h=n(711),v=e=>{let{cards:t,setCards:n,template:l,templateParameters:s}=e;const i=(0,a.useRef)(null);return(0,r.jsxs)("div",{className:"flex flex-row flex-wrap gap-2 justify-center",children:[(0,r.jsx)(x.e,{ref:i,disabled:""===l,auto:!0,customUpload:!0,mode:"basic",accept:".csv",chooseLabel:"Upload Data",uploadHandler:async e=>{const t=(await(async e=>{const t=[],n=(0,h.qg)({columns:!0});return n.on("readable",(function(){let e;for(;null!==(e=n.read());)t.push(e)})),n.on("error",(function(e){console.error(e.message)})),n.write(await e.text()),t})(e.files[0])).map((e=>({template:l,templateParameters:e})));n((e=>[...t,...e])),i.current.clear()},pt:{chooseIcon:{className:"hidden"}}}),(0,r.jsx)(g.$,{id:"clear-prints-button",label:"Clear Prints",onClick:()=>n([])}),(0,r.jsx)(g.$,{id:"add-to-print-button",label:"Add To Print",onClick:()=>n((e=>[{template:l,templateParameters:s},...e])),disabled:!l}),(0,r.jsx)(g.$,{id:"print-button",label:"Print",onClick:()=>window.print(),disabled:0===t.length})]})},b=e=>{let{className:t}=e;const[o,d]=(0,a.useState)(null),[g,x]=(0,a.useState)(null),[h,b]=(0,a.useState)({}),[y,w]=(0,a.useState)([]),j=(0,a.useMemo)((()=>o===p.name),[o]);return(0,a.useEffect)((()=>{var e;x(!o||j?"":(e=o,n(154)("./"+e).default))}),[o]),(0,a.useEffect)((()=>{if(!o)return;const e=f.find((e=>e.name===o));b(e?e.defaultValues:{})}),[g]),(0,r.jsxs)("div",{className:t+" flex flex-col w-full",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,r.jsxs)("div",{className:"no-print flex flex-col gap-4 w-full",children:[(0,r.jsx)(l.m,{value:o,onChange:e=>d(e.value),options:[p,...f],optionLabel:"label",optionValue:"name",placeholder:"Select Template"}),j&&(0,r.jsxs)("span",{className:"p-float-label mt-3",children:[(0,r.jsx)(i.Z,{id:"custom-template-text-field",className:"w-full max-w-full",autoResize:!0,value:g,onChange:e=>x(e.target.value),rows:5}),(0,r.jsx)("label",{htmlFor:"custom-template-text-field",children:"Template"})]}),g&&(0,r.jsx)(m,{template:g,templateParameters:h,onParametersChange:e=>b(e)}),(0,r.jsx)(v,{cards:y,setCards:w,template:g,templateParameters:h})]}),(0,r.jsx)(s.c,{className:"no-print",layout:"vertical"}),(0,r.jsx)(c,{className:"no-print w-full self-center",template:g,templateParameters:h})]}),(0,r.jsx)(s.c,{className:"no-print"}),(0,r.jsx)(u,{cards:y})]})}},461:function(e,t,n){"use strict";n.r(t),t.default='<div style="background-color:rgb(216, 75, 185);width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\n    <div>{{Title}}</div>\n    <div>{{Description}}</div>\n    <div>{{Description_2}}</div>\n</div>'},902:function(e,t,n){"use strict";n.r(t),t.default='<div style="background-color:powderblue;width: 6.4cm; height: 8.9cm; text-align: center;border-radius: 3mm">\n    <div>{{Title}}</div>\n    <div>{{Description}}</div>\n</div>'},676:function(e,t,n){"use strict";n.r(t),t.default='<div style="\nwidth: 6.8cm;\nheight: 9.3cm;\n\nbackground-color: black;\n\noutline-style: dashed;\noutline-color: gray;\noutline-width: thin;\n\npadding: 2mm;\n\nfont-size: 12px;">\n    <div style="\n    width: 100%;\n    height: 100%;\n\n    color: white;\n    text-align: center;\n\n    background-image: url(\'{{&Image_Source}}\');\n    background-position-y: -1cm;\n    background-position-x: center;\n    background-size: 6.4cm 6.4cm;\n    background-repeat: no-repeat;\n\n    border-radius: 3mm;\n\n    display: grid;\n    grid-template-rows: [row1-start] 1.5em [row1-end] 3.8cm [third-line] auto [fourth-line] 0.5em [last-line]">\n        <div style="\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        grid-row-start: 1;">\n            <div style="\n            display: flex;\n            align-items: center;\n            padding: 0.25em;\n            background-color: black;\n            border-radius: 1mm;\n            z-index: 1;">{{Title}}</div>\n            <div style="\n            display: flex;\n            align-items: center;\n            padding: 0.25em;\n            background-color: black;\n            border-radius: 1mm;\n            z-index: 1;">{{Level}}</div>\n        </div>\n        <div style="\n        grid-row-start: 3;\n        display: flex;\n        flex-direction: column;\n        align-items: center;">\n            <div style="\n            width: 100%;\n            display: grid;\n            grid-template-columns: 50% 50%;">\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{Casting_Time}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Range}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{Duration}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Components}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{School}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Save}}</span></div>\n            </div>\n            <div class="text-autosized-container" style="\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 6.4cm;\n            height: 3cm;\n            margin: auto;\n            border-radius: 2mm;\n            background-color: gray;"><span class="text-autosized">{{Description}}</span></div>\n        </div>\n        <div style="\n        grid-row-start: 4;\n        font-size: 0.5em;">©2024 Forge of Cards</div>\n    </div>\n</div>'},154:function(e,t,n){var a={"./basic-template-2.html":461,"./basic-template.html":902,"./dnd_spell_card_template.html":676};function l(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=s,e.exports=l,l.id=154}}]);