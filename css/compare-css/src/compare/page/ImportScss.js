import React, { useState } from 'react';
import './test.scss';

function ImportScss() {
  const [count, setCount] = useState(0);

  return (
      <>
        <div className="wrapper">
          <p className="btnColor">You clicked {count} times</p>
          <button className="button" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
        <a href="https://www.baidu.com" className="linkStyle">百度</a><br />
        <a href="https://www.google.com" className="linkGoogleStyle">google</a>
      </>
  );
}

export default ImportScss;
