import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import Colors from './Colors';

export default {
    component: Colors,
    title: 'Colors',
    decorators: [withKnobs],
};

export const Block = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <div
        className={select('Color',{Primary: 'primary,', Secondary: 'secondary', Background: 'background'}, 'secondary')}
    />
);



