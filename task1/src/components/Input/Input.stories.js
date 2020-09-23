import React from 'react';
import InputComponent from './Input';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import TextField from '@material-ui/core/TextField';

export default {
    component: InputComponent,
    title: 'Input',
    decorators: [withKnobs],
};

const Template = args => {
    return <InputComponent disabled={boolean('Disabled', false)} {...args} />;
}

export const Name = () => <TextField error={boolean("Error", false)}
                                     disabled={boolean("Disabled", false)}
                                     placeholder={text("Placeholder", "First Name")}
                                     helperText={text("Error Text", "Some error occurs")}
                                     value={text("Value", "")}
/>



