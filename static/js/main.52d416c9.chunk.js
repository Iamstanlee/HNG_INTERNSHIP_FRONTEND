(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},37:function(e,a,t){e.exports=t(67)},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(32),s=t.n(i),l=t(6),c=t(10),o=t(11),m=t(14),d=t(12),u=t(15),p=t(7),E=t(2),h=Object(E.a)(),g=t(33),f=t.n(g).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://whispering-everglades-26046.herokuapp.com",headers:{"Content-type":"application/x-www-form-urlencoded"}}),v=t(13),N=t.n(v),w=(t(30),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={respass:!1,emailSent:!1,verificationSuccess:!1,loading:!1,email:"",password:"",errMessage:"",err:!1,isLoading:!1},t.onEmailInput=function(e){t.setState({email:e.target.value})},t.onPasswordInput=function(e){t.setState({password:e.target.value})},t.onFormSubmit=function(e){e.preventDefault(),t.setState({isLoading:!0}),f.post("/index.php/login",N.a.stringify({email:t.state.email,password:t.state.password})).then(function(e){return console.log(e),t.setState({isLoading:!1}),1===e.data.error?t.setState({err:!0}):(0===e.data.error&&t.setState({err:!1}),h.push("/home"))})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{transform:"translateY(80%)"},className:"contain "},r.a.createElement("div",{className:"ui middle aligned center aligned grid"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"Login to your Account")),r.a.createElement("form",{className:"ui large form error",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"mail icon"}),r.a.createElement("input",{type:"email",name:"text",placeholder:"E-mail Address",onChange:this.onEmailInput,required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onPasswordInput,required:!0}))),r.a.createElement("div",{className:""}," ",r.a.createElement("button",{type:"submit",className:"ui fluid large teal submit button",disabled:this.state.isLoading},this.state.isLoading?"Please Wait....":"Login"))),r.a.createElement("div",{className:"ui error message",type:"submit",onClick:this.onFormSubmit},this.state.err?"Invalid details or Account does not exist":"")),r.a.createElement("div",{className:"ui message"},r.a.createElement("p",{style:{fontSize:"1.1rem"}},"New to us? ",r.a.createElement(p.a,{to:"/signup"},"Sign Up")," ")))))}}]),a}(n.Component)),b=Object(l.f)(w),y=t(36),S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={authStart:!1,Err:"",firstName:"",lastName:"",email:"",password:"",password_confirmation:"",isLoading:!1,passErr:!1},t.inputHandler=function(e){t.setState(Object(y.a)({},e.target.name,e.target.value))},t.submitHandler=function(e){e.preventDefault();var a=t.state;if(a.password!==a.password_confirmation)return t.setState({passErr:!0});t.setState({isLoading:!0}),f.post("/index.php/register",N.a.stringify({firstname:t.state.firstName,lastname:t.state.lastName,email:t.state.email,password:t.state.password_confirmation})).then(function(e){if(console.log(e),t.setState({isLoading:!1}),1===e.data.error)return t.setState({Err:"Account already Exist"});h.push("/login")}).catch(function(e){t.setState({isLoading:!1})})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.isLoading,a="";return this.state.passErr&&(a="Passwords do not match!"),r.a.createElement("div",null,r.a.createElement("div",{className:"ui middle aligned center aligned grid",style:{transform:"translateY(30%)"}},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"Sign-up")),r.a.createElement("form",{className:"ui large form error",onSubmit:this.submitHandler},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:this.inputHandler,required:!0,minLength:"4"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:this.inputHandler,required:!0,minLength:"4"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"mail icon"}),r.a.createElement("input",{type:"email",name:"email",placeholder:"E-mail Address",onChange:this.inputHandler,required:!0}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.inputHandler,required:!0,minLength:"6"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",name:"password_confirmation",placeholder:"Confirm Password",onChange:this.inputHandler,required:!0,minLength:"6"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"ui fluid large teal submit button",disabled:e},e?"Submitting...":"Sign Up"))),r.a.createElement("div",{className:"ui error message"},this.state.Err),r.a.createElement("div",{className:"ui error message"},a),r.a.createElement("div",{className:"ui message"},"Already have an account? ",r.a.createElement(p.a,{to:"/Login"},"Login"))))))}}]),a}(n.Component),L=function(){return r.a.createElement("div",null,"Home")};function k(){return r.a.createElement("p",{style:{textAlign:"center",fontFamily:"Ubuntu"}},"Error 404")}var j=function(){return r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:b}),r.a.createElement(l.a,{path:"/login",component:b}),r.a.createElement(l.a,{path:"/signup",component:S}),r.a.createElement(l.a,{path:"/home",component:L}),r.a.createElement(l.a,{render:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66);var O=r.a.createElement(l.b,{history:h},r.a.createElement(j,null));s.a.render(O,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.52d416c9.chunk.js.map