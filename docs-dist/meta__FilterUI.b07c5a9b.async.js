"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[614],{60471:function(R,i,e){e.r(i),e.d(i,{demos:function(){return U}});var E=e(43953),r=e.n(E),k=e(39346),l=e.n(k),W=e(9083),c=e.n(W),A=e(91184),C=e.n(A),x=e(38497),H=e(80300),U={"filterui-demo-0":{component:x.memo(x.lazy(C()(r()().mark(function _(){var u,d,o,m,p,t,O,F;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=a.sent,d=u.default,o=u.useState,a.next=7,Promise.resolve().then(e.bind(e,39902));case 7:return m=a.sent,p=m.Form,a.next=11,Promise.resolve().then(e.bind(e,21137));case 11:return t=a.sent,O=t.FilterUI,F=function(){var v,g=p.useForm(),V=c()(g,1),j=V[0],L=o(null),S=c()(L,2),$=S[0],B=S[1],K=o({choice:!1,multipleChoice:[],filterParams:{Status:1},tableSetStatus:!1,moreFilters:!1}),T=c()(K,2),n=T[0],I=T[1],f=[{value:1,label:"\u5F85\u652F\u4ED8"},{value:2,label:"\u5BA1\u6838\u4E2D"},{value:3,label:"\u53D1\u653E\u4E2D"},{value:4,label:"\u5DF2\u53D1\u653E"},{value:5,label:"\u5DF2\u53D6\u6D88"},{value:6,label:"\u9A73\u56DE"}],N=function(D,s){var y,b,P,h;I(l()(l()({},n),{},{filterParams:l()(l()({},s),{},{dateStart:(y=s==null||(b=s.submitTime)===null||b===void 0?void 0:b[0])!==null&&y!==void 0?y:void 0,dateEnd:(P=s==null||(h=s.submitTime)===null||h===void 0?void 0:h[1])!==null&&P!==void 0?P:void 0})}))},G=[{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName1"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime1"},{type:"select",label:"\u72B6\u6001",key:"Status1",options:f},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName2"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime2"},{type:"select",label:"\u72B6\u6001",key:"Status2",options:f,isNotDelete:!0,renderProps:{}},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime"},{type:"select",label:"\u72B6\u6001",key:"Status",options:f}],z=function(){I(l()(l()({},n),{},{filterParams:{}}))};return d.createElement("div",{ref:B},d.createElement(O,{form:j,filterOptions:G,filterParams:(v=n==null?void 0:n.filterParams)!==null&&v!==void 0?v:{},moreFilters:n==null?void 0:n.moreFilters,setMoreFilters:function(D){return I(l()(l()({},n),{},{moreFilters:D}))},onValuesChange:N,clickReset:z,container:$}))},a.abrupt("return",{default:F});case 15:case"end":return a.stop()}},_)})))),asset:{type:"BLOCK",id:"filterui-demo-0",refAtomIds:["FilterUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { Form, message } from 'antd';
import { FilterUI } from 'sic-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [container, setContainer] = useState(null);
  // \u72B6\u6001\u5BB9\u5668
  const [vessel, setVessel] = useState({
    // \u662F\u5426\u6279\u91CF
    choice: false,
    // \u6279\u91CF\u7684\u503C
    multipleChoice: [],
    // \u641C\u7D22\u6761\u4EF6
    filterParams: {
      Status: 1,
    },
    // \u8868\u683C\u8BBE\u7F6E\u72B6\u6001
    tableSetStatus: false,
    // \u66F4\u591A\u7B5B\u9009\u7684\u72B6\u6001
    moreFilters: false,
  });
  const projectStatusOptions = [
    { value: 1, label: '\u5F85\u652F\u4ED8' },
    { value: 2, label: '\u5BA1\u6838\u4E2D' },
    { value: 3, label: '\u53D1\u653E\u4E2D' },
    { value: 4, label: '\u5DF2\u53D1\u653E' },
    { value: 5, label: '\u5DF2\u53D6\u6D88' },
    { value: 6, label: '\u9A73\u56DE' },
  ];
  const onValuesChange = (changedValues: any, allValues: any) => {
    setVessel({
      ...vessel,
      filterParams: {
        ...allValues,
        dateStart: allValues?.submitTime?.[0] ?? undefined,
        dateEnd: allValues?.submitTime?.[1] ?? undefined,
      },
    });
  };
  const filterOptions = [
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName1' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime1' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status1', options: projectStatusOptions },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName2' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime2' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status2', options: projectStatusOptions, isNotDelete: true, renderProps: {} },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status', options: projectStatusOptions },
  ];
  const clickReset = () => {
    setVessel({ ...vessel, filterParams: {} });
  };
  return (
    <div ref={setContainer}>
      <FilterUI
        form={form}
        filterOptions={filterOptions}
        filterParams={vessel?.filterParams ?? {}}
        moreFilters={vessel?.moreFilters}
        setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}
        onValuesChange={onValuesChange}
        clickReset={clickReset}
        container={container}
      />
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:e(38497),antd:e(39902),"sic-ui":e(21137)},renderOpts:{compile:function(){var _=C()(r()().mark(function d(){var o,m=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3959).then(e.bind(e,73959));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,m));case 3:case"end":return t.stop()}},d)}));function u(){return _.apply(this,arguments)}return u}()}}}},68556:function(R,i,e){e.r(i),e.d(i,{texts:function(){return r}});var E=e(80300);const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u52A0\u8F7D\u4E2D\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"form",paraId:3,tocIndex:3},{value:"\u8868\u5355\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterOptions",paraId:3,tocIndex:3},{value:"\u641C\u7D22\u7EC4\u4EF6\u914D\u7F6E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterParams",paraId:3,tocIndex:3},{value:"\u7B5B\u9009\u6846\u7684\u5B57\u6BB5\u548C\u503C",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"setMoreFilters",paraId:3,tocIndex:3},{value:"\u63A7\u5236\u66F4\u591A\u7B5B\u9009\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"onValuesChange",paraId:3,tocIndex:3},{value:"\u8868\u5355\u503C\u53D8\u5316",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"clickReset",paraId:3,tocIndex:3},{value:"\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"container",paraId:3,tocIndex:3},{value:"\u6EDA\u52A8\u56FA\u5B9A\u6307\u5B9A\u7684\u7236\u7EA7\u5143\u7D20",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3}]}}]);
