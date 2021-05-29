(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(119)),s=n(124),i=n(125),c={title:"RPC endpoint"},l={unversionedId:"flashbots-core/searchers/advanced/rpc-endpoint",id:"flashbots-core/searchers/advanced/rpc-endpoint",isDocsHomePage:!1,title:"RPC endpoint",description:"How to interact directly with the Flashbots RPC endpoint",source:"@site/docs/flashbots-core/searchers/advanced/rpc-endpoint.md",slug:"/flashbots-core/searchers/advanced/rpc-endpoint",permalink:"/flashbots-core/searchers/advanced/rpc-endpoint",version:"current",sidebar:"docs",previous:{title:"bundle pricing",permalink:"/flashbots-core/searchers/advanced/bundle-pricing"},next:{title:"goerli testnet",permalink:"/flashbots-core/searchers/advanced/goerli-testnet"}},u=[{value:"How to interact directly with the Flashbots RPC endpoint",id:"how-to-interact-directly-with-the-flashbots-rpc-endpoint",children:[]}],d={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-interact-directly-with-the-flashbots-rpc-endpoint"},"How to interact directly with the Flashbots RPC endpoint"),Object(o.b)("p",null,"For advanced users you can send bundles to the ",Object(o.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," RPC endpoint at ",Object(o.b)("inlineCode",{parentName:"p"},"relay.flashbots.net"),". "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," RPC has the following payload format:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "eth_sendBundle",\n  "params": [\n    {\n      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle\n      blockNumber,       // String, a hex encoded block number for which this bundle is valid on\n      minTimestamp,      // (Optional) Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch\n      maxTimestamp,      // (Optional) Number, the maximum timestamp for which this bundle is valid, in seconds since the unix epoch\n      revertingTxHashes, // (Optional) Array[String], A list of tx hashes that are allowed to revert \n    }\n  ]\n}\n')),Object(o.b)("p",null,"To authenticate your request, the relay requires you sign the payload and include the signed payload in the ",Object(o.b)("inlineCode",{parentName:"p"},"X-Flashbots-Signature")," header of your request."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-curl"},'curl -X POST -H "Content-Type: application/json" -H "X-Flashbots-Signature: 0x1234:0xabcd" --data \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\' https://relay.flashbots.net\n')),Object(o.b)("p",null,"Any valid Ethereum key can be used to sign the payload. The Ethereum address associated with this key will be used by the relay to keep track of your requests over time and provide user statistics. You can change the key you use at any time."),Object(o.b)("p",null,"The signature is calculated by taking the ",Object(o.b)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-191"},"EIP-191")," hash of the json body encoded as UTF-8 bytes. Here's an example using ethers.js:"),Object(o.b)(s.a,{defaultValue:"ethers.js",values:[{label:"ethers.js",value:"ethers.js"},{label:"web3.py",value:"web3.py"},{label:"go",value:"go"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"ethers.js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import { Wallet, utils } from \'ethers\'\n\nconst privateKey = \'0x1234\'\nconst wallet = new Wallet(privateKey)\nconst body = \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\'\nconst signature = wallet.address + \':\' + wallet.signMessage(utils.id(body))\n'))),Object(o.b)(i.a,{value:"web3.py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},'from web3 import Web3\nfrom eth_account import Account, messages\n\nbody = \'{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}\'\nmessage = messages.encode_defunct(text=Web3.keccak(text=body).hex())\nsignature = Account.from_key(private_key).address + \':\' + Account.sign_message(message, private_key)\n'))),Object(o.b)(i.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'body := `{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}`\nhashedBody := crypto.Keccak256Hash([]byte(body)).Hex()\nsig, err := crypto.Sign(crypto.Keccak256([]byte("\\x19Ethereum Signed Message:\\n"+strconv.Itoa(len(hashedBody))+hashedBody)), pk)\nsignature := addr.Hex() + ":" + hexutil.Encode(sig)\n')))))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},122:function(e,t,n){"use strict";var a=n(0),r=n(123);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(122),s=n(120),i=n(56),c=n.n(i);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,p=e.groupId,b=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,y=Object(a.useState)(i),v=y[0],g=y[1],O=a.Children.toArray(e.children),j=[];if(null!=p){var w=m[p];null!=w&&w!==v&&d.some((function(e){return e.value===w}))&&g(w)}var x=function(e){var t=e.target,n=j.indexOf(t),a=O[n].props.value;g(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,o,s,i,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,i=s.innerHeight,l=s.innerWidth,n>=0&&o<=l&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case l:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:k,onFocus:x,onClick:x},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},125:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);