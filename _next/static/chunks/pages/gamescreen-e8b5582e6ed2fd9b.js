(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{2341:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamescreen",function(){return n(1877)}])},713:function(e,t,n){"use strict";n.d(t,{A4:function(){return o}});let r=()=>({x:640,y:Math.floor(241*Math.random())+120,speedX:-120,status:0}),i=()=>({x:640,y:Math.floor(241*Math.random()),speedX:-110,status:0}),s=()=>({x:640,y:Math.floor(241*Math.random()),speedX:-150,status:0}),o=e=>{let t=[r,i,s],n=t[Math.floor(Math.random()*t.length)],o=n();return[...e,o]}},3994:function(e,t,n){"use strict";function r(e,t){let n=e.x-t.x,r=e.y-t.y;return 37.5>=Math.sqrt(n*n+r*r)}n.d(t,{a:function(){return r}})},1877:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(24),s=n(185),o=n.n(s),a=n(7294),d=n(2237),u=n(8239),c=n(5371),l=n(713),w=n(3994);let f=()=>{let[e]=(0,i.KO)(c.L),[t,n]=(0,a.useState)([100,300]),[s,f]=(0,a.useState)([]),[h,m]=(0,a.useState)({up:!1,down:!1,left:!1,right:!1}),[y,p]=(0,a.useState)(!1),[x,k]=(0,a.useState)(0),E=(0,a.useRef)(null),[g,v]=(0,a.useState)([{x:1e3,y:300,speedX:-120}]),M=async e=>{let t=h;switch(e.code){case"ArrowUp":t.up=!0,m(t);break;case"ArrowDown":t.down=!0,m(t);break;case"ArrowLeft":t.left=!0,m(t);break;case"ArrowRight":t.right=!0,m(t)}},_=e=>{"KeyZ"===e.code&&p(!0)},A=e=>{let t=h;switch(e.code){case"ArrowUp":t.up=!1,m(t);break;case"ArrowDown":t.down=!1,m(t);break;case"ArrowLeft":t.left=!1,m(t);break;case"ArrowRight":t.right=!1,m(t)}},L=e=>{"KeyZ"===e.code&&p(!1)},b=e=>{f(t=>t.filter(t=>!(0,w.a)(t,e)))},X=()=>{v(e=>e.filter(e=>{let t=s.some(t=>(0,w.a)(t,e));return!t||(b(e),!1)}))};(0,a.useEffect)(()=>{(0,l.A4)([])}),(0,a.useEffect)(()=>{let e=new(o()).Animation(e=>{if(!e)return;let t=e.timeDiff/1e3;j(),S(t),X()});return e.start(),E.current=e,()=>{e.stop()}});let j=()=>{n(e=>{let t=[Math.min(Math.max(e[0]+(h.left?-5:0)+(h.right?5:0),20),window.innerWidth-50),Math.min(Math.max(e[1]+(h.up?-5:0)+(h.down?5:0),0),window.innerHeight-50)];return t})},S=e=>{k(x+e),y&&x>.3&&(f(e=>[...e,{x:t[0]+54,y:t[1],speedX:2e3}]),k(0)),f(t=>t.map(t=>({...t,x:t.x+t.speedX*e})).filter(e=>e.x<window.innerWidth&&e.y<window.innerHeight))};return((0,a.useEffect)(()=>(document.addEventListener("keydown",M),document.addEventListener("keyup",A),document.addEventListener("keydown",_),document.addEventListener("keyup",L),()=>{document.removeEventListener("keydown",M),document.removeEventListener("keyup",A),document.removeEventListener("keydown",_),document.removeEventListener("keyup",L)})),e)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Hf,{width:window.innerWidth,height:window.innerHeight,children:(0,r.jsxs)(d.mh,{children:[(0,r.jsx)(d.Cd,{fill:"black",x:t[0],y:t[1],radius:50}),g.map((e,t)=>(0,r.jsx)(d.Cd,{x:e.x,y:e.y,radius:30,fill:"red"},t)),s.map((e,t)=>(0,r.jsx)(d.Cd,{x:e.x,y:e.y,radius:5,fill:"yellow"},t))]})})}):(0,r.jsx)(u.g,{visible:!0})};t.default=f}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=2341)}),_N_E=e.O()}]);