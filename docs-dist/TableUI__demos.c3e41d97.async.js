"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[383,855],{95365:function(M,d,e){e.r(d),e.d(d,{default:function(){return p}});var m=e(5574),i=e.n(m),s=e(67294),u=e(16498),t=e(85893),v=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"}],g=[{name:"\u59D3\u540D",key:"name",sort:1,selected:!0,disable:!1,width:220},{name:"\u5E74\u9F84",key:"age",sort:2,selected:!0,disable:!1,width:220},{name:"\u7535\u8BDD",key:"phone",sort:3,selected:!1,disable:!0,width:220}],S=[{name:"\u5218\u5907",age:22,phone:15692837652},{name:"\u5173\u7FBD",age:21,phone:17697787678},{name:"\u5F20\u98DE",age:18,phone:12392880611}],y=function(){var x=1,H=2,k=3,T=(0,s.useState)(!1),l=i()(T,2),b=l[0],j=l[1],I=(0,s.useState)(g),o=i()(I,2),a=o[0],C=o[1],w=(0,s.useState)(v),c=i()(w,2),f=c[0],E=c[1];return(0,s.useEffect)(function(){var r=[];a==null||a.forEach(function(n){f.forEach(function(h){n.key===h.key&&r.push(h)})}),E(r)},[a]),(0,t.jsxs)("div",{className:"demo-setting",children:[(0,t.jsxs)("div",{className:"demo-setting-operate",children:[(0,t.jsx)("div",{}),(0,t.jsx)(u.TableUI.Setting,{openModifyHeader:b,setOpenModifyHeader:function(n){return j(n)},tableHeader:a,getTableheader:function(n){return C(n)},scrollHeight:window.innerHeight-400})]}),(0,t.jsx)(u.TableUI,{dataSource:S,columns:f,current:x,pageSize:H,total:k})]})},p=y}}]);
