import * as React from 'react';
import './index.scss';

interface Props {
  width: number;
  height: number
}

function Czech({ ...Props }: Props) {
  return (
    <div className="flag flag_czech" style={ Props }>
			<div className="flag__part flag__part_white"></div>
			<div className="flag__part flag__part_red"></div>
			<div className="flag__part flag__part_blue"></div>
		</div>
  );
}

export default Czech;
