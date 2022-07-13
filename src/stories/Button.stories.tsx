import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'Default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Default',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Default',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Default',
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Defalut',
};
