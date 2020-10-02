import React from 'react';

import { Typography } from './index';

export default {
    title: 'Typography',
    component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tag: 'h1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    tag: 'h2',
};

export const Large = Template.bind({});
Large.args = {
    tag: 'h3'
};

export const Small = Template.bind({});
Small.args = {
    tag: 'h4'
};
