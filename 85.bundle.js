"use strict";(self.webpackChunkcard_generator_website=self.webpackChunkcard_generator_website||[]).push([[85],{5085:function(e,n,t){t.r(n);var i=t(3069),r=t(4848);n.default=e=>{let{className:n}=e;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)(i.c,{}),(0,r.jsxs)("div",{className:"text-sm pb-4 pt-2 px-6",children:["Forge of Cards, created by Kristóf Göncző.",(0,r.jsx)("br",{}),"Copyright © 2024. All Rights Reserved.",(0,r.jsx)("br",{}),"version 1.6.1 beta"]})]})}},3069:function(e,n,t){t.d(n,{c:function(){return p}});var i=t(6540),r=t(2349),l=t(525),o=t(9741),d=t(4881),a={root:function(e){var n=e.props,t=e.horizontal,i=e.vertical;return(0,d.xW)("p-divider p-component p-divider-".concat(n.layout," p-divider-").concat(n.type),{"p-divider-left":t&&(!n.align||"left"===n.align),"p-divider-right":t&&"right"===n.align,"p-divider-center":t&&"center"===n.align||i&&(!n.align||"center"===n.align),"p-divider-top":i&&"top"===n.align,"p-divider-bottom":i&&"bottom"===n.align},n.className)},content:"p-divider-content"},s=l.x.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:a,styles:'\n@layer primereact {\n    .p-divider-horizontal {\n        display: flex;\n        width: 100%;\n        position: relative;\n        align-items: center;\n    }\n    \n    .p-divider-horizontal:before {\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        content: "";\n    }\n    \n    .p-divider-horizontal.p-divider-left {\n        justify-content: flex-start;\n    }\n    \n    .p-divider-horizontal.p-divider-right {\n        justify-content: flex-end;\n    }\n    \n    .p-divider-horizontal.p-divider-center {\n        justify-content: center;\n    }\n    \n    .p-divider-content {\n        z-index: 1;\n    }\n    \n    .p-divider-vertical {\n        min-height: 100%;\n        margin: 0 1rem;\n        display: flex;\n        position: relative;\n        justify-content: center;\n    }\n    \n    .p-divider-vertical:before {\n        position: absolute;\n        display: block;\n        top: 0;\n        left: 50%;\n        height: 100%;\n        content: "";\n    }\n    \n    .p-divider-vertical.p-divider-top {\n        align-items: flex-start;\n    }\n    \n    .p-divider-vertical.p-divider-center {\n        align-items: center;\n    }\n    \n    .p-divider-vertical.p-divider-bottom {\n        align-items: flex-end;\n    }\n    \n    .p-divider-solid.p-divider-horizontal:before {\n        border-top-style: solid;\n    }\n    \n    .p-divider-solid.p-divider-vertical:before {\n        border-left-style: solid;\n    }\n    \n    .p-divider-dashed.p-divider-horizontal:before {\n        border-top-style: dashed;\n    }\n    \n    .p-divider-dashed.p-divider-vertical:before {\n        border-left-style: dashed;\n    }\n    \n    .p-divider-dotted.p-divider-horizontal:before {\n        border-top-style: dotted;\n    }\n    \n    .p-divider-dotted.p-divider-horizontal:before {\n        border-left-style: dotted;\n    }\n}\n',inlineStyles:{root:function(e){var n=e.props;return{justifyContent:"horizontal"===n.layout?"center"===n.align||null===n.align?"center":"left"===n.align?"flex-start":"right"===n.align?"flex-end":null:null,alignItems:"vertical"===n.layout?"center"===n.align||null===n.align?"center":"top"===n.align?"flex-start":"bottom"===n.align?"flex-end":null:null}}}}}),p=i.forwardRef((function(e,n){var t=(0,o.qV)(),a=i.useContext(r.UM),p=s.getProps(e,a),c=s.setMetaData({props:p}),v=c.ptm,f=c.cx,u=c.sx,h=c.isUnstyled;(0,l.j)(s.css.styles,h,{name:"divider"});var g=i.useRef(null),y="horizontal"===p.layout,b="vertical"===p.layout;i.useImperativeHandle(n,(function(){return{props:p,getElement:function(){return g.current}}}));var m=t({ref:g,style:u("root"),className:(0,d.xW)(p.className,f("root",{horizontal:y,vertical:b})),"aria-orientation":p.layout,role:"separator"},s.getOtherProps(p),v("root")),x=t({className:f("content")},v("content"));return i.createElement("div",m,i.createElement("div",x,p.children))}));p.displayName="Divider"}}]);