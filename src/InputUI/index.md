---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# InputUI-输入框

## 代码演示

💎 基础使用

```tsx
import React, { useState } from 'react';
import { InputUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const [inputRangeValue, setInputRangeValue] = useState();

  const changeInputRange = (e) => setInputRangeValue(e);
  return (
    <div>
      <InputUI onChange={(e) => console.log(e)} onchangeTime={500} />
      <br />
      <br />
      <InputUI.Range onChange={changeInputRange} min={0} max={100} />
      {JSON.stringify(inputRangeValue)}
    </div>
  );
};
export default App;
```
