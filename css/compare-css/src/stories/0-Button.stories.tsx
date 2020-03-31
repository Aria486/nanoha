/* eslint-disable import/first */
import * as React from 'react';
import Button from '../components/Button';
import ModuleButton from '../components/ModuleButton';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Button',
};

storiesOf('Button', module).add('default view', () => (
  <Button text="default" />
));

storiesOf('ModuleButton', module).add('default view', () => (
  <ModuleButton text="default" />
));

export const textButton = () => <Button text="测试"/>;
