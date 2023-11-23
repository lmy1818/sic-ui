import React, { useState, useEffect } from 'react';
import { customIcon } from './material';
import { Export, ListTwo, Return, AddOne, SwitchButton, Audit, Clear, Download, Female, Male, PreviewOpen, Upload } from '@icon-park/react';
import { Delete, Setting, Excel, FilePdf, BackgroundColor, Home, ChartPieOne, BookmarkOne, DataArrival } from '@icon-park/react';
import { TicketsTwo, Bank, ShieldAdd, Swipe, SettingTwo, DataFour, Currency, CheckOne, CloseOne, UTurnLeft } from '@icon-park/react';
import { Caution, RotateOne, Edit, Check, Close, UserBusiness, ArrowRight, More, DeleteOne, Search, Help } from '@icon-park/react';
import { Attention, FileAddition, CooperativeHandshake, FileSuccess, Right, Peoples, UserToUserTransmission } from '@icon-park/react';
import { PeoplePlus, Consume, MapRoadTwo, EditTwo, AddPrint, Family, CopyOne, ExpensesOne, FullScreenOne } from '@icon-park/react';

const IconUI = (props: { name: string; [key: string]: any }) => {
  const { name, style, ...otherProps } = props;
  const IconList = [
    { name: 'ListTwo', element: <ListTwo style={style} {...otherProps} /> }, // 列表：批量操作
    { name: 'Export', element: <Export style={style} {...otherProps} /> }, // 导出：导出
    { name: 'Return', element: <Return style={style} {...otherProps} /> }, // 返回：返回
    { name: 'AddOne', element: <AddOne style={style} {...otherProps} /> }, // 加号：新增
    { name: 'Delete', element: <Delete style={style} {...otherProps} /> }, // 减号：删除
    { name: 'SwitchButton', element: <SwitchButton style={style} {...otherProps} /> }, // 开关：开关
    { name: 'Audit', element: <Audit style={style} {...otherProps} /> }, // 开关：开关
    { name: 'Clear', element: <Clear style={style} {...otherProps} /> }, // 清除：重置
    { name: 'Download', element: <Download style={style} {...otherProps} /> }, // 下载：下载
    { name: 'Female', element: <Female style={style} {...otherProps} /> }, // 女：女
    { name: 'Male', element: <Male style={style} {...otherProps} /> }, // 男：男
    { name: 'PreviewOpen', element: <PreviewOpen style={style} {...otherProps} /> }, // 眼睛：查看
    { name: 'Upload', element: <Upload style={style} {...otherProps} /> }, // 上传：上传
    { name: 'Setting', element: <Setting style={style} {...otherProps} /> }, // 设置：设置
    { name: 'Excel', element: <Excel style={style} {...otherProps} /> }, // Excel
    { name: 'FilePdf', element: <FilePdf style={style} {...otherProps} /> }, // Pdf
    { name: 'BackgroundColor', element: <BackgroundColor style={style} {...otherProps} /> }, // 调色
    { name: 'Home', element: <Home style={style} {...otherProps} /> }, // 菜单
    { name: 'ChartPieOne', element: <ChartPieOne style={style} {...otherProps} /> }, // 菜单
    { name: 'BookmarkOne', element: <BookmarkOne style={style} {...otherProps} /> }, // 菜单
    { name: 'DataArrival', element: <DataArrival style={style} {...otherProps} /> }, // 菜单
    { name: 'TicketsTwo', element: <TicketsTwo style={style} {...otherProps} /> }, // 菜单
    { name: 'Bank', element: <Bank style={style} {...otherProps} /> }, // 菜单
    { name: 'ShieldAdd', element: <ShieldAdd style={style} {...otherProps} /> }, // 菜单
    { name: 'Swipe', element: <Swipe style={style} {...otherProps} /> }, // 菜单
    { name: 'SettingTwo', element: <SettingTwo style={style} {...otherProps} /> }, // 菜单
    { name: 'DataFour', element: <DataFour style={style} {...otherProps} /> }, //状态：未打款
    { name: 'Currency', element: <Currency style={style} {...otherProps} /> }, //状态：打款中
    { name: 'CheckOne', element: <CheckOne style={style} {...otherProps} /> }, //状态：已发放
    { name: 'CloseOne', element: <CloseOne style={style} {...otherProps} /> }, //状态：已取消
    { name: 'UTurnLeft', element: <UTurnLeft style={style} {...otherProps} /> }, //状态：驳回
    { name: 'Caution', element: <Caution style={style} {...otherProps} /> }, //状态：异常
    { name: 'RotateOne', element: <RotateOne style={style} {...otherProps} /> }, //状态：发放中
    { name: 'Edit', element: <Edit style={style} {...otherProps} /> }, //编辑
    { name: 'Check', element: <Check style={style} {...otherProps} /> }, //检测结果:成功,
    { name: 'Close', element: <Close style={style} {...otherProps} /> }, //检测结果：失败,
    { name: 'UserBusiness', element: <UserBusiness style={style} {...otherProps} /> },
    { name: 'ArrowRight', element: <ArrowRight style={style} {...otherProps} /> },
    { name: 'More', element: <More style={style} {...otherProps} /> },
    { name: 'DeleteOne', element: <DeleteOne style={style} {...otherProps} /> }, //垃圾桶：删除
    { name: 'Search', element: <Search style={style} {...otherProps} /> }, //放大镜：搜索
    { name: 'Help', element: <Help style={style} {...otherProps} /> }, //放大镜：搜索
    { name: 'Attention', element: <Attention style={style} {...otherProps} /> }, //感叹号：感叹号
    { name: 'FileAddition', element: <FileAddition style={style} {...otherProps} /> }, //文件：文件
    { name: 'CooperativeHandshake', element: <CooperativeHandshake style={style} {...otherProps} /> }, //合作：合作
    { name: 'FileSuccess', element: <FileSuccess style={style} {...otherProps} /> }, //合作：合作
    { name: 'Right', element: <Right style={style} {...otherProps} /> }, // 右侧：箭头
    { name: 'Peoples', element: <Peoples style={style} {...otherProps} /> }, // 菜单 客户管理
    { name: 'UserToUserTransmission', element: <UserToUserTransmission style={style} {...otherProps} /> }, // 菜单 代理管理
    { name: 'PeoplePlus', element: <PeoplePlus style={style} {...otherProps} /> }, // 菜单 新增客户
    { name: 'Consume', element: <Consume style={style} {...otherProps} /> }, // 代理 提现
    { name: 'MapRoadTwo', element: <MapRoadTwo style={style} {...otherProps} /> }, //组织架构 区域
    { name: 'EditTwo', element: <EditTwo style={style} {...otherProps} /> }, //组织架构 编辑
    { name: 'AddPrint', element: <AddPrint style={style} {...otherProps} /> }, //发票管理 发票申请,
    { name: 'Family', element: <Family style={style} {...otherProps} /> }, //发票管理 收件人,
    { name: 'CopyOne', element: <CopyOne style={style} {...otherProps} /> }, //首页 复制,
    { name: 'ExpensesOne', element: <ExpensesOne style={style} {...otherProps} /> }, //发放管理 支付,
    { name: 'FullScreenOne', element: <FullScreenOne style={style} {...otherProps} /> }, //发票管理  查看
  ];
  const [list, setList] = useState<{ name: string; element: React.ReactNode }[]>(IconList);

  useEffect(() => {
    const customIconList = customIcon(otherProps);
    setList(IconList.concat(customIconList));
  }, []);

  return list?.filter((item) => item?.name === name)?.[0]?.element;
};

export default IconUI;
