import * as React from 'react';
import ImportScss from './compare/page/ImportScss';
import TestDemo from './compare/page/TestDemo';
import './App.css';

function App() {
  const rc = {
    first: {
      second: "test",
    },
    third: {
      forth: {
        fifth: "222",
      }
    }
  };
  
  console.log(pick(rc, 'third.forth.fifth'));
  
  function pick(v: object, paths: string) {
    const result = {};
    const keyArr = paths.split(" ");
    const { length } = keyArr;
    for (let i = 0; i < length; i++) {
      const path = keyArr[i];
      const res = getValue(v, path);
      addValue(result, path, res);
    }
    return result;
  }
  
  function getValue(val: any, path: string) {
    let result;
    const keyArray = path.split(".");
    const { length } = keyArray;
    for (let i = 0; i < length; i++) {
      val = val[keyArray[i]];
      result = val;
    }
    return result;
  }

  function addValue(resObj: any, path: string, val: any) {
    const keyArray = path.split(".");
    const { length } = keyArray;
    let i = 0;
    while (i < length - 1) {
      const key = keyArray[i];
      resObj = resObj[key] == null ? resObj[key] = {} : resObj[key];
      i++;
    }
    resObj[keyArray[i]] = val;
    return resObj;
  }
  
  return (
    <div className="App">
      <ImportScss />
      <TestDemo />
    </div>
  );
}

export default App;
