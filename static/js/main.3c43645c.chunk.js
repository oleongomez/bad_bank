(this.webpackJsonpbad_bank=this.webpackJsonpbad_bank||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),s=n.n(c),o=(n(25),n(26),n(2)),u=(n.p,n(27),n(3)),l=n(16),i=n(0),b=u.a,j=l.b,d=l.a,x=Object(r.createContext)({status:{},setContext:function(){}}),m=function(e){return Object(i.jsx)("div",{className:"card mb-3 "+(e.bgcolor?"bg-"+e.bgcolor:" ")+(e.txtcolor?"text-"+e.txtcolor:" "),style:{maxWidth:"18rem"},children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h5",{className:"card-header bg-primary text-light",children:e.header}),Object(i.jsxs)("div",{className:"card-body",children:[e.title&&Object(i.jsx)("h5",{className:"card-title",children:e.title}),e.text&&Object(i.jsx)("p",{className:"card-text",children:e.text}),e.body,e.status&&Object(i.jsx)("div",{id:"createStatus",children:e.status})]})]})})},O=function(){return Object(i.jsx)(m,{txtcolor:"black",header:"BadBank Home",title:"Welcome to the Bad Bank",text:"You can use this bank, no problem",body:Object(i.jsx)("img",{src:"/img/bank.png",className:"img-fluid",alt:"Responsibe image"})})},p=function(e,t){return t.filter((function(t){return t.name===e||t.email===e}))[0]},h=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},g=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=(t[1],Object(r.useState)("")),c=Object(o.a)(a,2),s=c[0],u=c[1],l=Object(r.useState)(""),b=Object(o.a)(l,2),j=b[0],d=b[1],O=Object(r.useContext)(x),h=O.status,g=O.setContext;return Object(i.jsx)(m,{bgcolor:"primary",header:"Login",status:"",body:n?Object(i.jsxs)(i.Fragment,{children:["User or email:",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"input",className:"form-control",id:"user",placeholder:"Enter user or email",value:s,onChange:function(e){return u(e.currentTarget.value)}}),Object(i.jsx)("br",{}),"Password:",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:j,onChange:function(e){return d(e.currentTarget.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",className:"btn-primary",onClick:function(){if(!function(e,t,n){return n.find((function(n){return console.log(n),(n.name===e||n.email===e)&&n.password===t}))}(s,j,h.users))return alert("Cannot login this user/password combination..."),u(""),void d("");g({users:h.users,current_user:p(s,h.users)})},children:"Login"})]}):Object(i.jsx)(i.Fragment,{})})},f=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(o.a)(c,2),u=s[0],l=s[1],b=Object(r.useState)(0),j=Object(o.a)(b,2),d=j[0],O=j[1],h=Object(r.useContext)(x),g=h.status,f=h.setContext;Object(r.useEffect)((function(){console.log("Rendering ...",g),console.log("Current user balance:",void 0!==g.current_user?g.current_user.balance:"Not defined"),a(void 0!==g.current_user),O(void 0!==g.current_user?g.current_user.balance:null)}),[g]);return Object(i.jsx)(m,{bgcolor:"primary",header:"Deposit",status:"",body:n?Object(i.jsxs)(i.Fragment,{children:["Balance :$",d,Object(i.jsx)("br",{}),"Deposit Amount:",Object(i.jsx)("input",{type:"input",className:"form-control",id:"amount",placeholder:"Amount to deposit",value:u,onChange:function(e){return l(e.currentTarget.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",className:"btn-primary",onClick:function(){console.log("amount: ",u),console.log("amount as float: ",parseInt(u)),console.log("user object: ",g.current_user),console.log("user object balance as float: ",parseFloat(g.current_user.balance),typeof g.current_user.balance);var e=parseFloat(g.current_user.balance)+parseFloat(u);console.log("new balance: ",e),l(0),O(e);var t=g.users.map((function(t){return t.name===g.current_user.name&&(t.balance=e),t}));console.log(t),f({users:t,current_user:p(g.current_user.name,t)}),console.log(g)},children:"Deposit"})]}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h3",{children:"Must login to show this page"})})})},v=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(o.a)(c,2),u=s[0],l=s[1],b=Object(r.useState)(0),j=Object(o.a)(b,2),d=j[0],O=j[1],h=Object(r.useState)(0),g=Object(o.a)(h,2),f=g[0],v=g[1],y=Object(r.useContext)(x),C=y.status,w=y.setContext;Object(r.useEffect)((function(){console.log("Rendering ...",C),console.log("Current user balance:",void 0!==C.current_user?C.current_user.balance:"Not defined"),a(void 0!==C.current_user),v(void 0!==C.current_user?C.current_user.balance:null)}),[C]);return Object(i.jsx)(m,{bgcolor:"primary",header:"Withdraw",status:"",body:n?Object(i.jsxs)(i.Fragment,{children:["Balance :$",f,Object(i.jsx)("br",{}),"Withdraw Amount:",Object(i.jsx)("input",{type:"input",className:"form-control",id:"amount",placeholder:"Amount to withdraw",value:d,onChange:function(e){return O(e.currentTarget.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",className:"btn-primary",onClick:function(){console.log("amount: ",d),console.log("amount as float: ",parseInt(d)),console.log("user object: ",C.current_user),console.log("user object balance as float: ",parseFloat(C.current_user.balance),typeof C.current_user.balance);var e=parseFloat(C.current_user.balance)-parseFloat(d);if(e<0)l(!0);else{console.log("new balance: ",e),O(0),v(e);var t=C.users.map((function(t){return t.name===C.current_user.name&&(t.balance=e),t}));console.log(t),w({users:t,current_user:p(C.current_user.name,t)}),console.log(C),l(!1)}},children:"Withdraw"}),u?Object(i.jsxs)("div",{className:"text-danger",children:["*The amount $",d," cannot be withdrawn"]}):Object(i.jsx)(i.Fragment,{})]}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h3",{children:"Must login to show this page"})})})},y=function(){var e=Object(r.useContext)(x);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Balance"}),JSON.stringify(e.users)]})},C=function(){var e=Object(r.useContext)(x).status;return Object(i.jsx)(i.Fragment,{children:e.users.map((function(e){return Object(i.jsx)(m,{bgcolor:"primary",header:e.name,status:"",body:Object(i.jsxs)(i.Fragment,{children:["email:",e.email,Object(i.jsx)("br",{}),"password:",e.password]})})}))})},w=function(e){var t=e.item,n=e.callback;return Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(j,{className:t.active?"navlink-active nav-link":"navlink nav-link",to:t.address,onClick:n,children:t.text},h())},h())},N=function(){var e=Object(r.useState)([{text:"BadBank",address:"/",active:!1},{text:"Create Account",address:"/createaccount/",active:!1},{text:"Login",address:"/login/",active:!1},{text:"Deposit",address:"/deposit/",active:!1},{text:"Withdraw",address:"/withdraw/",active:!1},{text:"Balance",address:"/balance/",active:!1},{text:"All Data",address:"/alldata/",active:!1}]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=function(e){var t=n.map((function(t){return t.text===e.target.innerHTML?t.active=!0:t.active=!1,t}));a(t)};return Object(i.jsx)("ul",{className:"bg-dark text-ligth nav",children:n.map((function(e){return Object(i.jsx)(w,{item:e,callback:c},h())}))})},_=n(20),F=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(o.a)(c,2),u=s[0],l=s[1],b=Object(r.useState)(!0),j=Object(o.a)(b,2),d=j[0],O=j[1],p=Object(r.useState)(!0),h=Object(o.a)(p,2),g=h[0],f=h[1],v=Object(r.useState)(""),y=Object(o.a)(v,2),C=y[0],w=y[1],N=Object(r.useState)(""),F=Object(o.a)(N,2),S=F[0],k=F[1],A=Object(r.useState)(""),B=Object(o.a)(A,2),T=B[0],E=B[1],P=Object(r.useContext)(x),D=P.status,L=P.setContext,W=function(e,t,n){var r=function(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}(t);l(r);var a=function(e){return""!==e}(e);O(a);var c=function(e){return""!==e}(n);return f(c),r&&a&&c};return Object(i.jsx)(m,{bgcolor:"primary",header:"Create Account",status:"",body:n?Object(i.jsxs)(i.Fragment,{children:["Name",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"input",className:"form-control",id:"name",placeholder:"Enter name",value:C,onChange:function(e){return w(e.currentTarget.value)}}),d?Object(i.jsx)("div",{className:"text-danger",children:"*Name field is required"}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("br",{}),"Email Address",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"input",className:"form-control",id:"email",placeholder:"Enter email",value:S,onChange:function(e){return k(e.currentTarget.value)}}),u?Object(i.jsx)("div",{className:"text-danger",children:"*Valid email is required"}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("br",{}),"Password ",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:T,onChange:function(e){return E(e.currentTarget.value)}}),g?Object(i.jsx)("div",{className:"text-danger",children:"*Password field is required"}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",className:"btn-primary",onClick:function(){var e;if(console.log(D),e=C,D.users.find((function(t){return t.name===e})))alert("".concat(C," already exists..."));else if(function(e,t){return t.find((function(t){return t.email===e}))}(S,D.users))alert("".concat(S," already exists...."));else if(W(C,S,T)){var t={name:C,email:S,password:T,balance:0},n=Object(_.a)(D.users);n.push(t),L({users:n,current_user:void 0}),a(!1),console.log(D)}},children:"Create Account"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h5",{children:"Success"}),Object(i.jsx)("button",{type:"submit",className:"btn-primary",onClick:function(){w(""),O(!0),k(""),l(!0),E(""),f(!0),a(!0)},children:"Add another account"})]})})},S=function(){var e=Object(r.useState)({users:[],current_user:void 0}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.jsx)(d,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{}),Object(i.jsxs)(x.Provider,{value:{status:n,setContext:a},children:[Object(i.jsx)(b,{path:"/",exact:!0,component:O}),Object(i.jsx)(b,{path:"/createaccount/",component:F}),Object(i.jsx)(b,{path:"/login/",component:g}),Object(i.jsx)(b,{path:"/deposit/",component:f}),Object(i.jsx)(b,{path:"/withdraw/",component:v}),Object(i.jsx)(b,{path:"/balance/",component:y}),Object(i.jsx)(b,{path:"/alldata/",component:C})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.3c43645c.chunk.js.map