import React from 'react';

import { AlertComponent } from './Alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Alert',
  component: AlertComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AlertComponent {...args} />;

export const main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
main.args = {
  severity: 'success',
  label: 'This is a success alert — check it out!',
};
