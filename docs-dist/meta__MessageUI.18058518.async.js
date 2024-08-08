"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[5524],{3239:function(h,d,e){e.r(d),e.d(d,{demos:function(){return E}});var I=e(43953),r=e.n(I),C=e(91184),m=e.n(C),g=e(38497),W=e(75829),E={"messageui-demo-0":{component:g.memo(g.lazy(m()(r()().mark(function i(){var u,a,l,o,t,s,p,v,M,f;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=n.sent,a=u.default,n.next=6,Promise.resolve().then(e.bind(e,15523));case 6:return l=n.sent,o=l.MessageUI,t=l.ButtonUI,n.next=11,Promise.resolve().then(e.bind(e,58490));case 11:return s=n.sent,p=s.Space,n.next=15,Promise.resolve().then(e.bind(e,55237));case 15:return v=n.sent,M=v.ExclamationCircleFilled,f=function(){var U=function(){o.success("\u6210\u529F")},x=function(){o.error("\u5931\u8D25")},P=function(){o.info({content:"\u9ED8\u8BA4",icon:a.createElement(M,{style:{color:"#fff"}})})},B=function(){o.warning("\u8B66\u544A")},y=function(){o.loading("\u52A0\u8F7D")};return a.createElement(p,null,a.createElement(t,{onClick:U},"\u63D0\u793A(\u6210\u529F)"),a.createElement(t,{onClick:x},"\u63D0\u793A(\u5931\u8D25)"),a.createElement(t,{onClick:P},"\u63D0\u793A(\u9ED8\u8BA4)"),a.createElement(t,{onClick:B},"\u63D0\u793A(\u8B66\u544A)"),a.createElement(t,{onClick:y},"\u63D0\u793A(\u52A0\u8F7D)"))},n.abrupt("return",{default:f});case 19:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"messageui-demo-0",refAtomIds:["MessageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
import { MessageUI, ButtonUI, IconUI } from 'sic-ui';\r
import { Space, message } from 'antd';\r
import { ExclamationCircleFilled } from '@ant-design/icons';\r
\r
const App: React.FC = () => {\r
  const showMessageSuccess = () => {\r
    MessageUI.success('\u6210\u529F');\r
  };\r
  const showMessageError = () => {\r
    MessageUI.error('\u5931\u8D25');\r
  };\r
  const showMessageInfo = () => {\r
    MessageUI.info({\r
      content: '\u9ED8\u8BA4',\r
      icon: <ExclamationCircleFilled style={{ color: '#fff' }} />,\r
    });\r
    // MessageUI.info('\u9ED8\u8BA4');\r
  };\r
\r
  const showMessageWarning = () => {\r
    MessageUI.warning('\u8B66\u544A');\r
  };\r
  const showMessageLoading = () => {\r
    MessageUI.loading('\u52A0\u8F7D');\r
  };\r
\r
  return (\r
    <Space>\r
      <ButtonUI onClick={showMessageSuccess}>\u63D0\u793A(\u6210\u529F)</ButtonUI>\r
      <ButtonUI onClick={showMessageError}>\u63D0\u793A(\u5931\u8D25)</ButtonUI>\r
      <ButtonUI onClick={showMessageInfo}>\u63D0\u793A(\u9ED8\u8BA4)</ButtonUI>\r
      <ButtonUI onClick={showMessageWarning}>\u63D0\u793A(\u8B66\u544A)</ButtonUI>\r
      <ButtonUI onClick={showMessageLoading}>\u63D0\u793A(\u52A0\u8F7D)</ButtonUI>\r
    </Space>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.5"},antd:{type:"NPM",value:"5.20.0"},"@ant-design/icons":{type:"NPM",value:"5.4.0"}},entry:"index.tsx"},context:{react:e(38497),"sic-ui":e(15523),antd:e(58490),"@ant-design/icons":e(55237)},renderOpts:{compile:function(){var i=m()(r()().mark(function a(){var l,o=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(3482).then(e.bind(e,73482));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,o));case 3:case"end":return s.stop()}},a)}));function u(){return i.apply(this,arguments)}return u}()}}}},19444:function(h,d,e){e.r(d),e.d(d,{texts:function(){return r}});var I=e(75829);const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6D88\u606F\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}MessageUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A",paraId:3,tocIndex:3},{value:"message.success(content, [duration], onClose)",paraId:4,tocIndex:3},{value:"message.error(content, [duration], onClose)",paraId:4,tocIndex:3},{value:"message.info(content, [duration], onClose)",paraId:4,tocIndex:3},{value:"message.warning(content, [duration], onClose)",paraId:4,tocIndex:3},{value:"message.loading(content, [duration], onClose)",paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:3},{value:"\u8BF4\u660E",paraId:5,tocIndex:3},{value:"\u7C7B\u578B",paraId:5,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:5,tocIndex:3},{value:"content",paraId:5,tocIndex:3},{value:"\u63D0\u793A\u5185\u5BB9",paraId:5,tocIndex:3},{value:"Number",paraId:5,tocIndex:3},{value:"ReactNode / config",paraId:5,tocIndex:3},{value:"\u5426",paraId:5,tocIndex:3},{value:"duration",paraId:5,tocIndex:3},{value:"\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED",paraId:5,tocIndex:3},{value:"number",paraId:5,tocIndex:3},{value:"3s",paraId:5,tocIndex:3},{value:"\u5426",paraId:5,tocIndex:3},{value:"onClose",paraId:5,tocIndex:3},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:3},{value:"function",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"\u5426",paraId:5,tocIndex:3}]}}]);
