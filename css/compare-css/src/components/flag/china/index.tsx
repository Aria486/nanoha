import * as React from 'react';
import './index.scss';

interface Props {
  width: number;
  height: number
}

function ChineseFlag({ ...Props }: Props) {
  return (
    <div className="flag" style={Props}>
      <div className="flag-star" />
      <div className="flag-star" />
      <div className="flag-star" />
      <div className="flag-star" />
      <div className="flag-star" />
    </div>
  );
}

export default ChineseFlag;
