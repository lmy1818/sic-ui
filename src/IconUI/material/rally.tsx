import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, MenuOutlined, SwapOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  HomeOutlined,
  SolutionOutlined,
  CopyOutlined,
  FormOutlined,
  AccountBookOutlined,
  SettingOutlined,
  AlipayCircleOutlined,
} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
  SwitchOff,
  Minsheng,
  Pingan,
  Iconwx,
  Iconzfb,
  Zhaoshang,
  SwitchOn,
  Warning,
  Pdf,
  Point,
  Remind,
  SelectFalse,
  SelectTrue,
  UploadPdf,
  UploadImage,
  UploadExcel,
} from './material';
import { Export, ListTwo, Return, AddOne, SwitchButton, Audit, Clear, Download, Female, Male, PreviewOpen, Upload } from '@icon-park/react';
import { Delete, Setting, Excel, FilePdf, BackgroundColor, Home, ChartPieOne, BookmarkOne, DataArrival } from '@icon-park/react';
import { TicketsTwo, Bank, ShieldAdd, Swipe, SettingTwo, DataFour, Currency, CheckOne, CloseOne, UTurnLeft } from '@icon-park/react';
import { Caution, RotateOne, Edit, Check, Close, UserBusiness, ArrowRight, More, DeleteOne, Search, Help } from '@icon-park/react';
import { Attention, FileAddition, CooperativeHandshake, FileSuccess, Right, Peoples, UserToUserTransmission } from '@icon-park/react';
import { PeoplePlus, Consume, MapRoadTwo, EditTwo, AddPrint, Family, CopyOne, ExpensesOne, FullScreenOne, Copy } from '@icon-park/react';
import { City, Alarm, Deposit, TicketOne, Protect, Alipay, User, Lock, FolderOpen, DoubleDown, DoubleUp, Press } from '@icon-park/react';
import { RobotOne, Power, History, Communication, Newlybuild, Left, Editor, ApiApp } from '@icon-park/react';
/** Icon 集合 */
export const iconRally = [
  // 自研icon
  { name: 'Minsheng', element: (props: any) => Minsheng(props) },
  { name: 'Pingan', element: (props: any) => Pingan(props) },
  { name: 'Iconwx', element: (props: any) => Iconwx(props) },
  { name: 'Iconzfb', element: (props: any) => Iconzfb(props) },
  { name: 'Zhaoshang', element: (props: any) => Zhaoshang(props) },
  { name: 'SwitchOff', element: (props: any) => SwitchOff(props) },
  { name: 'SwitchOn', element: (props: any) => SwitchOn(props) },
  { name: 'Warning', element: (props: any) => Warning(props) },
  { name: 'Pdf', element: (props: any) => Pdf(props) },
  { name: 'Point', element: (props: any) => Point(props) },
  { name: 'Remind', element: (props: any) => Remind(props) },
  { name: 'SelectFalse', element: (props: any) => SelectFalse(props) },
  { name: 'SelectTrue', element: (props: any) => SelectTrue(props) },
  { name: 'UploadPdf', element: (props: any) => <UploadPdf {...props} /> },
  { name: 'UploadImage', element: (props: any) => <UploadImage {...props} /> },
  { name: 'UploadExcel', element: (props: any) => <UploadExcel {...props} /> },

  // antd
  { name: 'HomeOutlined', element: (props: any) => <HomeOutlined {...props} /> },
  { name: 'LogoutOutlined', element: (props: any) => <LogoutOutlined {...props} /> },
  { name: 'SwapOutlined', element: (props: any) => <SwapOutlined {...props} /> },
  { name: 'MenuUnfoldOutlined', element: (props: any) => <MenuUnfoldOutlined {...props} /> },
  { name: 'DownOutlined', element: (props: any) => <DownOutlined {...props} /> },
  { name: 'MenuOutlined', element: (props: any) => <MenuOutlined {...props} /> },
  { name: 'SolutionOutlined', element: (props: any) => <SolutionOutlined {...props} /> },
  { name: 'CopyOutlined', element: (props: any) => <CopyOutlined {...props} /> },
  { name: 'FormOutlined', element: (props: any) => <FormOutlined {...props} /> },
  { name: 'AccountBookOutlined', element: (props: any) => <AccountBookOutlined {...props} /> },
  { name: 'SettingOutlined', element: (props: any) => <SettingOutlined {...props} /> },
  { name: 'EyeInvisibleOutlined', element: (props: any) => <EyeInvisibleOutlined {...props} /> },
  { name: 'EyeTwoTone', element: (props: any) => <EyeTwoTone {...props} /> },
  { name: 'AlipayCircleOutlined', element: (props: any) => <AlipayCircleOutlined {...props} /> },
  { name: 'MenuFoldOutlined', element: (props: any) => <MenuFoldOutlined {...props} /> },

  // icon-park
  { name: 'ListTwo', element: (props: any) => <ListTwo {...props} /> },
  { name: 'Export', element: (props: any) => <Export {...props} /> },
  { name: 'Return', element: (props: any) => <Return {...props} /> },
  { name: 'AddOne', element: (props: any) => <AddOne {...props} /> },
  { name: 'SwitchButton', element: (props: any) => <SwitchButton {...props} /> },
  { name: 'Audit', element: (props: any) => <Audit {...props} /> },
  { name: 'Clear', element: (props: any) => <Clear {...props} /> },
  { name: 'Download', element: (props: any) => <Download {...props} /> },
  { name: 'Female', element: (props: any) => <Female {...props} /> },
  { name: 'Male', element: (props: any) => <Male {...props} /> },
  { name: 'PreviewOpen', element: (props: any) => <PreviewOpen {...props} /> },
  { name: 'Upload', element: (props: any) => <Upload {...props} /> },
  { name: 'Delete', element: (props: any) => <Delete {...props} /> },
  { name: 'Setting', element: (props: any) => <Setting {...props} /> },
  { name: 'Excel', element: (props: any) => <Excel {...props} /> },
  { name: 'FilePdf', element: (props: any) => <FilePdf {...props} /> },
  { name: 'TicketsTwo', element: (props: any) => <TicketsTwo {...props} /> },
  { name: 'BackgroundColor', element: (props: any) => <BackgroundColor {...props} /> },
  { name: 'Home', element: (props: any) => <Home {...props} /> },
  { name: 'ChartPieOne', element: (props: any) => <ChartPieOne {...props} /> },
  { name: 'BookmarkOne', element: (props: any) => <BookmarkOne {...props} /> },
  { name: 'DataArrival', element: (props: any) => <DataArrival {...props} /> },
  { name: 'Bank', element: (props: any) => <Bank {...props} /> },
  { name: 'ShieldAdd', element: (props: any) => <ShieldAdd {...props} /> },
  { name: 'Swipe', element: (props: any) => <Swipe {...props} /> },
  { name: 'SettingTwo', element: (props: any) => <SettingTwo {...props} /> },
  { name: 'DataFour', element: (props: any) => <DataFour {...props} /> },
  { name: 'Currency', element: (props: any) => <Currency {...props} /> },
  { name: 'CheckOne', element: (props: any) => <CheckOne {...props} /> },
  { name: 'CloseOne', element: (props: any) => <CloseOne {...props} /> },
  { name: 'UTurnLeft', element: (props: any) => <UTurnLeft {...props} /> },
  { name: 'Caution', element: (props: any) => <Caution {...props} /> },
  { name: 'RotateOne', element: (props: any) => <RotateOne {...props} /> },
  { name: 'Edit', element: (props: any) => <Edit {...props} /> },
  { name: 'Check', element: (props: any) => <Check {...props} /> },
  { name: 'Close', element: (props: any) => <Close {...props} /> },
  { name: 'UserBusiness', element: (props: any) => <UserBusiness {...props} /> },
  { name: 'ArrowRight', element: (props: any) => <ArrowRight {...props} /> },
  { name: 'More', element: (props: any) => <More {...props} /> },
  { name: 'DeleteOne', element: (props: any) => <DeleteOne {...props} /> },
  { name: 'Search', element: (props: any) => <Search {...props} /> },
  { name: 'Help', element: (props: any) => <Help {...props} /> },
  { name: 'Attention', element: (props: any) => <Attention {...props} /> },
  { name: 'FileAddition', element: (props: any) => <FileAddition {...props} /> },
  { name: 'CooperativeHandshake', element: (props: any) => <CooperativeHandshake {...props} /> },
  { name: 'FileSuccess', element: (props: any) => <FileSuccess {...props} /> },
  { name: 'Right', element: (props: any) => <Right {...props} /> },
  { name: 'Peoples', element: (props: any) => <Peoples {...props} /> },
  { name: 'UserToUserTransmission', element: (props: any) => <UserToUserTransmission {...props} /> },
  { name: 'PeoplePlus', element: (props: any) => <PeoplePlus {...props} /> },
  { name: 'Consume', element: (props: any) => <Consume {...props} /> },
  { name: 'MapRoadTwo', element: (props: any) => <MapRoadTwo {...props} /> },
  { name: 'EditTwo', element: (props: any) => <EditTwo {...props} /> },
  { name: 'AddPrint', element: (props: any) => <AddPrint {...props} /> },
  { name: 'Family', element: (props: any) => <Family {...props} /> },
  { name: 'CopyOne', element: (props: any) => <CopyOne {...props} /> },
  { name: 'ExpensesOne', element: (props: any) => <ExpensesOne {...props} /> },
  { name: 'FullScreenOne', element: (props: any) => <FullScreenOne {...props} /> },
  { name: 'Copy', element: (props: any) => <Copy {...props} /> },

  { name: 'City', element: (props: any) => <City {...props} /> },
  { name: 'Alarm', element: (props: any) => <Alarm {...props} /> },
  { name: 'Deposit', element: (props: any) => <Deposit {...props} /> },
  { name: 'TicketOne', element: (props: any) => <TicketOne {...props} /> },
  { name: 'Protect', element: (props: any) => <Protect {...props} /> },
  { name: 'Alipay', element: (props: any) => <Alipay {...props} /> },
  { name: 'User', element: (props: any) => <User {...props} /> },
  { name: 'Lock', element: (props: any) => <Lock {...props} /> },
  { name: 'FolderOpen', element: (props: any) => <FolderOpen {...props} /> },
  { name: 'DoubleDown', element: (props: any) => <DoubleDown {...props} /> },
  { name: 'DoubleUp', element: (props: any) => <DoubleUp {...props} /> },
  { name: 'Press', element: (props: any) => <Press {...props} /> },
  { name: 'RobotOne', element: (props: any) => <RobotOne {...props} /> },
  { name: 'Power', element: (props: any) => <Power {...props} /> },
  { name: 'History', element: (props: any) => <History {...props} /> },
  { name: 'Communication', element: (props: any) => <Communication {...props} /> },
  { name: 'Newlybuild', element: (props: any) => <Newlybuild {...props} /> },
  { name: 'Left', element: (props: any) => <Left {...props} /> },
  { name: 'Editor', element: (props: any) => <Editor {...props} /> },
  { name: 'ApiApp', element: (props: any) => <ApiApp {...props} /> },
];
