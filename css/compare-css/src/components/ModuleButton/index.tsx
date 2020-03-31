import * as React from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
}

function ModuleButton( { text = 'hello' }: Props) {
  return (
    <button className={styles.button}>{text}</button>
  );
}

export default ModuleButton;
