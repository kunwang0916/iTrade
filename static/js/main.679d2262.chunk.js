(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(347)},167:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(9),l=a.n(i),c=(a(167),a(10)),m=a(11),o=a(13),s=a(12),p=a(14),u=a(360),b=a(361),h=a(358),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a.Footer,{style:{textAlign:"center"}},"iTrade \xa9 ",(new Date).getFullYear(),r.a.createElement("br",null),"build: ","0ec2c2e0")}}]),t}(r.a.Component),d=a(359),f=a(17),g=a(349),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement(h.a.Header,{style:{textAlign:"center",background:"#f0f2f5",color:"#333333",fontWeight:"bold"}},r.a.createElement(d.a,{mode:"horizontal"},r.a.createElement(d.a.SubMenu,{title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(f.a,{type:"setting"}),e)},r.a.createElement(d.a.Item,null,r.a.createElement(g.a,{to:"/userProfile"},"My Profile")),r.a.createElement(d.a.Item,null,r.a.createElement(g.a,{to:"/myItems"},"My Items")),r.a.createElement(d.a.Item,null,"Log Out"))))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props||{},t=e.content,a=e.title;return r.a.createElement(h.a,null,r.a.createElement(E,{title:a}),r.a.createElement(h.a.Content,{style:{margin:"auto"}},t),r.a.createElement(j,null))}}]),t}(r.a.Component),y=a(354),v=a(356),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(g.a,{to:"itemDetail"},r.a.createElement(v.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:e.images[0]})},r.a.createElement(v.a.Meta,{title:e.title,description:e.subTitle})))}}]),t}(r.a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=(this.props||[]).items;return r.a.createElement("div",{style:{maxWidth:500,display:"flex",textAlign:"center"}},r.a.createElement(y.a,{grid:{gutter:0,xs:2,sm:2,md:2,lg:2,xl:2,xxl:2},split:!0,dataSource:e,renderItem:function(e){return r.a.createElement(y.a.Item,null,r.a.createElement(k,{item:e}))}}))}}]),t}(r.a.Component),x=[{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"}],w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{items:x}));return r.a.createElement(O,{content:e,title:"iTrade"})}}]),t}(n.Component),C=a(230),z=a(239),T=a(350),F=a(351),_=a(352),S=a(348),$=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.images.map(function(e){return r.a.createElement("img",{alt:"example",src:e})}),a=r.a.createElement(T.a,{autoplay:!0},t);return r.a.createElement(v.a,{hoverable:!0,style:{width:400},cover:a},r.a.createElement(F.a,{orientation:"left"},"Item Info:"),r.a.createElement(v.a.Meta,{title:e.title,description:e.subTitle}),r.a.createElement(y.a,{style:{marginTop:"10pt"},bordered:!0,dataSource:e.specs||[],renderItem:function(e){return r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Item.Meta,{title:e.label,description:e.text}))}}),r.a.createElement(v.a.Meta,{style:{marginTop:"10pt"},title:"Description",description:e.description}),r.a.createElement(F.a,{orientation:"left"},"Seller Info:"),r.a.createElement(g.a,{to:"userProfile"},r.a.createElement(v.a.Meta,{avatar:r.a.createElement(_.a,{src:e.user.avatar}),title:e.user.name,description:e.user.description}),r.a.createElement(S.a,{type:"primary",block:!0,style:{marginTop:"10pt"}},"Contact")))}}]),t}(r.a.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=(this.props||{}).item;return r.a.createElement(C.a,{type:"flex",justify:"center"},r.a.createElement(z.a,null,r.a.createElement($,{item:e})))}}]),t}(r.a.Component),A={images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_2.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_3.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_4.jpg?1516236464"],specs:[{label:"Condition",text:"Like New"},{label:"Size",text:"N/A"},{label:"Shipping",text:"Free, 2+ days"},{label:"Category",text:"Camera"}],description:["Have a really good camera I don't use anymore. I used to do photography as a hobby but now don't have time.Nothing is wrong with the camera.It uses 4 double A batteries and also needs an SD card.Other than that everything is good."],title:"Fujifilm camera",subTitle:"$72.00",user:{avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",name:"Kevin J",description:"Mountain View"}},M=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{item:A}));return r.a.createElement(O,{content:e,title:A.title})}}]),t}(n.Component),L={avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",name:"Kevin J",description:"Mountain View",sellingItems:[{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"}]},V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{style:{margin:"20pt",textAlign:"center"}},r.a.createElement("img",{src:L.avatar,height:"100pt",alt:"avatar"}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{width:500},actions:[r.a.createElement(f.a,{type:"phone"}),r.a.createElement(f.a,{type:"message"}),r.a.createElement(f.a,{type:"mail"})],cover:e},r.a.createElement(v.a.Meta,{title:L.name,description:L.description})),r.a.createElement(S.a,{type:"primary",block:!0,style:{marginTop:"10pt"}},r.a.createElement(g.a,{to:"editProfile"},"Edit")),r.a.createElement(F.a,{orientation:"left"},"Selling:"),r.a.createElement(I,{items:L.sellingItems}))}}]),t}(r.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null));return r.a.createElement(O,{content:e,title:"User Profile"})}}]),t}(n.Component),N=a(353),H=a(357),J=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){(this.props||{}).item;var e={labelCol:{span:8},wrapperCol:{span:16}};return r.a.createElement(N.a,{onSubmit:this.handleSubmit,layout:"horizontal"},r.a.createElement(N.a.Item,Object.assign({},e,{label:"Name"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},e,{label:"City"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},e,{label:"Zipcode"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},e,{label:"Email"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},e,{label:"Phone"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8},md:{span:16,offset:8},lg:{span:16,offset:8},xl:{span:16,offset:8},xxl:{span:16,offset:8}}},r.a.createElement(S.a,{type:"primary",htmlType:"submit"},"Save")))}}]),t}(r.a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null));return r.a.createElement(O,{content:e,title:"Edit Profile"})}}]),t}(n.Component),U=[{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"},{images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464"],title:"Fujifilm camera",subTitle:"$72.00"}],W=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{type:"primary",block:!0,style:{marginBottom:"10pt"}},r.a.createElement(g.a,{to:"editItem"},"Add Item")),r.a.createElement(I,{items:U}));return r.a.createElement(O,{content:e,title:"My Items"})}}]),t}(n.Component),Y=a(355),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={previewVisible:!1,previewImage:"",fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleChange=function(e){var t=e.fileList;return a.setState({fileList:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){(this.props||{}).item;var e=this.state,t=(e.previewVisible,e.previewImage,e.fileList),a=r.a.createElement("div",null,r.a.createElement(f.a,{type:"plus"}),r.a.createElement("div",{className:"ant-upload-text"},"Upload")),n={labelCol:{span:8},wrapperCol:{span:16}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{orientation:"left"},"Item Info:"),r.a.createElement(N.a,{onSubmit:this.handleSubmit,layout:"horizontal"},r.a.createElement(N.a.Item,Object.assign({},n,{label:"Name"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Price"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Condition"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Size"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Category"}),r.a.createElement(H.a,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Description"}),r.a.createElement(H.a.TextArea,null)),r.a.createElement(N.a.Item,Object.assign({},n,{label:"Images"}),r.a.createElement(Y.a,{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:t,onPreview:this.handlePreview,onChange:this.handleChange},t.length>=3?null:a)),r.a.createElement(N.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8},md:{span:16,offset:8},lg:{span:16,offset:8},xl:{span:16,offset:8},xxl:{span:16,offset:8}}},r.a.createElement(S.a,{type:"primary",htmlType:"submit"},"Save"))))}}]),t}(r.a.Component),B={images:["https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_2.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_3.jpg?1516236464","https://static-mercariapp-com.akamaized.net/photos/m21086634494_4.jpg?1516236464"],specs:[{label:"Condition",text:"Like New"},{label:"Size",text:"N/A"},{label:"Shipping",text:"Free, 2+ days"},{label:"Category",text:"Camera"}],description:["Have a really good camera I don't use anymore. I used to do photography as a hobby but now don't have time.Nothing is wrong with the camera.It uses 4 double A batteries and also needs an SD card.Other than that everything is good."],title:"Fujifilm camera",subTitle:"$72.00",user:{avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",name:"Kevin J",description:"Mountain View"}},K=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{item:B}));return r.a.createElement(O,{content:e,title:B.title})}}]),t}(n.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/iTrade"},r.a.createElement("div",null,r.a.createElement(b.a,{exact:!0,path:"/",component:w}),r.a.createElement(b.a,{path:"/itemDetail",component:M}),r.a.createElement(b.a,{path:"/userProfile",component:D}),r.a.createElement(b.a,{path:"/editProfile",component:X}),r.a.createElement(b.a,{path:"/myItems",component:W}),r.a.createElement(b.a,{path:"/editItem",component:K})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,2,1]]]);
//# sourceMappingURL=main.679d2262.chunk.js.map