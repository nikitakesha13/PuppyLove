(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{187:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(72),i=s.n(n),c=(s(80),s(26)),o=s(4),l=s(7),r=s(8),d=s(10),h=s(9),j=s(16),m=s(0),b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e;return e=localStorage.getItem("user-dog-id")?Object(m.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(m.jsx)("li",{className:"navbar-item",children:Object(m.jsx)(j.b,{to:"/browse",className:"nav-link",children:"Browse"})}),Object(m.jsx)("li",{className:"navbar-item",children:Object(m.jsx)(j.b,{to:"/matches",className:"nav-link",children:"Matches"})}),Object(m.jsxs)("li",{className:"nav-item dropdown",children:[Object(m.jsx)("button",{className:"btn btn-dark dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:" Settings "}),Object(m.jsx)("ul",{className:"dropdown-menu",children:Object(m.jsx)(j.b,{to:"/accessibility",className:"dropdown-item",children:" Accessibility "})})]}),Object(m.jsx)("li",{className:"navbar-item",children:Object(m.jsx)(j.b,{to:"/",onClick:function(){localStorage.clear(),window.location="/"},className:"nav-link",children:"Logout"})})]}):Object(m.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(m.jsx)("li",{className:"navbar-item",children:Object(m.jsxs)(j.b,{to:"/login",className:"nav-link",children:[" ",Object(m.jsx)("i",{className:"fa fa-fw fa-user"})," Login "]})}),Object(m.jsx)("li",{className:"navbar-item",children:Object(m.jsx)(j.b,{to:"/create_user",className:"nav-link",children:"Create User"})})]}),Object(m.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:Object(m.jsxs)("div",{class:"container-fluid",children:[Object(m.jsx)(j.b,{to:"/",className:"navbar-brand",children:"PuppyLove"}),Object(m.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{class:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:e})]})})}}]),s}(a.Component),u=s(21),g=s(3),p=s(17),O=(s(29),function(e){return Object(m.jsx)("div",{className:"popup-box",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),e.content]})})}),x=function(e){var t=e.dog,s=Object(a.useState)(!1),n=Object(p.a)(s,2),i=n[0],c=n[1],o=function(){c(!i)};return Object(m.jsx)("body",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"button",class:"dog-button",value:t.name,onClick:o}),"\xa0\xa0\xa0",i&&Object(m.jsx)(O,{content:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsxs)("p",{className:"dog-display",children:["ID: ",t._id]}),Object(m.jsxs)("p",{className:"dog-display",children:["Breed: ",t.breed]}),Object(m.jsxs)("p",{className:"dog-display",children:["Age: ",t.age]}),Object(m.jsxs)("p",{className:"dog-display",children:["Size: ",t.size]}),Object(m.jsxs)("p",{className:"dog-display",children:["Activity: ",t.activity]}),Object(m.jsxs)("p",{className:"dog-display",children:["Aggression: ",t.aggression]}),Object(m.jsxs)("p",{className:"dog-display",children:["Potty Trained: ",t.potty]}),Object(m.jsxs)("p",{className:"dog-display",children:["UTD on vaccines: ",t.vaccine]}),Object(m.jsxs)("p",{className:"dog-display",children:["Bio: ",t.bio]})]}),handleClose:o})]})})},v=s(5),f=s.n(v),y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a,n;return Object(l.a)(this,s),(n=t.call(this,e)).onChangeName=n.onChangeName.bind(Object(g.a)(n)),n.state=(a={array_of_dogs:[],breed_for:"",breed_group:"",height:"",image_height:0,image_id:"",image_url:"",image_width:0,life_span:"",name:"",origin:"",reference_image_id:"",temperament:"",weight:"",my_dogs:[]},Object(u.a)(a,"name",""),Object(u.a)(a,"breed",""),Object(u.a)(a,"age",""),Object(u.a)(a,"size",""),a),n}return Object(r.a)(s,[{key:"onChangeName",value:function(e){var t,s=this;console.log("I changed the name"),console.log(e.target.value),"Select a breed"==e.target.value?this.setState({breed_for:"",breed_group:"",height:"",image_height:0,image_id:"",image_url:"",image_width:0,life_span:"",name:"",origin:"",reference_image_id:"",temperament:"",weight:""}):fetch("https://api.thedogapi.com/v1/breeds/search?q="+e.target.value).then((function(e){return e.json()})).then((function(e){console.log(e[0]),t=e[0].reference_image_id,console.log(t),s.setState({breed_for:e[0].bred_for,breed_group:e[0].breed_group,height:e[0].height,life_span:e[0].life_span,name:e[0].name,origin:e[0].origin,reference_image_id:e[0].reference_image_id,temperament:e[0].temperament,weight:e[0].weight}),fetch("https://api.thedogapi.com/v1/images/"+t).then((function(e){return e.json()})).then((function(e){console.log(e),s.setState({image_height:e.height,image_url:e.url,image_width:e.width})}))}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thedogapi.com/v1/breeds/").then((function(e){return e.json()})).then((function(t){e.setState({array_of_dogs:t.map((function(e){return e.name}))}),console.log(e.state.array_of_dogs)})),console.log("before the my dogs"),console.log(localStorage.getItem("user-id")),f.a.get("/dogs/"+localStorage.getItem("user-id")).then((function(t){console.log(t.data.name),e.setState({my_dogs:t.data})}))}},{key:"render",value:function(){if(localStorage.getItem("user-id")){var e=this.state.array_of_dogs;this.state.my_dogs;return console.log("I did this"),console.log(this.state.my_dogs),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsxs)("h2",{style:{textAlign:"center"},children:[" Welcome to PuppyLove, ",localStorage.getItem("user-name"),"!"]}),Object(m.jsx)("h4",{children:" How to use PuppyLove "}),Object(m.jsx)("p",{children:'To begin, click the drop down menu from "Settings" and select "Dog Profile." When there, select "Add Dog" and enter in all relevant information regarding your dog. Next, head to the browse page and look at all available dogs. If you feel like that dog is a good match, click "Like." If you do not feel like it is a good match, select "Pass." If the other user likes your dog as well, then it will appear on the "Matches" page. You will then be able to contact the user via email and set up a play date!'}),Object(m.jsx)("h4",{children:" My Dogs "}),Object(m.jsx)("div",{className:"my-dogs",children:this.state.my_dogs&&this.state.my_dogs.length&&this.state.my_dogs.map((function(e){return Object(m.jsxs)("div",{className:"my-dog-profile",children:[" ",Object(m.jsx)(x,{dog:e})," "]})}))})]}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{style:{textAlign:"center"},children:" Find out some information on dogs! "}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsxs)("select",{onChange:this.onChangeName,children:[Object(m.jsx)("option",{value:"Select a breed",children:" Select a breed "}),e.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h1",{children:[" Name: ",this.state.name]}),Object(m.jsxs)("h3",{children:[" Average Lifespan: ",this.state.life_span]}),Object(m.jsxs)("h3",{children:[" Bred for: ",this.state.breed_for]}),Object(m.jsxs)("h3",{children:[" Breed group: ",this.state.breed_group]}),Object(m.jsxs)("h3",{children:[" Temperament: ",this.state.temperament]}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("img",{src:this.state.image_url,width:"460",height:"460"})})]})]})})]})})}var t=this.state.array_of_dogs;return console.log("No, I did this"),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"row text-align center",children:Object(m.jsx)("h2",{style:{fontSize:"50px",paddingBottom:"20px",textAlign:"center"},children:" Welcome to PuppyLove! "})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h3",{style:{textAlign:"center"},children:" About PuppyLove "}),Object(m.jsx)("p",{style:{paddingLeft:"15px"},children:"PuppyLove is an online application that lets dog owners match up their dogs with other dogs in order to set up safe and secure playdates. This application is mainly targeted towards college students in order to make the process of finding similar dogs quicker and more efficient. This application also includes many accessability features in order to accomidate people who are colorblind or cannot read too bright of screens."}),Object(m.jsx)("h3",{style:{paddingLeft:"15px"},children:" Created by: "}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Zachary Lawton"}),Object(m.jsx)("li",{children:"Isabelle Rhoads"}),Object(m.jsx)("li",{children:"Nikita Udodenko"}),Object(m.jsx)("li",{children:"Isaiah Villagomez"})]})]}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{style:{textAlign:"center"},children:" Find out some information on dogs! "}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsxs)("select",{onChange:this.onChangeName,children:[Object(m.jsx)("option",{value:"Select a breed",children:" Select a breed "}),t.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h1",{children:["Name: ",this.state.name]}),Object(m.jsxs)("h3",{children:["Average Lifespan: ",this.state.life_span]}),Object(m.jsxs)("h3",{children:["Bred for: ",this.state.breed_for]}),Object(m.jsxs)("h3",{children:["Breed group: ",this.state.breed_group]}),Object(m.jsxs)("h3",{children:["Temperament: ",this.state.temperament]}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("img",{src:this.state.image_url,width:"460",height:"460"})})]})]})})]})]})}}]),s}(a.Component),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeName=s.onChangeName.bind(Object(g.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(g.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(g.a)(s)),s.onChangeConfirmPassword=s.onChangeConfirmPassword.bind(Object(g.a)(s)),s.onChangeStreet=s.onChangeStreet.bind(Object(g.a)(s)),s.onChangeCity=s.onChangeCity.bind(Object(g.a)(s)),s.onChangeUSState=s.onChangeUSState.bind(Object(g.a)(s)),s.onChangeZip=s.onChangeZip.bind(Object(g.a)(s)),s.onSubmit=s.onSubmit.bind(Object(g.a)(s)),s.state={states:[],name:"",email:"",password:"",confirm:"",street:"",city:"",USstate:"",zip:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({states:t.map((function(e){return e.abbreviation}))})}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeConfirmPassword",value:function(e){this.setState({confirm:e.target.value})}},{key:"onChangeStreet",value:function(e){this.setState({street:e.target.value})}},{key:"onChangeCity",value:function(e){this.setState({city:e.target.value})}},{key:"onChangeUSState",value:function(e){this.setState({USstate:e.target.value})}},{key:"onChangeZip",value:function(e){this.setState({zip:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state;if(t.password!==t.confirm)alert("Passwords do not match"),this.setState({password:"",confirm:""});else{var a=this.state.street+" "+this.state.city+" "+this.state.USstate+" "+this.state.zip;console.log(a);var n=s(99),i=n.core,c=n.usStreet.Lookup,o=new i.StaticCredentials("00b02f32-f575-2144-8c8f-dbcc5e433f10","q1WvuJPxrkgBUltBFVT8"),l=i.buildClient.usStreet(o),r=new c(a),d=this.state.name,h=this.state.email,j=this.state.password;function e(e){var t=e.lookups[0].result[0];console.log(t),console.log("Address: "+t.lastLine);var s=t.components.cityName,a=t.components.state,n=t.components.streetName,i=t.components.zipCode;console.log(s+a+n+i);var c=t.metadata.latitude;console.log("Latitude: "+c);var o=t.metadata.longitude;console.log("Longitude: "+o);var l={name:d,email:h,password:j,street:n,city:s,USstate:a,zip:i};console.log(l),f.a.post("users/add/",l).then((function(e){console.log(e.data),localStorage.setItem("user-id",e.data._id),localStorage.setItem("user-name",e.data.name),localStorage.setItem("user-city",e.data.city),localStorage.setItem("user-USstate",e.data.USstate),console.log(localStorage.getItem("user-id")),window.location="/dogsettings"}))}function t(e){console.log("ERROR: "+e),alert("Address Does Not Exist"),this.setState({street:"",city:"",USstate:"",zip:""})}l.send(r).then(e).catch(t),this.setState({name:"",email:"",password:"",confirm:"",street:"",city:"",USstate:"",zip:""})}}},{key:"render",value:function(){var e=this.state.states;return Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsxs)("div",{className:"card-body p-5 text-center",children:[Object(m.jsx)("h3",{className:"mb-5",children:"Create User"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"name",id:"name-info",required:!0,className:"form-control form-control-lg",placeholder:"Name",value:this.state.name,onChange:this.onChangeName})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"email",id:"email-info",required:!0,className:"form-control form-control-lg",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"password-info",required:!0,className:"form-control form-control-lg",placeholder:"Password",value:this.state.password,onChange:this.onChangePassword})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"confirm-password-info",required:!0,className:"form-control form-control-lg",placeholder:"Confirm Password",value:this.state.confirm,onChange:this.onChangeConfirmPassword})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"street",id:"street-info",required:!0,className:"form-control form-control-lg",placeholder:"Street Address",value:this.state.street,onChange:this.onChangeStreet})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"city",id:"city-info",required:!0,className:"form-control form-control-lg",placeholder:"City",value:this.state.city,onChange:this.onChangeCity})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("select",{className:"form-select form-select-lg",onChange:this.onChangeUSState,children:[Object(m.jsx)("option",{value:"Select State",children:" State "}),e.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"zip",id:"zip-info",maxLength:"5",required:!0,className:"form-control form-control-lg",placeholder:"Zip Code",value:this.state.zip,onChange:this.onChangeZip})})]})}),Object(m.jsx)("div",{className:"form-btn",children:Object(m.jsx)("input",{type:"submit",value:"Create Account",className:"btn btn-primary"})})]})]})})})})})})}}]),a}(a.Component);console.log(f.a.defaults.baseURL);var S,w,C=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).onChangeEmail=a.onChangeEmail.bind(Object(g.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={email:"",password:""},a}return Object(r.a)(s,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};console.log(t),f.a.post("users/login/",t).then((function(e){e.data.length>0?(localStorage.setItem("user-id",e.data[0]._id),localStorage.setItem("user-name",e.data[0].name),localStorage.setItem("user-city",e.data[0].city),localStorage.setItem("user-USstate",e.data[0].USstate),localStorage.setItem("user-dog-id",e.data[0].dog_id),window.location="/"):alert("Wrong usename or password")})),this.setState({email:"",password:""})}},{key:"render",value:function(){return Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsxs)("div",{className:"card-body p-5 text-center",children:[Object(m.jsx)("h3",{className:"mb-5",children:"Log In"}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"email",id:"email-info",required:!0,className:"form-control form-control-lg",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"password-info",required:!0,className:"form-control form-control-lg",placeholder:"Password",value:this.state.password,onChange:this.onChangePassword})}),Object(m.jsx)("div",{className:"form-btn",children:Object(m.jsx)("input",{type:"submit",value:"Log In",className:"btn btn-primary"})})]})]})})})})})})}}]),s}(a.Component),k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).onLike=a.onLike.bind(Object(g.a)(a)),a.onPass=a.onPass.bind(Object(g.a)(a)),a.state={current_user:{city:localStorage.getItem("user-city"),USstate:localStorage.getItem("user-USstate"),matches:{user_id:localStorage.getItem("user-id"),dog_id:localStorage.getItem("dog-id")},push:"true"},user:{_id:"",name:"",email:""},users:"",counter:0,dog:"",image:""},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("user-id")&&f.a.get("http://localhost:5000/users/browse/"+localStorage.getItem("user-id")+"/"+localStorage.getItem("user-city")+"/"+localStorage.getItem("user-USstate")).then((function(t){if(t.data.length>0){console.log(t.data),e.setState({users:t.data,user:t.data[0],counter:e.state.counter});var s=e.state.user._id;console.log(s),f.a.get("http://localhost:5000/dogs/"+s).then((function(t){console.log("initial dog: ",t.data),e.setState({dog:t.data[0],image:t.data[0].image}),console.log("this dog: ",e.state.dog)}))}else alert("There are currently no one to browse for")}))}},{key:"onLike",value:function(){var e=this,t={matches:{user_id:localStorage.getItem("user-id"),dog_id:localStorage.getItem("user-dog-id")},push:"true"};f.a.post("http://localhost:5000/users/update/"+this.state.user._id+"/",t).then((function(e){return console.log(e.data)}));var s=this.state.counter+1;this.state.counter>=this.state.users.length-1&&(s=0);var a=this.state.users[s]._id;console.log(a),f.a.get("http://localhost:5000/dogs/"+a).then((function(t){console.log("users dogs: ",t.data),e.setState({dog:t.data[0],image:t.data[0].image,user:e.state.users[s],counter:s})}))}},{key:"onPass",value:function(){var e=this,t=this.state.counter+1;this.state.counter>=this.state.users.length-1&&(t=0);var s=this.state.users[t]._id;console.log(s),f.a.get("http://localhost:5000/dogs/"+s).then((function(s){console.log("users dogs: ",s.data),e.setState({dog:s.data[0],image:s.data[0].image,user:e.state.users[t],counter:t})}))}},{key:"render",value:function(){return console.log(this.state.users),console.log("The length "+this.state.users.length),console.log("Current user "+this.state.user.name),console.log("The counter: "+this.state.counter),console.log("The dog in render: "+this.state.dog),this.state.users.length>0?Object(m.jsx)("body",{children:Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-10 col-xl-6",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsx)("div",{className:"card-body p-5 text-center",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("h3",{className:"mb-5",children:[" ",this.state.dog.name," "]}),Object(m.jsxs)("div",{className:"form-group",children:["Breed: ",this.state.dog.breed]}),Object(m.jsxs)("div",{className:"form-group",children:["Age: ",this.state.dog.age]}),Object(m.jsxs)("div",{className:"form-group",children:["Size: ",this.state.dog.size]}),Object(m.jsxs)("div",{className:"form-group",children:["Activity: ",this.state.dog.activity]}),Object(m.jsxs)("div",{className:"form-group",children:["Aggression: ",this.state.dog.aggression]}),Object(m.jsxs)("div",{className:"form-group",children:["Potty Trained: ",this.state.dog.potty]}),Object(m.jsxs)("div",{className:"form-group",children:["UTD on vaccines: ",this.state.dog.vaccine]}),Object(m.jsxs)("div",{style:{paddingBottom:"20px"},className:"form-group",children:["Bio: ",this.state.dog.bio]}),Object(m.jsxs)("div",{className:"form-group",children:["Owner: ",this.state.user.name]}),Object(m.jsxs)("div",{className:"form-group",children:["Email: ",this.state.user.email]}),Object(m.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.onLike,children:"Like"}),Object(m.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.onPass,children:"Pass"})]})})})})})})})}):Object(m.jsx)("h2",{children:"There are currently no one to browse for"})}}]),s}(a.Component),_=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).onNext=a.onNext.bind(Object(g.a)(a)),a.onRemove=a.onRemove.bind(Object(g.a)(a)),a.state={matches:[],counter:0,dog:"",user:"",name:"",email:""},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/users/matches_user/"+localStorage.getItem("user-id")).then((function(t){if(console.log("matches: ",t.data.matches),e.setState({matches:t.data.matches,user:t.data.matches[0]}),t.data.matches[0]){f.a.get("/users/"+t.data.matches[0].user_id).then((function(t){e.setState({name:t.data.name,email:t.data.email})}));var s=e.state.user.user_id;console.log("starting user ",s),f.a.get("/dogs/"+s).then((function(t){console.log("initial dog: ",t.data),e.setState({dog:t.data[0]}),console.log("this dog: ",e.state.dog)}))}}))}},{key:"onNext",value:function(){var e=this,t=this.state.counter+1;this.state.counter>=this.state.matches.length-1&&(t=0);var s=this.state.matches[t].user_id;f.a.get("/users/"+s).then((function(t){e.setState({name:t.data.name,email:t.data.email})})),f.a.get("/dogs/"+s).then((function(s){console.log("users dogs: ",s.data),e.setState({user:e.state.matches[t],dog:s.data[0],counter:t})}))}},{key:"onRemove",value:function(){var e={matches:this.state.matches[this.state.counter],push:"false"};f.a.post("/users/update/"+localStorage.getItem("user-id"),e).then((function(e){console.log(e.data),window.location.reload()}))}},{key:"render",value:function(){return console.log("The array ",this.state.matches),console.log("The counter ",this.state.counter),this.state.matches.length>0?Object(m.jsx)("body",{children:Object(m.jsx)("div",{children:Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-10 col-xl-6",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsxs)("div",{className:"card-body p-5 text-center",children:[Object(m.jsxs)("h3",{className:"mb-5",children:[" ",this.state.dog.name," "]}),Object(m.jsxs)("div",{className:"form-group",children:["Breed: ",this.state.dog.breed]}),Object(m.jsxs)("div",{className:"form-group",children:["Age: ",this.state.dog.age]}),Object(m.jsxs)("div",{className:"form-group",children:["Size: ",this.state.dog.size]}),Object(m.jsxs)("div",{className:"form-group",children:["Activity: ",this.state.dog.activity]}),Object(m.jsxs)("div",{className:"form-group",children:["Aggression: ",this.state.dog.aggression]}),Object(m.jsxs)("div",{className:"form-group",children:["Potty Trained: ",this.state.dog.potty]}),Object(m.jsxs)("div",{className:"form-group",children:["UTD on vaccines: ",this.state.dog.vaccine]}),Object(m.jsxs)("div",{style:{paddingBottom:"20px"},className:"form-group",children:["Bio: ",this.state.dog.bio]}),Object(m.jsxs)("div",{className:"form-group",children:["Owner: ",this.state.name]}),Object(m.jsxs)("div",{style:{paddingBottom:"20px"},className:"form-group",children:["CONTACT: ",this.state.email]}),Object(m.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.onRemove,children:" Remove "}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.onNext,children:" Next Match "})]})})})})})})})}):Object(m.jsx)("h3",{children:"There are no matches to display"})}}]),s}(a.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsx)("body",{children:Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsxs)("div",{className:"card-body p-5",children:[Object(m.jsx)("h3",{className:"mb-5 text-center",children:" User Settings "}),Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"name",id:"name-info",required:!0,className:"form-control form-control-lg",placeholder:"Change Name"})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"email",id:"email-info",required:!0,className:"form-control form-control-lg",placeholder:"Change Email"})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"password-info",required:!0,className:"form-control form-control-lg",placeholder:"Old Password"})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"password-info",required:!0,className:"form-control form-control-lg",placeholder:"New Password"})}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"password",id:"confirm-password-info",required:!0,className:"form-control form-control-lg",placeholder:"Confirm New Password"})})]})]})})})})})})})}}]),s}(a.Component),A=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).onDarkMode=a.onDarkMode.bind(Object(g.a)(a)),a}return Object(r.a)(s,[{key:"onDarkMode",value:function(){"light"==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),window.location.reload(),console.log("The current theme:",localStorage.getItem("theme"))}},{key:"render",value:function(){return console.log("The current theme:",localStorage.getItem("theme")),Object(m.jsxs)("body",{children:[Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsxs)("div",{className:"card-body p-5",children:[Object(m.jsx)("h3",{className:"mb-5 text-center",children:" Accessibility Settings "}),Object(m.jsx)("button",{type:"button",class:"btn btn-dark align-items-center",onClick:this.onDarkMode,children:"Toggle: Eye sensitivity setting"})]})})})})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:" Accessibility "})})]})}}]),s}(a.Component),P=s(37),L=s.n(P),z=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).setName=a.setName.bind(Object(g.a)(a)),a.setFixed=a.setFixed.bind(Object(g.a)(a)),a.setBreed=a.setBreed.bind(Object(g.a)(a)),a.setAge=a.setAge.bind(Object(g.a)(a)),a.setSize=a.setSize.bind(Object(g.a)(a)),a.setActivity=a.setActivity.bind(Object(g.a)(a)),a.setAggression=a.setAggression.bind(Object(g.a)(a)),a.setPotty=a.setPotty.bind(Object(g.a)(a)),a.setVaccinations=a.setVaccinations.bind(Object(g.a)(a)),a.setBio=a.setBio.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={allBreeds:[],name:"",user_id:localStorage.getItem("user-id"),fixed:"",breed:"",age:"",size:"",activity:"",aggression:"",potty:"",vaccine:"",bio:""},a}return Object(r.a)(s,[{key:"setName",value:function(e){this.setState({name:e.target.value})}},{key:"setBreed",value:function(e){this.setState({breed:e.target.value})}},{key:"setFixed",value:function(e){this.setState({fixed:e.target.value})}},{key:"setAge",value:function(e){this.setState({age:e.target.value})}},{key:"setSize",value:function(e){this.setState({size:e.target.value})}},{key:"setActivity",value:function(e){this.setState({activity:e.target.value})}},{key:"setAggression",value:function(e){this.setState({aggression:e.target.value})}},{key:"setPotty",value:function(e){this.setState({potty:e.target.value})}},{key:"setVaccinations",value:function(e){this.setState({vaccine:e.target.value})}},{key:"setBio",value:function(e){this.setState({bio:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var s={name:this.state.name,user_id:localStorage.getItem("user-id"),fixed:this.state.fixed,breed:this.state.breed,age:this.state.age,size:this.state.size,activity:this.state.activity,aggression:this.state.aggression,potty:this.state.potty,vaccine:this.state.vaccine,bio:this.state.bio};console.log(s),f.a.post("/dogs/add",s).then((function(e){console.log(e.data._id),localStorage.setItem("user-dog-id",e.data._id),t.setState({name:"",fixed:"",breed:"",age:"",size:"",activity:"",aggression:"",potty:"",vaccine:"",bio:""});var s={dog_id:e.data._id};f.a.post("/users/update/"+localStorage.getItem("user-id"),s).then((function(e){console.log(e.data)})),window.location="/"})).catch((function(e){console.log(e),alert("Please complete form"),t.setState({name:"",fixed:"",breed:"",age:"",size:"",activity:"",aggression:"",potty:"",vaccine:"",bio:""})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thedogapi.com/v1/breeds/").then((function(e){return e.json()})).then((function(t){e.setState({allBreeds:t.map((function(e){return e.name}))}),console.log(e.state.allBreeds)}))}},{key:"render",value:function(){var e=this.state.allBreeds;return Object(m.jsx)("div",{children:Object(m.jsx)("section",{className:"vh-100",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card shadow-2-strong",children:Object(m.jsx)("div",{className:"card-body p-5",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("h3",{align:"center",children:"Add Dog"}),Object(m.jsx)("div",{className:"form-outline mb-4",children:Object(m.jsx)("input",{type:"name",id:"name-info",required:!0,className:"form-control form-control-lg",placeholder:"Name",value:this.state.name,onChange:this.setName})}),Object(m.jsxs)("div",{style:{width:"100%"},className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Breed"}),Object(m.jsxs)("select",{style:{width:"300px"},defaultValue:"Select",onChange:this.setBreed,children:[Object(m.jsx)("option",{value:"Select a breed",children:" Select "}),e.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))]})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Age"}),Object(m.jsxs)("select",{style:{width:"300px"},defaultValue:"Select",onChange:this.setAge,children:[Object(m.jsx)("option",{value:"Select",children:"Select"}),Object(m.jsx)("option",{value:"Puppy (0-2 years)",children:"Puppy (0-2 years)"}),Object(m.jsx)("option",{value:"Young (2-5 years)",children:"Young (2-5 years)"}),Object(m.jsx)("option",{value:"Adult (5-10 years)",children:"Adult (5-10 years)"}),Object(m.jsx)("option",{value:"Senior (10+ years)",children:"Senior (10+ years)"})]})]}),Object(m.jsxs)("div",{style:{width:"500px"},className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Size"}),Object(m.jsxs)("select",{style:{width:"300px"},defaultValue:"Select",label:"Select Size",onChange:this.setSize,children:[Object(m.jsx)("option",{value:"Select",children:"Select"}),Object(m.jsx)("option",{value:"Small (0-20lbs)",children:"Small (0-20lbs)"}),Object(m.jsx)("option",{value:"Medium (21-50lbs)",children:"Medium (21-50lbs)"}),Object(m.jsx)("option",{value:"Large (51-90lbs)",children:"Large (51-90lbs)"}),Object(m.jsx)("option",{value:"X-Large (90+ lbs)",children:"X-Large (90+ lbs)"})]})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Activity Level"}),Object(m.jsx)(L.a,{style:{width:"300px"},"aria-label":"Restricted values",defaultValue:0,size:"lg",min:"1",max:"5",step:"1",valueLabelDisplay:"auto",onChange:this.setActivity})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Aggression Level"}),Object(m.jsx)(L.a,{style:{width:"300px"},"aria-label":"Restricted values",defaultValue:0,size:"lg",min:"1",max:"5",step:"1",valueLabelDisplay:"auto",onChange:this.setAggression})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Potty Trained?"}),Object(m.jsxs)("select",{style:{width:"300px"},defaultValue:"Select",onChange:this.setPotty,children:[Object(m.jsx)("option",{value:"Select",children:"Select"}),Object(m.jsx)("option",{value:"Yes",children:"Yes"}),Object(m.jsx)("option",{value:"No",children:"No"})]})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Fixed?"}),Object(m.jsxs)("select",{style:{width:"300px"},defaultValue:"Select",onChange:this.setFixed,children:[Object(m.jsx)("option",{value:"Select",children:"Select"}),Object(m.jsx)("option",{value:"Yes",children:"Yes"}),Object(m.jsx)("option",{value:"No",children:"No"})]})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Up to date on Vaccinations?"}),Object(m.jsxs)("select",{style:{paddingLeft:"30px",width:"300px"},defaultValue:"Select",onChange:this.setVaccinations,children:[Object(m.jsx)("option",{value:"Select",children:"Select"}),Object(m.jsx)("option",{value:"Yes",children:"Yes"}),Object(m.jsx)("option",{value:"No",children:"No"})]})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("label",{className:"dog-info-label",children:"Add Bio"}),":",Object(m.jsx)("textarea",{style:{width:"300px"},onChange:this.setBio})]}),Object(m.jsx)("div",{className:"form-btn",children:Object(m.jsx)("input",{type:"submit",value:"Add",className:"btn btn-dark"})})]})})})})})})})})}}]),s}(a.Component),B=s(20),T={body:"#fff",fontColor:"#000"},U={body:"#282828",fontColor:"#F5F5F5"},D=Object(B.b)(S||(S=Object(c.a)(["\n\n    body {\n\n        background-color: ",";\n\n    }\n\n"])),(function(e){return e.theme.body}));f.a.defaults.baseURL=window.origin;var q=B.c.div(w||(w=Object(c.a)(["\n  color: ",";\n"])),(function(e){return e.theme.fontColor}));var E=function(){return localStorage.getItem("theme")||localStorage.setItem("theme","light"),Object(m.jsx)("div",{children:Object(m.jsxs)(B.a,{theme:"light"===localStorage.getItem("theme")?T:U,children:[Object(m.jsx)(D,{}),Object(m.jsxs)(q,{children:[Object(m.jsx)(b,{}),Object(m.jsx)("main",{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(y,{})}),Object(m.jsx)(o.a,{path:"/login",element:Object(m.jsx)(C,{})}),Object(m.jsx)(o.a,{path:"/create_user",element:Object(m.jsx)(N,{})}),Object(m.jsx)(o.a,{path:"/browse",element:Object(m.jsx)(k,{})}),Object(m.jsx)(o.a,{path:"/matches",element:Object(m.jsx)(_,{})}),Object(m.jsx)(o.a,{path:"/usersettings",element:Object(m.jsx)(I,{})}),Object(m.jsx)(o.a,{path:"/dogsettings",element:Object(m.jsx)(z,{})}),Object(m.jsx)(o.a,{path:"/accessibility",element:Object(m.jsx)(A,{})})]})})]})]})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,188)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};s(173),s(186);i.a.render(Object(m.jsx)(j.a,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),F()},29:function(e,t,s){},80:function(e,t,s){}},[[187,1,2]]]);
//# sourceMappingURL=main.b3d29775.chunk.js.map