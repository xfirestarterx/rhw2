import React from 'react';
import Button from '../../components/Button/Button';
import { buttonThemes } from '../../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Confirm = Template.bind({});
Confirm.args = {
  theme: buttonThemes.confirm,
};

export const Dismiss = Template.bind({});
Dismiss.args = {
  theme: buttonThemes.dismiss,
};

export const Default = Template.bind({});
Default.args = {
  theme: buttonThemes.default,
};
