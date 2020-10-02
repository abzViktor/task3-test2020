import React from 'react';

import { Typography } from './index';
import './Typography.css';


export default {
    title: 'Typography',
    component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Heading_1 = Template.bind({});
Heading_1.args = {
    tag: 'h1',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-1-desktop'
};
Heading_1.argTypes = {
    tag: { control: { disable: true } },
    className: { control: {disable: true}}
};

export const Heading_2 = Template.bind({});
Heading_2.args = {
    tag: 'h2',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-2-desktop'
};
Heading_2.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_3 = Template.bind({});
Heading_3.args = {
    tag: 'h3',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-3-desktop'
};
Heading_3.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_4 = Template.bind({});
Heading_4.args = {
    tag: 'h4',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-4-desktop'
};
Heading_4.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_5 = Template.bind({});
Heading_5.args = {
    tag: 'h5',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-5-desktop'
};
Heading_5.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_1_Tab = Template.bind({});
Heading_1_Tab.args = {
    tag: 'h1',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-1-tablet'
};
Heading_1_Tab.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_1_Mob = Template.bind({});
Heading_1_Mob.args = {
    tag: 'h1',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-1-mobile'
};
Heading_1_Mob.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_2_Mob = Template.bind({});
Heading_2_Mob.args = {
    tag: 'h2',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-2-mobile'
};
Heading_2_Mob.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_3_Mob = Template.bind({});
Heading_3_Mob.args = {
    tag: 'h3',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-3-mobile'
};
Heading_3_Mob.argTypes = {
    ...Heading_1.argTypes
}

export const Heading_5_Mob = Template.bind({});
Heading_5_Mob.args = {
    tag: 'h5',
    text: 'The quick brown fox jumps over the lazy dog.',
    className: 'heading-5-mobile'
};
Heading_5_Mob.argTypes = {
    ...Heading_1.argTypes
}

export const Paragraph_1 = Template.bind({});
Paragraph_1.args = {
    tag: 'p',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
        ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
        'esse cillum dolore eu fugiat nulla pariatur. ',
    className: 'paragraph-1'
};
Paragraph_1.argTypes = {
    ...Heading_1.argTypes
}

export const Paragraph_2 = Template.bind({});
Paragraph_2.args = {
    tag: 'p',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
        ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
        'esse cillum dolore eu fugiat nulla pariatur. ',
    className: 'paragraph-2'
};
Paragraph_2.argTypes = {
    ...Heading_1.argTypes
}

export const Paragraph_3 = Template.bind({});
Paragraph_3.args = {
    tag: 'p',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
        ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
        'esse cillum dolore eu fugiat nulla pariatur. ',
    className: 'paragraph-3'
};
Paragraph_3.argTypes = {
    ...Heading_1.argTypes
}

