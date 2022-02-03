(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(34),i=r.n(c),s=r(41),o=r(13),b=r(1);function j(){return Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"Final Project in 2021 React Course"})})}function l(){return Object(b.jsx)("header",{children:Object(b.jsx)(s.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(b.jsx)("h1",{children:"mein bier"})})})}var h=function(e){var t=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(l,{}),Object(b.jsx)("main",{children:t}),Object(b.jsx)(j,{})]})})},d=r(154),u=r(156),x=r(157),m=r(159),p=r(158),O=r(160),f=r(79),g=r(19),v=function(e){var t=e.bier,r=e.herkunft,a=e.bewert,n=e.votes,c=e.imgUrl;return Object(b.jsxs)(x.a,{sx:{width:250,height:300},children:[Object(b.jsx)(p.a,{component:"img",style:{width:"auto",maxHeight:"170px",display:"block",margin:"0 auto"},image:c,alt:t}),Object(b.jsx)(g.c,{theme:w,children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(O.a,{gutterBottom:!0,variant:"h6",component:"div",children:t}),Object(b.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["\ud83d\udd25 ",Object(b.jsx)("b",{children:"Origin:"})," ",r]}),Object(b.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["\ud83c\udf1f ",Object(b.jsx)("b",{children:"Evaluation:"})," ",a]}),Object(b.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["\u2705 ",Object(b.jsx)("b",{children:"Vote:"})," ",n]})]})})]})},w=Object(f.a)({typography:{fontFamily:['"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),h6:{fontSize:21}}}),y=r(76),k=function(e){e.items,e.top,e.max;var t=y;return Object(b.jsx)(u.a,{sx:{flexGrow:1},children:Object(b.jsx)(d.a,{container:!0,spacing:3,direction:"row",justifyContent:"center",alignItems:"center",children:t&&t.map((function(e,t){var r=e.bier,a=e.herkunft,n=e.bewertungInt,c=e.votes,i=e.imgUrl;return Object(b.jsx)(d.a,{item:!0,xs:"auto",children:Object(b.jsx)(v,{imgUrl:i,bier:r,herkunft:a,bewert:n,votes:c})},t)}))})})},S=function(){return Object(b.jsxs)("div",{className:"top5",children:[Object(b.jsx)("h2",{children:"Top 5 German Beer"}),Object(b.jsx)(k,{top:5})]})},I=r(155),N=Object(f.a)({palette:{search:{main:"#f5ba13",darker:"#053e85"}}}),B=function(){return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("h3",{children:"Are you curious about the breweries in your area?"}),Object(b.jsx)(g.c,{theme:N,children:Object(b.jsx)(I.a,{component:s.b,to:"/search",color:"search",variant:"contained",size:"large",style:{fontFamily:"Rubik"},children:"Search the breweries"})})]})};var C=function(){return Object(b.jsxs)(h,{children:[Object(b.jsx)(S,{max:5}),Object(b.jsx)(B,{})]})},U=r(152),E=r(150),A=r(151),V=r(148),F=r(20),H=r(4),W=function(e){var t=e.brewName,r=e.setBrewName,a=e.location,n=e.setLocation;return Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(A.a,{sx:{m:1,minWidth:200},variant:"standard",children:[Object(b.jsx)(U.a,{id:"state-select-label",children:"State"}),Object(b.jsxs)(V.a,{labelId:"state-select-label",id:"state-select",value:a,label:"State",onChange:function(e){n(e.target.value)},children:[Object(b.jsx)(E.a,{value:"berlin",children:"Berlin"}),Object(b.jsx)(E.a,{value:"hessen",children:"Hessen"}),Object(b.jsx)(E.a,{value:"saarland",children:"Saarland"}),Object(b.jsx)(E.a,{value:"hamburg",children:"Hamburg"}),Object(b.jsx)(E.a,{value:"brandenburg",children:"Bradenburg"}),Object(b.jsx)(E.a,{value:"bremen",children:"Bremen"})]})]}),Object(b.jsxs)(A.a,{sx:{m:1},variant:"standard",children:[Object(b.jsx)(U.a,{htmlFor:"state-customized-textbox",children:"Brewery Name"}),Object(b.jsx)(L,{id:"state-customized-textbox",value:t,onChange:function(e){return function(e){r(e.target.value)}(e)}})]})]})},L=Object(H.a)(F.c)((function(e){var t=e.theme;return{"label + &":{marginTop:t.spacing(2)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:t.palette.background.paper,border:"2px solid #ced4da",fontSize:16,padding:"10px 60px 10px 10px",transition:t.transitions.create(["border-color","box-shadow"]),fontFamily:['"Helvetica Neue"',"Arial","sans-serif"].join(","),"&:focus":{borderRadius:7,borderColor:"#f5ba13",boxShadow:"0 0 0 0.1rem #f5ba13"}}}})),R=r(64),q=r.n(R),z=r(78),G=r(12),P=function(e){var t=e.title,r=e.ort,a=e.id;return Object(b.jsx)(x.a,{sx:{width:400,minWidth:250,padding:"auto",margin:"30px 20px"},variant:"outlined",children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(g.c,{theme:J,children:[Object(b.jsxs)(O.a,{variant:"h5",gutterBottom:!0,children:[a,". ",t]}),Object(b.jsxs)(O.a,{svariant:"h6",color:"text.secondary",children:["Location: ",r]})]})})})},J=Object(f.a)({typography:{fontFamily:['"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),h5:{fontWeight:450}}}),M=function(e){var t=e.list;return Object(b.jsx)(d.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"flex-start",rowSpacing:1,children:t&&t.map((function(e,t){var r=e.title,a=e.ort;return Object(b.jsx)(d.a,{item:!0,children:Object(b.jsx)(P,{id:t+1,title:r,ort:a})},r)}))})},T=function(){var e=Object(a.useState)(""),t=Object(G.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)([]),i=Object(G.a)(c,2),s=i[0],o=i[1],j=Object(a.useState)(s),l=Object(G.a)(j,2),d=l[0],u=l[1],x=Object(a.useState)(""),m=Object(G.a)(x,2),p=m[0],O=m[1];return Object(a.useEffect)((function(){function e(){return e=Object(z.a)(q.a.mark((function e(t){var r,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://beer-live.p.rapidapi.com/brews/".concat(t),{method:"GET",headers:{"x-rapidapi-host":"beer-live.p.rapidapi.com","x-rapidapi-key":"54a0cff047mshbb7b0dfad04b861p1c27b6jsnfc489d3f9614"}});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}""!==r&&function(t){e.apply(this,arguments)}(r)}),[r]),Object(a.useEffect)((function(){var e=s.filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())}));u(e)}),[p,s]),Object(b.jsx)(h,{children:Object(b.jsxs)("div",{className:"select",children:[Object(b.jsx)("h2",{children:"Choose your State"}),Object(b.jsx)(W,{brewName:p,setBrewName:O,location:r,setLocation:n}),Object(b.jsx)(M,{list:d})]})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{path:"search",element:Object(b.jsx)(T,{})})]})})}),document.getElementById("root"))},76:function(e){e.exports=JSON.parse('[{"bier":"Viechtacher Zwickl","herkunft":"Viechtach","bewertungInt":98,"votes":61,"imgUrl":"https://www.viechtacher-brauerei.de/media/image/4e/54/95/Viechtacher-Zwickl.jpg"},{"bier":"Polsterbr\xe4u Weissbier","herkunft":"Herrenberg","bewertungInt":98,"votes":135,"imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-28RFauyxq0iymPL2V01Ngq5xEYodqwKYA&usqp=CAU"},{"bier":"Gloaner Pfahlbock","herkunft":"Viechtach","bewertungInt":98,"votes":54,"imgUrl":"https://www.biermap24.de/images/bierlogos-140px-breit/gloaner-pfahlbock-min.jpg"},{"bier":"Viechtacher Weissbier","herkunft":"Viechtach","bewertungInt":98,"votes":95,"imgUrl":"https://www.viechtacher-brauerei.de/media/image/19/05/43/Viechtacher-Weissbier.jpg"},{"bier":"Wolters Mai-Bock","herkunft":"Braunschweig","bewertungInt":97,"votes":57,"imgUrl":"https://www.biermap24.de/images/bierlogos-140px-breit/wolters-maibock-min.jpg"}]')}},[[104,1,2]]]);
//# sourceMappingURL=main.1e0b1f46.chunk.js.map