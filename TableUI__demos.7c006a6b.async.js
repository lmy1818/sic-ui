"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[383],{16178:function(C,r,e){e.r(r);var h=e(5574),i=e.n(h),n=e(67294),u=e(42081),j=e(51254),t=e(85893),f=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"}],v=[{name:"\u59D3\u540D",key:"name",sort:1,selected:!0,disable:!1,width:220},{name:"\u5E74\u9F84",key:"age",sort:2,selected:!0,disable:!1,width:220},{name:"\u7535\u8BDD",key:"phone",sort:3,selected:!1,disable:!0,width:220}],E=[{name:"\u5218\u5907",age:22,phone:15692837652},{name:"\u5173\u7FBD",age:21,phone:17697787678},{name:"\u5F20\u98DE",age:18,phone:12392880611}],g=function(){var S=1,M=2,D=3,O=(0,n.useState)(!1),d=i()(O,2),b=d[0],p=d[1],y=(0,n.useState)(v),l=i()(y,2),a=l[0],T=l[1],P=(0,n.useState)(f),o=i()(P,2),c=o[0],I=o[1];return(0,n.useEffect)(function(){var _=[];a==null||a.forEach(function(s){c.forEach(function(m){s.key===m.key&&_.push(m)})}),I(_)},[a]),(0,t.jsxs)("div",{className:"demo-setting",children:[(0,t.jsxs)("div",{className:"demo-setting-operate",children:[(0,t.jsx)("div",{}),(0,t.jsx)(u.TableUI.Setting,{openModifyHeader:b,setOpenModifyHeader:function(s){return p(s)},tableHeader:a,getTableheader:function(s){return T(s)},scrollHeight:window.innerHeight-400})]}),(0,t.jsx)(u.TableUI,{dataSource:E,columns:c,current:S,pageSize:M,total:D})]})};r.default=g}}]);
