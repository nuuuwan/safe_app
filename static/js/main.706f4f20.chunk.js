(this.webpackJsonptemplate_react=this.webpackJsonptemplate_react||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(4),o=n.n(r),a=(n(14),n(15),n(3)),s=n.n(a),u=n(5),d=n(6),l=n(7),h=n(9),v=n(8),j=n(0),b=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={latLng:void 0,acceleration:void 0},i}return Object(l.a)(n,[{key:"onGetCurrentPosition",value:function(e){var t=[e.coords.latitude,e.coords.longitude];this.setState({latLng:t})}},{key:"onDeviceMotionEvent",value:function(e){var t=e.acceleration;this.setState({acceleration:t})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!DeviceMotionEvent.requestPermission){e.next=5;break}return e.next=3,DeviceMotionEvent.requestPermission();case 3:"granted"===e.sent&&window.addEventListener("devicemotion",this.onDeviceMotionEvent,!1);case 5:navigator.geolocation.getCurrentPosition(this.onGetCurrentPosition.bind(this));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.latLng,n=e.acceleration;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Safe App"}),Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:"Added persmission state check"})}),Object(j.jsx)("h2",{children:"Location"}),Object(j.jsx)("p",{children:JSON.stringify(t)}),Object(j.jsx)("h2",{children:"Acceleration"}),Object(j.jsx)("p",{children:JSON.stringify(n)})]})}}]),n}(i.Component);var f=function(){return Object(j.jsx)(b,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.706f4f20.chunk.js.map