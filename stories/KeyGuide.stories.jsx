import React from 'react';

import { KeyGuide } from './KeyGuide';
import {Secondary} from "./Button.stories";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/KeyGuide',
  component: KeyGuide,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <KeyGuide {...args} />;

export const DemoKey = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DemoKey.args = {
  children: [
    {key: 1, text: 'Item 0'},
    {key: 2, text: 'Item 1'},
    {key: 3, text: 'Item 2'},
    {key: 4, text: 'Item 3'}
  ]
};

