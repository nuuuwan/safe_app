(this.webpackJsonptemplate_react=this.webpackJsonptemplate_react||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(4),o=n.n(c),r=(n(14),n(15),n(3)),a=n.n(r),u=n(5),h=n(6),l=n(7),v=n(9),d=n(8),j=n(0),f=function(t){Object(v.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).state={latLng:void 0,acceleration:void 0,statusList:[]},i}return Object(l.a)(n,[{key:"setStatus",value:function(t){var e=this.state.statusList;e.push(t),this.setState({newStatusList:e})}},{key:"onGetCurrentPosition",value:function(t){var e=[t.coords.latitude,t.coords.longitude];this.setState({latLng:e})}},{key:"onDeviceMotionEvent",value:function(t){var e=t.acceleration;this.setState({acceleration:e})}},{key:"componentDidMount",value:function(){var t=Object(u.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setStatus("Checking for DeviceMotionEvent.requestPermission"),!DeviceMotionEvent||"function"!==typeof DeviceMotionEvent.requestPermission){t.next=10;break}return this.setStatus("Requesting Permission"),t.next=5,DeviceMotionEvent.requestPermission();case 5:e=t.sent,this.setStatus("permissionState = ".concat(e)),"granted"===e&&window.addEventListener("devicemotion",this.onDeviceMotionEvent,!1),t.next=11;break;case 10:this.setStatus("DeviceMotionEvent.requestPermission missing");case 11:navigator.geolocation.getCurrentPosition(this.onGetCurrentPosition.bind(this));case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.latLng,n=t.acceleration,i=t.statusList;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:"version: 12.17pm"})}),Object(j.jsx)("h1",{children:"Safe App"}),Object(j.jsx)("ul",{children:i.map((function(t,e){return Object(j.jsx)("li",{children:t},"li-status-".concat(e))}))}),Object(j.jsx)("h2",{children:"Location"}),Object(j.jsx)("p",{children:JSON.stringify(e)}),Object(j.jsx)("h2",{children:"Acceleration"}),Object(j.jsx)("p",{children:JSON.stringify(n)})]})}}]),n}(i.Component);var b=function(){return Object(j.jsx)(f,{})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),s(t),c(t),o(t)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.2b616c20.chunk.js.map