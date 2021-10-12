(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(10),a=n.n(c),r=n(9),l=n(4),o=n(5),d=n(2),j=n(0);var b=function(e){var t=e.handleChange,n=e.data,i=e.handleRemoval,s=e.disabled,c=n.id,a=n.name,r=n.course,l=n.date;return Object(j.jsxs)("section",{className:"institution-sections form-item",style:{backgroundColor:s&&"#f6f6f6",pointerEvents:s&&"none"},children:[Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Institution"}),Object(j.jsx)("input",{name:"institution-name",value:a,type:"text",onChange:function(e){return t(e,c)},required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Course"}),Object(j.jsx)("input",{type:"text",name:"institution-course",value:r,onChange:function(e){return t(e,c)},required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Date"}),Object(j.jsx)("input",{type:"date",name:"institution-date",value:l,onChange:function(e){return t(e,c)},required:!0})]}),Object(j.jsx)("span",{className:"material-icons-outlined trash-can",onClick:function(){return i("Institutions",c)},children:"delete"})]},c)};var u=function(e){var t=e.handleChange,n=e.data,i=e.handleRemoval,s=e.disabled,c=n.company,a=n.position,r=n.mainTasks,l=n.initialDate,o=n.finalDate,d=n.id;return Object(j.jsxs)("section",{className:"form-item",style:{backgroundColor:s&&"#f6f6f6",pointerEvents:s&&"none"},children:[Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Company Name"}),Object(j.jsx)("input",{name:"experience-company",type:"text",value:c,onChange:function(e){return t(e,d)},required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Position Title"}),Object(j.jsx)("input",{type:"text",name:"experience-position",value:a,onChange:function(e){return t(e,d)},required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline textarea-div",children:[Object(j.jsx)("label",{htmlFor:"",children:"Main tasks"}),Object(j.jsx)("textarea",{name:"experience-mainTasks",value:r,className:"text-area",onChange:function(e){return t(e,d)}})]}),Object(j.jsxs)("div",{className:"worked-days",children:[Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Started working"}),Object(j.jsx)("input",{type:"month",name:"experience-initialDate",value:l,onChange:function(e){return t(e,d)},required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Worked until"}),Object(j.jsx)("input",{type:"month",name:"experience-finalDate",value:o,onChange:function(e){return t(e,d)},required:!0})]})]}),Object(j.jsx)("span",{className:"material-icons-outlined trash-can",style:{pointerEvents:s&&"none"},onClick:function(e){return i("experiences",d)},children:"delete"})]})};var m=function(e){var t=e.data,n=e.handleChange,i=e.disabled;return console.log(),Object(j.jsxs)("section",{className:"form-item basics",style:{backgroundColor:i&&"#f6f6f6",pointerEvents:i&&"none"},children:[Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"",children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",value:t.name,onChange:n,required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(j.jsx)("input",{type:"email",name:"email",value:t.email,id:"email",onChange:n,required:!0})]}),Object(j.jsxs)("div",{className:"section-div-inline",children:[Object(j.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(j.jsx)("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:n,required:!0})]})]})};var h=function(e){var t=e.data,n=t.name,i=t.phone,s=t.email;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{className:"number",children:i}),Object(j.jsx)("p",{className:"email",children:s})]})};var O=function(e){var t=e.data,n=t.name,i=t.course,s=t.date;return Object(j.jsxs)("div",{className:"section-div",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Institution:"}),Object(j.jsx)("p",{children:n})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Course:"}),Object(j.jsx)("p",{children:i})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Year:"}),Object(j.jsx)("p",{children:s})]})]})};var x=function(e){var t=e.data,n=t.company,i=t.position,s=t.mainTasks,c=t.initialDate,a=t.finalDate;return Object(j.jsxs)("div",{className:"section-div",children:[Object(j.jsxs)("div",{className:"company",children:[Object(j.jsx)("h4",{children:"Company:"}),Object(j.jsx)("p",{children:n})]}),Object(j.jsxs)("div",{className:"position",children:[Object(j.jsx)("h4",{children:"Position:"}),Object(j.jsx)("p",{children:i})]}),Object(j.jsxs)("div",{className:"main-tasks",children:[Object(j.jsx)("h4",{children:"Main Task:"}),Object(j.jsx)("p",{children:s})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"dates",children:[Object(j.jsx)("h4",{children:"Started:"}),Object(j.jsx)("p",{children:c})]}),Object(j.jsxs)("div",{className:"dates",children:[Object(j.jsx)("h4",{children:"Finished:"}),Object(j.jsx)("p",{children:a})]})]})]})},v=(n(16),n(8)),p=n.n(v);var f=function(){var e={name:"",email:"",phone:""},t=Object(i.useState)((function(){var t=localStorage.getItem("inputs");return JSON.parse(t)||e})),n=Object(d.a)(t,2),s=n[0],c=n[1];Object(i.useEffect)((function(){localStorage.setItem("inputs",JSON.stringify(s))}),[s]);var a=[{name:"",course:"",date:"",id:p()()}],v=Object(i.useState)((function(){var e=localStorage.getItem("institutions");return JSON.parse(e)||a})),f=Object(d.a)(v,2),N=f[0],g=f[1];Object(i.useEffect)((function(){localStorage.setItem("institutions",JSON.stringify(N))}),[N]);var C=[{company:"",position:"",mainTasks:" ",initialDate:"2018-05",finalDate:"2020-05",id:p()()}],y=Object(i.useState)((function(){var e=localStorage.getItem("experiences");return JSON.parse(e)||C})),S=Object(d.a)(y,2),k=S[0],D=S[1];Object(i.useEffect)((function(){localStorage.setItem("experiences",JSON.stringify(k))}),[k]);var E={basicsDisabled:!1,institutionsDisabled:!1,experincesDisabled:!1},F=Object(i.useState)((function(){var e=localStorage.getItem("defaultEditingStatus");return JSON.parse(e)||E})),I=Object(d.a)(F,2),q=I[0],J=I[1];Object(i.useEffect)((function(){localStorage.setItem("defaultEditingStatus",JSON.stringify(q))}),[q]);var w=function(e,t){var n=e.target,i=n.name,a=n.value,r=i.split("-"),j=Object(d.a)(r,2),b=j[0],u=j[1];u?("institution"===b?g:D)((function(e){return e.map((function(e){return e.id===t&&(e[u]=a),e}))})):c(Object(o.a)(Object(o.a)({},s),{},Object(l.a)({},i,a)))},T=function(e,t){("experiences"===e?D:g)((function(e){return e.filter((function(e){return e.id!==t}))}))},R=function(e){var t=e.target.name;J((function(e){var n=!e[t];return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},t,n))}))};return Object(j.jsxs)("main",{children:[Object(j.jsxs)("form",{className:"cv-form",onSubmit:function(e){e.preventDefault(),console.log("submit")},children:[Object(j.jsxs)("section",{className:"form-section basics-form",children:[Object(j.jsx)(m,{data:s,handleChange:w,disabled:q.basicsDisabled}),Object(j.jsx)("button",{type:"button",name:"basicsDisabled",onClick:R,children:q.basicsDisabled?"Edit":"Save"}),Object(j.jsx)("div",{className:"form-section-modal"})]}),Object(j.jsxs)("section",{className:"form-section institutions-form",children:[N.map((function(e){return Object(j.jsx)(b,{data:e,handleRemoval:T,disabled:q.institutionsDisabled,handleChange:w},e.id)})),Object(j.jsxs)("div",{className:"buttons-div",children:[Object(j.jsx)("button",{type:"button",onClick:function(){g([].concat(Object(r.a)(N),[a]))},children:"Add New"}),Object(j.jsx)("button",{type:"button",name:"institutionsDisabled",onClick:R,children:q.institutionsDisabled?"Edit":"Save"})]})]}),Object(j.jsxs)("section",{className:"form-section experiences-form",children:[k.map((function(e){return Object(j.jsx)(u,{data:e,handleRemoval:T,disabled:q.experincesDisabled,handleChange:w},e.id)})),Object(j.jsxs)("div",{className:"buttons-div",children:[Object(j.jsx)("button",{type:"button",onClick:function(){D([].concat(Object(r.a)(k),[C]))},children:"Add New"}),Object(j.jsx)("button",{type:"button",name:"experincesDisabled",onClick:R,children:q.experincesDisabled?"Edit":"Save"})]})]}),Object(j.jsx)("button",{className:"submit-form",children:"Submit"})]}),Object(j.jsxs)("div",{className:"CV",children:[Object(j.jsx)("section",{className:"basic-info",children:Object(j.jsx)(h,{data:s})}),Object(j.jsxs)("section",{className:"courses",children:[Object(j.jsx)("h3",{children:"Courses:"}),N.map((function(e){return Object(j.jsx)(O,{data:e},e.id+"-ui")}))]}),Object(j.jsxs)("section",{className:"experiences",children:[Object(j.jsx)("h3",{children:"Experiences:"}),k.map((function(e){return Object(j.jsx)(x,{data:e},e.id+"-ui")}))]})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ba9d8d5e.chunk.js.map