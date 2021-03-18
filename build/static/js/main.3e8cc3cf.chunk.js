(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),a=t.n(r),o=t(6),u=t(3),i=t(0),s=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("li",{className:"person",children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:t,children:"delete"})]})},l=function(e){var n=e.persons,t=e.searchName,c=e.removePerson,r=t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n;return Object(i.jsx)("ul",{children:r.map((function(e){return Object(i.jsx)(s,{person:e,deletePerson:function(){return c(e.id,e.name)}},e.id)}))})},d=function(e){var n=e.searchName,t=e.handleSearchName;return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t})]})},j=function(e){var n=e.addName,t=e.newName,c=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"errorNoti",children:n})},b=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"successNoti",children:n})},f=function(){return Object(i.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16,textAlign:"center",width:"100%",height:40,paddingTop:"10vh"},children:[Object(i.jsx)("br",{}),Object(i.jsx)("em",{children:"Phonebook app, Department of Computer Science, University of Helsinki 2021"})]})},m=t(4),O=t.n(m),p="/api/persons",v=function(){return O.a.get(p).then((function(e){return e.data}))},x=function(e){return O.a.post(p,e).then((function(e){return e.data}))},N=function(e,n){return O.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return O.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),m=s[0],O=s[1],p=Object(c.useState)(""),w=Object(u.a)(p,2),S=w[0],C=w[1],k=Object(c.useState)(""),y=Object(u.a)(k,2),P=y[0],T=y[1],A=Object(c.useState)(null),D=Object(u.a)(A,2),E=D[0],I=D[1],J=Object(c.useState)(null),L=Object(u.a)(J,2),z=L[0],B=L[1];Object(c.useEffect)((function(){v().then((function(e){r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(h,{message:E}),Object(i.jsx)(b,{message:z}),Object(i.jsx)(d,{searchName:P,handleSearchName:function(e){T(e.target.value)}}),Object(i.jsx)("h1",{children:"Add a new"}),Object(i.jsx)(j,{addName:function(e){e.preventDefault();var n={name:m,number:S};if(t.filter((function(e){return e.name===m})).length>0){var c=t.find((function(e){return e.name===m})),a=Object(o.a)(Object(o.a)({},c),{},{number:S});window.confirm("".concat(m," is already added to the phonebook, replace the old number with a new one?"))&&N(c.id,a).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),B("Number for ".concat(m," has successfully changed")),setTimeout((function(){B(null)}),5e3)})).catch((function(e){I("Information of ".concat(m," has already been removed from server")),setTimeout((function(){I(null)}),5e3),r(t.filter((function(e){return e.id!==c.id})))}))}else B("Added ".concat(m," to the phonebook")),setTimeout((function(){B(null)}),5e3),x(n).then((function(e){r(t.concat(e)),O(""),C("")}))},newName:m,handleNameChange:function(e){O(e.target.value)},newNumber:S,handleNumberChange:function(e){C(e.target.value)}}),Object(i.jsx)("h1",{children:"Numbers"}),Object(i.jsx)(l,{persons:t,searchName:P,removePerson:function(e,n){window.confirm("Delete ".concat(n," ?"))&&g(e).then(r(t.filter((function(n){return n.id!==e}))))}}),Object(i.jsx)(f,{})]})};t(39);a.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3e8cc3cf.chunk.js.map