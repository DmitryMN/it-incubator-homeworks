(this["webpackJsonpsimple-homework"]=this["webpackJsonpsimple-homework"]||[]).push([[0],[,,,function(e,t,n){e.exports={message_container:"Message_message_container__2f-AB",img_container:"Message_img_container__pwHmp",imgbg_small:"Message_imgbg_small__3v9G4",imgbg_big:"Message_imgbg_big__1wN-V",avatar:"Message_avatar__mCVMw",text_container:"Message_text_container__1N7L2",time_container:"Message_time_container__2ILIt"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3Vf_f",errorInput:"SuperInputText_errorInput__3dvj0",error:"SuperInputText_error__2bZVg"}},,function(e,t,n){e.exports={App:"App_App__13lmN",container:"App_container__29WXP"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__O0J15",error:"Greeting_error__2XiDh",span_error:"Greeting_span_error__eLXc1"}},function(e,t,n){e.exports={blue:"HW4_blue__Iq-co",column:"HW4_column__3xtTQ",testSpanError:"HW4_testSpanError__2WdoB"}},function(e,t,n){e.exports={default:"SuperButton_default__2KVzk",red:"SuperButton_red__2fpeq"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__J_tD8",spanClassName:"SuperCheckbox_spanClassName__1T6Ab"}},,,,function(e,t,n){e.exports={btn_delete:"Affairs_btn_delete__s8UdG"}},,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(17),s=n.n(c),i=(n(25),n(10)),o=n.n(i),l=n(3),j=n.n(l),u=n(0);var b=function(e){return Object(u.jsxs)("div",{className:j.a.message_container,children:[Object(u.jsx)("div",{className:j.a.img_container,children:Object(u.jsx)("div",{className:j.a.imgbg_small,children:Object(u.jsx)("div",{className:j.a.imgbg_big,children:Object(u.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:"avatar"})})})}),Object(u.jsxs)("div",{className:j.a.text_container,children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsx)("div",{children:e.message}),Object(u.jsx)("div",{className:j.a.time_container,children:Object(u.jsx)("span",{children:e.time})})]})]})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Dmitii Malenkov",m="Hello my big friends",_="22:00";var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(b,{avatar:d,name:h,message:m,time:_}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},O=n(2),p=n(18),f=n.n(p);var g=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:e.affair.name}),Object(u.jsx)("button",{className:f.a.btn_delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var v=function(e){var t=e.data.map((function(t){return Object(u.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(C),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(O.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):void 0}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},N=n(20),w=n(11),y=n.n(w),S=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?y.a.error:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,onBlur:n,className:s}),Object(u.jsx)("button",{onClick:r,children:"add"}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("span",{className:y.a.span_error,children:a})]})},A=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(O.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(O.a)(o,2),j=l[0],b=l[1],d=t.length;return Object(u.jsx)(S,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&b("")):(i(""),b("name is require"))},addUser:function(){n(s),alert("Hello ".concat(s," !")),i("")},error:j,totalUsers:d})},I=n(19);var T=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(A,{users:n,addUserCallback:function(e){a([].concat(Object(N.a)(n),[{_id:Object(I.v1)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},M=n(4),W=n(5),B=n(8),E=n.n(B),H=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(E.a.error," ").concat(i||""),j="".concat(c?E.a.errorInput:E.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(u.jsx)("span",{className:l,children:c})]})},F=n(12),U=n.n(F),G=n(13),J=n.n(G),P=function(e){var t=e.red,n=e.className,r=Object(W.a)(e,["red","className"]),a="".concat(t?J.a.red:J.a.default," ").concat(n);return Object(u.jsx)("button",Object(M.a)({className:a},r))},V=n(14),X=n.n(V),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:X.a.spanClassName,children:a})]})};var K=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(O.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:U.a.column,children:[Object(u.jsx)(H,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(H,{className:U.a.blue}),Object(u.jsx)(P,{children:"default"}),Object(u.jsx)(P,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(P,{disabled:!0,children:"disabled"}),Object(u.jsx)(q,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var L=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsxs)("div",{className:o.a.container,children:[Object(u.jsx)(x,{}),Object(u.jsx)(k,{}),Object(u.jsx)(T,{}),Object(u.jsx)(K,{})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.02af7b69.chunk.js.map