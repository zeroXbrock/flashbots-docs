(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(119)),a={title:"discord setup"},c={unversionedId:"flashbots-core/miners/discord-setup",id:"flashbots-core/miners/discord-setup",isDocsHomePage:!1,title:"discord setup",description:"Flashbots' main tool for communicating with participating miners is our Discord server. Please join us there with the invite you've been extended, and follow this quick guide to setting up your Discord effectively.",source:"@site/docs/flashbots-core/miners/discord-setup.md",slug:"/flashbots-core/miners/discord-setup",permalink:"/flashbots-core/miners/discord-setup",version:"current",sidebar:"docs",previous:{title:"onboarding",permalink:"/flashbots-core/miners/quick-start"},next:{title:"FAQ",permalink:"/flashbots-core/miners/faq"}},s=[{value:"Notifications",id:"notifications",children:[]},{value:"Muting Channels",id:"muting-channels",children:[]},{value:"TL;DR",id:"tldr",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flashbots' main tool for communicating with participating miners is our Discord server. Please join us there with the invite you've been extended, and follow this quick guide to setting up your Discord effectively."),Object(i.b)("h2",{id:"notifications"},"Notifications"),Object(i.b)("p",null,"There is a lot of traffic among the many channels and channel categories in the server. In order to make sure you receive all relevant notifications, go to the notifications settings menu by pressing the arrow next to the Flashbots server name:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(203).default})),Object(i.b)("p",null,'There, select "Only @mentions" for the server notifications:'),Object(i.b)("p",null,Object(i.b)("img",{src:n(204).default})),Object(i.b)("p",null,"Then, you want to enable notifications for ",Object(i.b)("em",{parentName:"p"},"all messages")," for your individual channel, as well as for the ",Object(i.b)("em",{parentName:"p"},"#releases")," channel. You can do this by scrolling down in the same menu and searching for these channels, and then selecting ALL:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(205).default})),Object(i.b)("p",null,"Then do the same for your individual channel. This will ensure you get only notifications that are relevant to you, pay attention to these! :D "),Object(i.b)("h2",{id:"muting-channels"},"Muting Channels"),Object(i.b)("p",null,"If you would like to have a less cluttered interface, you can ",Object(i.b)("em",{parentName:"p"},"mute")," channels or channel categories, which will prevent them from being highlighted whenever they have unread messages. This can be done in the same menu, by choosing the MUTE option, or by-right clicking on each channel or category that you want to mute. Do not mute ",Object(i.b)("em",{parentName:"p"},"#releases")," or your individual channels! All the rest are ok to mute. "),Object(i.b)("h2",{id:"tldr"},"TL;DR"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set server notifications to only @mentions."),Object(i.b)("li",{parentName:"ul"},"Choose ALL for notifications in ",Object(i.b)("em",{parentName:"li"},"#releases")," and your individual channel."),Object(i.b)("li",{parentName:"ul"},"Mute channels and categories that you don't want to follow.")))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,p=d["".concat(a,".").concat(f)]||d[f]||b[f]||i;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Discord_menu_location-1acd12b7c7da68cfb5390990c6391612.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Discord_notifications_mentions-22a84c95e5e2545b73e09615636b39e0.png"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Discord_notifications_ALL-bb95facdf0673446c4b638f05d4139dd.png"}}]);