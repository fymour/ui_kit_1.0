import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../Input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Empty',
    placeholder: 'Enter your value',
    size:'medium',
    onchange
}
export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
    label: 'Empty',
    placeholder: 'Enter your value',
    size:'small'
}
export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
    label: 'Empty',
    placeholder: 'Enter your value',
    size:'large'
}