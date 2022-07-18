import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from '../Tabs/Tabs';

export default {
  title: 'Example/Input',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  Tab: {
    children: 'Tab',
    label: ''
  },
  Panel: {
    children: 'panel Tab',
    label: ''
  },

}
