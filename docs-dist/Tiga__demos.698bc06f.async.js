"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[2280],{23429:function(v,n,e){e.r(n);var m=e(39346),t=e.n(m),c=e(9083),s=e.n(c),o=e(38497),a=e(40570),_=e(96469),y=function(){var l=(0,o.useState)(),r=s()(l,2),u=r[0],i=r[1],d=[{key:"name",name:"\u59D3\u540D"},{key:"age",name:"\u5E74\u9F84"},{key:"phone",name:"\u7535\u8BDD"}],p=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3}],D=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3,selected:!1},{key:"fighting",name:"\u6218\u529B",sort:2}],h=[{name:"\u5218\u5907",age:22,phone:15692837652,fighting:6},{name:"\u5173\u7FBD",age:21,phone:17697787678,fighting:9},{name:"\u5F20\u98DE",age:18,phone:12392880611,fighting:7},{name:"\u8D75\u4E91",age:19,phone:12392880611,fighting:8}],P=1,b=10,f=4,E={dataSource:u,pageSize:b,current:P,total:f};return(0,o.useEffect)(function(){setTimeout(function(){i(h)},2e3)},[]),(0,_.jsxs)("div",{children:["\u57FA\u7840\u6A21\u5F0F",(0,_.jsx)(a.LoadingUI,{isShowLoading:!u,children:(0,_.jsx)(a.Tiga,t()({rowKey:"name",tableHeader:d},E))}),"\u5E26\u6709\u6392\u5E8F",(0,_.jsx)(a.Tiga,t()({rowKey:"name",tableHeader:p},E)),"\u5E26\u6709\u7981\u7528",(0,_.jsx)(a.Tiga,t()({rowKey:"name",tableHeader:D},E))]})};n.default=y},65902:function(v,n,e){e.r(n),e.d(n,{FEERATETYPE:function(){return a}});var m=e(39346),t=e.n(m),c=e(38497),s=e(40570),o=e(96469),a=[{value:1,label:"\u56FA\u5B9A\u8D39\u7387",type:1},{value:2,label:"\u533A\u95F4\u8D39\u7387",type:2},{value:3,label:"\u62BD\u6210\u8D39\u7387",type:3}],_=function(){var g=[{key:"name",name:"\u59D3\u540D"},{key:"age",name:"\u5E74\u9F84"},{key:"phone",name:"\u7535\u8BDD"},{key:"money",name:"\u91D1\u989D",type:"amount",transform:{rule:"num_expand_100"}},{key:"percentage",name:"\u767E\u5206\u6BD4",type:"amount",transform:{rule:"num_reduce_100_%"}},{key:"type",name:"\u6807\u7B7E",type:"tagui",transform:{ruleList:a}}],l=[{name:"\u5218\u5907",age:22,phone:15692837652,money:200,percentage:.02,type:1},{name:"\u5173\u7FBD",age:21,phone:17697787678,money:200,percentage:.2,type:2},{name:"\u5F20\u98DE",age:18,phone:12392880611,money:200,percentage:.1,type:3},{name:"\u8D75\u4E91",age:19,phone:12392880611,money:200,percentage:1,type:1}],r=1,u=10,i=4,d={dataSource:l,pageSize:u,current:r,total:i};return(0,o.jsxs)("div",{children:["\u91D1\u989D\u6A21\u5F0F",(0,o.jsx)(s.Tiga,t()({rowKey:"name",tableHeader:g},d))]})};n.default=_}}]);
