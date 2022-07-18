import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollArea } from '../ScrollArea/ScrollArea';

export default {
  title: 'Example/ScrollArea',
  component: ScrollArea,
} as ComponentMeta<typeof ScrollArea>;

const Template: ComponentStory<typeof ScrollArea> = (args) => <ScrollArea {...args} />;

export const ScrollBar = Template.bind({});
ScrollBar.args = {
}