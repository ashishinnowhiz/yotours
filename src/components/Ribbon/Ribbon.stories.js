// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Ribbon from './Ribbon';

export default {
  component: Ribbon,
  title: 'Ribbon',
  // Our exports that end in "Data" are not stories.
  // excludeStories: /.*Data$/,
};



export const RibbonDefault = () => <Ribbon title="50%" caption="off" ></Ribbon>;


