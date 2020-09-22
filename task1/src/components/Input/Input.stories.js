import React from 'react';
import InputComponent from './Input';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";

export default {
    component: InputComponent,
    title: 'Input',
    decorators: [withKnobs],
};

const Template = args => {
    // eslint-disable-next-line no-unused-expressions
    return <InputComponent {...args} />;
}

export const Name = Template.bind({});

Name.args = {
    input: {
        placeholder: 'First Name',
        type: 'name'
    },
};

export const Email = Template.bind({});

Email.args = {
    input: {
        placeholder: 'Email',
        type: 'email'
    }
}

export const WorkerId = Template.bind({});

WorkerId.args = {
    input: {
        placeholder: 'Worker Id',
        type: 'workerId'
    }
}


