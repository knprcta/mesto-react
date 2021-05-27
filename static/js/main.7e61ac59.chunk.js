(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),i=n.n(o),s=(n(14),n(9)),r=n(2),u=n.p+"static/media/header-logo.03b78ada.svg",l=n(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"header__logo",src:u,alt:"\u041c\u0435\u0441\u0442\u043e"})})},d=c.a.createContext();var _=function(e){var t=c.a.useContext(d),n=e.card.owner._id===t._id,a="element__delete-button ".concat(n?"element__delete-button_visible":"element__delete-button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),i="element__like-button ".concat(o?"element__like-button_active":"element__like-button_inactive");return Object(l.jsxs)("article",{className:"element",children:[Object(l.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"element__bottom",children:[Object(l.jsx)("h2",{className:"element__caption",children:e.card.name}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(l.jsx)("span",{className:"element__likes-count",children:e.card.likes.length})]})]}),Object(l.jsx)("button",{className:a,type:"button",onClick:function(){e.onCardDelete(e.card)}})]})};var j=function(e){var t=c.a.useContext(d);return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__main",children:[Object(l.jsxs)("div",{className:"profile__avatar",children:[Object(l.jsx)("div",{className:"profile__avatar-img",style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(l.jsx)("div",{className:"profile__edit-avatar",onClick:e.onEditAvatar})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__name-container",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__about",children:t.about})]})]}),Object(l.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(l.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var m=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var h=function(e){return Object(l.jsx)("div",{className:"popup popup_".concat(e.name," ")+(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("form",{className:"popup__container",name:"".concat(e.name,"-form"),noValidate:!0,autoComplete:"off",onSubmit:e.onSubmit,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{className:"popup__submit-button",type:"submit",children:e.button}),Object(l.jsx)("button",{className:"popup__close-button",type:"reset",onClick:e.onClose})]})})};var b=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(r.a)(i,2),u=s[0],p=s[1],_=c.a.useContext(d);return c.a.useEffect((function(){o(_.name),p(_.about)}),[_,e.isOpen]),Object(l.jsxs)(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u})},children:[Object(l.jsxs)("section",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_name",type:"text",name:"name",id:"userName-input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)},value:a||""}),Object(l.jsx)("span",{className:"popup__input-error",id:"userName-input-error"})]}),Object(l.jsxs)("section",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_about",type:"text",name:"about",id:"userAbout-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",onChange:function(e){p(e.target.value)},value:u||""}),Object(l.jsx)("span",{className:"popup__input-error",id:"userAbout-input-error"})]})]})};var f=function(e){return Object(l.jsx)("div",{className:"popup popup_pic ".concat(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.card.name}),Object(l.jsx)("button",{className:"popup__close-button",type:"reset",onClick:e.onClose})]})})},O=n(7),v=n(8),x=(document.querySelector(".popup_profile"),document.querySelector(".profile__edit-button"),document.querySelector(".popup__input_name"),document.querySelector(".popup__input_about"),document.querySelector(".popup_place"),document.querySelector(".profile__add-button"),document.querySelector(".popup_avatar"),document.querySelector(".profile__edit-avatar"),new(function(){function e(t){var n=t.baseUrl,a=t.token,c=t.groupId;Object(O.a)(this,e),this._url=n,this._token=a,this._groupId=c}return Object(v.a)(e,[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkRes)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then(this._checkRes)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkRes)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkRes)}},{key:"toogleLike",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkRes)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkRes)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",token:"b8b224d2-63d9-411f-917f-a9b5efe62b74",groupId:"cohort-22"}));var k=function(e){var t=c.a.useRef();return Object(l.jsx)(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,button:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(l.jsxs)("section",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_avatar",type:"url",name:"avatar",id:"userAvatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(l.jsx)("span",{className:"popup__input-error",id:"userAvatar-input-error"})]})})};var g=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(r.a)(i,2),u=s[0],p=s[1];return c.a.useEffect((function(){o(""),p("")}),[e.isOpen]),Object(l.jsxs)(h,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:[Object(l.jsxs)("section",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_title",type:"text",name:"name",id:"cardName-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",onChange:function(e){o(e.target.value)},value:a}),Object(l.jsx)("span",{className:"popup__input-error",id:"cardName-input-error"})]}),Object(l.jsxs)("section",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_link",type:"url",name:"link",id:"cardLink-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){p(e.target.value)},value:u}),Object(l.jsx)("span",{className:"popup__input-error",id:"cardLink-input-error"})]})]})};var C=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),i=Object(r.a)(o,2),u=i[0],_=i[1],O=c.a.useState(!1),v=Object(r.a)(O,2),C=v[0],N=v[1],y=c.a.useState(!1),S=Object(r.a)(y,2),I=S[0],L=S[1],A=c.a.useState({}),P=Object(r.a)(A,2),E=P[0],q=P[1],U=c.a.useState({}),T=Object(r.a)(U,2),D=T[0],R=T[1],z=c.a.useState([]),J=Object(r.a)(z,2),w=J[0],F=J[1];function B(){N(!1),a(!1),_(!1),L(!1),q({})}return c.a.useEffect((function(){Promise.all([x.getUserInfo(),x.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];R(n),F(a)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)(d.Provider,{value:D,children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)(p,{}),Object(l.jsx)(j,{onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){q(e),L(!0)},cards:w,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));x.toogleLike(e._id,t).then((function(t){F((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(e){x.deleteCard(e._id).then((function(){F((function(t){return t.filter((function(t){return t._id!==e._id}))}))}))}}),Object(l.jsx)(m,{}),Object(l.jsx)(b,{isOpen:n,onClose:B,onUpdateUser:function(e){x.setUserInfo(e).then((function(e){R(e),B()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(g,{isOpen:u,onClose:B,onAddPlace:function(e){x.addCard(e).then((function(e){F([e].concat(Object(s.a)(w))),B()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(k,{isOpen:C,onClose:B,onUpdateAvatar:function(e){x.updateAvatar(e).then((function(e){R(e),B()})).catch((function(e){console.log(e)}))}}),Object(l.jsx)(h,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:"\u0414\u0430"}),Object(l.jsx)(f,{isOpen:I,onClose:B,card:E})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.7e61ac59.chunk.js.map