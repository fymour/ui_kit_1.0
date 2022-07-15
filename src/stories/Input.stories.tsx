import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Empty',
    placeholder: 'Enter your value',
    size:'medium',
}
export const Small = Template.bind({});
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