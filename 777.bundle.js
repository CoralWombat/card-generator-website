(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[777],{6777:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var a=t(6540),i=t(2223),l=t(3069),s=t(9749),r=t(5072),o=t.n(r),d=t(7825),c=t.n(d),m=t(7659),u=t.n(m),p=t(5056),g=t.n(p),f=t(540),h=t.n(f),x=t(1113),v=t.n(x),y=t(4799),b={};b.styleTagTransform=v(),b.setAttributes=g(),b.insert=u().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=h(),o()(y.A,b),y.A&&y.A.locals&&y.A.locals;var w=t(9119),k=t(7002),j=(0,a.createContext)(null),z=t(4848);const C=(0,k.f)((()=>t.e(242).then(t.bind(t,8242)))),N=t(7965);var _=e=>{let{className:n,id:t,template:i,templateParameters:l}=e;if(!i)return(0,z.jsx)("div",{className:[n,"card"].join(" ")});const[s,r]=(0,a.useContext)(j),[o,d]=(0,a.useState)(!1),c=(0,a.useRef)(null),m=N.render(i,l);return(0,a.useEffect)((()=>{c.current.querySelectorAll(".text-autosized-container").forEach((e=>{const n=e.querySelector(".text-autosized"),t=window.getComputedStyle(n).fontSize;((e,n,t)=>{let a=1,i=!1;for(;!i&&a<=t;)e.style.fontSize=`${a}px`,l=n.clientHeight,i=n.scrollHeight>l,i||a++;var l;e.style.fontSize=a-1+"px"})(n,e,Number(t.substring(0,t.length-2)))}))}),[i,l]),(0,z.jsxs)("div",{className:[n,"relative"].join(" "),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[o&&t&&(0,z.jsx)(w.$,{size:"small",rounded:!0,severity:"danger",className:"no-print absolute top-1 right-1 h-4 w-4 z-50",style:{padding:"0rem",background:"rgb(220 38 38)",border:"rgb(220 38 38)"},onClick:()=>{r((e=>e.filter((e=>e.id!==t))))},children:(0,z.jsx)(C,{width:"1rem",height:"1rem",fill:"white"})}),(0,z.jsx)("div",{ref:c,className:[n,"card"].join(" "),dangerouslySetInnerHTML:{__html:m}})]})},S=t(413),T=e=>{let{template:n,templateParameters:t,onParametersChange:a}=e;const i=(e=>[...e.matchAll(/{{\s*&?([^}\s]+)\s*}}/g)].map((e=>e[1])))(n);return(0,z.jsx)("div",{id:"template-form",className:"flex flex-col gap-7 pt-3",children:i.map((e=>(0,z.jsxs)("span",{className:"p-float-label",children:[(0,z.jsx)(S.S,{className:"w-full",id:e,value:t[e]||"",onChange:n=>a({...t,[e]:n.target.value})}),(0,z.jsx)("label",{htmlFor:e,children:e})]},"template-form-"+e)))})},A=e=>{let{}=e;const[n,t]=(0,a.useContext)(j);return(0,z.jsx)("div",{className:"flex flex-wrap",children:n.map((e=>(0,z.jsx)(_,{id:e.id,template:e.template,templateParameters:e.templateParameters},e.id)))})};const P={label:"Custom Template",name:"custom_template",defaultValues:{}};var D=[{label:"Basic Template",name:"basic-template.html",defaultValues:{Image_Source:"https://th.bing.com/th/id/OIG1.D7RIkM1p994fC1T1qVE8?w=1024&h=1024&rs=1&pid=ImgDetMain",Title:"Soft Kitty",Description:"A soft kitty is a gentle and plush feline, often characterized by its fluffy fur and soothing purr."}},{label:"Cards Against Mankind - Black",name:"cards-against-mankind-black.html",defaultValues:{Text:"Best card game prototyping website: ______."}},{label:"Cards Against Mankind - White",name:"cards-against-mankind-white.html",defaultValues:{Text:"Forge of Cards"}},{label:"D&D Spell Card",name:"dnd_spell_card_template.html",defaultValues:{Image_Source:"https://th.bing.com/th/id/OIG1.0LHNGA6aZmQso9rp9UVy?pid=ImgGn",Title:"Mage Armor",Level:"1st",Casting_Time:"1 Action",Range:"Touch",Duration:"8 Hours",Components:"V, S, M*",School:"Abjuration",Save:"None",Description:"You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."}}],I=t(8554),M=t(7711),H=e=>{let{template:n,templateParameters:t}=e;const[i,l]=(0,a.useContext)(j),s=(0,a.useRef)(null);return(0,z.jsxs)("div",{className:"flex flex-row flex-wrap gap-2 justify-center",children:[(0,z.jsx)(I.e,{ref:s,disabled:""===n,auto:!0,customUpload:!0,mode:"basic",accept:".csv",chooseLabel:"Upload Data",uploadHandler:async e=>{const t=await(async e=>{const n=[],t=(0,M.qg)({columns:!0});return t.on("readable",(function(){let e;for(;null!==(e=t.read());)n.push(e)})),t.on("error",(function(e){console.error(e.message)})),t.write(await e.text()),n})(e.files[0]),a=i.length,r=t.map(((e,t)=>({id:"card-"+(a+t),template:n,templateParameters:e})));l((e=>[...r,...e])),s.current.clear()},pt:{chooseIcon:{className:"hidden"}}}),(0,z.jsx)(w.$,{id:"clear-prints-button",label:"Clear Prints",onClick:()=>l([])}),(0,z.jsx)(w.$,{id:"add-to-print-button",label:"Add To Print",onClick:()=>l((e=>[{id:"card-"+e.length,template:n,templateParameters:t},...e])),disabled:!n}),(0,z.jsx)(w.$,{id:"print-button",label:"Print",onClick:()=>window.print(),disabled:0===i.length})]})},V=e=>{let{className:n}=e;const[r,o]=(0,a.useState)([]),[d,c]=(0,a.useState)(null),[m,u]=(0,a.useState)(null),[p,g]=(0,a.useState)({}),f=(0,a.useMemo)((()=>d===P.name),[d]);return(0,a.useEffect)((()=>{var e;u(!d||f?"":(e=d,t(3154)("./"+e).default))}),[d]),(0,a.useEffect)((()=>{if(!d)return;const e=D.find((e=>e.name===d));g(e?e.defaultValues:{})}),[m]),(0,z.jsx)(j.Provider,{value:[r,o],children:(0,z.jsxs)("div",{className:n+" flex flex-col w-full",children:[(0,z.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,z.jsxs)("div",{className:"no-print flex flex-col gap-4 w-full",children:[(0,z.jsx)(i.m,{value:d,onChange:e=>c(e.value),options:[P,...D],optionLabel:"label",optionValue:"name",placeholder:"Select Template"}),f&&(0,z.jsxs)("span",{className:"p-float-label mt-3",children:[(0,z.jsx)(s.Z,{id:"custom-template-text-field",className:"w-full max-w-full",autoResize:!0,value:m,onChange:e=>u(e.target.value),rows:5}),(0,z.jsx)("label",{htmlFor:"custom-template-text-field",children:"Template"})]}),m&&(0,z.jsx)(T,{template:m,templateParameters:p,onParametersChange:e=>g(e)}),(0,z.jsx)(H,{template:m,templateParameters:p})]}),(0,z.jsx)(l.c,{className:"no-print",layout:"vertical"}),(0,z.jsx)(_,{className:"no-print w-full self-center",template:m,templateParameters:p})]}),(0,z.jsx)(l.c,{className:"no-print"}),(0,z.jsx)(A,{})]})})}},4799:function(e,n,t){"use strict";var a=t(1601),i=t.n(a),l=t(6314),s=t.n(l)()(i());s.push([e.id,".card{margin-top:.5px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.card,.card *{display:inline-block;page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid}",""]),n.A=s},8902:function(e,n,t){"use strict";t.r(n),n.default='<div\n  style="\n    width: 6.8cm;\n    height: 9.3cm;\n\n    background-color: black;\n\n    outline-style: dashed;\n    outline-color: gray;\n    outline-width: thin;\n\n    padding: 2mm;\n\n    font-size: 12px;\n  "\n>\n  <div\n    style="\n    width: 100%;\n    height: 100%;\n\n    color: white;\n    text-align: center;\n\n    background-image: url(\'{{&Image_Source}}\');\n    background-position-y: -1cm;\n    background-position-x: center;\n    background-size: 6.4cm 6.4cm;\n    background-repeat: no-repeat;\n\n    display: grid;\n    grid-template-rows: [row1-start] 1.5em [row1-end] 3.8cm [third-line] 4.5cm [fourth-line] 0.5em [last-line]"\n  >\n    <div\n      style="display: flex; flex-direction: row; justify-content: space-between"\n    >\n      <div\n        style="\n          display: flex;\n          align-items: center;\n          padding: 0.25em;\n          background-color: black;\n          border-radius: 1mm;\n          border-top-left-radius: 0;\n          z-index: 1;\n        "\n      >\n        {{Title}}\n      </div>\n    </div>\n    <div></div>\n    <div\n      class="text-autosized-container"\n      style="\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: auto;\n        border-radius: 2mm;\n        background-color: gray;\n      "\n    >\n      <span class="text-autosized">{{Description}}</span>\n    </div>\n    <div style="grid-row-start: 4; font-size: 0.5em">©2024 Forge of Cards</div>\n  </div>\n</div>\n'},7269:function(e,n,t){"use strict";t.r(n),n.default='<div\n  style="\n    width: 67.5mm;\n    height: 92mm;\n\n    background-color: black;\n\n    outline-style: dashed;\n    outline-color: gray;\n    outline-width: thin;\n\n    padding: 2mm;\n\n    font-size: 24px;\n    color: white;\n    font-weight: 700;\n    font-family: Helvetica Neue, Arial, Helvetica, Geneva, sans-serif;\n  "\n>\n  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">\n    <div\n      class="text-autosized-container"\n      style="\n        width: 100%;\n        height: 78mm;\n\n        padding: 18px 20px 0px 20px;\n      "\n    >\n      <span class="text-autosized">{{Text}}</span>\n    </div>\n    <div style="font-size: 0.6em; padding: 0px 20px 18px; display: flex">\n      <img\n        src="https://forgeofcards.com/favicon.png"\n        style="width: 1em; height: 1em"\n      />\n      <div>Forge of Cards</div>\n    </div>\n  </div>\n</div>\n'},8947:function(e,n,t){"use strict";t.r(n),n.default='<div\n  style="\n    width: 67.5mm;\n    height: 92mm;\n\n    background-color: white;\n\n    outline-style: dashed;\n    outline-color: gray;\n    outline-width: thin;\n\n    padding: 2mm;\n\n    font-size: 24px;\n    color: black;\n    font-weight: 700;\n    font-family: Helvetica Neue, Arial, Helvetica, Geneva, sans-serif;\n  "\n>\n  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">\n    <div\n      class="text-autosized-container"\n      style="\n        width: 100%;\n        height: 78mm;\n\n        padding: 18px 20px 0px 20px;\n      "\n    >\n      <span class="text-autosized">{{Text}}</span>\n    </div>\n    <div style="font-size: 0.6em; padding: 0px 20px 18px; display: flex">\n      <img\n        src="https://forgeofcards.com/favicon.png"\n        style="width: 1em; height: 1em"\n      />\n      <div>Forge of Cards</div>\n    </div>\n  </div>\n</div>\n'},8676:function(e,n,t){"use strict";t.r(n),n.default='<div style="\nwidth: 6.8cm;\nheight: 9.3cm;\n\nbackground-color: black;\n\noutline-style: dashed;\noutline-color: gray;\noutline-width: thin;\n\npadding: 2mm;\n\nfont-size: 12px;">\n    <div style="\n    width: 100%;\n    height: 100%;\n\n    color: white;\n    text-align: center;\n\n    background-image: url(\'{{&Image_Source}}\');\n    background-position-y: -1cm;\n    background-position-x: center;\n    background-size: 6.4cm 6.4cm;\n    background-repeat: no-repeat;\n\n    border-radius: 3mm;\n\n    display: grid;\n    grid-template-rows: [row1-start] 1.5em [row1-end] 3.8cm [third-line] auto [fourth-line] 0.5em [last-line]">\n        <div style="\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        grid-row-start: 1;">\n            <div style="\n            display: flex;\n            align-items: center;\n            padding: 0.25em;\n            background-color: black;\n            border-radius: 1mm;\n            z-index: 1;">{{Title}}</div>\n            <div style="\n            display: flex;\n            align-items: center;\n            padding: 0.25em;\n            background-color: black;\n            border-radius: 1mm;\n            z-index: 1;">{{Level}}</div>\n        </div>\n        <div style="\n        grid-row-start: 3;\n        display: flex;\n        flex-direction: column;\n        align-items: center;">\n            <div style="\n            width: 100%;\n            display: grid;\n            grid-template-columns: 50% 50%;">\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{Casting_Time}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Range}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{Duration}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Components}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: left;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: start;"><span class="text-autosized">{{School}}</span></div>\n                <div class="text-autosized-container" style="\n                display: flex;\n                align-items: center;\n                justify-content: right;\n                height: 1.5em;\n                background-color: black;\n                z-index: 1;\n                text-align: end;"><span class="text-autosized">{{Save}}</span></div>\n            </div>\n            <div class="text-autosized-container" style="\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 6.4cm;\n            height: 3cm;\n            margin: auto;\n            border-radius: 2mm;\n            background-color: gray;"><span class="text-autosized">{{Description}}</span></div>\n        </div>\n        <div style="\n        grid-row-start: 4;\n        font-size: 0.5em;">©2024 Forge of Cards</div>\n    </div>\n</div>'},3154:function(e,n,t){var a={"./basic-template.html":8902,"./cards-against-mankind-black.html":7269,"./cards-against-mankind-white.html":8947,"./dnd_spell_card_template.html":8676};function i(e){var n=l(e);return t(n)}function l(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=3154}}]);