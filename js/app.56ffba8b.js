(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],s[o]&&d.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0c3a":function(e,t,a){"use strict";var r=a("208b"),s=a.n(r);s.a},"0e41":function(e,t,a){"use strict";var r=a("f6ce"),s=a.n(r);s.a},"10cd":function(e,t,a){"use strict";var r=a("18c0"),s=a.n(r);s.a},"18c0":function(e,t,a){},"208b":function(e,t,a){},"222f":function(e,t,a){"use strict";var r=a("7bef"),s=a.n(r);s.a},5542:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o=(a("ac6a"),a("456d"),a("7618")),i=a("bc3a"),l=a.n(i),c={name:"app",components:{},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?l()({method:"GET",url:"https://api2.bmob.cn/1/login",headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e","Content-Type":"application/json"},params:{username:t.loginUser.email,password:t.loginUser.password}}).then(function(e){console.log(e);var a=e.data.sessionToken;localStorage.setItem("eleToken",a),t.$store.dispatch("setisAuth",!t.isEmpty(e.data)),t.$store.dispatch("setuser",e.data),t.$message({message:"账号登陆成功！",type:"success"}),t.$router.push("/index")}).catch(function(e){t.$message({message:"账号与密码不匹配",type:"error"})}):console.log("error submit")})},isEmpty:function(e){return void 0===e||null===e||"object"===Object(o["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},created:function(){localStorage.eleToken}},u=c,m=(a("034f"),a("2877")),d=Object(m["a"])(u,s,n,!1,null,null,null),p=d.exports,f=a("5c96"),g=a.n(f),h=(a("0fae"),a("8c4f")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("headnav"),a("leftmenu"),a("div",{staticClass:"rightContainer"},[a("router-view")],1)],1)},v=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"head-nav"},[r("el-row",[r("el-col",{staticClass:"logo-container",attrs:{span:6}},[r("img",{staticClass:"logo",attrs:{src:a("c780"),alt:""}}),r("span",{staticClass:"title"},[e._v("在线后台管理系统")])]),r("el-col",{staticClass:"user",attrs:{span:6}},[r("div",{staticClass:"userinfo"},[r("img",{staticClass:"avatar",attrs:{src:"https://www.gravatar.com/avatar/anything?s=200&d=mm",alt:""}}),r("div",{staticClass:"welcome"},[r("p",{staticClass:"name comename"},[e._v("欢迎")]),r("p",{staticClass:"name avatarname"},[e._v(e._s(e.user.username))])]),r("span",{staticClass:"username"},[r("el-dropdown",{attrs:{trigger:"click"},on:{command:e.setDialogInfo}},[r("span",{staticClass:"el-dropdown-link"},[r("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"info"}},[e._v("个人信息")]),r("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)])])],1)],1)},w=[],_={name:"head-nav",computed:{user:function(){return this.$store.getters.user}},methods:{setDialogInfo:function(e){switch(e){case"info":this.showInfoList();break;case"logout":this.logout();break}},showInfoList:function(){console.log("个人信息"),this.$router.push("/infoshow")},logout:function(){console.log("退出"),localStorage.removeItem("eleToken"),this.$store.dispatch("clearCurrentState"),this.$router.push("/login")}}},x=_,k=(a("0e41"),Object(m["a"])(x,y,w,!1,null,"7a5e5472",null)),C=k.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"menu_page"},[a("el-col",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#324057","text-color":"#fff","active-text-color":"#409eff"}},[a("router-link",{attrs:{to:"/home"}},[a("el-menu-item",{attrs:{index:"0"}},[a("i",{staticClass:"fa fa-margin fa-server"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._l(e.items,function(t){return[t.children?a("el-submenu",{key:t.path,attrs:{index:t.path}},[a("template",{slot:"title"},[a("i",{class:"fa fa-margin "+t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._l(t.children,function(t,r){return a("router-link",{key:r,attrs:{to:t.path}},[a("el-menu-item",{attrs:{index:t.path}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1)})],2):e._e()]})],2)],1)],1)],1)},j=[],D={name:"left-menu",data:function(){return{items:[{icon:"fa-money",name:"资金管理",path:"fund",children:[{path:"fundlist",name:"资金流水"}]},{icon:"fa-asterisk",name:"信息管理",path:"info",children:[{path:"infoshow",name:"个人信息"}]}]}}},S=D,U=(a("6598"),Object(m["a"])(S,$,j,!1,null,"6649ac42",null)),E=U.exports,O={name:"index",components:{headnav:C,leftmenu:E}},T=O,A=(a("10cd"),Object(m["a"])(T,b,v,!1,null,"a72702b6",null)),I=A.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("section",{staticClass:"form_container"},[a("div",{staticClass:"manage_tip"},[a("span",{staticClass:"title"},[e._v("在线后台管理系统")]),a("el-form",{ref:"registerForm",staticClass:"registerForm",attrs:{model:e.registerUser,"status-icon":"",rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.registerUser.name,callback:function(t){e.$set(e.registerUser,"name",t)},expression:"registerUser.name"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入email"},model:{value:e.registerUser.email,callback:function(t){e.$set(e.registerUser,"email",t)},expression:"registerUser.email"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.registerUser.password,callback:function(t){e.$set(e.registerUser,"password",t)},expression:"registerUser.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"password2"}},[a("el-input",{attrs:{type:"password",placeholder:"请确认密码"},model:{value:e.registerUser.password2,callback:function(t){e.$set(e.registerUser,"password2",t)},expression:"registerUser.password2"}})],1),a("el-form-item",{attrs:{label:"选择身份"}},[a("el-select",{attrs:{placeholder:"请选择身份"},model:{value:e.registerUser.identity,callback:function(t){e.$set(e.registerUser,"identity",t)},expression:"registerUser.identity"}},[a("el-option",{attrs:{label:"管理员",value:"manager"}}),a("el-option",{attrs:{label:"员工",value:"employee"}})],1)],1),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("registerForm")}}},[e._v("注册")])],1)],1)],1)])])},B=[],F=(a("7f7f"),{name:"register",components:{},data:function(){var e=this,t=function(t,a,r){a!==e.registerUser.password?r(new Error("两次输入密码不一致！")):r()};return{registerUser:{name:"",email:"",password:"",password2:"",identity:""},rules:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:30,message:"长度在2到30个字符之间",trigger:"blur"}],email:[{type:"email",required:!0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6到30之间",trigger:"blur"}],password2:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6到30之间",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?(l()({method:"POST",url:"/api/1/users",headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e"},data:{username:t.registerUser.name,password:t.registerUser.password,email:t.registerUser.email,identity:t.registerUser.identity}}).then(function(e){t.$message({message:"账号注册成功！",type:"success"})}).catch(function(e){}),t.$router.push("/login")):console.log("error submit")})}}}),q=F,X=(a("c1af"),Object(m["a"])(q,P,B,!1,null,"cc367a3c",null)),R=X.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notfound"},[r("img",{attrs:{src:a("85a6"),alt:""}})])}],z=(a("b94e"),{}),L=Object(m["a"])(z,K,M,!1,null,"4ab3455c",null),N=L.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("section",{staticClass:"form_container"},[a("div",{staticClass:"manage_tip"},[a("span",{staticClass:"title"},[e._v("在线后台管理系统")]),a("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginUser,"status-icon":"",rules:e.rules,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入email"},model:{value:e.loginUser.email,callback:function(t){e.$set(e.loginUser,"email",t)},expression:"loginUser.email"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("登陆")])],1),a("div",{staticClass:"tiparea"},[a("p",[e._v("还没有账号？现在"),a("router-link",{attrs:{to:"/register"}},[e._v("注册")])],1)])],1)],1)])])},J=[],H={name:"register",components:{},data:function(){return{loginUser:{email:"",password:""},rules:{email:[{type:"email",required:!0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6到30之间",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?l()({method:"GET",url:"/api/1/login",headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e","Content-Type":"application/json"},params:{username:t.loginUser.email,password:t.loginUser.password}}).then(function(e){var a=e.data.sessionToken;localStorage.setItem("eleToken",a),t.$store.dispatch("setisAuth",!t.isEmpty(e.data)),t.$store.dispatch("setuser",e.data),t.$message({message:"账号登陆成功！",type:"success"}),t.$router.push("/index")}).catch(function(e){t.$message({message:"账号与密码不匹配",type:"error"})}):console.log("error submit")})},isEmpty:function(e){return void 0===e||null===e||"object"===Object(o["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},created:function(){}},Q=H,V=(a("e87c"),Object(m["a"])(Q,G,J,!1,null,"3e2a35e1",null)),W=V.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("freedom")]),a("p",{staticClass:"lead"},[e._v("项目练习，学习vue")])])])}],ee=(a("0c3a"),{}),te=Object(m["a"])(ee,Y,Z,!1,null,"1ca0f7be",null),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"infoshow"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:8}},[a("img",{staticClass:"avatar",attrs:{src:"",alt:""}})]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"userinfo"},[a("div",{staticClass:"user-item"},[a("i",{staticClass:"fa fa-user"}),a("span",[e._v(e._s(e.user.username))])]),a("div",{staticClass:"user-item"},[a("i",{staticClass:"fa fa-cog"}),a("span",[e._v(e._s("manager"==e.user.identity?"管理员":"普通员工"))])])])])],1)],1)},se=[],ne={name:"infoshow",computed:{user:function(){return this.$store.getters.user}}},oe=ne,ie=(a("d34e"),Object(m["a"])(oe,re,se,!1,null,"2917ef9a",null)),le=ie.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillContainer"},[a("div",[a("el-form",{ref:"add_data",attrs:{inline:!0}},[a("el-form-item",{staticClass:"btnRight"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"view"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加")])],1)],1)],1),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",height:"400"}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{align:"center",label:"创建时间",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.createdAt))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"type",label:"收支类型",width:"150"}}),a("el-table-column",{attrs:{align:"center",prop:"describe",label:"收支描述",width:"180"}}),a("el-table-column",{attrs:{align:"center",prop:"income",label:"收入",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#00d053"}},[e._v(e._s(t.row.income))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"expend",label:"支出",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-s-promotion"}),a("span",{staticStyle:{color:"#f56767"}},[e._v(e._s(t.row.expend))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"cash",label:"账户现金",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-s-promotion"}),a("span",{staticStyle:{color:"#4db3ff"}},[e._v(e._s(t.row.cash))])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"remark",label:"备注",width:"220"}}),a("el-table-column",{attrs:{label:"操作",prop:"operation",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",size:"small",icon:"edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger",icon:"delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),a("eldialog",{attrs:{dialog:e.dialog,formData:e.formData},on:{update:this.getProfile}})],1)},ue=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog"},[a("el-dialog",{attrs:{title:e.dialog.title,visible:e.dialog.show,"close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("div",{staticClass:"form"},[a("el-form",{ref:"form",staticStyle:{margin:"10px",width:"auto"},attrs:{model:e.formData,rules:e.form_rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"收支类型"}},[a("el-select",{attrs:{placeholder:"收支类型"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.format_type_list,function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),a("el-form-item",{attrs:{prop:"describe",label:"收支描述"}},[a("el-input",{attrs:{type:"describe"},model:{value:e.formData.describe,callback:function(t){e.$set(e.formData,"describe",t)},expression:"formData.describe"}})],1),a("el-form-item",{attrs:{prop:"income",label:"收入"}},[a("el-input",{attrs:{type:"income"},model:{value:e.formData.income,callback:function(t){e.$set(e.formData,"income",t)},expression:"formData.income"}})],1),a("el-form-item",{attrs:{prop:"expend",label:"支出"}},[a("el-input",{attrs:{type:"expend"},model:{value:e.formData.expend,callback:function(t){e.$set(e.formData,"expend",t)},expression:"formData.expend"}})],1),a("el-form-item",{attrs:{prop:"cash",label:"现金账户"}},[a("el-input",{attrs:{type:"cash"},model:{value:e.formData.cash,callback:function(t){e.$set(e.formData,"cash",t)},expression:"formData.cash"}})],1),a("el-form-item",{attrs:{prop:"reamrk",label:"备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),a("el-form-item",{staticClass:"text_right"},[a("el-button",{on:{click:function(t){e.dialog.show=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提交")])],1)],1)],1)])],1)},de=[],pe={name:"dialog",props:{dialog:Object,formData:Object},data:function(){return{format_type_list:["提现","体现手续费","充值","优惠卷","充值礼卷","转账"],form_rules:{describe:[{required:!0,message:"收支描述不能为空",trigger:"blur"}],income:[{required:!0,message:"收入不能为空",trigger:"blur"}],expend:[{required:!0,message:"支出不能为空",trigger:"blur"}],cash:[{required:!0,message:"账户现金不能为空",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a=t.dialog.option;console.log(a),"add"===a?(l()({method:"POST",url:"/api/1/classes/fundlist",headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e"},data:t.formData}).then(function(e){t.$message({message:"数据添加成功",type:"success"})}).catch(function(e){}),t.dialog.show=!1,t.$emit("update")):"edit"===a&&(l()({method:"put",url:"/api/1/classes/fundlist/"+t.formData.objectId,headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e","Content-Type":"application/json"},data:{type:t.formData.type,describe:t.formData.describe,income:t.formData.income,expend:t.formData.expend,cash:t.formData.cash,remark:t.formData.remark}}).then(function(e){t.$message({message:"数据添加成功",type:"success"})}).catch(function(e){}),t.dialog.show=!1,t.$emit("update"))}})}}},fe=pe,ge=Object(m["a"])(fe,me,de,!1,null,null,null),he=ge.exports,be={name:"fundlist",data:function(){return{tableData:[],formData:{type:"",describe:"",income:"",expend:"",cash:"",remark:"",objectId:""},dialog:{show:!1,title:"",option:"edit"}}},components:{eldialog:he},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this;l()({url:" /api/1/classes/fundlist",method:"get",headers:{"X-Bmob-Application-Id":"3486ee36532cacc0aad46564211c4af1","X-Bmob-REST-API-Key":"75f41593b456f26a8fbca37d28032c5e","Content-Type":"application/json"}}).then(function(t){console.log(t),e.tableData=t.data.results})},handleEdit:function(e,t){console.log(123),this.dialog={show:!0,title:"修改资金信息",option:"edit"},this.formData={type:t.type,describe:t.describe,income:t.income,expend:t.expend,cash:t.cash,remark:t.remark,objectId:t.objectId}},handleDelete:function(e,t){console.log(456)},handleAdd:function(){this.dialog={show:!0,title:"添加资金信息",option:"add"},this.formData={type:"",describe:"",income:"",expend:"",cash:"",remark:""}}}},ve=be,ye=(a("222f"),Object(m["a"])(ve,ce,ue,!1,null,"e3e9594a",null)),we=ye.exports;r["default"].use(h["a"]);var _e=new h["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:I,children:[{path:"",component:ae},{path:"/home",name:"home",component:ae},{path:"/infoshow",name:"infoshow",component:le},{path:"/fundlist",name:"fundlist",component:we}]},{path:"/register",name:"register",component:R},{path:"/login",name:"login",component:W},{path:"*",name:"/404",component:N}]});_e.beforeEach(function(e,t,a){var r=!!localStorage.eleToken;"/login"===e.path||"/register"===e.path?a():r?a():a("/login")});var xe=_e,ke=a("2f62");r["default"].use(ke["a"]);var Ce,$e={isAuth:!1,user:{}},je={isAuth:function(e){return e.isAuth},user:function(e){return e.user}},De={changeisauth:function(e,t){e.isAuth=t||!1},changeuser:function(e,t){e.user=t||{}}},Se={setisAuth:function(e,t){var a=e.commit;a("changeisauth",t)},setuser:function(e,t){var a=e.commit;a("changeuser",t)},clearCurrentState:function(e){var t=e.commit;t("changeisauth",!1),t("changeuser",null)}},Ue=new ke["a"].Store({state:$e,getters:je,mutations:De,actions:Se}),Ee=a("9483");function Oe(){Ce=f["Loading"].service({lock:!0,text:"拼命加载中...",background:"rgba(0,0,0,0.7)"})}function Te(){Ce.close()}Object(Ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),l.a.interceptors.request.use(function(e){return Oe(),localStorage.eleToken&&(e.headers.Authorization=localStorage.eleToken),e},function(e){return Promise.reject(e)}),l.a.interceptors.response.use(function(e){return Te(),e},function(e){Te(),f["Message"].error(e.response.data);var t=e.response.status;return 401===t&&(f["Message"].error("token失效,请重新登陆!"),localStorage.removeItem("eleToken"),xe.push("/login")),Promise.reject(e)});var Ae=l.a;r["default"].config.productionTip=!1,r["default"].use(g.a),r["default"].prototype.$axios=Ae,new r["default"]({router:xe,store:Ue,render:function(e){return e(p)}}).$mount("#app")},"5d7c":function(e,t,a){},"64a9":function(e,t,a){},6598:function(e,t,a){"use strict";var r=a("a8ba"),s=a.n(r);s.a},"7bef":function(e,t,a){},"85a6":function(e,t,a){e.exports=a.p+"img/404.6b8ae1d0.gif"},9685:function(e,t,a){},a8ba:function(e,t,a){},b51f:function(e,t,a){},b94e:function(e,t,a){"use strict";var r=a("5d7c"),s=a.n(r);s.a},c1af:function(e,t,a){"use strict";var r=a("9685"),s=a.n(r);s.a},c780:function(e,t,a){e.exports=a.p+"img/logo.c43f32ce.png"},d34e:function(e,t,a){"use strict";var r=a("b51f"),s=a.n(r);s.a},e87c:function(e,t,a){"use strict";var r=a("5542"),s=a.n(r);s.a},f6ce:function(e,t,a){}});
//# sourceMappingURL=app.56ffba8b.js.map