(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7615:function(t,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gradius_controller",function(){return e(4132)}])},4132:function(t,s,e){"use strict";e.r(s);var n=e(5893),o=e(7294),c=e(7317),a=e.n(c);let i=()=>{let[t,s]=(0,o.useState)({x:0,y:0}),[e,c]=(0,o.useState)({x:0,y:0}),i=t=>{let{clientX:e,clientY:n}=t.touches[0];s({x:e,y:n})},r=s=>{let{clientX:e,clientY:n}=s.touches[0],o=e-t.x,a=n-t.y;if(35>=Math.sqrt(o**2+a**2))c({x:o,y:a});else{let t=Math.atan2(a,o);c({x:35*Math.cos(t),y:35*Math.sin(t)})}},l=()=>{c({x:0,y:0})};return(0,n.jsxs)("div",{className:a().base,children:[(0,n.jsx)("div",{className:a().joystick,id:"joystick",onTouchStart:i,onTouchMove:r,onTouchEnd:l,children:(0,n.jsx)("div",{className:a().stick,id:"joystick-ball",style:{transform:"translate(".concat(e.x,"px, ").concat(e.y,"px)")}})}),(0,n.jsx)("div",{className:a().buttonA,children:"A"})]})};s.default=i},7317:function(t){t.exports={base:"gradius_controller_base__m3386",joystick:"gradius_controller_joystick__GGIJD",stick:"gradius_controller_stick__yEtG8",buttonA:"gradius_controller_buttonA__3_tpt"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=7615)}),_N_E=t.O()}]);