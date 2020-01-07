import { configure, addDecorator } from '@storybook/react';
import * as React from 'react';

// automatically import all files ending in *.stories.js
const story = require.context('../src/stories', true, /\.stories\.tsx$/);

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

configure(story, module);
