import * as React from 'react';
import './index.scss';

interface Props {
  width: number;
  height: number
}

function USA({ ...Props }: Props) {
  return (
    <div className="flag flag_USA" style={Props}>
			<div className="flag__part flag__part_white_0"></div>
			<div className="flag__part flag__part_white_1"></div>
			<div className="flag__part flag__part_white_2"></div>
			<div className="flag__part flag__part_white_3"></div>
			<div className="flag__part flag__part_white_4"></div>
			<div className="flag__part flag__part_white_5"></div>
			<div className="flag__part flag__part_white_6"></div>
			<div className="flag__part flag__part_blue"></div>
			<div className="flag__part flag__part_star"></div>
		</div>
  );
}

export default USA;
