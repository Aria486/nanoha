/* eslint-disable import/first */
import * as React from 'react';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Loading from '../components/Loading';

export default {
  title: 'loading',
  decorators: [withKnobs]
};

export const loading = () => 
  <Loading
    loadState={boolean("loadState set", true)}
    style={{borderColor: text("borderColor set", "blue")}}
  />;


