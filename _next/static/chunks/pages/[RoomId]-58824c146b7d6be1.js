(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{3407:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[RoomId]",function(){return n(7846)}])},7846:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893);n(7596);var i=n(24),o=n(185),a=n.n(o),s=n(1163),d=n(7294),u=n(2237),h=n(8239),w=n(1733);n(1290),n(3377);var l=n(4420),c=n.n(l),f=n(5371);function m(e,t){let n=e.x-t.x,r=e.y-t.y;return 37.5>=Math.sqrt(n*n+r*r)}var y=n(713);let p=()=>{let e=(0,s.useRouter)(),{RoomId:t}=e.query,[n]=c()(w.D.images.rensyu1_png),[o]=c()(w.D.images.rensyu2_png),[l]=c()(w.D.images.rensyu3_png),[p]=(0,i.KO)(f.L),[g,x]=(0,d.useState)([100,300]),[v,k]=(0,d.useState)([]),[M,E]=(0,d.useState)({up:!1,down:!1,left:!1,right:!1}),[_,b]=(0,d.useState)(!1),[A,L]=(0,d.useState)(0),X=(0,d.useRef)(null),[j,H]=(0,d.useState)([{x:1e3,y:300,speedX:-120,status:1}]),[S,D]=(0,d.useState)(void 0),W=async e=>{let t=M;switch(e.code){case"ArrowUp":t.up=!0,E(t);break;case"ArrowDown":t.down=!0,E(t);break;case"ArrowLeft":t.left=!0,E(t);break;case"ArrowRight":t.right=!0,E(t)}},N=e=>{"KeyZ"===e.code&&b(!0)},R=e=>{let t=M;switch(e.code){case"ArrowUp":t.up=!1,E(t);break;case"ArrowDown":t.down=!1,E(t);break;case"ArrowLeft":t.left=!1,E(t);break;case"ArrowRight":t.right=!1,E(t)}},C=e=>{"KeyZ"===e.code&&b(!1)},I=e=>{k(t=>t.filter(t=>!m(t,e)))},K=()=>{H(e=>e.filter(e=>{let t=v.some(t=>m(t,e));return!t||(I(e),!1)}))};(0,d.useEffect)(()=>{let e=setInterval(()=>{H(()=>(0,y.A)(j)),console.table(j)},2e3);return()=>{clearInterval(e)}},[]),(0,d.useEffect)(()=>{let e=new(a()).Animation(e=>{if(!e)return;let t=e.timeDiff/1e3;O(),q(t),K()});return e.start(),X.current=e,()=>{e.stop()}}),(0,d.useEffect)(()=>{});let O=()=>{x(e=>{let t=[Math.min(Math.max(e[0]+(M.left?-5:0)+(M.right?5:0),20),window.innerWidth-50),Math.min(Math.max(e[1]+(M.up?-5:0)+(M.down?5:0),0),window.innerHeight-50)];return t})},q=e=>{L(A+e),_&&A>.3&&(k(e=>[...e,{x:g[0]+54,y:g[1],speedX:2e3}]),L(0)),k(t=>t.map(t=>({...t,x:t.x+t.speedX*e})).filter(e=>e.x<window.innerWidth&&e.y<window.innerHeight))};return((0,d.useEffect)(()=>(document.addEventListener("keydown",W),document.addEventListener("keyup",R),document.addEventListener("keydown",N),document.addEventListener("keyup",C),()=>{document.removeEventListener("keydown",W),document.removeEventListener("keyup",R),document.removeEventListener("keydown",N),document.removeEventListener("keyup",C)})),p)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.Hf,{width:window.innerWidth,height:window.innerHeight,children:(0,r.jsxs)(u.mh,{children:[(0,r.jsx)(u.Cd,{fill:"black",x:g[0],y:g[1],radius:50}),j.map((e,t)=>{let i=[n,o,l][e.status];return(0,r.jsx)(u.Ee,{image:i,x:e.x,y:e.y,width:100,height:100},t)}),v.map((e,t)=>(0,r.jsx)(u.Cd,{x:e.x,y:e.y,radius:5,fill:"yellow"},t))]})})}):(0,r.jsx)(h.g,{visible:!0})};var g=p},713:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});let r=()=>{let e=Math.floor(Math.random()*window.innerHeight),t=Math.floor(Math.random()*window.innerWidth);return{x:t,y:e,speedX:-120,status:0}},i=()=>{let e=Math.floor(Math.random()*window.innerHeight),t=Math.floor(Math.random()*window.innerWidth);return{x:t,y:e,speedX:-110,status:1}},o=()=>{let e=Math.floor(Math.random()*window.innerHeight),t=Math.floor(Math.random()*window.innerWidth);return{x:t,y:e,speedX:-150,status:2}},a=e=>{let t=[r,i,o],n=t[Math.floor(Math.random()*t.length)],a=n();return[...e,a]}}},function(e){e.O(0,[289,596,774,888,179],function(){return e(e.s=3407)}),_N_E=e.O()}]);