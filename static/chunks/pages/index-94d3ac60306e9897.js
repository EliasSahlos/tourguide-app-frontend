(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8411)}])},8411:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(5893),a=t(7294),i=t(9669),s=t.n(i),o=t(7419),c=t(7357),u=t(52),l=t(3321);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=["Paris","London","New York","Tokyo","Berlin","Buenos Aires","Cairo","Canberra","Rio de Janeiro","Dublin"],f=function(e){var n=e.searchQuery,t=e.setSearchQuery,a=e.onFormSubmit,i=e.onKeyDown;return(0,r.jsx)("form",{onSubmit:a,children:(0,r.jsx)(u.Z,{onInputChange:function(e){return t(e)},disableClearable:!0,value:n,options:h,renderInput:function(e){return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({},e,{id:"search-bar",className:"text",onInput:t,onKeyDown:i,value:n,label:"Enter A City Name",variant:"filled",placeholder:"Search...",size:"small",style:{width:600,backgroundColor:"white",borderRadius:"5px",fontFamily:"ubuntu"}}))}})})};function x(e){var n=this,t=(0,a.useState)(""),i=t[0],s=t[1],o=function(t){t.preventDefault(),e.changeWord(i),e.submitForm.call(n,i)};return(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{className:"search-container searchbar",children:(0,r.jsxs)("div",{style:{alignItems:"center",display:"flex",alignSelf:"center",justifyContent:"center",padding:"20px"},children:[(0,r.jsx)(f,{searchQuery:i,setSearchQuery:function(e){s(e.target.value)},onFormSubmit:o,onKeyDown:function(t){31===t.keyCode&&(e.changeWord(i),e.submitForm.call(n,i))}}),(0,r.jsx)(l.Z,{type:"submit",variant:"contained",onClick:o,style:{borderRadius:"8px",height:"49px",backgroundColor:"#0E1822",fontFamily:"ubuntu"},children:"Search City"})]})})})}var g=t(5152),m=t.n(g),j=t(5450),b=t(9007),p=t(9225),y=t(3946),v=t(4721),S=t(4386),w=t(2961),C=t(1754),P=t(1664),E=t.n(P);var N=function(e){var n=e.mapInfo,t=e.cityProp,i=e.maxPage,s=e.currentPage,o=e.changeCurrentPage,c=this,u=(0,a.useState)(s),l=u[0],d=u[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"city-name",children:[(0,r.jsx)("h1",{children:t.toUpperCase()}),(0,r.jsx)("hr",{})]}),(0,r.jsx)(C.Z,{count:i,onChange:function(e,n){d(n),o.call(c,n)},page:l}),(0,r.jsxs)(j.Z,{sx:{width:"100%",height:"100%"},children:[(0,r.jsx)(b.Z,{cols:4},"Subheader"),n.content.map((function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b.Z,{children:[(0,r.jsx)("img",{style:{width:"100%",height:"350px"},src:e.fileName,alt:"Image Could Not be Load",loading:"lazy"}),(0,r.jsx)(p.Z,{sx:{fontFamily:"Ubuntu"},title:e.title,subtitle:"Views : "+e.views,actionIcon:(0,r.jsxs)(y.Z,{sx:{color:"rgba(255, 255, 255, 0.6)"},"aria-label":"info about ".concat(e.title),children:[(0,r.jsx)(S.Z,{title:"Total Views: "+e.views,placement:"top",arrow:!0,children:(0,r.jsx)(w.Z,{style:{marginRight:"10px"}})}),(0,r.jsx)(E(),{href:"/image/"+e.id,children:(0,r.jsx)(v.Z,{})})]})})]},e.img)})}))]})]})},F=t(8456),O=t(1163);var Z=function(){return(0,r.jsx)("h1",{style:{textAlign:"center"},children:"NO RESULTS, SEARCH ANOTHER CITY"})};var k=function(){return(0,r.jsx)("h1",{style:{textAlign:"center"},children:"API CALLING ERROR, PLEASE RELOAD THE PAGE"})};function A(){var e=function(e,n,t){var r="http://localhost:8080/api/v1/images/getByTitle/"+e+"?page="+n+"&size="+t;s().get(r).then((function(e){var n=e.data;return 204===e.status?(b(!0),void C(!1)):0!==n.content.length?(B(n.totalPages-1),l(n.content),f(n),C(!1),A(!0),void _(!0)):void(0===n.content.length&&(b(!0),_(!1),C(!1),A(!1)))})).catch((function(e){v(!0),C(!1)}))},n=(0,a.useState)(""),i=n[0],o=n[1],c=(0,a.useState)([]),u=c[0],l=c[1],d=(0,a.useState)([]),h=d[0],f=d[1],g=(0,a.useState)(!1),j=g[0],b=g[1],p=(0,a.useState)(!1),y=p[0],v=p[1],S=(0,a.useState)(!1),w=S[0],C=S[1],P=(0,a.useState)(!1),E=P[0],A=P[1],I=(0,a.useState)(!1),R=I[0],_=I[1],T=(0,a.useState)(1),L=T[0],D=T[1],Q=(0,a.useState)(0),z=Q[0],B=Q[1],G=(0,a.useState)(!0),H=G[0],K=G[1],U=(0,O.useRouter)(),W=m()((function(){return Promise.all([t.e(269),t.e(933),t.e(590)]).then(t.bind(t,158))}),{loadableGenerated:{webpack:function(){return[158]}},ssr:!1});return(0,a.useEffect)((function(){var n=U.query.q;"undefined"!==typeof n&&H&&(o(n),C(!0),A(!1),_(!1),v(!1),b(!1),e(n),K(!1))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{changeWord:function(e){return o(e)},submitForm:function(n){C(!0),_(!1),A(!1),v(!1),b(!1),o(n),e(n,1,8)}}),j&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Z,{})}),y&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(k,{})}),R&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"map-container",children:(0,r.jsx)(W,{mapInfo:u})})}),E&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"city-container",children:(0,r.jsx)(N,{cityProp:i,mapInfo:h,maxPage:z,currentPage:L,changeCurrentPage:function(n){D(n),_(!1),A(!1),C(!0),v(!1),b(!1),e(i,n,8)}})})}),w&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("span",{children:"Loading..."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(F.Z,{})]})})]})}}},function(e){e.O(0,[214,664,166,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);