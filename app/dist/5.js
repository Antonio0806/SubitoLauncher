(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./app/components/ConfirmDeleteModal/ConfirmDeleteModal.js":function(e,o,n){"use strict";n.r(o);n("./node_modules/core-js/modules/es.symbol.description.js"),n("./node_modules/core-js/modules/es.promise.js");var s,t=n("./node_modules/react/index.js"),a=n("./node_modules/antd/es/message/index.js"),i=n("./node_modules/antd/es/button/index.js"),l=n("path"),r=n.n(l),d=n("./node_modules/electron-log/index.js"),c=n.n(d),m=(n("fs"),n("./node_modules/fs-extra/lib/index.js")),u=n.n(m),p=(n("util"),n("./app/components/ConfirmDeleteModal/ConfirmDeleteModal.scss")),f=n.n(p),y=n("./app/components/Common/Modal/Modal.js"),v=n("./app/constants.js");function h(e,o,n,t){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={children:void 0}),o&&a)for(var l in a)void 0===o[l]&&(o[l]=a[l]);else o||(o=a||{});if(1===i)o.children=t;else if(i>1){for(var r=new Array(i),d=0;d<i;d++)r[d]=arguments[d+3];o.children=r}return{$$typeof:s,type:e,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}var b=h("br",{});o.default=e=>{const[o,n]=Object(t.useState)(!1),[s,l]=Object(t.useState)(!1),{name:d,type:m}=e.match.params;return h(y.a,{history:e.history,unMount:o,title:`Confirm ${"instance"===m?"Instance":"Server"} Deletion`,style:{height:210,width:400}},void 0,h("div",{className:f.a.main},void 0,"Are you sure you want to delete the following? ",b,h("div",{className:f.a.instanceName},void 0,e.match.params.name),"This cannot be undone and you will lose everything you've done"),h("div",{className:f.a.buttons},void 0,h(i.a,{type:"primary",disabled:s,onClick:()=>n(!0)},void 0,"No, Abort"),h("span",{onClick:()=>(async()=>{if(!0!==s)try{l(!0),await u.a.remove(r.a.join("instance"===m?v.w:v.x,d)),a.a.success(`${"instance"===m?"Instance":"Server"} deleted`)}catch(e){l(!1),a.a.error(`Error deleting ${d}`),c.a.error(e)}finally{n(!0)}})()},void 0,"Yes, Delete")))}},"./app/components/ConfirmDeleteModal/ConfirmDeleteModal.scss":function(e,o,n){e.exports={main:"_3DN05yRVhjew-LSBDbo_d4",instanceName:"_8KTeNKUYnxWFOoW7hTtOO",buttons:"_17pjmVY87yXdy7TbkaYoX8"}}}]);
//# sourceMappingURL=5.js.map