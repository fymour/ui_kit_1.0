!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var t="object"==typeof exports?e(require("react")):e(n.react);for(var r in t)("object"==typeof exports?exports:n)[r]=t[r]}}(self,(n=>(()=>{"use strict";var e={291:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([n.id,".button {\n    font-family: 'Rubik', sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n    border-radius: 4px !important;\n  }\n  .button--primary {\n    color: white;\n    background-color: #18569e;\n  }\n  .button--secondary {\n    color: #6b7a99;\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    border: 1px solid #D3D8E6;\n  }\n  .button--tertiary {\n    color: gray;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n    border: none;\n\n  }\n\n  .button--disabled-primary {\n    background-color: #a3bbd8;\n    border: none !important;\n    box-shadow: none !important;\n    color: rgba(255, 255, 255, 0.61);\n    border-radius: 4px;\n  }\n  .button--disabled-primary:hover {\n    background-color: #a3bbd8;\n  }\n  .button--disabled-secondary {\n    background-color: transparent;\n    border: 1px solid #D3D8E6 !important;\n    box-shadow: none !important;\n    color: #A2A9B8;\n    border-radius: 4px;\n  }\n  .button--disabled-secondary:hover {\n    background-color: transparent;\n    color: #A2A9B8;\n  }\n  .button--hover-primary:hover{\n    background-color: #00468a !important;\n  }\n  .button--hover-secondary:hover{\n    border: 1px solid #00468a;\n    color: #00468a;\n    background-color: #fff;\n    \n  }\n\n  .button--small {\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 12px 25px;\n    border-radius: 0px;\n    border-radius: 4px;\n  }\n  .button--medium {\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 14px 25px;\n    border-radius: 4px;\n    border-radius: 0px;\n  }\n  .button--large {\n    line-height: 20px;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 16px 25px;\n    border-radius: 0px;\n    border-radius: 4px;\n  }\n\n\n\n\n  .button {\n    position: relative;\n    transition: all 0.3s;\n  }\n  \n  .button--active-primary::before, .button--active-primary::after {\n    content: '';\n    position: absolute;\n    transition: all 0.3s;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n  \n  .button--active-primary::before {\n    transition: transform 0.15s, 0.15s border-radius 0.15s;\n    opacity: 0;\n    background:  rgba(255, 255, 255, 0.1);\n    transform: scale(0.1, 0.1);\n    border-radius: 200px;\n  }\n  \n  .button--active-primary:active::before {\n    opacity: 1;\n    transform: scale(1, 1);\n    border-radius: 0;\n  }\n  \n  .button--active-primary::after {\n    transition: all 0.3s;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .button--active-primary:active::after {\n    opacity: 0;\n  }\n\n\n\n  .button--active-secondary::before, .button--active-secondary::after {\n    content: '';\n    position: absolute;\n    transition: all 0.3s;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n  \n  .button--active-secondary::before {\n    transition: transform 0.15s, 0.15s border-radius 0.15s;\n    opacity: 0;\n    background: rgba(24, 86, 158, 0.1);\n    transform: scale(0.1, 0.1);\n    border-radius: 50%;\n  }\n  \n  .button--active-secondary:active::before {\n    opacity: 1;\n    transform: scale(1, 1);\n    border-radius: 0;\n  }\n  \n  .button--active-secondary::after {\n    transition: all 0.3s;\n  }\n  \n  .button--active-secondary:active::after {\n    opacity: 0;\n  }",""]);const l=i},840:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".collapse-size{\n    padding: 0,75rem;\n    border-bottom: black;\n    display: flex;\n    justify-content: space-between;\n}\n.text-weight{\n    font-weight: bold;\n}\n.container_opened_content{\n    padding: 0,75rem;\n}\n.opened_cont{\n    border-bottom: black;\n}",""]);const l=i},927:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([n.id,"input:disabled{\n    background-color: #EDEFF3;\n    border:none;\n}\n::placeholder{\n    color: #6B7A99;\n}\n\n.input--label{\n    font-family: 'Rubik';\n    font-size: 14px;\n    line-height: 20px;\n    display: flex;\n    flex-direction: column;\n    color: #6B7A99;\n    vertical-align: top;\n    padding-bottom: 8px;\n\n}\n\n.input--small{\n    width: 280px;\n    height: 32px;\n    padding: 6px, 12px;\n    color: #6B7A99;\n    border-radius: 4px;\n    font-family: 'Rubik';\n    border: 1px solid #D3D8E6;\n    font-size: 14px;\n}\n\n\n.input--medium{\n    width: 280px;\n    height: 40px;\n    padding: 10px, 12px;\n    border-radius: 4px;\n    font-family: 'Rubik';\n    border: 1px solid #D3D8E6;\n    color: #6B7A99;\n    font-size: 16px;\n\n\n}\ninput::placeholder{\n    padding: 10px;\n}\n.input--large{\n    width: 280px;\n    height: 48px;\n    padding: 14px, 12px;\n    border-radius: 4px;\n    border: 1px solid #D3D8E6;\n    font-family: 'Rubik';\n    font-size: 16px;\n    color: #6B7A99;\n}\n\n\n\n.input--error{\n    border-color: #FF564E;\n    border-radius: 4px;\n}\n\n.input--error::placeholder{\n    padding: 10px;\n}\n\n.input--errormsg{\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    padding-top: 8px;\n    font-family: 'Rubik';\n    color: red;\n    align-items: flex-start;\n}\n/* .input--small::placeholder{\n    padding: 6px,12px;\n}\n\n.input--medium::placeholder{\n  padding: 10px,12px;\n}\n.input--large::placeholder{\n    padding: 14px,12px;\n} */\n",""]);const l=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},68:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),s=t.n(l),d=t(565),c=t.n(d),u=t(216),p=t.n(u),f=t(589),b=t.n(f),m=t(291),v={};v.styleTagTransform=b(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},899:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),s=t.n(l),d=t(565),c=t.n(d),u=t(216),p=t.n(u),f=t(589),b=t.n(f),m=t(840),v={};v.styleTagTransform=b(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},761:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),l=t(569),s=t.n(l),d=t(565),c=t.n(d),u=t(216),p=t.n(u),f=t(589),b=t.n(f),m=t(927),v={};v.styleTagTransform=b(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var s=n[l],d=r.base?s[0]+r.base:s[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var s=r(n,o),d=0;d<a.length;d++){var c=t(a[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},683:function(n,e,t){var r=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},o=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.Button=void 0;const a=o(t(156));t(68),e.Button=n=>{var{variant:e="primary",primary:t=!1,size:o="medium",disabled:i=!1,disableStyle:l,hover:s=!1,hoverStyle:d,active:c=!0,activeStyle:u,children:p}=n,f=r(n,["variant","primary","size","disabled","disableStyle","hover","hoverStyle","active","activeStyle","children"]);if(s)var d="hover";if(c)var u="active";if(i){var l="disabled";d="",u=""}return a.default.createElement("button",Object.assign({type:"button",disabled:i,className:["button",`button--${o}`,`button--${e}`,`button--${l}-${e}`,`button--${d}-${e}`,`button--${u}-${e}`].join(" ")},f),p)}},834:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.Collapse=void 0;const o=r(t(156)),a=t(156);t(899),e.Collapse=({open:n,children:e,title:t})=>{const[r,i]=(0,a.useState)(n);return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"card"},o.default.createElement("div",null,o.default.createElement("div",{className:"collapse-size"},o.default.createElement("h6",{className:"text-weight"},t),o.default.createElement("button",{type:"button",className:"btn",onClick:()=>{i((n=>!n))}},r?o.default.createElement("span",null,"↑"):o.default.createElement("span",null,"↓")))),o.default.createElement("div",{className:"opened_cont"},o.default.createElement("div",null,r&&o.default.createElement("div",{className:"container_opened_content"},e)))))},e.default=e.Collapse},196:function(n,e,t){var r=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},o=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.Input=void 0;const a=o(t(156));t(761),e.Input=n=>{var{id:e,label:t="",placeholder:o="",disabled:i=!0,errors:l=!1,errorStyle:s,errorMessage:d="",onChange:c,value:u,size:p="medium"}=n,f=r(n,["id","label","placeholder","disabled","errors","errorStyle","errorMessage","onChange","value","size"]);if(l){var s="error";u="Wrong value",d="Error message"}else u="";return a.default.createElement(a.default.Fragment,null,a.default.createElement("label",{className:"input--label"},t),a.default.createElement("input",Object.assign({id:e,className:[`input--${p}`,`input--${s}`].join(" "),disabled:i,onChange:n=>c(n.target.value),value:u,placeholder:o},f)),a.default.createElement("span",{className:"input--errormsg"},l?d:""))},e.default=e.Input},156:e=>{e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.nc=void 0;var o={};return(()=>{var n=o;Object.defineProperty(n,"__esModule",{value:!0}),n.Collapse=n.Input=n.Button=void 0;const e=r(683);Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return e.Button}});const t=r(196);Object.defineProperty(n,"Input",{enumerable:!0,get:function(){return t.Input}});const a=r(834);Object.defineProperty(n,"Collapse",{enumerable:!0,get:function(){return a.Collapse}})})(),o})()));