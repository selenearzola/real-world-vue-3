(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],b=0,v=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&v.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"44ac":function(e,t,n){"use strict";n("82aa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["h"])("Events"),a=Object(r["h"])(" | "),u=Object(r["h"])("About");function i(e,t){var n=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["i"])(n,{to:{name:"EventList"}},{default:Object(r["D"])((function(){return[o]})),_:1}),a,Object(r["i"])(n,{to:{name:"About"}},{default:Object(r["D"])((function(){return[u]})),_:1})]),Object(r["i"])(i)],64)}n("44ac");var s=n("6b0d"),l=n.n(s);const b={},v=l()(b,[["render",i]]);var f=v,d=n("6c02"),p=function(e){return Object(r["u"])("data-v-6e22f28e"),e=e(),Object(r["s"])(),e},j={class:"events"},O=p((function(){return Object(r["g"])("h1",null,"Events for Good",-1)}));function h(e,t,n,c,o,a){var u=Object(r["y"])("EventCard");return Object(r["r"])(),Object(r["f"])("div",j,[O,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.events,(function(e){return Object(r["r"])(),Object(r["d"])(u,{key:e.id,event:e},null,8,["event"])})),128))])}var g={class:"event-card"};function m(e,t,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:Object(r["D"])((function(){return[Object(r["g"])("div",g,[Object(r["g"])("span",null,"@"+Object(r["A"])(n.event.time)+" on "+Object(r["A"])(n.event.date),1),Object(r["g"])("h4",null,Object(r["A"])(n.event.title),1)])]})),_:1},8,["to"])}var y={name:"EventCard",props:{event:Object}};n("b16a");const E=l()(y,[["render",m],["__scopeId","data-v-6f883ad8"]]);var w=E,A=n("bc3a"),_=n.n(A),k=_.a.create({baseURL:"https://my-json-server.typicode.com/selenearzola/json-samples",withCredentials:!1,timeout:1e3,headers:{Accept:"application/json","Content-Type":"application/json"}}),x={getEvents:function(){return k.get("/events")},getEvent:function(e){return k.get("/events/".concat(e))}},P={name:"EventList",components:{EventCard:w},data:function(){return{events:null}},created:function(){var e=this;x.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("904b");const C=l()(P,[["render",h],["__scopeId","data-v-6e22f28e"]]);var D=C,S=(n("a4d3"),n("e01a"),{key:0});function L(e,t,n,c,o,a){return o.event?(Object(r["r"])(),Object(r["f"])("div",S,[Object(r["g"])("h1",null,Object(r["A"])(o.event.title),1),Object(r["g"])("p",null,Object(r["A"])(o.event.time)+" on "+Object(r["A"])(o.event.date)+" @ "+Object(r["A"])(o.event.location),1),Object(r["g"])("p",null,Object(r["A"])(o.event.description),1)])):Object(r["e"])("",!0)}var M={props:["id"],data:function(){return{event:null}},created:function(){var e=this;x.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};const T=l()(M,[["render",L]]);var I=T,J={class:"about"},z=Object(r["g"])("h1",null,"A site of events to better the world",-1),G=[z];function R(e,t){return Object(r["r"])(),Object(r["f"])("div",J,G)}const U={},q=l()(U,[["render",R]]);var B=q,F=[{path:"/",name:"EventList",component:D},{path:"/events/:id",name:"EventDetails",props:!0,component:I},{path:"/about",name:"About",component:B}],H=Object(d["a"])({history:Object(d["b"])("/"),routes:F}),K=H,N=n("5502"),Q=Object(N["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(f).use(Q).use(K).mount("#app")},"82aa":function(e,t,n){},"904b":function(e,t,n){"use strict";n("e144")},b16a:function(e,t,n){"use strict";n("feb0")},e144:function(e,t,n){},feb0:function(e,t,n){}});
//# sourceMappingURL=app.fabafdb5.js.map