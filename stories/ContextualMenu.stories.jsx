import React from 'react';

import { ContextualMenu } from './ContextualMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/ContextualMenu',
	component: ContextualMenu,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContextualMenu {...args} />;

export const DemoKey = Template.bind({});