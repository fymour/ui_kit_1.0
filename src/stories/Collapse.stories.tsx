import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Collapse } from '../Collapse/Collapse';

export default {
    title: 'Example/Collapse',
    component: Collapse,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  } as ComponentMeta<typeof Collapse>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Collapse> = (args) => <Collapse {...args} />;
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    children: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. ',
    header:'Здесь находится текст с функцией заголовка'
  };
  