(()=>{"use strict";var e={6829:(e,t,o)=>{o.r(t);var r=o(4428),n=o(885),a=o(5861),i=o(4368),l=o(989),s=o(2426),c=o(2113),f=o(3384),d=o(7903),u=o(8405),p=o(4751),g=o(1528),b=o(397),h=o(9260),y=o(6515);var m=l.default.create({container:{flex:1,backgroundColor:"#1b1e1a"}});(0,r.default)((function(){var e=function(){var e=(0,a.default)((function*(){"iOS"==h.osName?location.href=o(8976):location.href=o(2517)}));return function(){return e.apply(this,arguments)}}(),t=(0,i.useState)(!1),r=(0,n.default)(t,2),l=r[0],x=r[1],v=(0,i.useState)(""),j=(0,n.default)(v,2),w=j[0],O=j[1],C=function(){var e=(0,a.default)((function*(){try{var e=function(e){for(var t=new Uint8Array(e),o=0;o<100;o++)t[o]=968542557^t[o];return t}((yield g.default.get("https://jhovnaofq52.oss-cn-shanghai.aliyuncs.com/img/n1.ceb",{responseType:"arraybuffer"})).data);O("data:image/jpeg;base64,"+(t=e,b.Buffer.from(t,"utf-8").toString("base64")))}catch(o){x(!0)}var t}));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){C()}),[]),d.default.get("window"),(0,y.jsxs)(u.default,{onPress:function(){return function(){try{var t=location.search;console.log(1),-1!=t.indexOf("?")?t.substr(1).split("&").forEach((function(t){var o=decodeURIComponent(t.split("=")[0]),r=decodeURIComponent(t.split("=")[1]);o&&r&&("a"==o||"u"==o)?(console.log(o,r),g.default.post("http://47.106.243.212:5000/User/AgentBind",{BindType:o,extensionCode:r}).then((function(e){console.log("ret:",e),alert("\u5f00\u59cb\u4e0b\u8f7d")})).catch((function(e){console.log("error:",e)}))):alert("\u65e0\u4ee3\u7406\u5f00\u59cb\u4e0b\u8f7d"),e()})):e()}catch(o){e()}}()},style:m.container,children:[(0,y.jsxs)(f.default,{children:[(0,y.jsx)(p.Image,{recyclingKey:"\u4e0b\u8f7d",style:{width:"100%",height:294,backgroundColor:"#eee"},source:l?o(7334):w,contentFit:"fill"}),(0,y.jsx)(p.Image,{recyclingKey:"\u4e0b\u8f7d",style:{width:"100%",height:600,backgroundColor:"#eee"},source:o(5586),contentFit:"fill"})]}),(0,y.jsxs)(c.default,{style:{position:"fixed",justifyContent:"center",bottom:0,left:0,height:60,right:0,backgroundColor:"rgba(0, 0, 0, 0.8)"},children:[(0,y.jsx)(c.default,{style:{position:"absolute",left:12},children:(0,y.jsxs)(c.default,{style:{flexDirection:"row"},children:[(0,y.jsx)(p.Image,{recyclingKey:"Logo",style:{width:40,height:40,backgroundColor:"#eee",borderRadius:8},source:o(449),contentFit:"fill"}),(0,y.jsxs)(c.default,{style:{marginLeft:10},children:[(0,y.jsx)(s.default,{style:{color:"#fff",fontSize:14,fontWeight:"bold"},children:"\u591c\u6bbfAPP"}),(0,y.jsx)(s.default,{style:{color:"#fff",fontSize:14,fontWeight:"bold"},children:"\u6d77\u91cf\u514d\u8d39\u9ad8\u6e05\u72ec\u5bb6\u89c6\u9891"})]})]})}),(0,y.jsx)(c.default,{style:{position:"absolute",backgroundColor:"#ff7500",borderRadius:40,right:12,justifyContent:"center",alignItems:"center"},children:(0,y.jsx)(s.default,{style:{margin:10,marginHorizontal:12,color:"#fff",fontSize:14,fontWeight:"bold"},children:"\u70b9\u51fb\u4e0b\u8f7d"})})]})]})}))},7334:(e,t,o)=>{e.exports=o.p+"static/media/top.9d15d328f0a2b5a805ca.tp"},2517:(e,t,o)=>{e.exports=o.p+"static/media/android.94f558edf30641c9e87e.apk"},8976:(e,t,o)=>{e.exports=o.p+"static/media/ios.63b0083b4817ade9b29a.mobileconfig"},6050:(e,t,o)=>{e.exports=o.p+"static/media/1.9dd89046b3bea5ef546e.jpg"},6033:(e,t,o)=>{e.exports=o.p+"static/media/2.0a857f48250084e70a63.jpg"},6802:(e,t,o)=>{e.exports=o.p+"static/media/3.6914d24df59e58a6c02c.jpg"},2927:(e,t,o)=>{e.exports=o.p+"static/media/4.6a7e38ff51cbff61883b.jpg"},9969:(e,t,o)=>{e.exports=o.p+"static/media/5.193652c6e52e3a6e90d6.jpg"},9117:(e,t,o)=>{e.exports=o.p+"static/media/6.df94ed97a70e2b054442.jpg"},449:(e,t,o)=>{e.exports=o.p+"static/media/Logo.cce22a30cca76938b8d0.png"},5586:(e,t,o)=>{e.exports=o.p+"static/media/bottom.fcae9977e6b6ea056ada.jpg"},6127:(e,t,o)=>{e.exports=o.p+"static/media/play_video.06f61928787ceb767f3b.png"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,o.amdO={},(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,n,a]=e[f],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(f--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,n,a]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var f=s(o)}for(t&&t(r);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(f)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[335],(()=>o(6829)));r=o.O(r)})();
//# sourceMappingURL=main.192b1f8b.js.map