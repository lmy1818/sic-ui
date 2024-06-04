import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUI } from 'sic-ui';
import './index.scss';

interface IProps {
  to?: any;
  before?: string;
  current?: string;
  className?: string;
  style?: { [key: string]: string | number };
}

const BackUI = (props: IProps & Record<string, any>) => {
  const { to = -1, before, current, className, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div className={`sic-back ${className ?? ''}`} {...otherProps}>
      <div className="sic-back-left" onClick={() => navigate(to ?? -1)}>
        <IconUI name="Return" style={{ color: 'var(--themeColor)', marginRight: 3 }} />
        返回
      </div>
      <div className="sic-back-right">
        <span>{before}/</span>
        {current}
      </div>
    </div>
  );
};
export default BackUI;
