import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Button from '@material-ui/core/Button';
import ButtonComponent from "../Button/Button";


export default {
    component: ButtonComponent,
    title: 'Button',
    decorators: [withKnobs],
};

export const Primary = () => {
    return (<Button disabled={boolean('Disabled', false)}
                    color={select('Color', {'Primary': 'primary', 'Secondary': 'secondary'}, 'primary')}
                    color={select('Color', {'Primary': 'primary', 'Secondary': 'secondary'}, 'primary')}
                    variant={select("Background", {'Outlined': 'outlined', 'Contained':'contained', 'Text': 'text'}, 'outlined')}
    >
        {text('Text', 'Submit')}
    </Button>);
}






