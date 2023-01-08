(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{7580:function(n,e,t){"use strict";t.d(e,{Z:function(){return C}});var r,o,i,a,c,s,l,u=t(168),m=t(3842),d=t(5705),p=m.Z.h2(r||(r=(0,u.Z)(["\n  margin-bottom: 30px;\n  text-transform: uppercase;\n  font-weight: 600;\n"]))),f=m.Z.label(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),h=m.Z.span(i||(i=(0,u.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),x=(0,m.Z)(d.gN)(a||(a=(0,u.Z)(["\n  height: 40px;\n  padding: 0 10px 0 10px;\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n  color: var(--main-text-color);\n  font-size: 14px;\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),b=m.Z.button(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 40px;\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),g=t(2007),v=t.n(g),y=t(6355),Z=m.Z.button(s||(s=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n  padding: 10px 25px 10px 25px;\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),j=m.Z.span(l||(l=(0,u.Z)(["\n  margin-left: 10px;\n"]))),_=t(7689),k=t(3329);function S(n){var e=n.text,t=n.path,r=(0,_.s0)();return(0,k.jsxs)(Z,{type:"button",onClick:function(){return r(t)},children:[(0,k.jsx)(y.BMs,{}),(0,k.jsx)(j,{children:e})]})}S.prototype={label:v().string,path:v().string};var w=S;var C=function(n){var e=n.title,t=n.initialValues,r=n.onSubmitForm,o=n.validationSchema,i=n.buttonLabel;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{children:e}),(0,k.jsx)(w,{text:"Contact list",path:"/contacts"}),(0,k.jsx)(d.J9,{initialValues:t,onSubmit:r,validationSchema:o,children:function(n){var e=n.values,t=n.handleChange,r=n.handleSubmit,o=n.isSubmitting;return(0,k.jsxs)(d.l0,{onSubmit:r,children:[(0,k.jsxs)(f,{children:[(0,k.jsx)(h,{children:"Name"}),(0,k.jsx)(x,{type:"text",name:"name",onChange:t,value:e.name}),(0,k.jsx)(d.Bc,{name:"name",component:"div"})]}),(0,k.jsxs)(f,{children:[(0,k.jsx)(h,{children:"Number"}),(0,k.jsx)(x,{type:"tel",name:"number",onChange:t,value:e.number}),(0,k.jsx)(d.Bc,{name:"number",component:"div"})]}),(0,k.jsx)(b,{type:"submit",disabled:o,children:o?"...":i})]})}})]})}},9593:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(2070),o=t(7580),i=t(1413),a=t(885),c=t(7689),s=t(2223),l=t(5264);var u=function(){var n=null,e=null,t=(0,c.UO)().contactId,r=(0,c.s0)(),o=(0,s.Cq)(),u=(0,a.Z)(o,2),m=u[0],d=u[1].isLoading,p=(0,s.wY)().data;return p&&(n=p.find((function(n){return n.id===t})),e={name:n.name,number:n.number}),{isUpdating:d,onSubmitForm:function(n){JSON.stringify(n)!==JSON.stringify(e)?(m((0,i.Z)({contactId:t},n)),r("/contacts"),l.Notify.success("The contact has been successfully changed.")):l.Notify.warning("Try to change something first.")},initialValues:e}},m=t(3854),d=t(3329);var p=function(){var n=u(),e=n.onSubmitForm,t=n.initialValues;return(0,d.jsx)(r.Z,{children:(0,d.jsx)(o.Z,{title:"Edit Contact ".concat(t.name),initialValues:t,onSubmitForm:e,validationSchema:m.OD,buttonLabel:"Change contact"})})}},3854:function(n,e,t){"use strict";t.d(e,{$T:function(){return a},OD:function(){return o},TW:function(){return i}});var r=t(7103),o=r.Ry({name:r.Z_().required().min(3).max(30),number:r.Rx().required()}),i=r.Ry({email:r.Z_().required().email(),password:r.Z_().required().min(7).max(14)}),a=r.Ry({name:r.Z_().required().min(3).max(30),email:r.Z_().required().email(),password:r.Z_().required().min(7).max(14)})},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=593.926a281d.chunk.js.map