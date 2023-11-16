var _excluded = ["spinning", "children", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Image, Spin } from 'antd';
import { osLoading } from "../assets";
import "./index.scss";
var LoadingUI = function LoadingUI(props) {
  var spinning = props.spinning,
    children = props.children,
    style = props.style,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Spin, _extends({
    className: "sic-loadui",
    spinning: spinning,
    style: style,
    indicator: /*#__PURE__*/React.createElement(Image, {
      className: "image",
      src: osLoading,
      preview: false
    })
  }, otherProps), children);
};
export default LoadingUI;