// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  component: Button,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  // excludeStories: /.*Data$/,
};



export const TestNutton = () => <Button>Hello Button</Button>;


