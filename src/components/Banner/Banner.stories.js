// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from './Header';

export default {
  component: Header,
  title: 'Header',
  // Our exports that end in "Data" are not stories.
  // excludeStories: /.*Data$/,
};
export const HeaderDefault = () => <Header title="50%" caption="off" ></Header>;