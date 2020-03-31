import * as React from 'react';
import './index.scss';

interface Props {
  width: number;
  height: number
}

// 阿尔及利亚
function AlgeriaFlag({ ...Props }: Props) {
  return (
    <div id="algeria" className="flagAl" style={Props}>
    <div className="middle">
        <div className="moon"></div>
        <div className="moon-clip"></div>
        <div className="star"></div>
    </div>
</div>
  );
}

export default AlgeriaFlag;
