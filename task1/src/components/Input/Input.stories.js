import React from 'react';
import InputComponent from './Input';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import TextField from '@material-ui/core/TextField';

export default {
    component: InputComponent,
    title: 'Input',
    decorators: [withKnobs],
};


export const Name = () => {
    return (<TextField error={boolean("Error", false)}
                       disabled={boolean("Disabled", false)}
                       placeholder={text("Placeholder", "First Name")}
                       helperText={text("Helper Text", "Some error occurs")}
                       value={text("Value", "")}
                       label={text("Label", 'Enter your name')}
                       variant={select("Background", {'Outlined': 'outlined', 'filled':'filled', 'Standard': 'standard'}, 'filled')}
    />);
}






