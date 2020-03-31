import * as React from 'react';
import './index.scss';

interface Props {
  width: number;
  height: number
}

function Ukraine({ ...Props }: Props) {
  return (
    <div className="flag flag_ukraine" style={Props} />
  );
}

export default Ukraine;