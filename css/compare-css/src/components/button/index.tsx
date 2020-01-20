import * as React from 'react';
import './button.scss';

interface Props {
  text: string;
}

function Button( { text = 'hello' }: Props) {
  return (
    <button className="button">{text}</button>
  );
}

export default Button;
