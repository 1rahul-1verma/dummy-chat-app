(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t){e.exports={ROOT_URL:"http://localhost:3131/",MESSAGE_FILE:"/Users/rahul/Desktop/Practice/dummy-chat/src/Server/message.json",USER_FILE:"/Users/rahul/Desktop/Practice/dummy-chat/src/Server/user.json",CHAT_FILE:"/Users/rahul/Desktop/Practice/dummy-chat/src/Server/chat.json",BASE_URL:"http://localhost:3001"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(16),n(2)),o=n(3).ROOT_URL,l=function(e){var t=e.url,n=e.method,c=e.payload,r=e.skip,s=void 0!==r&&r,l=e.interval,d=Object(a.useState)(),u=Object(i.a)(d,2),j=u[0],h=u[1],b=Object(a.useState)(),m=Object(i.a)(b,2),v=m[0],O=m[1],f=Object(a.useState)(!s),x=Object(i.a)(f,2),p=x[0],g=x[1],S=Object(a.useState)(0),C=Object(i.a)(S,2),N=C[0],I=C[1];return Object(a.useEffect)((function(){var e={method:n};c&&Object.assign(e,{body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}),s||(g(!0),fetch(o+t,e).then((function(e){return e.ok||O("Some Error"),e.json()})).then((function(e){h(e),g(!1)})).catch((function(e){g(!1),O("".concat(e))})))}),[t,n,c,s,N]),Object(a.useEffect)((function(){if(l){var e=setInterval((function(){I(Date.now())}),500);return function(){clearInterval(e)}}return function(){}})),{data:j,error:v,loading:p}},d=(n(17),n(0));function u(){var e=Object(a.useContext)(_),t=l({url:"user/id?userId=".concat(e),method:"GET"}).data;return Object(d.jsxs)("div",{className:"Header-container",children:[Object(d.jsx)("input",{className:"Search-box",placeholder:"Search...",type:"text"}),Object(d.jsxs)("div",{className:"user-name",children:[Object(d.jsxs)("span",{children:[" ",null===t||void 0===t?void 0:t.name," "]}),Object(d.jsx)("img",{className:"User-avatar",src:null===t||void 0===t?void 0:t.avatar,alt:"AVATAR"})]})]})}n(19);var j=function(){return Object(d.jsx)("div",{className:"header-container",children:"Sprinklr"})};n(20);function h(e){var t=e.chatId,n=e.handleSelectedChatId,a=l({url:"chat/id?chatId=".concat(t),method:"GET"}).data;return Object(d.jsx)("div",{className:"chat-option-container",onClick:function(){return function(e){e&&n(e.id)}(a)},children:null===a||void 0===a?void 0:a.name})}n(21);function b(e){var t=e.channels,n=e.SelectedChannel,a=e.handleSelectedChannelId,c=e.handleFormOpen;return Object(d.jsxs)("div",{className:"channel-container",children:[Object(d.jsx)("b",{children:"Channels"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{className:"channel","data-selected":n===e,children:Object(d.jsx)(h,{chatId:e,handleSelectedChatId:a})},t)})),Object(d.jsx)("div",{className:"channel-button",onClick:c,children:" Add channels "})]})}n(22);function m(e){var t=e.friends,n=e.SelectedFriend,a=e.handleSelectedFriendId;return Object(d.jsxs)("div",{className:"friend-container",children:[Object(d.jsx)("b",{children:"Direct Messages"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("div",{className:"friend","data-selected":n===e,children:Object(d.jsx)(h,{chatId:e,handleSelectedChatId:a})},t)}))]})}n(23);function v(e){var t=e.selectedListItem,n=e.handleSelectedListItem,c=e.handleFormOpen,r=Object(a.useContext)(_),s=l({url:"user/id?userId=".concat(r),method:"GET",interval:!0}).data;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{SelectedChannel:t,channels:null===s||void 0===s?void 0:s.channels,handleSelectedChannelId:n,handleFormOpen:c}),Object(d.jsx)(m,{SelectedFriend:t,friends:null===s||void 0===s?void 0:s.directMessages,handleSelectedFriendId:n})]})}var O=n(11);n(24);function f(e){var t=e.sender,n=e.message,a=l({url:"message/id?messageId=".concat(n),method:"GET"}).data,c=l({url:"user/id?userId=".concat(null===a||void 0===a?void 0:a.senderId),method:"GET"}).data;return Object(d.jsx)("div",{className:"Message-container",children:Object(d.jsxs)("div",{className:"message","data-sender":t===(null===a||void 0===a?void 0:a.senderId),children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"message-avatar",src:null===c||void 0===c?void 0:c.avatar,alt:"avatar"})}),Object(d.jsxs)("div",{className:"message-content-container",children:[Object(d.jsxs)("div",{className:"sender-name",children:[null===c||void 0===c?void 0:c.name," :"]}),Object(d.jsx)("div",{className:"message-content",children:null===a||void 0===a?void 0:a.content})]})]})})}var x=n(10);n(25);function p(e){var t=e.sender,n=e.messages,c=Object(a.useCallback)((function(e){var a=e.index,c=e.style,r=n?n[a]:void 0;return r?Object(d.jsx)("div",{style:c,children:r?Object(d.jsx)(f,{sender:t,message:r}):null}):null}),[n,t]);return Object(d.jsx)("div",{className:"chat-body-container",children:Object(d.jsx)(x.a,{height:1e3,width:600,itemSize:150,itemCount:n?n.length:0,children:c})})}var g=n(7),S=n.n(g),C=n(9),N=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],d=o[1],u=Object(a.useState)(),j=Object(i.a)(u,2),h=j[0],b=j[1];return{mutate:function(){var t=Object(C.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(!0),e(n).then((function(e){return e.ok||b("Some Error"),e.json()})).then((function(e){d(e),r(!1)})).catch((function(e){r(!1),b("".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),data:l,loading:c,error:h}},I=function(e,t){var n=function(e){return{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}}(e);return fetch(t,n)},y=(n(27),n(3).ROOT_URL);function F(e){var t=e.sender,n=e.activeChatId,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],l=N((function(e){var t="".concat(y,"message");return I(e,t)})).mutate,u=N((function(e){var t="".concat(y,"chat/id");return I(e,t)})).mutate;return Object(d.jsxs)("div",{className:"MessageBox-container",children:[Object(d.jsx)("textarea",{className:"MessageBox-input",placeholder:"Type Message...",value:s,onChange:function(e){var t=e.target.value;o(t)}}),Object(d.jsx)("button",{disabled:""===s,className:"message-box-button",onClick:function(){var e=Date.now().toString(),a={id:e,senderId:t,content:s,timeStamp:Date.now().toString()};l(a),u({chatId:n,messageId:e}),o("")},children:"Send"})]})}n(28);function k(e){var t=e.activeChat,n=e.type,a=e.handleFormOpen;return Object(d.jsxs)("div",{className:"chat-header-container",children:[t,"2"===n&&Object(d.jsx)("button",{className:"Add-channel-button",onClick:a,children:"+"})]})}var T=n(3);function E(e){var t=e.isFormOpen,n=e.chatId,c=e.handleFormClose,r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],u=N((function(e){var t="".concat(T.ROOT_URL,"chat/newUser");return I(e,t)})).mutate,j=N((function(e){var t="".concat(T.ROOT_URL,"user");return I(e,t)})).mutate;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h2",{children:"Add new member!"}),Object(d.jsx)("label",{className:"form-label",children:" New Member "}),Object(d.jsx)("input",{className:"form-input",value:o,placeholder:"New Member",onChange:function(e){var t=e.target.value;l(t)},required:!0}),Object(d.jsx)("button",{className:"form-button-close",onClick:c,children:"X"}),Object(d.jsx)("button",{className:"form-button-create",onClick:function(){c();var e={chatId:n,userId:o};u(e),j(e)},children:"Add"})]})})})}var L=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return{isModalOpen:n,toggleModalState:Object(a.useCallback)((function(){c((function(e){return!e}))}),[])}};n(29);function M(e){var t=e.activeChatId,n=Object(a.useContext)(_),c=l({url:"chat/id?chatId=".concat(t),method:"GET",interval:!0}).data,r=L(),s=r.isModalOpen,i=r.toggleModalState,o=(null===c||void 0===c?void 0:c.messages)?Object(O.a)(null===c||void 0===c?void 0:c.messages):[];return o.reverse(),Object(d.jsxs)("div",{className:"chat-area",children:[Object(d.jsx)(k,{activeChat:null===c||void 0===c?void 0:c.name,type:null===c||void 0===c?void 0:c.type,handleFormOpen:i}),Object(d.jsx)(p,{sender:n,messages:o}),Object(d.jsx)(F,{sender:n,activeChatId:t}),Object(d.jsx)(E,{chatId:t,isFormOpen:s,handleFormClose:i})]})}n(30);function R(e){var t=e.isOpen,n=e.onClose,c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),j=u[0],h=u[1],b=N((function(e){var t="".concat(T.ROOT_URL,"chat/new");return I(e,t)})).mutate,m=N((function(e){var t="".concat(T.ROOT_URL,"user");return I(e,t)})).mutate;return Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h2",{children:"Create a channel"}),Object(d.jsx)("label",{className:"form-label",children:" Name "}),Object(d.jsx)("input",{className:"form-input",placeholder:"Channel-Name",value:s,onChange:function(e){return function(e){var t=e.target.value;o(t)}(e)},name:"name",required:!0}),Object(d.jsx)("label",{className:"form-label",children:" Members "}),Object(d.jsx)("input",{className:"form-input",placeholder:"Members-List",value:j,onChange:function(e){return function(e){var t=e.target.value;h(t)}(e)},required:!0}),Object(d.jsx)("button",{className:"form-button-close",onClick:n,children:"X"}),Object(d.jsx)("button",{className:"form-button-create",onClick:function(){n();var e=j.split(","),t=Date.now().toString(),a={id:t,name:s,userId:e,messages:[],type:"2"};e.forEach((function(e){var n={chatId:t,userId:e};console.log(n),m(n)})),b(a)},children:"Create"})]})}):null})}n(31);function w(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=L(),s=r.isModalOpen,o=r.toggleModalState,l=Object(a.useCallback)((function(e){c(e)}),[]);return Object(d.jsxs)("div",{className:"Body-container",children:[Object(d.jsx)(v,{selectedListItem:n,handleSelectedListItem:l,handleFormOpen:o}),Object(d.jsx)(M,{activeChatId:n}),Object(d.jsx)(R,{isOpen:s,onClose:o})]})}var U=prompt("Enter name to join"),_=c.a.createContext("");function A(){return Object(d.jsxs)(_.Provider,{value:U,children:[Object(d.jsx)(u,{}),Object(d.jsx)(w,{})]})}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),D()}],[[32,1,2]]]);
//# sourceMappingURL=main.e06a64dc.chunk.js.map