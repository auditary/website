(this.webpackJsonpauditsite=this.webpackJsonpauditsite||[]).push([[0],{11:function(e,t,n){e.exports={title:"App_title__3K_Sf",logo:"App_logo__3M9MT",maincontainer:"App_maincontainer__33oBD",subtitle:"App_subtitle__3NWOc",auditcardcontainer:"App_auditcardcontainer__3Z6AP",ellipse1:"App_ellipse1__1VPym",topauditcard:"App_topauditcard__18fpq",toplinebreak:"App_toplinebreak__3ld21",sectiontwo:"App_sectiontwo__Pfz-z",sectionparagraph:"App_sectionparagraph__2qjin",inputcontainer:"App_inputcontainer__2QWnS",verifyinput:"App_verifyinput__1Kjoq",searchicon:"App_searchicon__H0vK5",ellipse2:"App_ellipse2__6eQ09",noauditmessage:"App_noauditmessage__10gQi",openauditbutton:"App_openauditbutton__3IHiu",verifyauditcard:"App_verifyauditcard__LRJ3y",sectionthree:"App_sectionthree__2vCDk",contactsection:"App_contactsection__1x1qD",contactrow:"App_contactrow__25cRU",contacticon:"App_contacticon__tB5Jg",telegramicon:"App_telegramicon__2KbEk",emailicon:"App_emailicon__tlMDt",signalicon:"App_signalicon__fi43o",footer:"App_footer__3tW-8",telegramverification:"App_telegramverification__1__oT"}},19:function(e,t,n){e.exports={body:"AuditCard_body__M4Kr_",title:"AuditCard_title__1gL9N",subtitle:"AuditCard_subtitle__1ohqp",extramargin:"AuditCard_extramargin__2AzgU",bottomtext:"AuditCard_bottomtext__3kARj",lock:"AuditCard_lock__16NsA",chainlogo:"AuditCard_chainlogo__3tuxk",bsclogo:"AuditCard_bsclogo__gc-te",polygonlogo:"AuditCard_polygonlogo__3kRcW"}},212:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"forceTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAuditedContractByToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChainByToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHighRiskVulnerabilities","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenid","type":"uint256"}],"name":"getNameAndSymbol","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"auditedContract","type":"address"}],"name":"getTokenByAuditedContract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"blockchain","type":"uint256"},{"internalType":"uint256","name":"highRiskVulnerabilities","type":"uint256"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"},{"internalType":"string","name":"newSuffix","type":"string"}],"name":"updateBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},213:function(e){e.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},220:function(e,t,n){},236:function(e,t){},238:function(e,t){},242:function(e,t){},243:function(e,t){},270:function(e,t){},272:function(e,t){},282:function(e,t){},284:function(e,t){},294:function(e,t){},296:function(e,t){},312:function(e,t){},346:function(e,t){},347:function(e,t){},417:function(e,t){},419:function(e,t){},424:function(e,t){},426:function(e,t){},433:function(e,t){},445:function(e,t){},448:function(e,t){},453:function(e,t){},527:function(e,t,n){"use strict";n.r(t);var a=n(17),i=n.n(a),s=n(207),r=n.n(s),p=(n(220),n(30)),o=n.n(p),u=n(208),l=n(42),c=n(11),y=n.n(c),d=n(19),m=n.n(d),b=n(2),f=function(e){var t=e.extrastyles,n=e.info;return Object(b.jsxs)("div",{class:"".concat(m.a.body," ").concat(t),children:[Object(b.jsx)("div",{class:m.a.lock}),Object(b.jsx)("div",{class:"".concat(m.a.chainlogo," ").concat(1==n.chain?m.a.bsclogo:0," ").concat(2==n.chain?m.a.polygonlogo:0)}),Object(b.jsx)("a",{class:m.a.title,children:"AUDITARY"}),Object(b.jsx)("a",{class:m.a.subtitle,children:"SMART CONTRACT AUDIT"}),Object(b.jsxs)("a",{class:"".concat(m.a.subtitle," ").concat(m.a.extramargin),children:["NAME: ",n.name]}),Object(b.jsxs)("a",{class:m.a.subtitle,children:["SYMBOL: ",n.symbol]}),Object(b.jsxs)("a",{class:m.a.subtitle,children:[n.address.slice(0,22),"..."]}),Object(b.jsxs)("a",{class:m.a.bottomtext,children:[n.highrisks," HIGH RISK VULNERABILITIES"]})]})},T=n(209),j=n.n(T),_=n(212),h=n(213);var g=function(){var e,t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)(!1),p=Object(l.a)(r,2),c=p[0],d=p[1],m=new j.a("https://polygon-rpc.com/");Object(a.useEffect)((function(){var t=new m.eth.Contract(_,"0x9224EB0e64e2364F8A82CfEe858393dC6C9cebbc");e=t}));var T=Object(a.useState)(""),g=Object(l.a)(T,2),x=g[0],v=g[1],O=Object(a.useState)({}),w=Object(l.a)(O,2),A=w[0],M=w[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),I=C[0],S=C[1],R=Object(a.useState)(!1),F=Object(l.a)(R,2),B=F[0],E=F[1];function N(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function t(){var n,a,i,r,p,u,l,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("telegram"!=x.toLowerCase()){t.next=5;break}return d(!0),t.abrupt("return");case 5:d(!1);case 6:return t.prev=6,t.next=9,e.methods.getTokenByAuditedContract(x).call();case 9:if(!((n=t.sent)>0)){t.next=33;break}return E(!1),new m.eth.Contract(h,x),t.next=15,e.methods.getNameAndSymbol(n).call();case 15:return a=t.sent,i=a[0],r=a[1],t.next=20,e.methods.getHighRiskVulnerabilities(n).call();case 20:return p=t.sent,t.next=23,e.methods.getChainByToken(n).call();case 23:return u=t.sent,l={name:i,symbol:r,highrisks:p,address:x.toLowerCase(),chain:u},M(l),s(!0),t.next=29,e.methods.tokenURI(n).call();case 29:c=t.sent,S(c),t.next=35;break;case 33:s(!1),E(!0);case 35:t.next=42;break;case 37:t.prev=37,t.t0=t.catch(6),s(!1),E(!0),console.log(t.t0);case 42:case"end":return t.stop()}}),t,null,[[6,37]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{class:y.a.maincontainer,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{class:y.a.logo}),Object(b.jsxs)("a",{class:y.a.title,children:["Auditary",Object(b.jsx)("br",{}),"Revolutionizing security",Object(b.jsx)("br",{}),"in the DeFi space"]}),Object(b.jsxs)("a",{class:y.a.subtitle,children:["Issuing security audits in the form of an NFT",Object(b.jsx)("br",{}),"Creating a new form of verifing trust"]})]}),Object(b.jsx)("div",{class:y.a.toplinebreak}),Object(b.jsxs)("div",{class:y.a.auditcardcontainer,children:[Object(b.jsx)(f,{info:{name:"Example",symbol:"EX",address:"0x0000000000000000000000000000000000000000",highrisks:"0"},extrastyles:y.a.topauditcard}),Object(b.jsx)("div",{class:y.a.ellipse1})]})]}),Object(b.jsxs)("div",{class:y.a.sectiontwo,children:[Object(b.jsx)("p",{class:y.a.sectionparagraph,children:"Verify the validity of a Smart Contract Audit"}),Object(b.jsxs)("div",{class:y.a.inputcontainer,children:[Object(b.jsx)("input",{value:x,onChange:function(e){v(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&N()},placeholder:"Contract Address",class:y.a.verifyinput}),Object(b.jsx)("div",{onClick:function(){N()},class:y.a.searchicon}),i&&Object(b.jsx)("div",{class:y.a.ellipse2})]}),i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{info:A,chainid:1,extrastyles:y.a.verifyauditcard}),Object(b.jsx)("a",{href:I,class:y.a.openauditbutton,children:"View full Audit"})]}),B&&Object(b.jsxs)("p",{class:y.a.noauditmessage,children:["There is no Audit from us to this contract address",Object(b.jsx)("br",{}),"Please report counterfeit audits"]}),c&&Object(b.jsxs)("div",{class:y.a.telegramverification,children:[Object(b.jsx)("p",{children:"Our active telegram accounts are:"}),Object(b.jsx)("p",{children:"@auditary_net"}),Object(b.jsx)("p",{children:"@auditary_net0"}),Object(b.jsx)("p",{children:"Any other telegram accounts claiming to be us are not from us"})]})]}),Object(b.jsxs)("div",{class:y.a.sectionthree,children:[Object(b.jsx)("p",{class:y.a.sectionparagraph,children:"Request a Smart Contract Audit"}),Object(b.jsxs)("p",{class:y.a.sectionparagraph,children:["Contact us and learn about the benefits of an Audit.",Object(b.jsx)("br",{}),"Doesn\u2019t matter whether you a project owner, or a potential investor"]}),Object(b.jsxs)("div",{class:y.a.contactsection,children:[Object(b.jsxs)("a",{href:"https://t.me/Auditary_net",target:"_blank",class:y.a.contactrow,children:[Object(b.jsx)("div",{class:"".concat(y.a.contacticon," ").concat(y.a.telegramicon)}),Object(b.jsx)("p",{children:"Telegram"})]}),Object(b.jsxs)("a",{href:"mailto:auditary@protonmail.com",class:y.a.contactrow,children:[Object(b.jsx)("div",{class:"".concat(y.a.contacticon," ").concat(y.a.emailicon)}),Object(b.jsx)("p",{children:"Email"})]})]})]}),Object(b.jsx)("div",{class:y.a.footer,children:"contact@auditary.net \u2022 \xa9 2021 auditary.net"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,531)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[527,1,2]]]);
//# sourceMappingURL=main.d4a5cd6b.chunk.js.map