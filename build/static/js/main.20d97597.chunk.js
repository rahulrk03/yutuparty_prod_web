(this["webpackJsonpyutuparty-web"]=this["webpackJsonpyutuparty-web"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),i=(a(125),a(126),a(9)),s=a.n(i),l=a(61),d=a(12),u=a(264),j=a(265),p=a(266),b=a(267),O=a(35),x=a(262),f=a(3);var h=function(e){var t=Object(O.c)(),a=Object(n.useState)(e.userName),r=Object(d.a)(a,2),c=r[0],o=r[1];return Object(f.jsxs)("div",{style:{padding:"10px",marginTop:"10px"},children:[Object(f.jsxs)("label",{style:{display:"flex",flexDirection:"row",height:"25px",fontSize:"14pt"},children:["Enter Your name:",Object(f.jsx)("input",{type:"text",value:c,style:{marginLeft:"15px"},onChange:function(e){o(e.target.value)}})]}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"160px",marginTop:"20px"},children:[Object(f.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),t.close(c)},children:"Confirm"}),Object(f.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginLeft:"10px"},onClick:function(e){e.preventDefault(),t.close()},children:"Cancel"})]})]})},m=a(18);function g(e){return{type:"SET_USER",payload:e}}var v=a(17),y=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,marginRight:e.spacing(10)}}}));var S,w=function(){var e=Object(m.b)(),t=Object(v.f)(),a=y(),r=Object(n.useState)(""),c=Object(d.a)(r,2),o=c[0],i=c[1],u=Object(m.c)((function(e){return e.userdetail.user})),x=function(){var t=Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.b)(Object(f.jsx)(h,{userName:o}),{title:"Hello!"});case 2:(a=t.sent)&&e(g(a));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){e({type:"GET_USER"}),i(u)}),[u]),Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(j.a,{position:"static",children:Object(f.jsxs)(p.a,{children:[Object(f.jsx)(b.a,{variant:"h6",className:a.title,onClick:function(){t.push("/")},children:Object(f.jsx)("div",{children:Object(f.jsx)("span",{children:"Home"})})}),Object(f.jsx)("form",{children:Object(f.jsx)(b.a,{variant:"h6",className:a.title,onClick:x,children:o})})]})})})},R=a(98),k=a.n(R),E=a(99),C=a.n(E),D=a(41),T=Object(D.createActions)({createRoom:["payload"],createRoomStart:["payload"],createRoomSuccess:["payload"],createRoomFailure:["payload"],joinRoom:["payload"],joinRoomStart:["payload"],joinRoomSuccess:["payload"],joinRoomFailure:["payload"]}),_=T.Types,A=T.Creators,U=a(19),I=a(4),V={error:null,loading:!1,roomId:0,roomSuccess:!1},F=(S={},Object(U.a)(S,_.CREATE_ROOM_START,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:null})})),Object(U.a)(S,_.CREATE_ROOM_SUCCESS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(I.a)(Object(I.a)({},e),{},{roomId:a,loading:!1,roomSuccess:!0,error:null})})),Object(U.a)(S,_.CREATE_ROOM_FAILURE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;console.log(t.payload.error);var a=t.payload.error;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,roomSuccess:!1,error:a})})),Object(U.a)(S,_.JOIN_ROOM_START,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:null})})),Object(U.a)(S,_.JOIN_ROOM_SUCCESS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(I.a)(Object(I.a)({},e),{},{roomId:a,loading:!1,roomSuccess:!0,error:null})})),Object(U.a)(S,_.JOIN_ROOM_FAILURE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.payload.error;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,roomSuccess:!1,error:a})})),S),L=Object(D.createReducer)(V,F),N=a(10),P="https://api.yutuparty.com/api",J={createRoom:"".concat(P,"/createRoom/"),joinRoom:"".concat(P,"/joinRoom/")},M=a(97),z=a.n(M).a.create({baseURL:P,headers:{"Content-Type":"application/json"}}),H=s.a.mark(Y),B=s.a.mark(W);function Y(e){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.payload,n.prev=1,n.next=4,Object(N.a)(A.createRoomStart());case 4:return n.next=6,z.post(J.createRoom);case 6:if(!((t=n.sent).status>=200&&t.status<300)){n.next=12;break}return n.next=10,Object(N.a)(A.createRoomSuccess(t.data.data));case 10:n.next=13;break;case 12:throw t;case 13:n.next=38;break;case 15:if(n.prev=15,n.t0=n.catch(1),console.log({error:n.t0}),!(n.t0&&n.t0.response&&n.t0.response.status)){n.next=35;break}n.t1=n.t0.response.status,n.next=400===n.t1?22:500===n.t1?26:30;break;case 22:return a={error:n.t0.response.data.message},n.next=25,Object(N.a)(A.createRoomFailure(a));case 25:return n.abrupt("break",33);case 26:return a={error:"Somthing went wrong try later"},n.next=29,Object(N.a)(A.createRoomFailure(a));case 29:return n.abrupt("break",33);case 30:return a={error:"Unable to update. Try again later"},n.next=33,Object(N.a)(A.createRoomFailure(a));case 33:n.next=38;break;case 35:return a={error:n.t0.message},n.next=38,Object(N.a)(A.createRoomFailure(a));case 38:case"end":return n.stop()}}),H,null,[[1,15]])}function W(e){var t,a,n,r,c;return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,console.log("payload is:",t.payload.roomId),o.prev=2,o.next=5,Object(N.a)(A.joinRoomStart());case 5:return a=t.payload.roomId,n={room_name:a},o.next=9,z.post(J.joinRoom,n);case 9:if(!((r=o.sent).status>=200&&r.status<300)){o.next=15;break}return o.next=13,Object(N.a)(A.joinRoomSuccess(a));case 13:o.next=16;break;case 15:throw r;case 16:o.next=39;break;case 18:if(o.prev=18,o.t0=o.catch(2),console.log({error:o.t0}),!(o.t0&&o.t0.response&&o.t0.response.status)){o.next=38;break}o.t1=o.t0.response.status,o.next=400===o.t1?25:500===o.t1?29:33;break;case 25:return c={error:o.t0.response.data.message},o.next=28,Object(N.a)(A.joinRoomFailure(c));case 28:return o.abrupt("break",36);case 29:return c={error:"Somthing went wrong try later"},o.next=32,Object(N.a)(A.joinRoomFailure(c));case 32:return o.abrupt("break",36);case 33:return c={error:"Unable to update. Try again later"},o.next=36,Object(N.a)(A.joinRoomFailure(c));case 36:o.next=39;break;case 38:c={error:o.t0.message};case 39:case"end":return o.stop()}}),B,null,[[2,18]])}var G=function(){var e=Object(O.c)(),t=Object(n.useState)(),a=Object(d.a)(t,2),r=a[0],c=a[1];return Object(f.jsxs)("div",{style:{padding:"10px",marginTop:"10px"},children:[Object(f.jsxs)("label",{style:{display:"flex",flexDirection:"row"},children:["Enter Room Id:",Object(f.jsx)("input",{type:"text",style:{marginLeft:"15px"},onChange:function(e){c(e.target.value)}})]}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"122px",marginTop:"10px"},children:[Object(f.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),e.close(r)},children:"Join Room"}),Object(f.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginLeft:"10px"},onClick:function(t){t.preventDefault(),e.close()},children:"Cancel"})]})]})};var K,X,q,Q,Z,$,ee,te,ae,ne,re,ce,oe=function(e){var t=Object(v.f)(),a=Object(m.b)(),r=Object(m.c)((function(e){return e.roomReducer.roomId})),c=Object(m.c)((function(e){return e.roomReducer.error})),o=Object(m.c)((function(e){return e.roomReducer.roomSuccess})),i=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)(Object(f.jsx)(G,{}),{title:"Join a room"});case 2:(t=e.sent)&&(n={roomId:t},a(A.joinRoom({payload:n})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(c),o&&r&&t.push({pathname:"/room",state:{roomId:r}}),c&&Object(O.a)(c,"Please Try again")}),[o,r,c]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{style:{padding:"10px",marginTop:"4%",marginLeft:"15%",display:"flex",flexDirection:"row"},children:[Object(f.jsx)("div",{style:{width:"30%",display:"flex",flexDirection:"column",padding:"10px",textDecoration:"none"},onClick:function(){a(A.createRoom())},children:Object(f.jsxs)(x.a,{variant:"contained",children:[Object(f.jsx)(k.a,{style:{fontSize:"50px"}}),"Create a room"]})}),Object(f.jsx)("div",{style:{width:"30%",display:"flex",flexDirection:"column",padding:"10px",marginLeft:"90px",textDecoration:"none"},onClick:i,children:Object(f.jsxs)(x.a,{variant:"contained",children:[Object(f.jsx)(C.a,{style:{fontSize:"50px"}}),"Join a room"]})})]})})},ie=a(240),se=a(242),le=a(268),de=a(269),ue=a(108),je=a.n(ue),pe=a(104),be=a.n(pe),Oe=a(106),xe=a.n(Oe),fe=a(107),he=a.n(fe),me=a(105),ge=a.n(me),ve=a(100),ye=a.n(ve),Se=a(31),we=a(32),Re="#21D0B3",ke="#fff",Ee="#8792AC",Ce=we.a.div(K||(K=Object(Se.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  border-radius: 10px 10px 0px 0px;\n"]))),De=we.a.div(X||(X=Object(Se.a)(["\n  opacity: ",";\n\n  height: 100%;\n  width: 100%;\n\n  position: absolute;\n  top: 0;\n\n  // background: transparent linear-gradient(180deg, #262626de 0%, #26262600 100%) 0% 0% no-repeat;\n  border-radius: 10px 10px 0 0;\n"])),(function(e){return e.show?"1":"0"})),Te=we.a.div(q||(q=Object(Se.a)(["\n  height: 100%;\n  border-radius: 10px 10px 0 0;\n"]))),_e=we.a.div(Q||(Q=Object(Se.a)(["\n  padding: 0 1.5rem;\n  display: flex;\n  height: 50px;\n//   justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  // background: transparent linear-gradient(0deg, #262626de 0%, #26262600 100%) 0% 0% no-repeat;\n  border-radius: 10px 10px 0 0;\n\n  & > svg {\n    cursor: pointer;\n  }\n"]))),Ae=(we.a.div(Z||(Z=Object(Se.a)(["\n  display: flex;\n  justify-content: space-evenly;\n\n  width: 100%;\n  position: absolute;\n  bottom: 50%;\n\n  & > svg {\n    cursor: pointer;\n  }\n"]))),we.a.div($||($=Object(Se.a)(["\n  cursor: pointer;\n  margin: 0 1rem;\n\n  transition: 0.5s;\n\n  & > svg {\n    height: 35px;\n  }\n"])))),Ue=(we.a.input(ee||(ee=Object(Se.a)(["\n  height: 4px;\n  width: 500px;\n  outline: none;\n  cursor: pointer;\n"]))),we.a.time(te||(te=Object(Se.a)(["\n  font-size: 12px;\n  margin: 0 1rem;\n  min-width: 40px;\n"]))),we.a.button(ae||(ae=Object(Se.a)(["\n  padding: 1rem;\n  margin: 0.3rem;\n\n  min-width: 60px;\n  font-size: 14px;\n\n  background: ",";\n  color: ",";\n\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.isSelected?"".concat(Re):"#4e436926"}),(function(e){return e.isSelected?"#121A19":"".concat(ke)})),we.a.div(ne||(ne=Object(Se.a)(["\n  width: 20px;\n  margin-left:20px;\n"])))),Ie=(we.a.p(re||(re=Object(Se.a)(["\n  font-size: ",";\n  color: ",";\n  margin-left: auto;\n  padding: 1rem 0;\n"])),"1.2rem",Ee),Object(D.createActions)({socketOn:["payload"],createChat:["payload"],createChatStart:["payload"],createChatSuccess:["payload"],createChatFailure:["payload"],createVideo:["payload"],createVideoStart:["payload"],createVideoSuccess:["payload"],createVideoFailure:["payload"],updateVideo:["payload"],updateVideoStart:["payload"],updateVideoSuccess:["payload"],updateVideoFailure:["payload"],playVideo:["payload"],playVideoStart:["payload"],playVideoSuccess:["payload"],playVideoFailure:["payload"],chatUpdate:["payload"],chatUpdateStart:["payload"],chatUpdateSuccess:["payload"],chatUpdateFailure:["payload"]})),Ve=Ie.Types,Fe=Ie.Creators,Le=a(111),Ne={error:null,loading:!1,videoUrl:"",success:!1,playStatus:!1,message:[]},Pe=(ce={},Object(U.a)(ce,Ve.CREATE_VIDEO_START,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:null})})),Object(U.a)(ce,Ve.CREATE_VIDEO_SUCCESS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!0,error:null})})),Object(U.a)(ce,Ve.CREATE_VIDEO_FAILURE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.payload.error;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!1,error:a})})),Object(U.a)(ce,Ve.PLAY_VIDEO_START,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:null})})),Object(U.a)(ce,Ve.PLAY_VIDEO_SUCCESS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!0,playStatus:a,error:null})})),Object(U.a)(ce,Ve.PLAY_VIDEO_FAILURE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.payload.error;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!1,error:a})})),Object(U.a)(ce,Ve.CHAT_UPDATE_START,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:null})})),Object(U.a)(ce,Ve.CHAT_UPDATE_SUCCESS,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;e.message=[].concat(Object(Le.a)(e.message),[t.payload]);var a=e.message;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!0,message:a,error:null})})),Object(U.a)(ce,Ve.CHAT_UPDATE_FAILURE,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.payload.error;return Object(I.a)(Object(I.a)({},e),{},{loading:!1,success:!1,error:a})})),ce),Je=Object(D.createReducer)(Ne,Pe),Me=s.a.mark(Be),ze=s.a.mark(Ye),He=s.a.mark(We);function Be(e){var t,a,n;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.sendData,n=t.socket,r.prev=2,r.next=5,Object(N.a)(Fe.createVideoStart());case 5:return n.send(JSON.stringify(a)),r.next=8,Object(N.a)(Fe.createVideoSuccess());case 8:r.next=15;break;case 10:return r.prev=10,r.t0=r.catch(2),console.log(r.t0),r.next=15,Object(N.a)(Fe.createVideoFailure(r.t0));case 15:case"end":return r.stop()}}),Me,null,[[2,10]])}function Ye(e){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(N.a)(Fe.playVideoSuccess(t));case 4:a.next=11;break;case 6:return a.prev=6,a.t0=a.catch(1),console.log(a.t0),a.next=11,Object(N.a)(Fe.playVideoFailure(a.t0));case 11:case"end":return a.stop()}}),ze,null,[[1,6]])}function We(e){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,console.log(t),a.next=5,Object(N.a)(Fe.chatUpdateSuccess(t));case 5:a.next=12;break;case 7:return a.prev=7,a.t0=a.catch(1),console.log(a.t0),a.next=12,Object(N.a)(Fe.chatUpdateFailure(a.t0));case 12:case"end":return a.stop()}}),He,null,[[1,7]])}var Ge=function(e){var t=Object(n.useRef)(null),a=Object(m.b)(),r=Object(n.useRef)(null),c=Object(n.useState)(!1),o=Object(d.a)(c,2),i=o[0],s=o[1],l=Object(n.useState)({playing:!1,controls:!1,muted:!1,played:0,duration:0,playbackRate:1,seeking:!1,showControls:!1}),u=Object(d.a)(l,2),j=u[0],p=u[1],b=j.playbackRate,O=j.muted,x=(j.playing,j.showControls),h=Object(m.c)((function(e){return e.videoDetail.playStatus})),g=function(){p(Object(I.a)(Object(I.a)({},j),{},{showControls:!x}))};return Object(n.useEffect)((function(){console.log("PlayStatus is ",h),s(h)}),[h]),Object(f.jsx)("div",{children:Object(f.jsxs)(Ce,{children:[Object(f.jsx)(Te,{onMouseOver:g,ref:r,children:Object(f.jsx)(ye.a,{ref:t,width:"890px",height:"530px",url:e.videoUrl,muted:O,playing:i,playbackRate:b,onProgress:function(e){p(Object(I.a)(Object(I.a)({},j),e))},onEnded:function(){p(Object(I.a)(Object(I.a)({},j),{},{playing:!1}))},onDuration:function(e){p(Object(I.a)(Object(I.a)({},j),{},{duration:e}))}})}),x?Object(f.jsx)(De,{show:x,onMouseLeave:g,children:Object(f.jsxs)(_e,{className:"controlls_container",children:[Object(f.jsx)(Ae,{onClick:function(t){if(t.preventDefault(),s(!i),i){var n={sendData:{playStatus:"Stop"},socket:e.socket};a(Fe.createVideo(n))}else{var r={sendData:{playStatus:"Resume"},socket:e.socket};a(Fe.createVideo(r))}},children:i?Object(f.jsx)(be.a,{fontSize:"large",style:{fill:"white"}}):Object(f.jsx)(ge.a,{fontSize:"large",style:{fill:"white"}})}),Object(f.jsx)(Ue,{onClick:function(){p(Object(I.a)(Object(I.a)({},j),{},{muted:!O}))},children:O?Object(f.jsx)(xe.a,{fontSize:"large",style:{fill:"white"}}):Object(f.jsx)(he.a,{fontSize:"large",style:{fill:"white"}})})]})}):""]})})},Ke=Object(u.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function Xe(e){var t=e.socket,a=Object(n.useState)("https://www.youtube.com/watch?v=WKbwopSXLWU"),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),l=s[0],u=s[1],j=Ke(),p=Object(m.b)();return Object(n.useEffect)((function(){t.onmessage=function(e){var t=JSON.parse(e.data);console.log(t),t.videoUrl&&u(t.videoUrl),t.playStatus&&"Resume"===t.playStatus&&p(Fe.playVideo(!0)),t.playStatus&&"Stop"===t.playStatus&&p(Fe.playVideo(!1)),t.message&&p(Fe.chatUpdate(t.message))}})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:Object(f.jsxs)(ie.a,{component:"form",className:j.root,children:[Object(f.jsx)(se.a,{className:j.input,placeholder:"Enter Video Url",inputProps:{"aria-label":"enter video url"},value:c,onChange:function(e){o(e.target.value)}}),Object(f.jsx)(le.a,{className:j.divider,orientation:"vertical"}),Object(f.jsx)(de.a,{type:"submit",onClick:function(t){t.preventDefault();var a={sendData:{videoUrl:c},socket:e.socket};p(Fe.createVideo(a)),o("")},className:j.iconButton,"aria-label":"submit",children:Object(f.jsx)(je.a,{color:"primary"})})]})}),Object(f.jsx)("div",{style:{padding:1,marginTop:10},children:Object(f.jsx)(Ge,{videoUrl:l,socket:t})})]})}var qe=function(e){return Object(f.jsx)("div",{style:{width:"100%",height:"20px",padding:"10px",fontFamily:"Arial, Helvetica, sans-serif"},children:Object(f.jsx)("p",{children:Object(f.jsxs)("strong",{children:["Room Id: ",e.roomId]})})})},Qe=a(270),Ze=a(109),$e=a.n(Ze);var et=function(e){var t=e.socket,a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],o=r[1],i=Object(m.b)(),s=function(e){e.preventDefault();var a={sendData:{message:c},socket:t};i(Fe.createVideo(a)),o("")};return Object(f.jsx)("div",{children:Object(f.jsx)("form",{action:".",onSubmit:s,children:Object(f.jsxs)("div",{style:{display:"flex",width:"100%",fontFamily:"Arial, Helvetica, sans-serif"},children:[Object(f.jsx)(Qe.a,{style:{width:"270px"},placeholder:"Enter message...",inputProps:{"aria-label":"description"},value:c,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)($e.a,{onClick:s,style:{marginTop:2,marginLeft:5},color:"primary"})]})})})},tt=a(271);var at=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(m.c)((function(e){return e.videoDetail.message}));return Object(n.useEffect)((function(){c(o)}),[o]),Object(f.jsx)("div",{children:r.map((function(e){return Object(f.jsx)("p",{children:e},Object(tt.a)())}))})},nt=a(110);function rt(e){return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row",width:"90%",height:490,padding:10,wordWrap:"break-word",marginRight:10},children:Object(f.jsx)(nt.Scrollbars,{style:{padding:"11",width:"100%",marginLeft:5},children:Object(f.jsx)(at,{socket:e.socket})})}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row",padding:5},children:Object(f.jsx)(et,{socket:e.socket})})]})}var ct=function(e){var t=Object(v.g)(),a="wss://api.yutuparty.com/ws/chat/"+t.state.roomId+"/",n=new WebSocket(a);return Object(f.jsx)("div",{style:{marginLeft:20,marginTop:10},children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%"},children:[Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:2},children:Object(f.jsx)(Xe,{socket:n})}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1,width:"100%",float:"right"},children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"95%",height:"100%",marginLeft:15},children:[Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:Object(f.jsx)(qe,{roomId:t.state.roomId})}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(f.jsx)(rt,{socket:n})})]})})]})})};var ot=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w,{}),Object(f.jsxs)(v.c,{children:[Object(f.jsx)(v.a,{exact:!0,path:"/",component:oe}),Object(f.jsx)(v.a,{exact:!0,path:"/home",component:oe}),Object(f.jsx)(v.a,{path:"/room",component:ct})]})]})},it=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,273)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},st=a(42),lt={user:"Enter Your name"};var dt=Object(st.b)({userdetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object(I.a)(Object(I.a)({},e),{},{name:e.user});case"SET_USER":return e.user=t.payload,Object(I.a)(Object(I.a)({},e),{},{user:t.payload});default:return e}},roomReducer:L,videoDetail:Je}),ut=a(112),jt=Object(I.a)(Object(I.a)({},_),Ve),pt=(Object(I.a)(Object(I.a)({},A),Fe),s.a.mark(bt));function bt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)(jt.CREATE_ROOM,Y);case 2:return e.next=4,Object(N.b)(jt.JOIN_ROOM,W);case 4:return e.next=6,Object(N.b)(jt.CREATE_VIDEO,Be);case 6:return e.next=8,Object(N.b)(jt.PLAY_VIDEO,Ye);case 8:return e.next=10,Object(N.b)(jt.CHAT_UPDATE,We);case 10:case"end":return e.stop()}}),pt)}var Ot=Object(ut.a)(),xt=Object(st.d)(dt,Object(st.c)(Object(st.a)(Ot)));Ot.run(bt);var ft=xt,ht=a(45);o.a.render(Object(f.jsx)(ht.a,{children:Object(f.jsx)(m.a,{store:ft,children:Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ot,{})})})}),document.getElementById("root")),it()}},[[238,1,2]]]);
//# sourceMappingURL=main.20d97597.chunk.js.map